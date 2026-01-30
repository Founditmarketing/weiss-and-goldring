import React from 'react';
import { Button } from './Button';

interface HeritagePageProps {
  onBack: () => void;
}

export const HeritagePage: React.FC<HeritagePageProps> = ({ onBack }) => {
  return (
    <div className="pt-24 pb-12 bg-cream animate-fade-in-up">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <Button variant="text" onClick={onBack} className="pl-0 mb-4">← Back to Home</Button>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4 block">Our Legacy</span>
          <h1 className="font-serif text-5xl md:text-7xl text-navy-900 mb-8">Since 1899</h1>
          <p className="font-serif text-xl md:text-2xl text-gray-600 italic leading-relaxed">
            "For over 125 years, Weiss & Goldring has been the standard-bearer for style in Central Louisiana."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative md:max-w-md md:mx-auto">
            <div className="absolute top-4 -left-4 w-full h-full border border-gold-500 z-0" />
            <img
              src="/heritageone.jpg"
              alt="Vintage Tailoring"
              className="relative z-10 w-full grayscale contrast-125 rounded-sm"
            />
          </div>
          <div className="font-sans text-gray-700 leading-relaxed space-y-6">
            <h3 className="font-serif text-3xl text-navy-900">A Tradition Begins</h3>
            <p>
              In 1899, Weiss & Goldring opened its doors in Alexandria, establishing a foundation built on integrity, quality, and service. From the very beginning, the goal was simple yet ambitious: to provide the gentlemen of Louisiana with clothing that rivaled the finest establishments in New York or London.
            </p>
            <p>
              Through the Roaring Twenties, the challenges of the Great Depression, and the changing tides of fashion, the store remained a steadfast pillar of the community. It wasn't just a place to buy a suit; it was where relationships were built, and where generations of men learned the value of a proper fit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="font-sans text-gray-700 leading-relaxed space-y-6 order-2 md:order-1">
            <h3 className="font-serif text-3xl text-navy-900">The Silver Era</h3>
            <p>
              The legacy continued as the Silver family took the helm, infusing the historic brand with new energy while honoring its deep roots. Today, under the guidance of Ted Silver, Weiss & Goldring represents the perfect synthesis of heritage and modernity.
            </p>
            <p>
              Ted's vision has transformed the store into a destination that celebrates the art of living well. From moving to our current, elegant location on Dorchester Drive to curating exclusive partnerships with world-renowned brands like Castangia and Matteo Perin, the commitment remains unchanged: to offer an experience that is as exceptional as the clothing itself.
            </p>
          </div>
          <div className="relative order-1 md:order-2 md:max-w-md md:mx-auto">
            <div className="absolute bottom-4 -right-4 w-full h-full border border-navy-900 z-0" />
            <img
              src="/newheritageimage.JPG"
              alt="Modern Storefront"
              className="relative z-10 w-full rounded-sm"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24 text-center max-w-3xl mx-auto border-t border-gold-300/30 pt-16">
          <h3 className="font-serif text-3xl text-navy-900 mb-8">Our Enduring Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-gold-500 font-sans text-xs uppercase tracking-widest mb-2">Service</h4>
              <p className="text-sm text-gray-600">Personal attention that goes beyond the sale. We build wardrobes, not just transactions.</p>
            </div>
            <div>
              <h4 className="text-gold-500 font-sans text-xs uppercase tracking-widest mb-2">Quality</h4>
              <p className="text-sm text-gray-600">Uncompromising standards. If it’s in our store, it is the best of its kind.</p>
            </div>
            <div>
              <h4 className="text-gold-500 font-sans text-xs uppercase tracking-widest mb-2">Community</h4>
              <p className="text-sm text-gray-600">Proudly serving Alexandria and Central Louisiana for over a century.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};