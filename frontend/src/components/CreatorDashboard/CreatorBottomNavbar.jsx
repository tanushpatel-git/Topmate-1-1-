import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaGift
} from "react-icons/fa";
import {
  MdOutlineCategory,
  MdCalendarMonth
} from "react-icons/md";

const CreatorBottomNavbar = () => {

  const menuItems = [
    { to: "/creator-dashboard/home", icon: <FaHome />, text: "Home" },
    { to: "/creator-dashboard/calls/one-to-one/upcoming", icon: <FaUserAlt />, text: "Booking" },
    { to: "/creator-dashboard/services/one-to-one", icon: <MdOutlineCategory />, text: "Service" },
    { to: "/creator-dashboard/calendar/setting", icon: <MdCalendarMonth />, text: "Calendar" },
    { to: "/creator-dashboard/analytics", icon: <FaGift />, text: "Analytics" },
  ];

  return (
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
    </div>
  );
};

export default CreatorBottomNavbar;
