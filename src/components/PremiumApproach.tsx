import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const interiorCategories = [
  {
    id: 1,
    slug: "modular",
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
    slug: "fullhome",
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
    slug: "luxury",
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
  const [activeTab, setActiveTab] = useState(interiorCategories[0].slug);
  const [selectedImage, setSelectedImage] = useState(null);

  const currentCategory = interiorCategories.find((cat) => cat.slug === activeTab);

  // Desktop asymmetric layout helper
  const getGridStyles = (index) => {
    if (index === 0) return "md:col-span-2 md:row-span-2 h-[350px] md:h-[600px]";
    if (index === 3) return "md:col-span-2 h-[250px] md:h-[280px]";
    if (index === 5) return "md:col-span-1 md:row-span-2 h-[350px] md:h-[600px]";
    return "col-span-1 h-[250px] md:h-[280px]";
  };

  return (
    <section className="relative bg-[#F8F6F2] text-[#222222] py-20 md:py-28 overflow-hidden selection:bg-[#B08B57] selection:text-white">
      {/* Luxury Light Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#d6b98c]/20 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#d6b98c]/15 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Block */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-xs text-[#B08B57] font-semibold block mb-4"
          >
            Interior Gallery
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-light text-[#222] leading-tight"
          >
            Luxury Spaces <br />
            <span className="italic font-serif text-[#B08B57]">Crafted Beautifully</span>
          </motion.h2>

          <p className="max-w-2xl mx-auto text-[#666666] text-sm md:text-lg mt-6 font-light leading-relaxed">
            Explore our architectural realizations where comfort meets high-end bespoke design execution.
          </p>
        </div>

        {/* Premium Smooth Tab Bar */}
        <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar scroll-smooth gap-2 md:gap-6 mb-12 border-b border-gray-200/60 pb-2 px-2 mask-linear">
          {interiorCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.slug)}
              className="relative px-5 py-3 text-xs md:text-sm tracking-[0.15em] uppercase font-medium whitespace-nowrap transition-colors duration-300"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <span className={activeTab === category.slug ? "text-[#B08B57] font-semibold" : "text-[#777777] hover:text-[#222]"}>
                {category.title}
              </span>
              {activeTab === category.slug && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#B08B57]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Subtitle description per tab selection */}
        <div className="max-w-3xl mb-10 px-2">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-base md:text-lg font-serif text-[#555] italic"
            >
              {currentCategory.desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Optimized Grid: 2-Columns on Mobile, Asymmetric Complex Layout on Desktop */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          <AnimatePresence mode="popLayout">
            {currentCategory.images.map((img, index) => (
              <motion.div
                layout
                key={img}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                onClick={() => setSelectedImage(img)}
                className={`relative overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer bg-[#F0ECE4] shadow-[0_4px_20px_rgba(0,0,0,0.03)] ${getGridStyles(
                  index
                )}`}
              >
                {/* Image Component */}
                <img
                  src={img}
                  alt={`${currentCategory.title}`}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1000ms] ease-out"
                  loading="lazy"
                />

                {/* Light Editorial Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-400" />

                {/* Minimalist Floating Card Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 text-white flex justify-between items-end">
                  <div>
                    <p className="text-[9px] md:text-xs uppercase tracking-widest text-[#D6B98C] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Space
                    </p>
       
                  </div>
                  {/* Plus Icon Button */}
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Light Luxury High-Fidelity Lightbox View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-[#F8F6F2]/95 z-50 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
          >
            {/* Minimal Dark-Gold Close Trigger */}
            <button className="absolute top-6 right-6 text-[#222]/70 hover:text-[#B08B57] transition-colors flex items-center gap-1.5 tracking-[0.2em] text-xs uppercase font-medium">
              Close
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Light Frame Container */}
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-xl shadow-[0_25px_60px_rgba(176,139,87,0.15)] border border-[#E8E5DF] bg-white p-2"
            >
              <img
                src={selectedImage}
                alt="Enlarged curated interior design work"
                className="w-full h-full max-h-[82vh] object-contain rounded-lg"
              />
              <div className="bg-[#F8F6F2] py-3 px-4 mt-2 rounded-lg flex justify-between items-center text-xs">
                <span className="font-serif italic text-[#555]">{currentCategory.title} Portfolio Concept</span>
                <span className="text-[#B08B57] tracking-widest uppercase font-semibold">Premium Realization</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PremiumApproach;