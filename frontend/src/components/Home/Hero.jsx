import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#FFE4D6] w-full min-h-[50vh] flex items-center justify-center px-6">

      {/* CONTAINER */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 ml-[10%] mr-[10%] py-10 px-5">

        {/* LEFT SIDE */}

        <div className="flex-1  h-full">
          <h1 className="   text-5xl md:text-3xl text-gray-900 leading-tight ">
            <span className="text-5xl bg-amber-100">Your All-in-One<br /> </span>
            <span className="text-5xl">
 Creator
            </span>
              <span className="font-bold p-3 text-5xl">Storefront</span>
          </h1>

          {/* BUTTON + STATS */}

          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <button className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-3 hover:opacity-90">
              Start My Page
              <span className="bg-white text-black px-2 rounded-md">
                →
              </span>
            </button>
<div className="flex flex-col gap-2">

  <div className="border border-gray-300 px-3 py-1 rounded-xl text-xs bg-transparent text-center 
                  transition-transform duration-300 hover:scale-110">
    100k+ ⭐⭐⭐⭐ reviews
  </div>

  <div className="border border-gray-300 px-3 py-1 rounded-xl text-xs bg-transparent text-center 
                  transition-transform duration-300 hover:scale-110">
    1mn+ professionals
  </div>

</div>
          </div>
        </div>

        {/* RIGHT SIDE (CARDS GRID) */}
        <div className="flex-1 grid grid-cols-2 gap-5">

          {/* CARD */}
          <div className="bg-white rounded-xl shadow p-2">
            <div className="h-20  bg-orange-400 rounded-lg"></div>
            <h3 className="mt-2 font-semibold">Ganesh </h3>
            <p className="text-sm text-gray-500">Shark Tank India</p>
          </div>

          <div className="bg-white rounded-xl shadow p-2">
            <div className="h-20 bg-yellow-400 rounded-lg"></div>
            <h3 className="mt-2 font-semibold">Prakriti & Ashish</h3>
            <p className="text-sm text-gray-500">Travelers</p>
          </div>

          <div className="bg-white rounded-xl shadow p-2">
            <div className="h-20 bg-blue-400 rounded-lg"></div>
            <h3 className="mt-2 font-semibold">Radhika Agrawal</h3>
            <p className="text-sm text-gray-500">Design</p>
          </div>

          <div className="bg-white rounded-xl shadow p-2">
            <div className="h-20 bg-red-400 rounded-lg"></div>
            <h3 className="mt-2 font-semibold">Aditi Paul</h3>
            <p className="text-sm text-gray-500">Consultant</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;
