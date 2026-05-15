import React from "react";
import OverviewCards from "./OverviewCard";
import ServiceCard from "./ServiceCard";

const balls = [0, 1, 2, 3];

const DetailsCardArea = ({ detailsOfDeveloper = [], isLoading, isError }) => {
  return (
    <div className="min-h-screen bg-[#E9E6DE] py-6 md:py-10 px-4">

      <div className="w-full max-w-5xl lg:max-w-6xl mx-auto px-4">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            md:gap-6
            mt-5
            place-items-center
            mt-10
          "

        >
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center py-20">
              <div className="relative w-16 h-16">
                <style>{`
                  @keyframes ball-spin {
                    0%   { transform: rotate(0deg)   translateX(28px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(28px) rotate(-360deg); }
                  }
                `}</style>
                {balls.map((i) => (
                  <div
                    key={i}
                    className="absolute w-3.5 h-3.5 rounded-full bg-[#983E01]"
                    style={{
                      top: "50%",
                      left: "50%",
                      margin: "-7px 0 0 -7px",
                      animation: `ball-spin 1.2s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          ) : isError ? (
            <p className="col-span-full text-center text-red-500 py-20">Error loading data</p>
          ) : detailsOfDeveloper.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-20 text-lg">No user is found in this category</p>
          ) : (
            detailsOfDeveloper.map((developer) => (
              <div key={developer?._id} className="mt-5  mb-5 w-full max-w-[320px]">  
                {developer.category === "package" ||
                developer.category === "product" ? (
                  <ServiceCard service={developer} />
                ) : (
                  <OverviewCards service={developer} />
                )}

              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default DetailsCardArea;