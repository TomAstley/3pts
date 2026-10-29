"use server";

import { SeverityNumber } from "@opentelemetry/api-logs";
import { headers } from "next/headers";
import { after } from "next/server";
import { Resend } from "resend";
import { contactFormLogger, posthogLogProvider } from "@/instrumentation";

export type ContactValues = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  values?: ContactValues;
};

const LIMITS = { name: 100, company: 150, email: 254, message: 2000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort limiter: state is per server instance, so on serverless it
// slows bots but is not a hard guarantee.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 3;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 1000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

const field = (formData: FormData, key: string, max: number) =>
  String(formData.get(key) ?? "").slice(0, max);

const singleLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

function logContactForm(
  severityNumber: SeverityNumber,
  body: string,
  attributes: Record<string, string>
) {
  contactFormLogger?.emit({ body, severityNumber, attributes });

  const logProvider = posthogLogProvider;
  if (logProvider) {
    after(async () => {
      await logProvider.forceFlush();
    });
  }
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: real users never see or fill this field.
  if (formData.get("website")) return { status: "success" };

  const values: ContactValues = {
    name: singleLine(field(formData, "name", LIMITS.name)),
    company: singleLine(field(formData, "company", LIMITS.company)),
    email: singleLine(field(formData, "email", LIMITS.email)),
    message: field(formData, "message", LIMITS.message),
  };
  const { name, company, email, message } = values;

  const missing = [
    !name && "name",
    !email && "email",
  ].filter(Boolean);

  if (missing.length > 0) {
    logContactForm(
      SeverityNumber.WARN,
      "contact_form_rejected",
      { reason: "required_fields_missing" }
    );
    return {
      status: "error",
      message: `Please fill in: ${missing.join(", ")}.`,
      values,
    };
  }

  if (!EMAIL_RE.test(email)) {
    logContactForm(
      SeverityNumber.WARN,
      "contact_form_rejected",
      { reason: "invalid_email_format" }
    );
    return {
      status: "error",
      message: "Please enter a valid email address.",
      values,
    };
  }

  const { RESEND_API_KEY, CONTACT_EMAIL, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_EMAIL || !CONTACT_FROM) {
    const unset = Object.entries({ RESEND_API_KEY, CONTACT_EMAIL, CONTACT_FROM })
      .filter(([, v]) => !v)
      .map(([k]) => k);
    console.error(`Contact form misconfigured: missing ${unset.join(", ")}.`);
    logContactForm(
      SeverityNumber.ERROR,
      "contact_form_delivery_unavailable",
      { reason: "email_delivery_configuration_missing" }
    );
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
      values,
    };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    logContactForm(
      SeverityNumber.WARN,
      "contact_form_rate_limited",
      { limiter: "contact_form" }
    );
    return {
      status: "error",
      message: "Too many requests. Please try again in a few minutes.",
      values,
    };
  }

  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `New inquiry from ${name}${company ? ` at ${company}` : ""}`,
    text: `Name: ${name}\nCompany: ${company || "—"}\nEmail: ${email}\n\nMessage:\n${message.trim() || "—"}`,
  });

  if (error) {
    console.error("Resend error:", error);
    logContactForm(
      SeverityNumber.ERROR,
      "contact_form_delivery_failed",
      { provider: "resend" }
    );
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
      values,
    };
  }

  logContactForm(
    SeverityNumber.INFO,
    "contact_form_delivered",
    { provider: "resend" }
  );
  return { status: "success" };
}
