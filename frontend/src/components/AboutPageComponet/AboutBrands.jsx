import React from "react";
import img1 from "../../assets/about-img-investor-1.png";
import img2 from "../../assets/about-img-investor-2.png";
import img3 from "../../assets/about-img-investor-3.svg";

const AboutBrands = () => {
  return (
    <div className="w-full bg-[#f3f3f3] h-[30vh] flex items-center justify-center md:px-20 overflow-hidden">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT TEXT */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-700">
          Our backers
        </h2>

        {/* RIGHT CARDS */}
        <div className="flex flex-wrap gap-6 justify-center">
          
          {/* Card 1 */}
          <div className="bg-white px-8 py-6 rounded-2xl shadow-sm flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400/50 hover:bg-gray-50">
            <img src={img1} alt="brand1" className="h-6" />
            <span className="font-medium text-gray-700">India Quotient</span>
          </div>

          {/* Card 2 */}
          <div className="bg-white px-8 py-6 rounded-2xl shadow-sm flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400/50 hover:bg-gray-50">
            <img src={img2} alt="brand2" className="h-6" />
            <span className="font-medium text-gray-700">Titan Capital</span>
          </div>

          {/* Card 3 */}
          <div className="bg-white px-8 py-6 rounded-2xl shadow-sm flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400/50 hover:bg-gray-50">
            <img src={img3} alt="brand3" className="h-6" />
            <span className="font-medium text-gray-700">20+ angels</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutBrands;