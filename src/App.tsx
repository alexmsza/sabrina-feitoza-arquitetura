import { useState, useEffect } from 'react';
import { PageRoute } from './types/index.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { WalkthroughPage } from './pages/WalkthroughPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '');
      if (path === 'tour-villa-bella' || path === 'tour') {
        setCurrentPage('tour-villa-bella');
      } else if (path === 'contato' || path === 'contact') {
        setCurrentPage('contato');
      } else {
        setCurrentPage('home');
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState(null, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      
      <main>
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'tour-villa-bella' && <WalkthroughPage onNavigate={navigateTo} />}
        {currentPage === 'contato' && <ContactPage onNavigate={navigateTo} />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
