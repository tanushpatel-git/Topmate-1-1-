import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DancingSVG = () => (
  <svg viewBox="0 0 200 220" className="w-64 h-72">
    <defs>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d9534f" />
        <stop offset="100%" stopColor="#8e73d8" />
      </linearGradient>
    </defs>

    {/* Left leg */}
    <motion.g
      style={{ transformOrigin: "100px 130px" }}
      animate={{ rotate: [-15, 25, -15] }}
      transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
    >
      <line x1="100" y1="130" x2="70" y2="175" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="70" y1="175" x2="60" y2="190" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </motion.g>

    {/* Right leg */}
    <motion.g
      style={{ transformOrigin: "100px 130px" }}
      animate={{ rotate: [15, -25, 15] }}
      transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
    >
      <line x1="100" y1="130" x2="130" y2="175" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="130" y1="175" x2="140" y2="190" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </motion.g>

    {/* Body */}
    <motion.g
      style={{ transformOrigin: "100px 80px" }}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
    >
      <line x1="100" y1="60" x2="100" y2="130" stroke="url(#bodyGrad)" strokeWidth="4" strokeLinecap="round" />

      {/* Left arm */}
      <motion.g
        style={{ transformOrigin: "100px 75px" }}
        animate={{ rotate: [-30, 40, -30] }}
        transition={{ repeat: Infinity, duration: 0.4, ease: "easeInOut" }}
      >
        <line x1="100" y1="75" x2="55" y2="95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <motion.circle
          cx="50" cy="98" r="5"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        />
      </motion.g>

      {/* Right arm */}
      <motion.g
        style={{ transformOrigin: "100px 75px" }}
        animate={{ rotate: [40, -30, 40] }}
        transition={{ repeat: Infinity, duration: 0.4, ease: "easeInOut" }}
      >
        <line x1="100" y1="75" x2="145" y2="95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <motion.circle
          cx="150" cy="98" r="5"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        />
      </motion.g>
    </motion.g>

    {/* Head */}
    <motion.g
      animate={{ y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
    >
      <circle cx="100" cy="35" r="22" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Eyes */}
      <motion.circle
        cx="92" cy="32" r="2.5" fill="currentColor"
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ repeat: Infinity, duration: 0.3, delay: 0.15 }}
      />
      <motion.circle
        cx="108" cy="32" r="2.5" fill="currentColor"
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ repeat: Infinity, duration: 0.3 }}
      />
      {/* Smile */}
      <motion.path
        d="M90 42 Q100 50 110 42"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        animate={{ d: ["M90 42 Q100 50 110 42", "M90 42 Q100 52 110 42", "M90 42 Q100 50 110 42"] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
      />
    </motion.g>

    {/* Music note 1 */}
    <motion.g
      animate={{
        y: [-10, -40, -10],
        x: [-5, 10, -5],
        rotate: [0, 15, -15, 0],
        opacity: [0, 1, 0],
      }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.2 }}
    >
      <path d="M160 30 L160 15 L175 20 L175 35" fill="none" stroke="#d9534f" strokeWidth="2" />
      <ellipse cx="155" cy="30" rx="5" ry="4" fill="#d9534f" />
      <ellipse cx="170" cy="35" rx="5" ry="4" fill="#d9534f" />
    </motion.g>

    {/* Music note 2 */}
    <motion.g
      animate={{
        y: [-5, -35, -5],
        x: [5, -10, 5],
        rotate: [0, -15, 15, 0],
        opacity: [0, 1, 0],
      }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.8 }}
    >
      <path d="M30 40 L30 25 L45 30 L45 45" fill="none" stroke="#8e73d8" strokeWidth="2" />
      <ellipse cx="25" cy="40" rx="5" ry="4" fill="#8e73d8" />
      <ellipse cx="40" cy="45" rx="5" ry="4" fill="#8e73d8" />
    </motion.g>

    {/* Stars */}
    {[
      { cx: 170, cy: 55, delay: 0 },
      { cx: 30, cy: 65, delay: 0.5 },
      { cx: 155, cy: 75, delay: 1 },
      { cx: 45, cy: 25, delay: 1.5 },
    ].map((star, i) => (
      <motion.text
        key={i}
        x={star.cx}
        y={star.cy}
        textAnchor="middle"
        fill={i % 2 === 0 ? "#e9c58b" : "#d88942"}
        fontSize="14"
        animate={{
          scale: [0, 1.2, 0],
          opacity: [0, 1, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          delay: star.delay,
          ease: "easeInOut",
        }}
      >
        ★
      </motion.text>
    ))}
  </svg>
);

const UpcomingFeature = ({ type }) => {
  const navigate = useNavigate();

  const config = {
    webinar: {
      title: "Webinars & Workshops",
      subtitle: "Coming Soon",
      description:
        "We're building an amazing webinar experience for you. Host live sessions, sell replays, and grow your community — all from one place.",
      color: "#d9534f",
    },
    package: {
      title: "Packages & Bundles",
      subtitle: "Coming Soon",
      description:
        "Bundle your services into packages and offer more value to your audience. Stay tuned for this exciting feature!",
      color: "#8e73d8",
    },
    cohort: {
      title: "Cohorts",
      subtitle: "Coming Soon",
      description:
        "We're building cohort-based programs to help you run multi-week immersive learning experiences. Stay tuned!",
      color: "#d88942",
    },
    autodm: {
      title: "Auto DM",
      subtitle: "Coming Soon",
      description:
        "We're building an automated DM feature to help you connect with your audience effortlessly. Stay tuned!",
      color: "#4A90D9",
    },
  };

  const current = config[type] || config.webinar;

  return (
    <div className="min-h-screen bg-[#F7F7F2] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-2xl text-center flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="text-gray-800"
        >
          <DancingSVG />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: current.color }}
          >
            {current.subtitle}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {current.title}
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
            {current.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex gap-4 mt-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition shadow-md"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/marketplace")}
            className="px-6 py-3 border-2 border-black/20 text-gray-700 rounded-full font-medium hover:border-black/40 transition"
          >
            Browse Marketplace
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingFeature;
