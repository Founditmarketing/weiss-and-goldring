import React from 'react';
import Ruler from 'lucide-react/dist/esm/icons/ruler';
import Scissors from 'lucide-react/dist/esm/icons/scissors';
import Shirt from 'lucide-react/dist/esm/icons/shirt';
import { ScrollReveal } from './ScrollReveal';

export const Services: React.FC = () => {
  return (
    <section className="bg-navy-900 text-white py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-sans text-xs tracking-[0.2em] uppercase">The Process</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">The Art of Appointment</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {/* Step 1 */}
          <ScrollReveal className="p-8 group hover:bg-white/5 transition-colors duration-500 rounded-sm border border-transparent hover:border-white/10" width="100%">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-navy-800">
                <Shirt className="w-8 h-8 text-gold-500" />
              </div>
            </div>
            <h4 className="font-serif text-2xl mb-4 text-gold-100">The Consultation</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We begin with a conversation. Understanding your lifestyle, your needs, and the statement you wish to make.
            </p>
          </ScrollReveal>

          {/* Step 2 */}
          <ScrollReveal className="p-8 group hover:bg-white/5 transition-colors duration-500 rounded-sm border border-transparent hover:border-white/10 relative" width="100%" delay={0.2}>
            <div className="hidden md:block absolute top-12 -left-6 w-12 h-[1px] bg-gold-500/30" />
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-navy-800">
                <Scissors className="w-8 h-8 text-gold-500" />
              </div>
            </div>
            <h4 className="font-serif text-2xl mb-4 text-gold-100">The Selection</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Choose from the world's finest fabrics and brands. Castangia, Bugatchi, Matteo Perin—curated by Ted.
            </p>
          </ScrollReveal>

          {/* Step 3 */}
          <ScrollReveal className="p-8 group hover:bg-white/5 transition-colors duration-500 rounded-sm border border-transparent hover:border-white/10 relative" width="100%" delay={0.4}>
            <div className="hidden md:block absolute top-12 -left-6 w-12 h-[1px] bg-gold-500/30" />
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-navy-800">
                <Ruler className="w-8 h-8 text-gold-500" />
              </div>
            </div>
            <h4 className="font-serif text-2xl mb-4 text-gold-100">The Fitting</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Precision tailoring ensures your garment doesn't just fit your body, but enhances your presence.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};