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
        <h1
          id="hero-heading"
          className={`${montserrat.className} text-3xl sm:text-6xl uppercase text-center`}
        >
          Communicate in <strong>Threes</strong>
        </h1>
        <p
          className={`${montserrat.className} text-2xl my-9 text-center max-w-xl`}
        >
          Fractional CMO services for the buy side, sell side, and liquidity
          networks
        </p>
        <a
          href="#contact"
          className={`${montserrat.className} uppercase tracking-widest text-sm font-bold bg-threepts-green text-black px-8 py-4 rounded-lg hover:bg-threepts-dark-green hover:text-white transition-colors`}
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
