"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#282828] text-white shadow-md">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl sm:text-2xl text-xl font-bold hover:text-[#FF0000] transition-colors"
          >
            <span className="text-[#FF0000]">YouTube</span>
            <span className="text-sm sm:text-2xl">Thumbnails Download</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-[#FF0000] transition-colors">
              Home
            </Link>
            <Link
              href="/bulk"
              className="hover:text-[#FF0000] transition-colors"
            >
              Bulk Download
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center space-y-1.5 p-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} py-4`}>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="hover:text-[#FF0000] transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/bulk"
              className="hover:text-[#FF0000] transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Bulk Download
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
