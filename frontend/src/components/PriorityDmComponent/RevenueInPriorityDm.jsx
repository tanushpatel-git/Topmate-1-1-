import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function RevenueInPriorityDm() {
  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Floating badges */}
      <motion.div
        {...floatAnimation}
        className="absolute left-20 top-32 bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-xl text-sm"
      >
        Async
        <div className="text-xs text-zinc-400">BY DESIGN</div>
      </motion.div>

      <motion.div
        {...floatAnimation}
        transition={{ ...floatAnimation.animate.transition, delay: 0.5 }}
        className="absolute left-16 bottom-40 bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-xl text-sm"
      >
        100%
        <div className="text-xs text-zinc-400">CONTROL</div>
      </motion.div>

      <motion.div
        {...floatAnimation}
        transition={{ ...floatAnimation.animate.transition, delay: 1 }}
        className="absolute right-20 bottom-40 bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-xl text-sm"
      >
        90%
        <div className="text-xs text-zinc-400">CREATOR SHARE</div>
      </motion.div>

      {/* Main content */}
      <div className="text-center max-w-3xl px-6">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-4 py-1 rounded-full text-sm text-zinc-300 mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Turn your inbox into revenue
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text">
          Start Monetizing Every
          <br />
          Question You Get
        </h1>

        <p className="text-zinc-400 mt-6 text-lg">
          Enable Priority DM and turn your inbox into a revenue stream.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
            Enable Priority DM
            <ArrowUpRight size={18} />
          </button>

          <button className="border border-zinc-700 px-6 py-3 rounded-xl text-zinc-300 hover:bg-zinc-800 transition">
            See Pricing
          </button>
        </div>
      </div>
    </div>
  );
}