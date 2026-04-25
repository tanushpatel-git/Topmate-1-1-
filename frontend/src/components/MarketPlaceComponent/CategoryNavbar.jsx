import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const navItems = [
  "Live Cohorts",
  "Best Sellers",
  "Software Development",
  "Academic Guidance",
  "Accounting Taxation",
  "Brand Strategy",
  "Career Development",
  "Emerging Technologies",
  "Entrepreneurship",
  "Investment Trading",
  "Legal Practice",
  "Product Technology",
  "Skill Technology",
  "Skill Training",
  "Strategic Management",
];

const SCROLL_STEP = 200;

const GodLevelNavbar = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const [scrollX, setScrollX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [indicator, setIndicator] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const updateScroll = () => {
      if (containerRef.current) {
        const max =
          containerRef.current.scrollWidth -
          containerRef.current.clientWidth;
        setMaxScroll(max);
      }
    };

    updateScroll();
    window.addEventListener("resize", updateScroll);
    return () => window.removeEventListener("resize", updateScroll);
  }, []);

  const updateIndicator = (index) => {
    const el = itemRefs.current[index];
    if (!el) return;

    setIndicator({
      width: el.offsetWidth,
      left: el.offsetLeft,
    });
  };

  useEffect(() => {
    updateIndicator(activeIndex);
  }, [activeIndex]);

  const scroll = (dir) => {
    let newX =
      dir === "right" ? scrollX + SCROLL_STEP : scrollX - SCROLL_STEP;

    newX = Math.max(0, Math.min(newX, maxScroll));
    setScrollX(newX);
  };

  return (
    <div className="relative w-full top-16 bg-[#E9E6DE]/90 py-2 sm:py-3 px-3 sm:px-6 flex items-center">

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-12 bg-gradient-to-r from-[#E9E6DE]/70 to-transparent z-10" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-12 bg-gradient-to-l from-[#E9E6DE]/70 to-transparent z-10" />

      {/* LEFT BUTTON (hide on mobile) */}
      {scrollX > 0 && (
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-2 z-20 bg-white/80 backdrop-blur-md shadow p-2 rounded-full hover:scale-110 transition"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {/* NAV */}
      <div className="overflow-hidden w-full">
        <motion.div
          ref={containerRef}
          className="flex gap-4 sm:gap-8 whitespace-nowrap relative cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -maxScroll, right: 0 }}
          dragElastic={0.05}
          animate={{ x: -scrollX }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          onDragEnd={(e, info) => {
            let newX = scrollX - info.offset.x;
            newX = Math.max(0, Math.min(newX, maxScroll));
            setScrollX(newX);
          }}
        >
          {navItems.map((item, i) => (
            <motion.div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              onClick={() => {
                setActiveIndex(i);

                const el = itemRefs.current[i];
                const containerWidth =
                  containerRef.current.clientWidth;

                const itemCenter =
                  el.offsetLeft + el.offsetWidth / 2;

                let newX = itemCenter - containerWidth / 2;
                newX = Math.max(0, Math.min(newX, maxScroll));

                setScrollX(newX);
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 sm:px-4 py-2 text-sm sm:text-base cursor-pointer font-medium transition ${activeIndex === i
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
                }`}
            >
              {item}
            </motion.div>
          ))}

          {/* INDICATOR */}
          <motion.div
            className="absolute bottom-0 h-[2px] sm:h-[3px] bg-black rounded"
            animate={{
              width: indicator.width,
              x: indicator.left,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          />
        </motion.div>
      </div>

      {/* RIGHT BUTTON (hide on mobile) */}
      {scrollX < maxScroll && (
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-2 z-20 bg-white/80 backdrop-blur-md shadow p-2 rounded-full hover:scale-110 transition"
        >
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
};

export default GodLevelNavbar;