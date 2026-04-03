import React from "react";
import Navbar from "../components/commonCompo/Navbar";
import TopOfCohortFeatures from "../components/ui/TopOfProductFeatures";
import ProductManagementCard from "../components/cohortPageComponent/ProductManagementCard";
import CohortLearningDesc from "../components/cohortPageComponent/CohortLearningDesc";

const Cohort = () => {
    return (
        <>
            <Navbar />
            <TopOfCohortFeatures
                badge="Cohort Programs"
                title="Bundle Your Expertise Into a Premium Cohort"
                description="Turn your webinars into a multi-week program. One price, live sessions, and peer accountability — cohorts sell for 3–10× more than standalone webinars. Recordings become your course library."
                button1="Create Cohort Free"
                button2="See Examples"
            />
            <ProductManagementCard />
            <CohortLearningDesc />
        </>
    );
};

export default Cohort;