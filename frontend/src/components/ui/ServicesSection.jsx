import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";




export default function ServicesSection({items=[]}) {
  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-gray-400 tracking-[0.3em] text-sm uppercase">
          Scale your business further
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group rounded-2xl border border-gray-800 bg-[#0a0a0a] p-10 h-40 flex flex-col justify-center items-start hover:border-gray-600 transition"
            >
              {/* Icon */}
              <div className="mb-6 text-gray-500 group-hover:text-white transition flex w-full justify-between items-center">
                <Icon size={28} strokeWidth={1.5} />
                <MoveUpRight  size={28}  strokeWidth={1.5} className="group-hover:translate-x-2 text-blue-400 transition opacity-0 group-hover:opacity-100" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-gray-400 group-hover:text-white transition">
                {item.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}