import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import {
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineVideoCamera,
  HiOutlineCube,
  HiOutlineCollection
} from "react-icons/hi";
import img from '../../assets/create-service1.svg'
import { useNavigate } from "react-router-dom";
import AddServiceHook from "../../hooks/AddServiceHook";

import { useParams } from "react-router-dom";

const CreateService = () => {

  const navigate = useNavigate();

  const { mutate: createService, isPending: isCreatePending } = AddServiceHook();
  const [selected, setSelected] = useState("priorityDm");
  const activeFilter = selected;
  const [currentStep, setCurrentStep] = useState(1);
const { category } = useParams();


  const [formData, setFormData] = useState({
    category: selected,
    title: "",
    duration: 30,
    price: 0,
  });


  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
const handleSubmit = () => {
  if (!formData.title || !formData.price) {
    alert("Fill required fields");
    return;
  }

  createService(
    {
      ...formData,
      category: selected,
    },
    {
      onSuccess: (data) => {
        if (data.status) {
          navigate(
            `/creator-dashboard/services/${selected}/edit/${data.service._id}`
          );

        }
      },
    }
  );
};


  const filter = [
    {
      title: "1:1 Call",
      desc: "Conduct 1:1 video sessions",
      icon: <HiOutlineCalendar className="text-2xl" />,
      value: "one-to-one"
    },
    {
      title: "Priority DM",
      desc: "Setup your priority inbox",
      icon: <HiOutlineMail className="text-2xl" />,
      value: "priorityDm"
    },
    {
      title: "Workshops/Live Cohorts",
      desc: "Host one time or recurring group sessions",
      icon: <HiOutlineVideoCamera className="text-2xl" />,
      value: "workshop"
    },
    {
      title: "Products/Courses",
      desc: "Sell digital products, courses, paid videos & more",
      icon: <HiOutlineCollection className="text-2xl" />,
      value: "product"
    },
    {
      title: "Package",
      desc: "Bundle your offerings into one",
      icon: <HiOutlineCube className="text-2xl" />,
      value: "package"
    }

  ];



const handleFilterChange = (value) => {
  navigate(`/creator-dashboard/services/${value}/create`);
};


  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      category: selected,
    }));
  }, [selected]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev === 1 ? 2 : 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="flex items-center gap-3 px-10 py-6 border-b">
        <FaArrowLeft className="text-xl text-gray-600 cursor-pointer" />
        <h1 className="text-2xl font-semibold">
          What are you creating today?
        </h1>
      </div>

      {/* Content */}
      <div className="flex px-10 py-8 gap-8">

        {/* LEFT SIDE */}
        <div className="w-[40%]">

          {/* Select Type */}
          <h2 className="text-lg font-semibold mb-4">Select type</h2>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {filter.map((card) => (
              <div
                key={card.value}

                onClick={() => { handleFilterChange(card.value); setSelected(card.value); }}
                className={`border rounded-lg p-4 cursor-pointer transition ${selected === card.value
                  ? "border-[#8C5300] bg-[#F7F6F2] shadow-md border-2"
                  : "hover:border-gray-400 hover:bg-gray-100"
                  }`}
              >
                {card.icon}
                <h3 className="font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="space-y-4">

            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleFormChange}
                placeholder="Name of Service"
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Duration (mins)
              </label>
              <input
                type="number"
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                name="duration"
                value={formData.duration}
                onChange={handleFormChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Amount (₹)
              </label>
              <input
                name="price"
                value={formData.price}
                onChange={handleFormChange}
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button
              className="w-full bg-black text-white py-3 rounded-md mt-4"
              onClick={handleSubmit}
              disabled={isCreatePending}
            >
              {isCreatePending ? "Creating..." : "Next: Customize"}
            </button>
          </div>


          
        </div>

        {/* RIGHT SIDE */}
        <div key={currentStep} className="bg-[#F7F6F2] w-[20%] rounded-xl transition-all duration-500 ease-in-out opacity-100 h-[250px] ml-20 ">

          <div className="flex-1 ">
            <div
              key={currentStep}
              className="bg-[#F7F6F2] w-full  rounded-xl  h-40px transition-all duration-500 ease-in-out
               transition-all duration-500 ease-in-out
               animate-fade"
            >
              <img src={img} alt="Create Service" className="" />

              <h2 className="text-lg font-semibold m-3  "  >
                {currentStep === 1
                  ? "Need a template?"
                  : "Create a Discover Call?"}
              </h2>

              <button className={` py-2 rounded-md block ${currentStep === 1 ? "bg-black text-white cursor-pointer m-3 px-5" : "text-gray-900"} `}  >
                {currentStep === 1
                  ? "Use a template"
                  : "It's a great way to understand what your followers are looking for"}
              </button>

              {/* dots */}
              <div className="flex justify-center mb-5 mt-5 gap-2 ">
                <span
                  className={`w-2 h-2 rounded-full ${currentStep === 1 ? "bg-blue-500" : "bg-gray-400"
                    }`}
                ></span>
                <span
                  className={`w-2 h-2 rounded-full ${currentStep === 2 ? "bg-blue-500" : "bg-gray-400"
                    }`}
                ></span>
              </div>
            </div>
          </div>
        </div>



      </div>

    </div>
  )
};

export default CreateService;;