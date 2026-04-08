import React from "react";
import pricingFeatures3 from "../../assets/pricing-features-3.svg";
import pricingFeatures4 from "../../assets/pricing-features-4.svg";
import pricingFeatures5 from "../../assets/pricing-features-5.svg";
import pricingFeatures2 from "../../assets/pricingGrid-features-2.svg";
import pricingFeatures1 from "../../assets/pricingGrid-features-1.svg";

export default function PricingGrid() {
  return (
    <div className="min-h-screen  bg-[#0f2e1c] flex flex-col items-center justify-center px-4 sm:px-6 py-16 md:py-20">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 text-center mt-[10rem] mb-20">
        Creators on Topmate earn <span className="text-green-400">73%</span> more
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-7xl mx-auto w-full ">

        {/* Card 1 */}
        <div className="rounded-3xl h-[350px] sm:h-[300px] overflow-hidden flex items-center justify-center md:scale-x-90">
          <img
            src={pricingFeatures1}
            alt="feature 1"
            className="w-full h-full object-fit"
          />
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl  h-[350px] sm:h-[300px]  overflow-hidden flex items-center justify-center md:scale-x-110 md:mr-3">
          <img
            src={pricingFeatures2}
            alt="feature 2"
            className="w-full h-full object-fit"
          />
        </div>

        {/* Big Image Card */}
        <div className="rounded-3xl h-[350px] sm:h-[300px md:h-full overflow-hidden flex items-center justify-center md:row-span-2">
          <img
            src={pricingFeatures5}
            alt="feature main"
            className="w-full h-full object-fit"
          />
        </div>

        {/* Card 3 */}
        <div className=" rounded-3xl  h-[350px] sm:h-[300px] overflow-hidden flex items-center justify-center md:scale-x-110 md:ml-3 md:origin-left">
          <img
            src={pricingFeatures3}
            alt="feature 3"
            className="w-full h-full object-fit"
          />
        </div>

        {/* Card 4 */}
        <div className="rounded-3xl h-[350px] sm:h-[300px] overflow-hidden flex items-center justify-center md:scale-x-90 md:origin-right">
          <img
            src={pricingFeatures4}
            alt="feature 4"
            className="w-full h-full object-fit"
          />
        </div>

      </div>
    </div>
  );
}