"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import posthog from "posthog-js";
import { submitContact, ContactState } from "@/app/actions";
import { montserrat } from "@/app/fonts";
import SectionHeading from "@/components/SectionHeading/sectionHeading";

const inputClass = `${montserrat.className} w-full bg-white/5 border border-white/80 text-white px-4 py-3 rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline-threepts-green focus:border-threepts-green transition-colors`;
const labelClass = `${montserrat.className} block text-sm uppercase tracking-widest text-white/90 mb-2`;

const initial: ContactState = { status: "idle" };

export default function Intake() {
  const [state, action, pending] = useActionState(submitContact, initial);
  const id = useId();
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="flex flex-col items-center justify-center w-full min-h-[calc(100svh-var(--anchor-offset))] bg-black/85 px-6 py-20"
      >
        <div className="w-full max-w-2xl">
          <h2
            id="contact-heading"
            ref={successRef}
            tabIndex={-1}
            className={`${montserrat.className} text-4xl uppercase font-bold text-white mb-3.2 outline-none`}
          >
            Got it.
          </h2>
          <p className={`${montserrat.className} text-white/80`}>
            Thanks for reaching out — I&apos;ll be in touch shortly.
          </p>
        </div>
      </section>
    );
  }

  const values = state.values;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex flex-col items-center justify-center w-full min-h-[calc(100svh-var(--anchor-offset))] bg-black/85 px-6 py-20"
    >
      <div className="w-full max-w-2xl">
        <SectionHeading id="contact-heading" className="text-4xl sm:text-5xl">
          Let&apos;s Talk
        </SectionHeading>
        <p className={`${montserrat.className} text-white/80 mb-4 text-center`}>
          Fill out the form and I&apos;ll be in touch shortly.
        </p>
        <p className={`${montserrat.className} text-white/80 text-sm mb-12 text-center`}>
          Fields marked <span aria-hidden="true">*</span>
          <span className="sr-only">with an asterisk</span> are required.
        </p>

        <form
          action={action}
          onSubmit={() => posthog.capture("contact_form_submitted")}
          className="flex flex-col gap-6"
        >
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor={`${id}-website`}>Website</label>
            <input
              id={`${id}-website`}
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor={`${id}-name`} className={labelClass}>
              Name <span aria-hidden="true">*</span>
            </label>
            <input
              id={`${id}-name`}
              name="name"
              type="text"
              autoComplete="name"
              defaultValue={values?.name}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor={`${id}-company`} className={labelClass}>
              Company
            </label>
            <input
              id={`${id}-company`}
              name="company"
              type="text"
              autoComplete="organization"
              defaultValue={values?.company}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={`${id}-email`} className={labelClass}>
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              defaultValue={values?.email}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor={`${id}-message`} className={labelClass}>
              Message
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={5}
              maxLength={2000}
              defaultValue={values?.message}
              className={`${inputClass} resize-y`}
            />
          </div>

          {state.status === "error" && (
            <p role="alert" className={`${montserrat.className} text-red-400 text-sm`}>
              {state.message}
            </p>
          )}

          <button
            type="submit"
            aria-disabled={pending}
            onClick={(e) => {
              if (pending) e.preventDefault();
            }}
            className={`${montserrat.className} uppercase tracking-widest text-sm font-bold bg-threepts-indigo text-white px-8 py-4 rounded-md hover:bg-threepts-indigo-dark transition-colors mt-2 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
          >
            {pending ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
