import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  BadgePercent,
  HeartHandshake
} from "lucide-react";

export default function AddHighlight({ isOpen, onClose }) {
  const options = [
    {
      label: "AI-Summary Testimonial",
      icon: Sparkles
    },
    {
      label: "Recommendations",
      icon: Sparkles
    },
    {
      label: "Web link",
      icon: ExternalLink
    },
    {
      label: "Testimonial",
      icon: MessageSquare
    },
    {
      label: "Offer / Discount",
      icon: BadgePercent
    },
    {
      label: "Donation Pledge",
      icon: HeartHandshake
    }
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-[820px] bg-white rounded-2xl shadow-xl p-6 flex gap-6"
            >
              {/* LEFT PREVIEW */}
              <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-orange-200 to-yellow-100 rounded-2xl p-6">
                <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow">
                  <div className="flex-1">
                    <p className="font-medium text-gray-700">
                      A researcher who helps young Indians navigate through green ...
                    </p>
                    <p className="text-sm text-gray-500 mt-2">timesofindia.com</p>
                  </div>
                  <div className="w-20 h-20 bg-gray-100 rounded-xl" />
                </div>
              </div>

              {/* RIGHT OPTIONS */}
              <div className="w-[320px]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">Add a Highlight</h2>
                  <button onClick={onClose}>
                    <X />
                  </button>
                </div>

                <div className="space-y-3">
                  {options.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Icon size={18} />
                          </div>
                          <span className="font-medium text-gray-700">
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight size={18} />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
