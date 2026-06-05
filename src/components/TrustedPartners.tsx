import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// Partner Logos
import partner1 from "../assets/patterns/1.avif";
import partner2 from "../assets/patterns/2.avif";
import partner3 from "../assets/patterns/3.avif";
import partner4 from "../assets/patterns/4.avif";
import partner5 from "../assets/patterns/5.avif";
import partner6 from "../assets/patterns/6.avif";
import partner7 from "../assets/patterns/7.avif";
import partner8 from "../assets/patterns/8.png";
import partner9 from "../assets/patterns/9.png";
import partner10 from "../assets/patterns/10.png";
import partner11 from "../assets/patterns/11.png";
import partner12 from "../assets/patterns/12.png";
import partner13 from "../assets/patterns/13.png";
import partner14 from "../assets/patterns/14.png";
import partner15 from "../assets/patterns/15.png";
import partner16 from "../assets/patterns/16.png";
import partner17 from "../assets/patterns/17.png";
import partner18 from "../assets/patterns/18.png";
import partner19 from "../assets/patterns/19.png";
import partner20 from "../assets/patterns/20.png";
















const partners: string[] = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
  partner14,
  partner15,
  partner16,
  partner17,
  partner18,
  partner19,
  partner20,
];

const TrustedPartners: React.FC = () => {
  return (
    <section className="bg-[#f7f5f2] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-[#2b2430]"
          >
            Our Preferred Brands
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-lg text-stone-500 max-w-2xl"
          >
            Winning collaborations that produce winning designs.
          </motion.p>
        </div>

        {/* Carousel */}
        <Marquee
          speed={45}
          gradient={false}
          pauseOnHover={true}
        >
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-stone-200 rounded-3xl h-36 w-[220px] mx-4 flex items-center justify-center overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >

              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#BFA181]/10 to-[#e86b6b]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Logo */}
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="relative z-10 max-h-20 w-auto object-contain scale-90 group-hover:scale-100 transition-all duration-500"
              />

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#BFA181]/40 transition-all duration-500"></div>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TrustedPartners;