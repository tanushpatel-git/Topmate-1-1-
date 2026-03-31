import React from 'react'
import heroImg from '../../assets/hero2.png' 

const Hero2 = () => {
  return (
  <div className="bg-black w-full px-6 md:px-10 py-16">
  <div className="max-w-7xl mx-auto  items-center gap-10">

    <div className="flex-1 ">
      <h1 className="text-white text-2xl md:text-4xl font-semibold ">
        New on topmate
      </h1>
    </div>

    <div className="flex-1 flex justify-center ">
      <img
  src={heroImg}
  alt="Hero Section"
  className="w-80  md:w-80 h-auto object-contain"
/>
    </div>

  </div>

</div>)
}
export default Hero2