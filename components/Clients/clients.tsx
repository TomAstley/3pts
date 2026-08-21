/* eslint-disable @next/next/no-img-element */
"use client";

import { montserrat } from "@/app/fonts";

export default function Clients() {
  return (
    <div
      id="clients"
      className="flex flex-col items-center justify-center w-full min-h-screen bg-black/20 px-6 py-20"
    >
      <div className="w-full max-w-2xl">
        <h2
          className={`${montserrat.className} text-4xl uppercase text-white mb-2 font-bold`}
        >
          Clients
        </h2>
        <p className={`${montserrat.className} mb-12 text-black`}>
          Minim ullamco laboris sunt laborum do anim fugiat ea. Veniam
          consectetur nulla est ex culpa aliqua qui sint laborum aliqua duis qui
          eiusmod sint. Aliquip magna occaecat ad dolor non non ad proident
          adipisicing pariatur labore do amet.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <img
              src="/client-logos/rheaply-logo-h.svg"
              alt="Rheaply logo"
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="/client-logos/rheaply-logo-h.svg"
              alt="Rheaply logo"
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="/client-logos/rheaply-logo-h.svg"
              alt="Rheaply logo"
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="/client-logos/rheaply-logo-h.svg"
              alt="Rheaply logo"
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="/client-logos/rheaply-logo-h.svg"
              alt="Rheaply logo"
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="/client-logos/rheaply-logo-h.svg"
              alt="Rheaply logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
