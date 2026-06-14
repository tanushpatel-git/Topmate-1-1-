import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaGift,
  FaSearch,
  FaPhoneAlt,
  FaTimes,
  FaUserAlt,
} from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";

import Logoicon from "../../assets/logo-icon.svg";

  const MobileSeekerSidebar = ({
  open,
  setOpen,
  userData,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src={Logoicon}
                alt=""
                className="w-10 h-10"
              />
            </Link>

            <div>
              <h2 className="font-semibold">
                Seeker Dashboard
              </h2>

              <p className="text-xs text-gray-500">
                {userData?.firstName} {userData?.lastName}
              </p>
            </div>
          </div>

          <FaTimes
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Menu */}
        <div className="p-4 space-y-2">
          <SidebarLink
            to="/seeker-dashboard/reward"
            icon={<FaGift />}
            text="Rewards"
            setOpen={setOpen}
          />

          <SidebarLink
            to="/marketplace"
            icon={<MdOutlineCategory />}
            text="Category"
            setOpen={setOpen}
          />

          <SidebarLink
            to="/search"
            icon={<FaSearch />}
            text="Find People"
            setOpen={setOpen}
          />

          <div
            onClick={() => {
              navigate("/creator-dashboard");
              setOpen(false);
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <FaUserAlt />
            <span>Switch to Creator</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSeekerSidebar;

const SidebarLink = ({
  to,
  icon,
  text,
  setOpen,
}) => {
  return (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg ${
          isActive
            ? "bg-[#ECE6DB] font-medium"
            : "hover:bg-[#ECE6DB]"
        }`
      }
    >
      {icon}
      <span>{text}</span>
    </NavLink>
  );
};


