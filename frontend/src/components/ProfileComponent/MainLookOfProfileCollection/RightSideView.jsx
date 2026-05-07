import React from "react";
import badge_recommendation from "../../../assets/badge-recommendation.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import give_charity_icon from "../../../assets/give-charity.2efae26c.svg";
import discount_highlight from "../../../assets/discount-highlight.png";
import { ExternalLink } from "lucide-react";

const RightSideView = () => {

    const { recomdation, aboutYourself, offer, donation, highlightLink, testimonial } = useSelector((state) => state.userProfile);

    return (
        <div className="h-[91vh] absolute right-1 top-19 w-[52.3%] bg-[#EFECE3]">
            <div className="w-full pt-5 pl-10">
                {recomdation.recomdationText && recomdation.from && (
                    <div className="w-100 h-40 flex flex-col bg-white rounded-2xl">
                        <h1 className="p-2 text-black text-md">{recomdation.recomdationText}</h1>
                        <div className="flex justify-between items-center">
                            <h1 className="p-2 text-black text-md">from {recomdation.from}</h1>
                            <img className="pr-5" src={badge_recommendation} alt="error" />
                        </div>
                    </div>
                )}
                {highlightLink.url && (<div
                    className="flex-1 flex items-center"
                >
                    <div className="w-[30vw] bg-gray-100 rounded-3xl p-8 flex items-center justify-between shadow">

                        <p className="text-gray-600 text-lg">
                            {highlightLink.url}
                        </p>

                        <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center">
                            {highlightLink?.imageUrl ? <img className="w-full h-full" src={highlightLink.imageUrl} alt="loading..." /> : <ExternalLink size={40} />}
                        </div>
                    </div>
                </div>)}
                {testimonial.testimonialText && testimonial.from && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex-1 flex items-center"
                    >
                        <div className="w-[30vw] bg-gray-100 rounded-3xl p-6 shadow flex flex-col justify-center gap-4">

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
                    className="flex-1 flex items-center"
                >
                    <div className="w-[30vw] bg-gray-100 rounded-3xl p-6 flex items-center justify-between shadow">

                        <p className="text-gray-700 text-lg leading-snug">
                            {donation}
                        </p>

                        <img
                            src={give_charity_icon}
                            alt="Give Charity Icon"
                            className="w-20 h-20 rounded-xl"
                        />
                    </div>
                </motion.div>)}
                {offer && (<motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-1 flex items-center"
                >
                    <div className="w-[30vw] bg-gray-100 rounded-3xl p-6 flex items-center justify-between shadow">

                        <p className="text-gray-700 text-lg">
                            {offer}
                        </p>

                        <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                            <img src={discount_highlight} alt="loading..." />
                        </div>
                    </div>
                </motion.div>)}
                {aboutYourself && <>
                    <div className="mt-5">
                        <div className="w-full flex flex-col">
                            <h1 className="text-4xl font-bold">About me</h1>
                            <p className="pt-2 text-xl text-black">{aboutYourself}</p>
                        </div>
                    </div>
                    <div className="mt-5 h-px w-[95%] bg-gray-400" />
                    <div className="flex gap-3">
                        <Link>Term</Link>
                        <span>|</span>
                        <Link>Privacy</Link>
                    </div>
                </>}
            </div>
        </div >
    );
};

export default RightSideView;