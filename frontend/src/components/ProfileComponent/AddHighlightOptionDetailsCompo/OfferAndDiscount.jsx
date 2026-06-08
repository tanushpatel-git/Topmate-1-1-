import { useState } from "react";
import { motion } from "framer-motion";
import discount_highlight from "../../../assets/discount-highlight.png";
import { useDispatch, useSelector } from "react-redux";
import { setOffer } from "../../../redux/userProfileDesign/profile";
import { updateProfileDesign } from "../../../services/userAuthServices/profileDesignService";

export default function OfferAndDiscount() {
    const { offer } = useSelector((state) => state.userProfile);
    const [offerText, setOfferText] = useState(offer || "");
    const [saving, setSaving] = useState(false);
    const dispatch = useDispatch();
    const isEditing = !!offer;

    const handleClick = async () => {
        dispatch(setOffer(offerText));
        setSaving(true);
        try {
            await updateProfileDesign({ offer: offerText });
        } catch (err) {
            console.error("Failed to save offer", err);
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="w-full max-w-5xl h-[420px] flex rounded-3xl overflow-hidden bg-white">

            {/* LEFT PANEL */}
            <div className="w-1/2 bg-gradient-to-br from-orange-200 to-yellow-100 p-5 flex flex-col gap-6">

                {/* Preview Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-1 flex items-center"
                >
                    <div className="w-full bg-gray-100 rounded-3xl p-6 flex items-center justify-between shadow">

                        <p className="text-gray-700 text-lg">
                            {offerText || "Add note..."}
                        </p>

                        <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                            <img src={discount_highlight} alt="loading..." />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-1/2 bg-gray-100 p-5 flex flex-col justify-between">
                <div className="space-y-5">
                    {/* Title */}
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Highlight offer/discount
                    </h2>
                    {/* Offer Input */}
                    <div>
                        <label className="block text-gray-700 mb-2">
                            Offer
                        </label>
                        <textarea
                            value={offerText}
                            onChange={(e) => setOfferText(e.target.value)}
                            placeholder="All services discounted for the week, go grab!"
                            className="w-full h-24 p-4 rounded-xl border border-gray-300 bg-gray-200 outline-none resize-none"
                        />
                    </div>
                </div>

                {/* Bottom Button */}
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    disabled={!offerText || saving}
                    onClick={handleClick}
                    className={`w-full py-4 rounded-xl text-lg font-medium transition ${offerText && !saving
                        ? "bg-black text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    {saving ? "Saving..." : isEditing ? "Update Highlight" : "Add Highlight"}
                </motion.button>
            </div>
        </div>
    );
}