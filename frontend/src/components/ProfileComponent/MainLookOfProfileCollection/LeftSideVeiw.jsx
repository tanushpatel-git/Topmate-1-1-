import React from "react";
import topmate_light_logo from "../../../assets/topmate-light-logo.svg"
import { Link } from "react-router-dom";

const LeftSideVeiw = () => {
    return (
        <div className="bg-[#d9534f] absolute top-19 h-[91vh] w-[30%]">
            <div className="ml-10">
                <img className="mt-10 w-30 h-30 rounded-full overflow-hidden" src="https://topmate.io/cdn-cgi/image/width=640,quality=90/https://static.topmate.io/hx96Mufeu9YdiLZqySeJeU.png" alt="error" />
                <h1 className="mt-5 text-black text-4xl font-bold">Tanush Patel</h1>
                <div className="w-[80%] mt-2"><p className="mt-2 text-black text-2xl font-medium">Software Developer | Web Designer</p></div>
            </div>
            {1 && <div className="ml-10 w-[80%]"><p className="mt-2 text-black text-xl font-medium">Badges : <span className="text-gray-500 text-xl font-medium">No badges</span></p></div>}
            <div className="absolute left-5 bottom-5 w-full flex justify-between">
                <Link to="/" className="flex justify-center items-center h-15">
                    <img src={topmate_light_logo} alt="error" />
                </Link>
                <button className="mr-10 w-40 h-15 rounded-2xl bg-black text-white text-xl font-medium">Start your page</button>
            </div>
        </div>
    );
};

export default LeftSideVeiw;