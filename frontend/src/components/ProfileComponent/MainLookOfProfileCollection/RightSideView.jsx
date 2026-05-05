import React from "react";
import badge_recommendation from "../../../assets/badge-recommendation.svg"
import { Link } from "react-router-dom";

const RightSideView = () => {
    return (
        <div className="h-[91vh] absolute right-1 top-19 w-[52.3%] bg-[#EFECE3]">
            <div className="w-full pt-5 pl-10">
                <div className="w-100 h-40 flex flex-col bg-white rounded-2xl">
                    <h1 className="p-2 text-black text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt ab natus deserunt cum veniam delectus neque nobis labore, numquam pariatur, tenetur suscipit.</h1>
                    <div className="flex justify-between items-center">
                        <h1 className="p-2 text-black text-md">from 199/call</h1>
                        <img className="pr-5" src={badge_recommendation} alt="error" />
                    </div>
                </div>
                <div className="mt-5">
                    <div className="w-full flex flex-col rounded-2xl">
                        <h1 className="text-4xl font-bold">About me</h1>
                        <p className="pt-2 text-xl text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis magnam amet perferendis quasi atque voluptates voluptatibus aliquam modi sunt veniam esse iure maiores minus hic doloremque enim vero eligendi, nihil accusamus mollitia rerum sed inventore aspernatur doloribus! Soluta aperiam animi enim nostrum nisi totam pariatur.</p>
                    </div>
                </div>
                <div className="mt-5 h-px w-[95%] bg-gray-400" />
                <div className="flex gap-3">
                    <Link>Term</Link>
                    <span>|</span>
                    <Link>Privacy</Link>

                </div>
            </div>
        </div>
    );
};

export default RightSideView;