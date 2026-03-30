import Calendar from "../components/ui/Calender"
import TopOfMeeting from "../components/ui/TopOfMeeting"
import FeaturesGrid from "../components/ui/FeatureOfGrid"
import WorkGrid from "../components/ui/WorkGrid"
import SpecificExpertise from "../components/ui/SpecificExpertise"
import WordClassExperience from "../components/ui/WordClassExperience"
import CreatorPaidSessionsMeeting from "../components/ui/CreatorPaidSessionsMeeting"
import CommonQnAMeeting from "../components/ui/CommonQnAMeeting"
import SubcriptionRecommed from "../components/ui/SubcriptionRecommed"
import ServicesSectionMeeting from "../components/ui/ServicesSectionMeeting"

const Meeting = () => {
    return (
        <div>
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