import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SignUpNavbar from "../components/commonCompo/SignUpNavbar";
import { useDispatch, useSelector } from "react-redux";
import { setService } from "../redux/signUp/signUpSlice";
import { useNavigate } from "react-router-dom";

const SignUp3 = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const { service } = useSelector((state) => state.signUp);
    const [selectedServices, setSelectedServices] = useState(service);
    const navigate = useNavigate();

    const toggleService = (service) => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((item) => item !== service)
                : [...prev, service]
        );
    };

    const validateForm = () => {
        if (selectedServices.length === 0) {
            setError("Please select at least one service");
            return false;
        }

        setError("");
        return true;
    };

    const handleNext = () => {
        if (validateForm()) {
            navigate("/signup4");
        }
    };

    useEffect(() => {
        dispatch(setService(selectedServices));
    }, [selectedServices])

    return (
        <div className="min-h-screen bg-[#f7f7f7] flex flex-col">

            {/* Navbar */}
            <SignUpNavbar currentStep={3} />

            {/* Main */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-1 justify-center px-4 sm:px-6 mt-8 sm:mt-10"
            >
                <div className="w-full max-w-lg">

                    {/* Title */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                        Let’s add some services
                    </h1>

                    <p className="text-gray-500 text-sm mb-6 sm:mb-8">
                        We’ll help you get set up based on your expertise
                    </p>

                    {/* Section */}
                    <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-5">
                        Popular <span className="font-semibold">1:1 services</span> in your expertise
                    </h2>

                    {/* Services */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {[
                            "Resume review",
                            "Career guidance",
                            "1:1 Mentorship",
                            "Quick chat",
                            "Discovery Call",
                            "Interview prep & tips",
                            "Mock interview",
                        ].map((service) => {
                            const active = selectedServices.includes(service);

                            return (
                                <motion.button
                                    key={service}
                                    whileTap={{ scale: 0.96 }}
                                    onClick={() => toggleService(service)}
                                    className={`border rounded-lg py-3 sm:py-4 px-3 text-sm sm:text-base font-medium transition text-left
                ${active
                                            ? "bg-black text-white border-black shadow-sm"
                                            : "bg-white hover:bg-gray-100"}`}
                                >
                                    {service}
                                </motion.button>
                            );
                        })}
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

export default SignUp3