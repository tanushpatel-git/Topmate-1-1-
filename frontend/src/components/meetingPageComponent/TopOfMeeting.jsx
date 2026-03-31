import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const TopOfMeeting = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-6xl text-center">

        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-block px-4 py-1 mb-6 text-sm rounded-full bg-white/10 border border-white/20"
        >
          1:1 Meetings
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
        >
          Turn 1:1 Calls Into a Revenue Stream
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Set your rate, share one link, and get paid. Free Zoom Pro, calendar
          sync, and instant payouts — no subscription.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-white text-black hover:shadow-white hover:shadow-md rounded-full font-medium shadow-lg hover:scale-105 transition">
            Start Getting Paid
          </button>

          <button className="px-8 py-4 border border-white/30 rounded-full font-medium hover:border-white transition">
            See How It Works
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-center gap-3 text-gray-400 text-sm"
        >
          <div className="flex -space-x-2">
            <img
              className="w-8 h-8 rounded-full border border-black"
              src="https://i.pravatar.cc/40?img=1"
            />
            <img
              className="w-8 h-8 rounded-full border border-black"
              src="https://i.pravatar.cc/40?img=2"
            />
            <img
              className="w-8 h-8 rounded-full border border-black"
              src="https://i.pravatar.cc/40?img=3"
            />
          </div>

          <span>Trusted by 300K+ creators · 4.9 ★ rating</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TopOfMeeting;