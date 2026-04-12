import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function ManagementBussiness() {
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

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
                <TrendingUp className="text-gray-600" size={22} />
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
                <TrendingUp className="text-gray-600" size={22} />
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
