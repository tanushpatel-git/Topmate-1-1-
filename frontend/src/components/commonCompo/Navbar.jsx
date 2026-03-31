import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white border-b px-6 py-3 flex items-center justify-between">

      {/* LEFT LOGO */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
          c
        </div>
        <h1 className="text-lg font-semibold">topmate</h1>
      </div>

      {/* CENTER MENU */}
      <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full gap-6 text-sm text-gray-600">
        
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          Products
        </div>

        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          Use Cases 
        </div>

        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none px-2"
        />

        <div className="cursor-pointer hover:text-black">
          Pricing
        </div>

      </div>

      {/* RIGHT BUTTON */}
      <div>
        <button className="bg-black text-white px-5 py-2 rounded-lg text-sm hover:opacity-90">
          Dashboard
        </button>
      </div>

    </div>
  );
};

export default Navbar;