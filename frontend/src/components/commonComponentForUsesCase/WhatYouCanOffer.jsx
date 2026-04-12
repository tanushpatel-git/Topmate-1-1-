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

export default function WhatYouCanOffer() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold">
          What You Can Offer
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Service types mapped to the Product Management domain
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
