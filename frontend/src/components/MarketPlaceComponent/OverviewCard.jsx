import React from "react";
import { useNavigate } from "react-router-dom";

const OverviewCard = ({ service }) => {

const { title, price, category, duration, user } = service;

const navigate = useNavigate();

const handleClick = () => {
  if (category === "one-to-one") {
    navigate(`/booking/one-to-one/${service._id}`); 
  } else if (category === "priorityDm") {
    console.log("Open DM");
  } else if (category === "webinar") {
    console.log("Reserve webinar");
  } else {
    console.log("Book package");
  }
};



  const name = `${user?.firstName || ""} ${user?.lastName || ""}`;

  return (
    <div className="bg-white h-[300px] rounded-2xl shadow-sm p-4 w-[260px] hover:shadow-md transition">
<div className="h-[200px]">

      {/* Top Section */}
      <div className="flex gap-3">
        <img
          src={user?.userImageUrl}
          alt="user"
          className="w-14 h-14 rounded-xl object-cover"
        />

        <div className="flex flex-col justify-between">
          <h2 className="text-lg font-semibold leading-tight line-clamp-2">
            {title}
          </h2>

          <div className="flex items-center gap-2 mt-1 text-gray-500">
            <span className="text-md font-medium">₹ {price}</span>
            <span className="text-md bg-green-100 text-green-700 px-2 py-0.5 rounded-md">
              New
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-ms text-gray-500 mt-3">
        Top value bundles trusted by our users.
      </p>

      {/* Tags */}
        {category === 'package' && (
      <div className="flex gap-2 mt-3">
          <span className="border text-sm px-3 py-1 rounded-full">
            {category || "Package"}
            </span>
        <span className="border text-xs px-3 py-1 rounded-full">
          {duration ? `${duration} mins` : "20 services"}
        </span>

      </div>
        )}
      
      {category === 'one-to-one' && (
      <div className="flex gap-2 mt-3">
          <span className="border text-sm px-3 py-1 rounded-full">
            1:1 Call
            </span>
        <span className="border text-xs px-3 py-1 rounded-full">
          {duration ? `${duration} mins` : "20 services"}
        </span>

      </div>
        )}

      {category === 'priorityDm' && (
      <div className="flex gap-2 mt-3">
          <span className="border text-sm px-3 py-1 rounded-full">
            {category || "Priority DM" }
            </span>

      </div>
        )}



</div>
   
      {/* Footer */}
      <div className="flex h-[50px] justify-between items-center border-t-2 border-gray-200 pt-4 ">

        <p className="text-md line-clamp-1 text-gray-500 ">
          by {name}
        </p>

        <button className="bg-black text-white text-sm px-2 py-1.5 rounded-full hover:bg-gray-800  "   onClick={handleClick}
 >          
          {category === "one-to-one" ? "See Availability" : category === "priorityDm" ? "send DM" : category == 'webinar' ? "reserve" : "Book Now"}


        </button>
      </div>

    </div>
  );
};

export default OverviewCard;
