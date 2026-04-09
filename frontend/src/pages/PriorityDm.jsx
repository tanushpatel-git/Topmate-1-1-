import React from "react";
import Navbar from "../components/commonCompo/Navbar";
import Footer from "../components/commonCompo/Footer";
import TopOccurSectionOfPriorityDm from "../components/PriorityDmComponent/TopOccurSectionOfPriorityDm";
import CreatorsChargeAdvice from "../components/PriorityDmComponent/CreatorsChargeAdvice";
import PriorityDmWork from "../components/PriorityDmComponent/PriorityDmWork";
import MovingPriorityDm from "../components/PriorityDmComponent/MovingPriorityDm";

const PriorityDm = () => {
    return (
        <>
            <Navbar />
            <TopOccurSectionOfPriorityDm />
            <CreatorsChargeAdvice />
            <PriorityDmWork />
            <MovingPriorityDm />
            <Footer />
        </>
    );
};

export default PriorityDm;