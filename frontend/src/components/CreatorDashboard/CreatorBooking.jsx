import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmptyScreen from '../../assets/EmptyScreen.svg'


function CreatorBooking() {


const filters = [
  "1:1 calls",
  "Products/Courses",
  "Workshops/Live Cohorts",
  "Packages",
];

const mockData = {
  "1:1 calls": {
    upcoming: [
    ],
    completed: [ {
        id: 1,
        title: "Career Guidance Call",
        expert: "Rahul Sharma",
        date: "2026-04-20",
      },],
  },
  "Products/Courses": {
    upcoming: [{
        id: 2,
        title: "React Mastery Course",
        expert: "Aman Verma",
        date: "2026-03-10",
      },],
    completed: [],
  },
  "Workshops/Live Cohorts": {
    upcoming: [],
    completed: [],
  },
  Packages: {
    upcoming: [],
    completed: [],
  },
};

  const [activeTab, setActiveTab] = useState("upcoming");
  const [activeFilter, setActiveFilter] = useState("1:1 calls");
  const [data, setData] = useState([]);

  useEffect(() => {

    // Replace this with real API call
    const result = mockData[activeFilter][activeTab];
    setData(result);
  }, [activeFilter, activeTab]);
  
  const Navigate = useNavigate();
  
  return (

    <div className="w-full min-h-screen bg-gray-50 px-6 py-6">
      
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Bookings
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        {filters.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(item)}
            className={`px-4 py-2 rounded-full border text-sm ${
              activeFilter === item
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

      {/*  Data Section */}
      {data.length > 0 ? (
        <div className="space-y-4">
  {data.map((item) => (
    <div
      key={item.id}
      className=" max-w-lg border rounded-xl  bg-white shadow-sm"
    >
      {/* Top Row */}
      <div className="flex justify-between items-center py-2 px-6 mb-3 border-b-2 border-gray-300 pb-3">
        <span className="text-sm bg-gray-100 px-3 py-1 rounded-full border">
          {item.type || "Video Call"}
        </span>

        <span className="text-sm text-gray-500">
          {item.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-800 text-xl px-5">
        {item.title}
      </h3>

      {/* Expert */}
      <p className="text-lg text-blue-600 underline cursor-pointer px-5">
        {item.expert}
      </p>

      {/* Bottom Row */}
      <div className="flex justify-between items-center mt-4 px-5 py-2 ">
        
        
        <span 
          className={`px-3 py-1 text-sm rounded-full font-semibold ${
            item.status === "cancelled"
              ? "bg-red-100 text-red-600"
              : item.status === "completed"
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {item.status === "cancelled"
            ? "Cancelled"
            : item.status === "completed"
            ? "Completed"
            : "Upcoming"}
        </span>

        {/* Button */}
        <button className="bg-gray-100 hover:bg-gray-200 text-ms px-4 py-2 rounded-md font-semibold">
          Booking Details
        </button>
      </div>
    </div>
  ))}
</div>
      ) : (
        /*  Empty State */
        <div className="flex flex-col items-center justify-center mt-[2rem] text-center">
<img src={EmptyScreen} alt="" />

          <h2 className="text-4xl font-semibold text-gray-700 mb-2">
           Share your page
          </h2>

          <p className="text-gray-500 text-xl max-w-md mb-6">
         A new booking might just be around the corner, share your page today!
          </p>

         
            <button className="bg-black text-white px-6 py-3  rounded-md text-bold" onClick={()=>{Navigate('/search')}} >
              Share Page
            </button>
         
        </div>
      )}
    </div>
  );
}

export default CreatorBooking ;