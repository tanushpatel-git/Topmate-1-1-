import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Meeting from './pages/Meeting'
import Navbar from './components/commonCompo/Navbar'

const App = () => {
  return (
    <>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features/meeting" element={<Meeting/>} />
    </Routes>
    
    </>
  )
}

export default App