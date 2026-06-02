import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";

interface Blog {
  id: number;
  title: string;
  image: string;
  category: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Top Affordable Interior Design Ideas for Modern Homes",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    category: "Affordable Interiors",
  },
  {
    id: 2,
    title: "Luxury Living Room Designs on a Budget",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    category: "Living Room",
  },
  {
    id: 3,
    title: "Minimal Bedroom Interior Trends in 2026",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    category: "Bedroom",
  },
  {
    id: 4,
    title: "Best Space Saving Furniture for Small Apartments",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    category: "Furniture",
  },
  {
    id: 5,
    title: "Kitchen Interior Designs That Look Premium",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
    category: "Kitchen",
  },
  {
    id: 6,
    title: "How To Make Your Home Look Expensive",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    category: "Home Styling",
  },
];

const Blogs: React.FC = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Dynamic unique categories for the filters
  const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter((b) => b.category === selectedCategory);

  return (
    <div className="bg-[#f7f5f2] min-h-screen w-full overflow-x-hidden selection:bg-[#BFA181] selection:text-white">
      <Header />

      {/* HERO BANNER SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Banner Image Background */}
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop"
          alt="StudiaSaga Editorial Magazine Banner"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-100"
        />
        {/* Soft Dark Overlay to ensure typography readability */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

        {/* Banner Content Container */}
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 0.8 }}
            className="uppercase text-xs md:text-sm text-[#BFA181] font-semibold block mb-3"
          >
            Interior Inspiration & Journal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            StudiaSaga Chronicles
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 md:mt-6 text-sm sm:text-base md:text-xl text-white/85 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover affordable luxury insights, space engineering concepts, and architectural design wisdom straight from our premium design house.
          </motion.p>
        </div>
      </section>

      {/* MAIN ARTICLES GRID AREA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Interactive Category Tabs Line */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4 mb-14 border-b border-stone-200/60 masking-linear">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#BFA181] text-white shadow-md shadow-[#BFA181]/20"
                  : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Animate Grid Wrap */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                layout
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setOpenPopup(true)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(191,161,129,0.12)] hover:border-[#BFA181]/20 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Aspect Ratio Safe Image Frame */}
                  <div className="overflow-hidden aspect-[16/11] w-full bg-stone-100">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Details Area */}
                  <div className="p-6 md:p-7">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#BFA181] font-semibold block">
                      {blog.category}
                    </span>

                    <h2 className="mt-3 text-lg md:text-xl font-bold text-[#2b2430] leading-snug tracking-tight group-hover:text-[#BFA181] transition-colors duration-300 min-h-[56px] line-clamp-2">
                      {blog.title}
                    </h2>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="px-6 md:px-7 pb-6 pt-2 border-t border-stone-50/50 flex justify-between items-center">
                  <span className="text-xs md:text-sm font-semibold text-stone-800 group-hover:text-[#BFA181] transition-colors flex items-center gap-1">
                    Read Article 
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </span>
                  <span className="text-[11px] text-stone-400 font-light">May 2026</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fallback Empty Slate Screen */}
        {filteredBlogs.length === 0 && (
          <div className="w-full py-20 text-center text-stone-400 text-sm font-light">
            No entries found under this directory filter.
          </div>
        )}
      </section>

      {/* POPUP OVERLAY SYSTEM */}
      <AnimatePresence>
        {openPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenPopup(false)}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-md flex items-center justify-center z-50 px-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 md:p-10 max-w-md w-full text-center shadow-[0_30px_70px_rgba(0,0,0,0.15)] border border-stone-100 cursor-default"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-[#f7f1ea] flex items-center justify-center mb-5 md:mb-6 shadow-inner">
                <span className="text-3xl md:text-4xl animate-pulse">🚧</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#2b2430] tracking-tight">
                Magazine Pipeline Active
              </h2>

              <p className="mt-4 text-stone-500 text-sm md:text-base leading-relaxed font-light">
                We are currently formatting our high-fidelity interior design manuals, space optimization guidelines, and material checklists. This segment goes live very shortly.
              </p>

              <button
                onClick={() => setOpenPopup(false)}
                className="mt-8 px-8 py-3 rounded-full bg-[#BFA181] hover:bg-[#a88a69] text-white font-medium text-sm md:text-base tracking-wide transition-all duration-300 active:scale-95 shadow-md shadow-[#BFA181]/20"
              >
                Return to Index
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blogs;