import React from "react";
import Logo from "../assets/Footer-Page-Assets/Logo.png";
const Footer = () => {
  return (
    // Background is now a clean solid color
    <div className="w-full bg-[#1A1A1A] text-white py-24 px-6 md:px-20 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Contact Info Side */}
        <div className="flex flex-col justify-between">
          <div className="space-y-2 opacity-80 font-light">
            <p className="text-xs uppercase tracking-widest mb-10 opacity-60">
              Also get in touch
            </p>
            <div className="text-sm space-y-1">
              <p>e: info@novo.sa</p>
              <p>t: +966 11 2111 090</p>
              <p>m: +966 575 77 8888</p>
            </div>
            <p className="pt-8 text-[#C48A3A]">novo-sa.com</p>
            <p className="text-sm max-w-[200px] pt-4 leading-relaxed opacity-70">
              4658 King Abdulaziz Road, Al Rabeeh, 7542, Riyadh 13315 Saudi
              Arabia
            </p>
          </div>

          {/* Golden Logo Box */}
          <div className="mt-20">
            <div className="border border-[#C48A3A] w-14 h-14 flex items-center justify-center">
              <img src={Logo} alt="logo" className="w-[45px]" />
            </div>
          </div>
        </div>

        {/* Registration Form Side */}
        {/* <div className="border-l border-gray-800/50 pl-10 md:pl-20">
          <h2 className="text-5xl font-light text-gray-400 mb-2">
            Register your interest
          </h2>
          <p className="text-sm opacity-60 mb-16">
            Construction commencing during 2023 earthworks season.
          </p>

          <form className="space-y-16">
            {[
              { label: "YOUR NAME", placeholder: "e.g. Mohammed" },
              { label: "YOUR EMAIL", placeholder: "e.g. mohammed@gmail.com" },
              { label: "YOUR MESSAGE", placeholder: "e.g. Hello!" },
            ].map((field, i) => (
              <div key={i} className="border-b border-[#C48A3A]/50 pb-3 group">
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="bg-transparent w-full outline-none text-xl placeholder:opacity-40 font-light focus:placeholder:opacity-0 transition-all"
                />
                <label className="text-xs uppercase tracking-[0.2em] opacity-60 block mt-3 font-medium">
                  {field.label}
                </label>
              </div>
            ))}

            <div className="pt-10 flex justify-end">
              <button className="flex items-center gap-6 px-12 py-3 border border-gray-600 rounded-full text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
                Send Message <span className="text-lg">→</span>
              </button>
            </div>
          </form>
        </div> */}

        {/* Registration Form Side */}
        <div className="border-l border-gray-800/50 pl-10 md:pl-20">
          <h2 className="text-5xl font-light text-gray-400 mb-2 tracking-tight">
            Register your interest
          </h2>
          <p className="text-sm opacity-60 mb-16 italic font-light">
            Construction commencing during 2023 earthworks season.
          </p>

          <form className="space-y-12">
            {[
              { label: "YOUR NAME", placeholder: "e.g. Mohammed" },
              { label: "YOUR E-MAIL", placeholder: "e.g. mohammed@gmail.com" },
              { label: "YOUR MESSAGES", placeholder: "e.g. Hello!" },
            ].map((field, i) => (
              <div key={i} className="flex flex-col group">
                {/* 1. Placeholder (Top) */}
                <span className="text-xl font-light text-gray-600 mb-2 transition-all">
                  {field.placeholder}
                </span>

                {/* 2. Input Line (Straight) */}
                <div className="w-full h-[1px] bg-[#C48A3A]/60 group-focus-within:bg-[#C48A3A] transition-colors relative">
                  {/* Actual hidden input for data collection */}
                  <input
                    type="text"
                    className="absolute inset-0 w-full bg-transparent outline-none text-white opacity-0 focus:opacity-100 z-10"
                  />
                </div>

                {/* 3. Input Label Name (Bottom) */}
                <label className="text-[10px] uppercase tracking-[0.3em] opacity-40 mt-3 font-medium">
                  {field.label}
                </label>
              </div>
            ))}

            <div className="pt-10 flex justify-end">
              <button className="flex items-center gap-6 px-12 py-3 border border-gray-600 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#C48A3A] hover:border-[#C48A3A] hover:text-white transition-all duration-500 group">
                Send Message{" "}
                <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
