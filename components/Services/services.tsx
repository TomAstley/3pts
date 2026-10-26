import { montserrat } from "@/app/fonts";
import SectionHeading from "@/components/SectionHeading/sectionHeading";
import ScrollIndicator from "@/components/ScrollIndicator/scrollIndicator";
import DiagonalStripes from "@/components/DiagonalStripes/diagonalStripes";

const services = [
  "Brand Blueprints",
  "CEO Branding",
  "Content Marketing",
  "Industry Connections",
  "Internal Communications",
  "Media Buying",
  "Media Relations",
  "Mission, Vision, Values",
  "Social Media",
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate flex justify-center flex-col min-h-[calc(100svh-var(--anchor-offset))] pt-20 pb-28 sm:short:pt-12 sm:short:pb-20"
    >
      <DiagonalStripes />
      <SectionHeading id="services-heading" tone="dark">Services</SectionHeading>
      <ul className="grid lg:grid-cols-[auto_auto_auto] justify-center gap-y-4 sm:gap-y-0">
        {services.map((service, i) => (
          <li
            key={service}
            className={`${montserrat.className} text-xl sm:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl uppercase text-black/85 leading-normal sm:leading-20 xl:leading-25 2xl:leading-30 3xl:leading-35 text-center lg:px-8 ${i % 3 !== 0 ? "lg:border-l-2 lg:border-threepts-green" : ""}`}
          >
            {service}
          </li>
        ))}
      </ul>
      <ScrollIndicator alwaysVisible />
    </section>
  );
}
