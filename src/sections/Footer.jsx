import React, { useState } from "react";
import Logo from "../assets/Footer-Page-Assets/Logo.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(
      localStorage.getItem("novo_submissions") || "[]",
    );
    const newSubmission = { ...formData, date: new Date().toISOString() };
    localStorage.setItem(
      "novo_submissions",
      JSON.stringify([...existing, newSubmission]),
    );

    setShowSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    // Background is now a clean solid color
    <div className="relative w-full bg-[#1A1A1A] text-white py-16 md:py-24 px-6 md:px-20 font-sans">
      {/* Success Message popup */}
      {showSuccess && (
        <div className="fixed top-0 left-0 w-full bg-[#C48A3A] text-white text-center py-4 z-[100] shadow-lg text-lg font-medium transition-all duration-500">
          ✅ Successfully sent! We will review your message shortly.
        </div>
      )}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
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
        <div className="border-t md:border-t-0 md:border-l border-gray-800/50 pt-12 md:pt-0 pl-0 md:pl-20 mt-6 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-light text-gray-400 mb-2 tracking-tight">
            Register your interest
          </h2>
          <p className="text-sm opacity-60 mb-10 md:mb-16 italic font-light">
            Construction commencing during 2023 earthworks season.
          </p>

          <form className="space-y-12" onSubmit={handleSubmit}>
            {[
              {
                name: "name",
                label: "YOUR NAME",
                placeholder: "e.g. Mohammed",
              },
              {
                name: "email",
                label: "YOUR E-MAIL",
                placeholder: "e.g. mohammed@gmail.com",
              },
              {
                name: "message",
                label: "YOUR MESSAGES",
                placeholder: "e.g. Hello!",
              },
            ].map((field, i) => (
              <div key={i} className="flex flex-col group">
                <input
                  type={field.name === "email" ? "email" : "text"}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full bg-transparent outline-none text-white text-xl font-light placeholder:text-gray-600 focus:placeholder:opacity-0 mb-2 transition-all"
                />

                {/* Input Line (Straight) */}
                <div className="w-full h-[1px] bg-[#C48A3A]/60 group-focus-within:bg-[#C48A3A] transition-colors relative"></div>

                {/* 3. Input Label Name (Bottom) */}
                <label className="text-[10px] uppercase tracking-[0.3em] opacity-40 mt-3 font-medium">
                  {field.label}
                </label>
              </div>
            ))}

            <div className="pt-10 flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-6 px-12 py-3 border border-gray-600 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#C48A3A] hover:border-[#C48A3A] hover:text-white transition-all duration-500 group"
              >
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
