import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import TimelineSection from './sections/TimelineSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';
import HeroSection from './sections/HeroSection';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="font-poppins">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/hero" element={<HeroSection />} />
              <Route path="/About" element={<AboutSection />} />
              <Route path="/Services" element={<ServicesSection />} />
              <Route path="/Timeline" element={<TimelineSection />} />
              <Route path="/Testimonials" element={<TestimonialsSection />} />
              <Route path="/Faq" element={<FaqSection />} />
              <Route path="/Contact" element={<ContactSection />} />
              {/* Future routes can be added here */}
            </Routes>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;