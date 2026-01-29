import React from 'react';
import { OCCASIONS } from '../constants';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import { ScrollReveal } from './ScrollReveal';

export const Occasions: React.FC = () => {
  return (
    <section id="lifestyle" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <span className="text-gold-500 font-sans text-xs tracking-[0.2em] uppercase">The Lifestyle</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mt-4">Dressing for the Moment</h2>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-gray-200 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {OCCASIONS.map((item, idx) => (
            <ScrollReveal key={idx} width="100%" delay={0.1 * idx} className="group relative h-[600px] overflow-hidden cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-serif text-3xl italic mb-3">{item.title}</h3>
                <p className="text-gray-200 font-sans text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.description}
                </p>
                <span className="flex items-center gap-2 text-gold-300 font-sans text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Explore Look <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};