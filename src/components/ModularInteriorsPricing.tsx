import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Star } from 'lucide-react';

interface PackageItem {
  name: string;
  tagline: string;
  priceLabel: string;
  image: string;
  isPopular: boolean;
  ctaText: string;
  features: string[];
}

const packages: PackageItem[] = [
  {
    name: "2 - 5 Lakh Interior",
    tagline: "Essential Modular Solutions",
    priceLabel: "Smart Budget",
    image: "/pricing/modular/1.png", // maps to public/pricing/modular-basic.jpeg
    isPopular: false,
    ctaText: "Start Your Project",
    features: [
      "Modular Kitchen Essential Layout",
      "Standard Wardrobes",
      "Basic TV Unit Layout",
      "2D Layout & Optimization"
    ]
  },
  {
    name: "5 - 10 Lakh Interior",
    tagline: "Premium Finishes & Storage",
    priceLabel: "Most Preferred",
    image: "/pricing/modular/2.png",
    isPopular: true,
    ctaText: "Start Your Project",
    features: [
      "Semi-Modular Kitchen Setup",
      "Premium Sliding Wardrobes",
      "Designer Living Room TV Unit",
      "False Ceiling with Basic COB Lights",
      "Material Choice & Soft-Close Hardware"
    ]
  },
  {
    name: "10 - 15 Lakh Interior",
    tagline: "Advanced Modular & Space Saving",
    priceLabel: "Elite Modular",
    image: "/pricing/modular/3.png",
    isPopular: false,
    ctaText: "Start Your Project",
    features: [
      "Full Acrylic/Glass Modular Kitchen",
      "Walk-in Wardrobe Concepts",
      "Custom Multi-Functional Storage Units",
      "Premium Tandem Boxes & Lift-up Systems",
      "Dedicated Site Supervisor Allocation"
    ]
  }
];

const ModularInteriorsPricing: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#F8F6F2] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#c8a46a]/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#c8a46a]/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#B08B57] uppercase tracking-[0.35em] text-xs font-bold">
              Modular Pricing
            </span>
            <h2 className="text-5xl md:text-7xl font-light text-[#1f1f1f] mt-8 leading-[1]">
              Sleek & Modular <br />
              <span className="italic font-serif text-[#B08B57]">
                Optimized For Modern Lifestyles
              </span>
            </h2>
            <p className="text-[#666] text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
              Upgrade your essential living spaces with highly-efficient, ergonomic, 
              and premium modular setups tailor-made to size and utility constraints.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {packages.map((pkg, idx) => (
            <ServiceCard key={idx} pkg={pkg} index={idx} />
          ))}
        </div>

        <div className="mt-20 text-center border-t border-stone-200 pt-10">
          <p className="text-stone-400 text-sm italic">
            *Pricing may vary depending on carpet area, material selection, customization, and project scope.
          </p>
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  pkg: PackageItem;
  index: number;
}

const ServiceCard: React.FC<CardProps> = ({ pkg, index }) => {
  const isDark = pkg.isPopular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`group relative overflow-hidden transition-all duration-700 rounded-[38px] flex flex-col h-full ${
        isDark
          ? 'bg-[#1d1d1d] text-white scale-[1.03] shadow-[0_25px_80px_rgba(0,0,0,0.18)]'
          : 'bg-white text-[#1d1d1d] shadow-[0_15px_50px_rgba(0,0,0,0.06)] hover:-translate-y-3'
      }`}
    >
      <div className="relative h-[320px] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-[2000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {pkg.isPopular && (
          <div className="absolute top-5 right-5 bg-[#B08B57] text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
            <Star size={12} fill="currentColor" />
            Most Popular
          </div>
        )}
        <div className="absolute bottom-8 left-8">
          <p className="text-white/70 uppercase tracking-[0.3em] text-xs">{pkg.priceLabel}</p>
          <h2 className="text-white text-3xl font-normal mt-3 leading-none">{pkg.name}</h2>
        </div>
      </div>

      <div className="p-10 flex flex-col flex-1 justify-between">
        <div>
          <p className={`uppercase tracking-[0.25em] text-xs font-semibold mb-6 ${isDark ? 'text-[#B08B57]' : 'text-stone-500'}`}>
            {pkg.tagline}
          </p>

        </div>

        <button
          onClick={() => (window.location.href = 'tel:+919667733382')}
          className={`mt-12 w-full py-5 rounded-full uppercase tracking-[0.25em] text-xs font-bold transition-all duration-500 flex items-center justify-center gap-3 ${
            isDark ? 'bg-[#B08B57] text-white hover:bg-white hover:text-black' : 'bg-[#1d1d1d] text-white hover:bg-[#B08B57]'
          }`}
        >
          {pkg.ctaText}
          <Phone size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default ModularInteriorsPricing;