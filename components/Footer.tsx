import React from 'react';
import { NAV_LINKS } from '../constants';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Phone from 'lucide-react/dist/esm/icons/phone';
import Mail from 'lucide-react/dist/esm/icons/mail';
import Instagram from 'lucide-react/dist/esm/icons/instagram';
import Facebook from 'lucide-react/dist/esm/icons/facebook';

interface FooterProps {
  onLinkClick: (href: string) => void;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onLinkClick, onContactClick }) => {
  return (
    <footer className="bg-navy-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <div
              className="flex flex-col items-start cursor-pointer group"
              onClick={() => onLinkClick('home')}
            >
              <img
                src="/weissangoldringlogo.png"
                alt="Weiss & Goldring"
                className="h-9 w-auto mb-2 object-contain"
              />
              <span className="text-[0.6rem] tracking-[0.3em] uppercase text-gold-500">Est. 1899 • Alexandria, LA</span>
            </div>
            <p className="mt-6 text-gray-400 text-xs leading-relaxed font-sans">
              The premier destination for luxury menswear in Central Louisiana.
              Celebrating over a century of style, service, and tradition.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold-100 font-sans text-xs uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => onLinkClick('home')}
                  className="text-gray-400 hover:text-white text-sm font-sans transition-colors uppercase tracking-wider text-left"
                >
                  Home
                </button>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onLinkClick(link.href)}
                    className="text-gray-400 hover:text-white text-sm font-sans transition-colors uppercase tracking-wider text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-100 font-sans text-xs uppercase tracking-widest mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm font-sans">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>3601 Masonic Drive<br />Alexandria, LA 71301</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-sans hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="tel:+13184439200">(318) 443-9200</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-sans hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <button onClick={onContactClick} className="text-left hover:text-white transition-colors">Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gold-100 font-sans text-xs uppercase tracking-widest mb-6">Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm font-sans">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white">10 - 6</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">10 - 5</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-gold-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-sans">
            © {new Date().getFullYear()} Weiss & Goldring. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/weissgoldring/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="https://www.facebook.com/WeissGoldring/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};