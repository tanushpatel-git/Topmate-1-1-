import React from 'react'
import { motion } from 'framer-motion'


const TopOfUseCases = ({ theam = "light", badge, title, title2, title3, description, button1, button2, theamSet = "blue" }) => {

    const isDark = theam === "dark";

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className='min-h-screen w-full bg-black '>
            <div className='h-full w-full pt-30 flex flex-col text-center items-center justify-center gap-10'>
                {/* Badge Code */}
                <div className='flex items-center justify-center'>
                    <div className='flex items-center min-w-fit justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2'>
                        <span className={`h-2 w-2 bg-${theamSet}-500 rounded-full`} />
                        <span className='text-white/80 text-sm font-medium uppercase'>{badge}</span>
                    </div>
                </div>

                {/* Heading Code */}
                <div className='flex items-center justify-center flex-col gap-2 leading-20'>
                    <h1 className='text-white text-[80px] font-bold'>{title}</h1>
                    <p className='text-white text-[80px] font-bold'>{title2}</p>
                    <p className={`text-${theamSet}-500 text-[100px] font-light italic`}>{title3}</p>
                </div>

                {/* Description Code */}
                <div className='flex items-center w-160 justify-center'>
                    <p className='text-white/50 text-[28px] font-light leading-10'>{description}</p>
                </div>

                {/* Button Code */}
                <div className='flex items-center justify-center gap-5'>
                    <button className={`flex px-4 py-2 items-center justify-center cursor-pointer bg-${theamSet}-500 backdrop-blur-sm rounded-xl`}>
                        <span className='text-white text-lg font-medium p-2'>{button1}</span>
                    </button>
                    <button className='flex px-4 py-2 items-center justify-center cursor-pointer bg-white/10 hover:border hover:border-white/20 backdrop-blur-sm rounded-xl'>
                        <span className='text-white text-lg font-medium p-2'>{button2}</span>
                    </button>
                </div>

                <motion.div
                    variants={item}
                    className={` flex items-center justify-center gap-3 text-sm ${isDark ? "text-gray-400" : "text-gray-600"
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
            </div>
        </div>
    );
};

export default TopOfUseCases;