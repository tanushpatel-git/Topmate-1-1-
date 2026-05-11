import React from "react";
import OverviewCards from "./OverviewCard";
import ServiceCard from "./ServiceCard";

const DetailsCardArea = ({ detailsOfDeveloper = [] }) => {
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
            bg-red-300
            mt-10
          "

        >
          {detailsOfDeveloper.map((developer) => (
            <div key={developer?._id} className="mt-5  mb-5 w-full max-w-[320px]">  
              {developer.category === "package" ||
              developer.category === "product" ? (
                <ServiceCard service={developer} />
              ) : (
                <OverviewCards service={developer} />
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DetailsCardArea;