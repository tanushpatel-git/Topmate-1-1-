import React from "react";
import { motion } from "framer-motion";

const TopOfUseCases = ({
    theme = "light",
    badge,
    title,
    title2,
    title3,
    description,
    button1,
    button2,
    themeSet = "blue",
}) => {

    const isDark = theme === "dark";

    // Tailwind-safe theme colors
    const themeColors = {
        blue: {
            bg: "bg-blue-500",
            text: "text-blue-500",
        },
        red: {
            bg: "bg-red-500",
            text: "text-red-500",
        },
        green: {
            bg: "bg-green-500",
            text: "text-green-500",
        },
        purple: {
            bg: "bg-purple-500",
            text: "text-purple-500",
        },
    };

    const colors = themeColors[themeSet] || themeColors.blue;

    // Parent animation
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    // Item animation
    const item = {
        hidden: { opacity: 0, y: 60 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="min-h-screen w-full bg-black">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="h-full w-full pt-30 flex flex-col text-center items-center justify-center gap-10"
            >

                {/* Badge */}
                <motion.div variants={item} className="flex items-center justify-center">
                    <div className="flex items-center min-w-fit justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                        <span className={`h-2 w-2 ${colors.bg} rounded-full`} />
                        <span className="text-white/80 text-sm font-medium uppercase">
                            {badge}
                        </span>
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.div
                    variants={item}
                    className="flex items-center justify-center flex-col gap-2 leading-20"
                >
                    <motion.h1
                        variants={item}
                        className="text-white text-[80px] font-bold"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-white text-[80px] font-bold"
                    >
                        {title2}
                    </motion.p>

                    <motion.p
                        variants={item}
                        className={`${colors.text} text-[80px] font-serif font-light italic`}
                    >
                        {title3}
                    </motion.p>
                </motion.div>

                {/* Description */}
                <motion.div variants={item} className="flex items-center w-160 justify-center">
                    <p className="text-white/50 text-[28px] font-light leading-10">
                        {description}
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div variants={item} className="flex items-center justify-center gap-5">

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex px-4 py-2 items-center justify-center cursor-pointer ${colors.bg} backdrop-blur-sm rounded-xl`}
                    >
                        <span className="text-white text-lg font-medium p-2">
                            {button1}
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex px-4 py-2 items-center justify-center cursor-pointer bg-white/10 hover:border hover:border-white/20 backdrop-blur-sm rounded-xl"
                    >
                        <span className="text-white text-lg font-medium p-2">
                            {button2}
                        </span>
                    </motion.button>

                </motion.div>

                {/* Footer */}
                <motion.div
                    variants={item}
                    className={`flex items-center justify-center gap-3 text-sm ${isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                >
                    <div className="flex -space-x-2">

                        <img
                            className={`w-8 h-8 rounded-full object-cover border ${isDark ? "border-black" : "border-white"
                                }`}
                            src="https://topmate.io/images/homepage/referral-experts/vani-gupta.jpg"
                        />

                        <img
                            className={`w-8 h-8 rounded-full object-cover border ${isDark ? "border-black" : "border-white"
                                }`}
                            src="https://topmate.io/images/homepage/referral-experts/vatsal-nahata.jpg"
                        />

                        <img
                            className={`w-8 h-8 rounded-full object-cover border ${isDark ? "border-black" : "border-white"
                                }`}
                            src="https://topmate.io/images/homepage/referral-experts/aditi-paul.jpg"
                        />

                    </div>

                    <span>Trusted by 300K+ creators · 4.9 ★ rating</span>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default TopOfUseCases;