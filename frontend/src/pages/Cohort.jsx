import React from "react";
import Navbar from "../components/commonCompo/Navbar";
import TopOfCohortFeatures from "../components/ui/TopOfProductFeatures";
import ProductManagementCard from "../components/cohortPageComponent/ProductManagementCard";
import CohortLearningDesc from "../components/cohortPageComponent/CohortLearningDesc";
import UltimateRevenueDriver from "../components/cohortPageComponent/UltimateRevenueDriver";
import CohortStructures from "../components/cohortPageComponent/CohortStructures";
import CommunityAccess from "../components/cohortPageComponent/CommunityAccess";
import SuccessStorieOfCohort from "../components/cohortPageComponent/SuccessStorieOfCohort";
import Footer from "../components/commonCompo/Footer.jsx"
import CommonQnAMeeting from "../components/ui/CommonQnAMeeting";

const Cohort = () => {

    const cohortFaqs = [
        {
            id: 1,
            question: "What is a cohort-based course?",
            answer: "A cohort-based course is a live program where a group of students learns together over a fixed period. Unlike self-paced courses, cohorts include live sessions, peer interaction, and direct access to the instructor."
        },
        {
            id: 2,
            question: "How much can I charge for a cohort?",
            answer: "Most creators charge between ₹10,000 to ₹50,000 per student, depending on the topic, duration, and your expertise. Some premium programs go as high as ₹1,00,000+."
        },
        {
            id: 3,
            question: "What’s the difference between a cohort and a webinar?",
            answer: "Webinars are one-time live sessions, while cohorts are multi-week programs with ongoing learning, community, and accountability. Cohorts command 3–10× higher prices."
        },
        {
            id: 4,
            question: "Do I need to be a great teacher to run a cohort?",
            answer: "You don’t need to be a traditional teacher. You just need deep expertise in your topic and the ability to guide and facilitate learning for your students."
        },
        {
            id: 5,
            question: "What happens to the recordings after the cohort ends?",
            answer: "The recordings become your evergreen course library. You can sell access to this library long after the live cohort ends, creating passive income."
        },
        {
            id: 6,
            question: "How many students can I accommodate in a cohort?",
            answer: "Cohorts typically run with 20–100 students. Smaller groups (15–30) allow for deeper interaction, while larger groups (50–100) maximize revenue."
        },
        {
            id: 7,
            question: "Do I need a tech stack to run a cohort?",
            answer: "No. You can start with simple tools like Zoom for live sessions, WhatsApp/Discord for community, and Google Sheets for tracking. Topmate handles payments and scheduling."
        },
        {
            id: 8,
            question: "How do I market my cohort?",
            answer: "Promote through your existing audience (email, social media), run a free webinar to build interest, and highlight success stories from past students."
        },
        {
            id: 9,
            question: "What’s the time commitment for running a cohort?",
            answer: "Expect 4–8 hours per week during the cohort, including live sessions, prep time, and community engagement. It’s intensive but highly rewarding."
        },
        {
            id: 10,
            question: "Can I run cohorts in any niche?",
            answer: "Yes. Cohorts work for almost any topic: tech, finance, marketing, health, fitness, creative skills, career coaching, and more."
        }
    ];

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
            <UltimateRevenueDriver />
            <CohortStructures />
            <CommunityAccess />
            <SuccessStorieOfCohort />
            <CommonQnAMeeting theme="light" title="Common questions about Cohorts" faqs={cohortFaqs} />
            <Footer />
        </>
    );
};

export default Cohort;