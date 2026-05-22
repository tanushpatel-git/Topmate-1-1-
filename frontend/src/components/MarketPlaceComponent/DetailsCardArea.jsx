import React from "react";
import OverviewCards from "./OverviewCard";
import ServiceCard from "./ServiceCard";
import { SkeletonMarketplaceGrid } from "../ui/Skeleton";

const DetailsCardArea = ({ detailsOfDeveloper = [], isLoading, isError }) => {
  if (isLoading) return <SkeletonMarketplaceGrid />;

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
          {isError ? (
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