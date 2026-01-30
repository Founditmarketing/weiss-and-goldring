import React from 'react';
import { Button } from './Button';
import { BRAND_CATEGORIES } from '../constants';

interface MerchandisePageProps {
    onBack: () => void;
}

export const MerchandisePage: React.FC<MerchandisePageProps> = ({ onBack }) => {
    return (
        <div className="pt-24 pb-12 bg-cream animate-fade-in-up min-h-screen">
            <div className="container mx-auto px-6">
                <div className="mb-8">
                    <Button variant="text" onClick={onBack} className="pl-0 mb-4">← Back to Home</Button>
                </div>

                <div className="text-center mb-16">
                    <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4 block">The Collection</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-navy-900 mb-6">Our Merchandise</h1>
                    <p className="font-sans text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We curate over 300 of the world's finest brands. From Italian bespoke tailoring to modern performance sportswear, every piece in our store is selected for its quality, heritage, and style.
                    </p>
                </div>

                {/* Categories */}
                <div className="space-y-20">
                    {/* Clothing & Suiting */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="font-serif text-3xl text-navy-900 shrink-0">Fine Tailoring & Clothing</h3>
                            <div className="h-[1px] bg-gold-300/30 w-full"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4">
                            {BRAND_CATEGORIES.clothing.map(brand => (
                                <div key={brand} className="text-gray-600 font-sans hover:text-navy-900 transition-colors cursor-default">
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Sportswear */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="font-serif text-3xl text-navy-900 shrink-0">Luxury Sportswear</h3>
                            <div className="h-[1px] bg-gold-300/30 w-full"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4">
                            {BRAND_CATEGORIES.sportswear.map(brand => (
                                <div key={brand} className="text-gray-600 font-sans hover:text-navy-900 transition-colors cursor-default">
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Trousers */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="font-serif text-3xl text-navy-900 shrink-0">Trousers & Denim</h3>
                            <div className="h-[1px] bg-gold-300/30 w-full"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4">
                            {BRAND_CATEGORIES.trousers.map(brand => (
                                <div key={brand} className="text-gray-600 font-sans hover:text-navy-900 transition-colors cursor-default">
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Footwear & Accessories */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="font-serif text-3xl text-navy-900 shrink-0">Footwear & Accessories</h3>
                            <div className="h-[1px] bg-gold-300/30 w-full"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4">
                            {BRAND_CATEGORIES.footwear.concat(BRAND_CATEGORIES.accessories).map(brand => (
                                <div key={brand} className="text-gray-600 font-sans hover:text-navy-900 transition-colors cursor-default">
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* CTA */}
                <div className="mt-24 p-12 bg-navy-900 text-center rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1887&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
                    <div className="relative z-10">
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">Experience the Quality</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Pictures cannot convey the feel of the fabric or the precision of the fit. Visit us in Alexandria to explore our full collection.
                        </p>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=3601+Masonic+Drive,+Alexandria,+LA+71301"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-navy-900">
                                Visit the Store
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};