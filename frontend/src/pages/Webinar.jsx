import React, { useEffect } from "react";
import Navbar from "../components/commonCompo/Navbar";
import TopOfWebinars from "../components/ui/TopOfProductFeatures";
import VideoSyncInWebinars from "../components/webinarPageComponent/VideoSyncInWebinars";
import ZoomRecordingBuilt from "../components/webinarPageComponent/ZoomRecordingBuilt";
import MakingMoneyFormWebinars from "../components/webinarPageComponent/MakingMoneyFormWebinars";
import GetStartWithFiveStep from "../components/webinarPageComponent/GetStartWithFiveStep";
import FormSignUpToReplay from "../components/webinarPageComponent/FormSignUpToReplay";
import CreatorsFillingRoom from "../components/webinarPageComponent/CreatorsFillingRoom";
import CommonQnAMeeting from "../components/ui/CommonQnAMeeting";
import HostYourFirstWebinars from "../components/webinarPageComponent/HostYourFirstWebinars";
import ServicesSection from "../components/ui/ServicesSection";
import { Activity, CirclePlay, Circle , DollarSign} from "lucide-react";

const Webniars = () => {

    const faqs = [
        {
            id: 1,
            question: "How many people can attend a Topmate webinar?",
            answer: "Topmate webinars run via Zoom Pro. Zoom Pro supports up to 100 participants per session. For larger events, you can request an upgrade through Topmate support."
        },
        {
            id: 2,
            question: "Do I need my own Zoom account?",
            answer: "No. Topmate provides every creator with a free Zoom Pro account. You connect it once and Zoom links are generated automatically for every event."
        },
        {
            id: 3,
            question: "Is recording automatic?",
            answer: "Yes. Cloud recording starts automatically when you go live. You don't need to click anything."
        },
        {
            id: 4,
            question: "How do I price the replay?",
            answer: "Set a replay price separately from the live session price. You can offer the recording free, at a lower price, or bundled with other products."
        },
        {
            id: 5,
            question: "Can I promote my webinar through Topmate?",
            answer: "Yes — your webinar is listed on your Topmate profile and shareable via a single link. For advanced ad-based promotion, see Topmate's Performance Marketing feature."
        },
        {
            id: 6,
            question: "How do I send reminders to attendees?",
            answer: "Reminders are automatic — WhatsApp + email are sent 24 hours and 1 hour before your event. You can also bulk-email attendees any message from your dashboard."
        },
        {
            id: 7,
            question: "Can I offer a free webinar?",
            answer: "Yes. Set the price to ₹0. Many creators run free live sessions and then sell the recording or an upsell product to attendees."
        },
        {
            id: 8,
            question: "What is Topmate's refund policy for webinars?",
            answer: "You set your refund policy. Choose to allow refunds before the event starts, or mark tickets as non-refundable. Topmate enforces the policy automatically."
        },
        {
            id: 9,
            question: "Can I run the same webinar recurringly?",
            answer: "Yes. You can create a new webinar for each date or duplicate an existing one. Many creators run the same topic monthly or quarterly with updated content."
        },
        {
            id: 10,
            question: "What if I need to reschedule?",
            answer: "You can edit the webinar date and time from your dashboard. Registrants receive an updated calendar invite and reminder. Optionally, send a bulk email to explain the change."
        },
    ]

      const items = [
        {
            title: "Turn Your Webinar Series into a Cohort",
            icon: Activity,
        },
        {
            title: "Create a self-paced course from your recordings",
            icon: CirclePlay ,
        },
        {
            title: "Sell your slides as a digital productWebinars",
            icon: DollarSign ,
        },
        {
            title: "Bundle webinars with 1:1 sessions Priority DM",
            icon: Circle ,
        },
    ];

    useEffect(() => {
        window.document.title = "Host Paid Webinars & Workshops for Creators | Free Zoom Pro | ..."
    }, [])

    return (
        <>
            <Navbar />
            <TopOfWebinars
                badge="Webinars & Workshops"
                title="Host Paid Webinars with Zero Setup"
                description="Zoom Pro built-in. Every session auto-recorded. Sell the replay. Email your attendees. WhatsApp reminders included."
                button1="Host Your First Webinar Free"
                button2="Watch Demo"
            />
            <VideoSyncInWebinars />
            <ZoomRecordingBuilt />
            <MakingMoneyFormWebinars />
            <GetStartWithFiveStep />
            <FormSignUpToReplay />
            <CreatorsFillingRoom />
            <CommonQnAMeeting faqs={faqs} title="Common questions about Webinars" theme="light" />
            <HostYourFirstWebinars />
            <ServicesSection items={items} />
        </>
    )
}

export default Webniars