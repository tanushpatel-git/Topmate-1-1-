import React, { useEffect, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Skeleton } from 'boneyard-js/react'
import ScrollToTop from './services/ScrollOnTop'
import useGetCurrUser from './hooks/useGetCurrUser'

const Home = lazy(() => import('./pages/Home'))
const Meeting = lazy(() => import('./pages/Meeting'))
const Webniars = lazy(() => import('./pages/Webinar'))
const Cohort = lazy(() => import('./pages/Cohort'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Terms = lazy(() => import('./pages/Terms'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Pricing = lazy(() => import('./pages/Pricing'))
const PriorityDm = lazy(() => import('./pages/PriorityDm'))
const ProductManagement = lazy(() => import('./pages/ProductManagement'))
const SearchServices = lazy(() => import('./pages/SearchServices'))
const AInML = lazy(() => import('./pages/AInML'))
const SoftwareEngineering = lazy(() => import('./pages/SoftwareEngineering'))
const DesignUxUi = lazy(() => import('./pages/DesignUxUi'))
const SignIn = lazy(() => import('./auth/SignIn'))
const SignUp = lazy(() => import('./auth/SignUp'))
const SignUp2 = lazy(() => import('./auth/SignUp2'))
const SignUp3 = lazy(() => import('./auth/SignUp3'))
const SignUp4 = lazy(() => import('./auth/SignUp4'))
const SignUp5 = lazy(() => import('./auth/SignUp5'))
const SekerDashboard = lazy(() => import('./pages/SekerDashboard'))
const Marketplace = lazy(() => import('./pages/Marketplace'))
const Search = lazy(() => import('./pages/Search'))
const CreatorDashboard = lazy(() => import('./pages/CreatorDashboard'))
const Profile = lazy(() => import('./components/CreatorDashboard/Profile'))
const BookingPages = lazy(() => import('./pages/bookingPages'))
const BookingConfirm = lazy(() => import('./components/Booking/BookingConfirm'))
const BookingSuccess = lazy(() => import('./components/Booking/BookingSuccess'))
import ProtectedRoute from './components/commonCompo/ProtectedRoute'
import {
  setUserName,
  setUserId,
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
  setJoinDate
} from './redux/userData/userDetails'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const { data } = useGetCurrUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.user) {
      const { user } = data;
      dispatch(setUserId(user._id));
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
        <Route path="/" element={
          <Suspense fallback={<Skeleton name="home" loading />}>
            <Skeleton name="home" loading={false}><Home /></Skeleton>
          </Suspense>
        } />
        <Route path="/features/meeting" element={
          <Suspense fallback={<Skeleton name="meeting" loading />}>
            <Skeleton name="meeting" loading={false}><Meeting /></Skeleton>
          </Suspense>
        } />
        <Route path='/features/webinar' element={
          <Suspense fallback={<Skeleton name="webinar" loading />}>
            <Skeleton name="webinar" loading={false}><Webniars /></Skeleton>
          </Suspense>
        } />
        <Route path='/features/cohort' element={
          <Suspense fallback={<Skeleton name="cohort" loading />}>
            <Skeleton name="cohort" loading={false}><Cohort /></Skeleton>
          </Suspense>
        } />
        <Route path='/about' element={
          <Suspense fallback={<Skeleton name="about" loading />}>
            <Skeleton name="about" loading={false}><About /></Skeleton>
          </Suspense>
        } />
        <Route path='/contact' element={
          <Suspense fallback={<Skeleton name="contact" loading />}>
            <Skeleton name="contact" loading={false}><Contact /></Skeleton>
          </Suspense>
        } />
        <Route path='/terms' element={
          <Suspense fallback={<Skeleton name="terms" loading />}>
            <Skeleton name="terms" loading={false}><Terms /></Skeleton>
          </Suspense>
        } />
        <Route path='/privacy' element={
          <Suspense fallback={<Skeleton name="privacy" loading />}>
            <Skeleton name="privacy" loading={false}><Privacy /></Skeleton>
          </Suspense>
        } />
        <Route path='/pricing' element={
          <Suspense fallback={<Skeleton name="pricing" loading />}>
            <Skeleton name="pricing" loading={false}><Pricing /></Skeleton>
          </Suspense>
        } />
        <Route path='/search' element={
          <Suspense fallback={<Skeleton name="search" loading />}>
            <Skeleton name="search" loading={false}><Search /></Skeleton>
          </Suspense>
        } />
        <Route path='/features/priority-dm' element={
          <Suspense fallback={<Skeleton name="priority-dm" loading />}>
            <Skeleton name="priority-dm" loading={false}><PriorityDm /></Skeleton>
          </Suspense>
        } />
        <Route path='/use-cases/product-management' element={
          <Suspense fallback={<Skeleton name="product-management" loading />}>
            <Skeleton name="product-management" loading={false}><ProductManagement /></Skeleton>
          </Suspense>
        } />
        <Route path='/use-cases/ai-ml' element={
          <Suspense fallback={<Skeleton name="ai-ml" loading />}>
            <Skeleton name="ai-ml" loading={false}><AInML /></Skeleton>
          </Suspense>
        } />
        <Route path='/use-cases/software-engineer' element={
          <Suspense fallback={<Skeleton name="software-engineer" loading />}>
            <Skeleton name="software-engineer" loading={false}><SoftwareEngineering /></Skeleton>
          </Suspense>
        } />
        <Route path='/use-cases/design' element={
          <Suspense fallback={<Skeleton name="design" loading />}>
            <Skeleton name="design" loading={false}><DesignUxUi /></Skeleton>
          </Suspense>
        } />
        <Route path='/signin' element={
          <Suspense fallback={<Skeleton name="signin" loading />}>
            <Skeleton name="signin" loading={false}><SignIn /></Skeleton>
          </Suspense>
        } />
        <Route path='/signup' element={
          <Suspense fallback={<Skeleton name="signup" loading />}>
            <Skeleton name="signup" loading={false}><SignUp /></Skeleton>
          </Suspense>
        } />
        <Route path='/signup2' element={
          <Suspense fallback={<Skeleton name="signup2" loading />}>
            <Skeleton name="signup2" loading={false}><SignUp2 /></Skeleton>
          </Suspense>
        } />
        <Route path='/signup3' element={
          <Suspense fallback={<Skeleton name="signup3" loading />}>
            <Skeleton name="signup3" loading={false}><SignUp3 /></Skeleton>
          </Suspense>
        } />
        <Route path='/signup4' element={
          <Suspense fallback={<Skeleton name="signup4" loading />}>
            <Skeleton name="signup4" loading={false}><SignUp4 /></Skeleton>
          </Suspense>
        } />
        <Route path='/signup5' element={
          <Suspense fallback={<Skeleton name="signup5" loading />}>
            <Skeleton name="signup5" loading={false}><SignUp5 /></Skeleton>
          </Suspense>
        } />
        <Route path="/seeker-dashboard/*" element={
          <ProtectedRoute>
            <Suspense fallback={<Skeleton name="seeker-dashboard" loading />}>
              <Skeleton name="seeker-dashboard" loading={false}><SekerDashboard /></Skeleton>
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path='/creator-dashboard/*' element={
          <ProtectedRoute>
            <Suspense fallback={<Skeleton name="creator-dashboard" loading />}>
              <Skeleton name="creator-dashboard" loading={false}><CreatorDashboard /></Skeleton>
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path="/marketplace" element={
          <ProtectedRoute>
            <Suspense fallback={<Skeleton name="marketplace" loading />}>
              <Skeleton name="marketplace" loading={false}><Marketplace /></Skeleton>
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Suspense fallback={<Skeleton name="profile" loading />}>
              <Skeleton name="profile" loading={false}><Profile /></Skeleton>
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path='/search-services' element={
          <Suspense fallback={<Skeleton name="search-services" loading />}>
            <Skeleton name="search-services" loading={false}><SearchServices /></Skeleton>
          </Suspense>
        } />
        <Route path='/booking/*' element={
          <ProtectedRoute>
            <Suspense fallback={<Skeleton name="booking" loading />}>
              <Skeleton name="booking" loading={false}><BookingPages /></Skeleton>
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path='/booking/confirm' element={
          <ProtectedRoute>
            <Suspense fallback={<Skeleton name="booking-confirm" loading />}>
              <Skeleton name="booking-confirm" loading={false}><BookingConfirm /></Skeleton>
            </Suspense>
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App