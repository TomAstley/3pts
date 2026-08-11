import Image from "next/image";
import { montserrat } from "./fonts";

import IntroAnimation from "@/components/IntroAnimation/introAnimation";
import ScrollIndicator from "@/components/ScrollIndicator/scrollIndicator";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <div className="relative flex justify-center items-center flex-col h-screen opacity-0 animate-fade-in">
        <h1 className={`${montserrat.className} text-5xl uppercase`}>
          Communicate in <strong>Threes</strong>
        </h1>
        <p
          className={`${montserrat.className} text-xl mt-4 text-center max-w-xl`}
        >
          Adipisicing dolore mollit dolor ad proident in cupidatat consequat
          nostrud culpa anim nostrud dolore.
        </p>

        <ScrollIndicator />
      </div>
      <div className="relative flex justify-center  flex-col h-screen bg-threepts-green">
        <div className="flex justify-center items-center px-8 gap-8 max-w-7xl">
          <div>
            <h2
              className={`${montserrat.className} text-5xl uppercase text-white`}
            >
              Meet Drew
            </h2>
            <p className="py-4">
              Laboris sint tempor irure et. Do tempor ut qui tempor ea enim
              veniam qui in sint magna. Consequat est fugiat do anim qui
              pariatur mollit. Pariatur Lorem laboris aliqua mollit nulla
              consequat eiusmod labore.
            </p>
          </div>
          <Image
            src="/drew.jpg"
            alt="Drew"
            width={400}
            height={400}
            className="mx-auto mt-8 border-8 border-white rounded-4xl shadow-2xl"
          />
         
        </div>
         <ScrollIndicator white />
      </div>
      <div className="flex justify-center  flex-col h-screen">
        <div className="flex justify-center items-center px-4 gap-8 max-w-7xl">
          <div>
            <h2
              className={`${montserrat.className} text-5xl uppercase text-black`}
            >
              Capital Markets
            </h2>
          </div>
        </div>
        
      </div>
    </>
  );
}
