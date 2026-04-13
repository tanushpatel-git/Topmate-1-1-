import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaUserAlt, FaGift ,FaSearch , FaPhoneAlt} from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import Logoicon  from '../../assets/logo-icon.svg'
import { useState } from "react";

const SeekerSidebar = () => {

  const [open, setOpen] = useState(false); 
  return (
    <div className="w-64 bg-[#F7F6F2] border-r-1 border-gray-200 flex flex-col justify-between fixed h-full">

      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 p-4 ">
          <div className="w-10 h-10 ">
            <img src={Logoicon} alt="" />
          </div>
          <div>
            <h2 className="font-semibold">Seeker Dashboard   </h2>  
            <p className="text-sm text-gray-500">user name </p>
          </div>
          <div onClick={() => setOpen(!open)} className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`w-6 h-6 transition-transform ${
          open ? "rotate-180" : ""
        }`}
      >
        <path d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" />
      </svg>
    </div>
        </div>

{open && ( 
  
  <div className="flex items-center gap-2 p-8  ml-3 mr-3  rounded-lg bg-white shadow justify-center h-12">
  <FaUserAlt className="text-1xl text-gray-700" />
  <h2 className="font-semibold text-sm text-gray-700">Seeker Dashboard</h2>
</div>

)}




        {/* Menu */}
        <nav className="p-4 space-y-2">
          <p className="text-xs text-gray-400 mb-2">Main</p>

          <SidebarLink to="/seeker-dashboard/home" icon={<FaHome />} text="Home" />
                <SidebarLink to="/seeker-dashboard/booking" icon={<FaPhoneAlt />} text="Booking" />    
      <SidebarLink to="/search" icon={<FaSearch />} text="Find by People" />

          <SidebarLink to="/seeker-dashboard/profile" icon={<FaUser />} text="Profile" />
          <SidebarLink to="/seeker-dashboard/reward" icon={<FaGift />} text="Rewards" />
          <SidebarLink to="/marketplace" icon={<MdOutlineCategory />} text="Find by Category" />

        </nav>
      </div>

      {/* Bottom Profile */}
      <div className="p-4 border-t flex items-center gap-3">
        <img
          src={Logoicon}
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium">user name </p>
          <p className="text-xs text-gray-500 truncate w-32">
            user Gmail Id 
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeekerSidebar;


const SidebarLink = ({ to, icon, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
        ${
          isActive
            ? "bg-[#ECE6DB] text-black font-medium"
            : "text-gray-700 hover:bg-[#ECE6DB]"
        }`
      }
    >
      {icon}
      <span>{text}</span>
    </NavLink>
  );
};