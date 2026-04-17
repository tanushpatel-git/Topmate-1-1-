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
            {/* Progress Navbar */}
            <SignUpNavbar currentStep={3} />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-1 justify-center items-start mt-10"
            >
                <div className="w-[520px]">

                    {/* Title */}
                    <h1 className="text-3xl font-semibold mb-2">
                        Let’s add some services
                    </h1>

                    <p className="text-gray-500 text-sm mb-8">
                        We’ll help you get set up based on your expertise
                    </p>

                    {/* Section Title */}
                    <h2 className="text-lg font-medium mb-5">
                        Popular <span className="font-semibold">1:1 services</span> in your expertise
                    </h2>

                    {/* Services Grid */}
                    <div className="grid grid-cols-2 gap-4">
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
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => toggleService(service)}
                                    className={`border rounded-lg py-4 text-sm font-medium transition
                ${active
                                            ? "bg-black/10 text-black border-black"
                                            : "bg-white hover:bg-gray-100"
                                        }`}
                                >
                                    {service}
                                </motion.button>
                            );
                        })}
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

export default SignUp3