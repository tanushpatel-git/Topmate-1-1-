import { motion } from "framer-motion"
import { CheckCircle, Shield } from "lucide-react"

export default function ControlAccess() {
  const features = [
    "Approve or decline incoming requests before responding",
    "Set a minimum quality bar for the types of questions you answer",
    "Decline and refund clients who don't meet your criteria",
    "Your response time is communicated upfront — no overcommitment"
  ]

  return (
    <section className="bg-[#f5f5f5] py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-14 shadow-sm border border-gray-200"
        >
          
          {/* Badge */}
          <div className="flex justify-end mb-8">
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-4 py-2 rounded-full">
              YOU'RE IN CONTROL
            </span>
          </div>

          {/* Shield */}
          <div className="flex justify-center mb-10">
            <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center">
              <Shield className="text-blue-500" size={36}/>
            </div>
          </div>

          {/* Request Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-gray-300 rounded-full"/>
              <div>
                <p className="font-semibold">New Request</p>
                <p className="text-sm text-gray-500">Résumé Review</p>
              </div>
            </div>

            <div className="flex gap-4">

              <button className="flex-1 border border-red-300 text-red-500 py-3 rounded-xl font-medium">
                Decline
              </button>

              <button className="flex-1 bg-black text-white py-3 rounded-xl font-medium">
                Approve
              </button>

            </div>

          </div>

        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-black leading-tight mb-10">
            You control who gets access
          </h2>

          <div className="space-y-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">

                <CheckCircle className="text-blue-500 mt-1" size={24} />

                <p className="text-lg text-gray-600">
                  {feature}
                </p>

              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}