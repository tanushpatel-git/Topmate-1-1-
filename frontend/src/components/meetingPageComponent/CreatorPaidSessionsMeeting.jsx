import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function CreatorPaidSessionsMeeting() {

  const stats = [
    { value: "300k+", label: "CREATORS" },
    { value: "1M+", label: "BOOKINGS" },
    { value: "4.9", label: "AVG RATING", icon: true },
    { value: "$10M+", label: "EARNED BY CREATORS" },
  ];


  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const card =
    "rounded-3xl border border-gray-800 bg-gradient-to-b from-[#0e0e0e] to-black p-8 shadow-xl";

  return (
    <section className="bg-black text-white px-6 py-28 flex flex-col items-center">
      {/* Badge */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="mb-6"
      >
        <div className="text-xs tracking-widest text-gray-400 border border-gray-800 px-4 py-2 rounded-full">
          SUCCESS STORIES
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="text-center max-w-4xl mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
          Creators who turned free advice
        </h2>
        <h2 className="text-4xl md:text-6xl font-semibold text-gray-400">
          into paid sessions
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
      >
        {[
          {
            text:
              "I went from charging ₹0 for advice to ₹5,000 per session. In three months, I had booked 120 sessions. The platform handled everything — calendar, payments, and meeting links.",
            name: "Priya M.",
            role: "Career Coach • 3,200 followers",
            image:"https://i.pinimg.com/736x/4e/5d/84/4e5d84e967cdf19ece54aaa281220669.jpg"
          },
          {
            text:
              "My LinkedIn profile was getting 2,000 views a week. I added a link, set a ₹8,000/hr rate, and filled my calendar in the first week.",
            name: "Arjun S.",
            role: "Senior Software Architect",
            image:"https://i.pinimg.com/736x/61/31/4d/61314d055f92ca874a0f1b50d517ee28.jpg"
          },
          {
            text:
              "I was manually booking through DMs and collecting payments. Now everything is automated with a clean, professional flow.",
            name: "Nisha V.",
            role: "Executive Coach",
            image:"https://i.pinimg.com/736x/c6/c0/09/c6c009b31ed165171c61a1964a7089bd.jpg"
          },
        ].map((item, i) => (
          <motion.div key={i} variants={fadeUp} className={card}>
            <p className="text-gray-300 leading-relaxed mb-8">“{item.text}”</p>

            <div className="border-t border-gray-800 pt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden" >
                <img className="w-full h-full object-cover" src={item.image} alt="loading" />
              </div>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <section className="bg-black px-6 py-20 flex justify-center items-center">
        <div className="w-full max-w-5xl rounded-4xl border border-gray-900 bg-linear-to-b from-[#0d0d0d] to-black px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 text-4xl md:text-5xl font-semibold">
                {stat.value}
                {stat.icon && <Star className="w-8 h-8 fill-white" />}
              </div>
              <p className="mt-3 text-xs tracking-widest text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}