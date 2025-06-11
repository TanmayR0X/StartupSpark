import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import CompaniesLogo from './components/CompaniesLogo';
import FeatureSection from './components/FeatureSection';
import ScheduleSection from './components/ScheduleSection';
import ServiceSection from './components/ServiceSection';
import TestimonialSection from './components/TestimonialSection';
import NewsLetterSection from './components/NewsLetterSection';
import FooterSection from './components/FooterSection';
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CompaniesLogo/>
    <FeatureSection/>
    <ScheduleSection/>
    <ServiceSection/>
    <TestimonialSection/>
    <NewsLetterSection/>
    <FooterSection/>
    </>
  );
};

export default App;