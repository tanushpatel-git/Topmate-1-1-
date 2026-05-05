import React from "react";
import LeftSideVeiw from "./LeftSideVeiw";
import RightSideView from "./RightSideView";

const MainProfile = () => {
    return (
        <div className="w-full flex h-[94vh]">
            <LeftSideVeiw />
            <RightSideView />
        </div>
    );
};

export default MainProfile;