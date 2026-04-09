import React from 'react'
import { Routes, Route } from 'react-router'
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

const App = () => {
  return (
    <>

      <ScrollToTop />
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
        <Route path='/features/priority-dm' element={<PriorityDm />} />
        <Route path='/use-cases/product-management' element={<ProductManagement />} />
      </Routes>

    </>
  )
}

export default App