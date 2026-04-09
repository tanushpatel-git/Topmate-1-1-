import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, DollarSign, MessageSquare, Check } from "lucide-react";
import { useState, useEffect } from "react";

export default function TopOccurSectionOfPriorityDm() {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % 3)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    const variants = {
        initial: { opacity: 0, y: 40, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -40, scale: 0.95 },
    }

    return (
        <div className="min-h-screen bg-[#f3f2ef] flex items-center justify-center px-6">
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm tracking-wide">
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                        ASYNC CONSULTING
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Get Paid for Your Direct Messages
                    </h1>

                    <p className="text-gray-600 text-lg max-w-xl">
                        Offer async services. Collect payments upfront. Deliver on your
                        own timeline. No scheduling required.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium"
                        >
                            Enable Priority DM
                            <ArrowRight size={18} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-xl font-medium bg-white"
                        >
                            <Play size={18} />
                            How It Works
                        </motion.button>
                    </div>

                    <div className="flex items-center gap-4 text-gray-500">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden" >
                                <img className="w-full h-full object-cover" src="https://topmate.io/images/homepage/referral-experts/vani-gupta.jpg" alt="loading..." />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden" >
                                <img className="w-full h-full object-cover" src="https://topmate.io/images/homepage/referral-experts/vatsal-nahata.jpg" alt="loading..." />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden" >
                                <img className="w-full h-full object-cover" src="https://topmate.io/images/homepage/referral-experts/aditi-paul.jpg" alt="loading..." />
                            </div>
                        </div>

                        <p className="text-sm">
                            <span className="font-semibold text-black">300K+</span> creators
                            · Async by design · Keep 90%
                        </p>
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative min-h-130 w-140"
                >
                    <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-col">
                        <div className="w-130 h-4 bg-gray-100 p-6 flex items-center justify-evenly rounded-t-2xl border-b border-gray-600">
                            <div className="flex justify-start w-full px-2 gap-1">
                                <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                                <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                                <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                            </div>
                            <div className="w-600 h-8 bg-white flex justify-start items-center">
                                <h1 className="text-sm px-4 text-gray-500">topmate.io/priority-dm</h1>
                            </div>
                        </div>
                        <div className="w-130 h-100 p-6 flex justify-center items-center">

                            <AnimatePresence mode="wait">

                                {index === 0 && (
                                    <motion.div
                                        key="card1"
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.6 }}
                                        className="w-90 h-60 bg-gray-200 rounded-2xl"
                                    >
                                        <div className="p-5 pt-10 flex flex-col gap-5">
                                            <div className="w-10 h-10 rounded-full bg-gray-500" />

                                            <div>
                                                <h1 className="font-semibold text-black">
                                                    Resume File Uploaded
                                                </h1>
                                                <p className="text-gray-500">$200 (claimed)</p>
                                            </div>

                                            <div className="w-80 h-10 bg-black flex justify-center items-center rounded-xl">
                                                <h1 className="text-white">Send Message</h1>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}


                                {index === 1 && (
                                    <motion.div
                                        key="card2"
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.6 }}
                                        className="w-90 h-60 flex flex-col justify-center items-center bg-white rounded-2xl"
                                    >
                                        <div className="flex flex-col gap-5 items-center text-center">
                                            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-emerald-300/20">
                                                <Check size={40} className="text-emerald-400" />
                                            </div>

                                            <h1 className="text-2xl font-bold">
                                                Response Delivery
                                            </h1>

                                            <div className="w-40 h-10 bg-black flex justify-center items-center rounded-4xl">
                                                <h1 className="text-white">$ +1,350</h1>
                                            </div>

                                            <h1 className="text-gray-500 font-semibold">
                                                Earning Credited
                                            </h1>
                                        </div>
                                    </motion.div>
                                )}


                                {index === 2 && (
                                    <motion.div
                                        key="card3"
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.6 }}
                                        className="w-90 h-60 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="font-semibold text-gray-900">
                                                        Tanush Patel
                                                    </h3>
                                                    <p className="text-sm text-gray-500">
                                                        @tanushpatel
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="text-sm text-gray-400">
                                                10:30 AM
                                            </div>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed">
                                            Hey Tanush, I'm facing an issue with my resume. Can you
                                            please review it and suggest improvements?
                                        </p>

                                        <div className="flex justify-end pt-4 border-t border-gray-100">
                                            <div className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                                                Reply
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                            </AnimatePresence>

                        </div>
                    </div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute -left-6 top-1/2 bg-white shadow-lg rounded-xl p-3"
                    >
                        <DollarSign className="text-blue-500" />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="absolute -right-6 top-6 bg-white shadow-lg rounded-xl p-3"
                    >
                        <MessageSquare className="text-gray-700" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}