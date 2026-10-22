import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-3 w-full min-h-35 py-6 px-6 sm:px-18 bg-white">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
        <Image src="/3pts-logo.svg" alt="" width={80} height={18} className="w-40 h-auto" />
        <p className="text-black/70 text-sm">
          &copy; {new Date().getFullYear()} Three Points Communications. All
          rights reserved.
        </p>
      </div>
      <p className="text-black/70 text-sm">
        Designed + Developed by{" "}
        <a
          href="https://yapcollective.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-threepts-dark-green"
        >
          YAP Collective<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    </footer>
  );
}
