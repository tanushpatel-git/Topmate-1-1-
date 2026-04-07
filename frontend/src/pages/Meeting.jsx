import Calendar from "../components/meetingPageComponent/Calender.jsx"
import TopOfMeeting from "../components/ui/TopOfProductFeatures.jsx"
import FeaturesGrid from "../components/meetingPageComponent/FeatureOfGrid.jsx"
import WorkGrid from "../components/meetingPageComponent/WorkGrid.jsx"
import SpecificExpertise from "../components/meetingPageComponent/SpecificExpertise.jsx"
import WordClassExperience from "../components/meetingPageComponent/WordClassExperience.jsx"
import CreatorPaidSessionsMeeting from "../components/meetingPageComponent/CreatorPaidSessionsMeeting.jsx"
import CommonQnAMeeting from "../components/ui/CommonQnAMeeting.jsx"
import SubcriptionRecommed from "../components/meetingPageComponent/SubcriptionRecommed.jsx"
import ServicesSection from "../components/ui/ServicesSection.jsx"
import Navbar from "../components/commonCompo/Navbar.jsx"
import { Target, Activity, Star, Zap } from "lucide-react";
import { useEffect } from "react"
import Footer from "../components/commonCompo/Footer.jsx"

const Meeting = () => {

    const faqs = [
        {
            id: 1,
            question: "How do I set my meeting rate?",
            answer:
                "Go to your Topmate dashboard → Services → 1:1 Meetings → set your price in INR or USD. You can offer multiple session durations at different prices.",
        },
        {
            id: 2,
            question: "Which calendars does Topmate sync with?",
            answer:
                "Google Calendar is fully supported. Topmate reads your existing events and blocks availability automatically. Outlook and Apple Calendar are not currently supported.",
        },
        {
            id: 3,
            question: "Do I need a Zoom account?",
            answer:
                "No. Every Topmate creator gets a free Zoom Pro account. You connect it once from your dashboard and Topmate generates meeting links automatically for every booking.",
        },
        {
            id: 4,
            question: "How does Topmate handle different timezones?",
            answer:
                "Clients book in their local timezone. Topmate converts and shows your availability correctly. Calendar invites and reminders are sent in the client's timezone.",
        },
        {
            id: 5,
            question: "What happens if a client cancels?",
            answer:
                "Cancellation policies are set by you. You can allow free cancellations up to a defined time window or mark sessions as non-refundable. Topmate enforces the policy automatically.",
        },
        {
            id: 6,
            question: "Can I offer instant/on-demand calls?",
            answer:
                "Yes — the 'Instant Call' feature lets clients request a call right now if you're available. You can toggle this on and off from your dashboard at any time.",
        },
        {
            id: 7,
            question: "What if a client doesn't show up?",
            answer: "You keep the payment for no-shows on non-refundable sessions. For refundable sessions, you can choose to refund or decline the refund through your dashboard."
        },
        {
            id: 8,
            question: "Which currencies does Topmate support?",
            answer: "INR payments via PayU and Razorpay. International (non-INR) payments via AirWallex and Stripe. You can accept payments in 30+ currencies.",
        },
        {
            id: 9,
            question: "Can I change my meeting price later?",
            answer: "Yes. You can edit your rate anytime from your dashboard. Existing bookings keep the price they paid; new bookings use the updated price.",
        },
        {
            id: 10,
            question: "How do I get my first booking?",
            answer: "Share your Topmate link wherever your audience is — Instagram, LinkedIn, YouTube, or email. Many creators add it to their bio and mention it in posts or DMs when someone asks for advice."
        },
        {
            id: 11,
            question: "Can I use Topmate if I'm not in India?",
            answer: "Yes. Topmate supports creators globally. You can accept INR (India) and international currencies via AirWallex/Stripe. Payouts are available in multiple currencies."
        }
    ];

    const items = [
        {
            title: "Packages",
            icon: Target,
        },
        {
            title: "Courses",
            icon: Activity,
        },
        {
            title: "Webinars",
            icon: Star,
        },
        {
            title: "Priority DM",
            icon: Zap,
        },
    ];

    useEffect(() => {
        window.document.title = "1:1 Meeting Platform for Experts,Coaches & Consultants | Topmate"
    }, [])
    return (
        <>
            <Navbar theam="black" />
            <TopOfMeeting
                theam="dark"
                badge="1:1 Meetings"
                title="Turn 1:1 Calls Into a Revenue Stream"
                description="Set your rate, share one link, and get paid. Free Zoom Pro, calendar sync, and instant payouts — no subscription."
                button1="Start Getting Paid"
                button2="See How It Works"
            />
            <Calendar />
            <FeaturesGrid />
            <WorkGrid />
            <SpecificExpertise />
            <WordClassExperience />
            <CreatorPaidSessionsMeeting />
            <CommonQnAMeeting faqs={faqs} title="Common questions </br> about Meetings" />
            <SubcriptionRecommed />
            <ServicesSection items={items} />
            <Footer />
        </> 
    )
}

export default Meeting