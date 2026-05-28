import React from "react";
import { motion } from "framer-motion";

const interiorCategories = [
  {
    id: 1,
    title: "Modular Interior",
    desc: "Smart modular layouts crafted for modern living with premium finishes and elegant space planning.",
    images: [
      "/images/interior/modular/1.jpeg",
      "/images/interior/modular/2.jpeg",
      "/images/interior/modular/3.jpeg",
      "/images/interior/modular/4.jpeg",
    
    ],
  },

  {
    id: 2,
    title: "Full Home Interior",
    desc: "Complete home transformations blending luxury, comfort, and timeless aesthetics.",
    images: [
      "/images/interior/fullhome/1.jpeg",
      "/images/interior/fullhome/2.jpeg",
      "/images/interior/fullhome/3.jpeg",
      "/images/interior/fullhome/4.jpeg",

    ],
  },

  {
    id: 3,
    title: "Luxury Interior",
    desc: "High-end bespoke interiors with rich textures, statement lighting, and premium finishes.",
    images: [
      "/images/interior/luxury/1.jpeg",
      "/images/interior/luxury/2.jpeg",
      "/images/interior/luxury/3.jpeg",
      "/images/interior/luxury/4.jpeg",

    ],
  },
];

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

            <h2 className="text-5xl md:text-7xl xl:text-8xl text-[#1f1f1f] font-light mt-8 leading-[0.95]">
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
        <div className="space-y-40">

          {interiorCategories.map((category) => (
            <section key={category.id} className="relative">

              {/* SECTION HEADER */}
              <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-10">

                <div>
                  <span className="text-[#B08B57] uppercase tracking-[0.35em] text-xs font-bold">
                    0{category.id}
                  </span>

                  <h3 className="text-5xl md:text-6xl xl:text-7xl font-light text-[#1f1f1f] mt-5 leading-none">
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
                      {category.images.length} Interior Projects
                    </span>
                  </div>
                </div>
              </div>

              {/* MAIN GRID */}
              <div className="grid lg:grid-cols-12 gap-6">

                {/* LARGE HERO IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-7 relative overflow-hidden rounded-[40px] h-[700px] group"
                >
                  <img
                    src={category.images[0]}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-[2500ms]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Floating Content */}
                  <div className="absolute bottom-12 left-12 max-w-xl">

                    <span className="text-white/70 uppercase tracking-[0.3em] text-xs">
                      Premium Interior
                    </span>

                    <h2 className="text-white text-5xl md:text-6xl font-serif mt-5">
                      {category.title}
                    </h2>

                    <p className="text-white/80 mt-6 text-lg leading-relaxed">
                      Luxury crafted interiors designed with timeless elegance,
                      spatial harmony, and premium aesthetics.
                    </p>
                  </div>
                </motion.div>

                {/* RIGHT GRID */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-6">

                  {category.images.slice(1, 5).map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 70 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.12,
                      }}
                      className={`group relative overflow-hidden rounded-[30px]
                        ${
                          index === 0
                            ? "col-span-2 h-[320px]"
                            : "h-[320px]"
                        }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-[1800ms]"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />

                      {/* Floating Number */}
                      <div className="absolute top-5 left-5 backdrop-blur-md bg-white/20 border border-white/20 text-white px-4 py-2 rounded-full text-xs tracking-[0.2em]">
                        0{index + 1}
                      </div>

                      {/* Hover Text */}
                      <div className="absolute bottom-6 left-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">

                        <h4 className="text-white text-2xl font-serif">
                          {category.title}
                        </h4>

                        <p className="text-white/70 text-sm mt-2">
                          Modern Luxury Design
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* BOTTOM STRIP */}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-6">

                {category.images.slice(5, 10).map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden rounded-[26px] h-[260px]"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-[1600ms]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Small Floating Icon */}
                    <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-500">
                      +
                    </div>
                  </motion.div>
                ))}
              </div>

            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newcomponentui;