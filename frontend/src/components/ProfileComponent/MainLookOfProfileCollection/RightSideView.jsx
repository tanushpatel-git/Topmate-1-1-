import React from "react";
import badge_recommendation from "../../../assets/badge-recommendation.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RightSideView = () => {

    const { recomdation, aboutYourself } = useSelector((state) => state.userProfile);

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