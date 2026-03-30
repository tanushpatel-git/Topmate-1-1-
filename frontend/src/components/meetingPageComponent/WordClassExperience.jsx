import { motion } from "framer-motion";
import { Shield, Calendar, MessageSquare } from "lucide-react";

export default function WorldClassExperience() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardBase =
    "rounded-3xl border border-gray-800 bg-gradient-to-b from-[#0f0f0f] to-black p-8 shadow-xl relative overflow-hidden";

  return (
    <div className="bg-black text-white min-h-screen px-6 py-24 flex flex-col items-center">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-3xl mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          A world-class experience
        </h1>
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-400">
          for your clients
        </h1>
        <p className="text-gray-500 mt-6">
          We handle the friction so you can focus on the conversation.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
      >
        {/* Card 1 */}
        <motion.div variants={fadeUp} className={cardBase}>
          <div className="absolute top-6 left-6 space-y-3">
            <div className="bg-white text-black px-4 py-2 rounded-xl text-sm shadow">
              Booking Confirmed 🚀
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-xl text-xs text-gray-400">
              Meeting starting in 15m
            </div>
          </div>

          <div className="mt-32">
            <h3 className="text-lg font-semibold mb-2">
              Instant WhatsApp Confirmation
            </h3>
            <p className="text-gray-400 text-sm">
              Your client gets a WhatsApp confirmation within seconds of booking.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={fadeUp} className={cardBase}>
          <div className="flex items-center justify-center h-40">
            <div className="bg-gray-800 rounded-2xl px-6 py-6 text-center shadow-lg">
              <p className="text-sm text-gray-400">10:30 AM - 11:00 AM</p>
              <p className="mt-2 font-semibold">1:1 Mentorship Session</p>
              <div className="flex justify-center gap-2 mt-3 text-xs text-gray-400">
                <span className="bg-gray-700 px-2 py-1 rounded">Y</span>
                <span className="bg-gray-700 px-2 py-1 rounded">U</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">
              Calendar Invite Auto-Sent
            </h3>
            <p className="text-gray-400 text-sm">
              Both creator and client receive a Google Calendar invite immediately.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={fadeUp} className={cardBase}>
          <div className="flex items-center justify-center h-40 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-black px-6 py-4 rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <Shield className="w-5 h-5" />
              <span className="text-sm">24/7 Priority Support</span>
            </motion.div>

            {/* Glow */}
            <div className="absolute w-40 h-40 bg-white/10 blur-3xl rounded-full"></div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-400 text-sm">
              Our support team handles rescheduling, tech issues, and refunds.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
