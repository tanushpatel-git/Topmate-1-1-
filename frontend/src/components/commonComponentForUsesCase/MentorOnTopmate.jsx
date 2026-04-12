import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

export default function PMMentorSection({ mentors, title, description, colorTheme = "blue" }) {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const initialRotations = [-20, -10, 0, 10, 20];

    const colors = {
        blue: {
            bg: "bg-blue-500",
            text: "text-white",
            text2: "text-blue-500",
        },
        purple: {
            bg: "bg-purple-500",
            text: "text-white",
            text2: "text-purple-500",
        },
        pink: {
            bg: "bg-pink-500",
            text: "text-white",
            text2: "text-pink-500",
        },
        green: {
            bg: "bg-green-500",
            text: "text-white",
            text2: "text-green-500",
        },
        orange: {
            bg: "bg-orange-500",
            text: "text-white",
            text2: "text-orange-500",
        },
        yellow: {
            bg: "bg-yellow-500",
            text: "text-white",
            text2: "text-yellow-500",
        },
        red: {
            bg: "bg-red-500",
            text: "text-white",
            text2: "text-red-500",
        },
        cyan: {
            bg: "bg-cyan-500",
            text: "text-white",
            text2: "text-cyan-500",
        },
        lime: {
            bg: "bg-lime-500",
            text: "text-white",
            text2: "text-lime-500",
        },
        indigo: {
            bg: "bg-indigo-500",
            text: "text-white",
            text2: "text-indigo-500",
        },
        violet: {
            bg: "bg-violet-500",
            text: "text-white",
            text2: "text-violet-500",
        },
        fuchsia: {
            bg: "bg-fuchsia-500",
            text: "text-white",
            text2: "text-fuchsia-500",
        },
        rose: {
            bg: "bg-rose-500",
            text: "text-white",
            text2: "text-rose-500",
        },
        emerald: {
            bg: "bg-emerald-500",
            text: "text-white",
            text2: "text-emerald-500",
        },
        teal: {
            bg: "bg-teal-500",
            text: "text-white",
            text2: "text-teal-500",
        },
        sky: {
            bg: "bg-sky-500",
            text: "text-white",
            text2: "text-sky-500",
        },
        slate: {
            bg: "bg-slate-500",
            text: "text-white",
            text2: "text-slate-500",
        },
        stone: {
            bg: "bg-stone-500",
            text: "text-white",
            text2: "text-stone-500",
        },
        neutral: {
            bg: "bg-neutral-500",
            text: "text-white",
            text2: "text-neutral-500",
        },
        zinc: {
            bg: "bg-zinc-500",
            text: "text-white",
            text2: "text-zinc-500",
        },
        gray: {
            bg: "bg-gray-500",
            text: "text-white",
            text2: "text-gray-500",
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
        <section
            ref={containerRef}
            className="relative h-[320vh] bg-black text-white"
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center">

                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 rounded-full bg-neutral-800 text-sm mb-4">
                        Top 25 in '25 Winner
                    </div>

                    <h2 className="text-4xl md:text-5xl font-semibold">
                        {title}
                    </h2>

                    <p className="text-neutral-400 mt-3">
                        {description}
                    </p>
                </div>

                <div className="relative w-[320px] h-[420px]">

                    {mentors.map((mentor, i) => {

                        const step = 0.22;

                        const reverseIndex = mentors.length - 1 - i;
                        const start = reverseIndex * step * 1.5;

                        const rotate = useTransform(
                            scrollYProgress,
                            [start, start + 0.15],
                            [initialRotations[i], 0]
                        );

                        // card moves upward
                        const y =
                            i === 0
                                ? 0
                                : useTransform(
                                    scrollYProgress,
                                    [start, start + 0.35],
                                    [0, -700]
                                );

                        return (
                            <motion.div
                                key={i}
                                style={{ rotate, y }}
                                className="absolute inset-0"
                            >
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">

                                    <img
                                        src={mentor.img}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Badge */}
                                    <div className={`absolute flex gap-1 top-5 right-5 ${color.bg} ${color.text} text-xs px-3 py-1 rounded-full`}>
                                        <Star fill="#FFD700" stroke="#FFD700" size={16} />
                                        {mentor.badge}
                                    </div>

                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-xl font-semibold">
                                            {mentor.name}
                                        </h3>

                                        <p className="text-sm text-neutral-300">
                                            {mentor.handle}
                                        </p>

                                        <p className="text-sm text-neutral-400 mt-2">
                                            {mentor.desc}
                                        </p>

                                        <button className={`flex items-center gap-2 ${color.text2} text-sm mt-3`}>
                                            View Profile
                                            <ExternalLink size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}
