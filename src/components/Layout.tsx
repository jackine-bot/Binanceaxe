import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isRTL } = useLanguage();
  
  return (
    <div className={`min-h-screen flex flex-col font-sans ${isRTL ? 'font-arabic' : 'font-body'}`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;