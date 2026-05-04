
import React from "react";
import { useParams } from "react-router-dom";
import OneToOneHook from "../../hooks/OneToOneHook";
import { FaArrowLeft , FaCalendarAlt } from "react-icons/fa";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OnetoOne = () => {
const navigate = useNavigate();    
const [selectedDay, setSelectedDay] = useState(null);
const [selectedTime, setSelectedTime] = useState(null);
const [selectedDate, setSelectedDate] = useState(null);
const [startIndex, setStartIndex] = useState(0);
const visibleCount = 5;

  const { id } = useParams();
  const { data, isLoading } = OneToOneHook(id);

  

const service = data?.data;
const user = service?.user;

const getNextDatesForDay = (dayName) => {
  const result = [];
  const today = new Date();

  const daysMap = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };


  const targetDay = daysMap[dayName];

  let date = new Date();

  // move to next matching day
  while (date.getDay() !== targetDay) {
    date.setDate(date.getDate() + 1);
  }

  // get next 4 weeks
  for (let i = 0; i < 4; i++) {
    result.push(new Date(date));
    date.setDate(date.getDate() + 7);
  }

  return result;
};


const allDates =
  user?.availability
    ?.flatMap((dayObj) => {
      const dates = getNextDatesForDay(dayObj.day);

      return dates.map((date) => ({
        date,
        day: dayObj.day,
        slots: dayObj.slots,
      }));
    })
    .sort((a, b) => a.date - b.date) || [];


const visibleDates = allDates.slice(startIndex, startIndex + visibleCount);

const generateSlots = (start, end, duration) => {
  const slots = [];

  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);

  let current = new Date();
  current.setHours(sh, sm, 0);

  const endTime = new Date();
  endTime.setHours(eh, em, 0);

  while (current < endTime) {
    const next = new Date(current.getTime() + (duration + 5) * 60000);

    if (next <= endTime) {
      slots.push(current.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }));
    }

    current = next;
  }

  return slots;
};


const slots =
  selectedDay?.slots?.flatMap((slot) =>
    generateSlots(slot.start, slot.end, service.duration)
  ) || [];




const handleContinue = () => {
navigate("/booking/confirm", {
    state: {
      selectedDate,
      selectedTime,
      service,
      user,
    },
  });
};









useEffect(() => {
  if (allDates.length > 0) {
    const exists = allDates.some(
      (item) =>
        selectedDate &&
        item.date.toDateString() === selectedDate.toDateString()
    );

    if (!selectedDate || !exists) {
      setSelectedDay(allDates[0]);
      setSelectedDate(allDates[0].date);
    }
  }
}, [allDates]);



if (isLoading) return <p>Loading...</p>;


  return (
    <div className="min-h-screen bg-[#D65A4A] flex justify-center gap-6 p-6">

     
<div className="bg-white rounded-3xl w-[520px] ">
<div className="bg-[#F7DDDB] p-6 rounded-t-3xl">
    
  <div className="flex items-center gap-2 text-sm mb-4 cursor-pointer">
    <FaArrowLeft className="text-lg"   onClick={() => navigate('/marketplace')} />
    <span className="font-medium">
      {user?.firstName} {user?.lastName}
    </span>
  </div>

  <div className="flex items-center gap-3 ">
  <span className="bg-white px-2 py-1 text-xs rounded-full shadow-sm">
      ⭐ 3.5
</span>
<span className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-full">
      Popular
      </span>
  </div>

  <div className="flex justify-between items-center">
    <h1 className="text-xl font-bold leading-snug w-[70%]">
      {service?.title}
    </h1>

    <img
      src={user?.userImageUrl}
      className="w-19 h-19 rounded-full object-cover"
    />
  </div>


</div>

  <div className="grid grid-cols-3 text-gray-600 border-b-1 border-gray-600  overflow-hidden text-sm ">
    <div className="p-3 border-r text-lg font-medium">
      ₹ {service?.price}
    </div>
    <div className="p-3 flex items-center gap-2 text-lg font-medium">
      <FaCalendarAlt className="text-lg" /> {service?.duration} mins
    </div>
    <div className="p-3 border-l">
    
    </div>
    
  </div>

  <div className="mt-4 bg-[#efe3d6] p-4 rounded-xl text-sm m-6">
    <div className="flex gap-2 mb-2">
      <span className="bg-white px-2 py-1 rounded-full text-xs">Helpful</span>
      <span className="bg-white px-2 py-1 rounded-full text-xs">Engaging</span>
      <span className="bg-white px-2 py-1 rounded-full text-xs">Supportive</span>
    </div>

    <p className="text-gray-700 m-6">
      {user?.firstName} excels as a mentor, providing clear guidance and practical advice,
      inspiring confidence and critical thinking.
    </p>

    <p className="text-xs text-gray-400 mt-2">
      AI-generated based on testimonials
    </p>
  </div>

  <p className="text-sm text-gray-600 mt-4 leading-relaxed m-6">

    {service?.longDescription}    
 
  </p>

  <div className="text-xs text-gray-500 mt-3 flex gap-3 m-6">
    <span className="underline cursor-pointer">Terms</span>
    <span className="underline cursor-pointer">Privacy</span>
  </div>

</div>


      <div className="bg-white shadow-md rounded-2xl w-[340px] p-5">

        <h3 className="font-semibold mb-3">When should we meet?</h3>

<div className="flex items-center justify-between gap-2">

  {/* LEFT */}
  <button
    onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
    className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100"
  >
    ←
  </button>

  {/* DATES */}
  <div className="flex gap-2 overflow-hidden">
    {visibleDates.map((item, index) => {
      const d = item.date;

      return (
        <button
          key={index}
          onClick={() => {
            setSelectedDay(item);
            setSelectedDate(d);
          }}
          className={`min-w-[75px] px-3 py-2 rounded-xl border text-sm flex flex-col items-center ${
            selectedDate?.toDateString() === d.toDateString()
              ? "bg-black text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <span className="text-xs">
            {d.toLocaleDateString("en-US", { weekday: "short" })}
          </span>

          <span className="font-semibold">
            {d.getDate()}
          </span>

          <span className="text-[10px] text-gray-500">
            {d.toLocaleDateString("en-US", { month: "short" })}
          </span>
        </button>
      );
    })}
  </div>

  {/* RIGHT */}
  <button
    onClick={() =>
      setStartIndex((prev) =>
        Math.min(prev + 1, Math.max(allDates.length - visibleCount, 0))
      )
    }
    className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100"
  >
    →
  </button>

</div>



<div className="mt-4 grid grid-cols-3 gap-3 max-h-[200px] overflow-y-auto">
  {slots.map((time, index) => (
    <button
      key={index}
      onClick={() => setSelectedTime(time)}
      className={`border px-4 py-2 rounded-lg text-sm ${
        selectedTime === time
          ? "bg-yellow-200 border-yellow-500"
          : "hover:bg-yellow-100"
      }`}
    >
      {time}
    </button>
  ))}
</div>

        {/* Timezone */}
        <p className="text-xs text-gray-500 mt-3">
          {user?.timezone}
        </p>
<button
  onClick={handleContinue}
  disabled={!selectedTime}
  className={`w-full mt-4 py-2 rounded-lg ${
    selectedTime
      ? "bg-black text-white"
      : "bg-gray-300 cursor-not-allowed"
  }`}
>
          Continue
        </button>





      </div>

    </div>
  );
};
export default OnetoOne;
