"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { montserrat } from "@/app/fonts";

const TEXT = "Communicate in Threes";
const THREES_START = TEXT.indexOf("Threes");

const VIEWBOX = "0 0 273 61";
const SVG_W = 273;
const SVG_H = 61;

const svgProps = {
  width: SVG_W,
  height: SVG_H,
  viewBox: VIEWBOX,
  fill: "none" as const,
  xmlns: "http://www.w3.org/2000/svg",
};

export default function IntroAnimation() {
  const s1 = useRef<HTMLImageElement>(null);
  const s2 = useRef<HTMLImageElement>(null);
  const s3 = useRef<HTMLImageElement>(null);

  const textContainerRef = useRef<HTMLDivElement>(null);

  const lThreePts = useRef<HTMLDivElement>(null);
  const lThree = useRef<HTMLDivElement>(null);
  const lP = useRef<HTMLDivElement>(null);
  const lO = useRef<HTMLDivElement>(null);
  const lI = useRef<HTMLDivElement>(null);
  const lN = useRef<HTMLDivElement>(null);
  const lT = useRef<HTMLDivElement>(null);
  const lS = useRef<HTMLDivElement>(null);

  const divClass = "absolute inset-0 opacity-0";

  useEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    const letters = [
      { ref: lThree, origin: "19px 31px" },
      { ref: lP, origin: "66px 31px" },
      { ref: lO, origin: "112px 37px" },
      { ref: lI, origin: "149px 30px" },
      { ref: lN, origin: "185px 37px" },
      { ref: lT, origin: "224px 32px" },
      { ref: lS, origin: "257px 37px" },
    ];

    const shadow = "drop-shadow(0 0 30px rgba(76,189,149,0.95))";

    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>(".intro-char");

      gsap.set(s1.current, { filter: `blur(5px) ${shadow}` });
      tl.set(s2.current, { opacity: 0, scale: 0.15, filter: shadow, transformOrigin: "50% 50%" });
      tl.set(s3.current, { opacity: 0, scale: 0.15, filter: shadow, transformOrigin: "50% 50%" });

      gsap.set(chars, {
        opacity: 0,
        scale: 0.1,
        filter: "blur(30px) invert(1)",
        transformOrigin: "50% 50%",
      });

      letters.forEach(({ ref, origin }) =>
        gsap.set(ref.current, {
          opacity: 0,
          scale: 0.1,
          filter: "blur(30px) invert(1)",
          transformOrigin: origin,
        }),
      );

      // Sphere floats up
      tl.to(s1.current, { y: -100, rotate: 6, duration: 4, ease: "sine.inOut" }, 0);

      // Phase 1: "Communicate in Threes" cascades in (inverted = white on dark)
      tl2.to(chars, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px) invert(1)",
        duration: 0.25,
        ease: "quad.out",
        stagger: { each: 0.08 },
      }, 0.25);

      // Phase 2: text fades out, sphere collapses
      tl2.to(textContainerRef.current, { opacity: 0, duration: 0.3, ease: "quad.in" }, 4);

      tl.to(s1.current, {
        scale: 0.15,
        filter: `blur(0px) ${shadow}`,
        y: 0,
        rotate: 180,
        duration: 1,
        ease: "sine.inOut",
      }, 4);

      tl.to(s1.current, { scale: 0.2, duration: 0.12, ease: "sine.out" }, 5)
        .to(s1.current, { scale: 0.15, x: -180, duration: 0.18, ease: "sine.in" }, 5.12);

      tl.to(s2.current, {
        scale: 0.15,
        filter: `blur(0px) ${shadow}`,
        opacity: 1,
        y: -54,
        x: -84,
        rotate: 300,
        duration: 0.5,
        ease: "sine.inOut",
      }, 5);

      tl.to(s3.current, {
        scale: 0.15,
        filter: `blur(0px) ${shadow}`,
        opacity: 1,
        y: 54,
        x: -84,
        rotate: 300,
        duration: 0.5,
        ease: "sine.inOut",
      }, 5);

      // Phase 3: SVG letters animate in next to spheres
      tl2.set(lThreePts.current, { opacity: 1, x: 120 }, 5.4);

      letters.forEach(({ ref }) => {
        tl2
          .from(
            ref.current,
            { scale: 0.1, opacity: 0, filter: "blur(30px) invert(0)", duration: 0.25, ease: "quad.out" },
            5,
          )
          .to(
            ref.current,
            { scale: 1, opacity: 1, filter: "blur(0px) invert(0)", duration: 0.25, ease: "quad.in" },
            5.4,
          );
      });

      // Final fade out
      tl2.to(lThreePts.current, { opacity: 0, duration: 0.3, ease: "quad.in" }, 7);
      tl.to([s1.current, s2.current, s3.current], { opacity: 0, duration: 0.3, ease: "sine.inOut" }, 7);

      tl2.play();
    }, textContainerRef);

    return () => {
      ctx.revert();
      tl.kill();
      tl2.kill();
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <Image
        ref={s1}
        src="/sphere.svg"
        alt=""
        width={800}
        height={800}
        className="scale-400 absolute blur-[2px]"
        style={{ left: "50%", top: "50%", marginLeft: -400, marginTop: -400 }}
      />
      <Image
        ref={s2}
        src="/sphere.svg"
        alt=""
        width={800}
        height={800}
        className="scale-400 absolute blur-[2px]"
        style={{ left: "50%", top: "50%", marginLeft: -400, marginTop: -400 }}
      />
      <Image
        ref={s3}
        src="/sphere.svg"
        alt=""
        width={800}
        height={800}
        className="scale-400 absolute blur-[2px]"
        style={{ left: "50%", top: "50%", marginLeft: -400, marginTop: -400 }}
      />

      {/* Phase 1: tagline */}
      <div
        ref={textContainerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
      >
        <p className={`${montserrat.className} text-5xl uppercase`}>
          {TEXT.split("").map((char, i) => (
            <span key={i} className={`intro-char inline-block${i >= THREES_START ? " font-bold" : ""}`}>
              {char === " " ? " " : char}
            </span>
          ))}
        </p>
      </div>

      {/* Phase 3: SVG logo lockup */}
      <div
        ref={lThreePts}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0"
        style={{ width: SVG_W, height: SVG_H }}
      >
        <div ref={lThree} className={divClass}>
          <svg {...svgProps}>
            <path
              d="M1.05371 49.979L6.12372 46.979C9.51372 51.449 13.9637 53.859 18.4437 53.859C25.5737 53.859 30.5037 49.149 30.5037 42.139C30.5037 35.129 25.6737 30.079 15.3137 30.079H10.3537L24.9537 8.549H3.51372V2.769H35.2637L19.6137 25.509C30.0137 26.139 36.8637 32.279 36.8637 42.239C36.8637 52.699 29.4437 59.759 18.5937 59.759C15.0934 59.6864 11.6644 58.7569 8.60655 57.0519C5.54875 55.347 2.95547 52.9185 1.05371 49.979Z"
              fill="#010101"
              stroke="#010101"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <div ref={lP} className={divClass}>
          <svg {...svgProps}>
            <path
              d="M65.1137 33.429H53.2037V59.089H49.3137V2.769H64.9337C75.5837 2.769 83.0337 8.119 83.0337 18.209C83.0537 28.529 75.7837 33.429 65.1137 33.429ZM65.1837 6.429H53.1837V30.009H65.1837C73.4137 30.009 79.0937 26.269 79.0937 18.249C79.0537 10.349 73.4137 6.389 65.1837 6.389V6.429Z"
              fill="#010101"
              stroke="#010101"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <div ref={lO} className={divClass}>
          <svg {...svgProps}>
            <path
              d="M112.574 59.629C98.4037 59.629 88.8337 49.459 88.8337 36.969C88.8337 24.479 98.4237 14.229 112.594 14.229C126.764 14.229 136.394 24.449 136.394 36.969C136.394 49.489 126.744 59.629 112.574 59.629ZM112.574 17.629C100.684 17.629 92.7137 26.329 92.7137 36.939C92.7137 47.549 100.714 56.289 112.554 56.289C124.394 56.289 132.554 47.599 132.554 36.939C132.554 26.279 124.514 17.619 112.594 17.619L112.574 17.629Z"
              fill="#010101"
              stroke="#010101"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <div ref={lI} className={divClass}>
          <svg {...svgProps}>
            <path
              d="M146.374 3.239C146.46 2.48517 146.82 1.7894 147.387 1.28428C147.953 0.779158 148.685 0.5 149.444 0.5C150.202 0.5 150.935 0.779158 151.501 1.28428C152.067 1.7894 152.428 2.48517 152.514 3.239C152.428 3.99283 152.067 4.6886 151.501 5.19372C150.935 5.69884 150.202 5.978 149.444 5.978C148.685 5.978 147.953 5.69884 147.387 5.19372C146.82 4.6886 146.46 3.99283 146.374 3.239ZM147.504 14.669H151.344V59.089H147.504V14.669Z"
              fill="#010101"
              stroke="#010101"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <div ref={lN} className={divClass}>
          <svg {...svgProps}>
            <path
              d="M201.604 36.029C201.604 24.029 197.254 17.459 186.264 17.459C175.274 17.459 168.964 25.899 168.964 36.749V59.089H165.124V14.649H168.964V26.649C170.218 22.9005 172.646 19.6552 175.887 17.3932C179.129 15.1313 183.013 13.9727 186.964 14.089C200.054 14.089 205.434 22.009 205.434 35.899V59.039H201.584L201.604 36.029Z"
              fill="#010101"
              stroke="#010101"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <div ref={lT} className={divClass}>
          <svg {...svgProps}>
            <path
              d="M217.294 39.919V18.059H210.414V14.739H217.294V6.189L221.074 4.489V14.739H238.664V18.059H221.054V39.919C221.054 52.829 226.544 56.989 238.644 55.649V59.149C224.514 60.709 217.294 55.549 217.294 39.919Z"
              fill="#010101"
              stroke="#010101"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <div ref={lS} className={divClass}>
          <svg {...svgProps}>
            <path
              d="M258.054 59.669C252.356 59.6559 246.856 57.5774 242.574 53.819L244.814 51.199C248.381 54.4279 253.002 56.2478 257.814 56.319C263.424 56.199 267.744 52.579 267.664 47.699C267.564 41.999 263.664 39.979 257.254 37.939C249.254 35.439 244.114 32.439 244.114 25.229C244.114 18.679 249.504 14.139 257.054 14.089C261.673 14.1228 266.156 15.6604 269.824 18.469L267.714 20.919C264.696 18.7117 261.072 17.4862 257.334 17.409C251.874 17.489 247.914 20.729 247.914 25.249C247.914 30.499 251.814 32.739 257.914 34.559C266.084 36.949 271.464 40.219 271.534 47.559C271.624 54.519 265.974 59.529 258.054 59.669Z"
              fill="#010101"
              stroke="#010101"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
