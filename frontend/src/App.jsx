import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Meeting from './pages/Meeting'
import Webniars from './pages/Webinar'
import Cohort from './pages/Cohort'
import About from './pages/About'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Pricing from './pages/Pricing'
import PriorityDm from './pages/PriorityDm'
import ScrollToTop from './services/ScrollOnTop'
import ProductManagement from './pages/ProductManagement'
import SearchServices from './pages/SearchServices'

import AInML from './pages/AInML'
import SoftwareEngineering from './pages/SoftwareEngineering'
import DesignUxUi from './pages/DesignUxUi'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import SignUp2 from './auth/SignUp2'
import SignUp3 from './auth/SignUp3'
import SignUp4 from './auth/SignUp4'
import SignUp5 from './auth/SignUp5'

import SekerDashboard from './pages/SekerDashboard'
import Marketplace from './pages/Marketplace'
import Search from './pages/Search'
import CreatorDashboard from './pages/CreatorDashboard'
import useGetCurrUser from './hooks/useGetCurrUser'
import Profile from './components/CreatorDashboard/Profile'

import {
  setUserName,
  setUserImage,
  setFirstName,
  setLastName,
  setEmail,
  setCountry,
  setCurrency,
  setExpertise,
  setLinkedInUrl,
  setTwitterUrl,
  setInstagramUrl,
  setWhatsAppNumber,
  setAvailability,
  setService,
  setGraduationYear,
} from './redux/userData/userDetails'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const { data } = useGetCurrUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.user) {
      const { user } = data;
      dispatch(setUserName(user.userName));
      dispatch(setUserImage(user.userImageUrl));
      dispatch(setFirstName(user.firstName));
      dispatch(setLastName(user.lastName));
      dispatch(setEmail(user.email));
      dispatch(setCountry(user.country));
      dispatch(setCurrency(user.currency));
      dispatch(setExpertise(user.expertise));
      dispatch(setLinkedInUrl(user.linkedInUrl));
      dispatch(setTwitterUrl(user.twitterUrl));
      dispatch(setInstagramUrl(user.instagramUrl));
      dispatch(setWhatsAppNumber(user.whatsAppNumber));
      dispatch(setAvailability(user.availability));
      dispatch(setService(user.service));
      dispatch(setGraduationYear(user.graduationYear));
      dispatch(setJoinDate(user.joinDate));
    }
  }, [data])

  return (
    <>
      <ScrollToTop />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features/meeting" element={<Meeting />} />
        <Route path='/features/webinar' element={<Webniars />} />
        <Route path='/features/cohort' element={<Cohort />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/search' element={<Search />} />
        <Route path='/features/priority-dm' element={<PriorityDm />} />
        <Route path='/use-cases/product-management' element={<ProductManagement />} />


        <Route path='/use-cases/ai-ml' element={<AInML />} />
        <Route path='/use-cases/software-engineer' element={<SoftwareEngineering />} />
        <Route path='/use-cases/design' element={<DesignUxUi />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signup2' element={<SignUp2 />} />
        <Route path='/signup3' element={<SignUp3 />} />
        <Route path='/signup4' element={<SignUp4 />} />
        <Route path='/signup5' element={<SignUp5 />} />

        <Route path="/seeker-dashboard/*" element={<SekerDashboard />} />
        <Route path='/creator-dashboard/*' element={<CreatorDashboard />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/profile" element={<Profile />} />
        

        <Route path='/search-services' element={<SearchServices />} />

      </Routes>
    </>
  )
}

export default App