import React from "react";
import Logo from "../assets/Landing-Page-Assets/Logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <nav className="w-[1400px] h-[80px] flex items-center justify-between px-[60px]">
        {/* Logo */}
        {/* <img
          src={Logo}
          alt="logo"
          className="border border-[#C48A3A] w-[45px]"
        /> */}
        <a href="#landing" className="cursor-pointer">
          <div className="border border-[#C48A3A] w-14 h-14 flex items-center justify-center">
            <img src={Logo} alt="logo" className="w-[45px]" />
          </div>
        </a>

        {/* Menu */}
        {/* Menu */}
        <ul className="flex items-center gap-[50px] text-[15px] text-gray-700">
          <li className="cursor-pointer hover:text-[#C48A3A]">
            <a href="#introduction">About</a>
          </li>
          <li className="cursor-pointer hover:text-[#C48A3A]">
            <a href="#design">Service</a>
          </li>
          <li className="cursor-pointer hover:text-[#C48A3A]">
            <a href="#success">Project</a>
          </li>
          <li className="cursor-pointer hover:text-[#C48A3A]">
            <a href="#footer">Team</a>
          </li>
        </ul>

        {/* Button */}
        <button className="border border-[#C48A3A] text-[#C48A3A] px-5 py-2 rounded-full hover:bg-[#C48A3A] hover:text-white transition">
          <a href="#footer">Contact Us →</a>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
