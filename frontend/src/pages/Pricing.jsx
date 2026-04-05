import React from 'react';
import Navbar from '../components/commonCompo/Navbar';
import Footer from '../components/commonCompo/Footer';
import EarningsSection from '../components/PricingPageComponet/EarningsSection';
export default function Pricing() {
  return (
    <div>   
      <Navbar />
      <EarningsSection />
      <Footer />
    </div>
  );
}