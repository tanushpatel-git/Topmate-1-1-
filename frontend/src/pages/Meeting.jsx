import Calendar from "../components/ui/Calender"
import TopOfMeeting from "../components/ui/TopOfMeeting"
import FeaturesGrid from "../components/ui/FeatureOfGrid"
import WorkGrid from "../components/ui/WorkGrid"

const Meeting = () => {
    return (
        <div>
            <TopOfMeeting/>
            <Calendar/>
            <FeaturesGrid/>
            <WorkGrid/>
        </div>
    )
}

export default Meeting