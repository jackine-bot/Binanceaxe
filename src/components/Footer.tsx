import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LogInIcon as LogoIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <LogoIcon size={24} className="text-yellow-400 mr-2" />
            <span className="text-lg font-bold text-white">{t('site.title')}</span>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm mb-2 text-center md:text-right max-w-md">
              {t('footer.disclaimer')}
            </p>
            <div className="flex mt-2 space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-sm text-gray-400 hover:text-yellow-400 transition">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-yellow-400 transition">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© {currentYear} Binance. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;