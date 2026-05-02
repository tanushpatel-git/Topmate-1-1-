import React from "react";

const ServiceCard = ({ service }) => {

  console.log('service', service);
  const {
    title,
    price,
    duration,
    category,
    userDetails
  } = service;

  const name = `${userDetails?.firstName || ""} ${userDetails?.lastName || ""}`;

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 w-[260px] hover:shadow-md transition">

      {/* Top Section */}
      <div className="flex gap-3 items-center">
        <img
          src={userDetails?.userImageUrl}
          alt="user"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h2 className="text-sm font-semibold line-clamp-1">{title}</h2>

          {/* Price + rating */}
          <p className="text-xs text-gray-500">
            ₹ {price} | ⭐ 4.5
          </p>
        </div>
      </div>

      {/* Category Based UI */}
      <div className="mt-4">

        {/* 🟢 1:1 CALL */}
        {category === "1:1" && (
          <div className="flex gap-2 text-xs">
            <span className="border px-2 py-1 rounded-full">1:1 call</span>
            <span className="border px-2 py-1 rounded-full">
              {duration} mins
            </span>
          </div>
        )}

        {/* 🟡 DIGITAL PRODUCT */}
        {category === "digital" && (
          <span className="border px-2 py-1 text-xs rounded-full">
            Digital Product
          </span>
        )}

        {/* 🔵 WEBINAR */}
        {category === "webinar" && (
          <div className="flex gap-2 text-xs">
            <span className="border px-2 py-1 rounded-full">Webinar</span>
            <span className="border px-2 py-1 rounded-full">
              Upcoming
            </span>
          </div>
        )}

        {/* 🟣 PACKAGE */}
        {category === "package" && (
          <span className="border px-2 py-1 text-xs rounded-full">
            Package
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xs text-gray-500">
          by {name}
        </p>

        <button className="bg-black text-white text-xs px-3 py-1.5 rounded-full">
          {category === "1:1"
            ? "See Availability"
            : category === "webinar"
            ? "Reserve"
            : "Check out"}
        </button>
      </div>

    </div>
  );
};

export default ServiceCard;