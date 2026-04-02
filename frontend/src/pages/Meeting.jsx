import Calendar from "../components/meetingPageComponent/Calender.jsx"
import TopOfMeeting from "../components/ui/TopOfProductFeatures.jsx"
import FeaturesGrid from "../components/meetingPageComponent/FeatureOfGrid.jsx"
import WorkGrid from "../components/meetingPageComponent/WorkGrid.jsx"
import SpecificExpertise from "../components/meetingPageComponent/SpecificExpertise.jsx"
import WordClassExperience from "../components/meetingPageComponent/WordClassExperience.jsx"
import CreatorPaidSessionsMeeting from "../components/meetingPageComponent/CreatorPaidSessionsMeeting.jsx"
import CommonQnAMeeting from "../components/meetingPageComponent/CommonQnAMeeting.jsx"
import SubcriptionRecommed from "../components/meetingPageComponent/SubcriptionRecommed.jsx"
import ServicesSectionMeeting from "../components/meetingPageComponent/ServicesSectionMeeting.jsx"
import Navbar from "../components/commonCompo/Navbar.jsx"
import { useEffect } from "react"

const Meeting = () => {

    useEffect(() => {
        window.document.title = "1:1 Meeting Platform for Experts,Coaches & Consultants | Topmate"
    },[])
    return (
        <div>
            <Navbar theam="black"/>
            <TopOfMeeting 
            theam="dark"
            badge="1:1 Meetings"
            title="Turn 1:1 Calls Into a Revenue Stream"
            description="Set your rate, share one link, and get paid. Free Zoom Pro, calendar sync, and instant payouts — no subscription."
            button1="Start Getting Paid"
            button2="See How It Works"
            />
            <Calendar/>
            <FeaturesGrid/>
            <WorkGrid/>
            <SpecificExpertise/>
            <WordClassExperience/>
            <CreatorPaidSessionsMeeting/>
            <CommonQnAMeeting/>
            <SubcriptionRecommed/>
            <ServicesSectionMeeting/>
        </div>
    )
}

export default Meeting