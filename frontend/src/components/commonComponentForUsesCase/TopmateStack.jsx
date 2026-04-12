import { motion } from "framer-motion";

export default function TopmateStack({ stacks, colorTheme="blue" }) {

    const colors = {
        blue: {
            bg: "bg-blue-500",
            text: "text-white",
            text2: "text-blue-500",
            border: "border-blue-500",
        },
        purple: {
            bg: "bg-purple-300",
            text: "text-white",
            text2: "text-purple-500",
            border: "border-purple-500",
        },
        pink: {
            bg: "bg-pink-500",
            text: "text-white",
            text2: "text-pink-500",
            border: "border-pink-500",
        },
        green: {
            bg: "bg-green-500",
            text: "text-white",
            text2: "text-green-500",
            border: "border-green-500",
        },
        orange: {
            bg: "bg-orange-500",
            text: "text-white",
            text2: "text-orange-500",
            border: "border-orange-500",
        },
        yellow: {
            bg: "bg-yellow-500",
            text: "text-white",
            text2: "text-yellow-500",
            border: "border-yellow-500",
        },
        red: {
            bg: "bg-red-500",
            text: "text-white",
            text2: "text-red-500",
            border: "border-red-500",
        },
        cyan: {
            bg: "bg-cyan-500",
            text: "text-white",
            text2: "text-cyan-500",
            border: "border-cyan-500",
        },
        lime: {
            bg: "bg-lime-500",
            text: "text-white",
            text2: "text-lime-500",
            border: "border-lime-500",
        },
        indigo: {
            bg: "bg-indigo-500",
            text: "text-white",
            text2: "text-indigo-500",
            border: "border-indigo-500",
        },
        violet: {
            bg: "bg-violet-500",
            text: "text-white",
            text2: "text-violet-500",
            border: "border-violet-500",
        },
        fuchsia: {
            bg: "bg-fuchsia-500",
            text: "text-white",
            text2: "text-fuchsia-500",
            border: "border-fuchsia-500",
        },
        rose: {
            bg: "bg-rose-500",
            text: "text-white",
            text2: "text-rose-500",
            border: "border-rose-500",
        },
        emerald: {
            bg: "bg-emerald-500",
            text: "text-white",
            text2: "text-emerald-500",
            border: "border-emerald-500",
        },
        teal: {
            bg: "bg-teal-500",
            text: "text-white",
            text2: "text-teal-500",
            border: "border-teal-500",
        },
        sky: {
            bg: "bg-sky-500",
            text: "text-white",
            text2: "text-sky-500",
            border: "border-sky-500",
        },
        slate: {
            bg: "bg-slate-500",
            text: "text-white",
            text2: "text-slate-500",
            border: "border-slate-500",
        },
        stone: {
            bg: "bg-stone-500",
            text: "text-white",
            text2: "text-stone-500",
            border: "border-stone-500",
        },
        neutral: {
            bg: "bg-neutral-500",
            text: "text-white",
            text2: "text-neutral-500",
            border: "border-neutral-500",
        },
        zinc: {
            bg: "bg-zinc-500",
            text: "text-white",
            text2: "text-zinc-500",
            border: "border-zinc-500",
        },
        gray: {
            bg: "bg-gray-500",
            text: "text-white",
            text2: "text-gray-500",
            border: "border-gray-500",
        },
        black: {
            bg: "bg-black",
            text: "text-white",
            text2: "text-black",
            border: "border-black",
        },
        white: {
            bg: "bg-white",
            text: "text-black",
            text2: "text-white",
            border: "border-white",
        },
    }

    const color = colors[colorTheme];
    return (
        <section className="relative bg-black text-white py-32 overflow-hidden">

            {/* Heading */}
            <div className="max-w-4xl mx-auto text-center mb-32">
                <h2 className="text-5xl font-bold mb-4">
                    Your Topmate Stack
                </h2>

                <p className="text-neutral-400 text-lg">
                    Every tool you need to run your Product Management business
                </p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-32">

                {stacks.map((ele, i) => {
                    if (i % 2 === 0) {
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: false }}
                                className="flex items-center gap-8"
                            >
                                <FeatureIcon icon={<ele.icon size={38} />} color={color} />

                                <div>
                                    <h3 className="text-5xl font-semibold mb-3">
                                        {ele.title}
                                    </h3>

                                    <p className="text-neutral-400 text-xl leading-relaxed">
                                        {ele.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    } else {
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: false }}
                                className="flex items-center gap-8 md:justify-end text-right"
                            >
                                <div>
                                    <h3 className="text-5xl font-semibold mb-3">
                                        {ele.title}
                                    </h3>

                                    <p className="text-neutral-400 text-xl leading-relaxed">
                                        {ele.description}
                                    </p>
                                </div>

                                <FeatureIcon icon={<ele.icon size={38} />} color={color} />
                            </motion.div>
                        )
                    }
                })}

            </div>
        </section>
    );
}

function FeatureIcon({ icon, color }) {
    return (
        <div className="relative flex items-center justify-center">

            {/* Glow Rings */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className={`absolute w-32 h-32 rounded-full border ${color.border} opacity-20`}
            />

            <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className={`absolute w-24 h-24 rounded-full border ${color.border} opacity-20`}
            />

            {/* Icon Circle */}
            <div className={`relative w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center border ${color.border} opacity-30 ${color.text2} shadow-[0_0_40px_rgba(59,130,246,0.3)]`}>
                {icon}
            </div>

        </div>
    );
}