import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Star, MessageSquare } from 'lucide-react';

const packages = [
  {
    name: "Essential Refresh",
    tagline: "Single room & Studio makeovers",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    isPopular: false,
    ctaText: "Get a Quote",
    features: [
      "Initial Concept Moodboard",
      "Curated Furniture List",
      "Paint & Color Consultation",
      "Space Optimization Plan"
    ]
  },
  {
    name: "Signature Living",
    tagline: "Full home transformation",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    ctaText: "Schedule Call",
    features: [
      "3D Spatial Rendering",
      "Full Project Management",
      "Custom Millwork Design",
      "Material Procurement",
      "End-to-End Execution"
    ]
  },
  {
    name: "Estate Curated",
    tagline: "Architectural & Luxury elegance",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
    isPopular: false,
    ctaText: "Enquire Now",
    features: [
      "Architectural Consulting",
      "Bespoke Furniture Design",
      "Art & Decor Curation",
      "White-Glove Installation",
      "Dedicated Site Supervisor"
    ]
  }
];

const PremiumServices = () => {
  return (
    <section className="py-32 bg-[#F9F8F6] text-stone-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-[#BFA181] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-stone-900 mb-6 leading-tight">
              Design Services <br /> 
              <span className="italic text-stone-400 font-light text-3xl md:text-5xl">Bespoke to your needs.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg max-w-xl mx-auto">
              Every space is unique. Contact us for a personalized estimate based on your site’s dimensions and design vision.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {packages.map((pkg, idx) => (
            <ServiceCard key={idx} pkg={pkg} index={idx} />
          ))}
        </div>

        {/* Bottom Contact Note */}
        <div className="mt-20 text-center border-t border-stone-200 pt-10">
            <p className="text-stone-400 text-sm italic">
                *Final pricing depends on project scope, site area, and material selection.
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`
        group relative flex flex-col h-full rounded-none overflow-hidden transition-all duration-500
        ${isDark 
          ? 'bg-stone-900 text-white shadow-2xl lg:-mt-4 lg:-mb-4 z-10' 
          : 'bg-white text-stone-900 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-2'}
      `}
    >
      {/* Top Image Area */}
      <div className="h-72 overflow-hidden relative">
        <div className={`absolute inset-0 z-10 ${isDark ? 'bg-black/30' : 'bg-transparent'}`} />
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          src={pkg.image} 
          alt={pkg.name} 
          className="w-full h-full object-cover"
        />
        
        {pkg.isPopular && (
          <div className="absolute top-4 right-4 z-20 bg-[#BFA181] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-md flex items-center gap-1">
            <Star size={10} fill="currentColor" /> Premier Choice
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-10 flex flex-col flex-1">
        <h3 className={`font-serif text-3xl mb-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {pkg.name}
        </h3>
        <p className={`text-[10px] uppercase tracking-widest mb-8 font-bold ${isDark ? 'text-stone-400' : 'text-[#BFA181]'}`}>
          {pkg.tagline}
        </p>

        {/* Features List */}
        <div className="space-y-0 mb-12 flex-1">
          {pkg.features.map((feat, fIdx) => (
            <div 
              key={fIdx} 
              className={`flex items-center gap-4 py-4 border-b border-dashed ${isDark ? 'border-stone-700' : 'border-stone-100'}`}
            >
              <div className={`w-1 h-1 rounded-full shrink-0 ${isDark ? 'bg-[#BFA181]' : 'bg-stone-400'}`} />
              <span className={`text-sm font-light tracking-wide ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
                {feat}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button - Updated to Call Action */}
        <button 
          onClick={() => window.location.href = 'tel:+91XXXXXXXXXX'} // Replace with actual number
          className={`
          w-full py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border
          flex items-center justify-center gap-3 group-hover:gap-5
          ${isDark 
            ? 'bg-[#BFA181] border-[#BFA181] text-white hover:bg-white hover:text-stone-900 hover:border-white' 
            : 'bg-stone-900 border-stone-900 text-white hover:bg-transparent hover:text-stone-900'}
        `}>
          {pkg.ctaText} <Phone size={14} className={isDark ? "animate-pulse" : ""} />
        </button>
      </div>
    </motion.div>
  );
};

export default PremiumServices;