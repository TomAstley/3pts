"use client";

import { useEffect, useRef, useState } from "react";
import { montserrat } from "@/app/fonts";

const mobileLinkClass = `${montserrat.className} text-black/85 text-4xl uppercase font-bold`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Native modal <dialog> handles focus trapping, Escape, inert background, and focus return.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="flex items-center justify-between w-full h-30 px-5 bg-white shadow-md fixed animate-nav-slide-in z-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/3pts-logo.svg"
          alt="Three Points Communications"
          width={273}
          height={61}
          className="h-15.5 md:h-20 w-auto"
        />

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center space-x-3 text-lg font-semibold"
        >
          <a href="#about" className="text-[#026938] hover:underline">
            About
          </a>
          <span aria-hidden="true" className="inline-block w-[2px] h-[25px] bg-[#4bbc94] rotate-[20deg]" />
          <a href="#services" className="text-[#026938] hover:underline">
            Marketing Services
          </a>
          <span aria-hidden="true" className="inline-block w-[2px] h-[25px] bg-[#4bbc94] rotate-[20deg]" />

          <a href="#clients" className="text-[#026938] hover:underline">
            Clients
          </a>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" className="block w-7 h-0.5 bg-[#026938]" />
          <span aria-hidden="true" className="block w-7 h-0.5 bg-[#026938]" />
          <span aria-hidden="true" className="block w-7 h-0.5 bg-[#026938]" />
        </button>
      </header>

      {/* Mobile menu */}
      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label="Menu"
        onClose={() => setOpen(false)}
        className="fixed inset-0 m-0 p-0 w-screen h-screen max-w-none max-h-none bg-threepts-green open:flex flex-col px-8 py-10"
      >
        <button
          className="self-end w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <span aria-hidden="true" className="block relative w-7 h-7">
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black rotate-45 -translate-y-1/2" />
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black -rotate-45 -translate-y-1/2" />
          </span>
        </button>

        <nav aria-label="Mobile" className="flex flex-col gap-8 mt-16">
          <a href="#about" onClick={() => setOpen(false)} className={mobileLinkClass}>
            About
          </a>
          <a href="#services" onClick={() => setOpen(false)} className={mobileLinkClass}>
            Marketing Services
          </a>
          <a href="#clients" onClick={() => setOpen(false)} className={mobileLinkClass}>
            Clients
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className={mobileLinkClass}>
            Contact
          </a>
        </nav>
      </dialog>
    </>
  );
}
