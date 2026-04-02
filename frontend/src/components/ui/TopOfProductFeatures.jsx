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

const TopOfProductFeatures = ({
  theam="light",
  badge,
  title,
  description,
  button1,
  button2,
}) => {

  const isDark = theam === "dark";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`min-h-screen flex items-center justify-center px-6 ${
        isDark ? "bg-black text-white" : "bg-[#F7F7F2] text-black"
      }`}
    >
      <div className="max-w-6xl text-center">

        {/* Badge */}
        <motion.div
          variants={item}
          className={`inline-block px-4 py-1 mb-6 text-sm rounded-full border ${
            isDark
              ? "bg-white/10 border-white/20"
              : "bg-black/10 border-black/20"
          }`}
        >
          {badge}
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className={`mt-6 text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            className={`px-8 py-4 rounded-full font-medium shadow-lg hover:scale-105 transition ${
              isDark
                ? "bg-white text-black hover:shadow-white"
                : "bg-black text-white hover:shadow-black"
            }`}
          >
            {button1}
          </button>

          <button
            className={`px-8 py-4 rounded-full font-medium transition border ${
              isDark
                ? "border-white/30 hover:border-white"
                : "border-black/30 hover:border-black"
            }`}
          >
            {button2}
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={item}
          className={`mt-10 flex items-center justify-center gap-3 text-sm ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <div className="flex -space-x-2">
            <img
              className={`w-8 h-8 rounded-full object-cover border ${
                isDark ? "border-black" : "border-white"
              }`}
              src="https://topmate.io/images/homepage/referral-experts/vani-gupta.jpg"
            />
            <img
              className={`w-8 h-8 rounded-full object-cover border ${
                isDark ? "border-black" : "border-white"
              }`}
              src="https://topmate.io/images/homepage/referral-experts/vatsal-nahata.jpg"
            />
            <img
              className={`w-8 h-8 rounded-full object-cover border ${
                isDark ? "border-black" : "border-white"
              }`}
              src="https://topmate.io/images/homepage/referral-experts/aditi-paul.jpg"
            />
          </div>

          <span>Trusted by 300K+ creators · 4.9 ★ rating</span>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default TopOfProductFeatures;