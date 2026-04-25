import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const OverviewCard = ({
  imageUrl,
  title,
  price,
  rating,
  reviews,
  tag,
  duration,
  mentor,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="w-full max-w-sm sm:max-w-md bg-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm"
    >
      {/* TOP SECTION */}
      <div className="flex gap-3 sm:gap-5">
        {/* IMAGE */}
        <img
          src={imageUrl}
          alt="mentor"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl object-cover"
        />

        {/* INFO */}
        <div className="flex-1 min-w-0">
          <h2 className="text-sm sm:text-lg font-semibold leading-tight line-clamp-2">
            {title}
          </h2>

          <div className="flex flex-wrap items-center gap-2 mt-2 text-gray-700 text-xs sm:text-sm">
            <span className="font-medium">₹ {price}</span>

            <span className="text-gray-400 hidden sm:block">|</span>

            <div className="flex items-center gap-1">
              <Star size={14} className="fill-gray-400 text-gray-400" />
              <span className="font-semibold">{rating}</span>
              <span className="text-gray-400">({reviews})</span>
            </div>
          </div>
        </div>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
        <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm text-gray-700">
          {tag}
        </span>
        <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm text-gray-700">
          {duration}
        </span>
      </div>

      {/* DIVIDER */}
      <div className="my-4 sm:my-5 border-t" />

      {/* BOTTOM */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-gray-600 text-xs sm:text-sm">
          by <span className="text-black font-medium">{mentor}</span>
        </p>

        {/* BUTTON */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-auto text-sm bg-black text-white px-4 sm:px-5 py-2 rounded-full border-2 sm:border-4 border-orange-200 shadow-md"
        >
          See Availability
        </motion.button>
      </div>
    </motion.div>
  );
};

export default OverviewCard;