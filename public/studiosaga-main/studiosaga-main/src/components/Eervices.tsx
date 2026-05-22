import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Assuming your assets are imported correctly
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceWardrobe from "@/assets/service-wardrobe.jpg";
import serviceLiving from "@/assets/service-living.jpg";
import serviceCeiling from "@/assets/service-ceiling.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceFurniture from "@/assets/service-furniture.jpg";
import serviceTvUnit from "@/assets/service-tv-unit.jpg";
import serviceKidsRoom from "@/assets/service-kids-room.jpg";
import serviceBathroom from "@/assets/service-bathroom.jpg";

const services = [
  {
    title: "Residential Interior Design",
    description: "Personalized interiors for apartments, builder floors, and villas designed around your lifestyle",
    image: serviceKitchen,
  },
  {
    title: "Turnkey Interior Solutions",
    description: "End-to-end execution from design to final handover—one team, one contract, zero stress",
    image: serviceWardrobe,
  },
  {
    title: "Modular Kitchens & Wardrobes",
    description: "Precision-built modular systems balancing storage, style, and durability",
    image: serviceLiving,
  },
  {
    title: "Custom Furniture & Finishes",
    description: "Tailor-made furniture, paneling, lighting, and detail elements for unique spaces",
    image: serviceTvUnit,
  },
  {
    title: "3D Design & Visualization",
    description: "Experience your home through detailed 3D visuals before execution begins",
    image: serviceCeiling,
  },
  {
    title: "Living Room Interiors",
    description: "Creating inviting spaces for family and gatherings that reflect your personal style",
    image: serviceKidsRoom,
  },
  {
    title: "Bedroom Interiors",
    description: "Calm, functional bedrooms designed for rest and daily comfort",
    image: serviceBathroom,
  },
  {
    title: "Complete Home Renovation",
    description: "Full transformation handling everything from civil work to final styling",
    image: serviceRenovation,
  },
  {
    title: "Office Interior Design",
    description: "Professional workspaces that inspire productivity while maintaining style",
    image: serviceOffice,
  },
  {
    title: "Bathroom & Utility Design",
    description: "Practical layouts with adequate storage, durable materials, and good lighting",
    image: serviceFurniture,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark gradient overlay to make white text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Title: White by default -> Gold on hover */}
        <h3 className="font-serif text-xl font-semibold mb-2 text-white group-hover:text-[#E6C288] transition-colors duration-300">
          {service.title}
        </h3>
        
        {/* Description: White text */}
        <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {service.description}
        </p>
      </div>

      {/* Hover Border Effect (Optional: Gold border on hover) */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E6C288]/40 rounded-2xl transition-colors duration-500" />
    </motion.div>
  );
}

export function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#E6C288] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Our Core Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Complete Interior Solutions
            <span className="text-[#E6C288]"> for Modern Homes</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From residential interior design to turnkey execution, modular kitchens to custom furniture—we offer comprehensive solutions designed around your lifestyle, habits, and daily routines.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;