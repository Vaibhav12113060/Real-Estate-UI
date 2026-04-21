// import React from "react";
// import Statue from "../assets/Project-Success-Page-Assets/Statue.png";
// import Horse from "../assets/Project-Success-Page-Assets/Horse.png";
// import Buildings from "../assets/Project-Success-Page-Assets/Buildings.png";

// const ProjectSuccess = () => {
//   return (
//     <div className="w-full flex justify-center py-24">
//       <div className="w-[1400px]">
//         <h2 className="text-3xl font-semibold mb-12">Project Success</h2>

//         {/* STATS */}
//         <div className="flex gap-28 mb-16">
//           {[
//             ["12+", "Years Experience"],
//             ["10K+", "Happy Clients"],
//             ["2M", "Projects Done"],
//           ].map(([num, text], i) => (
//             <div key={i}>
//               <h3 className="text-4xl font-semibold">{num}</h3>
//               <p className="text-gray-500 text-sm mt-1">{text}</p>
//             </div>
//           ))}
//         </div>

//         {/* IMAGES */}
//         <div className="flex gap-10">
//           {[Statue, Horse, Buildings].map((img, i) => (
//             <div key={i} className="border-t-[6px] border-[#C48A3A]">
//               <img src={img} className="w-[300px]" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import Statue from "../assets/Project-Success-Page-Assets/Statue.png";
import Horse from "../assets/Project-Success-Page-Assets/Horse.png";
import Buildings from "../assets/Project-Success-Page-Assets/Buildings.png";

const ProjectSuccess = () => {
  return (
    <div className="w-full bg-[#F8F9FA] py-20 px-6 md:px-20 text-[#3D4A59]">
      <div className="max-w-[1200px] mx-auto">
        {/* Stats Section */}
        <div className="border-t border-b border-gray-300 py-16 flex justify-around mb-24">
          {[
            { num: "12+", label: "Branches" },
            { num: "10K+", label: "Successful Projects" },
            { num: "2M", label: "Satisfied Clients" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <h3 className="text-6xl md:text-7xl font-light mb-2 tracking-tighter">
                {s.num}
              </h3>
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-24">
          <h2 className="text-4xl font-light mb-4 tracking-tight">
            One step towards your dream home
          </h2>
          <p className="text-sm text-gray-500 italic">
            Challenging ourselves in every project
          </p>
        </div>

        {/* --- ADJUSTED COLLAGE LAYOUT --- */}
        <div className="relative min-h-[700px] grid grid-cols-12 gap-8">
          {/* Left: Statue (Chota size) */}
          <div className="col-span-12 md:col-span-4 z-30">
            <div className="border-t-[8px] border-[#C48A3A] pt-3 mb-8 max-w-[280px]">
              <img
                src={Statue}
                className="w-full h-auto shadow-lg"
                alt="Statue"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-600 font-light max-w-[280px]">
              We are also committed to bioengineering in order to produce a
              healthier and more sustainable environment...
            </p>
          </div>

          {/* Right: Overlapping Images (Refined Dimensions) */}
          <div className="col-span-12 md:col-span-8 relative">
            {/* Horse Image (Back) - Width reduced to 75% */}
            <div className="absolute top-0 right-0 w-[75%] border-r-[8px] border-b-[8px] border-[#C48A3A] p-2 z-10">
              <img
                src={Horse}
                className="w-full h-[350px] object-cover"
                alt="Horse Sculpture"
              />
            </div>

            {/* Building Image (Front) - Smaller and focused */}
            <div className="absolute top-[200px] left-[-20px] w-[55%] z-40">
              <img
                src={Buildings}
                className="w-full h-auto shadow-2xl border-[4px] border-white/10"
                alt="Modern Building"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSuccess;
