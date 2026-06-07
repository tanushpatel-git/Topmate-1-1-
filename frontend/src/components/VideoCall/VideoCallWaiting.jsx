import React, { useEffect, useState } from "react";

import {
  CalendarDays,
  ExternalLink,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import axiosInstance from "../../utility/axios";

function VideoCallWaiting() {

  const location = useLocation();
  const navigate = useNavigate();

  const stateBooking = location.state?.booking;
  const creator = location.state?.creator;
  const service = location.state?.service;

  const [booking, setBooking] = useState(stateBooking);

  useEffect(() => {
    if (stateBooking?._id) {
      axiosInstance.get(`/booking/${stateBooking._id}`)
        .then((res) => {
          if (res.data?.booking) {
            setBooking(res.data.booking);
          }
        })
        .catch((err) => console.log("Failed to fetch booking:", err));
    }
  }, [stateBooking?._id]);

  if (!booking) {
    navigate("/");
    return null;
  }

  const isMeetingTimeReached = (date, time) => {
    if (!date || !time) return false;
    const [hours, minutes] = time.split(":");
    const meetingDate = new Date(date);
    meetingDate.setHours(hours);
    meetingDate.setMinutes(minutes);
    meetingDate.setSeconds(0);
    return new Date() >= meetingDate;
  };

  const formatBookingDateTime = (
    date,
    time,
    duration
  ) => {
    if (!date || !time) {
      return "Date not available";
    }

    const bookingDate = new Date(date);
    const [hours, minutes] = time.split(":");
    bookingDate.setHours(hours);
    bookingDate.setMinutes(minutes);

    const startTime =
      bookingDate.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

    const endDate = new Date(
      bookingDate.getTime() + duration * 60000
    );

    const endTime =
      endDate.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

    const formattedDate =
      bookingDate.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short",
      });

    return `${formattedDate} | ${startTime} - ${endTime}`;
  };

  const handleJoinCall = () => {
    if (booking?.meetingLink) {
      window.open(booking.meetingLink, "_blank");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#efcb95] flex flex-col items-center py-16 px-4">

      <h1 className="text-5xl font-bold text-[#1f2937] mb-10">
        Join Call
      </h1>

      <div className="bg-[#f5f5f5] rounded-3xl shadow-md w-full max-w-md p-8 flex flex-col items-center">

        <img
          src={creator?.userImageUrl}
          alt="creator"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />

        <h2 className="text-2xl font-bold mt-6 text-center">
          Call with {creator?.firstName} {creator?.lastName}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          for {booking?.duration} mins video call
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
            Click Join to open the Zoom meeting.
          </p>

          <button
            onClick={handleJoinCall}
            disabled={!booking?.meetingLink || !isMeetingTimeReached(booking?.date, booking?.time)}
            className={`flex items-center gap-2 bg-white border shadow-sm px-4 py-3 rounded-xl transition ${
              booking?.meetingLink && isMeetingTimeReached(booking?.date, booking?.time)
                ? "hover:bg-gray-50 cursor-pointer"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            <ExternalLink size={16} />
            <span className="font-semibold text-sm">Join Call</span>
          </button>
        </div>

      </div>

    </div>
  );
}

export default VideoCallWaiting;
