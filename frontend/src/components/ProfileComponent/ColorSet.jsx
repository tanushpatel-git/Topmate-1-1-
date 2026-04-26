import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Wand2 } from "lucide-react";
import themeImg from "../../assets/img-theme-modal.svg"

const ColorSet = ({ isOpen = true, onClose, colors, setSelectedColor, selectedColor }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-[900px] h-[550px] bg-white rounded-3xl overflow-hidden flex shadow-2xl"
            >
                {/* LEFT PREVIEW */}
                <div
                    className="w-1/2 p-6 flex items-center justify-center"
                    style={{ backgroundColor: selectedColor }}
                >
                    <motion.img initial={{ y: 20 }} animate={{ y: -10 }} transition={{ duration: 0.5 }} src={themeImg} alt="loading..." whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} />
                </div>

                {/* RIGHT PANEL */}
                <div className="w-1/2 p-8 relative">
                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 text-gray-400 hover:text-black"
                    >
                        <X size={24} />
                    </button>

                    <h1 className="text-4xl font-bold mb-4">Brand your page</h1>
                    <p className="text-gray-500 mb-6">
                        Customize and style your profile colors to your Brand
                    </p>

                    {/* COLOR PICKER */}
                    <div className="flex gap-3 mb-6">
                        {colors.map((color, i) => (
                            <motion.button
                                key={i}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedColor(color)}
                                className={`w-12 h-12 rounded-lg border-2 ${selectedColor === color ? "border-black" : "border-gray-200"
                                    }`}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>

                    {/* THEME SELECT */}
                    <div className="flex items-center justify-between p-4 rounded-xl border mb-8">
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-100 p-3 rounded-lg">
                                <Wand2 size={18} />
                            </div>
                            <span className="font-medium">Select your theme</span>
                        </div>

                        <div
                            className="w-10 h-10 rounded-lg border"
                            style={{ backgroundColor: selectedColor }}
                        />
                    </div>

                    {/* SAVE BUTTON */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="w-full bg-black text-white py-4 rounded-xl text-lg font-semibold"
                    >
                        Save Changes
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default ColorSet;