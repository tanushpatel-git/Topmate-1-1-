import React, { useEffect } from "react";
import SignUpNavbar from "../components/commonCompo/SignUpNavbar";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
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
                ? prev.filter(d => d !== day)
                : [...prev, day]
        );
    };

    const handleNext = () => {
        if (validateForm()) {
            navigate("/signup5");
        }
    };

    const validateForm = () => {

        if (activeDays.length === 0) {
            setError("Please select at least one available day");
            return false;
        }

        activeDays.forEach((day) => {
            if (availability[day].start >= availability[day].end) {
                setError("Start time must be earlier than end time");
                return false;
            }
        });

        setError("");
        return true;
    };

    useEffect(() => {
        dispatch(setAvailability({
            day: activeDays,
            starting: availability.monday.start,
            ending: availability.monday.end,
        }));
    }, [activeDays])

    return (
        <div className="min-h-screen bg-[#f7f7f7] flex flex-col">

            {/* Navbar */}
            <SignUpNavbar currentStep={4} />

            {/* Main */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-1 justify-center px-4 sm:px-6 mt-8 sm:mt-10"
            >
                <div className="w-full max-w-lg">

                    {/* Title */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                        Great! Now let's set your availability
                    </h1>

                    <p className="text-gray-500 text-sm mb-6 sm:mb-8">
                        Let your audience know when you're available. You can edit this later
                    </p>

                    {/* Card */}
                    <div className="border rounded-xl overflow-hidden divide-y">

                        {days.map((day) => {
                            const active = activeDays.includes(day);

                            return (
                                <div
                                    key={day}
                                    className={`flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-5 py-4 transition
                ${active ? "bg-white" : "bg-gray-50"}`}
                                >

                                    {/* LEFT */}
                                    <div className="flex items-center gap-3 mb-2 sm:mb-0">

                                        <button
                                            onClick={() => toggleDay(day)}
                                            className={`w-6 h-6 flex items-center justify-center rounded border
                    ${active
                                                    ? "bg-green-600 border-green-600 text-white"
                                                    : "bg-white"
                                                }`}
                                        >
                                            {active && <Check size={14} />}
                                        </button>

                                        <span className="text-sm sm:text-base font-medium capitalize">
                                            {day}
                                        </span>
                                    </div>

                                    {/* RIGHT */}
                                    {active ? (
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">

                                            <select
                                                value={availability[day].start}
                                                onChange={(e) => setAvailabilityState(prev => ({ ...prev, [day]: { ...prev[day], start: e.target.value } }))}
                                                className="border rounded-md px-3 py-2 text-sm w-full sm:w-auto"
                                            >
                                                <option>00:00</option>
                                                <option>01:00</option>
                                                <option>02:00</option>
                                                <option>03:00</option>
                                                <option>04:00</option>
                                                <option>05:00</option>
                                                <option>06:00</option>
                                                <option>07:00</option>
                                                <option>08:00</option>
                                                <option>09:00</option>
                                                <option>10:00</option>
                                                <option>11:00</option>
                                                <option>12:00</option>
                                                <option>13:00</option>
                                                <option>14:00</option>
                                                <option>15:00</option>
                                                <option>16:00</option>
                                                <option>17:00</option>
                                                <option>18:00</option>
                                                <option>19:00</option>
                                                <option>20:00</option>
                                                <option>21:00</option>
                                                <option>22:00</option>
                                                <option>23:00</option>
                                            </select>

                                            <span className="hidden sm:block">-</span>

                                            <select
                                                value={availability[day].end}
                                                onChange={(e) => setAvailabilityState(prev => ({ ...prev, [day]: { ...prev[day], end: e.target.value } }))}
                                                className="border rounded-md px-3 py-2 text-sm w-full sm:w-auto"
                                            >
                                                <option>01:00</option>
                                                <option>02:00</option>
                                                <option>03:00</option>
                                                <option>04:00</option>
                                                <option>05:00</option>
                                                <option>06:00</option>
                                                <option>07:00</option>
                                                <option>08:00</option>
                                                <option>09:00</option>
                                                <option>10:00</option>
                                                <option>11:00</option>
                                                <option>12:00</option>
                                                <option>13:00</option>
                                                <option>14:00</option>
                                                <option>15:00</option>
                                                <option>16:00</option>
                                                <option>17:00</option>
                                                <option>18:00</option>
                                                <option>19:00</option>
                                                <option>20:00</option>
                                                <option>21:00</option>
                                                <option>22:00</option>
                                                <option>23:00</option>
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

                    {/* Apply to all */}
                    <div className="flex justify-end mt-3">
                        <button
                            onClick={() => setActiveDays(days)}
                            className="text-green-700 text-sm font-semibold hover:underline"
                        >
                            Apply to all
                        </button>
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-red-500 text-xs sm:text-sm mt-4">
                            {error}
                        </p>
                    )}

                </div>
            </motion.div>

            {/* Bottom CTA */}
            <div className="border-t bg-white py-4 px-4 sm:px-6 flex flex-col sm:flex-row gap-3 justify-center items-center">

                <motion.button
                    onClick={() => navigate(-1)}
                    whileTap={{ scale: 0.96 }}
                    className="w-full sm:w-[120px] bg-gray-200 text-black py-2.5 rounded-md font-medium"
                >
                    Back
                </motion.button>

                <motion.button
                    onClick={handleNext}
                    whileTap={{ scale: 0.96 }}
                    className="w-full sm:w-[300px] bg-black text-white py-2.5 rounded-md font-medium"
                >
                    Next
                </motion.button>

            </div>

        </div>
    );
}

export default SignUp4