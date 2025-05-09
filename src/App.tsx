import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Layout>
          <HomePage />
        </Layout>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;