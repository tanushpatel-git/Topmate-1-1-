import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

export default function MovingPriorityDm() {

  const rows = [
    {
      label: "Schedule required?",
      priority: "No",
      calls: "Yes"
    },
    {
      label: "When you respond",
      priority: "Your timeline (set SLA)",
      calls: "Fixed time slot"
    },
    {
      label: "Format",
      priority: "Text, doc, Loom, audio",
      calls: "Live video / phone"
    },
    {
      label: "Volume scalable?",
      priority: "Yes — 50+ queries/week",
      calls: "Limited by calendar"
    },
    {
      label: "Best for",
      priority: "Reviews, quick advice",
      calls: "Deep conversations"
    },
    {
      label: "Typical price",
      priority: "₹500–₹10,000",
      calls: "₹2,000–₹25,000+"
    }
  ]

  return (
    <section className="bg-black text-white py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-5xl font-bold leading-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Why experts are moving
            <br/>
            to Priority DM
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            1:1 calls are great for depth, but Priority DM is built for scale.
            No more calendar management or video fatigue.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* TABLE */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8"
          >

            {/* Header */}
            <div className="grid grid-cols-3 pb-4 border-b border-gray-800 text-sm text-gray-400">
              <div>CAPABILITY</div>
              <div className="text-blue-400 font-medium">PRIORITY DM</div>
              <div>1:1 CALLS</div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 py-5 border-b border-gray-900 text-sm"
              >
                <div className="text-gray-400">{row.label}</div>

                <div className="font-medium text-white">
                  {row.priority}
                </div>

                <div className="text-gray-500">
                  {row.calls}
                </div>
              </div>
            ))}

          </motion.div>


          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }}
            className="rounded-3xl p-10 bg-gradient-to-br from-[#0f172a] to-black border border-gray-800"
          >

            <TrendingUp className="text-blue-400 mb-6" size={30} />

            <h2 className="text-2xl font-semibold mb-4">
              The Scale Advantage
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              A typical creator can handle 5–8 calls a week before burnout.
              With Priority DM, you can respond to <span className="text-white font-semibold">50+ queries</span>
              in the same time, without ever opening Zoom.
            </p>

            <button className="bg-white text-black px-6 py-3 rounded-full font-medium">
              10x Efficiency Boost
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  )
}