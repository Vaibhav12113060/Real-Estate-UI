// import React from "react";
// import MainImage from "../assets/Design-Process-Assets/BigImage.png";
// import Card1 from "../assets/Design-Process-Assets/Card1.png";
// import Card2 from "../assets/Design-Process-Assets/Card2.png";
// import Card3 from "../assets/Design-Process-Assets/Card3.png";

// const DesignProcess = () => {
//   return (
//     <div className="w-full flex justify-center py-24 bg-[#F1F1F1]">
//       <div className="w-[1400px]">
//         <h2 className="text-3xl font-semibold mb-12">Design Process</h2>

//         {/* BIG IMAGE */}
//         <div className="mb-16 border-[12px] border-[#C48A3A] p-[6px] bg-white">
//           <img src={MainImage} className="w-full" />
//         </div>

//         {/* CARDS */}
//         <div className="grid grid-cols-3 gap-12">
//           {[Card1, Card2, Card3].map((img, i) => (
//             <div key={i}>
//               <img src={img} className="mb-4" />

//               <h3 className="font-semibold text-lg">
//                 {["Design", "Pricing", "Implementation"][i]}
//               </h3>

//               <p className="text-gray-500 text-sm mt-2">
//                 {
//                   [
//                     "Unique and modern design solutions.",
//                     "Transparent and flexible pricing.",
//                     "High-quality project execution.",
//                   ][i]
//                 }
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DesignProcess;

import React from "react";
import MainImage from "../assets/Design-Process-Assets/BigImage.png";
import Card1 from "../assets/Design-Process-Assets/Card1.png";
import Card2 from "../assets/Design-Process-Assets/Card2.png";
import Card3 from "../assets/Design-Process-Assets/Card3.png";

const DesignProcess = () => {
  const stages = [
    {
      id: "01",
      title: "Design",
      img: Card1,
      text: "The design stage begins by developing an understanding of our clients' needs and predispositions in an initial consultation with one of our designers. After this dialogue, we present the first draft of the design with a full explanation of our suggestions and their rationale.\n\nAfter client feedback, we rework our design to include any required modifications.\n\nAfter their approval we finalize the design and take full measurements.",
    },
    {
      id: "02",
      title: "Pricing and Materials Approval",
      img: Card2,
      text: "Once full measurements have been calculated and quantities estimated,\n\nwe present a comprehensive cost analysis, giving clients a range of material options commensurate with their project and budget.",
    },
    {
      id: "03",
      title: "Implementation",
      img: Card3,
      text: "After approving the plans and with the client's approval of carefully chosen materials,\n\nwe carry out the finishing and decoration work, monitoring the fit-out throughout its progress.\n\nAfter this, we provide our clients with peace of mind thanks to our aftersales service.",
    },
  ];

  return (
    <div className="w-full bg-[#3D4A59] text-white py-24 px-6 md:px-20 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Header Section */}
        <div className="text-center mb-24">
          <p className="text-[12px] uppercase tracking-[0.5em] text-gray-300 mb-8">
            Innovative architectural designs
          </p>
          <h1 className="text-5xl md:text-[80px] font-light leading-[1.1] max-w-[1100px] mx-auto mb-20 tracking-tight">
            The place where you spend your time is a direct reflection of your
            culture
          </h1>

          {/* Hero Image Section */}
          <div className="relative inline-block w-full">
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-[3px] border-l-[3px] border-[#C48A3A]"></div>
            <div className="absolute -bottom-4 -right-4 w-48 h-10 border-b-[3px] border-r-[3px] border-[#C48A3A]"></div>

            <div className="border border-[#C48A3A]/40 p-1.5">
              <img
                src={MainImage}
                className="w-full h-auto"
                alt="Hero Architecture"
              />
            </div>
          </div>
        </div>

        {/* --- RELEVANT SUB-HEADING (FIXED) --- */}
        <div className="mt-32 mb-12">
          <h3 className="text-[18px] md:text-[22px] font-normal tracking-wide text-gray-200">
            Our work goes through three stages
          </h3>
        </div>

        {/* Stages Section */}
        <div className="flex flex-col">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className="relative border-t border-gray-500/40 pt-16 pb-32 flex flex-col md:flex-row gap-16"
            >
              {/* Left Column: Number, Title, Button */}
              <div className="flex-1 flex flex-col justify-between min-h-[350px]">
                <div>
                  <div className="mb-6">
                    <span className="text-[15px] font-bold text-[#C48A3A] tracking-tighter">
                      {stage.id}
                      <div className="w-8 h-[2px] bg-[#C48A3A] mt-1"></div>
                    </span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-normal leading-tight">
                    {stage.title}
                  </h2>
                </div>

                {/* View Project Button (Bottom Positioned) */}
                <div className="mt-16">
                  <button className="group flex items-center gap-5 px-12 py-3.5 border border-gray-400 rounded-full text-[12px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#3D4A59] transition-all duration-300">
                    View Project
                    <span className="text-xl group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>

              {/* Middle Column: Image */}
              <div className="flex-1 flex justify-center items-start">
                <div className="p-1.5 border border-[#C48A3A] w-full max-w-[420px]">
                  <img
                    src={stage.img}
                    className="w-full h-auto block grayscale-[30%]"
                    alt={stage.title}
                  />
                </div>
              </div>

              {/* Right Column: Description Text */}
              <div className="flex-1">
                <p className="text-[17px] leading-[1.8] text-gray-300 font-light whitespace-pre-line max-w-[480px] tracking-normal">
                  {stage.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
