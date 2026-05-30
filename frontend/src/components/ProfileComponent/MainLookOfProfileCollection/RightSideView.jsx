import { useState } from "react";
import badge_recommendation from "../../../assets/badge-recommendation.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import give_charity_icon from "../../../assets/give-charity.2efae26c.svg";
import discount_highlight from "../../../assets/discount-highlight.png";
import { ExternalLink } from "lucide-react";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const RightSideView = ({ mobile }) => {

    const navigate = useNavigate();
    const [activeSeriveTab, setActiveServiceTab] = useState("All");
    const { recomdation, aboutYourself, offer, donation, highlightLink, testimonial, services: servicesOfUserInFrontEnd } = useSelector((state) => state.userProfile);

    return (
        <div className={mobile ? "" : "h-[91vh] absolute right-0 overflow-auto top-19 w-[53%] bg-[#EFECE3]"}>
            <div className={mobile ? "w-full" : "w-full pt-5 pl-10"}>
                {recomdation.recomdationText && recomdation.from && (
                    <div className={mobile ? "w-full h-40 flex flex-col bg-white rounded-2xl" : "w-100 h-40 flex flex-col bg-white rounded-2xl"}>
                        <h1 className="p-2 text-black text-md">{recomdation.recomdationText}</h1>
                        <div className="flex justify-between items-center">
                            <h1 className="p-2 text-black text-md">from {recomdation.from}</h1>
                            <img className="pr-5" src={badge_recommendation} alt="error" />
                        </div>
                    </div>
                )}
                <div className="mt-5">
                    {servicesOfUserInFrontEnd && servicesOfUserInFrontEnd.length > 0 && (
                        <div className="flex gap-3 items-center flex-wrap">
                            <button onClick={
                                () => {
                                    if (activeSeriveTab == "All") {
                                        return;
                                    }
                                    setActiveServiceTab("All");
                                }
                            } className={activeSeriveTab == "All" ? "w-25 h-13 bg-black rounded-2xl text-white font-medium cursor-pointer" : "w-25 h-13 rounded-2xl bg-transparent border border-gray-400 text-black font-medium cursor-pointer"}>All</button>
                            {servicesOfUserInFrontEnd?.some(s => s.category === "one-to-one") && (
                                <button onClick={
                                    () => {
                                        if (activeSeriveTab == "1:1") {
                                            return;
                                        }
                                        setActiveServiceTab("1:1");
                                    }
                                } className={activeSeriveTab == "1:1" ? "w-25 h-13 bg-black rounded-2xl text-white font-medium" : "w-25 h-13 rounded-2xl bg-transparent border border-gray-400 text-black font-medium"}>1:1</button>
                            )}
                            {servicesOfUserInFrontEnd?.some(s => s.category === "corhort") && (
                                <button onClick={
                                    () => {
                                        if (activeSeriveTab == "Corhort") {
                                            return;
                                        }
                                        toast("Cohorts coming soon!", { icon: "🚧" });
                                        navigate("/upcoming", { state: { type: "cohort" } });
                                    }
                                } className={activeSeriveTab == "Corhort" ? "w-25 h-13 bg-black rounded-2xl text-white font-medium" : "w-25 h-13 rounded-2xl bg-transparent border border-gray-400 text-black font-medium"}>Corhort</button>
                            )}
                            {servicesOfUserInFrontEnd?.some(s => s.category === "webinar") && (
                                <button onClick={
                                    () => {
                                        if (activeSeriveTab == "Webinar") {
                                            return;
                                        }
                                        setActiveServiceTab("Webinar");
                                    }
                                } className={activeSeriveTab == "Webinar" ? "w-25 h-13 bg-black rounded-2xl text-white font-medium" : "w-25 h-13 rounded-2xl bg-transparent border border-gray-400 text-black font-medium"}>Webinar</button>
                            )}
                            {servicesOfUserInFrontEnd?.some(s => s.category === "priorityDm") && (
                                <button onClick={
                                    () => {
                                        if (activeSeriveTab == "Priority DM") {
                                            return;
                                        }
                                        setActiveServiceTab("Priority DM");
                                    }
                                } className={activeSeriveTab == "Priority DM" ? "w-25 h-13 bg-black rounded-2xl text-white font-medium" : "w-25 h-13 rounded-2xl bg-transparent border border-gray-400 text-black font-medium"}>Priority DM</button>
                            )}
                        </div>
                    )}
                    <div className={mobile ? "grid grid-cols-1 gap-3" : "grid grid-cols-2 gap-3 items-center"}>
                        {servicesOfUserInFrontEnd && servicesOfUserInFrontEnd?.filter((service) => {
                            if (activeSeriveTab === "All") return true;
                            if (activeSeriveTab === "1:1") return service.category === "one-to-one";
                            if (activeSeriveTab === "Corhort") return service.category === "corhort";
                            if (activeSeriveTab === "Webinar") return service.category === "webinar";
                            if (activeSeriveTab === "Priority DM") return service.category === "priorityDm";
                            return true;
                        }).map((service) => (
                            <motion.div
                                key={service?._id}
                                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                whileHover={{ y: -4 }}
                                className="w-[360px] mt-5 h-50 rounded-[32px] bg-[#f4f4f4] border border-gray-200 overflow-hidden shadow-sm"
                            >
                                {/* Top Section */}
                                <div className="relative px-4 pt-10 pb-12">

                                    <p className="text-md text-gray-600 font-medium leading-none">
                                        {service?.category}
                                    </p>

                                    <h1 className="mt-2 text-xl font-bold tracking-tight text-black leading-none">
                                        {service?.title}
                                    </h1>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-300" />

                                {/* Bottom Section */}
                                <div className="flex items-center justify-between py-2 px-4">
                                    <span className="text-md font-bold tracking-tight text-black">
                                        {service?.price}
                                    </span>

                                    <motion.button
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.92 }}
                                        className="h-10 w-10 rounded-full bg-[#2f2f2f] flex items-center justify-center shadow-md"
                                        onClick={() => {
                                            if (service?.category === "corhort") {
                                                toast("Cohorts coming soon!", { icon: "🚧" });
                                                navigate("/upcoming", { state: { type: "cohort" } });
                                            } else if (service?.category === "webinar") {
                                                toast("Webinars coming soon!", { icon: "🚧" });
                                                navigate("/upcoming", { state: { type: "webinar" } });
                                            }
                                        }}
                                    >
                                        <ArrowRight className="text-white w-8 h-8" strokeWidth={1.5} />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {highlightLink.url && (<div
                    className="flex-1 mt-5 flex items-center"
                >
                    <div className={mobile ? "w-full bg-gray-100 rounded-3xl p-8 flex items-center justify-between shadow" : "w-[30vw] bg-gray-100 rounded-3xl p-8 flex items-center justify-between shadow"}>

                        <p className="text-gray-600 text-lg">
                            {highlightLink.url}
                        </p>

                        <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center shrink-0">
                            {highlightLink?.imageUrl ? <img className="w-full h-full" src={highlightLink.imageUrl} alt="loading..." /> : <ExternalLink size={40} />}
                        </div>
                    </div>
                </div>)}
                {testimonial.testimonialText && testimonial.from && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex-1 flex mt-5 items-center"
                    >
                        <div className={mobile ? "w-full bg-gray-100 rounded-3xl p-6 shadow flex flex-col justify-center gap-4" : "w-[30vw] bg-gray-100 rounded-3xl p-6 shadow flex flex-col justify-center gap-4"}>

                            <Quote size={28} className="text-gray-400" />

                            <p className="text-gray-700 text-lg leading-relaxed">
                                {testimonial?.testimonialText}
                            </p>

                            {testimonial.from && (
                                <p className="text-sm text-gray-500">
                                    — {testimonial?.from}
                                </p>
                            )}
                        </div>
                    </motion.div>
                )}
                {donation && (<motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-1 flex mt-5 items-center"
                >
                    <div className={mobile ? "w-full bg-gray-100 rounded-3xl p-6 flex items-center justify-between shadow" : "w-[30vw] bg-gray-100 rounded-3xl p-6 flex items-center justify-between shadow"}>

                        <p className="text-gray-700 text-lg leading-snug">
                            {donation}
                        </p>

                        <img
                            src={give_charity_icon}
                            alt="Give Charity Icon"
                            className="w-20 h-20 rounded-xl shrink-0"
                        />
                    </div>
                </motion.div>)}
                {offer && (<motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-1 flex mt-5 items-center"
                >
                    <div className={mobile ? "w-full bg-gray-100 rounded-3xl p-6 flex items-center justify-between shadow" : "w-[30vw] bg-gray-100 rounded-3xl p-6 flex items-center justify-between shadow"}>

                        <p className="text-gray-700 text-lg">
                            {offer}
                        </p>

                        <div className="w-20 h-20 rounded-xl flex items-center justify-center shrink-0">
                            <img src={discount_highlight} alt="loading..." />
                        </div>
                    </div>
                </motion.div>)}
                {aboutYourself && <div className="mt-5 mb-5">

                    <div className="w-full flex flex-col">
                        <h1 className="text-4xl font-bold">About me</h1>
                        <p className="pt-2 text-xl text-black">{aboutYourself}</p>
                    </div>

                </div>}
                <div className="mt-5 h-px w-[95%] bg-gray-400" />
                <div className="flex gap-3">
                    <Link>Term</Link>
                    <span>|</span>
                    <Link>Privacy</Link>
                </div>
            </div>
        </div >
    );
};

export default RightSideView;


//todo:
// improve seo
// add filter 
// add filter for buttom tabs
