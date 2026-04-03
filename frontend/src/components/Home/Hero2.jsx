import React, { useEffect, useRef } from 'react'
import heroImg from '../../assets/hero2.png'
import heroMobile from '../../assets/hero2_img.jpg'


const Hero2 = () => {



  return (
    <div className="bg-[#1B0F19] w-full min-h-[50vh] flex items-center justify-center px-4 py-10 md:py-10">

      {/* CENTER BOX */}
      <div className="w-full sm:w-[85%] md:w-[85%] lg:w-[85%] xl:w-[60%] flex flex-col">

        {/* HEADING */}
        <h1 className="text-white mb-10 mt-10  text-4xl sm:text-4xl md:text-5xl text-center sm:text-left  " >
          New on topmate
        </h1>

        {/* IMAGE CARD */}
        <div className="relative w-full  mb-20 overflow-hidden mt-6 sm:mt-10">

          {/* DESKTOP IMAGE (sm and above same UI) */}
<img 
  src={heroImg} 
  alt="Hero Section" 
  className="hidden xl:block w-full h-auto object-cover rounded-xl"
/>

          {/* MOBILE IMAGE */}
<img 
  src={heroMobile} 
  alt="Hero Mobile" 
  className="block xl:hidden w-full h-auto object-cover rounded-xl"
/>

          {/* BUTTONS */}
          <div className="
            absolute 
            bottom-3 sm:bottom-6
            left-1/2 -translate-x-1/2 
            sm:left-10 sm:translate-x-0
            flex flex-col sm:flex-row 
            gap-3 sm:gap-4 
            w-[90%] sm:w-auto
          ">

            <button className="
              bg-white px-3 py-2 sm:px-4 rounded-lg 
              transition transform hover:scale-105 duration-300 
              text-sm sm:text-base w-full sm:w-auto
            ">
              see top creators
            </button>

            <button className="
              border-2 border-[#b09869] text-white 
              px-3 py-2 sm:px-4 rounded-lg 
              transition transform hover:scale-105 duration-300 
              text-sm sm:text-base w-full sm:w-auto
            ">
              Find your niche
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero2      