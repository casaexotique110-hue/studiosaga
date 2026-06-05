import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// AAPKA BLOGS DATA YAHAN HAI
export const blogsData = [
  {
    slug: "top-affordable-interior-design-ideas",
    category: "Affordable Interiors",
    title: "Top Affordable Interior Design Ideas for Modern Homes",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800",
    excerpt: "Discover smart hacks and modular ideas to style your modern home beautifully without burning a hole in your pocket.",
    content: "Creating a modern home doesn't require a massive investment. By focusing on smart modular layouts, choosing multi-functional furniture, and selecting cost-effective yet premium-finish laminates, you can achieve a high-end look. Consider focus lighting like LED strips under cabinets and false ceilings to elevate the mood instantly without heavy construction costs."
  },
  {
    slug: "luxury-living-room-designs-on-budget",
    category: "Living Room",
    title: "Luxury Living Room Designs on a Budget",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800",
    excerpt: "Make your primary hosting space look high-end. Learn the secrets of premium textures, colors, and layout configurations.",
    content: "Your living room speaks volumes about your lifestyle. To infuse luxury on a tight budget, invest in a single statement accent wall using rich textures or elegant wallpapers. Pair this with strategic warm lighting (COB and profile lights). Instead of expensive marble, look for premium large-format vitrified tiles with seamless grouting to give an elite, expansive floor appearance."
  },
  {
    slug: "minimal-bedroom-interior-trends-2026",
    category: "Bedroom",
    title: "Minimal Bedroom Interior Trends in 2026",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800",
    excerpt: "Clean lines, hidden handles, and integrated lighting. Explore what is ruling bedroom designs this year.",
    content: "The 2026 bedroom trend is heavily leaning towards functional minimalism. Think floor-to-ceiling wardrobes with push-to-open latches or concealed profiles that blend seamlessly into the walls. Use soft pastel tones, matte wood veneers, and integrated bed headboards featuring built-in warm backlights to turn your bedroom into a serene, five-star hotel-like sanctuary."
  },
  {
    slug: "best-space-saving-furniture-small-apartments",
    category: "Furniture",
    title: "Best Space Saving Furniture for Small Apartments",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800",
    excerpt: "Maximize your carpet area with highly functional modular furniture designed for compact modern living.",
    content: "Small apartments demand intelligent spatial engineering. Space-saving modular furniture like wall-mounted study desks, hydraulic storage beds, and extendable dining tables are essential game-changers. By optimizing vertical spaces with floating shelving units, you keep the floor area clear, making your compact layout look dramatically spacious and neat."
  },
  {
    slug: "how-to-make-your-home-look-expensive",
    category: "Home Styling",
    title: "How To Make Your Home Look Expensive",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
    excerpt: "Small styling details create massive impact. Uncover simple designer secrets to instantly elevate your interior aura.",
    content: "Making a home look expensive lies in curating small details with precision. Use long, floor-touching sheer curtains to simulate high ceilings. Replace standard plastic switchboards with sleek matte plates. Add metallic brass accents or golden trims to your TV unit panels, and keep styling items grouped in odd numbers (like sets of 3) on tabletops to establish an architectural, designer-curated vibe."
  }
];

const BlogList: React.FC = () => {
  return (
    <section className="bg-[#F8F6F2] py-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <span className="text-[#B08B57] uppercase tracking-[0.35em] text-xs font-bold">
            Studia Saga Magazine
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-[#1f1f1f] mt-6 font-serif">
            Design <span className="italic text-[#B08B57]">Insights</span>
          </h1>
          <p className="text-[#666] text-lg mt-6 max-w-2xl mx-auto font-light">
            Expert advice, trend forecasts, and budget-friendly interior guides curated by our studio team.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogsData.map((blog, idx) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-[28px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full border border-stone-100"
            >
              {/* Image Container */}
              <div className="h-[240px] overflow-hidden relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
                />
                <span className="absolute top-4 left-4 bg-[#1d1d1d] text-white text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-semibold">
                  {blog.category}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-stone-400 text-xs font-medium mb-3">{blog.date}</p>
                  <h2 className="text-xl font-normal text-[#1f1f1f] leading-snug mb-4 hover:text-[#B08B57] transition-colors duration-300">
                    {blog.title}
                  </h2>
                  <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                {/* React Router Link */}
                <Link 
                  to={`/blog/${blog.slug}`} 
                  className="text-[#B08B57] uppercase tracking-wider text-xs font-bold flex items-center gap-2 hover:text-[#1d1d1d] transition-colors duration-300 w-fit"
                >
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogList;