import React from "react";

const EarningsSection = () => {
  return (
    <div className="w-full bg-[#FDF2EF] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          
          <div className="w-full md:w-0 lg:w-1/12"></div>
          
          
          <div className="w-full md:w-full lg:w-10/12">
          
            <div className="text-center mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black leading-tight exploring-text">
                We earn only when <br className="hidden sm:block" />
                <b>you earn</b>
              </h1>
            </div>

          
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed exploring-desc">
                We charge a small commission on your earnings.
                <br />
                No CC required. No upfront fees. No recurring charges.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-0 lg:w-1/12"></div>
        </div>
      </div>
    </div>
  );
};

export default EarningsSection;