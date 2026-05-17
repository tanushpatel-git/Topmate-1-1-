import React from "react";

import {
  CalendarDays,
  RefreshCcw,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import { current } from "@reduxjs/toolkit";

function VideoCallWaiting() {

  const location = useLocation();
  const navigate = useNavigate();

  const booking =location.state?.booking;

  const creator =location.state?.creator;

  const service = location.state?.service;

  // redirect if no state
  if (!booking) {
    navigate("/");
    return null;
  }

  const formatBookingDateTime = (
    date,
    time,
    duration
  ) => {
    if (!date || !time) {
      return "Date not available";
    }

    const bookingDate =new Date(date);

    const [hours, minutes] = time.split(":"); 

    bookingDate.setHours(hours);
    bookingDate.setMinutes(minutes);

    const startTime =
      bookingDate.toLocaleTimeString(
        "en-IN",
        {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }
      );

    const endDate = new Date(
      bookingDate.getTime() +
      duration * 60000
    );

    const endTime =
      endDate.toLocaleTimeString(
        "en-IN",
        {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }
      );

    const formattedDate =
      bookingDate.toLocaleDateString(
        "en-IN",
        {
          weekday: "short",
          day: "2-digit",
          month: "short",
        }
      );

    return `${formattedDate} | ${startTime} - ${endTime} (GMT+5:30)`;
  };


  const isJoinEnabled = () => {

  if (!booking?.date || !booking?.time) {
    return false;
  }

  // booking start time
  const bookingDateTime = new Date(booking.date);

  const [hours, minutes] = booking.time.split(":");

  bookingDateTime.setHours(hours);
  bookingDateTime.setMinutes(minutes);
  bookingDateTime.setSeconds(0);

  // current time
  const now = new Date();

  // difference in minutes
  const diffInMinutes =(bookingDateTime - now) / (1000 * 60);

  // enable when:
  // call is today
  // and less than or equal to 30 mins remaining
  return (
    bookingDateTime.toDateString() ===
      now.toDateString() &&
    diffInMinutes <= 30
  );
};
  return (
    <div className="w-full min-h-screen bg-[#efcb95] flex flex-col items-center py-16 px-4">
        
<h1 className="text-5xl font-bold text-[#1f2937] mb-10">
  {isJoinEnabled()? "Join Call": "Upcoming"}
</h1>
      <div className="bg-[#f5f5f5] rounded-3xl shadow-md w-full max-w-md p-8 flex flex-col items-center">

        <img
          src={creator?.userImageUrl}
          alt="creator"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />

        <h2 className="text-2xl font-bold mt-6 text-center">

          Call with{" "}
          {creator?.firstName}{" "}
          {creator?.lastName}

        </h2>

        <p className="text-gray-500 text-sm mt-1">

          for {booking?.duration} mins
          video call

        </p>

        <div className="flex items-center gap-2 bg-[#eef7f1] text-green-700 px-4 py-3 rounded-xl mt-8 text-sm font-semibold">

          <CalendarDays size={18} />

          {formatBookingDateTime(
            booking?.date,
            booking?.time,
            booking?.duration
          )}

        </div>

        <div className="flex items-center justify-between gap-4 mt-8 w-full">

          <p className="text-xs text-gray-600 leading-5 max-w-[220px]">

            Join Call activates 30 mins
            before the call.

          </p>

          <button
            className="flex items-center gap-2 bg-white border shadow-sm px-4 py-3 rounded-xl hover:bg-gray-50 transition"
          >

            <RefreshCcw size={16} />
<span
  onClick={() => {
    if (!isJoinEnabled()) {
      navigate(
        `/video-call/${booking?.streamCallId || booking?._id}`
      );
    }
  }}
  className={`font-semibold text-sm ${
isJoinEnabled()? "cursor-pointer text-blue-600": "cursor-not-allowed text-gray-400"}`}
>
  {!isJoinEnabled() ? "Join Call" :"Upcoming"}
</span>

          </button>

        </div>

      </div>

    </div>
  );
}

export default VideoCallWaiting;