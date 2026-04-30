import React, { useState } from "react";
import { MapPin, CalendarDays, Settings } from "lucide-react";
import creatorCalenderHook from '../../hooks/creatorCalenderHook';  
import { useEffect } from "react";

const CreatorCalender = () => {
  
  const { mutate: updateSettings, isPending } =  creatorCalenderHook();
  
  const [timezone, setTimezone] = useState("GMT+5:30 Chennai, Kolkata");
  const [bookingPeriod, setBookingPeriod] = useState("3 Months");
  const [noticePeriod, setNoticePeriod] = useState(240);
  const [noticeUnit, setNoticeUnit] = useState("Minutes");
  const [schedulefun, setSchedulefun] = useState(false);
  const [rescheduleType, setRescheduleType] = useState("direct");
  const [notice, setNotice] = useState(1440); // minutes (24 hrs)

  const optionsType = [
    { label: "Request reschedule", value: "request" },
    { label: "Directly reschedule", value: "direct" }
  ];

  const noticeOptions = [
    { label: "30 mins", value: 30 },
    { label: "8 hrs", value: 480 },
    { label: "24 hrs", value: 1440 },
    { label: "Anytime", value: "anytime" }
  ];
const [page , setPage] = useState("setting")



const USER_ID = "64c9624b46b6814080514960";






const defaultSchedule = {
  Monday: [{ start: "07:45", end: "20:00" }],
  Tuesday: [{ start: "09:00", end: "20:00" }],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
};

const [schedule, setSchedule] = useState(defaultSchedule);


const toggleDay = (day) => {
  setSchedule((prev) => ({
    ...prev,
    [day]: prev[day].length ? [] : [{ start: "09:00", end: "17:00" }],
  }));
};

const updateTime = (day, index, field, value) => {
  const updated = [...schedule[day]];
  updated[index][field] = value;

  setSchedule((prev) => ({
    ...prev,
    [day]: updated,
  }));
};

const addSlot = (day) => {
  setSchedule((prev) => ({
    ...prev,
    [day]: [...prev[day], { start: "09:00", end: "17:00" }],
  }));
};


const formatAvailability = () => {
  return Object.keys(schedule)
    .filter((day) => schedule[day].length > 0)
    .map((day) => ({
      day,
      slots: schedule[day],
    }));
};

useEffect(() => {
  const timeout = setTimeout(() => {
    updateSettings({
      userId: USER_ID,
      timezone,
      bookingPeriod,
      noticePeriod: Number(noticePeriod),
      noticeUnit,
      reschedulePolicy: rescheduleType,
      rescheduleTiming:
        notice === "anytime" ? "Anytime" : `${notice} Minutes`,
    });
  }, 800);

  return () => clearTimeout(timeout);
}, [timezone, bookingPeriod, noticePeriod, noticeUnit, rescheduleType, notice]);












  return (
    <div className="min-h-screen bg-white text-sm">
      {/* Header */}
      <div className="border-b py-5">
        <h1 className="text-2xl font-semibold text-gray-700 px-10">
          Calendar
        </h1>

        <div className="flex gap-4 px-10 mt-5">
          <button className="bg-gray-100 border px-4 py-2 rounded-full text-sm hover:bg-gray-200" onClick={() => setPage("setting")}>
            Setting
          </button>

          <button className="border text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50" onClick={() => setPage("schedule")}>
            Schedule
          </button>
        </div>



      </div>

      {/* Content */}

      {page === "setting" ? (
        <div className="w-full md:w-[60%] p-6 px-10 space-y-6">

        {/* Timezone */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex gap-3">
             <MapPin className="w-5 h-5 text-gray-600 mt-1" />

            <div>
              <h2 className="text-sm font-medium">Timezone</h2>
              <p className="text-xs text-gray-500">
                Required for timely communications
              </p>
            </div>
          </div>

          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="text-sm border rounded-lg px-4 py-2 w-full md:w-72" 
          >
            <option>GMT+5:30 Chennai, Kolkata</option>
            <option>GMT+0 London</option>
            <option>GMT-5 New York</option>
          </select>
        </div>

        <hr />

        {/* Reschedule Policy */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex gap-3">
            <CalendarDays className="w-5 h-5 text-gray-600 mt-1" />

            <div>
              <h2 className="text-sm font-medium">Reschedule policy</h2>
              <p className="text-xs text-gray-500">
                How can customers reschedule calls
              </p>
            </div>
          </div>

          <button className="text-sm px-4 py-2 border rounded-lg hover:bg-gray-50" onClick={() => setSchedulefun(true)}>
            Update Policy
          </button>
        </div>

        {schedulefun && (

            <div className="fixed inset-0 flex items-center justify-center bg-black/30">
      <div className="bg-white w-[380px] rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Reschedule Policy</h2>
          <button className="text-gray-500 " onClick={() => setSchedulefun(false)}>✕</button>
        </div>

        {/* Type Selection */}
        <p className="text-sm text-gray-600 mb-2">
          How can your customers initiate a reschedule
        </p>
        <div className="flex gap-2 mb-4">
          {optionsType.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setRescheduleType(opt.value)}
              className={`px-3 py-2 rounded-lg border text-sm ${
                rescheduleType === opt.value
                  ? "border-black font-medium"
                  : "border-gray-300"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Notice Selection */}
        <p className="text-sm text-gray-600 mb-2">
          Minimum notice before rescheduling a call
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {noticeOptions.map((opt) => (
            <button
              key={opt.label}
              onClick={() => setNotice(opt.value)}
              className={`px-3 py-2 rounded-lg border text-sm ${
                notice === opt.value
                  ? "border-black font-medium"
                  : "border-gray-300"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Submit */}
        <button
          onClick={() => { updateSettings();}}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          Update Policy
        </button>
      </div>
    </div>
        )}



        <hr />

        {/* Booking Period */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex gap-3">
            <CalendarDays className="w-5 h-5 text-gray-600 mt-1" />

            <div>
              <h2 className="text-sm font-medium">Booking Period</h2>
              <p className="text-xs text-gray-500">
                How far in the future can attendees book
              </p>
            </div>
          </div>

          <select
            value={bookingPeriod}
            onChange={(e) => setBookingPeriod(e.target.value)}
            className="text-sm border rounded-lg px-4 py-2 w-full md:w-48"
          >
            <option>1 Week</option>
            <option>2 Weeks</option>
            <option>3 Weeks</option>
            <option>4 Weeks</option>
            <option>2 Months</option>
            <option>3 Months</option>
          </select>
        </div>

        <hr />

        {/* Notice Period */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex gap-3">
            <CalendarDays className="w-5 h-5 text-gray-600 mt-1" />

            <div>
              <h2 className="text-sm font-medium">Notice Period</h2>
              <p className="text-xs text-gray-500">
                Set the minimum amount of notice that is required
              </p>
            </div>
          </div>

          <div className="flex">
            <input
  type="number"
  value={noticePeriod}
  onChange={(e) => setNoticePeriod(e.target.value)}
  className="text-sm border rounded-l-lg px-3 py-2 w-16"
/>

            <select
              value={noticeUnit}
              onChange={(e) => setNoticeUnit(e.target.value)}
              className="text-sm border border-l-0 px-3 py-2 rounded-r-lg"
            >
              <option>Minutes</option>
              <option>Hours</option>
              <option>Days</option>
              <option>Weeks</option>
            </select>
          </div>
        </div>

        <hr />

        {/* Integration Notice */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex gap-3">
            <Settings className="w-5 h-5 text-gray-600 mt-1" />

            <div>
              <h2 className="text-sm font-medium">Integration Notice</h2>
              <p className="text-xs text-gray-500 max-w-lg">
                We've moved calendar integrations and meeting configurations
                to a dedicated section for better organization.
              </p>
            </div>
          </div>

          <button className="bg-green-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-green-700">
            Go to Settings → Integrations
          </button>
        </div>
      </div>
      ) :
       (
        <div className="w-full md:w-[60%] p-6 px-10 space-y-6">
          <h1>Default</h1>
        
     <button
  onClick={() => {
    updateSettings({
      userId: USER_ID,
      availability: formatAvailability(),
    });
  }}
  className="bg-black text-white px-5 py-2 rounded-lg"
>
  {isPending ? "Saving..." : "Save"}
</button>


{Object.keys(schedule).map((day) => (
  <div key={day} className="flex items-center gap-4 border-b py-3">


    {/* Checkbox */}
    <input
      type="checkbox"
      checked={schedule[day].length > 0}
      onChange={() =>toggleDay(day)}
    />

    {/* Day */}
    <span className="w-24">{day}</span>

    {/* Slots */}
    {schedule[day].length > 0 ? (
      schedule[day].map((slot, index) => (

        <div key={index} className="flex gap-2 items-center">

          <input
            type="time"
            value={slot.start}
            onChange={(e) =>
              updateTime(day, index, "start", e.target.value)
            }
            className="border px-2 py-1 rounded"
          />

          <span>-</span>

          <input
            type="time"
            value={slot.end}
            onChange={(e) =>
              updateTime(day, index, "end", e.target.value)
            }
            className="border px-2 py-1 rounded"
          />

        </div>
        
      ))
    ) : (
      <span className="text-gray-400">Unavailable</span>
    )}

    {/* Add slot */}
    {schedule[day].length > 0 && (
      <button
        onClick={() => addSlot(day)}
        className="px-2 py-1 border rounded"
      >
        +
      </button>
    )}

  </div>
))}


        </div>

      )}


    </div>
  );
};

export default CreatorCalender;