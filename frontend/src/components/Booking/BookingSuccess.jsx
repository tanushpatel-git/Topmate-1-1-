import React from "react"
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import {
  AlertTriangle,
  CheckCircle,
  MessageCircle,
  Video,
  Clock,
  User,
  Calendar,
  Mail,
  MessageSquare,
  Flag,
  FileInput,
} from "lucide-react";

import {
  FaCalendarAlt,
  FaEnvelope,
  FaExclamationTriangle,
  FaQuestionCircle,
  FaCommentDots,
  FaCheckCircle,
} from "react-icons/fa";



const BookingSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const booking = state?.booking;
  const service = state?.service;
  const creator = state?.creator;
  const user = useSelector((state) => state.userData);


  if (!booking) return <p>No booking found</p>;


  const getEndTime = (startTime, duration) => {
    const [time, modifier] = startTime.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    // convert to 24h
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes + duration);

    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };


  console.log(service)
  return (
    <div className="min-h-screen bg-[#EDEDED] flex justify-center items-center">

      <div className="w-[380px] bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="bg-black text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-white-700 shadow-md rounded-full bg-[#285E50] flex items-center justify-center text-lg">
                {creator?.firstName?.[0]}
              </div>

              <div>
                <p className="font-semibold">
                  {creator?.firstName} {creator?.lastName}
                </p>
                <p className="text-xs text-gray-300">
                  {service?.duration} mins video call
                </p>
              </div>
            </div>
            <span className="flex items-center gap-1 bg-[#0E2821] border-1 border-[#285E50] shadow-md rounded-full text-green-400  px-3 py-1 rounded-full text-sm font-semibold">
              <FaCheckCircle size={14} />
              confirmed
            </span>
          </div>
        </div>

        {/*  SESSION INFO  hide when products  */}
        
        <div className={`p-4 bg-gray-100 border-b border-gray-200 text-sm flex items-center justify-between  ${service.category === 'product' ?'hidden' : 'block' } ` }>
          <div className="flex  gap-3">


            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg">
              <Video size={15} className="text-gray-700" />
            </div>
            <div className="">

              <p className="font-bold">Video Call</p>
              <p className="text-gray-500 text-md">
                {service?.duration} mins session
              </p>
            </div>

          </div>
          <div className="flex  flex-col items-center gap-1 text-[12px] text-gray-500">
            <p className="font-semibold text-md text-black">{new Date(booking.date).toDateString()}</p>
            <div className="flex items-center gap-1">

              <Clock size={10} strokeWidth={2} />
              <span className="font-medium">
                {/* {booking.startime} */}
                {booking.time} - {getEndTime(booking.time, service.duration)} GMT+:530
              </span>
            </div>
          </div>

        </div>




        {/*  CONFIRMATION */}
        <div className="p-4 ">
          <p className="text-xs font-semibold text-gray-400">PURCHASE CONFIRMED</p>

          <h2 className="text-lg font-bold flex items-center gap-2">
            Your booking is{" "}


            <span className="flex items-center font-bold gap-1 bg-[#DCFCE7]  shadow-md rounded-full text-green-400  px-3 py-1 rounded-full text-sm font-semibold ">
              <FaCheckCircle size={14} />
              confirmed
            </span>
          </h2>

          <p className="text-xs text-gray-500 mt-1 font-semibold">
            Your meeting details have been sent to your email.
          </p>
        </div>



        {/*VIEW BOOKING CTA */}
        <div className ={ `p-4  ${service.category ==='product' ? '' :'hidden' }  `}>
          <div
            className="border-2 border-gray-200 rounded-xl p-3 flex justify-between items-center cursor-pointer hover:bg-gray-50"
          >
            <div>
              <p className="font-bold text-md flex gap-3 "><FileInput size={16}/>   {service.title}</p>
              <p>File</p>

            </div>
<div
  className="bg-black text-white flex items-center justify-center p-1 rounded-lg cursor-pointer"
  onClick={() => {
    const link = document.createElement("a");
    link.href = service.files[0]?.url;
    link.download = service.files[0]?.fileName || "file";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Download
</div>
          </div>
        </div>



        {/*VIEW BOOKING CTA */}
        <div className="p-4 ">
          <div
            onClick={() => navigate(`/creator-dashboard/calls/one-to-one/upcoming`)}
            className="border-2 border-gray-200 rounded-xl p-3 flex justify-between items-center cursor-pointer hover:bg-gray-50"
          >
            <div>
              <p className="font-medium text-sm">View your booking</p>
              <p className="text-xs text-gray-500">
                Manage & track from dashboard
              </p>
            </div>

            <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
              →
            </div>
          </div>
        </div>

        {/* USER DETAILS */}
        <div className="p-4 ">
          <p className="text-xs text-gray-400 mb-2">YOUR DETAILS</p>

          <div className="border-gray-200 flex gap-3  items-center border-2 rounded-xl p-3 text-sm">
            <div className="flex justify-center items-center gap-2 border-gray-200 border-2 bg-gray-100  h-8 w-8  rounded-lg">

              <p><User size={16} /></p>
            </div>
            <div className="">


              <p className="font-medium">

                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>

          </div>
        </div>

        {/* INFO BOX */}
        <div className="p-4  border-t-4  border-gray-300 border-dotted ">
          <div className="bg-gray-100 rounded-xl p-3 text-xs text-gray-600">
            <p className="font-semibold">
              Your meeting link and details have been sent to your email and WhatsApp.
            </p>

            <p className="mt-2 text-gray-500">
              Save it — you'll need the meeting link to join your call.
            </p>

            <div className="flex gap-3 mt-2 text-black underline font-semibold">
              <span className="cursor-pointer">Save booking</span>
              <span className="cursor-pointer">Didn't get it?</span>
            </div>
          </div>
        </div>

        {/*  ACTIONS */}
        <div className="flex justify-around text-xs text-gray-600 p-4 cursor-pointer" >
          <div className="flex flex-col items-center gap-1" onClick={() => window.open("https://calendar.google.com/calendar/u/0/r/eventedit?text=Topic+:+15+mins+video+call+:+Tanush+-+NITESH+JOSHI+&dates=20260511T054500Z/20260511T060000Z&details=1:1+Video+call+between+Tanush+and+NITESH+JOSHI+for+having+a+discussion+over+15+mins+video+call.&location=https://topmate.io/seeker/dashboard/bookings/video&ctz=Asia/Kolkata", "_blank")}>
            <span className="text-center flex items-center justify-center text-gray-700 border-2 border-gray-200 h-8 w-8  rounded-lg  ">
            <Calendar size={16} />
            </span>
            <span className="mt-2" >Calendar</span>
          </div>

          <div
            className="flex flex-col items-center gap-1 cursor-pointer"
            onClick={() => window.open(`mailto:${creator?.email}`)}
          >
            <span className="text-center flex items-center justify-center text-gray-700 border-2 border-gray-200 h-8 w-8  rounded-lg  ">
            <Mail size={16} />
            </span>
            <span className="mt-2">Email {creator?.firstName}</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-center flex items-center justify-center text-gray-700 border-2 border-gray-200 h-8 w-8  rounded-lg  ">
            <Flag size={16} />
            </span>
            <span className="mt-2">Report</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-center flex items-center justify-center text-gray-700 border-2 border-gray-200 h-8 w-8  rounded-lg  ">
            <MessageSquare size={16} />
            </span>
            <span className="mt-2">Help</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-center flex items-center justify-center text-gray-700 border-2 border-gray-200 h-8 w-8  rounded-lg  ">
            <MessageCircle size={16} />
            </span> 
            <span className="mt-2">Chat</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingSuccess;