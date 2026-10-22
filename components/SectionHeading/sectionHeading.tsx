import { montserrat } from "@/app/fonts";

type Props = {
  children: React.ReactNode;
  id?: string;
  tone?: "light" | "dark" | "ink";
  className?: string;
};

const tones = {
  light: { text: "text-white", border: "border-white" },
  dark: { text: "text-threepts-dark-green", border: "border-threepts-dark-green" },
  ink: { text: "text-black/85", border: "border-black" },
};

// light: on dark backgrounds. dark: on white. ink: on the bright green (white fails contrast there).
export default function SectionHeading({
  children,
  id,
  tone = "light",
  className = "text-3xl sm:text-5xl",
}: Props) {
  const { text, border } = tones[tone];

  return (
    <h2
      id={id}
      className={`${montserrat.className} ${className} uppercase tracking-[2px] ${text} my-6 sm:my-14 font-bold text-center`}
    >
      <span className={`inline-block border-b-6 pb-2 ${border}`}>
        {children}
      </span>
    </h2>
  );
}
