import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './services/ScrollOnTop'
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
const PublicProfile = lazy(() => import('./pages/PublicProfile'))
const BookingPages = lazy(() => import('./pages/bookingPages'))
const BookingConfirm = lazy(() => import('./components/Booking/BookingConfirm'))
const BookingSuccess = lazy(() => import('./components/Booking/BookingSuccess'))
const VideoCallWaiting = lazy(() => import('./components/VideoCall/VideoCallWaiting'))
const VideoCall = lazy(() => import('./components/VideoCall/VideoCall'))
const Upcoming = lazy(() => import('./pages/Upcoming'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
import ProtectedRoute from './components/commonCompo/ProtectedRoute'
import { Toaster } from 'react-hot-toast'

const App = () => {

  return (
    <>
      <ScrollToTop />
      <Toaster />
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path="/features/meeting" element={<Suspense fallback={<div>Loading...</div>}><Meeting /></Suspense>} />
        <Route path='/features/webinar' element={<Suspense fallback={<div>Loading...</div>}><Webniars /></Suspense>} />
        <Route path='/features/cohort' element={<Suspense fallback={<div>Loading...</div>}><Cohort /></Suspense>} />
        <Route path='/about' element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
        <Route path='/terms' element={<Suspense fallback={<div>Loading...</div>}><Terms /></Suspense>} />
        <Route path='/privacy' element={<Suspense fallback={<div>Loading...</div>}><Privacy /></Suspense>} />
        <Route path='/pricing' element={<Suspense fallback={<div>Loading...</div>}><Pricing /></Suspense>} />
        <Route path='/search' element={<Suspense fallback={<div>Loading...</div>}><Search /></Suspense>} />
        <Route path='/features/priority-dm' element={<Suspense fallback={<div>Loading...</div>}><PriorityDm /></Suspense>} />
        <Route path='/use-cases/product-management' element={<Suspense fallback={<div>Loading...</div>}><ProductManagement /></Suspense>} />
        <Route path='/use-cases/ai-ml' element={<Suspense fallback={<div>Loading...</div>}><AInML /></Suspense>} />
        <Route path='/use-cases/software-engineer' element={<Suspense fallback={<div>Loading...</div>}><SoftwareEngineering /></Suspense>} />
        <Route path='/use-cases/design' element={<Suspense fallback={<div>Loading...</div>}><DesignUxUi /></Suspense>} />
        <Route path='/signin' element={<Suspense fallback={<div>Loading...</div>}><SignIn /></Suspense>} />
        <Route path='/signup' element={<Suspense fallback={<div>Loading...</div>}><SignUp /></Suspense>} />
        <Route path='/signup2' element={<Suspense fallback={<div>Loading...</div>}><SignUp2 /></Suspense>} />
        <Route path='/signup3' element={<Suspense fallback={<div>Loading...</div>}><SignUp3 /></Suspense>} />
        <Route path='/signup4' element={<Suspense fallback={<div>Loading...</div>}><SignUp4 /></Suspense>} />
        <Route path='/signup5' element={<Suspense fallback={<div>Loading...</div>}><SignUp5 /></Suspense>} />
        <Route path="/seeker-dashboard/*" element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><SekerDashboard /></Suspense></ProtectedRoute>} />
        <Route path='/creator-dashboard/*' element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><CreatorDashboard /></Suspense></ProtectedRoute>} />
        <Route path="/marketplace" element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><Marketplace /></Suspense></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><Profile /></Suspense></ProtectedRoute>} />
        <Route path="/profile/:userId" element={<Suspense fallback={<div>Loading...</div>}><PublicProfile /></Suspense>} />
        <Route path='/search-services' element={<Suspense fallback={<div>Loading...</div>}><SearchServices /></Suspense>} />
        <Route path='/booking/*' element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><BookingPages /></Suspense></ProtectedRoute>} />
        <Route path='/booking/confirm' element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><BookingConfirm /></Suspense></ProtectedRoute>} />
        <Route path='/booking/success' element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><BookingSuccess /></Suspense></ProtectedRoute>} />
        <Route path="/booking/video-call/:id" element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><VideoCall /></Suspense></ProtectedRoute>} />
        <Route path="/booking/video-call-status" element={<ProtectedRoute> <Suspense fallback={<div>Loading...</div>}> <VideoCallWaiting /></Suspense></ProtectedRoute>} />
        <Route path="/upcoming" element={<Suspense fallback={<div>Loading...</div>}><Upcoming /></Suspense>} />
        <Route path="/admin" element={<ProtectedRoute allowedRoles={["admin"]}><Suspense fallback={<div>Loading...</div>}><AdminDashboard /></Suspense></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
