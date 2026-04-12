import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Users, IndianRupee, Trophy } from "lucide-react";

function Counter({ target, suffix = "", duration = 2 }) {
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
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-blue-500">
      {count}
      {suffix}
    </div>
  );
}

export default function EveryWantTo() {

  const words = ["Master Strategy", "Get Hired", "Build Product"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 flex justify-center items-center text-center gap-3">
          <span>Everyone Wants to</span>

          <span className="relative h-[1.2em] min-w-[250px] overflow-hidden text-blue-500 inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -35, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute left-0 right-0 text-start"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center space-y-4"
          >
            <Users className="w-8 h-8 text-blue-500" />
            <Counter target={10} suffix="K+" />
            <p className="text-gray-500 text-sm tracking-wide">
              PM ASPIRANTS SEARCHING FOR MENTORS MONTHLY
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center space-y-4"
          >
            <IndianRupee className="w-8 h-8 text-blue-500" />
            <div className="flex items-end gap-1">
              <Counter target={2} suffix="K" />
              <span className="text-4xl font-bold text-blue-500">-</span>
              <Counter target={10} suffix="K" />
            </div>
            <p className="text-gray-500 text-sm tracking-wide">
              PER SESSION FOR PM MENTORING
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center space-y-4"
          >
            <Trophy className="w-8 h-8 text-blue-500" />
            <div className="text-4xl md:text-5xl font-bold text-blue-500">
              #1
            </div>
            <p className="text-gray-500 text-sm tracking-wide">
              MOST POPULAR CAREER TRANSITION DOMAIN
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
