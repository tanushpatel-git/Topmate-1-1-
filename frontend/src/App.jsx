import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './services/ScrollOnTop'
import { SkeletonPage, SkeletonDashboard, SkeletonProfilePage, SkeletonBookingProduct } from './components/ui/Skeleton'



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
const VideoCallWaiting  = lazy(()=> import ('./components/VideoCall/VideoCallWaiting'))
const VideoCall = lazy(()=> import('./components/VideoCall/VideoCall'))
import ProtectedRoute from './components/commonCompo/ProtectedRoute'
import { Toaster } from 'react-hot-toast'

const App = () => {

  return (
    <>
      <ScrollToTop />
      <Toaster />
      <Routes>
        <Route path="/" element={<Suspense fallback={<SkeletonPage />}><Home /></Suspense>} />
        <Route path="/features/meeting" element={<Suspense fallback={<SkeletonPage />}><Meeting /></Suspense>} />
        <Route path='/features/webinar' element={<Suspense fallback={<SkeletonPage />}><Webniars /></Suspense>} />
        <Route path='/features/cohort' element={<Suspense fallback={<SkeletonPage />}><Cohort /></Suspense>} />
        <Route path='/about' element={<Suspense fallback={<SkeletonPage />}><About /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<SkeletonPage />}><Contact /></Suspense>} />
        <Route path='/terms' element={<Suspense fallback={<SkeletonPage />}><Terms /></Suspense>} />
        <Route path='/privacy' element={<Suspense fallback={<SkeletonPage />}><Privacy /></Suspense>} />
        <Route path='/pricing' element={<Suspense fallback={<SkeletonPage />}><Pricing /></Suspense>} />
        <Route path='/search' element={<Suspense fallback={<SkeletonPage />}><Search /></Suspense>} />
        <Route path='/features/priority-dm' element={<Suspense fallback={<SkeletonPage />}><PriorityDm /></Suspense>} />
        <Route path='/use-cases/product-management' element={<Suspense fallback={<SkeletonPage />}><ProductManagement /></Suspense>} />
        <Route path='/use-cases/ai-ml' element={<Suspense fallback={<SkeletonPage />}><AInML /></Suspense>} />
        <Route path='/use-cases/software-engineer' element={<Suspense fallback={<SkeletonPage />}><SoftwareEngineering /></Suspense>} />
        <Route path='/use-cases/design' element={<Suspense fallback={<SkeletonPage />}><DesignUxUi /></Suspense>} />
        <Route path='/signin' element={<Suspense fallback={<SkeletonPage />}><SignIn /></Suspense>} />
        <Route path='/signup' element={<Suspense fallback={<SkeletonPage />}><SignUp /></Suspense>} />
        <Route path='/signup2' element={<Suspense fallback={<SkeletonPage />}><SignUp2 /></Suspense>} />
        <Route path='/signup3' element={<Suspense fallback={<SkeletonPage />}><SignUp3 /></Suspense>} />
        <Route path='/signup4' element={<Suspense fallback={<SkeletonPage />}><SignUp4 /></Suspense>} />
        <Route path='/signup5' element={<Suspense fallback={<SkeletonPage />}><SignUp5 /></Suspense>} />
        <Route path="/seeker-dashboard/*" element={<ProtectedRoute><Suspense fallback={<SkeletonPage />}><SekerDashboard /></Suspense></ProtectedRoute>} />
        <Route path='/creator-dashboard/*' element={<ProtectedRoute><Suspense fallback={<SkeletonDashboard />}><CreatorDashboard /></Suspense></ProtectedRoute>} />
        <Route path="/marketplace" element={<ProtectedRoute><Suspense fallback={<SkeletonPage />}><Marketplace /></Suspense></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Suspense fallback={<SkeletonPage />}><Profile /></Suspense></ProtectedRoute>} />
        <Route path="/profile/:userId" element={<Suspense fallback={<SkeletonProfilePage />}><PublicProfile /></Suspense>} />
        <Route path='/search-services' element={<Suspense fallback={<SkeletonPage />}><SearchServices /></Suspense>} />
        <Route path='/booking/*' element={<ProtectedRoute><Suspense fallback={<SkeletonBookingProduct />}><BookingPages /></Suspense></ProtectedRoute>} />
        <Route path='/booking/confirm' element={<ProtectedRoute><Suspense fallback={<SkeletonPage />}><BookingConfirm /></Suspense></ProtectedRoute>} />
        <Route path="/booking/video-call/:id" element={<ProtectedRoute><Suspense fallback={<SkeletonPage />}><VideoCall /></Suspense></ProtectedRoute>}/> 
        <Route path="/booking/video-call-status" element={ <ProtectedRoute> <Suspense fallback={<SkeletonPage />}> <VideoCallWaiting/></Suspense></ProtectedRoute>}/>

      </Routes>
    </>
  )
}

export default App
