"use client";
import { useState } from "react"; 
import { Menu, X } from "lucide-react";

const PCNav = () => {
  return (
    <nav className="hidden md:flex bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/">
          <img
            src="https://res.cloudinary.com/da48bjec6/image/upload/v1751491623/Capture-removebg-preview_tet2bg.png"
            alt="Logo"
            width={175}
          />
        </a>

        {/* Navigation as (3x Larger) */}
        <div className="flex items-center space-x-16 text-[18px]">
          <a href="/" className="text-gray-800 hover:text-blue-700">
            Home
          </a>
          <a href="/about" className="text-gray-800 hover:text-blue-700">
            About
          </a>
          <a href="/services" className="text-gray-800 hover:text-blue-700">
            Services
          </a>  

          <a href="/contact" className="bg-[#725038] text-white px-6 py-3 rounded-full">
            Let's Talk
          </a>

        </div>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden bg-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between p-12">
        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="/">
            <img
              src="https://res.cloudinary.com/da48bjec6/image/upload/v1751491623/Capture-removebg-preview_tet2bg.png"
              alt="Logo"

              width={100}
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div id="navidnew" className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-2xl">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          {/* Navigation as */}
          <a href="/" className="text-gray-800" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="/about" className="text-gray-800" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="/services" className="text-gray-800 hover:text-blue-700">
            Services
          </a> 

          <a
            href="/contact"
            className="bg-[#725038] text-white px-6 py-3 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

const NavBar = () => {
  return (
    <>
      <PCNav />
      <MobileNav />
    </>
  );
};

export default NavBar;
