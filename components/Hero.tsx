import React from 'react';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bowtieheader.jpg"
          alt="Gentleman in suit"
          className="w-full h-full object-cover object-top md:object-[50%_25%]"
        />
        <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-20">
        <ScrollReveal delay={0.2} width="100%">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            The Difference Between <br className="hidden md:block" />
            Being Dressed and <br className="block" />
            <span className="italic text-gold-100">Well Dressed</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.4} width="100%">
          <p className="font-sans text-gray-200 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-10 tracking-wide">
            Serving Alexandria’s gentlemen for over a century with fine tailoring and personal attention.
          </p>
        </ScrollReveal>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <ScrollReveal delay={0.6}>
            <Button onClick={onExplore} className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent">
              Explore the Collection
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};