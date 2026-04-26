import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Monitor,
    Smartphone,
    User,
    Plus,
    PenLine,
    Image,
    List,
    Trophy,
} from "lucide-react";

const ProfileNavbar = ({ onClose, selectedColor }) => {
    const [view, setView] = useState("desktop");

    return (
        <div className="w-full flex items-center justify-between px-6 py-3 bg-white shadow-sm border-b">

            {/* Left Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
                <button
                    onClick={() => setView("desktop")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${view === "desktop"
                        ? "bg-gray-800 text-white"
                        : "text-gray-600"
                        }`}
                >
                    <Monitor size={16} />
                    Desktop
                </button>

                <button
                    onClick={() => setView("mobile")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${view === "mobile"
                        ? "bg-gray-800 text-white"
                        : "text-gray-600"
                        }`}
                >
                    <Smartphone size={16} />
                    Mobile
                </button>
            </div>

            {/* Center Icons */}
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-2xl shadow-inner">

                {/* Main Icon (yellow box) */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-xl `}
                    style={{ backgroundColor: selectedColor }}
                    onClick={onClose}
                >
                    <div className="w-5 h-5 rounded-md"
                        style={{ backgroundColor: selectedColor }} />
                </motion.button>

                {/* Other Icons */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200"
                >
                    <User size={18} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200"
                >
                    <Plus size={18} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200"
                >
                    <PenLine size={18} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200"
                >
                    <Image size={18} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200"
                >
                    <List size={18} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200"
                >
                    <Trophy size={18} />
                </motion.button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-200 rounded-xl font-medium"
                >
                    Open Live Page
                </motion.button>
            </div>
        </div>
    );
};

export default ProfileNavbar;