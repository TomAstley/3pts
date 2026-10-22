import Image from "next/image";
import { montserrat } from "@/app/fonts";
import ScrollIndicator from "@/components/ScrollIndicator/scrollIndicator";
import SectionHeading from "@/components/SectionHeading/sectionHeading";
import DiagonalStripes from "@/components/DiagonalStripes/diagonalStripes";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate flex justify-center flex-col min-h-screen bg-threepts-green pt-36 pb-28 md:pt-8 md:pb-8"
    >
      <DiagonalStripes flip colorClassName="bg-white/4" />
      <SectionHeading id="about-heading" tone="ink">About</SectionHeading>
      <div className="flex flex-col md:flex-row justify-center items-center px-8 gap-8 max-w-7xl mx-auto">
        <Image
          src="/drew.jpg"
          alt="Portrait of Drew"
          width={400}
          height={400}
          className="w-full max-w-[280px] md:max-w-[400px] h-auto md:mt-8 border-8 border-white rounded-4xl shadow-2xl"
        />
        <div>
          <p className={`${montserrat.className} py-4 text-lg leading-relaxed`}>
            I am a marketing and communications professional with 25+ years of
            finance experience. After a decade+ of building and operating a
            highly effective public relations firm, I now partner with clients
            as a fractional CMO. My competitive advantage is industry domain
            expertise, and I either augment the marketing function or lead it.
          </p>
        </div>
      </div>
      <ScrollIndicator ink />
    </section>
  );
}
