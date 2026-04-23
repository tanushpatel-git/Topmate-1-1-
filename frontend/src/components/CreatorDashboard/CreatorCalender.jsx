import React  from "react";
import { useState } from "react";
import { MapPin, CalendarDays, Settings } from "lucide-react";

const CreatorCalenderSetting = () => {


const [timezone, setTimezone] = useState("GMT+5:30 Chennai, Kolkata");
  const [bookingPeriod, setBookingPeriod] = useState("3 Months");
  const [noticePeriod, setNoticePeriod] = useState(240);

  return <div>
    <div className=" border-b-1 py-5">
<h1 className="text-4xl font-bold text-gray-700 px-10">Calender</h1>
<div className="flex gap-4 px-10 mt-6">
<button className="bg-gray-100 border-2 border-black-300 px-4 py-2  rounded-full">Setting</button>
<button className="border-1 text-gray-700 border-black-300 px-4 py-2  rounded-full">Schedule</button>
</div>
    </div>



      <div className="w-[50%]   p-6 space-y-6    px-10">
        {/* Timezone */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
         
    <div className="">  <MapPin className="w-5 h-5 text-gray-600" /> </div>
  <div>
    <h2 className="font-medium flex items-center gap-2">
      <span>Timezone</span>
    </h2>

    <p className="text-sm text-gray-500">
      Required for timely communications
    </p>
  </div>

  <select
    value={timezone}
    onChange={(e) => setTimezone(e.target.value)}
    className="border rounded-lg px-4 py-2 w-full md:w-72"
  >
    <option>GMT+5:30 Chennai, Kolkata</option>
    <option>GMT+0 London</option>
    <option>GMT-5 New York</option>
  </select>
</div>
        <hr />

        {/* Reschedule Policy */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="font-medium">Reschedule policy</h2>
            <p className="text-sm text-gray-500">
              How can customers reschedule calls
            </p>
          </div>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            Update Policy
          </button>
        </div>

        <hr />

        {/* Booking Period */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="font-medium">Booking Period</h2>
            <p className="text-sm text-gray-500">
              How far in the future can attendees book
            </p>
          </div>
          <select
            value={bookingPeriod}
            onChange={(e) => setBookingPeriod(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full md:w-48"
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
          <div>
            <h2 className="font-medium">Notice Period</h2>
            <p className="text-sm text-gray-500">
              Set the minimum amount of notice that is required
            </p>
          </div>
          <div className="flex">
            <input
              type="number"
              value={noticePeriod}
              onChange={(e) => setNoticePeriod(e.target.value)}
              className="border border-left-0  px-3 py-2 w-24"
            />
            <select className="border  px-3 py-2">
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
          <div>
            <h2 className="font-medium">Calendar Setup Has Moved!</h2>
            <p className="text-sm text-gray-500 max-w-md">
              We've moved calendar integrations and meeting configurations to a dedicated section for better organization.
            </p>
          </div>
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
            Go to Settings → Integrations
          </button>
        </div>
      </div>

  </div>;
};

export default CreatorCalenderSetting;
