import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Recommedations from "./AddHighlightOptionDetailsCompo/Recommedations";
import WebLink from "./AddHighlightOptionDetailsCompo/WebLink";
import HighlightTestimonial from "./AddHighlightOptionDetailsCompo/HighlightTestimonial";
import OfferAndDiscount from "./AddHighlightOptionDetailsCompo/OfferAndDiscount";
import {
  X,
  Sparkles,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  BadgePercent,
  HeartHandshake,
  ArrowLeft
} from "lucide-react";
import Donation from "./AddHighlightOptionDetailsCompo/Donation";

export default function AddHighlight({ isOpen = false, onClose }) {
  const [mainOpen, setMainOpen] = useState(-1);

  const options = [
    { label: "Recommendations", openMain: 1, icon: Sparkles },
    { label: "Web link", openMain: 2, icon: ExternalLink },
    { label: "Testimonial", openMain: 3, icon: MessageSquare },
    { label: "Offer / Discount", openMain: 4, icon: BadgePercent },
    { label: "Donation Pledge", openMain: 5, icon: HeartHandshake }
  ];

  // STEP 1 (Main Options Screen)
  const renderOptionsScreen = () => (
    <div className="flex  gap-6 w-full">
      {/* LEFT PREVIEW */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-orange-200 to-yellow-100 rounded-2xl p-6">
        <div className="bg-white rounded-2xl p-4 shadow">
          <p className="text-gray-700 font-medium">
            Select a highlight type →
          </p>
        </div>
      </div>

      {/* RIGHT OPTIONS */}
      <div className="w-[320px]">
        <h2 className="text-2xl font-semibold mb-6">Add a Highlight</h2>

        <div className="space-y-3">
          {options.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                onClick={() => setMainOpen(item.openMain)}
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
    </div>
  );

  //  STEP 2 (Dynamic Full Panel)
  const renderDetailScreen = (id) => {
    const selected = options.find(o => o.openMain === id);

    return (
      <div className="w-full">
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setMainOpen(-1)}>
            <ArrowLeft />
          </button>
          <h2 className="text-2xl font-semibold">{selected?.label}</h2>
        </div>

        {/* FULL CONTENT */}
        <div className="bg-gray-50 rounded-xl p-6 min-h-[300px] flex items-center justify-center">
          {id === 1 && (
            <Recommedations />
          )}
          {id === 2 && (
            <WebLink />
          )}
          {id === 3 && (
            <HighlightTestimonial />
          )}
          {id === 4 && (
            <OfferAndDiscount />
          )}
          {id === 5 && (
            <Donation />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-[820px] bg-white rounded-2xl shadow-xl p-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              {/* CLOSE BUTTON */}
              <div className="flex justify-end mb-2">
                <button onClick={onClose}>
                  <X />
                </button>
              </div>

              {/*  SCREEN SWITCH */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={mainOpen}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25 }}
                >
                  {mainOpen === -1
                    ? renderOptionsScreen()
                    : renderDetailScreen(mainOpen)}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}