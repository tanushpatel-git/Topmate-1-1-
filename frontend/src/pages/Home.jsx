import Navbar from "../components/commonCompo/Navbar"
import Card from "../components/HomePageComponet/Card"
import Hero from "../components/HomePageComponet/Hero"
import HomeNewPage from "../components/HomePageComponet/Hero2"
import HomeCreatePage from "../components/HomePageComponet/Hero3"
import HomeFeedbackpage from "../components/HomePageComponet/Hero4"
import HomeFAQ from "../components/HomePageComponet/Hero5"
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