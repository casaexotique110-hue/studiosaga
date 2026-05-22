import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Ruler, Users, Sparkles, ArrowRight } from 'lucide-react';

const features = [
  {
    id: "01",
    title: "Research-Driven Design",
    desc: "Our design approach combines aesthetics with intelligent planning, ensuring every space is both beautiful and functional.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: "02",
    title: "Complete Turnkey Execution",
    desc: "One team, one contract, one smooth journey. We manage everything from design to final handover.",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: "03",
    title: "Modular + Custom Solutions",
    desc: "We balance precision-built modular systems with bespoke custom furniture for optimal functionality and design flexibility.",
    icon: <Ruler className="w-6 h-6" />
  },
  {
    id: "04",
    title: "Transparent Pricing & Timelines",
    desc: "Fixed timelines and transparent pricing ensure clarity throughout your project. No surprises, just honest communication.",
    icon: <Sparkles className="w-6 h-6" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F4F2ED] text-stone-900 overflow-hidden relative">
      
      {/* Background Watermark Text (Subtle Luxury Touch) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <h2 className="text-[120px] md:text-[200px] font-serif leading-none tracking-tighter uppercase text-stone-900">
          Why Us
        </h2>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#BFA181] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              Why Anam Cara Interiors
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
              Luxury Should Feel <span className="italic font-light text-stone-500">Effortless</span>
            </h2>
            <p className="text-stone-600 mt-4 text-lg font-light max-w-2xl mx-auto">
              We combine research-driven design, smart space planning, and disciplined execution to create interiors that are elegant, practical, and budget-conscious.
            </p>
          </motion.div>
        </div>

        {/* The Centerpiece Layout */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* --- Left Column (Points 1 & 2) --- */}
          <div className="space-y-16 lg:text-right order-2 lg:order-1">
            {features.slice(0, 2).map((item, idx) => (
              <FeatureItem key={idx} item={item} align="right" delay={idx * 0.2} />
            ))}
          </div>

          {/* --- Center Column (The Arch Image) --- */}
          <div className="relative order-1 lg:order-2 h-[500px] lg:h-[600px] w-full">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Custom cubic-bezier for smooth elegance
              className="absolute inset-x-0 bottom-0 bg-stone-300 rounded-t-[200px] overflow-hidden border-4 border-white shadow-2xl mx-auto w-full max-w-md"
            >
<img 
  src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80" 
  alt="Luxury Interior Arch"
  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
/>
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg text-center min-w-[200px]">
                 <p className="text-xs font-bold uppercase tracking-widest text-[#BFA181]">Affordable Luxury</p>
              </div>
            </motion.div>
          </div>

          {/* --- Right Column (Points 3 & 4) --- */}
          <div className="space-y-16 lg:text-left order-3">
            {features.slice(2, 4).map((item, idx) => (
              <FeatureItem key={idx} item={item} align="left" delay={0.4 + (idx * 0.2)} />
            ))}
          </div>

        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a href="/Contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white overflow-hidden transition-all hover:bg-[#BFA181]">
            <span className="relative z-10 text-sm font-bold uppercase tracking-widest">Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

// Sub-component for individual points to keep code clean
const FeatureItem = ({ item, align, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: align === 'right' ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className={`group flex flex-col ${align === 'right' ? 'lg:items-end' : 'lg:items-start'} items-center gap-4`}
    >
      <div className="flex items-center gap-4">
        {align === 'left' && (
          <span className="text-4xl font-serif text-[#BFA181]/30 font-bold group-hover:text-[#BFA181] transition-colors">
            {item.id}
          </span>
        )}
        
        <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-900 shadow-sm group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>

        {align === 'right' && (
          <span className="text-4xl font-serif text-[#BFA181]/30 font-bold group-hover:text-[#BFA181] transition-colors">
            {item.id}
          </span>
        )}
      </div>

      <div className={`space-y-2 ${align === 'right' ? 'lg:text-right' : 'lg:text-left'} text-center`}>
        <h3 className="text-xl font-serif text-stone-900">{item.title}</h3>
        <p className="text-sm text-stone-500 font-light leading-relaxed max-w-xs mx-auto lg:mx-0">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;