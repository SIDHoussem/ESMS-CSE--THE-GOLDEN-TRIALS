import React from "react";
import "./Header.css";
import headerImage from "../../assets/Header/Screenshot 2025-11-24 115147_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off 1.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-transparent">
      <img src={headerImage} alt="LOGO" className="w-46 md:w-24 lg:w-62" />

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
        <button
          className="bg-amber-50 text-yellow-600 px-8 py-3 text-2xl rounded hover:bg-yellow-500 hover:text-white transition-colors "
          style={{ fontFamily: "'Metal Mania', cursive" }}>
          Register
        </button>
    
    </header>
  );
};

export default Header;
