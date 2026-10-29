/* eslint-disable @next/next/no-img-element */
"use client";

import SectionHeading from "@/components/SectionHeading/sectionHeading";
import ScrollIndicator from "@/components/ScrollIndicator/scrollIndicator";
import DiagonalStripes from "@/components/DiagonalStripes/diagonalStripes";

// Mobile: fixed height per logo, tuned to its proportions so they carry similar visual weight.
// sm+: original behavior (full cell width, capped height).
const logos = [
  { src: "CHX_logo.png", alt: "CHX", href: "https://www.txse.com/", size: "h-16 sm:h-auto sm:max-h-18" },
  { src: "ice-logo.svg", alt: "Intercontinental Exchange", href: "https://www.ice.com", size: "h-18 sm:h-auto sm:max-h-20" },
  { src: "SpiderRock-Logo-Horizontal-Color-updated.svg", alt: "SpiderRock", href: "https://spiderrock.net/", size: "h-14 sm:h-auto sm:max-h-20" },
  { src: "copper.svg", alt: "Copper", href: "https://copper.co", size: "h-11 sm:h-auto sm:max-h-10" },
  { src: "drw.svg", alt: "DRW", href: "https://drw.com", size: "h-11 sm:h-auto sm:max-h-10" },
  { src: "logo-tt-full.svg", alt: "Trading Technologies", href: "https://tradingtechnologies.com", size: "h-10 sm:h-auto sm:max-h-20" },
  { src: "memx.svg", alt: "MEMX", href: "https://memx.com", size: "h-12 sm:h-auto sm:max-h-12" },
  { src: "optionshouse-logo-e1512330098848.png", alt: "OptionsHouse", href: "https://www.generalatlantic.com/investment/optionshouse/", size: "h-10 sm:h-auto sm:max-h-10" },
  { src: "transient-logo-on-dark.svg", alt: "Transient", href: "https://www.transient.ai/", size: "h-16 sm:h-auto sm:max-h-20" },
];

export default function Clients() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="relative isolate flex flex-col items-center justify-center w-full min-h-[calc(100svh-var(--anchor-offset))] bg-[#4bbc94] px-3 pt-20 pb-28 sm:short:pt-12 sm:short:pb-20"
    >
      <DiagonalStripes flip colorClassName="bg-white/4" />
      <div className="w-full max-w-6xl">
        <SectionHeading id="clients-heading" tone="ink">Clients</SectionHeading>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 gap-y-[24px] sm:gap-8 sm:gap-y-[58px] sm:short:gap-4 sm:short:gap-y-[29px]">
          {logos.map((logo) => (
            <li
              key={logo.src}
              className="flex items-center justify-center min-w-0 px-2 sm:px-4 py-3 sm:py-6 sm:short:py-3"
            >
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center max-w-full sm:w-full transition-opacity hover:opacity-70 focus-visible:opacity-70"
              >
                <img
                  src={`/client-logos/${logo.src}`}
                  alt={logo.alt}
                  className={`${logo.size} w-auto sm:w-full max-w-full object-contain brightness-0`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ScrollIndicator ink />
    </section>
  );
}
