"use client";

import { useState } from "react";
import { montserrat } from "@/app/fonts";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between w-full h-30 px-8 bg-white shadow-md fixed animate-nav-slide-in z-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/3pts-logo.svg" alt="Logo" width={273} height={61} className="h-24 w-auto" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-3 text-lg font-semibold">
          <a href="#about" className="text-[#026938] hover:underline">About</a>
          <span>/</span>
          <a href="#services" className="text-[#026938] hover:underline">Marketing Services</a>
          <span>/</span>
          <a href="#clients" className="text-[#026938] hover:underline">Clients</a>
          <span>/</span>
          <a href="#contact" className="text-[#026938] hover:underline">Contact</a>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-7 h-0.5 bg-[#026938]" />
          <span className="block w-7 h-0.5 bg-[#026938]" />
          <span className="block w-7 h-0.5 bg-[#026938]" />
        </button>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-100 bg-threepts-green flex flex-col px-8 py-10">
          {/* Close button */}
          <button
            className="self-end w-10 h-10 flex items-center justify-center"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <span className="block relative w-7 h-7">
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white rotate-45 -translate-y-1/2" />
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white -rotate-45 -translate-y-1/2" />
            </span>
          </button>

          <nav className="flex flex-col gap-8 mt-16">
            <a href="#about" onClick={() => setOpen(false)} className={`${montserrat.className} text-white text-4xl uppercase font-bold`}>About</a>
            <a href="#services" onClick={() => setOpen(false)} className={`${montserrat.className} text-white text-4xl uppercase font-bold`}>Marketing Services</a>
            <a href="#clients" onClick={() => setOpen(false)} className={`${montserrat.className} text-white text-4xl uppercase font-bold`}>Clients</a>
            <a href="#contact" onClick={() => setOpen(false)} className={`${montserrat.className} text-white text-4xl uppercase font-bold`}>Contact</a>
          </nav>
        </div>
      )}
    </>
  );
}
