import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Image from "../../assets/topmate-dark-logo.svg";


const Footer = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-[#141414] text-white px-6 md:px-[10%] xl:px-[20%] py-16 min-h-[60vh]">

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row xl:justify-around justify-between gap-10">

        {/* LEFT */}
        <div className="flex flex-col gap-6 items-center lg:items-start">
          <div className="flex items-center gap-3">
            
            <img src={Image} alt="" />
          </div>
        </div>

        {/* RIGHT LINKS */}
        <div className="flex flex-col md:flex-row gap-10 xl:gap-16 text-center lg:text-left">

          <div className="flex flex-col gap-4 text-gray-300">
            <NavLink to="/about" className="hover:text-white">About</NavLink>
            <NavLink to="/contact" className="hover:text-white">Contact Us</NavLink>
            <NavLink to="/terms" className="hover:text-white">Terms Of Service</NavLink>
            <NavLink to="/privacy" className="hover:text-white">Privacy</NavLink>
          </div>

          <div className="flex flex-col gap-4 text-gray-300">
            <NavLink to="/pricing" className="hover:text-white">Pricing</NavLink>
            <NavLink to="/blog" className="hover:text-white">Blog</NavLink>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-3 flex-1 w-full items-center text-center lg:items-start lg:text-left xl:ml-20">

          {/* DROPDOWN */}
          <div ref={ref} className="relative w-full flex flex-col items-center lg:items-start">

            {/* Button */}
            <button
              onClick={() => setOpen(!open)}
              className="mb-3 flex items-center text-lg md:text-xl gap-2 border border-gray-500 px-5 py-2 rounded-full hover:bg-gray-800 transition"
            >
              ⭐ Top Profiles
              <span className={`text-gray-400 text-sm transition ${open ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {/* Dropdown */}
            {open && (
              <div className="mt-4 w-full max-w-[1000px] p-4 backdrop-blur-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300 text-sm">

                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:text-white">placementseasonexperts</a>
                    <a href="#" className="hover:text-white">best-software-engineers</a>
                    <a href="#" className="hover:text-white">top-rated-software-engineers</a>
                    <a href="#" className="hover:text-white">renowned-software-engineers</a>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:text-white">topinfluencers</a>
                    <a href="#" className="hover:text-white">elite-software-engineers</a>
                    <a href="#" className="hover:text-white">expert-software-engineers</a>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:text-white">top-software-engineers</a>
                    <a href="#" className="hover:text-white">leading-software-engineers</a>
                    <a href="#" className="hover:text-white">professional-software-engineers</a>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Address */}
          <p className="text-gray-400 text-base md:text-lg font-semibold">
            548 Market St PMB 30073, San Francisco
          </p>

          {/* Copyright */}
          <p className="text-gray-500 text-base md:text-lg font-bold">
            ©2026 Topmate
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-6 text-gray-300 text-2xl flex-1 items-center w-full justify-center lg:justify-end">
          <FaLinkedin className="cursor-pointer hover:text-white" />
          <FaTwitter className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
        </div>

      </div>
    </div>
  );
};

export default Footer;