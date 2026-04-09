import { motion } from "framer-motion"

export default function PriorityDMWork() {

  const steps = [
    {
      number: "01",
      title: "Set your price",
      desc: "Decide what you charge per query. Set a response time (e.g., 48 hours)."
    },
    {
      number: "02",
      title: "Client pays and submits",
      desc: "Client checks out, adds their question, and uploads any files (CV, portfolio, etc.)."
    },
    {
      number: "03",
      title: "You respond on your timeline",
      desc: "Reply in text, attach a document, record a Loom, or voice note."
    },
    {
      number: "04",
      title: "Client receives your response",
      desc: "Client gets notified by email and WhatsApp. The response is saved in their dashboard."
    }
  ]

  return (
    <section className="bg-[#f5f5f5] py-24 px-6">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold text-black">
          How Priority DM Works
        </h1>

        <p className="text-gray-500 text-lg mt-4">
          From payment to response, here's how it works.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto relative">

        {/* Line */}
        <div className="absolute top-6 left-0 w-full h-[2px] bg-gray-200" />

        <div className="grid md:grid-cols-4 gap-10 relative">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-left"
            >

              {/* Circle */}
              <div className="w-12 h-12 rounded-full border-2 border-blue-400 bg-white flex items-center justify-center text-blue-600 font-semibold mb-6">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed">
                {step.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}