import Calendar from "../components/meetingPageComponent/Calender.jsx"
import TopOfMeeting from "../components/meetingPageComponent/TopOfMeeting.jsx"
import FeaturesGrid from "../components/meetingPageComponent/FeatureOfGrid.jsx"
import WorkGrid from "../components/meetingPageComponent/WorkGrid.jsx"
import SpecificExpertise from "../components/meetingPageComponent/SpecificExpertise.jsx"
import WordClassExperience from "../components/meetingPageComponent/WordClassExperience.jsx"
import CreatorPaidSessionsMeeting from "../components/meetingPageComponent/CreatorPaidSessionsMeeting.jsx"
import CommonQnAMeeting from "../components/meetingPageComponent/CommonQnAMeeting.jsx"
import SubcriptionRecommed from "../components/meetingPageComponent/SubcriptionRecommed.jsx"
import ServicesSectionMeeting from "../components/meetingPageComponent/ServicesSectionMeeting.jsx"
import Navbar from "../components/commonCompo/Navbar.jsx"

const Meeting = () => {
    return (
        <div>
            <Navbar theam="black"/>
            <TopOfMeeting/>
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