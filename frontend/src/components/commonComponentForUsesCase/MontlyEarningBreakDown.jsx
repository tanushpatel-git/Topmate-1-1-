import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, duration = 1.5, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 60);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function MonthlyEarningBreakDown({ colorTheme = "blue" }) {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  const items = [
    {
      title: "15 mock interviews/month × ₹3,000",
      value: 45,
      suffix: "K",
    },
    {
      title: "Course ('PM Interview Masterclass') × 30 sales × ₹5,000",
      value: 1.5,
      suffix: "L",
    },
    {
      title: "PM templates pack × 50 sales × ₹500",
      value: 25,
      suffix: "K",
    },
    {
      title: "Priority DM reviews × 20 × ₹1,000",
      value: 20,
      suffix: "K",
    },
  ];

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
    <section
      ref={sectionRef}
      className="w-full bg-[#f4f4f4] py-24 px-8 flex justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <p className="tracking-widest text-sm font-semibold text-gray-700">
              MONTHLY EARNINGS BREAKDOWN
            </p>
          </div>

          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="flex justify-between items-center bg-white rounded-2xl px-8 py-6 shadow-sm border border-gray-200"
              >
                <p className="text-gray-600">{item.title}</p>

                <p className="font-bold text-xl text-black">
                  ₹
                  <CountUp
                    target={item.value}
                    suffix={item.suffix}
                  />
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[30px] p-14 shadow-sm border border-gray-200 text-center"
        >
          <p className="tracking-widest text-sm text-gray-500 mb-6">
            PROJECTED REVENUE
          </p>

          <h2 className="text-6xl font-bold text-blue-500 mb-6">
            ₹
            <CountUp target={2.4} suffix="L/month" />
          </h2>

          <button className="bg-blue-100 text-blue-600 px-6 py-3 rounded-full font-medium mb-6">
            Growing Tier Snapshot
          </button>

          <p className="text-gray-400 text-sm">
            Based on top-performing creators in this category
          </p>
        </motion.div>
      </div>
    </section>
  );
}