"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactValues = {
  name: string;
  company: string;
  email: string;
  interest: string;
};

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  values?: ContactValues;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const values: ContactValues = {
    name: (formData.get("name") as string) ?? "",
    company: (formData.get("company") as string) ?? "",
    email: (formData.get("email") as string) ?? "",
    interest: (formData.get("interest") as string) ?? "",
  };
  const { name, company, email, interest } = values;

  const missing = [
    !name && "first name",
    !email && "email",
    !interest && "interest",
  ].filter(Boolean);

  if (missing.length > 0) {
    return {
      status: "error",
      message: `Please fill in: ${missing.join(", ")}.`,
      values,
    };
  }

  const { error } = await resend.emails.send({
    from: "3pts Contact Form <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `New inquiry from ${name}${company ? ` at ${company}` : ""}`,
    text: `Name: ${name}\nCompany: ${company || "—"}\nEmail: ${email}\nInterest: ${interest}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
      values,
    };
  }

  return { status: "success" };
}
