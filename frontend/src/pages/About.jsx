import React from "react";
import Navbar from "../components/commonCompo/Navbar";
import Footer from "../components/commonCompo/Footer";
import AboutHero from "../components/AboutPageComponet/AboutHero";
import Aboutjourney from "../components/AboutPageComponet/Aboutjourney";
import AboutBrands from "../components/AboutPageComponet/AboutBrands";
import AboutTeam from "../components/AboutPageComponet/AboutTeam";
import ContactSection from "../components/AboutPageComponet/ContactSection ";

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutTeam />
      <Aboutjourney />
      <AboutBrands />
      <ContactSection />            
      <Footer />
      
    </div>
  );
}