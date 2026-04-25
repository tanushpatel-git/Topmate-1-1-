import React from "react";

const NoServiceCategoryFound = () => {
  return (
    <div className="min-h-screen bg-[#E9E6DE] flex items-center justify-center px-4 text-center">
      <h1 className="text-[#6F695D] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-snug">
        No Service Found for this category
      </h1>
    </div>
  );
};

export default NoServiceCategoryFound;