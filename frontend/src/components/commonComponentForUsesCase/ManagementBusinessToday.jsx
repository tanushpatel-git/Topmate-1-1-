import React from 'react'
import { motion } from "framer-motion"
import { ArrowUpRight, Zap, Activity, Star } from "lucide-react"

export default function ManagementBusinessToday() {
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
          Start your Product Management
          <br />
          business today
        </h1>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Everything you need to monetize your Product Management
          expertise. No setup fees, no subscription.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-black font-medium px-8 py-4 rounded-xl transition">
            Create Your Free Profile
            <ArrowUpRight size={18} />
          </button>

          <button className="border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition">
            Explore All Features
          </button>
        </div>
      </div>

      {/* Floating badges */}

      <motion.div
        {...floatAnimation}
        className="absolute left-20 top-40 bg-white/5 border border-white/10 backdrop-blur rounded-xl px-5 py-3 flex items-center gap-2 text-white"
      >
        <Zap size={16} className="text-blue-400" />
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
        <Activity size={16} className="text-blue-400" />
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
        <Star size={16} className="text-blue-400" />
        <div>
          <p className="text-sm font-medium">Free</p>
          <p className="text-xs text-gray-400">ZOOM PRO</p>
        </div>
      </motion.div>
    </section>
  );
}
