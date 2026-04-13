import React, { useState } from "react";

function SeekerBooking() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const filters = [
    "1:1 calls",
    "Priority DM",
    "Products/Courses",
    "Workshops/Live Cohorts",
    "Packages",
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-6">
      
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Bookings
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {filters.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full border text-sm ${
              index === 0
                ? "bg-gray-100 border-black font-medium"
                : "border-gray-300 text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b mb-10">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`pb-2 text-sm ${
            activeTab === "upcoming"
              ? "border-b-2 border-black font-medium"
              : "text-gray-500"
          }`}
        >
          Upcoming
        </button>

        <button
          onClick={() => setActiveTab("completed")}
          className={`pb-2 text-sm ${
            activeTab === "completed"
              ? "border-b-2 border-black font-medium"
              : "text-gray-500"
          }`}
        >
          Completed
        </button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center mt-24 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          So empty..
        </h2>

        <p className="text-gray-500 max-w-md mb-6" >
          Start searching for experts to book their time for insightful 1:1 sessions
        </p>

        {/* Card */}
        <div className="flex items-center justify-between w-full max-w-xl border rounded-xl p-4 bg-white shadow-sm ">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center  rounded-lg">
          <img src="https://topmate.io/cdn-cgi/image/width=96,quality=90/images/follower-dashboard/bookings/Empty-1.png" alt="" />
            </div>

            <div className="text-left">
              <h3 className="font-semibold text-gray-800">
                Book a call
              </h3>
              <p className="text-sm text-gray-500">
                Search for experts on topmate
              </p>
            </div>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
            Try Here
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeekerBooking;