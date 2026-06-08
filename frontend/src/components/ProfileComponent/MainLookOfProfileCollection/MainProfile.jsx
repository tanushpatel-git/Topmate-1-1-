import React from "react";
import LeftSideVeiw from "./LeftSideVeiw";
import RightSideView from "./RightSideView";

const MainProfile = ({ view, onEditHighlight }) => {
    if (view === "mobile") {
        return (
            <div className="flex justify-center items-start py-10 bg-[#EFECE3] min-h-[91vh] overflow-auto">
                <div className="w-[375px] rounded-3xl shadow-xl overflow-hidden">
                    <div className="p-5">
                        <LeftSideVeiw mobile />
                    </div>
                    <div className="p-5 bg-[#EFECE3]">
                        <RightSideView mobile onEditHighlight={onEditHighlight} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full flex h-[94vh]">
            <LeftSideVeiw />
            <RightSideView onEditHighlight={onEditHighlight} />
        </div>
    );
};

export default MainProfile;