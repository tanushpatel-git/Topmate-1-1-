import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const ServiceCard = ({ service }) => {

  const {
    title,
    price,
    duration,
    category,
    user 
  } = service;

  const name = `${user?.firstName || ""} ${user?.lastName || ""}`;

  const navigate = useNavigate();


  const handleClick = () => {
    if(category === "product"){
      navigate(`/booking/products/${service._id}`);
    }
    else if(category === "package"){
      toast("Packages coming soon!", { icon: "🚧" });
      navigate("/upcoming", { state: { type: "package" } });
    }


  };  

  return (
    <div className=" w-[100%] h-[250px] sm:w-[260px] min-h-[170px] sm:min-h-[300px] bg-white rounded-2xl shadow-sm p-3 sm:p-4 hover:shadow-md transition flex flex-col justify-between">

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

        <button className="bg-black text-white text-sm px-3 py-1.5 rounded-full " onClick={handleClick} >
            Check out
        </button>
      </div>

    </div>
  );
};
export default ServiceCard;