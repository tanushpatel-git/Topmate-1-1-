import React from 'react'
import { motion } from "framer-motion"
import { ArrowUpRight, Zap, Activity, Star } from "lucide-react"

export default function ManagementBusinessToday({ colorTheme = "blue", button1, button2, title, title2, description }) {
  const floatAnimation = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [-10, 10, -10],
      opacity: [0.5, 1, 0.5],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const colors = {
    blue: {
      bg: "bg-blue-500",
      text: "text-white",
      text2: "text-blue-500",
      hover: "hover:bg-blue-600",
    },
    purple: {
      bg: "bg-purple-500",
      text: "text-white",
      text2: "text-purple-500",
      hover: "hover:bg-purple-600",
    },
    pink: {
      bg: "bg-pink-500",
      text: "text-white",
      text2: "text-pink-500",
      hover: "hover:bg-pink-600",
    },
    green: {
      bg: "bg-green-500",
      text: "text-white",
      text2: "text-green-500",
      hover: "hover:bg-green-600",
    },
    orange: {
      bg: "bg-orange-500",
      text: "text-white",
      text2: "text-orange-500",
      hover: "hover:bg-orange-600",
    },
    yellow: {
      bg: "bg-yellow-500",
      text: "text-white",
      text2: "text-yellow-500",
      hover: "hover:bg-yellow-600",
    },
    red: {
      bg: "bg-red-500",
      text: "text-white",
      text2: "text-red-500",
      hover: "hover:bg-red-600",
    },
    cyan: {
      bg: "bg-cyan-500",
      text: "text-white",
      text2: "text-cyan-500",
      hover: "hover:bg-cyan-600",
    },
    lime: {
      bg: "bg-lime-500",
      text: "text-white",
      text2: "text-lime-500",
      hover: "hover:bg-lime-600",
    },
    indigo: {
      bg: "bg-indigo-500",
      text: "text-white",
      text2: "text-indigo-500",
      hover: "hover:bg-indigo-600",
    },
    violet: {
      bg: "bg-violet-500",
      text: "text-white",
      text2: "text-violet-500",
      hover: "hover:bg-violet-600",
    },
    fuchsia: {
      bg: "bg-fuchsia-500",
      text: "text-white",
      text2: "text-fuchsia-500",
      hover: "hover:bg-fuchsia-600",
    },
    rose: {
      bg: "bg-rose-500",
      text: "text-white",
      text2: "text-rose-500",
      hover: "hover:bg-rose-600",
    },
    emerald: {
      bg: "bg-emerald-500",
      text: "text-white",
      text2: "text-emerald-500",
      hover: "hover:bg-emerald-600",
    },
    teal: {
      bg: "bg-teal-500",
      text: "text-white",
      text2: "text-teal-500",
      hover: "hover:bg-teal-600",
    },
    sky: {
      bg: "bg-sky-500",
      text: "text-white",
      text2: "text-sky-500",
      hover: "hover:bg-sky-600",
    },
    slate: {
      bg: "bg-slate-500",
      text: "text-white",
      text2: "text-slate-500",
      hover: "hover:bg-slate-600",
    },
    stone: {
      bg: "bg-stone-500",
      text: "text-white",
      text2: "text-stone-500",
      hover: "hover:bg-stone-600",
    },
    neutral: {
      bg: "bg-neutral-500",
      text: "text-white",
      text2: "text-neutral-500",
      hover: "hover:bg-neutral-600",
    },
    zinc: {
      bg: "bg-zinc-500",
      text: "text-white",
      text2: "text-zinc-500",
      hover: "hover:bg-zinc-600",
    },
    gray: {
      bg: "bg-gray-500",
      text: "text-white",
      text2: "text-gray-500",
      hover: "hover:bg-gray-600",
    },
    black: {
      bg: "bg-black",
      text: "text-white",
      text2: "text-black",
    },
    white: {
      bg: "bg-white",
      text: "text-black",
      text2: "text-white",
    },
  }

  const color = colors[colorTheme];

  return (
    <section className="relative w-full h-screen bg-black py-24 px-6 flex items-center justify-center overflow-hidden">
      <div className="text-center max-w-4xl z-10">
        {/* top badge */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-gray-200 backdrop-blur">
            <span className="text-green-400 mr-2">●</span>
            300K+ creators · Join free today
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
          {title}
          <br />
          {title2}
        </h1>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          {description}
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className={`flex items-center gap-2 ${color.bg} ${color.hover} ${color.text} font-medium px-8 py-4 rounded-xl transition`}>
            {button1}
            <ArrowUpRight size={18} />
          </button>

          <button className={`border border-white/20 ${color.text} px-8 py-4 rounded-xl hover:bg-white/10 transition`}>
            {button2}
          </button>
        </div>
      </div>

      {/* Floating badges */}

      <motion.div
        {...floatAnimation}
        className="absolute left-20 top-40 bg-white/5 border border-white/10 backdrop-blur rounded-xl px-5 py-3 flex items-center gap-2 text-white"
      >
        <Zap size={16} className={color.text2} />
        <div>
          <p className="text-sm font-medium">Instant</p>
          <p className="text-xs text-gray-400">PAYOUTS</p>
        </div>
      </motion.div>

      <motion.div
        {...floatAnimation}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-24 top-40 bg-white/5 border border-white/10 backdrop-blur rounded-xl px-5 py-3 flex items-center gap-2 text-white"
      >
        <Activity size={16} className={color.text2} />
        <div>
          <p className="text-sm font-medium">90%</p>
          <p className="text-xs text-gray-400">CREATOR SHARE</p>
        </div>
      </motion.div>

      <motion.div
        {...floatAnimation}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-32 bottom-32 bg-white/5 border border-white/10 backdrop-blur rounded-xl px-5 py-3 flex items-center gap-2 text-white"
      >
        <Star size={16} className={color.text2} />
        <div>
          <p className="text-sm font-medium">Free</p>
          <p className="text-xs text-gray-400">ZOOM PRO</p>
        </div>
      </motion.div>
    </section>
  );
}
