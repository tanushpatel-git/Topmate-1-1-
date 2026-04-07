import React from "react";
import { DollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const UltimateRevenueDriver = () => {

    const totalRevenueDetails = [
        {
            name: "Rahul S.",
            time: "2m ago",
        },
        {
            name: "Sneha K.",
            time: "15m ago",
        },
        {
            name: "Amit P.",
            time: "1h ago",
        },
    ]
    return (
        <>
            <section>
                <div className="min-h-screen w-full flex flex-col items-center bg-black text-white">

                    <div className="flex flex-col gap-2 w-full justify-center items-center pt-20">
                        <h1 className="text-7xl text-white font-bold">Why cohorts are the</h1>
                        <h1 className="text-7xl font-bold bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent">
                            ultimate revenue driver
                        </h1>
                    </div>

                    <div className="w-full h-100 flex justify-center items-center">
                        <div className="w-[70%] h-100 flex justify-around items-center pt-20">

                            {/* LEFT SIDE */}
                            <motion.div
                                initial={{ x: -150, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: false }}
                                className="w-[50%] h-100 flex items-end justify-end"
                            >
                                <div className="p-5 pt-20 h-full w-full flex flex-col gap-5">
                                    <div className="h-15 w-15 rounded-xl border border-gray-500 flex justify-center items-center">
                                        <DollarSign size={40} className="text-blue-300" />
                                    </div>

                                    <h1 className="text-4xl font-bold text-white">Premium Pricing</h1>

                                    <p className="text-xl font-light text-gray-300">
                                        Cohorts command 3–10× the price of a single webinar. Live sessions,
                                        a fixed group, and a clear start/end date let you charge ₹10,000–₹75,000 per person.
                                    </p>
                                </div>
                            </motion.div>


                            {/* RIGHT SIDE */}
                            <motion.div
                                initial={{ x: 150, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: false }}
                                className="w-[50%] relative h-100 flex justify-center items-center"
                            >
                                <div className="h-90 w-70 border border-gray-800 rounded-2xl">

                                    <div className="flex justify-center flex-col items-center">

                                        <div className="mt-5 flex flex-col justify-start items-start w-50 h-10">
                                            <h1 className="text-gray-500 text-lg font-medium">Total Revenue</h1>
                                            <h1 className="text-white text-4xl font-bold">₹7,50,000</h1>
                                        </div>

                                        <div className="h-50 mt-15 flex flex-col justify-center items-center gap-3 w-60 rounded-2xl">

                                            {totalRevenueDetails.map((i) => (
                                                <div key={i} className="h-15 w-60 bg-gray-800/50 rounded-xl flex justify-around items-center">

                                                    <div className="flex justify-center items-center gap-2">
                                                        <div className="h-8 w-8 rounded-full bg-gray-500"></div>

                                                        <div className="flex flex-col justify-center items-start">
                                                            <h1 className="text-white text-xs">{i.name}</h1>
                                                            <p className="text-gray-400 text-xs">{i.time}</p>
                                                        </div>
                                                    </div>

                                                    <div className="h-10 w-10 flex justify-center items-center">
                                                        <h1 className="text-sm text-emerald-500">₹25,000</h1>
                                                    </div>

                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-20 right-2">
                                    <div className="h-7 w-25 bg-green-600 rounded-full flex justify-center items-center">
                                        <h1 className="p-2 text-black text-sm">High Ticket</h1>
                                    </div>
                                </div>

                            </motion.div>

                        </div>
                    </div>
                </div>

                <div className="h-screen w-full bg-black -mt-20">
                    <div className="min-h-full w-full flex ml-58 items-start">

                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: false }}
                            className="h-90 w-[23%] border bg-[#141414] border-gray-700/50 rounded-3xl"
                        >
                            <div className="m-7 flex flex-col gap-5">
                                <div>
                                    <p className="text-gray-400 text-md font-light">Completion Rate</p>
                                    <h1 className="text-white text-6xl font-bold">88.4%</h1>
                                </div>

                                <div className="flex gap-5 h-40 items-end">
                                    <div className="w-14 h-10 bg-[#202020] rounded-lg"></div>
                                    <div className="w-14 h-25 bg-[#202020] rounded-lg"></div>
                                    <div className="w-14 h-15 bg-[#202020] rounded-lg"></div>
                                    <div className="w-14 h-35 bg-[#202020] rounded-lg"></div>
                                    <div className="w-14 h-32 bg-[#202020] rounded-lg"></div>

                                    <div className="w-14 h-40 bg-[#61A5FA] rounded-lg relative">
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5, ease: "easeOut", repeat: Infinity }}
                                            viewport={{ once: false }}
                                            className="absolute -top-1.5 left-2.5 h-3 w-3 rounded-full bg-white"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <p className="text-gray-400 text-md font-light">
                                        vs 24% (Self-paced)
                                    </p>
                                    <TrendingUp size={20} className="text-green-500" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: false }}
                            className="w-[70%] h-100 flex ml-30"
                        >
                            <div className="w-[50%] h-100 flex gap-30 justify-center">
                                <div className="p-5 h-full w-full flex flex-col gap-5">

                                    <div className="h-15 w-15 rounded-xl border border-gray-500 flex justify-center items-center">
                                        <TrendingUp size={40} className="text-blue-300" />
                                    </div>

                                    <h1 className="text-4xl font-bold text-white">
                                        Higher Completion Rates
                                    </h1>

                                    <p className="text-xl font-light text-gray-300">
                                        The shared start date and peer group create accountability.
                                        Cohort completion rates are 3× higher than self-paced formats.
                                    </p>

                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default UltimateRevenueDriver;