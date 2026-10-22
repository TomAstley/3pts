import { montserrat } from "./fonts";

import IntroAnimation from "@/components/IntroAnimation/introAnimation";
import ScrollIndicator from "@/components/ScrollIndicator/scrollIndicator";
import About from "@/components/About/about";
import Services from "@/components/Services/services";
import Clients from "@/components/Clients/clients";
import DiagonalStripes from "@/components/DiagonalStripes/diagonalStripes";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <section
        aria-labelledby="hero-heading"
        className="relative isolate flex justify-center items-center flex-col min-h-screen px-5 animate-fade-in"
      >
        <DiagonalStripes />
        <h1 className="text-center">
          <span
            id="hero-heading"
            className={`${montserrat.className} block text-3xl sm:text-6xl uppercase`}
          >
            Communicate in <strong>Threes</strong>
          </span>
          <span
            className={`${montserrat.className} block text-2xl my-9 max-w-xl mx-auto`}
          >
            Fractional CMO services for the buy side, sell side, and liquidity
            networks
          </span>
        </h1>
        <a
          href="#contact"
          className={`${montserrat.className} uppercase tracking-widest text-sm font-bold bg-threepts-indigo text-white px-8 py-4 rounded-md hover:bg-threepts-indigo-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
        >
          Let&apos;s Talk
        </a>
        <ScrollIndicator afterIntro />
      </section>
      <About />
      <Services />
      <Clients />
    </>
  );
}
