import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ShieldCheck, Unlock, Key, RefreshCw } from 'lucide-react';

const serviceItems = [
  {
    id: 'unblock',
    icon: Unlock,
    titleKey: 'service.unblock.title',
    descriptionKey: 'service.unblock.description',
  },
  {
    id: 'verification',
    icon: ShieldCheck,
    titleKey: 'service.verification.title',
    descriptionKey: 'service.verification.description',
  },
  {
    id: 'security',
    icon: Key,
    titleKey: 'service.security.title',
    descriptionKey: 'service.security.description',
  },
  {
    id: 'recovery',
    icon: RefreshCw,
    titleKey: 'service.recovery.title',
    descriptionKey: 'service.recovery.description',
  },
];

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service) => {
            const Icon = service.icon;
            
            return (
              <div 
                key={service.id}
                className="bg-gray-800 rounded-lg p-6 transition-all hover:transform hover:scale-105 hover:shadow-xl"
              >
                <div className="rounded-full bg-yellow-400 bg-opacity-20 p-3 w-14 h-14 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-yellow-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t(service.titleKey)}
                </h3>
                
                <p className="text-gray-300">
                  {t(service.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;