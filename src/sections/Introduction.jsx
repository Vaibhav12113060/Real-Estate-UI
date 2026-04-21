import React from "react";
import introImage from "../assets/Introduction-Page-Assets/Intro1.png";

const Introduction = () => {
  return (
    <div className="w-full bg-[#3D4A59] text-white py-20 px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="mb-10">
              <h2 className="text-4xl font-light mb-4">Introduction</h2>
              <p className="text-[13px] opacity-70 leading-relaxed max-w-[350px]">
                We are living in a time of rapid urban growth with increasingly
                busy and fast lifestyles characterized by movement and commotion
                – so much so that the need to humanize architecture has never
                been more important.
              </p>
            </div>

            {/* Links with Arrows */}
            {["Our Vision", "Our Mission", "Our Work"].map((item, i) => (
              <div
                key={i}
                className="border-t border-gray-500 pt-6 group cursor-pointer"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-light tracking-wide">{item}</h3>
                  <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center group-hover:bg-[#C48A3A] transition-all">
                    <span className="text-sm">↗</span>
                  </div>
                </div>
                <p className="text-[12px] opacity-60 max-w-[350px] leading-relaxed">
                  {i === 0 &&
                    "To be the first choice for quality in implementation and innovation of ideas in all interior and exterior decorations and finishes."}
                  {i === 1 &&
                    "To achieve uniqueness in all that we do, adding elements of nature in order to humanize the spaces we create, balancing form, function and aesthetics."}
                  {i === 2 &&
                    "All Novo work is undertaken under one brand in order to ensure quality in materials and implementation. We pride ourselves in offering inimitable ideas."}
                </p>
              </div>
            ))}
            <div className="border-t border-gray-500"></div>
          </div>

          {/* Right Image */}
          <div className="relative pt-4">
            <div className="absolute top-0 left-0 w-full h-[6px] bg-[#C48A3A]"></div>
            <img
              src={introImage}
              alt="Intro"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Bottom Detailed Text */}
        <div className="mt-40 border-t border-gray-500 pt-10 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-[800px]">
            <div className="flex justify-between text-[10px] opacity-50 mb-10 uppercase tracking-widest">
              <span>Our Success</span>
              <span>01/03</span>
            </div>
            <p className="text-2xl md:text-3xl font-light leading-snug opacity-90">
              We are living in a time of rapid urban growth with increasingly
              busy and fast lifestyles characterized by movement and commotion –
              so much so that the need to humanize architecture has never been
              more important...
            </p>
          </div>

          {/* Round Next Button */}
          <div className="w-32 h-32 rounded-full border border-[#C48A3A]/40 flex items-center justify-center cursor-pointer hover:bg-[#C48A3A]/10 transition-all">
            <span className="text-lg tracking-widest">Next</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
