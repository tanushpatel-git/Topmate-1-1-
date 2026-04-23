import React from "react";
import { useNavigate } from "react-router-dom";
import EmptyScreen from "../../assets/empty-screen-dm.svg";

const PriorityDmAnswer = ({ data }) => {
  const navigate = useNavigate();


  return (
    <div>
      {/* Navbar */}
      <nav className="border-b-2 border-gray-200 px-6 md:px-20 py-5">
        <h1 className="text-3xl md:text-4xl font-semibold mb-5">
          Priority DM
        </h1>

        <div className="flex justify-between items-center flex-wrap gap-4">
          
          {/* Tabs */}
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/creator-dashboard/queries/pending")}
              className="text-lg px-4 py-1 rounded-full border"
            >
              Pending
            </button>

            <button className="text-lg px-4 py-1 rounded-full border bg-gray-200">
              Answered
            </button>
          </div>

          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 text-lg rounded-full">
            Edit Services
          </button>
        </div>
      </nav>

      {/* Content */}
      {Array.isArray(data) && data.length > 0 ? (
        <div>
          {data.map((item) => (
            <div key={item.id || item._id} className="p-4 border-b">
              {item.message}
            </div>
          ))}
        </div>
      ) :  (
              <div className="flex flex-col items-center justify-center  mt-[2rem] text-center">
                <img src={EmptyScreen} alt="Empty" />
      
                <h2 className="text-3xl font-semibold text-gray-700 mb-2">
                  Try Priority DM
                </h2>
      <p>Priority DM allows you to accept DM requests without revealing your information and  reply seamlessly  <br />through <span className="font-bold" > WhatsApp.</span>
      </p>
      
                <button
                  className="bg-black text-white font-semibold px-6 py-3 rounded-md mt-4"
                  onClick={() => navigate("/creator-dashboard/services")}
                >
                  Add Priority DM
                </button>
              </div>
            )}
    </div>
  );
};

export default PriorityDmAnswer;