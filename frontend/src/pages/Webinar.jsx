import React, { useEffect } from "react";
import Navbar from "../components/commonCompo/Navbar";
import TopOfWebinars from "../components/ui/TopOfProductFeatures";
import VideoSyncInWebinars from "../components/webinarPageComponent/VideoSyncInWebinars";
import ZoomRecordingBuilt from "../components/webinarPageComponent/ZoomRecordingBuilt";
import MakingMoneyFormWebinars from "../components/webinarPageComponent/MakingMoneyFormWebinars";

const Webniars = () => {

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
        </>
    )
}

export default Webniars