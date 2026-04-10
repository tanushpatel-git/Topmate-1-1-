import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, ArrowUp, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Zap,
    label: "STARTER",
    value: 80,
    prefix: "₹",
    suffix: "K",
    desc: "15-20 mock interviews + mentoring calls",
  },
  {
    icon: ArrowUp,
    label: "GROWING",
    value: 3,
    prefix: "₹",
    suffix: "L",
    desc: "Calls + course + digital products",
  },
  {
    icon: TrendingUp,
    label: "SCALED",
    value: 5,
    prefix: "₹",
    suffix: "L+",
    desc: "All services + cohort + Perf Marketing",
  },
];

function Counter({ value, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2;
    const increment = value / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {prefix}{count}{suffix}
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

export default function ScalableRevenueModel() {
  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-100 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Scalable Revenue Model
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mt-4"
        >
          From starting out to building a Product Management empire
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-20">
          <div className="absolute top-12 left-0 right-0 h-[2px] bg-blue-200" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  className="flex flex-col z-1 items-center"
                >
                  {/* Icon Box */}
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white shadow-md border border-gray-200">
                    <Icon className="w-8 h-8 text-blue-500" />
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <p className="text-xs tracking-widest text-gray-400">
                      {step.label}
                    </p>

                    <Counter
                      value={step.value}
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
