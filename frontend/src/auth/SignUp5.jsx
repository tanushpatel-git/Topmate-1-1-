import React from "react";
import SignUpNavbar from "../components/commonCompo/SignUpNavbar";
import { motion } from "framer-motion";
import whatAppsSignUp from "../assets/whatAppsSignUp.svg";
import { useDispatch, useSelector } from "react-redux";
import { setWhatsAppNumber } from "../redux/signUp/signUpSlice";
import { useState } from "react";

const SignUp = () => {
    const dispatch = useDispatch();
    const whatsAppNumber = useSelector((state) => state.signUp.whatsAppNumber);


    return (
        <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
            {/* signup navbar */}
            <SignUpNavbar currentStep={5} />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-1 justify-center items-start mt-10"
            >
                <div className="w-[520px]">

                    {/* Title */}

                    <h1 className="text-3xl font-semibold mb-2">
                        Alright! One last thing
                    </h1>

                    <p className="text-gray-500 text-sm mb-8">
                        Add your WhatsApp number to receive booking updates and reminders.
                    </p>

                    {/* Input */}

                    <div className="border rounded-xl p-4 flex items-center gap-3 mb-6">

                        {/* Flag */}

                        <div className="flex items-center gap-2 border-r pr-3">
                            <img
                                src="https://flagcdn.com/w20/in.png"
                                alt="India"
                                className="w-5 h-4 object-cover"
                            />
                            <span className="text-sm text-gray-600">+91</span>
                        </div>

                        {/* Number */}

                        <input
                            type="text"
                            value={whatsAppNumber}
                            onChange={(e) => { dispatch(setWhatsAppNumber(e.target.value)) }}
                            required
                            placeholder="WhatsApp number"
                            className="flex-1 outline-none text-sm"
                        />

                    </div>

                    {/* Info Card */}

                    <div className="bg-[#E7F1ED] rounded-xl flex items-center overflow-hidden">

                        {/* Image */}

                        <div className="w-full h-[150px] p-4">
                            <img
                                src={whatAppsSignUp}
                                alt="whatsapp preview"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                </div>
            </motion.div>
            {/* Bottom Button */}
            <div className="border-t bg-white py-6 flex justify-center">
                <motion.button
                onClick={() => {console.log(whatsAppNumber);
                }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-[500px] bg-black text-white py-3 rounded-md font-medium"
                >
                    Launch your page
                </motion.button>
            </div>
        </div>
    )
}

export default SignUp