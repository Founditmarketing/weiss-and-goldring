import React, { useState, useEffect } from 'react';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import { Button } from './Button';

type Page = 'home' | 'heritage' | 'brands' | 'ted';

interface NavbarProps {
  onBookClick: () => void;
  onNavigate: (page: Page) => void;
  activePage: Page;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onNavigate, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = (isScrolled || activePage !== 'home') ? 'bg-cream/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6';
  const textClass = (isScrolled || activePage !== 'home') ? 'text-navy-900' : 'text-white';
  const buttonVariant = (isScrolled || activePage !== 'home') ? 'primary' : 'outline';

  const links: { name: string; page: Page }[] = [
    { name: 'Home', page: 'home' },
    { name: 'Heritage', page: 'heritage' },
    { name: 'Store Merchandise', page: 'brands' },
    { name: 'The Expert', page: 'ted' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navClass}`}>
      <div className="w-full px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <img
            src="/weissangoldringlogo.png"
            alt="Weiss & Goldring"
            className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${isScrolled || activePage !== 'home' ? 'invert' : ''}`}
          />
          <span className={`text-[0.6rem] tracking-[0.3em] uppercase ${isScrolled || activePage !== 'home' ? 'text-gold-500' : 'text-gold-300'} hidden md:block transition-colors mt-1`}>
            Est. 1899 • Alexandria, LA
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => onNavigate(link.page)}
              className={`text-xs font-sans uppercase tracking-widest hover:text-gold-500 transition-colors ${activePage === link.page ? 'text-gold-500' : textClass}`}
            >
              {link.name}
            </button>
          ))}
          <Button
            onClick={onBookClick}
            variant={buttonVariant}
            className={(!isScrolled && activePage === 'home') ? 'border-white text-white hover:bg-white hover:text-navy-900' : ''}
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${textClass}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-cream shadow-xl py-8 flex flex-col items-center gap-6 md:hidden h-screen transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => { onNavigate(link.page); setIsMobileMenuOpen(false); }}
            className={`text-sm font-sans uppercase tracking-widest hover:text-gold-500 ${activePage === link.page ? 'text-gold-500' : 'text-navy-900'}`}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            {link.name}
          </button>
        ))}
        <Button
          onClick={() => { onBookClick(); setIsMobileMenuOpen(false); }}
          tabIndex={isMobileMenuOpen ? 0 : -1}
        >
          Book Appointment
        </Button>
      </div>
    </nav>
  );
};