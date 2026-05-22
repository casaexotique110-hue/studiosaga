import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

// Images
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














import renovation1 from "@/assets/full-home-renovation/1.png";
import renovation2 from "@/assets/full-home-renovation/2.png";
import renovation3 from "@/assets/full-home-renovation/3.png";












import office1 from "@/assets/office/1.png";
import office2 from "@/assets/office/2.png";
import office3 from "@/assets/office/3.png";






import Bathroom1 from "@/assets/bathroom-vanity/1.png";
import Bathroom2 from "@/assets/bathroom-vanity/2.png";
import Bathroom3 from "@/assets/bathroom-vanity/3.png";



const services = [
  {
    title: "Modular Kitchen ",
    description:
      "Personalized interiors for apartments, builder floors, and villas designed around your lifestyle",
    images: [
      serviceKitchen,
      serviceLiving,
      serviceWardrobe,
    ],
  },
  {
    title: "Modular Wardrobe ",
    description:
      "End-to-end execution from design to final handover—one team, one contract, zero stress",
    images: [
      serviceWardrobe,
      serviceCeiling,
      serviceRenovation,
      
    ],
  },
  {
    title: "Living Room Interiors",
    description:
      "Precision-built modular systems balancing storage, style, and durability",
    images: [
      serviceLiving,
      serviceKitchen,
      serviceFurniture,
    ],
  },
  {
    title: "Wall TV Units ",
    description:
      "Tailor-made furniture, paneling, lighting, and detail elements for unique spaces",
    images: [
      serviceTvUnit,
      serviceFurniture,
      serviceLiving,
    ],
  },
  {
    title: "False Ceiling & Lighting",
    description:
      "Experience your home through detailed 3D visuals before execution begins",
    images: [
      serviceCeiling,
      serviceKitchen,
      serviceLiving,
    ],
  },
  {
    title: "Kids Room Interiors",
    description:
      "Creating inviting spaces for family and gatherings that reflect your personal style",
    images: [
      serviceKidsRoom,
      serviceLiving,
      serviceFurniture,
    ],
  },
  {
    title: "Bathroom Vanity",
    description:
      "Calm, functional bedrooms designed for rest and daily comfort",
    images: [
      serviceBathroom,
      serviceKidsRoom,
      serviceWardrobe,
    ],
  },
  {
    title: "Full Home Renovation",
    description:
      "Full transformation handling everything from civil work to final styling",
    images: [
      renovation1,
      renovation2,
      renovation3,
    ],
  },
  {
    title: "Office Interior Design",
    description:
      "Professional workspaces that inspire productivity while maintaining style",
    images: [
      office1,
      office2,
      office3,
    ],
  },
  {
    title: "Bathroom & Utility Design",
    description:
      "Practical layouts with adequate storage, durable materials, and good lighting",
    images: [
      Bathroom1,
      Bathroom2,
      Bathroom3,
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: typeof services[0];
  index: number;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group relative overflow-hidden rounded-3xl bg-[#111111] border border-white/10 hover:border-[#E6C288]/40 transition-all duration-500"
    >
      {/* Main Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={service.images[activeImage]}
          alt={service.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-serif text-xl font-semibold text-white mb-2">
            {service.title}
          </h3>

          <p className="text-sm leading-relaxed text-white/80">
            {service.description}
          </p>
        </div>
      </div>

      {/* Bottom Image Selector */}
      <div className="flex items-center justify-center gap-3 p-4 bg-black">
        {service.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
              activeImage === i
                ? "w-20 h-16 border-2 border-[#E6C288] scale-105"
                : "w-14 h-14 border border-white/10 opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`thumb-${i}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export function Services() {
  const headerRef = useRef(null);

  const isHeaderInView = useInView(headerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-background"
    >
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
            <span className="text-[#E6C288]">
              {" "}
              for Modern Homes
            </span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            From residential interior design to turnkey execution,
            modular kitchens to custom furniture—we offer
            comprehensive solutions designed around your lifestyle,
            habits, and daily routines.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;