import React from "react";
import { Tag, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const CohortStructures = () => {

  const cohortExamples = [
    {
      example: "Example 01",
      title: "Zero to Product Manager",
      price: "₹25,000/person · 30 seats",
      sessions: "6 weekly sessions",
      revenue: "₹7.5L / RUN",
    },
    {
      example: "Example 02",
      title: "Instagram Growth for Creators",
      price: "₹12,000/person · 50 seats",
      sessions: "4 weekly sessions",
      revenue: "₹6L / RUN",
    },
    {
      example: "Example 03",
      title: "Full-Stack Dev Bootcamp",
      price: "₹49,000/person · 20 seats",
      sessions: "8 weekly sessions",
      revenue: "₹9.8L / RUN",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#F3F3F1] flex flex-col items-center py-32">

      {/* HEADER */}

      <div className="flex flex-col items-center gap-4 mb-20 text-center">

        <h1 className="text-6xl font-bold text-black">
          High-converting cohort structures
        </h1>

        <p className="text-gray-500 text-lg max-w-2xl">
          See how top experts structure their multi-week programs
          for maximum impact.
        </p>

      </div>

      {/* CARDS */}

      <div className="grid grid-cols-3 gap-10 w-[80%]">

        {cohortExamples.map((item, i) => (

          <motion.div
            key={i}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: false }}
            className="bg-white border border-gray-200 rounded-3xl p-10 flex flex-col justify-between"
          >

            {/* TOP */}

            <div>

              <div className="mb-6">
                <span className="bg-gray-100 text-gray-500 text-sm px-4 py-2 rounded-full">
                  {item.example}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-black mb-8">
                {item.title}
              </h3>

              {/* DETAILS */}

              <div className="flex flex-col gap-5 text-gray-600">

                <div className="flex items-center gap-3">
                  <Tag size={18} />
                  <p>{item.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={18} />
                  <p>{item.sessions}</p>
                </div>

              </div>

            </div>

            {/* BOTTOM */}

            <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between items-center">

              <p className="text-gray-400 tracking-wider text-sm">
                REVENUE POTENTIAL:
              </p>

              <p className="text-green-600 font-semibold">
                {item.revenue}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default CohortStructures;