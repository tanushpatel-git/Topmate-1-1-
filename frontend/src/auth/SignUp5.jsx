import React, { useEffect } from "react";
import SignUpNavbar from "../components/commonCompo/SignUpNavbar";
import { motion } from "framer-motion";
import whatAppsSignUp from "../assets/whatAppsSignUp.svg";
import { useDispatch, useSelector } from "react-redux";
import { setWhatsAppNumber } from "../redux/signUp/signUpSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";
import { Loader } from "lucide-react";

const SignUp5 = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const whatsAppNumber = useSelector((state) => state.signUp.whatsAppNumber);
    const navigate = useNavigate();
    const { mutate: signUpMutate, isPending, data } = useSignUp();
    const signUpData = useSelector((state) => state.signUp);

    const validateForm = () => {

        if (!whatsAppNumber) {
            setError("WhatsApp number is required");
            return false;
        }

        if (!/^[6-9]\d{9}$/.test(whatsAppNumber)) {
            setError("Enter a valid 10 digit WhatsApp number");
            return false;
        }

        setError("");
        return true;
    };

    const handleLaunch = () => {
        if (validateForm()) {
            console.log("Sign Up Data:", signUpData);
            signUpMutate(signUpData);
        }
    };

    useEffect(() => {
        if (data?.user) {
            navigate("/creator-dashboard");
        }
    }, [data]);


    return (
        <div className="min-h-screen bg-[#f7f7f7] flex flex-col">

            {/* Navbar */}
            <SignUpNavbar currentStep={5} />

            {/* Main */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-1 justify-center px-4 sm:px-6 mt-8 sm:mt-10"
            >
                <div className="w-full max-w-lg">

                    {/* Title */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                        Alright! One last thing
                    </h1>

                    <p className="text-gray-500 text-sm mb-6 sm:mb-8">
                        Add your WhatsApp number to receive booking updates and reminders.
                    </p>

                    {/* Input */}
                    <div className="border rounded-xl px-3 py-3 flex items-center gap-3 mb-5 bg-white">

                        {/* Flag */}
                        <div className="flex items-center gap-2 border-r pr-3">
                            <img
                                src="https://flagcdn.com/w20/in.png"
                                alt="India"
                                className="w-5 h-4 object-cover"
                            />
                            <span className="text-sm text-gray-600">+91</span>
                        </div>

                        {/* Input */}
                        <input
                            type="tel"
                            value={whatsAppNumber}
                            onChange={(e) =>
                                dispatch(setWhatsAppNumber(e.target.value))
                            }
                            placeholder="WhatsApp number"
                            className="flex-1 outline-none text-sm sm:text-base"
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-red-500 text-xs sm:text-sm mb-4">
                            {error}
                        </p>
                    )}

                    {/* Info Card */}
                    <div className="bg-[#E7F1ED] rounded-xl overflow-hidden">
                        <div className="w-full h-[140px] sm:h-[160px] p-3 sm:p-4">
                            <img
                                src={whatAppsSignUp}
                                alt="whatsapp preview"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

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
                    onClick={handleLaunch}
                    disabled={isPending}
                    whileTap={{ scale: 0.96 }}
                    className={`w-full sm:w-[300px] bg-black flex items-center justify-center text-white py-2.5 rounded-md font-medium ${isPending
                        ? "cursor-not-allowed opacity-70"
                        : "hover:opacity-90"
                        }`}
                >
                    {isPending ? (
                        <Loader size={20} className="animate-spin" />
                    ) : (
                        "Launch your page"
                    )}
                </motion.button>

            </div>

        </div>
    );
}

export default SignUp5