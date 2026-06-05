import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const interiorCategories = [


  {
    id: 3,
    title: "Luxury Interior",
    desc: "High-end bespoke interiors with rich textures, statement lighting, and premium finishes.",
    images: [
      "/images/interior/luxury/1.jpeg", // Hero Image
      "/images/interior/luxury/2.jpeg", // Slideshow Image 1
      "/images/interior/luxury/3.jpeg", // Slideshow Image 2
      "/images/interior/luxury/4.jpeg", // Slideshow Image 3
      "/images/interior/luxury/5.jpeg", // Slideshow Image 4
      "/images/interior/luxury/6.jpeg", // Slideshow Image 5
    ],
  },
];


// Reusable Auto-Carousel Card Component
const AutoCarouselCard = ({ images, title, layoutClass, delayMultiplier }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically transition slides every 3.5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: delayMultiplier * 0.15,
      }}
      className={`group relative overflow-hidden rounded-[24px] md:rounded-[30px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] ${layoutClass}`}    >
      {/* Smooth AnimatePresence for sliding images */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={title}
          initial={{ opacity: 0, scale: 1.1, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, x: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-[1800ms]"
        />
      </AnimatePresence>

      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-40 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Floating Dynamic Number Indicator */}
      <div className="absolute top-5 left-5 backdrop-blur-md bg-white/20 border border-white/20 text-white px-4 py-2 rounded-full text-xs tracking-[0.2em] z-10">
        0{currentIndex + 1}
      </div>

      {/* Hover Content */}
      <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 z-10">
        <h4 className="text-white text-2xl font-serif">{title}</h4>
        <p className="text-white/70 text-sm mt-2">Modern Luxury Design</p>
      </div>
    </motion.div>
  );
};

const Newcomponentui = () => {
  return (
    <section className="relative bg-[#F8F6F2] py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#c7a46a]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-[#c7a46a]/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.35em] text-[#B08B57] text-xs font-bold">
              Luxury Interior Collection
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl text-[#1f1f1f] font-light mt-8 leading-[0.95]">
                            Crafted Spaces <br />
              <span className="italic font-serif text-[#B08B57]">
                Beyond Ordinary
              </span>
            </h2>

            <p className="max-w-3xl mx-auto mt-10 text-[#666] text-lg leading-relaxed">
              Explore premium modular interiors, luxury homes, cinematic living
              spaces, elegant bedrooms, and bespoke modern environments designed
              for extraordinary living.
            </p>
          </motion.div>
        </div>

        {/* CATEGORY LOOP */}
        <div className="space-y-20 md:space-y-28 lg:space-y-40">          {interiorCategories.map((category) => {
            // Split up the images safely
            const heroImage = category.images[0];
            
            // Sliders pull from image 1 onwards (creates a dynamic rotating gallery pool)
            const sliderPoolOne = category.images.slice(1, 4); 
            const sliderPoolTwo = category.images.slice(3, 6); 
            const sliderPoolThree = [...category.images.slice(4, 6), category.images[1]];

            return (
              <section key={category.id} className="relative">
                {/* SECTION HEADER */}
                <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-10">
                  <div>
                    <span className="text-[#B08B57] uppercase tracking-[0.35em] text-xs font-bold">
                      0{category.id}
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-light text-[#1f1f1f] mt-5 leading-none">
                                            {category.title}
                    </h3>
                  </div>

                  <div className="max-w-xl">
                    <p className="text-[#666] text-lg leading-relaxed">
                      {category.desc}
                    </p>
                    <div className="flex items-center gap-4 mt-7">
                      <div className="h-[1px] w-20 bg-[#B08B57]" />
                      <span className="uppercase tracking-[0.25em] text-xs text-[#B08B57]">
                        {category.images.length} Premium Options
                      </span>
                    </div>
                  </div>
                </div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-12 gap-6">
                  {/* LARGE HERO IMAGE (Stays Static & Bold) */}
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="
                    lg:col-span-7
                    relative
                    overflow-hidden
                    rounded-[24px]
                    md:rounded-[40px]
                    aspect-[4/5]
                    sm:aspect-[16/12]
                    lg:aspect-auto
                    lg:h-[700px]
                    group
                    "                  >
                    <img
                      src={heroImage}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-[2500ms]"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Floating Content */}
                    <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-xl">
                                            <span className="text-white/70 uppercase tracking-[0.3em] text-xs">
                        Premium Interior
                      </span>
                      <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-serif mt-5">
                                                {category.title}
                      </h2>
                      <p className="text-white/80 mt-6 text-lg leading-relaxed">
                        Luxury crafted interiors designed with timeless elegance,
                        spatial harmony, and premium aesthetics.
                      </p>
                    </div>
                  </motion.div>

                  {/* RIGHT GRID - DYNAMIC AUTO CAROUSELS */}
                  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                        {/* Carousel Card 1 (Full width row) */}
                    <AutoCarouselCard
                      images={sliderPoolOne}
                      title={category.title}
                      layoutClass="col-span-2"
                      delayMultiplier={1}
                    />

                    {/* Carousel Card 2 (Half width row left) */}
                    <AutoCarouselCard
                      images={sliderPoolTwo}
                      title={category.title}
                      layoutClass="col-span-1"
                      delayMultiplier={2}
                    />

                    {/* Carousel Card 3 (Half width row right) */}
                    <AutoCarouselCard
                      images={sliderPoolThree}
                      title={category.title}
                      layoutClass="col-span-1"
                      delayMultiplier={3}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Newcomponentui;