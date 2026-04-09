import React from "react";
import Navbar from "../components/commonCompo/Navbar";
import Footer from "../components/commonCompo/Footer";
import TopOccurSectionOfPriorityDm from "../components/PriorityDmComponent/TopOccurSectionOfPriorityDm";
import CreatorsChargeAdvice from "../components/PriorityDmComponent/CreatorsChargeAdvice";
import PriorityDmWork from "../components/PriorityDmComponent/PriorityDmWork";
import MovingPriorityDm from "../components/PriorityDmComponent/MovingPriorityDm";
import MonthLookLike from "../components/PriorityDmComponent/MonthLookLike";
import ControlAccess from "../components/PriorityDmComponent/ControlAccess";
import CommonQnAMeeting from "../components/ui/CommonQnAMeeting";

const PriorityDm = () => {

    const faqs = [
        {
            id: 1,
            question: "What is Priority DM?",
            answer: "Priority DM is a feature that allows you to receive priority messages from your followers."
        },
        {
            id: 2,
            question: "How does Priority DM work?",
            answer: "Priority DM works by allowing you to receive priority messages from your followers."
        },
        {
            id: 3,
            question: "How much does Priority DM cost?",
            answer: "Priority DM costs $10 per month."
        },
        {
            id: 4,
            question: "How do I enable Priority DM?",
            answer: "Priority DM can be enabled from your account settings."
        },
        {
            id: 5,
            question: "How do I disable Priority DM?",
            answer: "Priority DM can be disabled from your account settings."
        },
        {
            id: 6,
            question: "How do I view my Priority DM messages?",
            answer: "Priority DM messages can be viewed from your account settings."
        },
        {
            id: 7,
            question: "How do I delete my Priority DM messages?",
            answer: "Priority DM messages can be deleted from your account settings."
        },
        {
            id: 8,
            question: "How do I report a Priority DM message?",
            answer: "Priority DM messages can be reported from your account settings."
        },
        {
            id: 9,
            question: "How do I block a user from sending Priority DM messages?",
            answer: "Priority DM messages can be blocked from your account settings."
        },
        {
            id: 10,
            question: "How do I unblock a user from sending Priority DM messages?",
            answer: "Priority DM messages can be unblocked from your account settings."
        },
    ]
    return (
        <>
            <Navbar />
            <TopOccurSectionOfPriorityDm />
            <CreatorsChargeAdvice />
            <PriorityDmWork />
            <MovingPriorityDm />
            <MonthLookLike />
            <ControlAccess />
            <CommonQnAMeeting faqs={faqs} title="Common questions about Priority DM" theme="dark" />
            <Footer />
        </>
    );
};

export default PriorityDm;