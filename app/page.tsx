import { montserrat } from "./fonts";

import IntroAnimation from "@/components/IntroAnimation/introAnimation";
import ScrollIndicator from "@/components/ScrollIndicator/scrollIndicator";
import About from "@/components/About/about";
import Services from "@/components/Services/services";
import Clients from "@/components/Clients/clients";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <div className="relative flex justify-center items-center flex-col h-screen opacity-0 animate-fade-in">
        <h1 className={`${montserrat.className} text-5xl uppercase`}>
          Communicate in <strong>Threes</strong>
        </h1>
        <p className={`${montserrat.className} text-xl mt-4 text-center max-w-xl`}>
          Adipisicing dolore mollit dolor ad proident in cupidatat consequat
          nostrud culpa anim nostrud dolore.
        </p>
        <ScrollIndicator />
      </div>
      <About />
      <Services />
      <Clients />
    </>
  );
}
