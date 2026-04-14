import { motion } from "framer-motion";

const steps = [1, 2, 3, 4, 5];

export default function ProgressStepper({ currentStep = 1 }) {
    const progress = (currentStep / steps.length) * 68;

    return (
        <div className="w-full flex justify-center mr-50">
            <div className="relative hidden lg:flex items-center w-full max-w-xl">

                {/* Background Line */}
                <div className="absolute left-0 right-0 h-[4px] bg-gray-200 rounded-full" />

                {/* Active Line */}
                <motion.div
                    className="absolute left-0 h-[6px] bg-black rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.6 }}
                />

                {/* Pacman */}
                <motion.img
                    src="https://topmate.io/cdn-cgi/image/width=48,quality=90/_next/static/media/Step-icon.5a80fc09.svg"
                    className="absolute w-6 h-6 z-20 sm:w-8 sm:h-8 md:w-10 md:h-10 -translate-x-1/2"
                    animate={{ left: `${progress}%` }}
                    transition={{ type: "spring", stiffness: 120 }}
                />

                {/* Steps */}
                <div className="flex justify-between w-full">
                    {steps.map((step) => (
                        <div
                            key={step}
                            className={`z-10 rotate-45 border
                w-3 h-3 sm:w-4 sm:h-4
                ${step <= currentStep
                                    ? "bg-red-500 border-red-500"
                                    : "bg-white border-gray-300"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}