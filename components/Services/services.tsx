import { montserrat } from "@/app/fonts";

export default function Services() {
  return (
    <div id="services" className="flex justify-center flex-col h-screen">
      <div className="flex justify-center items-center px-4 gap-8">
        <div className="border-12 border-[#026938] rounded-4xl p-4 sm:p-16 flex flex-col gap-4 justify-center items-center">
          <h2
            className={`${montserrat.className} text-2xl sm:text-5xl uppercase text-black leading-normal sm:leading-20`}
          >
            Capital Markets
          </h2>
          <h2
            className={`${montserrat.className} text-2xl sm:text-5xl uppercase text-black leading-normal sm:leading-20`}
          >
            Fractional CMO
          </h2>
          <h2
            className={`${montserrat.className} text-2xl sm:text-5xl uppercase text-black leading-normal sm:leading-20`}
          >
            Media Relations
          </h2>
        </div>
      </div>
    </div>
  );
}
