import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";


// Counter that animates to max value
function Counter({ min, max, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(min);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = min;
    const duration = 2;
    const increment = (max - min) / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= max) {
        setCount(max);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, min, max]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {prefix}{min !== max ? `${min}-` : ""}{count}{suffix}
    </div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function RevenueModel({ colorTheme, title, title2, steps }) {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true });

  const colors = {
    blue: {
      bg: "bg-blue-500",
      text: "text-white",
      text2: "text-blue-500",
    },
    purple: {
      bg: "bg-purple-500",
      text: "text-white",
      text2: "text-purple-500",
    },
    pink: {
      bg: "bg-pink-500",
      text: "text-white",
      text2: "text-pink-500",
    },  
    green: {
      bg: "bg-green-500",
      text: "text-white",
      text2: "text-green-500",
    },
    orange: {
      bg: "bg-orange-500",
      text: "text-white",
      text2: "text-orange-500",
    },
    yellow: {
      bg: "bg-yellow-500",
      text: "text-white",
      text2: "text-yellow-500",
    },
    red: {
      bg: "bg-red-500",
      text: "text-white",
      text2: "text-red-500",
    },
    cyan: {
      bg: "bg-cyan-500",
      text: "text-white",
      text2: "text-cyan-500",
    },
    lime: {
      bg: "bg-lime-500",
      text: "text-white",
      text2: "text-lime-500",
    },
    indigo: {
      bg: "bg-indigo-500",
      text: "text-white",
      text2: "text-indigo-500",
    },
    violet: {
      bg: "bg-violet-500",
      text: "text-white",
      text2: "text-violet-500",
    },
    fuchsia: {
      bg: "bg-fuchsia-500",
      text: "text-white",
      text2: "text-fuchsia-500",
    },
    rose: {
      bg: "bg-rose-500",
      text: "text-white",
      text2: "text-rose-500",
    },
    emerald: {
      bg: "bg-emerald-500",
      text: "text-white",
      text2: "text-emerald-500",
    },
    teal: {
      bg: "bg-teal-500",
      text: "text-white",
      text2: "text-teal-500",
    },
    sky: {
      bg: "bg-sky-500",
      text: "text-white",
      text2: "text-sky-500",
    },
    slate: {
      bg: "bg-slate-500",
      text: "text-white",
      text2: "text-slate-500",
    },
    stone: {
      bg: "bg-stone-500",
      text: "text-white",
      text2: "text-stone-500",
    },
    neutral: {
      bg: "bg-neutral-500",
      text: "text-white",
      text2: "text-neutral-500",
    },
    zinc: {
      bg: "bg-zinc-500",
      text: "text-white",
      text2: "text-zinc-500",
    },
    gray: {
      bg: "bg-gray-500",
      text: "text-white",
      text2: "text-gray-500",
    },
    black: {
      bg: "bg-black",
      text: "text-white",
      text2: "text-black",
    },
    white: {
      bg: "bg-white",
      text: "text-black",
      text2: "text-white",
    },
  }

  const color = colors[colorTheme];

  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-100 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mt-4"
        >
          {title2}
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Base line */}
          <div className="absolute top-12 left-0 right-0 h-[2px] bg-blue-100" />

          {/* Animated progress line */}
          <motion.div
            ref={lineRef}
            initial={{ scaleX: 0 }}
            animate={isLineInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`absolute top-12 left-0 right-0 h-[2px] ${color.bg} origin-left`}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === steps.length - 1; // highlight last step

              return (
                <motion.div
                  key={i}
                  variants={item}
                  className="flex flex-col z-1 items-center"
                >
                  {/* Icon Box */}
                  <div
                    className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-white shadow-md border ${isActive
                      ? `${color.text2} ring-2 ${color.text1}`
                      : "border-gray-200"
                      }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${isActive ? color.text2 : "text-gray-400"
                        }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <p className="text-xs tracking-widest text-gray-400">
                      {step.label}
                    </p>

                    <Counter
                      min={step.min}
                      max={step.max}
                      prefix={step.prefix}
                      suffix={step.suffix}
                    />

                    <p className="text-gray-500 mt-2 text-sm">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
