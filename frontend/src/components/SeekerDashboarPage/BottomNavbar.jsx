import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaSearch,
  FaPhoneAlt,
  FaGripLines,
} from "react-icons/fa";

import MobileSeekerSidebar from "./MobileSeekerSidebar";

const BottomNavbar = ({ userData }) => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { to: "/seeker-dashboard/home", icon: <FaHome />, text: "Home" },
    { to: "/seeker-dashboard/booking", icon: <FaPhoneAlt />, text: "Booking" },
    { to: "/search", icon: <FaSearch />, text: "People" },
    { to: "/seeker-dashboard/profile", icon: <FaUser />, text: "Profile" },
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-2 md:hidden z-50">
        {menuItems.map((item, index) => (
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

        <button
          onClick={() => setOpen(true)}
          className="flex flex-col items-center text-xs text-gray-400"
        >
          <FaGripLines className="text-lg" />
          <span>More</span>
        </button>
      </div>

      <MobileSeekerSidebar
        userData={userData}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default BottomNavbar;