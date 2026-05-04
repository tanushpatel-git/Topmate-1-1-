import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const Badge = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 flex items-center justify-center"
                >
                    <div
                        className="bg-white rounded-3xl p-6 w-full max-w-3xl shadow-sm"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-semibold text-black">Badges</h1>

                            <div className="flex items-center gap-6">
                                <button className="text-gray-700 underline hover:text-black">
                                    Edit
                                </button>

                                <button onClick={() => onClose()} className="bg-gray-200 p-3 rounded-xl hover:bg-gray-300 transition">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        <hr className="border-gray-300 mb-6" />

                        {/* Badges */}
                        <div className="flex gap-6">
                            {/* Booking Badge */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-32 rounded-2xl overflow-hidden shadow-sm bg-white"
                            >
                                <div className="bg-gray-300 h-20 flex items-center justify-center relative">
                                    <span className="text-2xl font-semibold">1</span>

                                    {/* sparkle */}
                                    <span className="absolute top-2 left-2 text-white text-sm">✨</span>
                                </div>

                                <div className="p-3 text-center text-sm font-medium">
                                    Bookings
                                </div>
                            </motion.div>

                            {/* Community Badge */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-40 h-40 rounded-2xl flex flex-col items-center justify-center text-white shadow-md"
                                style={{
                                    background:
                                        "linear-gradient(145deg, #0f2a3f, #0a1d2c)",
                                }}
                            >
                                <motion.img
                                    src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                                    alt="badge"
                                    className="w-12 mb-2"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                />

                                <p className="text-sm leading-tight text-center">
                                    Community <br /> Care
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Badge;