import React from "react";
import mainImage from "../assets/Landing-Page-Assets/Landing1.png";
import smallImage from "../assets/Landing-Page-Assets/Landing2.png";

const Landing = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#F2F2F2] overflow-hidden pt-24 font-sans">
      {/* BACKGROUND DIAGONAL LINES - Exactly as in screenshot */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-[35%] w-[1px] h-[200%] bg-gray-400 rotate-[12deg] origin-top"></div>
        <div className="absolute top-0 right-[20%] w-[1px] h-[200%] bg-gray-400 rotate-[-8deg] origin-top"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-10 h-full">
        {/* MAIN HEADLINE - Exact positioning and font weight */}
        <div className="mt-16 mb-4">
          <h1 className="text-[90px] leading-[0.95] font-light text-[#3D4A59] tracking-tight">
            <span className="text-[#C48A3A] font-normal">Our</span> Implicit
            Belief <span className="text-[#C48A3A]">in</span>
            <br />
            Architecture’s <span className="text-[#C48A3A]">Dynamism</span>
          </h1>
        </div>

        {/* CONTENT AREA */}
        <div className="relative w-full h-[600px]">
          {/* 1. TOP RIGHT TEXT BLOCKS */}
          <div className="absolute top-[-40px] right-0 text-right space-y-4 max-w-[280px]">
            <p className="text-[11px] leading-tight text-gray-500 uppercase tracking-wider">
              Decorations and finishes of ideas in all <br /> interior and
              exterior implementation.
            </p>
            <h3 className="text-[#C48A3A] text-[22px] font-normal leading-[1.2]">
              To achieve uniqueness in <br /> all that we do, adding <br />{" "}
              elements of nature
            </h3>
          </div>

          {/* 2. SMALL IMAGE WITH TOP GOLDEN BAR (Right Side) */}
          <div className="absolute top-[120px] right-0 w-[230px]">
            <div className="w-full h-[14px] bg-[#C48A3A]"></div>
            <img
              src={smallImage}
              className="w-full h-auto shadow-md"
              alt="Small"
            />
          </div>

          {/* 3. MAIN CENTER IMAGE WITH L-SHAPED GOLDEN FRAME */}
          <div className="absolute left-[52%] top-[10%] -translate-x-1/2">
            <div className="relative">
              {/* L-Shape Frame (Top & Right) */}
              <div className="absolute -top-10 -right-10 w-[65%] h-[55%] border-t-[14px] border-r-[14px] border-[#C48A3A] z-0"></div>

              {/* Corner Frame (Bottom Left) */}
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-[14px] border-l-[14px] border-[#C48A3A] z-0"></div>

              {/* Main Building Image */}
              <img
                src={mainImage}
                className="relative z-10 w-[640px] shadow-2xl block"
                alt="Architecture Main"
              />
            </div>
          </div>

          {/* 4. WATCH VIDEO ELEMENT (Bottom Left) */}
          <div className="absolute bottom-[20px] left-0">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Dashed spinning border */}
              <div className="absolute inset-0 border border-dashed border-gray-400 rounded-full animate-[spin_15s_linear_infinite]"></div>
              {/* Play button */}
              <div className="bg-[#3D4A59] w-12 h-12 rounded-full flex items-center justify-center pl-1 shadow-lg">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent"></div>
              </div>
              {/* Circular Text labels (Approx) */}
              <div className="absolute inset-0 text-[8px] uppercase tracking-widest flex items-center justify-center pointer-events-none">
                <span className="absolute top-2">V I D E O</span>
                <span className="absolute bottom-2">W A T C H</span>
              </div>
            </div>
          </div>

          {/* 5. DESCRIPTION TEXT (Bottom Right) */}
          <div className="absolute bottom-[-60px] right-0 max-w-[320px] text-right">
            <div className="w-full h-[1px] bg-gray-400 mb-6"></div>
            <p className="text-[12px] leading-[1.8] text-gray-500 font-light">
              Our architectural team excels at creating visually appealing and
              function-driven spaces. We specialize in residential, commercial,
              and industrial architectural design, tailoring our designs to meet
              the unique needs of each client.
            </p>
          </div>
        </div>

        {/* BOTTOM FULL WIDTH LINE */}
        <div className="absolute bottom-[-120px] left-10 right-10 h-[1px] bg-gray-300 opacity-60"></div>
      </div>
    </div>
  );
};

export default Landing;
