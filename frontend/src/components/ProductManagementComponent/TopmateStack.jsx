import { motion } from "framer-motion";

export default function TopmateStack({ stacks }) {
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
                    if (i % 2 == 0) {
                        return (
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: false }}
                                className="flex items-center gap-8"
                            >
                                <FeatureIcon icon={<ele.icon size={38} />} />

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

                                <FeatureIcon icon={<ele.icon size={38} />} />
                            </motion.div>
                        )
                    }
                })}

            </div>
        </section>
    );
}

function FeatureIcon({ icon }) {
    return (
        <div className="relative flex items-center justify-center">

            {/* Glow Rings */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute w-32 h-32 rounded-full border border-blue-500/20"
            />

            <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute w-24 h-24 rounded-full border border-blue-500/20"
            />

            {/* Icon Circle */}
            <div className="relative w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center border border-blue-500/30 text-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                {icon}
            </div>

        </div>
    );
}