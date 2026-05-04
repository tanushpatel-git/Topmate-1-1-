import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function WebLink() {
    const [url, setUrl] = useState("");
    const [getDetail, setGetDetail] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    return (
        <div className="w-full max-w-5xl h-[420px] flex rounded-3xl overflow-hidden bg-white">

            {/* LEFT PANEL */}
            <div className="w-1/2 bg-gradient-to-br from-orange-200 to-yellow-100 p-6 flex flex-col gap-6">

                {/* Preview Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-1 flex items-center"
                >
                    <div className="w-full bg-gray-100 rounded-3xl p-8 flex items-center justify-between shadow">

                        <p className="text-gray-600 text-lg">
                            {url ? url : "Add link..."}
                        </p>

                        <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center">
                            <ExternalLink size={40} />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-1/2 bg-gray-100 p-8 flex flex-col justify-between">

                <div>
                    {/* Title */}
                    <h2 className="text-4xl font-semibold text-gray-800 mb-8">
                        Highlight a link
                    </h2>

                    {/* URL Input */}
                    <div>
                        <label className="block text-gray-700 mb-2">
                            URL
                        </label>

                        <div className="flex items-center bg-gray-200 border border-gray-300 rounded-xl overflow-hidden">
                            <input
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Link"
                                className="flex-1 p-2 bg-transparent outline-none"
                            />

                            <button onClick={() => setGetDetail(!getDetail)} className="bg-black text-white cursor-pointer justify-center items-center flex p-2 m-1 rounded-lg">
                                <span className="text-center">{getDetail ? "Back" : "Get details"}</span>
                            </button>
                        </div>
                    </div>

                    {getDetail && (
                        <div className="mt-5 flex items-center bg-gray-200 border border-gray-300 rounded-xl overflow-hidden ">
                            <input
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="Paste the url of image u want to add"
                                className="flex-1 p-2 bg-transparent outline-none"
                            />
                        </div>
                    )}
                </div>

                {/* Bottom Button */}
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    disabled={!url}
                    className={`w-full py-4 rounded-xl text-lg font-medium transition ${url
                            ? "bg-black text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    Add Highlight
                </motion.button>
            </div>
        </div>
    );
}