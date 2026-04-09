import { motion } from "framer-motion"
import { FileText, LayoutGrid, Search, PenLine } from "lucide-react"

export default function CreatorsChargeAdvice() {

    const cards = [
        {
            icon: FileText,
            title: "Résumé Review",
            price: "₹500–₹2,000",
            desc: "Client submits their CV. You provide written or recorded feedback."
        },
        {
            icon: LayoutGrid,
            title: "Portfolio Review",
            price: "₹2,000–₹10,000",
            desc: "Designers, developers, and writers submit work. You review and annotate."
        },
        {
            icon: Search,
            title: "Quick Consulting",
            price: "₹1,000–₹5,000",
            desc: "Specific business or technical question. Detailed written answer."
        },
        {
            icon: PenLine,
            title: "Content Feedback",
            price: "₹1,000–₹3,000",
            desc: "Review a blog post, LinkedIn strategy, or pitch deck."
        }
    ]

    return (
        <section className="w-full bg-[#f5f5f5] py-24 px-6">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-black">
                    What creators charge for async advice
                </h1>

                <p className="text-gray-500 mt-4 text-lg">
                    Set your price per query and respond when you have the focus.
                </p>
            </motion.div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                {cards.map((card, i) => {
                    const Icon = card.icon

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition"
                        >

                            {/* Icon */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                                <Icon size={24} />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-black mb-3">
                                {card.title}
                            </h3>

                            {/* Price */}
                            <div className="inline-block bg-black text-white text-sm px-4 py-1 rounded-full mb-4">
                                {card.price}
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {card.desc}
                            </p>

                        </motion.div>
                    )
                })}

            </div>

        </section>
    )
}