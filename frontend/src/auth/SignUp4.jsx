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
    const [startTime, setStartTime] = useState("09:00");
    const [endTime, setEndTime] = useState("20:00");
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

        if (startTime >= endTime) {
            setError("Start time must be earlier than end time");
            return false;
        }

        setError("");
        return true;
    };

    useEffect(() => {
        dispatch(setAvailability({
            day: activeDays,
            starting: startTime,
            ending: endTime,
        }));
    }, [activeDays, startTime, endTime])

    return (
        <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
            {/* signup navbar */}
            <SignUpNavbar currentStep={4} />


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-1 justify-center items-start mt-10"
            >

                <div className="w-[520px]">

                    {/* Title */}

                    <h1 className="text-3xl font-semibold mb-2">
                        Great! Now let's set your availability
                    </h1>

                    <p className="text-gray-500 text-sm mb-8">
                        Let your audience know when you're available. You can edit this later
                    </p>

                    {/* Card */}

                    <div className="border rounded-xl overflow-hidden">

                        {days.map((day, index) => {

                            const active = activeDays.includes(day);

                            return (

                                <div
                                    key={day}
                                    className={`flex items-center justify-between px-5 py-4 border-b last:border-none
${active ? "bg-white" : "bg-gray-50"}
`}
                                >

                                    {/* Left */}

                                    <div className="flex items-center gap-3">

                                        <button
                                            onClick={() => toggleDay(day)}
                                            className={`w-6 h-6 flex items-center justify-center rounded border
${active ? "bg-green-700 border-green-700 text-white" : "bg-white"}
`}
                                        >
                                            {active && <Check size={16} />}
                                        </button>

                                        <span className="text-sm font-medium">{day.toUpperCase()}</span>

                                    </div>

                                    {/* Right */}

                                    {active ? (

                                        <div className="flex items-center gap-3">

                                            <select value={startTime} onChange={(e) => setStartTime(e.target.value)} className="border rounded-md px-3 py-2 text-sm">
                                                <option>09:00</option>
                                                <option>10:00</option>
                                                <option>11:00</option>
                                            </select>

                                            <span>-</span>

                                            <select value={endTime} onChange={(e) => setEndTime(e.target.value)} className="border rounded-md px-3 py-2 text-sm">
                                                <option>20:00</option>
                                                <option>19:00</option>
                                                <option>18:00</option>
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

                    {/* Apply To All */}

                    <div className="text-right mt-3">
                        <button
                            onClick={() => setActiveDays(days)}
                            className="text-green-700 text-sm font-semibold">
                            Apply To All
                        </button>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm mt-4">{error}</p>
                    )}

                </div>

            </motion.div>

            {/* Bottom Button */}
            <div className="border-t bg-white py-6 flex gap-4 justify-center">
                <motion.button
                    onClick={() => navigate(-1)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-[100px] bg-black text-white py-3 rounded-md font-medium"
                >
                    Back
                </motion.button>
                <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-[400px] bg-black text-white py-3 rounded-md font-medium"
                >
                    Next
                </motion.button>
            </div>
        </div>
    )
}

export default SignUp4