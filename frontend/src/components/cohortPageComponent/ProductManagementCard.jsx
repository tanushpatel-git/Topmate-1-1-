import { motion } from "framer-motion";
import { Users, BookOpen, PlayCircle } from "lucide-react";

export default function ProductManagementCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] -mt-60 overflow-hidden">
      <div className="relative shadow-xl">

        {/* Floating Left Card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 top-16 bg-black text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3"
        >
          <Users size={18} />
          <div>
            <p className="text-xs text-neutral-400">ENROLLED</p>
            <p className="font-semibold">32 / 40</p>
          </div>
        </motion.div>

        {/* Floating Right Card */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-16 bottom-32 bg-black text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3"
        >
          <BookOpen size={18} />
          <div>
            <p className="text-xs text-neutral-400">RESOURCE</p>
            <p className="font-semibold">PDF Guide</p>
          </div>
        </motion.div>

        {/* Main Card */}
        <div className="w-[380px] bg-neutral-800 text-white rounded-3xl p-6 shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-full border border-gray-400 relative">
              <div className="absolute h-2 w-2 bg-green-300 bottom-0 right-0 rounded-full"></div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Product Management</h2>
              <p className="text-sm text-neutral-400">with Nikesh.P</p>
            </div>
            <div className="bg-neutral-700 px-3 py-1 rounded-full text-sm">
              ₹18,000
            </div>
          </div>

          {/* Info Row */}
          <div className="flex gap-2 mb-6 text-xs">
            <div className="bg-neutral-700 px-3 py-1 rounded-lg">8 Weeks</div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg">40 Seats</div>
            <div className="bg-neutral-700 px-3 py-1 rounded-lg">Live Zoom</div>
          </div>

          <p className="text-xs text-neutral-400 mb-3 tracking-wider">
            UPCOMING SESSIONS
          </p>

          {/* Session Cards */}
          <div className="space-y-3">
            <div className="bg-neutral-700/60 p-4 rounded-xl flex justify-between items-center">
              <div>
                <p className="font-medium">Introduction to PM</p>
                <p className="text-xs text-neutral-400">Oct 21 • 7:00 PM</p>
              </div>
              <PlayCircle className="text-emerald-400" />
            </div>

            <div className="bg-neutral-700/40 p-4 rounded-xl">
              <p className="font-medium">Product Strategy</p>
              <p className="text-xs text-neutral-400">Oct 28 • 7:00 PM</p>
            </div>

            <div className="bg-neutral-700/40 p-4 rounded-xl">
              <p className="font-medium">Metrics & Analytics</p>
              <p className="text-xs text-neutral-400">Nov 04 • 7:00 PM</p>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-6 w-full bg-white text-black py-3 rounded-2xl font-semibold shadow-md">
            Join Cohort Program ✓
          </button>
        </div>
      </div>
    </div>
  );
}
