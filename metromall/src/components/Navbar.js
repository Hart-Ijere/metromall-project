import React, { useState } from "react";
import Search from "./Search";
import logo from "./metromall-logo_3.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Metromall Logo" className="h-12 w-auto max-w-xs" />
        </div>

        {/* Search Component */}
        <div className="hidden md:block flex-grow flex justify-center mx-4">
          <Search />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block">
        <ul
          className={`absolute md:static top-16 left-0 w-full bg-blue-500 md:bg-transparent md:flex md:space-x-6 md:items-center p-4 md:p-0 transition-transform duration-300 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="border-b border-white md:border-none">
            <a href="/" className="block py-2 md:py-0 hover:underline">
              Home
            </a>
          </li>
          <li className="border-b border-white md:border-none">
            <a href="/categories" className="block py-2 md:py-0 hover:underline">
              Categories
            </a>
          </li>
          <li>
            <a href="/cart" className="block py-2 md:py-0 hover:underline">
              Cart
            </a>
          </li>
        </ul>

        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {isMobileMenuOpen && (
        <div className="block md:hidden p-4">
          <Search />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
