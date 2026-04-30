import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import EmptyScreen1 from "../../assets/img-empty1.svg";
import EmptyScreen2 from "../../assets/img-empty2.svg";
import EmptyScreen3 from "../../assets/img-empty3.svg";
import EmptyScreen4 from "../../assets/img-empty4.svg";
import EmptyScreen5 from "../../assets/img-empty5.svg";
import useGetMyServices from "../../hooks/useGetMyServices";
import DeleteServiceHook from "../../hooks/DeleteServiceHook";

const emptyData = {
  "one-to-one": {
    image: EmptyScreen1,
    title: "Create a 1:1 service",
    description: "Users on topmate sell over 10k services each month.",
  },
  product: {
    image: EmptyScreen2,
    title: "Sell digital products",
    description: "Digital products are a great source of side income.",
  },
  webinar: {
    image: EmptyScreen3,
    title: "Host a webinar",
    description: "Address common questions by hosting a webinar.",
  },
  package: {
    image: EmptyScreen4,
    title: "Create a package",
    description: "Combine your services to sell as a package.",
  },
  priorityDm: {
    image: EmptyScreen5,
    title: "Answer Priority DM",
    description: "Priority DM are a good way to sell your expertise where a call is not required.",
  }
};

const CreatorServices = () => {

  const navigate = useNavigate();
  const { section, type, status } = useParams();
  const { data, isLoading } = useGetMyServices();

  const activeFilter = type || "one-to-one";
  const currentEmpty = emptyData[activeFilter];
  const [openMenuId, setOpenMenuId] = useState(null);

const { mutate: deleteService } = DeleteServiceHook();


  const filters = [
    { label: "1:1 call", value: "one-to-one" },
    { label: "Products/Courses", value: "product" },
    { label: "Workshops/Live Cohorts", value: "webinar" },
    { label: "Packages", value: "package" },
    { label: "Priority Dm", value: "priorityDm" },
  ];


  const handleFilterChange = (activeFilter) => {

    navigate(`/creator-dashboard/services/${activeFilter}`); // Navigate to the correct route based on the active filter and tab
  };


  const services = data?.services || [];

  const filteredServices = services.filter(
    (service) => service.category === activeFilter
  );

  const handleDuplicate = (item) => {
  console.log("Duplicate:", item);
};


const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure?");

  if (!confirmDelete) return;

  deleteService(id, {
    onSuccess: () => {
      alert("Deleted successfully");
    },
    onError: () => {
      alert("Delete failed");
    },
  });
};

  return (
    <div className="w-full min-h-screen bg-gray-50  py-6">


      {/* Heading */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6 px-10">
        Services
      </h1>

<div className="flex flex-col lg:flex-row lg:items-start xl:items-center lg:justify-between border-b gap-4 px-4 lg:px-8 xl:px-10 py-4">

  {/* Filters */}
  <div className="flex gap-3 flex-wrap">
    {filters.map((item) => (
      <button
        key={item.value}
        onClick={() => handleFilterChange(item.value)}
        className={`px-4 py-2 rounded-full border text-sm ${
          activeFilter === item.value
            ? "bg-gray-100 border-black border-2 font-semibold"
            : "border-gray-300 border-2"
        }`}
      >
        {item.label}
      </button>
    ))}
  </div>

  {/* Actions */}
  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full lg:w-auto">

    <button className="bg-black text-white px-4 py-2 rounded-md h-10 font-semibold w-full sm:w-auto">
      + Add New
    </button>

    <button className="px-4 py-2 rounded-md h-10 bg-gray-100 border-gray-300 border-2 text-black font-semibold hover:bg-gray-200 w-full sm:w-auto">
      Templates
    </button>

  </div>
</div>


      {/* Data */}
      {filteredServices.length > 0 ? (
        <div className="space-y-4">
          {filteredServices.map((item) => (
            <div
              key={item._id}
              className="w-[min(100%,350px)] max-w-2xl bg-white border rounded-xl shadow-sm m-4 "
            >
              {/* Top */}
              <div className="flex justify-between items-center px-5 py-2">
                <div >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    ₹ {item.price}
                  </p>
                </div>

                {/* Clickable Status */}
                <div
                  onClick={() =>
                    navigate(
                      `/creator-dashboard/services/${item.category}/edit/${item._id}`
                    )
                  }
                  className={`px-5 py-1 rounded-full text-sm cursor-pointer
          ${item.status === "draft"
                      ? "bg-gray-50 text-gray-600"
                      : "bg-green-100 text-green-600"
                    }`}
                >
                  {item.status === "draft" ? "Hidden" : "Live"}
                </div>
              </div>

              <div className="border-t my-4"></div>

              {/* Actions */}
              <div className="flex gap-3 px-5 py-2">
                <button
                  onClick={() =>
                    navigate(
                      `/creator-dashboard/services/${item.category}/edit/${item._id}`
                    )

                  }
                  className="px-4 py-2 bg-gray-100 rounded-full text-black  text-sm hover:bg-gray-200"
                >
                  Edit
                </button>

                <button className="px-4 py-2 bg-gray-100 rounded-full  text-black text-sm hover:bg-gray-200" onClick={() => navigate('/creator-dashboard/analytics')}>
                  Analytics
                </button><div className="relative inline-block">
  <button
    className="p-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
    onClick={(e) => {
      e.stopPropagation();
      setOpenMenuId(openMenuId === item._id ? null : item._id);
    }}
  >
    ⋮
  </button>

  {openMenuId === item._id && (
    <div className="absolute text-[14px] text-center  mt-2 top-full mt-2 w-30 bg-white  rounded-lg shadow-md z-10">
      <button
        onClick={() => handleDuplicate(item)}
        className="hover:bg-gray-100  py-3 px-1"
      >
        Duplicate Service
      </button>

      <button
          onClick={() => handleDelete(item._id)}
        className="hover:bg-gray-100 py-2 px-1"
      >
        Delete Service
      </button>
    </div>
  )}
</div>

              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-[2rem] text-center">
          <img
            src={currentEmpty?.image}
            alt="Empty"
            className="w-[20rem] h-[20rem]"
          />

          <h2 className="text-3xl font-semibold text-gray-700 mb-2">
            {currentEmpty?.title}
          </h2>

          <p className="text-gray-500 max-w-md">
            {currentEmpty?.description}
          </p>
          <div className=" flex gap-3 ">

            <button
              className="bg-black text-white font-semibold px-6 py-3 rounded-md mt-4"
              onClick={() =>
                navigate(`/creator-dashboard/services/${activeFilter}/create`)
              }
            >
              +Add New
            </button>
            {activeFilter == 'one-to-one' || activeFilter == 'package' ? (<button className="text-black  bg-gray-100 border-2  border-black-300 px-4 py-2  rounded-md font-semibold px-6 py-3 rounded-md mt-4 hover:bg-gray-200">Template</button>) : ("")}

          </div>
        </div>
      )}
    </div>
  );
}



export default CreatorServices;
