import React from "react";
import { motion } from "framer-motion";

const interiorCategories = [
  {
    id: 1,
    title: "Modular Interior",
    desc: "Smart modular layouts crafted for modern living with premium finishes and functional elegance.",
    images: [
      "/images/interior/modular/1.jpeg",
      "/images/interior/modular/2.jpeg",
      "/images/interior/modular/3.jpeg",
      "/images/interior/modular/4.jpeg",
      "/images/interior/modular/5.jpeg",
      "/images/interior/modular/6.jpeg",
      "/images/interior/modular/7.jpeg",
      "/images/interior/modular/8.jpeg",
      "/images/interior/modular/9.jpeg",
      "/images/interior/modular/10.jpeg",
    ],
  },

  {
    id: 2,
    title: "Full Home Interior",
    desc: "Complete home transformations blending comfort, luxury, and timeless aesthetics.",
    images: [
      "/images/interior/fullhome/1.jpeg",
      "/images/interior/fullhome/2.jpeg",
      "/images/interior/fullhome/3.jpeg",
      "/images/interior/fullhome/4.jpeg",
      "/images/interior/fullhome/5.jpeg",
      "/images/interior/fullhome/6.jpeg",
      "/images/interior/fullhome/7.jpeg",
      "/images/interior/fullhome/8.jpeg",
      "/images/interior/fullhome/9.jpeg",
      "/images/interior/fullhome/10.jpeg",
    ],
  },

  {
    id: 3,
    title: "Luxury Interior",
    desc: "High-end bespoke interiors designed with sophisticated materials and rich textures.",
    images: [
      "/images/interior/luxury/1.jpeg",
      "/images/interior/luxury/2.jpeg",
      "/images/interior/luxury/3.jpeg",
      "/images/interior/luxury/4.jpeg",
      "/images/interior/luxury/5.jpeg",
      "/images/interior/luxury/6.jpeg",
      "/images/interior/luxury/7.jpeg",
      "/images/interior/luxury/8.jpeg",
      "/images/interior/luxury/9.jpeg",
      "/images/interior/luxury/10.jpeg",
    ],
  },
];

const PremiumApproach = () => {
  return (
    <section className="relative bg-[#F8F6F2] py-28 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#d6b98c]/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#d6b98c]/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-sm text-[#B08B57] font-semibold"
          >
            Interior Gallery
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-[#222] mt-6 leading-tight"
          >
            Luxury Spaces <br />
            <span className="italic font-serif text-[#B08B57]">
              Crafted Beautifully
            </span>
          </motion.h2>

          <p className="max-w-3xl mx-auto text-[#666] text-lg mt-8 leading-relaxed">
            Explore a curated collection of premium interiors featuring modular
            kitchens, luxury bedrooms, modern living rooms, full home
            transformations, and bespoke interior concepts.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-32">
          {interiorCategories.map((category, categoryIndex) => (
            <div key={category.id}>
              {/* Section Heading */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
                <div>
                  <span className="text-[#B08B57] text-sm tracking-[0.25em] uppercase font-semibold">
                    0{category.id}
                  </span>

                  <h3 className="text-4xl md:text-5xl font-light text-[#222] mt-4">
                    {category.title}
                  </h3>
                </div>

                <p className="max-w-2xl text-[#666] leading-relaxed">
                  {category.desc}
                </p>
              </div>

              {/* Masonry Gallery */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {category.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.05,
                    }}
                    className="relative overflow-hidden rounded-[28px] group break-inside-avoid shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                  >
                    <img
                      src={img}
                      alt={`${category.title} ${index + 1}`}
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Text */}
                    <div className="absolute bottom-0 left-0 p-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h4 className="text-white text-2xl font-serif">
                        {category.title}
                      </h4>

                      <p className="text-white/80 text-sm mt-2">
                        Premium Interior Design
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumApproach;