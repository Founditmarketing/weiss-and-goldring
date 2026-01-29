import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandShowcase } from './components/BrandShowcase';
import { MeetTed } from './components/MeetTed';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { HeritagePage } from './components/HeritagePage';
import { MerchandisePage } from './components/MerchandisePage';
import { Services } from './components/Services';
import { StyleConcierge } from './components/StyleConcierge';

type Page = 'home' | 'heritage' | 'brands' | 'ted';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const openAppointment = () => setIsAppointmentOpen(true);
  const closeAppointment = () => setIsAppointmentOpen(false);

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Allow time for Home component to mount before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateTo = (page: Page) => {
    if (page === 'ted') {
      scrollToSection('ted');
      return;
    }
    setCurrentPage(page);
    // Ensure smooth scroll to top when switching 'pages'
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleFooterLink = (href: string) => {
    if (href === '#heritage') {
      navigateTo('heritage');
    } else if (href === '#brands') {
      navigateTo('brands');
    } else if (href === '#ted') {
      scrollToSection('ted');
    } else {
      // Default fallback
      navigateTo('home');
    }
  };

  return (
    <div className="bg-cream min-h-screen selection:bg-gold-300 selection:text-navy-900 font-sans">
      <Navbar onNavigate={navigateTo} onBookClick={openAppointment} activePage={currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onExplore={() => navigateTo('brands')} />
            {/* We keep BrandShowcase on home as a teaser */}
            <BrandShowcase />
            <Services />
            <MeetTed onBook={openAppointment} />
            <Testimonials />
          </>
        )}

        {currentPage === 'heritage' && (
          <HeritagePage onBack={() => navigateTo('home')} />
        )}

        {currentPage === 'brands' && (
          <MerchandisePage onBack={() => navigateTo('home')} />
        )}
      </main>

      <Footer onLinkClick={handleFooterLink} />
      
      <AppointmentModal isOpen={isAppointmentOpen} onClose={closeAppointment} />
      <StyleConcierge />
    </div>
  );
}

export default App;