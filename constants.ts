import { Brand } from './types';

export const BRANDS: Brand[] = [
  {
    id: 'castangia',
    name: 'Castangia 1850',
    description: 'The epitome of Italian sartorial tradition. Handmade suits that breathe history and excellence.',
    heritage: 'Since 1850',
    imageUrl: '/Castangia1850main.jpg'
  },
  {
    id: 'matteo-perin',
    name: 'Matteo Perin',
    description: 'Bespoke lifestyle design. Not just clothing, but an expression of personal luxury.',
    heritage: 'Contemporary Bespoke',
    imageUrl: '/matteoperinbackground.jpeg'
  },
  {
    id: 'bugatchi',
    name: 'Bugatchi',
    description: 'Modern sophistication meets comfort. The perfect balance for the contemporary gentleman.',
    heritage: 'Modern Luxury',
    imageUrl: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1887&auto=format&fit=crop'
  },
  {
    id: 'fedeli',
    name: 'Fedeli',
    description: 'Exquisite cashmere and knitwear. Texture and warmth refined to their highest forms.',
    heritage: 'Made in Italy',
    imageUrl: '/fedeliimage.jpg'
  },
  {
    id: 'baccarat',
    name: 'Baccarat',
    description: 'The crystal of kings. Elevating your lifestyle with the world’s finest accessories.',
    heritage: 'Since 1764',
    imageUrl: '/baccaratimage.jpg'
  }
];

export const BRAND_CATEGORIES = {
  clothing: [
    "Castangia 1850", "Canali", "Jack Victor", "Rochester Tailored Clothing", "Scabal"
  ],
  sportswear: [
    "Bugatchi", "Fedeli", "Greyson", "Johnnie-O", "Stenströms",
    "Giannetto", "Matteo Perin", "Castangia", "Di Bello"
  ],
  trousers: [
    "Meyer", "Ballin", "Marco Pescarolo", "Castangia", "B Settecento", "Paige"
  ],
  footwear: [
    "On Running", "Magnanni", "Santoni", "Officine Creative", "ONCEPT-NYC"
  ],
  accessories: [
    "W. Kleinberg", "G. Inglese", "Castangia", "Matteo Perin"
  ]
};

export const NAV_LINKS = [
  { name: 'Heritage', href: '#heritage' },
  { name: 'Store Merchandise', href: '#brands' },
  { name: 'The Expert', href: '#ted' },
];

export const TESTIMONIALS = [
  {
    text: "Ted Silver runs the finest men's store in Louisiana. The selection is incredible, but the service is what keeps you coming back. A true gentleman's experience.",
    author: "Christopher H.",
    role: "Google Review"
  },
  {
    text: "Excellent service and quality. Ted has a way of knowing exactly what fits and looks good on you. I wouldn't buy a suit anywhere else.",
    author: "David M.",
    role: "Google Review"
  },
  {
    text: "Hands down the best place to shop for men's clothing in Alexandria. The attention to detail and alterations are perfect every time.",
    author: "Jason B.",
    role: "Google Review"
  },
  {
    text: "Wonderful experience. They took the time to make sure my wedding tuxedo was absolutely perfect. Highly recommended!",
    author: "Michael P.",
    role: "Google Review"
  }
];

export const OCCASIONS = [
  {
    title: "Black Tie & Formal",
    description: "For the moments that matter most. Exquisite tuxedos and dinner jackets.",
    image: "https://images.unsplash.com/photo-1566236966673-f1124f9f7831?q=80&w=1780&auto=format&fit=crop"
  },
  {
    title: "Executive Business",
    description: "Command the room with power suits tailored to your exact specifications.",
    image: "https://images.unsplash.com/photo-1548123378-bde4eca81d43?q=80&w=1776&auto=format&fit=crop"
  },
  {
    title: "Luxury Leisure",
    description: "Sophisticated comfort for the weekend. Cashmere knits and refined denim.",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1887&auto=format&fit=crop"
  }
];