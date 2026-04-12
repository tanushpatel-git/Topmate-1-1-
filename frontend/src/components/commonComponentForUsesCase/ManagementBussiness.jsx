import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function ManagementBussiness({ colorTheme = "blue" }) {
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

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
    <section className="w-full bg-[#f5f5f5] py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-5xl font-semibold text-black mb-4">
          Scale Your Product Management Business
        </h1>

        <p className="text-gray-500 mb-16 text-lg">
          From organic reach to high-ticket sales automation
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Organic Growth Card */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-left"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gray-100 p-3 rounded-xl">
                <TrendingUp className={color.text2} size={22} />
              </div>

              <h3 className="text-2xl font-semibold">Organic Growth</h3>
            </div>

            <p className="text-gray-500 mb-8 leading-relaxed">
              Leverage your existing presence on LinkedIn, Twitter, and
              specialized Product Management communities. Share your
              insights, frameworks, and success stories to drive traffic to
              your Topmate profile.
            </p>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">✓</span>
                LinkedIn/X content strategy
              </li>

              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">✓</span>
                Community engagement
              </li>

              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">✓</span>
                Referral engine
              </li>
            </ul>
          </motion.div>

          {/* Paid Scaling Card */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-left"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gray-100 p-3 rounded-xl">
                <TrendingUp className={color.text2} size={22} />
              </div>

              <h3 className="text-2xl font-semibold">Paid Scaling</h3>
            </div>

            <p className="text-gray-500 mb-8 leading-relaxed">
              Ready to go from 1 to 10? Topmate's growth services help
              you fill your cohorts, webinars, and coaching programs with
              zero upfront costs — we only earn when you do.
            </p>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">✓</span>
                Performance Marketing (Ads)
              </li>

              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">✓</span>
                Sales Team for high-ticket
              </li>

              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">✓</span>
                Instagram Auto DM automation
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
