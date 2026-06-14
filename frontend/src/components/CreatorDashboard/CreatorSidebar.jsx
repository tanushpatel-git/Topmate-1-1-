import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaUserAlt, FaGift, FaSearch, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import Logoicon from '../../assets/logo-icon.svg'
import { useState } from "react";
import { useSelector } from "react-redux";
import logout from "../../services/userAuthServices/logOut";
import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";


const CreatorSidebar = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [logoutBtn, setLogoutBtn] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  return (
    <div className="w-64 bg-[#F7F6F2] border-r-1 border-gray-200 flex flex-col justify-between fixed h-full">

      <div>
        {/* Logo */}
        <div onClick={() => setOpen(!open)} className="flex cursor-pointer items-center gap-3 p-4 ">
          <Link to="/" onClick={(e) => e.stopPropagation()} className="w-10 h-10 ">
            <img src={Logoicon} alt="" />
          </Link>
          <div>
            <h2 className="font-semibold">Dashboard   </h2>
            <p className="text-sm text-gray-500">{userData.firstName + ' ' + userData.lastName || 'hii there'}</p>
          </div>
          <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-6 h-6 transition-transform ${open ? "rotate-180" : ""
                }`}
            >
              <path d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" />
            </svg>
          </div>
        </div>

        {open && (

          <div className="flex items-center gap-2 p-8  ml-3 mr-3  rounded-lg bg-white shadow justify-center h-12">
            <FaUserAlt className="text-1xl text-gray-700" />
            <h2 className="font-semibold text-sm text-gray-700 cursor-pointer" onClick={() => navigate('/seeker-dashboard')}> Seeker Dashboard</h2>
          </div>

        )}




        {/* Menu */}
        <nav className="px-4 py-2 space-y-6">

          {/* MANAGE */}
          <div>
            <p className="text-xs text-gray-400 mb-2">Manage</p>

            <SidebarLink to="/creator-dashboard/home" icon={<FaHome />} text="Home" />
            <SidebarLink to="/creator-dashboard/calls/one-to-one/upcoming" icon={<FaPhoneAlt />} text="Bookings" />
            <SidebarLink to="/creator-dashboard/queries/pending" icon={<FaUser />} text="Priority DM" badge={true} />
            <SidebarLink to="/creator-dashboard/services/one-to-one" icon={<MdOutlineCategory />} text="Services" badge />
            <SidebarLink to="/creator-dashboard/calendar/setting" icon={<FaSearch />} text="Calendar" badge />
            <SidebarLink to="/upcoming" icon={<FaUserAlt />} text="AutoDM" state={{ type: "autodm" }} />
            <SidebarLink to="/creator-dashboard/payout" icon={<FaGift />} text="Payout" />
          </div>

          {/* YOUR PAGE */}
          <div>
            <p className="text-xs text-gray-400 mb-2">Your Page</p>

            <SidebarLink to="/creator-dashboard/analytics" icon={<FaSearch />} text="Analytics" />
            <SidebarLink to="/creator-dashboard/profile" icon={<FaUserAlt />} text="Edit Profile" />
            <SidebarLink to="/creator-dashboard/setting" icon={<FaGift />} text="Settings" />

          </div>

        </nav>
      </div>

      {
        logoutBtn && (
          <div onClick={() => logout(navigate, dispatch, queryClient)} className="absolute bottom-19 flex items-center gap-2 p-8  ml-3 mr-3 rounded-lg bg-white shadow justify-center h-12 w-48">
            <FaUserAlt className="text-1xl text-gray-700" />
            <h2 className="font-semibold text-sm text-gray-700 cursor-pointer" onClick={() => navigate('/seeker-dashboard')}> LogOut</h2>
          </div>
        )
      }
      {/* Bottom Profile */}
      <div onClick={() => setLogoutBtn(!logoutBtn)} className="p-4 border-t flex items-center gap-3 cursor-pointer">
        <img
          src={Logoicon}
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium"> {userData.firstName + ' ' + userData.lastName || 'hii there'} </p>
          <p className="text-xs text-gray-500 truncate w-32">
            {userData.email || 'user@gmail.com'}
          </p>
        </div>
        <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-6 h-6 transition-transform ${logoutBtn ? "rotate-180" : ""
                }`}
            >
              <path d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" />
            </svg>
          </div>
      </div>
    </div>
  );
};

export default CreatorSidebar;

const SidebarLink = ({ to, icon, text, badge, state }) => {
  return (
    <NavLink
      to={to}
      state={state}
      className={({ isActive }) =>
        `flex items-center justify-between px-4 py-2 rounded-lg transition-colors
        ${isActive
          ? "bg-[#ECE6DB] text-black font-medium"
          : "text-gray-700 hover:bg-[#ECE6DB]"
        }`
      }
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{text}</span>
      </div>

      {/* Red notification dot */}
      {badge && (
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
      )}
    </NavLink>
  );
};