import React from "react";
import { DollarSign, Calendar, Video, RefreshCw, Mic, Zap } from "lucide-react";

export default function FeaturesGrid() {
    const features = [
    {
      title: "Set Your Rate",
      desc: "You choose the price. Per session, per hour, or per day.",
      icon: DollarSign,
      span: "md:col-span-2",
      badge: "+$150.00",
    },
    {
      title: "Automated Scheduling",
      desc: "Clients book themselves. No back-and-forth DMs.",
      icon: Calendar,
    },
    {
      title: "Free Zoom Pro",
      desc: "Zoom Pro included for every creator. No 40-minute cap, no extra fee.",
      icon: Video,
    },
    {
      title: "Calendar Sync",
      desc: "Google Calendar syncs in one click. Your availability is always accurate.",
      icon: RefreshCw,
    },
    {
      title: "Meeting Recordings",
      desc: "Record every call with one click. Sell the replay or share it later.",
      icon: Mic,
    },
    {
      title: "Instant Withdrawals",
      desc: "Withdraw after every session. INR via PayU/Razorpay, global via AirWallex/Stripe.",
      icon: Zap,
      span: "md:col-span-2",
    },
  ];

  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-20 tracking-tight">
          One link. Automated bookings. Instant payouts.
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <div
                key={i}
                className={`rounded-3xl border border-white/10 bg-neutral-900 p-8 relative overflow-hidden group ${f.span || ""}`}
              >
                {/* Badge */}
                {f.badge && (
                  <div className="absolute top-6 right-6 bg-white/5 text-white/80 px-3 py-1 rounded-full text-xs border border-white/10">
                    {f.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 mb-6 text-xl group-hover:scale-110 transition duration-300">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}  