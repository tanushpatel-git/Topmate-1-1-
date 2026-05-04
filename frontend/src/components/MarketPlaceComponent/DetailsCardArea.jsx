import React from "react";
import OverviewCards from "./OverviewCard";
import ServiceCard from "./ServiceCard";

const DetailsCardArea = ({ detailsOfDeveloper = [] }) => {
  return (
    <div className="h-[87.5vh] mt-10 py-10 bg-[#E9E6DE] w-full flex justify-center overflow-hidden">
      <div className="w-[50%] mx-auto">


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] h-full overflow-y-auto">

        {detailsOfDeveloper.map((developer) => (
          <>
            {developer.category === "package" || developer.category === "product" ? (
              
              <ServiceCard key={developer?._id} service={developer} />
              
            ) : (
              <OverviewCards key={developer?._id} service={developer} />
            )}
          </>
        ))}
      </div>
        </div>
    </div>
  );
};
export default DetailsCardArea;

