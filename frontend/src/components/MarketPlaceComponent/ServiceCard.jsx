import React from "react";
const ServiceCard = ({ service }) => {

  const {
    title,
    price,
    duration,
    category,
    user   // ✅ FIX
  } = service;

  const name = `${user?.firstName || ""} ${user?.lastName || ""}`;

  return (
    <div className="bg-white rounded-xl shadow-sm h-[300px] p-4 w-[260px] hover:shadow-md transition">


<div className="h-[75%]">
      {/* Top Section */}
      <div className="flex gap-3 items-center">
        <img
          src={user?.userImageUrl}
          alt="user"
          className="w-14 h-14 rounded-xl object-cover"
        />

        <div>
          <h2 className="text-lg font-semibold line-clamp-2">{title}</h2>

          <p className="text-md text-gray-500">
            ₹ {price} | ⭐ 4.5(50)
          </p>
        </div>
      </div>

      {/* Category UI */}
      <div className="mt-4">

        {category === "product" && (
          <div className="flex gap-2 text-sm">
            <span className="border px-3 py-1 rounded-full hover:bg-gray-200">product</span>
          </div>
        )}

        {category === "package" && (
          <span className="border px-3 py-1 rounded-full hover:bg-gray-200 text-sm">
            Package
          </span>
        )}

      </div>
  </div>
      {/* Footer */}
      <div className="flex h-[50px] justify-between items-center border-t-2 border-gray-200 pt-4 ">
        <p className="text-md line-clamp-1 text-gray-500 ">
          by {name}
        </p>

        <button className="bg-black text-white text-sm px-3 py-1.5 rounded-full">
          
            Check out
        </button>
      </div>

    </div>
  );
};
export default ServiceCard;