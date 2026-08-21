export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-30 px-8 bg-white shadow-md fixed animate-nav-slide-in z-50">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/3pts-logo.svg"
        alt="Logo"
        width={273}
        height={61}
        className="h-24 w-auto"
      />
      <nav className="flex items-center space-x-3 text-lg font-semibold">
        <a href="#about" className="text-[#026938] hover:text-[##4bbc94] hover:underline">
          About
        </a>
        <span>/</span>
        <a href="#services" className="text-[#026938] hover:text-[##4bbc94] hover:underline">
          Marketing Services
        </a>
        <span>/</span>
        <a href="#clients" className="text-[#026938] hover:text-[##4bbc94] hover:underline">
          Clients
        </a>
        <span>/</span>
        <a href="#contact" className="text-[#026938] hover:text-[##4bbc94] hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
}
