import React from 'react'
import Navbar from '../components/commonCompo/Navbar'
import Footer from '../components/commonCompo/Footer'
import TopOfUseCases from '../components/ui/TopOfUseCases'
import MentorOnTopmate from '../components/ProductManagementComponent/MentorOnTopmate'
import EveryWantTo from '../components/ProductManagementComponent/EveryWantTo'
import WhatYouCanOffer from '../components/ProductManagementComponent/WhatYouCanOffer'
import ScalableRevenueModel from '../components/ProductManagementComponent/ScalableRevenueModel'
import MontlyEarningBreakDown from '../components/ProductManagementComponent/MontlyEarningBreakDown'
import TopmateStack from '../components/ProductManagementComponent/TopmateStack'
import { Calendar, BookOpen, Users } from "lucide-react";
import CommonQnAMeeting from '../components/ui/CommonQnAMeeting'

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
      <MentorOnTopmate />
      <EveryWantTo />
      <WhatYouCanOffer />
      <ScalableRevenueModel />
      <MontlyEarningBreakDown />
      <TopmateStack stacks={stacks} />
      <CommonQnAMeeting theme="light" faqs={faqs} />
      <Footer />
    </>
  )
}

export default ProductManagement