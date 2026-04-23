import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmptyScreen from "../../assets/EmptyScreen.svg";

function CreatorBooking() {

  const { section, type, status } = useParams();

  const navigate = useNavigate();

  const activeFilter = type || "one-to-one";
  const activeTab = status || "upcoming";

  const [data, setData] = useState([]);

  const filters = [
    { label: "1:1 calls", value: "one-to-one" },
    { label: "Products/Courses", value: "product" },
    { label: "Workshops/Live Cohorts", value: "webinar" },
    { label: "Packages", value: "package" },
  ];

  const mockData = {
    "one-to-one": {
      upcoming: [],
      completed: [
        {
          id: 1,
          title: "Career Guidance Call",
          expert: "Rahul Sharma",
          date: "2026-04-20",
          status: "completed",
        },
      ],
    },
    product: {
      upcoming: [
        {
          id: 2,
          title: "React Mastery Course",
          expert: "Aman Verma",
          date: "2026-03-10",
          status: "upcoming",
        },
      ],
      completed: [],
    },
    webinar: {
      upcoming: [],
      completed: [],
    },
    package: {
      upcoming: [],
      completed: [],
    },
  };

  const handleTabChange = (tab) => {
    navigate(`/creator-dashboard/calls/${activeFilter}/${tab}`); // Navigate to the correct route based on the active filter and tab
  };

  const handleFilterChange = (filter) => {
    navigate(`/creator-dashboard/calls/${filter}/${activeTab}`);  // handle ongoing and completed tabs
  };

  useEffect(() => {

    const result = mockData[activeFilter]?.[activeTab] || [];

    setData(result);
  }, [activeFilter, activeTab]);

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-6">

      {/* Heading */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Bookings
      </h1>

      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => handleFilterChange(item.value)}
            className={`px-4 py-2 rounded-full border ${
              activeFilter === item.value
                ? "bg-gray-100 border-black"
                : "border-gray-300"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b mb-10">
        <button
          onClick={() => handleTabChange("upcoming")}
          className={`pb-2 ${
            activeTab === "upcoming"
              ? "border-b-2 border-black font-medium"
              : "text-gray-500"
          }`}
        >
          Upcoming
        </button>

        <button
          onClick={() => handleTabChange("completed")}
          className={`pb-2 ${
            activeTab === "completed"
              ? "border-b-2 border-black font-medium"
              : "text-gray-500"
          }`}
        >
          Completed
        </button>
      </div>

      {/* Data */}
      {data.length > 0 ? (
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.id} className="max-w-lg border rounded-xl bg-white shadow-sm">
              
              <div className="flex justify-between px-6 py-3 border-b">
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                  {item.type || "Video Call"}
                </span>
                <span className="text-sm text-gray-500">
                  {item.date}
                </span>
              </div>

              <h3 className="text-xl font-semibold px-5 mt-3">
                {item.title}
              </h3>

              <p className="text-blue-600 underline px-5">
                {item.expert}
              </p>

              <div className="flex justify-between px-5 py-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {item.status}
                </span>

                <button className="bg-gray-100 px-4 py-2 rounded-md">
                  Booking Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10 text-center">
          <img src={EmptyScreen} alt="" />

          <h2 className="text-3xl font-semibold mt-4">
            Share your page
          </h2>

          <button
            className="bg-black text-white px-6 py-3 mt-4 rounded-md"
            onClick={() => navigate("/search")}
          >
            Share Page
          </button>
        </div>
      )}
    </div>
  );
}

export default CreatorBooking;