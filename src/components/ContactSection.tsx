import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageSquare, BadgeCheck } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const whatsappNumber = '+34632800363';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-gray-300">
                {t('contact.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-all transform hover:scale-105 shadow-lg w-full max-w-md"
              >
                <MessageSquare size={20} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span>{t('contact.button')}</span>
              </a>
              
              <p className="mt-4 text-gray-400 text-sm flex items-center">
                <BadgeCheck size={16} className={`${isRTL ? 'ml-1' : 'mr-1'} text-yellow-400`} />
                {t('contact.note')}
              </p>
              
              <div className="mt-12 flex items-center justify-center">
                <div className="h-px bg-gray-700 w-16"></div>
                <span className="mx-4 text-gray-500 text-sm">{t('contact.official')}</span>
                <div className="h-px bg-gray-700 w-16"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;