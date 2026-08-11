export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-24 px-8 bg-white shadow-md fixed animate-nav-slide-in z-50">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/3pts-logo.svg" alt="Logo" width={273} height={61} className="h-18 w-auto" />
      <nav className="flex items-center space-x-4">
        <a href="#about" className="text-gray-700 hover:text-gray-900">
          About
        </a>
        <a href="#services" className="text-gray-700 hover:text-gray-900">
          Marketing Services
        </a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900">
          Clients
        </a>
         <a href="#contact" className="text-gray-700 hover:text-gray-900">
          Contact
        </a>    
      </nav>
    </header>
  );
}
