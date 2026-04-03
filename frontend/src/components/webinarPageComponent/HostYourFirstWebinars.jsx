import { motion } from "framer-motion";
import {
  Star,
  Zap,
  Target,
  ArrowUpRight
} from "lucide-react";

export default function HostYourFirstWebinars() {

  const floating = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#1a1a1a_1px,transparent_1px),linear-gradient(90deg,#1a1a1a_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* LEFT FLOATING CARDS */}
      <motion.div
        variants={floating}
        animate="animate"
        className="absolute left-24 top-36 hidden lg:block"
      >
        <div className="bg-[#0b0b0b] border border-neutral-800 px-6 py-4 rounded-xl flex items-center gap-3">
          <Star className="text-blue-400 w-4 h-4" />
          <div>
            <p className="text-sm font-semibold">4.9★</p>
            <p className="text-xs text-neutral-400">AVG RATING</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={floating}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute left-20 top-64 hidden lg:block"
      >
        <div className="bg-[#0b0b0b] border border-neutral-800 px-6 py-4 rounded-xl flex items-center gap-3">
          <Zap className="text-blue-400 w-4 h-4" />
          <div>
            <p className="text-sm font-semibold">90%</p>
            <p className="text-xs text-neutral-400">CREATOR SHARE</p>
          </div>
        </div>
      </motion.div>

      {/* RIGHT FLOATING CARD */}
      <motion.div
        variants={floating}
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute right-24 bottom-40 hidden lg:block"
      >
        <div className="bg-[#0b0b0b] border border-neutral-800 px-6 py-4 rounded-xl flex items-center gap-3">
          <Target className="text-blue-400 w-4 h-4" />
          <div>
            <p className="text-sm font-semibold">1M+</p>
            <p className="text-xs text-neutral-400">SESSIONS</p>
          </div>
        </div>
      </motion.div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-4xl text-center">

        {/* Small pill */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#0b0b0b] border border-neutral-800 px-5 py-2 rounded-full text-sm text-neutral-300 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            Scale your group events today
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-b from-white to-neutral-400 text-transparent bg-clip-text">
            Host Your First
          </span>
          <br />
          <span className="bg-gradient-to-b from-white to-neutral-400 text-transparent bg-clip-text">
            Paid Webinar This Week
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-400 mt-8 text-lg">
          Free to create. Zoom Pro included. Start selling in 10 minutes.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">

          <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition">
            Create Your Webinar
            <ArrowUpRight size={18} />
          </button>

          <button className="border border-neutral-700 px-8 py-4 rounded-xl text-white hover:bg-neutral-900 transition">
            See Pricing
          </button>

        </div>
      </div>
    </section>
  );
}