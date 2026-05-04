import { useState } from "react";
import { motion } from "framer-motion";
import discount_highlight from "../../../assets/discount-highlight.png";

export default function OfferAndDiscount() {
    const [offer, setOffer] = useState("");

    return (
        <div className="w-full max-w-5xl h-[420px] flex rounded-3xl overflow-hidden bg-white">

            {/* LEFT PANEL */}
            <div className="w-1/2 bg-gradient-to-br from-orange-200 to-yellow-100 p-5 flex flex-col gap-6">

                {/* Preview Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-1 flex items-center"
                >
                    <div className="w-full bg-gray-100 rounded-3xl p-6 flex items-center justify-between shadow">

                        <p className="text-gray-700 text-lg">
                            {offer || "Add note..."}
                        </p>

                        <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                            <img src={discount_highlight} alt="loading..." />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-1/2 bg-gray-100 p-5 flex flex-col justify-between">
                <div className="space-y-5">
                    {/* Title */}
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Highlight offer/discount
                    </h2>
                    {/* Offer Input */}
                    <div>
                        <label className="block text-gray-700 mb-2">
                            Offer
                        </label>
                        <textarea
                            value={offer}
                            onChange={(e) => setOffer(e.target.value)}
                            placeholder="All services discounted for the week, go grab!"
                            className="w-full h-24 p-4 rounded-xl border border-gray-300 bg-gray-200 outline-none resize-none"
                        />
                    </div>
                </div>

                {/* Bottom Button */}
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    disabled={!offer}
                    className={`w-full py-4 rounded-xl text-lg font-medium transition ${offer
                        ? "bg-black text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    Add Highlight
                </motion.button>
            </div>
        </div>
    );
}