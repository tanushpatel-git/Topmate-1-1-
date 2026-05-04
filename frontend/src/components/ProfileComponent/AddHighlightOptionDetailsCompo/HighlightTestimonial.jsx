import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Quote } from "lucide-react";

export default function HighlightTestimonial() {
  const [text, setText] = useState("");
  const [from, setFrom] = useState("");

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
          <div className="w-full bg-gray-100 rounded-3xl p-6 shadow flex flex-col justify-center gap-4">

            <Quote size={28} className="text-gray-400" />

            <p className="text-gray-700 text-lg leading-relaxed">
              {text || "Add note"}
            </p>

            {from && (
              <p className="text-sm text-gray-500">
                — {from}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-1/2 bg-gray-100 p-5 flex flex-col justify-between">

        <div className="space-y-5">

          {/* Title */}
          <h2 className="text-3xl font-semibold text-gray-800">
            Highlight testimonial
          </h2>

          {/* Textarea */}
          <div>
            <label className="block text-gray-700 mb-2">
              Testimonial (200 characters)
            </label>
            <textarea
              maxLength={200}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What did they say.."
              className="w-full h-24 p-4 rounded-xl border border-gray-300 bg-gray-200 outline-none resize-none"
            />
          </div>

          {/* From */}
          <div>
            <label className="block text-gray-700 mb-2">
              Testimonial from
            </label>
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="By"
              className="w-full p-4 rounded-xl border border-gray-300 bg-gray-200 outline-none"
            />
          </div>
        </div>

        {/* Bottom Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          disabled={!text}
          className={`w-full py-4 rounded-xl text-lg font-medium transition ${
            text
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