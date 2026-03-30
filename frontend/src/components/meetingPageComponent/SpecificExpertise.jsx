import { motion } from "framer-motion";

export default function SpecificExpertise() {
  const cardBase =
    "rounded-3xl border border-gray-800 h-80 p-8 bg-gradient-to-b from-gray-900 to-black shadow-xl relative overflow-hidden";

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-black text-white min-h-screen -mt-20 flex flex-col items-center justify-center px-6 py-20">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Built for your
        </h1>
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-400">
          specific expertise
        </h1>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeUp}
          className={cardBase}
        >
          <p className="text-xs text-gray-500 mb-4 tracking-widest">USE CASE 01</p>
          <h2 className="text-2xl font-semibold mb-2">Career Coaching</h2>
          <p className="text-purple-400 mb-4">₹2,000–₹8,000/session</p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Résumé reviews, interview prep, career pivots — clients get clarity and next steps.
          </p>

          <div className="absolute right-10 top-5 w-24 h-32 rounded-2xl bg-gray-800 flex items-center justify-center shadow-lg">
            <div className="w-20 h-4 absolute top-3 rounded-lg bg-gray-700 flex items-center justify-center shadow-lg"></div>
            <div className="w-20 h-3 absolute top-10 rounded-lg bg-gray-700 flex items-center justify-center shadow-lg"></div>
            <div className="w-20 h-5 absolute top-15 rounded-lg bg-gray-700 flex items-center justify-center shadow-lg"></div>
              <div className="w-10 h-10 absolute bottom-2 left-13 border-2 border-green-400 rounded-full flex items-center justify-center">
                ✓
              </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeUp}
          className={cardBase}
        >
          <p className="text-xs text-gray-500 mb-4 tracking-widest">USE CASE 02</p>
          <h2 className="text-2xl font-semibold mb-2">Business Consulting</h2>
          <p className="text-purple-400 mb-4">₹5,000–₹25,000/session</p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Strategic advice, idea validation, process audits — paid outcomes, not free calls.
          </p>

          <div className="absolute bottom-8 right-8 flex items-end gap-2">
            <div className="w-4 h-10 bg-gray-700 rounded"></div>
            <div className="w-4 h-16 bg-gray-600 rounded"></div>
            <div className="w-4 h-12 bg-gray-700 rounded"></div>
            <div className="w-4 h-20 bg-white rounded"></div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeUp}
          className={cardBase}
        >
          <p className="text-xs text-gray-500 mb-4 tracking-widest">USE CASE 03</p>
          <h2 className="text-2xl font-semibold mb-2">Tech Mentorship</h2>
          <p className="text-purple-400 mb-4">₹3,000–₹15,000/session</p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Code reviews, architecture help, mock interviews — technical growth with accountability.
          </p>

          <div className="absolute bottom-20 left-80 w-44 h-28 rounded-2xl bg-gray-800 shadow-lg p-4">
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>
            <div className="text-blue-400 text-xl">&lt;/&gt;</div>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeUp}
          className={cardBase}
        >
          <p className="text-xs text-gray-500 mb-4 tracking-widest">USE CASE 04</p>
          <h2 className="text-2xl font-semibold mb-2">Expert Ask-Me-Anything</h2>
          <p className="text-purple-400 mb-4">₹1,500–₹10,000/session</p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Short, high-value slots — clients book when they need your expertise most.
          </p>

          <div className="absolute right-10 bottom-20">
            <div className="w-28 h-28 bg-white text-black rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
              ?
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
