import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Meeting from './pages/Meeting'
import Webniars from './pages/Webinar'

const App = () => {
  return (
    <>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features/meeting" element={<Meeting/>} />
      <Route path='/features/webinar' element={<Webniars/>} />
    </Routes>
    
    </>
  )
}

export default App