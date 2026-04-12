import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, IndianRupee, Trophy } from "lucide-react";

function Counter({ target, suffix = "", duration = 2, color }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 40);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 40);

    return () => clearInterval(counter);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className={`text-4xl md:text-5xl font-bold ${color.text2}`}>
      {count}
      {suffix}
    </div>
  );
}

export default function EveryWantTo({
  colorTheme="blue",
  title,
  mainTitle,
  firstCardTarget,
  secondCardTarget,
  second2CardTarget,
  thirdCardTarget,
  firstCardDesc,
  secondCardDesc,
  thirdCardDesc }) {

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          {mainTitle} <span className={`pl-2 ${color.text2}`}>{title}</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center space-y-4"
          >
            <Users className={`w-8 h-8 ${color.text2}`} />
            <Counter target={firstCardTarget} suffix="K+" color={color} />
            <p className="text-gray-500 text-sm tracking-wide">
              {firstCardDesc}
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center space-y-4"
          >
            <IndianRupee className={`w-8 h-8 ${color.text2}`} />
            <div className="flex items-end gap-1">
              <Counter target={secondCardTarget} suffix="K" color={color} />
              <span className={`text-4xl font-bold ${color.text2}`}>-</span>
              <Counter target={second2CardTarget} suffix="K" color={color} />
            </div>
            <p className="text-gray-500 text-sm tracking-wide">
              {secondCardDesc}
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center space-y-4"
          >
            <Trophy className={`w-8 h-8 ${color.text2}`} />
            <div className={`text-4xl md:text-5xl font-bold ${color.text2}`}>
              #{thirdCardTarget}
            </div>
            <p className="text-gray-500 text-sm tracking-wide">
              {thirdCardDesc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
