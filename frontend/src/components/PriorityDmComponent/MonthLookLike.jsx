import { motion } from "framer-motion"
import { User, Monitor, Briefcase, TrendingUp } from "lucide-react"

export default function MonthLookLike() {

  const cards = [
    {
      icon: User,
      title: "Career Coach",
      volume: "40 résumé reviews/month",
      price: "₹1,500 each",
      total: "₹60,000/month"
    },
    {
      icon: Monitor,
      title: "Design Reviewer",
      volume: "15 portfolio reviews/month",
      price: "₹5,000 each",
      total: "₹75,000/month"
    },
    {
      icon: Briefcase,
      title: "Business Consultant",
      volume: "25 queries/month",
      price: "₹3,000 each",
      total: "₹75,000/month"
    }
  ]

  return (
    <section className="bg-black text-white py-28 px-6 -mt-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold">
            What ₹60K–₹75K/month looks like
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            See how much you can earn without adding a single hour to your calendar.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {cards.map((card, i) => {
            const Icon = card.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-8"
              >

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#111827] text-blue-400">
                    <Icon size={22}/>
                  </div>

                  <h3 className="text-xl font-semibold">
                    {card.title}
                  </h3>

                </div>


                {/* Stats */}
                <div className="space-y-4 text-sm text-gray-400">

                  <div className="flex justify-between">
                    <span>Est. Volume</span>
                    <span className="text-white font-medium">
                      {card.volume}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Unit Price</span>
                    <span className="text-white font-medium">
                      {card.price}
                    </span>
                  </div>

                </div>


                <div className="border-t border-gray-800 my-8" />


                {/* Monthly Potential */}
                <div>
                  <p className="text-xs tracking-widest text-gray-500 mb-3">
                    MONTHLY POTENTIAL
                  </p>

                  <h2 className="text-3xl font-bold">
                    {card.total}
                  </h2>
                </div>

              </motion.div>
            )
          })}

        </div>


        {/* Tip */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:0.4 }}
          className="flex justify-center mt-16"
        >

          <div className="flex items-center gap-3 bg-[#0b1220] border border-blue-900 text-blue-300 px-6 py-3 rounded-full text-sm">

            <TrendingUp size={18}/>

            <span>
              Pro Tip: Bundle Priority DM with a course for higher lifetime value.
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  )
}