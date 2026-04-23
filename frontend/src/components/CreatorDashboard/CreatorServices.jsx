import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmptyScreen1 from "../../assets/img-empty1.svg";
import EmptyScreen2 from "../../assets/img-empty2.svg";
import EmptyScreen3 from "../../assets/img-empty3.svg";
import EmptyScreen4 from "../../assets/img-empty4.svg";
import EmptyScreen5 from "../../assets/img-empty5.svg";



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
};

function CreatorServices() {

  const { section, type, status } = useParams();

  const navigate = useNavigate();

  const activeFilter = type || "one-to-one";
  const currentEmpty = emptyData[activeFilter];
  
  const [data, setData] = useState([]);
  const filters = [
    { label: "1:1 call", value: "one-to-one" },
    { label: "Products/Courses", value: "product" },
    { label: "Workshops/Live Cohorts", value: "webinar" },
    { label: "Packages", value: "package" },
  ];

  const mockData = {
    "one-to-one": {
          id: 1,
          title: "Career Guidance Call",
          expert: "Rahul Sharma",
          date: "2026-04-20",
          status: "completed",
        },

    product: {
          id: 2,
          title: "React Mastery Course",
          expert: "Aman Verma",
          date: "2026-03-10",
          status: "upcoming",
    }
  };

  const handleFilterChange = (activeFilter) => {

    navigate(`/creator-dashboard/services/${activeFilter}`); // Navigate to the correct route based on the active filter and tab
  };

  useEffect(() => {

    const result = mockData[activeFilter] || [];

    setData(result);
  }, [activeFilter]);

  return (
    <div className="w-full min-h-screen bg-gray-50  py-6">


      {/* Heading */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6 px-10">
        Services 
      </h1>

      <div className="flex justify-between border-b" >

      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap px-10">
        {filters.map((item) => (
            <button
            key={item.value}
            onClick={() => handleFilterChange(item.value)}
            className={`px-4 py-2 rounded-full border ${
              activeFilter === item.value
              ? "bg-gray-100 border-black-500 border-2 font-semibold " 
              : "border-gray-300 border-2 "
            }`}
            >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex gap-3 text-center px-10">
        <button className="bg-black text-white px-4 py-2 rounded-md h-10 font-semibold"> +Add New</button>
        <button className=" px-4 py-2 rounded-md h-10 bg-gray-100  border-black-300  border-2  text-black font-semibold  hover:bg-gray-200">Templates</button>
      </div>


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
 { activeFilter == 'one-to-one' || activeFilter == 'package' ?(<button className="text-black  bg-gray-100 border-2  border-black-300 px-4 py-2  rounded-md font-semibold px-6 py-3 rounded-md mt-4 hover:bg-gray-200">Template</button>): ("")}   

      </div>
</div>
                  )}
    </div>
  );
}



export default CreatorServices;
