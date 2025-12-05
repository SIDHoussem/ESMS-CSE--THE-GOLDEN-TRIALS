import React, { useState } from "react";
import "./Header.css";
import headerImage from "../../assets/Header/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex items-center justify-between px-6 py-4 bg-transparent">
      <img onClick={() => window.location.reload()} src={headerImage} alt="LOGO" className="w-40 md:w-24 lg:w-52 cursor-pointer" />

      {/* Mobile Menu Button (3 dots/hamburger) */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu">
        <span
          className={`w-6 h-0.5 bg-yellow-600 transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}></span>
        <span
          className={`w-6 h-0.5 bg-yellow-600 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}></span>
        <span
          className={`w-6 h-0.5 bg-yellow-600 transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <nav
        className={`
        md:hidden fixed top-0 right-0 h-screen w-64 bg-[#0E1816] z-40
        flex flex-col items-center justify-center gap-6
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        <a
          href="#home"
          className="text-white text-lg font-medium hover:text-yellow-500 transition-colors"
          onClick={toggleMenu}>
          Home
        </a>
        <a
          href="#about"
          className="text-white text-lg font-medium hover:text-yellow-500 transition-colors"
          onClick={toggleMenu}>
          About
        </a>
        <a
          href="#agenda"
          className="text-white text-lg font-medium hover:text-yellow-500 transition-colors"
          onClick={toggleMenu}>
          Agenda
        </a>
        <a
          href="#workshops"
          className="text-white text-lg font-medium hover:text-yellow-500 transition-colors"
          onClick={toggleMenu}>
          Workshops
        </a>
        <a
          href="#partners"
          className="text-white text-lg font-medium hover:text-yellow-500 transition-colors"
          onClick={toggleMenu}>
          Partners
        </a>
        <a
          href="#faq"
          className="text-white text-lg font-medium hover:text-yellow-500 transition-colors"
          onClick={toggleMenu}>
          FAQ
        </a>
        <a
          href="#contact"
          className="text-white text-lg font-medium hover:text-yellow-500 transition-colors"
          onClick={toggleMenu}>
          Contact Us
        </a>
        <button
          className="bg-amber-50 text-yellow-600 px-6 py-2 text-xl rounded hover:bg-yellow-500 hover:text-white transition-colors mt-4"
          style={{ fontFamily: "'Metal Mania', cursive" }}>
          Register
        </button>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <a
          href="#home"
          className="text-white font-medium hover:text-yellow-500 transition-colors">
          Home
        </a>
        <a
          href="#about"
          className="text-white font-medium hover:text-yellow-500 transition-colors">
          About
        </a>
        <a
          href="#agenda"
          className="text-white font-medium hover:text-yellow-500 transition-colors">
          Agenda
        </a>
        <a
          href="#workshops"
          className="text-white font-medium hover:text-yellow-500 transition-colors">
          Workshops
        </a>
        <a
          href="#partners"
          className="text-white font-medium hover:text-yellow-500 transition-colors">
          Partners
        </a>
        <a
          href="#faq"
          className="text-white font-medium hover:text-yellow-500 transition-colors">
          FAQ
        </a>
        <a
          href="#contact"
          className="text-white font-medium hover:text-yellow-500 transition-colors">
          Contact Us
        </a>
        </nav>

        <a

  href="https://docs.google.com/forms/d/e/1FAIpQLScZKxwzRxazLFuDPtWC_4wuECQrGQuoBrBRRtNtrZ9Gg0Me6Q/viewform?usp=header"
  className="bg-amber-50 text-yellow-600 px-8 py-3 text-2xl rounded hover:bg-yellow-500 hover:text-white transition-colors"
  style={{ fontFamily: "'Metal Mania', cursive" }}
>
  Register
</a>
    
    </header>
  );
};

export default Header;
