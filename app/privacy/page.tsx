import type { Metadata } from "next";
import Link from "next/link";
import { montserrat } from "../fonts";
import { SITE_NAME } from "../site";

const TITLE = `Privacy Policy | ${SITE_NAME}`;
const DESCRIPTION = `How ${SITE_NAME} collects, uses, and protects information submitted through this website.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    url: "/privacy",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const h2Class = `${montserrat.className} text-xl font-bold uppercase tracking-wide text-threepts-dark-green mt-10 mb-3`;
const pClass = "mt-3 leading-relaxed";

export default function PrivacyPolicy() {
  return (
    <article
      aria-labelledby="privacy-heading"
      className={`${montserrat.className} w-full max-w-3xl mx-auto px-6 pt-[calc(var(--anchor-offset)+3rem)] pb-20 text-black/85`}
    >
      <h1
        id="privacy-heading"
        className="text-3xl sm:text-4xl font-bold uppercase tracking-wide"
      >
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-black/70">Last updated: October 29, 2026</p>

      <p className={pClass}>
        This policy explains what information {SITE_NAME} (&ldquo;we,&rdquo;
        &ldquo;us&rdquo;) collects through this website, how we use it, and the
        choices you have. This is a marketing website. We collect personal
        information you choose to send us through the contact form, and we use
        an analytics service to understand how the site is used.
      </p>

      <h2 className={h2Class}>Information we collect</h2>
      <p className={pClass}>
        <strong>Contact form.</strong> When you use the &ldquo;Let&rsquo;s
        Talk&rdquo; form, we collect the information you enter: your name,
        company (optional), email address, and message (optional).
      </p>
      <p className={pClass}>
        <strong>Technical information.</strong> When you submit the form, we
        briefly use your IP address to limit the number of submissions from a
        single source and reduce spam. This is held temporarily in the memory of
        our server and is not stored in a database or included in the email we
        receive. Our hosting provider may also keep standard server logs (such as
        IP address, browser type, and pages requested) for security and
        operational purposes.
      </p>
      <p className={pClass}>
        <strong>Analytics and usage information.</strong> When you visit the
        site, we use PostHog, a product analytics service, to collect
        information about your visit: the pages you view, your clicks and
        interactions, your approximate location derived from your IP address,
        your device, browser, and operating system, the site that referred you,
        and an anonymous identifier stored in your browser. We also use PostHog
        to record sessions, which are replays of how you move through and
        interact with the pages, and to capture technical errors. The text you
        type into form fields, including the contact form, is masked and is not
        included in these recordings. We do not use this data to identify you
        personally.
      </p>

      <h2 className={h2Class}>How we use your information</h2>
      <p className={pClass}>
        We use the information you submit only to read and respond to your
        inquiry and to discuss potential work together. We use analytics and
        session recordings to understand how visitors use the site, fix errors,
        and improve it. We do not sell your information, and we do not use it
        for advertising.
      </p>

      <h2 className={h2Class}>How your information is shared</h2>
      <p className={pClass}>
        Your submission is sent as an email to a single recipient at{" "}
        {SITE_NAME}. To deliver it, we use Resend, an email delivery service that
        processes the message on our behalf. We use PostHog, which processes
        analytics, session recordings, and error reports on our behalf and
        stores that data in the United States. Our website is hosted by a
        third-party hosting provider. These providers handle data only as needed
        to provide their services to us. We may also disclose information if
        required by law.
      </p>

      <h2 className={h2Class}>Cookies and local storage</h2>
      <p className={pClass}>
        This site does not use advertising cookies or advertising trackers.
        PostHog stores an anonymous identifier in a cookie and in your
        browser&rsquo;s local storage so that it can recognize repeat visits
        and link your page views together into a session. The site also stores
        one small value in local storage, a counter of how many times you have
        seen the opening animation, so that the animation stops playing on
        repeat visits; this value stays on your device and is never sent to
        us. You can clear cookies and local storage at any time through your
        browser settings, or block them, and the site will continue to work.
      </p>

      <h2 className={h2Class}>Retention</h2>
      <p className={pClass}>
        Contact form messages are kept in our email inbox for as long as needed
        to respond to your inquiry and to maintain a record of our business
        communications. You can ask us to delete your messages at any time.
      </p>

      <h2 className={h2Class}>Your choices and rights</h2>
      <p className={pClass}>
        You may ask us to tell you what personal information we hold about you,
        or to correct or delete it. Depending on where you live, you may have
        additional rights under local privacy laws. To make a request, contact
        us using the form on our{" "}
        <Link
          href="/#contact"
          className="underline text-threepts-dark-green hover:text-black"
        >
          home page
        </Link>{" "}
        and we will respond promptly.
      </p>

      <h2 className={h2Class}>Security</h2>
      <p className={pClass}>
        We take reasonable steps to protect your information, including
        transmitting form submissions over an encrypted connection. No method of
        transmission or storage is completely secure, so we cannot guarantee
        absolute security.
      </p>

      <h2 className={h2Class}>Children</h2>
      <p className={pClass}>
        This website is intended for business audiences and is not directed to
        children under 13. We do not knowingly collect information from children.
      </p>

      <h2 className={h2Class}>Changes to this policy</h2>
      <p className={pClass}>
        We may update this policy from time to time. The &ldquo;Last
        updated&rdquo; date above shows when it was most recently revised.
      </p>
    </article>
  );
}
