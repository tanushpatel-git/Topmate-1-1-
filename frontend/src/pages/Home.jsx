import Navbar from "../components/commonCompo/Navbar"
import Card from "../components/HomePageComponent/Card"
import Hero from "../components/HomePageComponent/Hero"
import HomeNewPage from "../components/HomePageComponent/Hero2"
import HomeCreatePage from "../components/HomePageComponent/Hero3"
import HomeFeedbackpage from "../components/HomePageComponent/Hero4"
import HomeFAQ from "../components/HomePageComponent/Hero5"
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