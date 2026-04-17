import React, { useState } from "react";
import PriorityDmPending from "./PriorityDmPending";
import PriorityDmAnswer from "./PriorityDmAnswer";
import { useNavigate } from "react-router-dom";

const CreatorPriorityDm = () => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <div className="bg-white min-h-screen">
      
      {/* Navbar */}
      <nav className="border-b-2 border-gray-200 px-6 md:px-20 py-5">
        
        <h1 className="text-3xl md:text-4xl font-semibold mb-5">
          Priority DM
        </h1>

        <div className="flex justify-between items-center flex-wrap gap-4">

          {/* Tabs */}
          <div className="flex gap-4">
            
            <button
              onClick={() => setActiveTab("pending")}
              className={`text-lg px-4 py-1 rounded-full border transition ${
                activeTab === "pending"
                  ? "bg-[#F3F3F1] text-black"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              Pending
            </button>

            <button
              onClick={() => setActiveTab("answered")}
              className={`text-lg px-4 py-1 rounded-full border transition ${
                activeTab === "answered"
                  ? "bg-[#F3F3F1] text-black"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              Answered
            </button>

          </div>

          {/* Edit Button */}
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 text-lg rounded-full hover:bg-gray-200 transition">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z" />
            </svg>

            Edit Services
          </button>

        </div>
      </nav>

      {/* Content Area */}
      <div className="p-6 md:px-20">
        {activeTab === "pending" ? (
          navigate('/creator-dashboard/queries/pending') && window.location.reload() && <PriorityDmPending /> && setActiveTab("pending")
        ) : (
          navigate('/creator-dashboard/queries/answer') && window.location.reload() && <PriorityDmAnswer /> && setActiveTab("answered") 

        )}
      </div>

    </div>
  );
};

export default CreatorPriorityDm;