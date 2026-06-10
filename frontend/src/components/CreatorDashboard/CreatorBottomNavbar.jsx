import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaGift,
  FaGripLines,
} from "react-icons/fa";
import {
  MdOutlineCategory,
  MdCalendarMonth,
} from "react-icons/md";

import NewSidebar from "./NewSidebar";

const CreatorBottomNavbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { to: "/creator-dashboard/home", icon: <FaHome />, text: "Home" },
    { to: "/creator-dashboard/calls/one-to-one/upcoming", icon: <FaUserAlt />, text: "Booking" },
    { to: "/creator-dashboard/services/one-to-one", icon: <MdOutlineCategory />, text: "Service" },
    { to: "/creator-dashboard/calendar/setting", icon: <MdCalendarMonth />, text: "Calendar" },
    { to: "/creator-dashboard/analytics", icon: <FaGift />, text: "Analytics" },
  ];


  return (

    <>
      {/* Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-2 md:hidden z-50">

        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-orange-500" : "text-black"
              }`
            }
          >
            <div className="text-lg">{item.icon}</div>
            <span>{item.text}</span>
          </NavLink>
        ))}


      <button onClick={() => setOpen(true)} className="flex flex-col items-center text-xs">
        <FaGripLines />
        More
      </button>

      <NewSidebar open={open} setOpen={setOpen} />

      </div>

      {/* Sidebar Component */}
      <NewSidebar/>
    </>
  );
};

export default CreatorBottomNavbar;