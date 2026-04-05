import React from "react";
import img1 from "../../assets/about-team.png"; 
import smile from '../../assets/about-smile.svg'

const AboutHero = () => {  
  return (
    <div className="w-full min-h-screen bg-[#EDEDED] flex flex-col lg:flex-row items-center justify-center px-6 md:px-[8%] py-16 relative overflow-hidden gap-12">
      
      {/* LEFT TEXT */}
      <div className="flex-1 text-center lg:text-left sm:mt[20%]  mt-[20%] sm:mt-[0%] ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight ">
          Everyone has <br />
          something to share <br />
          and we want to <br />
          enable just that
        </h1>
      </div>

      {/* RIGHT IMAGE STACK */}
      <div className="flex-1 flex justify-center relative w-full">
        
        {/* RED STAR SHAPE */}
       <div className="absolute 
  w-[200px] sm:w-[260px] md:w-[320px] lg:w-[420px] 
  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
  z-0 pointer-events-none">
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <path
      fill="#E63E2F"
      stroke="black"
      strokeWidth="1"
      d="M100 0 
         L130 60 
         L190 60 
         L140 100 
         L160 180 
         L90 135 
         L30 180 
         L60 100 
         L10 60 
         L80 60 Z"
    />
  </svg>
</div>

        {/* STACKED IMAGES */}
        <div className="relative z-10 w-[200px] sm:w-[240px] md:w-[260px] h-[300px]">
          
          <img
            src={img1}
            alt=""
            className="w-full rounded-md shadow-xl rotate-[-8deg] absolute top-4 left-[-15px] sm:left-[-20px]"
          />
          
          <img
            src={img1}
            alt=""
            className="w-full rounded-md shadow-xl rotate-[6deg] absolute top-2 left-[15px] sm:left-[20px]"
          />

          <img
            src={img1}
            alt=""
            className="w-full rounded-md shadow-xl relative"
          />
        </div>
      </div>

      {/* SMILEY */}
      <div className="absolute bottom-6 left-4 sm:left-8 md:left-10 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-[#F51700] rounded-full flex items-center justify-center border-black border-2">
        <img src={smile} alt="" className="w-10 sm:w-14 md:w-16" />  
      </div>
    </div>
  );
};

export default AboutHero;