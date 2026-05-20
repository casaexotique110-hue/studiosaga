import React from 'react';
import { motion } from 'framer-motion';

const philosophies = [
  {
    id: 1,
    title: "Aesthetic Functionality",
    desc: "Beauty serves a purpose. We ensure every curve and corner performs as well as it looks.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" // Texture/Material
  },
  {
    id: 2,
    title: "Sustainable Luxury",
    desc: " Sourcing materials that respect the earth without compromising on the opulence you deserve.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" // Texture/Material
  },
  {
    id: 3,
    title: "Spatial Harmony",
    desc: "Balancing light, flow, and volume to create spaces that feel expansive and serene.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop" // Wide Room
  },
  {
    id: 4,
    title: "Timeless Curation",
    desc: "Avoiding fleeting trends in favor of a classic aesthetic that evolves with your lifestyle.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop" // Art/Decor
  }
];

const PremiumApproach = () => {
  return (
    <section className="relative py-32 bg-[#F9F8F6] text-stone-900 overflow-hidden">
      
      {/* Background Decorative Elements (Subtle) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 -skew-x-12 translate-x-32 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* --- LEFT SIDE: Sticky Intro --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-stone-400"></span>
                <span className="text-stone-500 text-xs font-bold tracking-[0.25em] uppercase">
                  Our Philosophy
                </span>
              </div>

              <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-[1.05] text-stone-900">
                Design for <br />
                <span className="italic text-stone-400 font-light">Living Well.</span>
              </h2>

              <p className="text-stone-600 text-lg font-light leading-relaxed mb-12 max-w-md">
                 feelings. Combining cutting-edge trends with practical execution to build livable masterpieces.
              </p>

              {/* Enhanced Stats */}
{/* Updated Stats for a New Company */}
<div className="flex gap-12 border-t border-stone-200 pt-8">
  <div>
    {/* Focus on "Modern" or "Bespoke" instead of years */}
    <h4 className="text-3xl font-serif text-stone-800 uppercase tracking-tighter">Bespoke</h4>
    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mt-2">Design Philosophy</p>
  </div>
  <div>
    <h4 className="text-4xl font-serif text-stone-800">100%</h4>
    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mt-2">Dedication</p>
  </div>
</div>

              {/* CTA Button */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-8 py-4 bg-stone-900 text-white text-sm tracking-widest uppercase hover:bg-stone-800 transition-colors"
              >
                Start Your Journey
              </motion.button>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: Floating Masonry Grid --- */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Column 1 (Offset down for masonry look) */}
              <div className="flex flex-col gap-8 md:mt-24">
                 {philosophies.filter((_, i) => i % 2 === 0).map((phi, idx) => (
                   <PhilosophyCard key={phi.id} data={phi} index={idx} />
                 ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-8">
                {philosophies.filter((_, i) => i % 2 !== 0).map((phi, idx) => (
                   <PhilosophyCard key={phi.id} data={phi} index={idx} />
                 ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Sub-component for individual cards
const PhilosophyCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="group relative bg-white p-6 pb-10 shadow-sm border border-stone-100 hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden"
    >
      {/* Floating Image (Appears on Hover or stays visible based on design) */}
      <div className="relative h-64 w-full mb-8 overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover"
        />
        {/* Number Overlay */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold font-serif tracking-widest border border-stone-200">
            0{data.id}
        </div>
      </div>

      <h3 className="text-2xl font-serif mb-3 text-stone-900 group-hover:text-[#BFA181] transition-colors duration-300">
        {data.title}
      </h3>
      
      <p className="text-sm text-stone-500 leading-relaxed font-light">
        {data.desc}
      </p>

      {/* Decorative floating Line */}
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#BFA181] group-hover:w-full transition-all duration-700 ease-out" />
    </motion.div>
  );
};

export default PremiumApproach;