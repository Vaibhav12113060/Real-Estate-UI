import React, { useState, useEffect } from "react";
import Logo from "../assets/Landing-Page-Assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Service", id: "services" },
    { name: "Project", id: "projects" },
    { name: "Team", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "projects", "contact"];
      let current = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the top of the section is near the upper third of the screen
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }

      if (current && current !== activeSection) {
        setActiveSection(current);
        // Automatically update the URL without jumping
        if (window.location.hash !== `#${current}`) {
          window.history.replaceState(null, null, `#${current}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100); // Trigger check on component mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <nav className="w-full max-w-[1400px] h-[80px] flex items-center justify-between px-6 md:px-[60px]">
        {/* Logo */}
        {/* <img
          src={Logo}
          alt="logo"
          className="border border-[#C48A3A] w-[45px]"
        /> */}
        <a href="#home" className="cursor-pointer">
          <div className="border border-[#C48A3A] w-14 h-14 flex items-center justify-center">
            <img src={Logo} alt="logo" className="w-[45px]" />
          </div>
        </a>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-[50px] text-[15px] text-gray-700">
          {navLinks.map((link) => (
            <li key={link.id} className="cursor-pointer">
              <a
                href={`#${link.id}`}
                className={`transition-all hover:text-[#C48A3A] ${
                  activeSection === link.id
                    ? "text-[#C48A3A] font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="hidden md:block border border-[#C48A3A] text-[#C48A3A] px-5 py-2 rounded-full hover:bg-[#C48A3A] hover:text-white transition">
          <a href="#contact">Contact Us →</a>
        </button>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#C48A3A] focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-[80px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen
            ? "py-8 max-h-[400px] border-t border-gray-100"
            : "max-h-0 py-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setIsMenuOpen(false)}
            className={`text-lg transition-all ${
              activeSection === link.id
                ? "text-[#C48A3A] font-semibold"
                : "text-gray-700 hover:text-[#C48A3A] font-medium"
            }`}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="mt-2 border border-[#C48A3A] text-[#C48A3A] px-8 py-2 rounded-full hover:bg-[#C48A3A] hover:text-white transition"
        >
          Contact Us →
        </a>
      </div>
    </div>
  );
};

export default Navbar;
