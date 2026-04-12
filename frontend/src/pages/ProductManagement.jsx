import React from 'react'
import { Calendar, BookOpen, Users } from "lucide-react"
import Navbar from "../components/commonCompo/Navbar.jsx"
import TopOfUseCases from "../components/ui/TopOfUseCases.jsx"
import MentorOnTopmate from "../components/commonComponentForUsesCase/MentorOnTopmate.jsx"
import EveryWantTo from "../components/commonComponentForUsesCase/EveryWantTo.jsx"
import WhatYouCanOffer from "../components/commonComponentForUsesCase/WhatYouCanOffer.jsx"
import ScalableRevenueModel from "../components/commonComponentForUsesCase/ScalableRevenueModel.jsx"
import MontlyEarningBreakDown from "../components/commonComponentForUsesCase/MontlyEarningBreakDown.jsx"
import TopmateStack from "../components/commonComponentForUsesCase/TopmateStack.jsx"
import CommonQnAMeeting from "../components/ui/CommonQnAMeeting.jsx"
import ManagementBussiness from "../components/commonComponentForUsesCase/ManagementBussiness.jsx"
import Footer from "../components/commonCompo/Footer.jsx"
import ManagementBussinessToday from "../components/commonComponentForUsesCase/ManagementBusinessToday.jsx"
import { Zap, ArrowUp, TrendingUp } from "lucide-react";


const ProductManagement = () => {
  const stacks = [
    {
      icon: Calendar,
      title: "1:1 Meetings",
      description: "Paid mentoring calls. Set hourly rate. Free Zoom Pro. Calendar auto-syncs."
    },
    {
      icon: BookOpen,
      title: "Courses",
      description: "Self-paced video learning. Upload unlimited modules. No monthly fee."
    },
    {
      icon: Users,
      title: "Cohorts",
      description: "Multi-week learning programs with live sessions and peer accountability."
    }
  ]

  const faqs = [
    {
      id: 1,
      question: "How much can I earn as a Product Management mentor on Topmate?",
      answer: "Product managers on Topmate earn ₹50K-5L/month. Top PM mentors earn ₹10L+/month. Earnings depend on your experience, niche, and how you package your offerings."
    },
    {
      id: 2,
      question: "What types of PM offerings can I sell on Topmate?",
      answer: "You can sell 1:1 mentoring, mock interviews, resume reviews, PM courses, cohort-based programs, and product strategy sessions."
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

  return (
    <>
      <Navbar theam='black' />
      <TopOfUseCases
        theam="dark"
        theamSet="blue"
        badge="Product Management"
        title="Product Management"
        title2="Mentorship &"
        title3="Courses"
        description="Build a PM mentorship business. Mock interviews, PM courses, career transitions. Product managers earn ₹50K-5L/month on Topmate."
        button1="Start Product Management Mentoring Free"
        button2="See Revenue Examples"
      />
      <MentorOnTopmate mentors={mentors} title="Top Product Management Mentors on Topmate" description="Award-winning PMs already helping thousands" />
      <EveryWantTo colorTheme="blue" firstCardTarget="10" secondCardTarget="10" second2CardTarget="100" thirdCardTarget="1" firstCardDesc="Growth in PM upskilling demand since 2023" secondCardDesc="Per session for PM mentoring" thirdCardDesc="Fastest-growing domain on Topmate" />
      <WhatYouCanOffer colorTheme="blue" />
      <ScalableRevenueModel colorTheme="blue" title="Scalable Revenue Model" title2="From starting out to building a Product Management empire" steps={steps} />
      <MontlyEarningBreakDown colorTheme="blue" />
      <TopmateStack stacks={stacks} />
      <ManagementBussiness colorTheme="blue" />
      <CommonQnAMeeting theme="light" faqs={faqs} />
      <ManagementBussinessToday colorTheme="blue" button1="Start Product Management Mentoring Free" button2="See Revenue Examples" title="Start your Product Management" title2="business today" description="Monetize your Product Management expertise. Teach PM, run PM bootcamps, offer consulting. Product managers earn ₹50K-5L/month on Topmate." />
      <Footer />
    </>
  )
}

export default ProductManagement