import React from 'react';
import Navbar from '../components/commonCompo/Navbar';
import Footer from '../components/commonCompo/Footer';
import EarningsSection from '../components/PricingPageComponet/EarningsSection';
import PricingCards from '../components/PricingPageComponet/PricingCards';
import PricingGrid from '../components/PricingPageComponet/PricingGrid';
import PricingComparison from '../components/PricingPageComponet/PricingComparison';

export default function Pricing() {
  return (
    <div>   
      
      <Navbar />
      <EarningsSection />
      <PricingCards/>
      <PricingGrid/>
      <PricingComparison />
      </div>
  );
}