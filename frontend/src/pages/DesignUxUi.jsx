import React from "react";
import Navbar from "../components/commonCompo/Navbar";
import Footer from "../components/commonCompo/Footer";
import TopOfUseCases from "../components/ui/TopOfUseCases";
import MentorOnTopmate from "../components/commonComponentForUsesCase/MentorOnTopmate";
import EveryWantTo from "../components/commonComponentForUsesCase/EveryWantTo";
import WhatYouCanOffer from "../components/commonComponentForUsesCase/WhatYouCanOffer";
import ScalableRevenueModel from "../components/commonComponentForUsesCase/ScalableRevenueModel";
import ManagementBussiness from "../components/commonComponentForUsesCase/ManagementBussiness";
import ManagementBusinessToday from "../components/commonComponentForUsesCase/ManagementBusinessToday";
import TopmateStack from "../components/commonComponentForUsesCase/TopmateStack";
import { Box, Calendar, MessageSquare } from "lucide-react";
import { Zap, ArrowUp, TrendingUp } from "lucide-react";
import CommonQnAMeeting from "../components/ui/CommonQnAMeeting";

const DesignUxUi = () => {
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
            title: "1:1 Meetings",
            description: "Paid mentoring calls. Set hourly rate. Free Zoom Pro. Calendar auto-syncs.",
            icon: Calendar,
        },
        {
            title: "Digital Products",
            description: "Upload once, sell forever. E-books, templates, and tools with instant delivery.",
            icon: Box,
        },
        {
            title: "Priority DM",
            description: "Paid async consulting via direct messaging.",
            icon: MessageSquare,
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
            desc: "Portfolio reviews + mentoring",
        },
        {
            icon: ArrowUp,
            label: "GROWING",
            min: 1,
            max: 2.5,
            prefix: "₹",
            suffix: "L",
            desc: "Calls + course + UI kits",
        },
        {
            icon: TrendingUp,
            label: "SCALED",
            min: 3,
            max: 6,
            prefix: "₹",
            suffix: "L+",
            desc: "All services + UX bootcamp",
        },
    ];

    const faqs = [
        {
            id:1,
            question:"How much can I earn as a Design & UX/UI mentor on Topmate?",
            answer:"Designers on Topmate earn ₹40K-3L/month. Top designers earn ₹5L+/month. Earnings depend on your experience, niche, and how you package your offerings."
        },
        {
            id:2,
            question:"What types of Design & UX/UI offerings can I sell on Topmate?",
            answer:"You can sell 1:1 mentoring, mock interviews, resume reviews, UX courses, design critiques, and design assets."
        },
        {
            id:3,
            question:"Do I need a website to start mentoring on Topmate?",
            answer:"No. Topmate gives you a free customizable profile page that works as your professional landing page."
        },
        {
            id:4,
            question:"How does payment and scheduling work?",
            answer:"Topmate handles scheduling, payment collection, and Zoom integration automatically. You just set your availability and rates."
        },
        {
            id:5,
            question:"Can I offer both paid and free sessions?",
            answer:"Yes. You can offer free introductory calls or paid deep-dive sessions based on your preference."
        },
        {
            id:6,
            question:"Is Topmate free to use for mentors?",
            answer:"Yes, it's free to create a profile and list your services. Topmate charges a small platform fee only on successful bookings."
        },
        {
            id:7,
            question:"Can I sell courses or cohort programs on Topmate?",
            answer:"Yes. Topmate supports self-paced courses and cohort-based programs with video hosting, payments, and student management."
        },
        {
            id:8,
            question:"How do I get my first few mentees?",
            answer:"Share your Topmate profile on LinkedIn, Twitter, and relevant communities. Many mentors get their first mentees within the first week."
        },
        {
            id:9,
            question:"Can I offer resume reviews or portfolio feedback?",
            answer:"Yes. You can create specific offerings for resume reviews, portfolio feedback, and interview preparation."
        },
        {
            id:10,
            question:"How long does it take to start earning on Topmate?",
            answer:"Most mentors get their first booking within 3-7 days of setting up their profile."
        },
        {
            id:11,
            question:"Can I offer design assets or templates on Topmate?",
            answer:"Yes. You can sell design assets, templates, UI kits, and other digital products on Topmate."
        }
    ]

    
    return (
        <>
            <Navbar theam="black" />
            <TopOfUseCases
                themeSet="pink"
                badge="DESIGN & UX/UI"
                title="Design & UX/UI Mentorship,"
                title2="& Portfolio"
                title3="Reviews"
                description="Design mentoring, portfolio reviews, UX courses, design critiques. Designers earn ₹40K-3L/month on Topmate."
                button1="Start Design & UX/UI Mentoring Free"
                button2="See Revenue Examples"
            />
            <MentorOnTopmate mentors={mentors} title="Top AI & ML Mentors" description="Connect with the best AI & Machine Learning mentors on Topmate. Get expert guidance, mentorship, and career advice from top professionals in the field." colorTheme="purple" />
            <EveryWantTo colorTheme="pink" mainTitle="Design Mentorship That" title="Scales Fast" firstCardTarget="40" secondCardTarget="30" second2CardTarget="38" thirdCardTarget="Scalable" firstCardDesc="MONTLY EARNING POTENTIAL" secondCardDesc="FOR PORFOLIO REVIEW" thirdCardDesc="WITH DESIGN ASSETS AND KITS" />
            <WhatYouCanOffer desc="Service types mapped to the Design (UI/UX) domain" />
            <ScalableRevenueModel 
            colorTheme="pink" 
            title="Scalable Revenue Model" 
            title2="From starting out to building an AI & ML empire" 
            steps={steps} />
            <TopmateStack colorTheme="pink" stacks={stacks} />
            <ManagementBussiness colorTheme="pink" />
            <CommonQnAMeeting theme="light" faqs={faqs} />
            <ManagementBusinessToday colorTheme="pink" button1="Create Your Free Profile" button2="Explore All Features" title="Start your Design (UI/UX) business" title2="today" description="Everything you need to monetize your Design (UI/UX) expertise. No setup fees, no subscription." />
            <Footer />
        </>
    )
}

export default DesignUxUi;