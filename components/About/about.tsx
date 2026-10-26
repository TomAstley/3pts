import Image from "next/image";
import { montserrat } from "@/app/fonts";
import ScrollIndicator from "@/components/ScrollIndicator/scrollIndicator";
import SectionHeading from "@/components/SectionHeading/sectionHeading";
import DiagonalStripes from "@/components/DiagonalStripes/diagonalStripes";

const stats = [
  { value: "25+", label: "Years in fintech marketing" },
  { value: "15+", label: "Years running a PR firm" },
  { value: "2+", label: "Years as a fractional CMO" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate flex justify-center flex-col min-h-[calc(100svh-var(--anchor-offset))] bg-threepts-green pt-36 pb-28 md:pt-8 md:pb-24 md:short:pb-16"
    >
      <DiagonalStripes flip colorClassName="bg-white/4" />
      <SectionHeading id="about-heading" tone="ink">
        About
      </SectionHeading>
      <div className="flex flex-col md:flex-row justify-center items-center px-8 gap-12 md:gap-16 max-w-7xl mx-auto">
        <div className="relative w-full max-w-70 md:max-w-100 md:short:max-w-85 shrink-0 md:mt-8 md:short:mt-0">
          <Image
            src="/drew.jpg"
            alt="Portrait of Drew"
            width={400}
            height={400}
            className="relative w-full h-auto border-8 border-white rounded-4xl shadow-2xl"
          />
        </div>
        <div className={montserrat.className}>
          <p className="text-2xl md:text-3xl font-bold leading-snug text-black/85 text-balance">
            Industry expertise is my competitive advantage.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I&apos;m a marketing and communications professional with 25+ years
            of finance experience. After building and operating a highly
            effective public relations firm, I now partner with clients as a
            fractional CMO. I either augment the marketing function or lead it.
          </p>
          <dl className="mt-5 grid grid-cols-3 gap-4 border-t-2 border-black/20 pt-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-xs sm:text-sm uppercase tracking-wide leading-snug">
                  {label}
                </dt>
                <dd className="text-3xl sm:text-4xl font-bold text-black/85">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <a
            href="#contact"
            className="mt-5 inline-block uppercase tracking-widest text-sm font-bold bg-threepts-indigo text-white px-8 py-4 rounded-md hover:bg-threepts-indigo-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
      <ScrollIndicator ink />
    </section>
  );
}
