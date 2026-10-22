/* eslint-disable @next/next/no-img-element */
"use client";

import SectionHeading from "@/components/SectionHeading/sectionHeading";
import ScrollIndicator from "@/components/ScrollIndicator/scrollIndicator";
import DiagonalStripes from "@/components/DiagonalStripes/diagonalStripes";

// Mobile: fixed height per logo, tuned to its proportions so they carry similar visual weight.
// sm+: original behavior (full cell width, capped height).
const logos = [
  { src: "CHX_logo.png", alt: "CHX", size: "h-16 sm:h-auto sm:max-h-18" },
  { src: "ice-logo.svg", alt: "Intercontinental Exchange", size: "h-18 sm:h-auto sm:max-h-20" },
  { src: "SpiderRock-Logo-Horizontal-Color-updated.svg", alt: "SpiderRock", size: "h-14 sm:h-auto sm:max-h-20" },
  { src: "copper.svg", alt: "Copper", size: "h-11 sm:h-auto sm:max-h-10" },
  { src: "drw.svg", alt: "DRW", size: "h-11 sm:h-auto sm:max-h-10" },
  { src: "logo-tt-full.svg", alt: "Trading Technologies", size: "h-10 sm:h-auto sm:max-h-20" },
  { src: "memx.svg", alt: "MEMX", size: "h-12 sm:h-auto sm:max-h-12" },
  { src: "optionshouse-logo-e1512330098848.png", alt: "OptionsHouse", size: "h-10 sm:h-auto sm:max-h-10" },
  { src: "transient-logo-on-dark.svg", alt: "Transient", size: "h-16 sm:h-auto sm:max-h-20" },
];

export default function Clients() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="relative isolate flex flex-col items-center justify-center w-full min-h-screen bg-[#4bbc94] px-3 pt-20 pb-28"
    >
      <DiagonalStripes flip colorClassName="bg-white/4" />
      <div className="w-full max-w-6xl">
        <SectionHeading id="clients-heading" tone="ink">Clients</SectionHeading>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8">
          {logos.map((logo) => (
            <li
              key={logo.src}
              className="flex items-center justify-center min-w-0 px-2 sm:px-4 py-3 sm:py-6"
            >
              <img
                src={`/client-logos/${logo.src}`}
                alt={logo.alt}
                className={`${logo.size} w-auto sm:w-full max-w-full object-contain brightness-0`}
              />
            </li>
          ))}
        </ul>
      </div>
      <ScrollIndicator ink />
    </section>
  );
}
