import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [active, setActive] = useState(false);

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setActive(false)}
          />
        )}
      </AnimatePresence>

      {/* Search Bar */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className={`fixed z-50 w-full px-3 sm:px-4 ${active
            ? "top-1/2 -translate-y-1/2"
            : "bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2"
          }`}
      >
        <motion.div
          layout
          className={`mx-auto flex items-center border border-[#983E01]/30 gap-2 sm:gap-3 bg-white rounded-full shadow-lg px-3 sm:px-4 py-2 sm:py-3
          ${active
              ? "max-w-full sm:max-w-xl"
              : "max-w-full sm:max-w-md"
            }`}
        >
          <input
            type="text"
            placeholder="Search..."
            onFocus={() => setActive(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log("Enter clicked");
                setActive(false);
              }
            }}
            className="w-full text-sm sm:text-lg outline-none font-light bg-transparent"
          />

          <div
            className="rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#983E01]/10 cursor-pointer"
          >
            <Search className="text-[#983E01]" size={20} />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}