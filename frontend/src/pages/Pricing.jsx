import React from 'react';
import Navbar from '../components/commonCompo/Navbar';
import Footer from '../components/commonCompo/Footer';
import EarningsSection from '../components/PricingPageComponet/EarningsSection';
import PricingCards from '../components/PricingPageComponet/PricingCards';
import PricingGrid from '../components/PricingPageComponet/PricingGrid';
import PricingComparison from '../components/PricingPageComponet/PricingComparison';
import SwiperPage from '../components/PricingPageComponet/SwiperPage';
import CommonQnAMeeting from '../components/ui/CommonQnAMeeting';

import HomeFAQ from '../components/HomePageComponent/Hero5';

export default function Pricing() {

const faqs = [
  {
    question: "What is topmate?",
    answer:
      "Topmate is a tool that enables you to connect with your audience through 1:1 sessions - to share your knowledge and monetise your time better. Just create your personal link, add your services, availability and charges; and share your link with your followers. Your followers can now book a call to connect with you.",
  },
  {
    question: "Can I conduct paid sessions?",
    answer: "Yes, you can conduct both free and paid sessions.",
  },
  {
    question: "How much can I charge for my sessions?",
    answer:
      "Absolutely, we enable you to conduct both free and paid sessions with your followers",
  },
  {
    question: "How do the payments work?",
    answer:
      "It really depends on how much value you think you're providing and how much your followers are willing to pay. Our creators charge anywhere from $50 to $500.",
  },
  {
    question: "Wait, is Topmate really free?",
    answer:
      "Yes! We're free to use and charge a very tiny commission on your earnings (10%).",
  },
  {
    question: "What are the transaction charges?",
    answer:
      "Payment gateways like Stripe and PayPal typically charge around 3% of the transaction amount.",
  },
];

  return (
    <div>   
      
      <Navbar />
      <EarningsSection />
      <PricingCards/>
      <PricingGrid/>
      <PricingComparison />
      <CommonQnAMeeting faqs={faqs} theme="light" title="Frequently asked questions" />
      <Footer/>
      </div>
  );
}