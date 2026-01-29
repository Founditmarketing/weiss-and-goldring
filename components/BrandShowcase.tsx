import React from 'react';
import { BRANDS } from '../constants';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import { ScrollReveal } from './ScrollReveal';

export const BrandShowcase: React.FC = () => {
  return (
    <section id="brands" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-sans text-xs tracking-[0.2em] uppercase">Curated Excellence</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mt-4 mb-6">Store Merchandise</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-sans text-sm leading-relaxed">
            Each piece in our store is chosen for its heritage, quality, and timeless appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          {/* Main Feature - Castangia */}
          <ScrollReveal className="h-[500px] md:h-full md:col-span-8 md:row-span-2 relative group overflow-hidden cursor-pointer rounded-sm" width="100%">
            <img
              src={BRANDS[0].imageUrl}
              alt={BRANDS[0].name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full">
              <span className="block text-gold-300 text-xs tracking-widest uppercase mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{BRANDS[0].heritage}</span>
              <h3 className="font-serif text-3xl md:text-5xl italic mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">{BRANDS[0].name}</h3>
              <div className="overflow-hidden">
                <p className="font-sans text-sm md:text-base text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0 max-w-lg leading-relaxed">
                  {BRANDS[0].description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-gold-300 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-x-[-10px] group-hover:translate-x-0">
                View Collection <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </ScrollReveal>

          {/* Secondary Feature - Matteo Perin */}
          <ScrollReveal className="h-80 md:h-full md:col-span-4 md:row-span-1 relative group overflow-hidden cursor-pointer rounded-sm" width="100%" delay={0.2}>
            <img
              src={BRANDS[1].imageUrl}
              alt={BRANDS[1].name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="text-gold-300 text-[10px] uppercase tracking-wider mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">{BRANDS[1].heritage}</span>
              <h3 className="font-serif text-2xl md:text-3xl transition-transform duration-300 group-hover:-translate-y-1">{BRANDS[1].name}</h3>
            </div>
          </ScrollReveal>

          {/* Featured Text Block - Bugatchi */}
          <ScrollReveal className="h-80 md:h-full md:col-span-4 md:row-span-1 relative group overflow-hidden cursor-pointer bg-gold-100 rounded-sm" width="100%" delay={0.3}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center border-[1px] border-gold-300/30 m-2 group-hover:border-navy-900/20 transition-colors duration-500">
              <span className="font-sans text-xs tracking-widest text-navy-900 uppercase mb-4">Featured</span>
              <h3 className="font-serif text-3xl text-navy-900 mb-4 group-hover:scale-110 transition-transform duration-500">{BRANDS[2].name}</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-6 group-hover:text-navy-900 transition-colors">{BRANDS[2].description}</p>
              <span className="text-gold-600 font-serif italic group-hover:text-navy-900 transition-colors">View Collection</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {BRANDS.slice(3).map((brand, idx) => (
            <ScrollReveal key={brand.id} className="relative h-64 md:h-80 group overflow-hidden cursor-pointer rounded-sm" width="100%" delay={0.1 * idx}>
              <img
                src={brand.imageUrl}
                alt={brand.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{brand.name}</h3>
                <span className="text-gold-300 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                  {brand.heritage}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};