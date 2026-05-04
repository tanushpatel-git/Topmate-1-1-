import { useState } from "react";
import { motion } from "framer-motion";
import {
    ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import badgeRecommendation from '../../../assets/badge-recommendation.svg'

export default function Recommedations() {
    const [text, setText] = useState("");
    const [from, setFrom] = useState("");

    return (
        <div className="w-full max-w-5xl max-h-[80vh] flex rounded-3xl overflow-hidden bg-white">

            {/* LEFT PANEL */}
            <div className="w-1/2 bg-gradient-to-br from-orange-200 to-yellow-100 p-6 flex flex-col justify-between">
                {/* Preview Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-100 rounded-3xl p-6 shadow-md"
                >
                    <h3 className="text-xl font-semibold mb-4">
                        Add recommendation
                    </h3>

                    <p className="text-gray-600">
                        Recommended by{" "}
                        <span className="font-medium">
                            {from || "$"}
                        </span>{" "}
                        on in
                    </p>

                    <div className="mt-4 text-gray-700 text-sm relative">
                        <div className="h-24 bg-white rounded-2xl p-4">
                            {text || "Your recommendation preview will appear here..."}
                        </div>
                        <div className="absolute bottom-0 right-0">
                            <img src={badgeRecommendation} alt="badge-recommendation" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-1/2 bg-gray-100 p-2 flex flex-col gap-2">

                <div>
                    {/* Title */}
                    <h2 className="text-4xl font-semibold text-gray-800 mb-8">
                        LinkedIn <br /> recommendations
                    </h2>

                    {/* Textarea */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">
                            Recommendation (200 characters)
                        </label>
                        <textarea
                            maxLength={200}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="What did they say.."
                            className="w-full h-32 p-4 rounded-xl border border-gray-300 bg-gray-200 outline-none"
                        />
                    </div>

                    {/* From Input */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">
                            From
                        </label>
                        <input
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            placeholder="By"
                            className="w-full p-4 rounded-xl border border-gray-300 bg-gray-200 outline-none"
                        />
                    </div>

                    {/* Link */}
                    <button className="flex items-center text-center gap-2 text-gray-700 underline">
                        <Link to="https://www.linkedin.com/in" target="_blank" rel="noopener noreferrer">
                            Open linkedin
                        </Link>
                        <ExternalLink size={16} />
                    </button>
                </div>

                {/* Bottom Button */}
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-black text-white py-4 rounded-xl text-lg font-medium"
                >
                    Add Highlight
                </motion.button>
            </div>
        </div>
    );
}