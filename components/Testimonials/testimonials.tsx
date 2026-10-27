"use client";

import { useState } from "react";
import { montserrat } from "@/app/fonts";
import SectionHeading from "@/components/SectionHeading/sectionHeading";
import ScrollIndicator from "@/components/ScrollIndicator/scrollIndicator";
import DiagonalStripes from "@/components/DiagonalStripes/diagonalStripes";

const testimonials = [
  {
    quote:
      "Drew delivers value by balancing the practicality of an operator with the sizzle of a creative fintech marketer.",
    author: "Jim Ongena",
    role: "Fmr. General Counsel, Chicago Stock Exchange",
  },
  {
    quote:
      "I've had the pleasure of working with Drew and the team at 3Points for several years. Not only are he and his team experts in a wide variety of PR services, but their creativity and dedication to client service are always top-notch. I recommend Drew and his team to companies and their leaders that are looking to enhance their reputation and thought-leadership in their industry.",
     author: "James Swartwout",
    role: "CEO, Prosperum Fintech",
  },
  {
    quote:
      "We worked with Drew when we first launched tradeMONSTER and then again last year after 3 Points was well established under Drew's capable leadership. He has done an exceptional job for us in delivering high quality introductions and placements and will certainly be an integral part of the TM marketing plan going forward.",
    author: "Jeremie Bacon",
    role: "General Partner, SENU Venture Partners",
  },
];

const SWIPE_THRESHOLD = 50;

const arrowClass =
  "flex items-center justify-center w-11 h-11 rounded-full border-2 border-threepts-dark-green text-threepts-dark-green hover:bg-threepts-dark-green hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const go = (next: number) => setIndex((next + testimonials.length) % testimonials.length);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate flex justify-center flex-col min-h-[calc(100svh-var(--anchor-offset))] px-5 pt-20 pb-28 sm:short:pt-12 sm:short:pb-20"
    >
      <DiagonalStripes />
      <SectionHeading id="testimonials-heading" tone="dark">Testimonials</SectionHeading>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-labelledby="testimonials-heading"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(index - 1);
          if (e.key === "ArrowRight") go(index + 1);
        }}
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX;
          setTouchStartX(null);
          if (Math.abs(delta) < SWIPE_THRESHOLD) return;
          go(delta < 0 ? index + 1 : index - 1);
        }}
        className="w-full max-w-4xl mx-auto overflow-hidden text-balance focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-threepts-dark-green"
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <figure
              key={t.author}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${testimonials.length}`}
              aria-hidden={i !== index}
              inert={i !== index}
              className="w-full shrink-0 flex flex-col items-center justify-center px-2 sm:px-8 text-center"
            >
              <blockquote
                className={`${montserrat.className} text-lg sm:text-xl leading-relaxed text-black/85`}
              >
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className={`${montserrat.className} mt-8 uppercase tracking-widest`}>
                <span className="block font-bold text-threepts-dark-green">{t.author}</span>
                <span className="block text-sm text-black/70 mt-1">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-10">
        <button type="button" aria-label="Previous testimonial" onClick={() => go(index - 1)} className={arrowClass}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 4 7 12 15 20" />
          </svg>
        </button>
        <div className="flex items-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              type="button"
              aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className="p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-full"
            >
              <span
                className={`block w-3 h-3 rounded-full border-2 border-threepts-dark-green transition-colors ${i === index ? "bg-threepts-dark-green" : "bg-transparent"}`}
              />
            </button>
          ))}
        </div>
        <button type="button" aria-label="Next testimonial" onClick={() => go(index + 1)} className={arrowClass}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 4 17 12 9 20" />
          </svg>
        </button>
      </div>
      <ScrollIndicator alwaysVisible />
    </section>
  );
}
