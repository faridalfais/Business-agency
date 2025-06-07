import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import TimelineSection from '../sections/TimelineSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FaqSection from '../sections/FaqSection';
import ContactSection from '../sections/ContactSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TimelineSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;