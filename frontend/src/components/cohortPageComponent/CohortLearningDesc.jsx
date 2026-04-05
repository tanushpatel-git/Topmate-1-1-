import React, { useRef } from "react";
import { Play, Users, MessageSquare, Trophy } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CohortLearningDesc() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 20%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] py-20">

      <div className="max-w-6xl w-full flex items-center justify-between gap-20">

        {/* LEFT CONTENT */}
        <div className="w-[50%] flex flex-col gap-8">

          <div className="px-5 py-2 rounded-full bg-gray-200 border border-gray-300 text-gray-700 w-fit">
            <p className="text-sm font-semibold uppercase tracking-wide">
              Cohort Learning
            </p>
          </div>

          <h1 className="font-bold text-5xl leading-tight">
            Why cohorts outsell standalone webinars
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            A single webinar is one ticket. A cohort is a full program —
            same expertise, live sessions, and a fixed group moving together.
            That structure justifies premium pricing (₹10K–₹75K per person)
            and drives higher completion.
          </p>

        </div>

        {/* RIGHT CARD */}
        <div
          ref={ref}
          className="w-[360px] bg-white rounded-3xl shadow-xl p-10 relative"
        >

          {/* Floating stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="absolute -right-10 -top-10 bg-black text-white rounded-xl p-5 shadow-xl"
          >
            <div className="flex items-center gap-2 text-xs text-gray-400 uppercase">
              <div className="h-2 w-2 bg-green-400 rounded-full"></div>
              Active Learning
            </div>

            <p className="text-lg font-bold">3x Higher</p>
            <p className="text-lg font-bold">Completion</p>
          </motion.div>


          {/* Timeline */}
          <div className="relative flex flex-col gap-12">

            {/* background line */}
            <div className="absolute left-6 top-2 bottom-2 w-[3px] bg-gray-200 rounded-full" />

            {/* animated line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-6 top-2 w-[3px] bg-gray-500 rounded-full origin-top"
            />

            {/* Step */}
            {[
              { icon: <Users size={18} />, text: "Onboarding" },
              { icon: <Play size={18} />, text: "Live Sessions" },
              { icon: <MessageSquare size={18} />, text: "Community" },
              { icon: <Trophy size={18} />, text: "Graduation" }
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-5"
              >

                <div className="w-12 h-12 z-10 rounded-full bg-gray-100 flex items-center justify-center border">
                  {item.icon}
                </div>

                <h3 className="text-lg font-medium">
                  {item.text}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}