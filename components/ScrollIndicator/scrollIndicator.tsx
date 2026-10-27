"use client";
import { useEffect, useRef, useState } from "react";

export default function ScrollIndicator({
  ink,
  alwaysVisible,
  afterIntro,
}: {
  ink?: boolean;
  alwaysVisible?: boolean;
  afterIntro?: boolean;
}) {
  const [visible, setVisible] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shown = ink || alwaysVisible || visible;

  const scrollToNext = () => {
    buttonRef.current?.closest("section")?.nextElementSibling?.scrollIntoView();
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label="Scroll to next section"
      tabIndex={shown ? 0 : -1}
      onClick={scrollToNext}
      // Bounce stops after 5s so it isn't endless motion (WCAG 2.2.2).
      style={{
        animationIterationCount: 5,
        animationDelay: afterIntro ? "var(--intro-delay)" : undefined,
      }}
      className={`absolute bottom-7 left-1/2 -translate-x-1/2 p-2 cursor-pointer flex flex-col items-center animate-bounce transition-opacity duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${ink ? "text-black" : "text-threepts-dark-green"} ${shown ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <svg aria-hidden="true" width="24" height="15" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2 2 12 12 22 2" />
      </svg>
      <svg aria-hidden="true" width="24" height="15" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
        <polyline points="2 2 12 12 22 2" />
      </svg>
    </button>
  );
}
