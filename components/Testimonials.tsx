import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import Star from 'lucide-react/dist/esm/icons/star';
import { ScrollReveal } from './ScrollReveal';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-navy-900 py-24 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold-500/20 m-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold-500/20 m-10" />

      <div className="container mx-auto px-6 relative z-10 text-center">

        <ScrollReveal width="100%">
          <div className="max-w-4xl mx-auto h-56 md:h-48 relative">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center ${index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
              >
                <div className="flex gap-1 mb-6 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <h3 className="font-serif text-xl md:text-3xl italic leading-relaxed mb-6">
                  "{testimonial.text}"
                </h3>
                <div className="flex flex-col items-center">
                  <span className="font-sans text-sm font-semibold tracking-widest uppercase text-gold-300">
                    {testimonial.author}
                  </span>
                  <span className="font-sans text-xs text-gray-400 mt-1 flex items-center gap-1">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-gold-500 w-8' : 'bg-gray-700 hover:bg-gray-500'
                  }`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};