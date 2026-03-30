import { motion } from "framer-motion";
import { Calendar, Zap, Link2, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "Step 01",
    title: "Set your rate",
    desc: "Pick your price per session. One rate or several — you're in control.",
    icon: Zap,
    bg: "dark",
  },
  {
    step: "Step 02",
    title: "Sync your calendar",
    desc: "Connect Google Calendar once. Your real availability drives the booking page.",
    icon: Calendar,
    bg: "dark",
  },
  {
    step: "Step 03",
    title: "Share your link",
    desc: "Send your personal booking link anywhere and let clients book instantly.",
    icon: Link2,
    bg: "dark",
  },
  {
    step: "Step 04",
    title: "Get booked",
    desc: "Receive bookings automatically and get notified instantly.",
    icon: CheckCircle,
    bg: "light",
  },
];

function StepCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl border border-neutral-800 bg-neutral-950 p-10 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition pointer-events-none"
        style={{background:'radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%)'}} />

      <div className="flex items-center justify-center h-28 mb-10">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-700">
          <Icon className="text-white" size={28} />
        </div>
      </div>

      <div className="inline-block text-xs text-neutral-400 border border-neutral-700 rounded-full px-3 py-1 mb-4">
        {item.step}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">
        {item.title}
      </h3>

      <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
        {item.desc}
      </p>

      <div className="absolute rotate-12 transition-all duration-300 hover:rotate-0 right-6 -bottom-10 text-[200px] font-bold text-white/5 select-none">
        {index + 1}
      </div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-4xl md:text-5xl font-semibold text-neutral-200 mb-20">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((item, i) => (
            <StepCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
