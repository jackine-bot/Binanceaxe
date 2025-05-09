import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LogInIcon as LogoIcon, Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { language, changeLanguage, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'ar' : 'en');
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <LogoIcon size={28} className="text-yellow-400 mr-2" />
          <span className="text-xl font-bold text-white">{t('site.title')}</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-yellow-400 transition">
            {t('nav.home')}
          </Link>
          <a href="#services" className="text-white hover:text-yellow-400 transition">
            {t('nav.services')}
          </a>
          <a href="#contact" className="text-white hover:text-yellow-400 transition">
            {t('nav.contact')}
          </a>
          
          <button 
            onClick={toggleLanguage}
            className="ml-4 flex items-center text-white hover:text-yellow-400 transition"
          >
            <Globe size={18} className="mr-1" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleLanguage}
            className="mr-4 text-white hover:text-yellow-400 transition"
          >
            <Globe size={20} />
          </button>
          
          <button 
            onClick={toggleMenu}
            className="text-white hover:text-yellow-400 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 text-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-yellow-400 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <a 
              href="#services" 
              className="text-white hover:text-yellow-400 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.services')}
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-yellow-400 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;