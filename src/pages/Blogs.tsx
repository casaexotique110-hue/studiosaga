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
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    category: "Affordable Interiors",
  },
  {
    id: 2,
    title: "Luxury Living Room Designs on a Budget",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    category: "Living Room",
  },
  {
    id: 3,
    title: "Minimal Bedroom Interior Trends in 2026",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    category: "Bedroom",
  },
  {
    id: 4,
    title: "Best Space Saving Furniture for Small Apartments",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    category: "Furniture",
  },
  {
    id: 5,
    title: "Kitchen Interior Designs That Look Premium",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
    category: "Kitchen",
  },
  {
    id: 6,
    title: "How To Make Your Home Look Expensive",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    category: "Home Styling",
  },
];

const Blogs: React.FC = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <section className="min-h-screen bg-[#f7f5f2] py-24 px-6">
              <Header />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.3em] text-sm text-[#BFA181] font-semibold">
            Interior Inspiration
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#2b2430]">
            Studia Saga Blogs
          </h1>

          <p className="mt-5 text-stone-500 max-w-2xl mx-auto">
            Discover affordable luxury interiors, modern home styling tips,
            space-saving ideas, and premium design inspiration.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              onClick={() => setOpenPopup(true)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden h-72">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-[#BFA181] font-semibold">
                  {blog.category}
                </span>

                <h2 className="mt-3 text-xl font-semibold text-[#2b2430] leading-snug group-hover:text-[#BFA181] transition-all duration-300">
                  {blog.title}
                </h2>

                <button className="mt-5 text-sm font-semibold text-[#e86b6b]">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {openPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-[#f7f1ea] flex items-center justify-center mb-6">
                <span className="text-4xl">🚧</span>
              </div>

              <h2 className="text-3xl font-bold text-[#2b2430]">
                Coming Soon
              </h2>

              <p className="mt-4 text-stone-500 leading-7">
                We’re currently working on our full blog experience.
                Detailed interior design blogs and inspirations will be posted soon.
              </p>

              <button
                onClick={() => setOpenPopup(false)}
                className="mt-8 px-8 py-3 rounded-full bg-[#e86b6b] text-white font-semibold hover:scale-105 transition-all duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blogs ;