import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState(21);
  const [selectedTime, setSelectedTime] = useState("9:30 AM");
  const [confirmed, setConfirmed] = useState(false);

  const days = [
    14, 15, 16, 17, 18,
    19, 20, 21, 22, 23,
    24, 25, 26, 27, 28,
  ];

  const times = ["9:00 AM", "9:30 AM", "10:00 AM"];

  function handleConfirm() {
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 3000);
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 text-white relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />

      {/* Floating Card */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[420px] rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl p-6 backdrop-blur"
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-neutral-700 relative">
              <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border border-black" />
            </div>

            <div>
              <h2 className="font-semibold text-lg">Design Review</h2>
              <p className="text-gray-400 text-sm">with Alex Morgan</p>
            </div>
          </div>

          <div className="px-4 py-2 bg-white/10 rounded-full text-sm">$150</div>
        </div>

        {/* Meeting Info */}
        <div className="flex gap-3 mb-6 text-sm">
          <div className="px-3 py-2 bg-white/5 rounded-lg">30 min</div>
          <div className="px-3 py-2 bg-white/5 rounded-lg">Google Meet</div>
        </div>

        {/* Month */}
        <h3 className="text-center font-medium mb-4">October 2024</h3>

        {/* Week */}
        <div className="grid grid-cols-5 text-center text-gray-400 text-sm mb-2">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
        </div>

        {/* Calendar */}
        <div className="grid grid-cols-5 gap-3 mb-6">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`h-12 flex items-center justify-center rounded-xl text-sm transition-all duration-200 ${
                selectedDay === day
                  ? "bg-white text-black shadow-lg scale-105"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Time Slots */}
        <div className="flex gap-3 mb-6">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`flex-1 py-3 rounded-xl border text-sm transition-all ${
                selectedTime === time
                  ? "border-white bg-white/10"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              {time}
            </button>
          ))}
        </div>

        {/* Confirm */}
        <button
          onClick={handleConfirm}
          className="w-full py-4 bg-white text-black rounded-2xl font-medium hover:scale-[1.03] active:scale-[0.98] transition"
        >
          Confirm Booking ✓
        </button>

        {/* Confirmation Popup */}
        <AnimatePresence>
          {confirmed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute -right-24 bottom-16 bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-3 text-sm">
                <div className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-md">✓</div>
                <div>
                  <p className="text-gray-400 text-xs">CONFIRMED</p>
                  <p className="font-medium">Sent!</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}