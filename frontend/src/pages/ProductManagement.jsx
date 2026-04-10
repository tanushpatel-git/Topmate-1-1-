import React from 'react'
import Navbar from '../components/commonCompo/Navbar'
import Footer from '../components/commonCompo/Footer'
import TopOfUseCases from '../components/ui/TopOfUseCases'
import EveryWantTo from '../components/ProductManagementComponent/EveryWantTo'
import WhatYouCanOffer from '../components/ProductManagementComponent/WhatYouCanOffer'

const ProductManagement = () => {
  return (
    <>
      <Navbar theam='black' />
      <TopOfUseCases
        theam="dark"
        theamSet="blue"
        badge="Product Management"
        title="Product Management"
        title2="Mentorship &"
        title3="Courses"
        description="Build a PM mentorship business. Mock interviews, PM courses, career transitions. Product managers earn ₹50K-5L/month on Topmate."
        button1="Start Product Management Mentoring Free"
        button2="See Revenue Examples"
      />
      <EveryWantTo />
      <WhatYouCanOffer />
      <Footer />
    </>
  )
}

export default ProductManagement