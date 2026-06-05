import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Star } from 'lucide-react';

const packages = [
  {
    name: "15 - 30 Lakh Interior",
    tagline: "Modern modular & compact Budget homes",
    priceLabel: "Budget Home Interiors",
    image: "/pricing/Basic.jpeg",
    isPopular: false,
    ctaText: "Start Your Project", // Updated
    features: [
      "False Ceiling & Lighting",
      "TV Unit & Storage Solutions",
      "Modern Bedroom Interiors",
      "2D Layout Planning"
    ]
  },
  {
    name: "30 - 45 Lakh Interior",
    tagline: "Complete Full home transformation",
    priceLabel: "Most Preferred",
    image: "/pricing/mid.jpeg",
    isPopular: true,
    ctaText: "Start Your Project", // Updated
    features: [
      "Complete Home Interior",
      "Modular Kitchen",
      "Premium Wall Wardrobe",
      "Designer Lighting Setup",
      "Site Supervision",
      "End-to-End Execution"
    ]
  },
  {
    name: "45 - 60 Lakh Interior",
    tagline: "Premium living experience",
    priceLabel: "Premium Home Interiors",
    image: "/pricing/luxury.jpeg",
    isPopular: false,
    ctaText: "Start Your Project", // Updated
    features: [
      "Luxury Villa Interiors",
      "Imported Material Selection",
      "Smart Home Integration",
      "Bespoke Furniture",
      "Italian Marble & Veneers",
      "Architectural Detailing",
      "Premium Decor Styling",
      "Dedicated Project Manager"
    ]
  }
];

const PremiumServices = () => {
  return (
    <section className="relative py-32 bg-[#F8F6F2] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#c8a46a]/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#c8a46a]/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#B08B57] uppercase tracking-[0.35em] text-xs font-bold">
              Interior Pricing
            </span>

            <h2 className="text-5xl md:text-7xl font-light text-[#1f1f1f] mt-8 leading-[1]">
              Luxury Interiors <br />
              <span className="italic font-serif text-[#B08B57]">
                Designed Around Your Budget
              </span>
            </h2>

            <p className="text-[#666] text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
              From elegant modular interiors to ultra luxury dream homes,
              discover premium interior solutions crafted for every lifestyle
              and investment range.
            </p>
          </motion.div>
        </div>

        {/* PRICING CARDS */}
        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {packages.map((pkg, idx) => (
            <ServiceCard key={idx} pkg={pkg} index={idx} />
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-20 text-center border-t border-stone-200 pt-10">
          <p className="text-stone-400 text-sm italic">
            *Pricing may vary depending on carpet area, material selection,
            customization, and project scope.
          </p>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ pkg, index }) => {
  const isDark = pkg.isPopular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      className={`
        group relative overflow-hidden transition-all duration-700
        rounded-[38px] flex flex-col h-full
        ${isDark
          ? 'bg-[#1d1d1d] text-white scale-[1.03] shadow-[0_25px_80px_rgba(0,0,0,0.18)]'
          : 'bg-white text-[#1d1d1d] shadow-[0_15px_50px_rgba(0,0,0,0.06)] hover:-translate-y-3'}
      `}
    >
      {/* IMAGE */}
      <div className="relative h-[320px] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-[2000ms]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Badge */}
        {pkg.isPopular && (
          <div className="absolute top-5 right-5 bg-[#B08B57] text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
            <Star size={12} fill="currentColor" />
            Most Popular
          </div>
        )}

        {/* Price */}
        <div className="absolute bottom-8 left-8">
          <p className="text-white/70 uppercase tracking-[0.3em] text-xs">
            {pkg.priceLabel}
          </p>

          {/* CHANGED: text-5xl to text-3xl and font-light to font-normal for a cleaner look */}
          <h2 className="text-white text-3xl font-normal mt-3 leading-none">
            {pkg.name}
          </h2>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-10 flex flex-col flex-1">
        <p className={`uppercase tracking-[0.25em] text-xs font-semibold mb-6
          ${isDark ? 'text-[#B08B57]' : 'text-stone-500'}
        `}>
          {pkg.tagline}
        </p>


        {/* BUTTON */}
        <button
          onClick={() => window.location.href = 'tel:+919667733382'}
          className={`
            mt-12 w-full py-5 rounded-full uppercase tracking-[0.25em]
            text-xs font-bold transition-all duration-500
            flex items-center justify-center gap-3
            ${isDark
              ? 'bg-[#B08B57] text-white hover:bg-white hover:text-black'
              : 'bg-[#1d1d1d] text-white hover:bg-[#B08B57]'}
          `}
        >
          {pkg.ctaText}
          <Phone size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default PremiumServices;