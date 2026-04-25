import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExpertise, setLinkedInUrl, setTwitterUrl, setInstagramUrl, setUserName } from "../redux/signUp/signUpSlice";
import SignUpNavbar from "../components/commonCompo/SignUpNavbar";
import { useNavigate } from "react-router-dom";

const expertiseList = [
    "Cybersecurity",
    "Law",
    "Content & Branding",
    "Others",
    "HR",
    "Software",
    "Product",
    "Study Abroad",
    "Finance",
    "Design",
    "Data",
    "Astrology",
    "Mental Health & Wellbeing",
    "Marketing",
];


export default function SignUp2() {

    const [errors, setErrors] = useState({});
    const { firstName, lastName } = useSelector((state) => state.signUp)
    const [topmateUsername, setTopmateUsername] = useState("")
    const dispatch = useDispatch();
    const [selected, setSelected] = useState([]);
    const [topmateLink, setTopmateLink] = useState("");
    const navigate = useNavigate();

    const toggle = (item) => {
        setSelected((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    useEffect(() => {
        setTopmateUsername(`${firstName}_${lastName}`);
    }, [firstName, lastName]);

    const validateForm = () => {
        let newErrors = {};

        if (!topmateUsername) {
            newErrors.topmate = "Topmate username required";
        }

        if (selected.length === 0) {
            newErrors.expertise = "Select at least one expertise";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateForm()) {
            dispatch(setUserName(topmateUsername));
            navigate("/signup3");
        }
    };

    useEffect(() => {
        dispatch(setExpertise(selected));
    }, [selected])

    const getPlatform = (url) => {
        if (/linkedin\.com/i.test(url)) return "linkedin";
        if (/twitter\.com|x\.com/i.test(url)) return "twitter";
        if (/instagram\.com/i.test(url)) return "instagram";
        return null;
    };

    useEffect(() => {

        const platform = getPlatform(topmateLink);

        if (platform === "linkedin") {
            dispatch(setLinkedInUrl(topmateLink));
        }

        if (platform === "twitter") {
            dispatch(setTwitterUrl(topmateLink));
        }

        if (platform === "instagram") {
            dispatch(setInstagramUrl(topmateLink));
        }

    }, [topmateLink]);

    return (
        <div className="min-h-screen bg-[#f7f7f7] flex flex-col">

            {/* Navbar */}
            <SignUpNavbar currentStep={2} />

            {/* Main */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-1 justify-center px-4 sm:px-6 mt-8 sm:mt-10"
            >
                <div className="w-full max-w-lg">

                    <h1 className="text-xl sm:text-2xl font-semibold mb-1">
                        Hello there!
                    </h1>

                    <p className="text-gray-500 mb-6 sm:mb-8 text-sm">
                        In a few moments you will be ready to share your expertise & time
                    </p>

                    {/* Social Link */}
                    <div className="mb-5">
                        <label className="text-sm font-medium mb-2 block">
                            Connect your social account
                            <span className="text-gray-500 text-xs ml-1">(optional)</span>
                        </label>

                        <input
                            value={topmateLink}
                            onChange={(e) => setTopmateLink(e.target.value)}
                            placeholder="https:// LinkedIn, Twitter, Instagram"
                            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
                        />
                    </div>

                    {/* Username */}
                    <div className="mb-5">
                        <label className="text-sm font-medium mb-2 block">
                            Your topmate page link
                        </label>

                        <div className="flex items-center border rounded-md overflow-hidden">
                            <span className="px-2 sm:px-3 text-xs sm:text-sm text-gray-500 bg-gray-50">
                                topmate.io/
                            </span>

                            <input
                                value={topmateUsername}
                                onChange={(e) => setTopmateUsername(e.target.value)}
                                className="flex-1 px-2 py-2 text-sm outline-none"
                            />

                            <CheckCircle className="text-green-500 mr-2" size={18} />
                        </div>

                        {errors.topmate && (
                            <p className="text-red-500 text-xs mt-2">{errors.topmate}</p>
                        )}
                    </div>

                    {/* Country + Currency */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="text-sm font-medium mb-2 block">
                                Country
                            </label>

                            <select className="w-full border rounded-md px-3 py-2 text-sm">
                                <option>🇮🇳 India</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-2 block">
                                Currency
                            </label>

                            <select className="w-full border rounded-md px-3 py-2 text-sm">
                                <option>₹ (Indian Rupee)</option>
                            </select>
                        </div>
                    </div>

                    {/* Expertise */}
                    <div>
                        <label className="text-sm font-medium mb-3 block">
                            Select your expertise
                        </label>

                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {expertiseList.map((item) => {
                                const active = selected.includes(item);

                                return (
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        key={item}
                                        onClick={() => toggle(item)}
                                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm transition
                  ${active
                                                ? "bg-black text-white border-black"
                                                : "bg-white hover:bg-gray-100"
                                            }`}
                                    >
                                        {item}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {errors.expertise && (
                            <p className="text-red-500 text-xs mt-2">
                                {errors.expertise}
                            </p>
                        )}
                    </div>

                </div>
            </motion.div>

            {/* Bottom CTA */}
            <div className="border-t bg-white py-4 px-4 sm:px-6 flex flex-col sm:flex-row gap-3 justify-center items-center">

                <motion.button
                    onClick={() => navigate(-1)}
                    whileTap={{ scale: 0.96 }}
                    className="w-full sm:w-[120px] bg-gray-200 text-black py-2.5 rounded-md font-medium"
                >
                    Back
                </motion.button>

                <motion.button
                    onClick={handleNext}
                    whileTap={{ scale: 0.96 }}
                    className="w-full sm:w-[300px] bg-black text-white py-2.5 rounded-md font-medium"
                >
                    Next
                </motion.button>

            </div>

        </div>
    );
}