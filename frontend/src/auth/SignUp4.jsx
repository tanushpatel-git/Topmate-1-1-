import React, { useState } from "react";
import SignUpNavbar from "../components/commonCompo/SignUpNavbar";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useDispatch } from "react-redux";
import { setAvailability } from "../redux/signUp/signUpSlice";
import { useNavigate } from "react-router-dom";

const SignUp4 = () => {
    const days = [
        "saturday",
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
    ];

    const [activeDays, setActiveDays] = useState(["sunday", "saturday"]);
    const [error, setError] = useState("");

    const [availability, setAvailabilityState] = useState({
        saturday: { start: "09:00", end: "20:00" },
        sunday: { start: "09:00", end: "20:00" },
        monday: { start: "09:00", end: "20:00" },
        tuesday: { start: "09:00", end: "20:00" },
        wednesday: { start: "09:00", end: "20:00" },
        thursday: { start: "09:00", end: "20:00" },
        friday: { start: "09:00", end: "20:00" },
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleDay = (day) => {
        setActiveDays((prev) =>
            prev.includes(day)
                ? prev.filter((d) => d !== day)
                : [...prev, day]
        );
    };

    // VALIDATION FIXED
    const validateForm = () => {
        if (activeDays.length === 0) {
            setError("Please select at least one available day");
            return false;
        }

        for (let day of activeDays) {
            if (availability[day].start >= availability[day].end) {
                setError(`Invalid time on ${day}`);
                return false;
            }
        }

        setError("");
        return true;
    };

    // TRANSFORM DATA FOR SCHEMA
    const formatAvailability = () => {
        return activeDays.map((day) => ({
            day: day.charAt(0).toUpperCase() + day.slice(1),
            slots: [
                {
                    start: availability[day].start,
                    end: availability[day].end,
                },
            ],
        }));
    };

    const handleNext = () => {
        if (validateForm()) {
            const formattedAvailability = formatAvailability();

            dispatch(setAvailability(formattedAvailability));
            navigate("/signup5");
        }
    };

    // reusable time options
    const timeOptions = Array.from({ length: 24 }, (_, i) =>
        `${String(i).padStart(2, "0")}:00`
    );

    return (
        <div className="min-h-screen bg-[#f7f7f7] flex flex-col">

            <SignUpNavbar currentStep={4} />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-1 justify-center px-4 sm:px-6 mt-8 sm:mt-10"
            >
                <div className="w-full max-w-lg">

                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                        Great! Now let's set your availability
                    </h1>

                    <p className="text-gray-500 text-sm mb-6 sm:mb-8">
                        Let your audience know when you're available.
                    </p>

                    <div className="border rounded-xl overflow-hidden divide-y">

                        {days.map((day) => {
                            const active = activeDays.includes(day);

                            return (
                                <div
                                    key={day}
                                    className={`flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-4 ${active ? "bg-white" : "bg-gray-50"
                                        }`}
                                >
                                    {/* LEFT */}
                                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                                        <button
                                            onClick={() => toggleDay(day)}
                                            className={`w-6 h-6 flex items-center justify-center rounded border ${active
                                                ? "bg-green-600 border-green-600 text-white"
                                                : "bg-white"
                                                }`}
                                        >
                                            {active && <Check size={14} />}
                                        </button>

                                        <span className="capitalize font-medium">
                                            {day}
                                        </span>
                                    </div>

                                    {/* RIGHT */}
                                    {active ? (
                                        <div className="flex gap-2">
                                            <select
                                                value={availability[day].start}
                                                onChange={(e) =>
                                                    setAvailabilityState((prev) => ({
                                                        ...prev,
                                                        [day]: {
                                                            ...prev[day],
                                                            start: e.target.value,
                                                        },
                                                    }))
                                                }
                                                className="border rounded px-2 py-1"
                                            >
                                                {timeOptions.map((time) => (
                                                    <option key={time}>{time}</option>
                                                ))}
                                            </select>

                                            <span>-</span>

                                            <select
                                                value={availability[day].end}
                                                onChange={(e) =>
                                                    setAvailabilityState((prev) => ({
                                                        ...prev,
                                                        [day]: {
                                                            ...prev[day],
                                                            end: e.target.value,
                                                        },
                                                    }))
                                                }
                                                className="border rounded px-2 py-1"
                                            >
                                                {timeOptions.map((time) => (
                                                    <option key={time}>{time}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : (
                                        <span className="text-gray-400 text-sm">
                                            Unavailable
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-end mt-3">
                        <button
                            onClick={() => setActiveDays(days)}
                            className="text-green-600 text-sm font-semibold"
                        >
                            Apply to all
                        </button>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm mt-4">{error}</p>
                    )}
                </div>
            </motion.div>

            <div className="border-t bg-white py-4 px-4 flex gap-3 justify-center">
                <motion.button
                    onClick={() => navigate(-1)}
                    whileTap={{ scale: 0.96 }}
                    className="bg-gray-200 px-6 py-2 rounded"
                >
                    Back
                </motion.button>

                <motion.button
                    onClick={handleNext}
                    whileTap={{ scale: 0.96 }}
                    className="bg-black text-white px-10 py-2 rounded"
                >
                    Next
                </motion.button>
            </div>
        </div>
    );
};

export default SignUp4;