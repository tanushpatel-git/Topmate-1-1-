import { motion } from "framer-motion";
import {
    Video,
    Play,
    DollarSign,
    Users,
    Mail,
    MessageSquare,
} from "lucide-react";

export default function ZoomRecordingBuilt() {

    const features = [
        {
            icon: Video,
            title: "Free Zoom Pro Built-In",
            desc: "Every webinar runs on Zoom Pro. No separate Zoom account or subscription needed.",
            tag: "Zoom Pro"
        },
        {
            icon: Play,
            title: "Auto-Recording",
            desc: "Every session is recorded automatically. Use replays for sales, course content, or social clips — no extra steps."
        },
        {
            icon: DollarSign,
            title: "Sell Recordings as Replays",
            desc: "Turn every webinar into a passive revenue stream — sell replays at any price.",
            price: "₹999"
        },
        {
            icon: Users,
            title: "Attendee Management",
            desc: "See who registered, who attended, and who bought the replay — all in one dashboard.",
            stat: "+245"
        },
        {
            icon: Mail,
            title: "Bulk Email to Attendees",
            desc: "Email your entire attendee list directly from Topmate — no third-party tool needed.",
            sent: true
        },
        {
            icon: MessageSquare,
            title: "WhatsApp Reminders",
            desc: "Attendees get automatic WhatsApp reminders 24 hours and 1 hour before go-live.",
            reminder: true
        }
    ];

    return (

        <section className="bg-black text-white py-24 px-6 -mt-10">

            {/* Heading */}

            <h1 className="text-center text-3xl md:text-4xl font-semibold mb-16">
                Zoom, recording, replays, reminders. All built in.
            </h1>

            {/* Grid */}

            <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {features.map((item, i) => {

                    const Icon = item.icon;

                    return (

                        <motion.div
                            key={i}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.25 }}
                            className="relative bg-[#0b0b0b] border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition"
                        >

                            {/* Icon */}

                            <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6">
                                <Icon size={22} />
                            </div>

                            {/* Special tags */}

                            {item.tag && (
                                <div className="absolute top-6 right-6 bg-blue-600 text-xs px-3 py-1 rounded-md">
                                    {item.tag}
                                </div>
                            )}

                            {item.price && (
                                <div className="absolute top-6 right-6 bg-green-500 text-black text-xs px-3 py-1 rounded-md">
                                    {item.price}
                                </div>
                            )}

                            {item.stat && (
                                <div className="absolute top-6 right-6 text-blue-400 text-sm">
                                    {item.stat}
                                </div>
                            )}

                            {item.sent && (
                                <div className="absolute top-6 right-6 bg-white text-black text-xs px-2 py-1 rounded">
                                    SENT
                                </div>
                            )}

                            {item.reminder && (
                                <div className="absolute top-6 right-6 bg-green-500 text-black text-xs px-3 py-1 rounded-md">
                                    Reminder: Webinar in 1hr
                                </div>
                            )}

                            {/* Title */}

                            <h3 className="text-lg font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                        </motion.div>

                    );

                })}

            </div>

        </section>

    );

}