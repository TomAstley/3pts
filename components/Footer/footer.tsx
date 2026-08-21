import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-35 px-18 bg-white">
      <div className="flex items-center gap-4">
        <Image src="/3pts-logo.svg" alt="3pts logo" width={80} height={18} className="w-40 h-auto" />
        <p className="text-black/50 text-sm">
          &copy; {new Date().getFullYear()} Three Points Communications. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
