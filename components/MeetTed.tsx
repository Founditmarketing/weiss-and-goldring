import React from 'react';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';

interface MeetTedProps {
  onBook: () => void;
}

export const MeetTed: React.FC<MeetTedProps> = ({ onBook }) => {
  return (
    <section id="ted" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">

          <ScrollReveal className="w-full md:w-1/2 relative" width="100%" variant="slide-right">
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative z-10">
              <img
                src="/TedSilver.jpg"
                alt="Ted Silver - The Owner"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative Border */}
            <div className="absolute top-8 -left-8 w-full h-full border-2 border-gold-500 z-0 hidden md:block" />
          </ScrollReveal>

          <ScrollReveal className="w-full md:w-1/2 text-left" width="100%" delay={0.2}>
            <h2 className="font-serif text-5xl text-navy-900 mb-8">Meet Ted Silver</h2>

            <div className="space-y-6 text-gray-700 font-sans leading-relaxed">
              <p>
                In a world of fast fashion, Ted stands as a guardian of sartorial excellence.
                With decades of experience, his gift isn't just in knowing measurements, but in understanding men.
              </p>
              <p>
                Generous with his time and expertise, a fitting with Ted is more than a transaction—it's
                an education in style and a boost to your confidence. He curates Weiss & Goldring
                with a singular vision: to help every man who walks through the door look and feel his absolute best.
              </p>
              <blockquote className="border-l-2 border-gold-500 pl-6 my-8 italic font-serif text-xl text-navy-800">
                "Style is personal. It is the outward expression of your inner character. My job is simply to help you articulate it clearly."
              </blockquote>
            </div>

            <Button onClick={onBook} className="mt-8">
              Schedule a Consultation with Ted
            </Button>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};