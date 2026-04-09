import React from "react";
import Navbar from "../components/commonCompo/Navbar";
import Footer from "../components/commonCompo/Footer";
import TopOccurSectionOfPriorityDm from "../components/PriorityDmComponent/TopOccurSectionOfPriorityDm";

const PriorityDm = () => {
    return (
        <>
            <Navbar />
            <TopOccurSectionOfPriorityDm />
            <Footer />
        </>
    );
};

export default PriorityDm;