import React from "react";
import Navbar from "../components/commonCompo/Navbar";
import Footer from "../components/commonCompo/Footer";
import TopOfUseCases from "../components/ui/TopOfUseCases";
import MentorOnTopmate from "../components/commonComponentForUsesCase/MentorOnTopmate";
import EveryWantTo from "../components/commonComponentForUsesCase/EveryWantTo";
import { Zap, ArrowUp, TrendingUp, Box } from "lucide-react";
import ScalableRevenueModel from "../components/commonComponentForUsesCase/ScalableRevenueModel";
import WhatYouCanOffer from "../components/commonComponentForUsesCase/WhatYouCanOffer";
import { Book, Users, Video } from "lucide-react";
import TopmateStack from "../components/commonComponentForUsesCase/TopmateStack";
import ManagementBussiness from "../components/commonComponentForUsesCase/ManagementBussiness";
import CommonQnAMeeting from "../components/ui/CommonQnAMeeting";
import ManagementBusinessToday from "../components/commonComponentForUsesCase/ManagementBusinessToday";


const SoftwareEngineering = () => {

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

    const steps = [
        {
            icon: Zap,
            label: "STARTER",
            min: 40,
            max: 100,
            prefix: "₹",
            suffix: "K",
            desc: "mock interviews + mentoring calls",
        },
        {
            icon: ArrowUp,
            label: "GROWING",
            min: 1.5,
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
        {
            title: "Digital Products",
            description: "Upload once, sell forever. E-books, templates, and tools with instant delivery.",
            icon: Box
        }
    ]

    const faqs = [
        {
            id: 1,
            question: "How much can I earn as a Software Engineering mentor on Topmate?",
            answer: "Software Engineering mentors on Topmate earn ₹50K–5L/month. Top mentors earn ₹10L+/month. Earnings depend on your experience, niche, and how you package your offerings."
        },
        {
            id: 2,
            question: "What types of Software Engineering offerings can I sell on Topmate?",
            answer: "You can sell 1:1 mentoring, mock interviews, resume reviews, DSA coaching, system design coaching, and coding interview prep."
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
                themeSet="green"
                badge="Software Engineering"
                title="Software Engineering Mentorship — DSA,"
                title2="System Design, Code"
                title3="Reviews"
                description="Mentor developers. Teach DSA, system design, coding interviews. Software engineers earn ₹50K-5L/month on Topmate."
                button1="Start Software Engineering Mentorship Free"
                button2="See Revenue Examples"
            />
            <MentorOnTopmate
                mentors={mentors}
                title="Software Engineering Mentors"
                description="Software engineers on Topmate earn ₹50K–5L/month mentoring students in DSA, system design, coding interviews, and career guidance."
                colorTheme="green"
            />
            <EveryWantTo
                colorTheme="green"
                mainTitle="Mentor the Next"
                title="FAANG Engineer"
                firstCardTarget="300"
                secondCardTarget="2"
                second2CardTarget="8"
                thirdCardTarget="1"
                firstCardDesc="CREATORS ON THE PLATFORM"
                secondCardDesc="PER SESSION FOR SOFTWARE ENGINEERING MENTORING"
                thirdCardDesc="DOMAIN BY CREATOR VOLUME" />
            <WhatYouCanOffer
                desc="Service types mapped to the Software Engineering domain" />
            <ScalableRevenueModel
                colorTheme="green"
                title="Scalable Revenue Model"
                title2="From starting out to building a Software Engineering empire"
                steps={steps}
            />
            <TopmateStack colorTheme="green" stacks={stacks} />
            <ManagementBussiness colorTheme="green" />
            <CommonQnAMeeting theme="light" faqs={faqs} />
            <ManagementBusinessToday colorTheme="green" button1="Create Your Free Profile" button2="Explore All Features" title="Start your Software Engineering" title2="business today" description="Everything you need to monetize your Software Engineering expertise. No setup fees, no subscription." />
            <Footer />
        </>
    )
}

export default SoftwareEngineering