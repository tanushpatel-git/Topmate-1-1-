import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaGift, FaSearch, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";

const BottomNavbar = () => {
  const menuItems = [
    { to: "/seeker-dashboard/home", icon: <FaHome />, text: "Home" },
    { to: "/seeker-dashboard/booking", icon: <FaPhoneAlt />, text: "Booking" },
    { to: "/seeker-dashboard/people", icon: <FaSearch />, text: "People" },
    { to: "/seeker-dashboard/profile", icon: <FaUser />, text: "Profile" },
    { to: "/seeker-dashboard/rewards", icon: <FaGift />, text: "Rewards" },
    { to: "/seeker-dashboard/category", icon: <MdOutlineCategory />, text: "Category" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-2 md:hidden z-50">
      {menuItems.slice(0, 5).map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-orange-500" : "text-gray-400"
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

export default BottomNavbar;