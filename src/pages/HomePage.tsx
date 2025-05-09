import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;