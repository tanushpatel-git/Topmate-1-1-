import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SeekerCard = ({ title, buttonText, icon }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Interested");
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl w-[300px] h-auto bg-red-200  shadow-md p-5  max-w-sm hover:shadow-lg transition duration-300 relative">

      {/* Top Row */}
      <div className="flex justify-between items-start mb-4">

        {/* Badge */}
        <div className="relative">
          <span
            onClick={() => setOpen(!open)}
            className="text-xs text-gray-500 bg-gray-100 px-3 py-2 rounded-full flex items-center gap-1 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" > <path d="M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z" /> </svg>
            {value}
            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""
                }`}
            >
              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
            </svg>
          </span>

          {/* Dropdown */}
          {open && (
            <div className="absolute mt-2 bg-white shadow-md rounded-lg p-2 w-40 z-10">

              <p
                onClick={() => {
                  setValue("Interested");
                  setOpen(false);
                }}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                Interested
              </p>

              <p
                onClick={() => {
                  setValue("Not Interested");
                  setOpen(false);
                }}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                Not Interested
              </p>

              <p
                onClick={() => {
                  setValue("Completed");
                  setOpen(false);
                }}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                Completed
              </p>

            </div>
          )}
        </div>

        {/* Icon */}
        <img src={icon} alt="icon" className="w-20 h-20 object-cover" />
      </div>

      {/* Content */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6 leading-snug w-[70%]">
        {title}
      </h2>

      {/* Button */}
      <button onKeyDown={(e) => e.key === "Enter" && navigate("/Marketplace")} className="w-full bg-gray-800 text-white py-2.5 rounded-lg  mt-3 text-sm hover:bg-gray-900 transition" onClick={() => navigate("/Marketplace")}>
        {buttonText}
      </button>
    </div>
  );
};

export default SeekerCard;