import { useState } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { X, GripVertical } from "lucide-react";

export default function ArrangmentOfServicePrice({ isOpen, onClose }) {
    const [orderType, setOrderType] = useState("low-high");

    const [services, setServices] = useState([
        { id: 1, title: "15 mins video call", subtitle: "Video Call", price: 199 },
        { id: 2, title: "30 mins consultation", subtitle: "Consultation", price: 399 },
        { id: 3, title: "1 hour mentoring", subtitle: "Mentorship", price: 999 }
    ]);

    const sortServices = (type) => {
        setOrderType(type);
        const sorted = [...services].sort((a, b) =>
            type === "low-high" ? a.price - b.price : b.price - a.price
        );
        setServices(sorted);
    };

    return (
        <div className="flex  items-center justify-center h-screen bg-gray-100">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="w-[640px] bg-white rounded-2xl shadow-xl p-6"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-semibold">Reorder services</h2>
                                    <p className="text-gray-500 text-sm">
                                        Define how you want your services to be seen on your page
                                    </p>
                                </div>
                                <button onClick={onClose}>
                                    <X />
                                </button>
                            </div>

                            {/* Order Toggle */}
                            <div className="mb-6">
                                <p className="font-medium mb-3">Order Services by</p>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => sortServices("low-high")}
                                        className={`px-4 py-2 rounded-xl border ${orderType === "low-high"
                                            ? "border-black"
                                            : "border-gray-300"
                                            }`}
                                    >
                                        Price: Low to High
                                    </button>

                                    <button
                                        onClick={() => sortServices("high-low")}
                                        className={`px-4 py-2 rounded-xl border ${orderType === "high-low"
                                            ? "border-black"
                                            : "border-gray-300"
                                            }`}
                                    >
                                        High to Low
                                    </button>
                                </div>
                            </div>

                            {/* Drag List */}
                            <div className="mb-6">
                                <p className="font-medium mb-3">
                                    Drag and Drop to re-arrange services
                                </p>

                                <Reorder.Group
                                    axis="y"
                                    values={services}
                                    onReorder={setServices}
                                    className="space-y-3"
                                >
                                    {services.map((item) => (
                                        <Reorder.Item
                                            key={item.id}
                                            value={item}
                                            className="flex items-center justify-between p-4 border rounded-xl bg-white"
                                        >
                                            <div>
                                                <p className="font-medium">{item.title}</p>
                                                <p className="text-sm text-gray-500">
                                                    {item.subtitle}
                                                </p>
                                            </div>

                                            <GripVertical className="text-gray-400" />
                                        </Reorder.Item>
                                    ))}
                                </Reorder.Group>
                            </div>

                            {/* Save */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-black text-white py-3 rounded-xl"
                            >
                                Save
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
