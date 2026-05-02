import React from "react";
import OverviewCards from "./OverviewCard";
import ServiceCard from "./ServiceCard";

const DetailsCardArea = ({ detailsOfDeveloper = [], }) => {

    return (
        <div className="h-[87.5vh] mt-10 bg-[#E9E6DE] w-full flex justify-center overflow-hidden">

            {/* SCROLLABLE AREA */}
            <div className="w-full max-w-7xl px-4 py-6 sm:py-10 overflow-y-auto">

                <div className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-4 sm:gap-6"
                >
                    {detailsOfDeveloper.map((developer) => (
                        
                        <ServiceCard 
                        key={developer?.id} service={developer}
                        
                            title={developer.name}
                            imageUrl={developer.image}
                            price={developer.price}
                            rating={developer.rating}
                            reviews={developer.reviews}
                            tag={developer.role}
                            duration={developer.duration}
                            mentor={developer.mentor}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default DetailsCardArea;

