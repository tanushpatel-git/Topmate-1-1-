import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

const mentors = [
    {
        name: "Anand Narayandas",
        handle: "@anand_narayandas",
        img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
        desc: "Product Management, Career & Leadership Coach · Ex-Amazon, BCG,...",
        badge: "Product & PM Careers #1"
    },
    {
        name: "Sumit Kumar Singh",
        handle: "@theaipmcoach",
        img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
        desc: "Harvard Alum, Ex-Microsoft AI PM leader · Mentored 1500+ · Helping Founders,...",
        badge: "AI/ML #6"
    },
    {
        name: "Malthi Satish",
        handle: "@malthi_ss",
        img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        desc: "Product Coach and Trainer · Chief Product Officer at HerKey",
        badge: "AI/ML #8"
    },
    {
        name: "Vijay Chandola",
        handle: "@vijaychandola",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        desc: "Mentored over 500 people. Product Management leader.",
        badge: "Product & PM Careers #3"
    },
];

export default function PMMentorSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const initialRotations = [-20, -10, 0, 10, 20];

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
                        Top Product Management Mentors on Topmate
                    </h2>

                    <p className="text-neutral-400 mt-3">
                        Award-winning PMs already helping thousands
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
                                    <div className="absolute flex gap-1 top-5 right-5 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
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

                                        <button className="flex items-center gap-2 text-blue-400 text-sm mt-3">
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
