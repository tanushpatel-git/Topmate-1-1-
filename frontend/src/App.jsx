import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Meeting from './pages/Meeting'
import Webniars from './pages/Webinar'
import Cohort from './pages/Cohort'

const App = () => {
  return (
    <>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features/meeting" element={<Meeting/>} />
      <Route path='/features/webinar' element={<Webniars/>} />
      <Route path='/features/cohort' element={<Cohort/>} />
    </Routes>
    
    </>
  )
}

export default App