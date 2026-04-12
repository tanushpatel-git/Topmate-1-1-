import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "1:1 Mentoring",
    desc: "Career transitions, PM strategy calls, portfolio reviews",
    price: "₹2,000–8,000/session",
  },
  {
    title: "Mock Interviews",
    desc: "PM mock rounds (product sense, analytical, strategy)",
    price: "₹1,500–5,000/session",
  },
  {
    title: "Courses",
    desc: "'Break Into PM', 'Advanced Product Strategy', 'APM Interview Prep'",
    price: "₹2,000–15,000",
  },
  {
    title: "Cohorts",
    desc: "4-week 'PM Bootcamp' with live sessions + assignments",
    price: "₹8,000–25,000/person",
  },
  {
    title: "Digital Products",
    desc: "PM case study templates, interview frameworks, resume templates",
    price: "₹200–2,000",
  },
  {
    title: "Priority Dm",
    desc: "Quick PM career questions, resume review async",
    price: "₹500–2,000",
  },
  {
    title: "Packages",
    desc: "'Complete PM Prep' : course + 3 mock interviews + templates",
    price: "₹15,000–40,000",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WhatYouCanOffer({desc}) {

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

  // const color = colors[colorTheme];
  
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold">
          What You Can Offer
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          {desc}
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg"
      >
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-semibold">Service Offerings</h3>
          <span className="text-green-400 text-sm bg-green-500/10 px-3 py-1 rounded-full">
            ● LIVE
          </span>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/10 pb-6"
            >
              <div>
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="text-gray-400 text-sm mt-1">
                  {service.desc}
                </p>
              </div>

              <div className="mt-4 md:mt-0">
                <span className="px-4 py-2 rounded-full bg-white/10 text-sm border border-white/10">
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
