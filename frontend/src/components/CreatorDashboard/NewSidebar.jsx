import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaUserAlt,
  FaGift,
  FaSearch,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import Logoicon from "../../assets/logo-icon.svg";

import { useSelector, useDispatch } from "react-redux";
import logout from "../../services/userAuthServices/logOut";
import { useQueryClient } from "@tanstack/react-query";

const NewSidebar = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userData);

  const [showSwitch, setShowSwitch] = useState(false);
  const [logoutBtn, setLogoutBtn] = useState(false);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#F7F6F2] z-50 shadow-xl
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col justify-between h-full">

          {/* Top Section */}
          <div>
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-semibold text-lg">Menu</h2>

              <button
                onClick={() => setOpen(false)}
                className="text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Logo Section */}
            <div
              onClick={() => setShowSwitch(!showSwitch)}
              className="flex cursor-pointer items-center gap-3 p-4"
            >
              <Link to="/" onClick={(e) => e.stopPropagation()}>
                <img
                  src={Logoicon}
                  alt="logo"
                  className="w-10 h-10"
                />
              </Link>

              <div className="flex-1">
                <h2 className="font-semibold">Dashboard</h2>

                <p className="text-sm text-gray-500">
                  {userData?.firstName
                    ? `${userData.firstName} ${userData.lastName}`
                    : "Hi there"}
                </p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-5 h-5 transition-transform ${
                  showSwitch ? "rotate-180" : ""
                }`}
              >
                <path d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" />
              </svg>
            </div>

            {/* Switch Dashboard */}
            {showSwitch && (
              <div
                onClick={() => {
                  navigate("/seeker-dashboard");
                  setOpen(false);
                }}
                className="flex items-center gap-2 p-3 mx-4 rounded-lg bg-white shadow cursor-pointer"
              >
                <FaUserAlt />
                <span className="text-sm font-medium">
                  Seeker Dashboard
                </span>
              </div>
            )}

            {/* Menu */}
            <nav className="px-4 py-4 space-y-6">
              <div>
                <p className="text-xs text-gray-400 mb-2">Manage</p>

                <SidebarLink
                  to="/creator-dashboard/home"
                  icon={<FaHome />}
                  text="Home"
                  setOpen={setOpen}
                />

                <SidebarLink
                  to="/creator-dashboard/calls/one-to-one/upcoming"
                  icon={<FaPhoneAlt />}
                  text="Bookings"
                  setOpen={setOpen}
                />

                <SidebarLink
                  to="/creator-dashboard/queries/pending"
                  icon={<FaUser />}
                  text="Priority DM"
                  badge
                  setOpen={setOpen}
                />

                <SidebarLink
                  to="/creator-dashboard/services/one-to-one"
                  icon={<MdOutlineCategory />}
                  text="Services"
                  badge
                  setOpen={setOpen}
                />

                <SidebarLink
                  to="/creator-dashboard/calendar/setting"
                  icon={<FaSearch />}
                  text="Calendar"
                  setOpen={setOpen}
                />

                <SidebarLink
                  to="/upcoming"
                  icon={<FaUserAlt />}
                  text="AutoDM"
                  setOpen={setOpen}
                  state={{ type: "autodm" }}
                />

                <SidebarLink
                  to="/creator-dashboard/payout"
                  icon={<FaGift />}
                  text="Payout"
                  setOpen={setOpen}
                />
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">Your Page</p>

                <SidebarLink
                  to="/creator-dashboard/analytics"
                  icon={<FaSearch />}
                  text="Analytics"
                  setOpen={setOpen}
                />

                <SidebarLink
                  to="/creator-dashboard/profile"
                  icon={<FaUserAlt />}
                  text="Edit Profile"
                  setOpen={setOpen}
                />

                <SidebarLink
                  to="/creator-dashboard/setting"
                  icon={<FaGift />}
                  text="Settings"
                  setOpen={setOpen}
                />
              </div>
            </nav>
          </div>

          {/* Bottom Profile */}
          <div className="relative">
            {logoutBtn && (
              <div
                onClick={() =>
                  logout(navigate, dispatch, queryClient)
                }
                className="absolute bottom-20 left-4 w-52 bg-white shadow rounded-lg p-3 cursor-pointer"
              >
                Logout
              </div>
            )}

            <div
              onClick={() => setLogoutBtn(!logoutBtn)}
              className="p-4 border-t flex items-center gap-3 cursor-pointer"
            >
              <img
                src={Logoicon}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />

              <div className="flex-1">
                <p className="text-sm font-medium">
                  {userData?.firstName
                    ? `${userData.firstName} ${userData.lastName}`
                    : "User"}
                </p>

                <p className="text-xs text-gray-500 truncate">
                  {userData?.email || "user@gmail.com"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSidebar;

const SidebarLink = ({
  to,
  icon,
  text,
  badge,
  setOpen,
  state,
}) => {
  return (
    <NavLink
      to={to}
      state={state}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `flex items-center justify-between px-4 py-2 rounded-lg transition-colors
        ${
          isActive
            ? "bg-[#ECE6DB] text-black font-medium"
            : "text-gray-700 hover:bg-[#ECE6DB]"
        }`
      }
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{text}</span>
      </div>

      {badge && (
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
      )}
    </NavLink>
  );
};
