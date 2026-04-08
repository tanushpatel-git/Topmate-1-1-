import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const SuccessStorieOfCohort = () => {

  const testimonials = [
    {
      text: "I ran my first cohort — 6 sessions, 40 students, ₹18,000 per person. That was ₹7.2 lakhs in 6 weeks. The recordings became my evergreen course.",
      name: "Varun T.",
      role: "Product Management Coach",
      img: "https://i.pravatar.cc/100?img=12"
    },
    {
      text: "I was selling individual webinars for ₹999. After switching to a cohort model at ₹15,000, I made more revenue from 12 students than from 200 individual ticket purchasers.",
      name: "Shreya P.",
      role: "Growth Consultant",
      img: "https://i.pravatar.cc/100?img=22"
    },
    {
      text: "Cohorts changed my business. The peer accountability drives a 90%+ completion rate, and students are much more likely to upgrade to my high-ticket consulting.",
      name: "Rohit K.",
      role: "Finance Creator",
      img: "https://i.pravatar.cc/100?img=33"
    }
  ];

  const stats = [
    { value: "300k+", label: "CREATORS" },
    { value: "1M+", label: "BOOKINGS" },
    { value: "4.9", label: "AVG RATING", icon: true },
    { value: "90%", label: "REVENUE SHARE" },
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center py-32">

      {/* BADGE */}
      <div className="px-5 py-2 rounded-full border border-gray-700 text-sm text-gray-400 mb-6">
        SUCCESS STORIES
      </div>

      {/* TITLE */}
      <h1 className="text-6xl font-bold text-center leading-tight mb-20">
        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          From ₹999 webinars
        </span>
        <br />
        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          to ₹7.2L cohorts
        </span>
      </h1>

      {/* TESTIMONIAL CARDS */}
      <div className="grid grid-cols-3 gap-10 w-[80%] mb-24">

        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: false }}
            className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-8 flex flex-col justify-between"
          >

            <p className="text-gray-400 leading-relaxed text-lg">
              “{t.text}”
            </p>

            <div className="border-t border-gray-800 mt-8 pt-6 flex items-center gap-4">

              <img
                src={t.img}
                alt={t.name}
                className="h-10 w-10 rounded-full"
              />

              <div>
                <p className="text-white font-medium">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* STATS CARD */}

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-[65%] bg-[#0b0b0b] border border-gray-800 rounded-[50px] py-12 flex justify-around"
      >

        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">

            <div className="flex items-center gap-2 text-5xl font-bold">

              {s.value}

              {s.icon && (
                <Star size={36} className="text-white fill-white" />
              )}

            </div>

            <p className="text-gray-500 text-sm mt-2 tracking-widest">
              {s.label}
            </p>

          </div>
        ))}

      </motion.div>

    </section>
  );
};

export default SuccessStorieOfCohort;