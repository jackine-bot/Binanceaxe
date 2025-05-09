import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CountUp from 'react-countup';

const stats = [
  {
    id: 'volume',
    value: 76.5,
    labelKey: 'stats.daily.trades',
    suffix: 'B',
    suffixKey: 'stats.billion',
    duration: 2.5,
  },
  {
    id: 'users',
    value: 150,
    labelKey: 'stats.users',
    suffix: 'M',
    suffixKey: 'stats.million',
    duration: 2.0,
  },
  {
    id: 'countries',
    value: 180,
    labelKey: 'stats.countries',
    suffix: '+',
    duration: 1.5,
  },
  {
    id: 'resolved',
    value: 98.5,
    labelKey: 'stats.resolved',
    suffix: '%',
    duration: 2.2,
  },
];

const StatsSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            {t('stats.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-6 bg-gray-800 rounded-lg transform transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-yellow-400">
                    <CountUp 
                      end={stat.value} 
                      duration={stat.duration} 
                      decimals={stat.id === 'volume' || stat.id === 'resolved' ? 1 : 0}
                    />
                  </span>
                  <span className="text-2xl font-medium text-yellow-400 ml-1">
                    {stat.suffix}
                  </span>
                </div>
                {stat.suffixKey && (
                  <span className="text-sm text-gray-400 -mt-1">
                    {t(stat.suffixKey)}
                  </span>
                )}
                <div className="mt-3 text-gray-300">
                  {t(stat.labelKey)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;