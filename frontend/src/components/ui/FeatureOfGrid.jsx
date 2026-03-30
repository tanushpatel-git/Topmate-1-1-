import { motion } from "framer-motion";
import { DollarSign, Calendar, Video, RefreshCw, Mic, Zap } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: DollarSign,
    title: "Set Your Rate",
    desc: "You choose the price. Per session, per hour, or per day.",
    highlight: "+$150.00",
    large: true,
  },
  {
    icon: Calendar,
    title: "Automated Scheduling",
    desc: "Clients book themselves. No back-and-forth DMs.",
  },
  {
    icon: Video,
    title: "Free Zoom Pro",
    desc: "Zoom Pro included for every creator. No 40-minute cap.",
  },
  {
    icon: RefreshCw,
    title: "Calendar Sync",
    desc: "Google Calendar syncs in one click. Your availability is always accurate.",
  },
  {
    icon: Mic,
    title: "Meeting Recordings",
    desc: "Record every call with one click. Sell the replay later.",
  },
  {
    icon: Zap,
    title: "Instant Withdrawals",
    desc: "Withdraw after every session via Stripe / Razorpay.",
    large: true,
  },
];

function FeatureCard({ feature }) {
  const Icon = feature.icon;
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className={`relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-8 transition-all duration-300 hover:border-neutral-600 ${
        feature.large ? "md:col-span-2" : ""
      }`}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 hover:opacity-100 transition"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />

      {/* icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="mb-6 w-11 h-11 rounded-lg flex items-center justify-center bg-neutral-900 border border-neutral-800"
      >
        <Icon size={18} className="text-neutral-300" />
      </motion.div>

      {/* highlight */}
      {feature.highlight && (
        <div className="absolute top-6 right-6 bg-neutral-900 border border-neutral-700 text-green-400 text-sm px-3 py-1 rounded-lg">
          {feature.highlight}
        </div>
      )}

      <h3 className="text-lg font-semibold text-white mb-2">
        {feature.title}
      </h3>

      <p className="text-sm text-neutral-400 leading-relaxed">
        {feature.desc}
      </p>
    </div>
  );
}

export default function FeaturesOfGrid() {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-semibold mb-20 text-neutral-200"
        >
          One link. Automated bookings. Instant payouts.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
