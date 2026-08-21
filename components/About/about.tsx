import Image from "next/image";
import { montserrat } from "@/app/fonts";
import ScrollIndicator from "@/components/ScrollIndicator/scrollIndicator";

export default function About() {
  return (
    <div id="about" className="relative flex justify-center flex-col h-screen bg-threepts-green">
      <div className="flex justify-center items-center px-8 gap-8 max-w-7xl mx-auto">
        <div>
          <h2 className={`${montserrat.className} text-5xl uppercase text-white font-bold`}>
            Meet Drew
          </h2>
          <p className={`${montserrat.className} py-4`}>
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
  );
}
