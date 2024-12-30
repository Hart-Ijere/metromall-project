import React from "react";
import Search from "./Search";
import logo from "./metromall-logo_3.png";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/*logo*/}
        <img src={logo} alt="Metromall Logo" className="h-12 w-auto" />
        <div className="text-xl font-bold">
          <Search />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/categories" className="hover:underline">
              Categories
            </a>
          </li>
          <li>
            <a href="/cart" className="hover:underline">
              Cart
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-2xl focus:outline-none">&#9776;</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
