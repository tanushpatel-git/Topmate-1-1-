import React from "react";
import { useNavigate } from "react-router-dom";
import EmptyScreen from "../../assets/EmptyScreen.svg";

const PriorityDmPending = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* If backend data exists */}
      {data && data.length > 0 ? (
        <div>
          {/* Render your DM list here */}
          {data.map((item, index) => (
            <div key={index} className="p-4 border-b">
              {item.message}
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center mt-[2rem] text-center">
          
          <img src={EmptyScreen} alt="Empty" />

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-2">
            Share your page
          </h2>

          <p className="text-gray-500 text-lg md:text-xl max-w-md mb-6">
            A new booking might just be around the corner, share your page today!
          </p>

          <button
            className="bg-black text-white px-6 py-3 rounded-md font-semibold"
            onClick={() => navigate("/search")}
          >
            Share Page
          </button>
        </div>
      )}
    </div>
  );
};

export default PriorityDmPending;