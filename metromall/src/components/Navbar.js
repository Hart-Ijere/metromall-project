import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
          <Link to="/">
            <img src={logo} alt="Metromall Logo" className="h-12 w-auto max-w-xs" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/productList" className="hover:underline">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/shoppingCart" className="hover:underline">
                Cart
              </Link>
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

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="block md:hidden p-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block py-2 hover:underline" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/productList" className="block py-2 hover:underline" onClick={toggleMobileMenu}>
                Categories
              </Link>
            </li>
            <li>
              <Link to="/cart" className="block py-2 hover:underline" onClick={toggleMobileMenu}>
                Cart
              </Link>
            </li>
          </ul>

          {/* Mobile Search */}
          <div className="mt-4">
            <Search />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;