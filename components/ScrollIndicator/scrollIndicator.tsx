"use client";
import { useEffect, useState } from "react";

export default function ScrollIndicator({ white }: { white?: boolean }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-300 ${white ? "text-white" : "text-threepts-dark-green"} ${white || visible ? "opacity-100" : "opacity-0"}`}
    >
      <svg width="32" height="20" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2 2 12 12 22 2" />
      </svg>
      <svg width="32" height="20" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
        <polyline points="2 2 12 12 22 2" />
      </svg>
    </div>
  );
}
