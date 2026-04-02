import { motion } from "framer-motion";
import { Mic, Video } from "lucide-react";

export default function VideoSyncInWebinars() {

    const bars = [1, 2, 3, 4, 5, 6]

    return (

        <div className="bg-[#F7F7F2] min-h-screen flex items-center justify-center p-4 -mt-80">

            <div className="w-full max-w-[900px] h-[220px] sm:h-[320px] lg:h-[450px] bg-black rounded-[30px] sm:rounded-[40px] relative overflow-hidden text-white shadow-2xl">

                {/* LIVE STATUS */}

                <div className="absolute top-3 sm:top-6 left-3 sm:left-6 bg-zinc-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 sm:gap-3">

                    <div className="w-7 h-7 sm:w-10 sm:h-10 bg-blue-400 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                        AM
                    </div>

                    <p className="text-xs sm:text-base">Ananya is Live</p>

                </div>

                <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-red-500 px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-bold text-xs sm:text-sm">
                    ● LIVE
                </div>

                {/* ATTENDEES */}

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute left-3 sm:left-6 bottom-24 sm:bottom-32 bg-zinc-900 px-3 sm:px-6 py-2 sm:py-4 rounded-full text-xs sm:text-lg"
                >
                    👥 248 Attendees
                </motion.div>

                {/* FIRE */}

                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute left-[35%] top-[35%] text-lg sm:text-2xl"
                >
                    🔥
                </motion.div>

                {/* CLAP */}

                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute right-[30%] top-[45%] text-lg sm:text-2xl"
                >
                    👏
                </motion.div>

                {/* RHYTHM */}

                <div className="absolute inset-0 flex items-center justify-center">

                    <svg
                        className="w-[80px] sm:w-[120px] h-[50px] sm:h-[80px]"
                        viewBox="0 0 120 80"
                    >

                        {bars.map((bar, index) => (
                            <motion.rect
                                key={index}
                                x={index * 18}
                                y="20"
                                width="8"
                                height="40"
                                rx="4"
                                fill="white"

                                animate={{ scaleY: [0.5, 1.5, 0.6] }}

                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: index * 0.15
                                }}

                                style={{ originY: 0.5 }}
                            />
                        ))}

                    </svg>

                </div>

                {/* CONTROLS */}

                <div className="absolute bottom-3 sm:bottom-8 left-3 sm:left-8 flex items-center gap-2 sm:gap-4">

                    <div className="w-9 h-9 sm:w-14 sm:h-14 bg-zinc-900 rounded-xl flex items-center justify-center">
                        <Mic size={18} className="sm:w-6 sm:h-6" />
                    </div>

                    <div className="w-9 h-9 sm:w-14 sm:h-14 bg-zinc-900 rounded-xl flex items-center justify-center">
                        <Video size={18} className="sm:w-6 sm:h-6" />
                    </div>

                    <div className="bg-red-900 text-red-400 px-3 sm:px-6 py-1.5 sm:py-3 rounded-lg font-semibold flex items-center gap-2 text-xs sm:text-base">
                        ● Recording
                    </div>

                </div>

                <button className="absolute bottom-3 sm:bottom-8 right-3 sm:right-8 bg-white text-black px-4 sm:px-8 py-1.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-base">
                    End Session
                </button>

            </div>

        </div>

    )

}