import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const OverviewCard = ({ service }) => {

  const { title, price, category, duration, user } = service;

  const navigate = useNavigate();

  const handleClick = () => {
    if (category === "one-to-one") {
      navigate(`/booking/one-to-one/${service._id}`);
    } else if (category === "priorityDm") {
        navigate("/booking/confirm", {
            state: {
                service,
                user,
            },
        });
    } else if (category === "webinar") {
      toast("Webinars coming soon!", { icon: "🚧" });
      navigate("/upcoming", { state: { type: "webinar" } });
    } else {
      toast("Packages coming soon!", { icon: "🚧" });
      navigate("/upcoming", { state: { type: "package" } });
    }
  };



  const name = `${user?.firstName || ""} ${user?.lastName || ""}`;

  const handleProfileClick = (e) => {
    e.preventDefault();
    navigate(`/profile/${user?._id}`);
  };

  return (
  <div className=" w-[100%] h-[250px] sm:w-[260px] min-h-[170px] sm:min-h-[300px] bg-white rounded-2xl shadow-sm p-3 sm:p-4 hover:shadow-md transition flex flex-col justify-between">
      <div className="flex-1">
        {/* Top Section */}
        <div className="flex gap-3">
          <button onClick={handleProfileClick} className="focus:outline-none">
            <img
              src={user?.userImageUrl}
              alt="user"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover hover:opacity-80 transition"
            />
          </button>

          <div className="flex flex-col justify-between">
            <h2 className="text-base sm:text-lg font-semibold leading-tight line-clamp-2">
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
        <p className="text-sm text-gray-500 mt-2 sm:mt-3">
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
              {category || "Priority DM"}
            </span>

          </div>
        )}



      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-gray-200 pt-3 mt-3">

        <button onClick={handleProfileClick} className="text-md line-clamp-1 text-gray-500 hover:text-black text-left">
          by {name}
        </button>

        <button className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 rounded-full hover:bg-gray-800" onClick={handleClick}
        >
          {category === "one-to-one" ? "See Availability" : category === "priorityDm" ? "send DM" : category == 'webinar' ? "reserve" : "Book Now"}


        </button>
      </div>

    </div>
  );
};

export default OverviewCard;
