import React from 'react';
import { Button } from './Button';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-24 bg-cream border-t border-gold-500/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-sm border border-gray-100 text-center relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900" />
          
          <span className="text-gold-500 font-sans text-xs tracking-[0.2em] uppercase mb-4 block">The Gentleman's List</span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-6">Join the Inner Circle</h2>
          <p className="text-gray-600 font-sans text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Receive early access to seasonal arrivals, invitations to private trunk shows, and style advice from Ted.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 bg-gray-50 border border-gray-200 px-6 py-3 text-sm font-sans focus:outline-none focus:border-gold-500 transition-colors"
            />
            <Button variant="primary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          
          <p className="mt-6 text-[10px] text-gray-400 uppercase tracking-wider">
            Respecting your privacy, always.
          </p>
        </div>
      </div>
    </section>
  );
};