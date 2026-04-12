import React from "react";
import TopOfUseCases from "../components/ui/TopOfUseCases";
import Navbar from "../components/commonCompo/Navbar";
import Footer from "../components/commonCompo/Footer";
import MentorOnTopmate from "../components/commonComponentForUsesCase/MentorOnTopmate";
import EveryWantTo from "../components/commonComponentForUsesCase/EveryWantTo";
import WhatYouCanOffer from "../components/commonComponentForUsesCase/WhatYouCanOffer";
import ScalableRevenueModel from "../components/commonComponentForUsesCase/ScalableRevenueModel";
import ManagementBussiness from "../components/commonComponentForUsesCase/ManagementBussiness";
import ManagementBusinessToday from "../components/commonComponentForUsesCase/ManagementBusinessToday";
import TopmateStack from "../components/commonComponentForUsesCase/TopmateStack";
import { Book, Users, Video } from "lucide-react";
import { Zap, ArrowUp, TrendingUp } from "lucide-react";
import CommonQnAMeeting from "../components/ui/CommonQnAMeeting";

const AInML = () => {

    const mentors = [
        {
            name: "Anand Narayandas",
            handle: "@anand_narayandas",
            img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
            desc: "Product Management, Career & Leadership Coach · Ex-Amazon, BCG,...",
            badge: "Product & PM Careers #1"
        },
        {
            name: "Sumit Kumar Singh",
            handle: "@theaipmcoach",
            img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
            desc: "Harvard Alum, Ex-Microsoft AI PM leader · Mentored 1500+ · Helping Founders,...",
            badge: "AI/ML #6"
        },
        {
            name: "Malthi Satish",
            handle: "@malthi_ss",
            img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
            desc: "Product Coach and Trainer · Chief Product Officer at HerKey",
            badge: "AI/ML #8"
        },
        {
            name: "Vijay Chandola",
            handle: "@vijaychandola",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
            desc: "Mentored over 500 people. Product Management leader.",
            badge: "Product & PM Careers #3"
        },
    ];


    const stacks = [
        {
            title: "Course",
            description: "Self-paced video learning. Upload unlimited modules. No monthly fee.",
            icon: Book,
        },
        {
            title: "Cohorts",
            description: "Multi-week learning programs with live sessions and peer accountability.",
            icon: Users,
        },
        {
            title: "Webinars",
            description: "Host large group events with automated scheduling and payments.",
            icon: Video,
        },
    ]

    const steps = [
        {
            icon: Zap,
            label: "STARTER",
            min: 30,
            max: 80,
            prefix: "₹",
            suffix: "K",
            desc: "15-20 mock interviews + mentoring calls",
        },
        {
            icon: ArrowUp,
            label: "GROWING",
            min: 1,
            max: 3,
            prefix: "₹",
            suffix: "L",
            desc: "Calls + course + digital products",
        },
        {
            icon: TrendingUp,
            label: "SCALED",
            min: 5,
            max: 5,
            prefix: "₹",
            suffix: "L+",
            desc: "All services + cohort + Perf Marketing",
        },
    ];

    const faqs = [
        {
            id: 1,
            question: "How much can I earn as an AI/ML mentor on Topmate?",
            answer: "AI/ML mentors on Topmate earn ₹1L-10L/month. Top AI experts earn ₹20L+/month. Earnings depend on your experience, niche, and how you package your offerings."
        },
        {
            id: 2,
            question: "What types of AI/ML offerings can I sell on Topmate?",
            answer: "You can sell 1:1 mentoring, mock interviews, resume reviews, AI/ML courses, cohort-based programs, and AI consulting."
        },
        {
            id: 3,
            question: "Do I need a website to start mentoring on Topmate?",
            answer: "No. Topmate gives you a free customizable profile page that works as your professional landing page."
        },
        {
            id: 4,
            question: "How does payment and scheduling work?",
            answer: "Topmate handles scheduling, payment collection, and Zoom integration automatically. You just set your availability and rates."
        },
        {
            id: 5,
            question: "Can I offer both paid and free sessions?",
            answer: "Yes. You can offer free introductory calls or paid deep-dive sessions based on your preference."
        },
        {
            id: 6,
            question: "Is Topmate free to use for mentors?",
            answer: "Yes, it's free to create a profile and list your services. Topmate charges a small platform fee only on successful bookings."
        },
        {
            id: 7,
            question: "Can I sell courses or cohort programs on Topmate?",
            answer: "Yes. Topmate supports self-paced courses and cohort-based programs with video hosting, payments, and student management."
        },
        {
            id: 8,
            question: "How do I get my first few mentees?",
            answer: "Share your Topmate profile on LinkedIn, Twitter, and relevant communities. Many mentors get their first mentees within the first week."
        },
        {
            id: 9,
            question: "Can I offer resume reviews or portfolio feedback?",
            answer: "Yes. You can create specific offerings for resume reviews, portfolio feedback, and interview preparation."
        },
        {
            id: 10,
            question: "How long does it take to start earning on Topmate?",
            answer: "Most mentors get their first booking within 3-7 days of setting up their profile."
        }
    ]

    
    return (
        <>
            <Navbar theam="black" />
            <TopOfUseCases
                themeSet="purple"
                badge="AI & MACHINE LEARNING"
                title="AI & ML Mentorship,"
                title2="Courses &"
                title3="Consulting"
                description="Monetize your AI expertise. Teach ML, run AI bootcamps, offer consulting. AI experts earn ₹1L-10L/month on Topmate."
                button1="Start AI & Machine Learning Mentoring Free"
                button2="See Revenue Examples"
            />
            <MentorOnTopmate mentors={mentors} title="Top AI & ML Mentors" description="Connect with the best AI & Machine Learning mentors on Topmate. Get expert guidance, mentorship, and career advice from top professionals in the field." colorTheme="purple" />
            <EveryWantTo colorTheme="purple" mainTitle="Everyone Needs to" title="Learn AI & ML" firstCardTarget="11" secondCardTarget="3" second2CardTarget="15" thirdCardTarget="1" firstCardDesc="Growth in AI upskilling demand since 2023" secondCardDesc="Per session for AI/ML mentoring" thirdCardDesc="Fastest-growing domain on Topmate" />
            <WhatYouCanOffer colorTheme="purple" />
            <ScalableRevenueModel colorTheme="purple" title="Scalable Revenue Model" title2="From starting out to building an AI & ML empire" steps={steps} />
            <TopmateStack colorTheme="purple" stacks={stacks} />
            <ManagementBussiness colorTheme="purple" />
            <CommonQnAMeeting theme="light" faqs={faqs} />
            <ManagementBusinessToday colorTheme="purple" button1="Start AI & Machine Learning Mentoring Free" button2="See Revenue Examples" title="Start your AI & ML" title2="business today" description="Monetize your AI expertise. Teach ML, run AI bootcamps, offer consulting. AI experts earn ₹1L-10L/month on Topmate." />
            <Footer />
        </>
    )
}

export default AInML