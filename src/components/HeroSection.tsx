import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-4 py-32 z-10 text-white relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-all transform hover:scale-105 shadow-lg"
          >
            <span>{t('hero.cta')}</span>
            <ArrowIcon size={18} className={`${isRTL ? 'mr-2' : 'ml-2'}`} />
          </a>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;