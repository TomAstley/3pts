"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0 })}
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 cursor-pointer z-40 flex items-center justify-center w-12 h-12 rounded-full bg-threepts-indigo text-white shadow-lg hover:bg-threepts-indigo-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-[opacity,visibility,background-color] duration-300 ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <svg
        aria-hidden="true"
        width="24"
        height="14"
        viewBox="0 0 24 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="2 12 12 2 22 12" />
      </svg>
    </button>
  );
}
