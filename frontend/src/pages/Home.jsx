import Navbar from "../components/commonCompo/Navbar"
import Card from "../components/HomePageComponet/Card"
import Hero from "../components/HomePageComponet/Hero"
import HomeNewPage from "../components/HomePageComponet/HomeNewPage"
import HomeCreatePage from "../components/HomePageComponet/HomeCreatePage"
import HomeFeedbackpage from "../components/HomePageComponet/HomeFeedbackpage"
import HomeFAQ from "../components/HomePageComponet/HomeFAQ"
import Footer from "../components/commonCompo/Footer"

const Home = () => {
 
    return (
        <div>
        <Navbar/>
        <Hero/>
        <HomeNewPage/>
        <HomeCreatePage/>
        <HomeFeedbackpage/>
        <HomeFAQ/>
        <Footer/>
        </div>
    )
}

export default Home