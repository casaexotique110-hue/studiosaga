import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react'; // Menu aur X icons responsive toggle ke liye
import Footer from "@/components/Footer";
import logo from "@/assets/logo111.png";

// AAPKA BLOGS DATA YAHAN HAI
export const blogsData = [
  {
    slug: "top-affordable-interior-design-ideas",
    category: "Affordable Interiors",
    title: "Top Affordable Interior Design Ideas for Modern Homes",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800",
    excerpt: "Discover smart hacks and modular ideas to style your modern home beautifully without burning a hole in your pocket.",
    content: "Creating a magnificent modern home does not require a massive investment if you plan with strategic structural awareness. The secret lies in balancing cost-effective engineering with high-end aesthetic choices, allowing you to maximize every single square foot of your carpet area without compromising on look or durability.\n\nFirst, shift your focus entirely towards smart modular layouts. Instead of traditional on-site carpentry which involves heavy labor charges and material wastage, modular factory-finished units offer superior machine-edge cutting and clean aesthetics at almost half the overall delivery time. Choosing high-quality laminates with matte or anti-fingerprint finishes over expensive acrylics can save you up to 30% while retaining the exact same premium modern appearance.\n\nSecond, architectural lighting plays a massive role in simulating luxury. You can easily elevate the mood of your entire living space by adding hidden LED strip setups under kitchen cabinets, floating shelves, or false ceilings. Profile lighting creates dramatic geometric focal points that immediately mask simple wall finishes. By choosing multi-functional elements like hidden shoe racks or drop-down utility counters, you save spatial footprint and raw material expenditures simultaneously."
  },
  {
    slug: "luxury-living-room-designs-on-budget",
    category: "Living Room",
    title: "Luxury Living Room Designs on a Budget",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800",
    excerpt: "Make your primary hosting space look high-end. Learn the secrets of premium textures, colors, and layout configurations.",
    content: "Your living room is the primary hosting zone of your entire home, making it the ultimate reflection of your lifestyle and personal brand. Infusing a sense of sheer luxury into this space without breaking the bank requires smart focal configurations, optical styling illusions, and highly intentional texture selection.\n\nInstead of splurging on expensive marble paneling or solid wood louvers across the entire living room, establish a single dedicated statement accent wall. Using premium metallic textures, rich architectural wallpapers, or specialized canvas finishes can simulate an elite atmosphere instantly. Pair this focal background with strategic warm lighting installations, such as low-glare COB spotlights and recessed profile lights, to wash the walls with a high-end hospitality vibe.\n\nFlooring is another zone where budgets scale rapidly. Instead of imported Italian marble, look for premium large-format vitrified tiles (such as 800x1600mm or 1200x2400mm sizes) with color-matched seamless epoxy grouting. This creates a highly uniform, expansive floor layout that mirrors luxury marble at a fraction of the structural overhead. Finish the look with clean, low-profile custom media consoles to keep wiring completely concealed and retain an ultra-sleek, premium hosting aura."
  },
  {
    slug: "minimal-bedroom-interior-trends-2026",
    category: "Bedroom",
    title: "Minimal Bedroom Interior Trends in 2026",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800",
    excerpt: "Clean lines, hidden handles, and integrated lighting. Explore what is ruling bedroom designs this year.",
    content: "The bedroom interior landscape in 2026 is moving heavily away from loud, cluttered layouts and embracing the calm philosophy of functional minimalism. A modern bedroom should act as a private sanctuary—a peaceful, distraction-free environment that maximizes mental relaxation through smart hidden storage and sophisticated subtle palettes.\n\nFloor-to-ceiling wardrobes are ruling bedroom configurations this year. To achieve a perfectly clean look, eliminate external handles entirely. Use push-to-open magnetic latches or integrated sleek finger-pull profiles that blend directly into the wardrobe shutters. This gives your storage a continuous panel look that mimics an architectural wall treatment rather than heavy bedroom furniture pieces.\n\nColor psychology is equally essential. Shift toward soft earthy tones, warm greys, and muted matte veneers paired with subtle texture details. For the headboard area, design a custom low-profile paneling setup featuring built-in warm backlighting. This subtle layer of ambient illumination eliminates the need for bulky side-table lamps, keeping your tabletops beautifully clean while radiating a five-star luxury hotel comfort every evening."
  },
  {
    slug: "best-space-saving-furniture-small-apartments",
    category: "Furniture",
    title: "Best Space Saving Furniture for Small Apartments",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800",
    excerpt: "Maximize your carpet area with highly functional modular furniture designed for compact modern living.",
    content: "Living in a compact urban apartment demands sharp spatial engineering and highly creative furniture design. When floor space is limited, standard standalone furniture blocks free movement and makes the layout feel small. The solution lies in deploying multi-functional, adaptive furniture systems that adapt to your daily routines dynamically.\n\nStart by reclaiming your vertical vertical spaces. Wall-mounted drop-down study desks can fold completely flat against the wall when your office hours are over, opening up precious walking space. Similarly, hydraulic lift storage beds are an absolute must-have for small apartments, offering clean, dust-free hidden compartments to stash heavy suitcases, winter linen, and extra cushions without adding bulky closets.\n\nExtendable dining systems are another game-changer. These modern tables stay compact for your everyday routine but can easily slide or pull out to comfortably seat guests during weekend gatherings. By choosing slim, floating modular TV units and wall-integrated shelving, you keep the entire floor perimeter visible. This clever optical trick makes even the most compact apartment layouts feel airy, open, and fully organized."
  },
  {
    slug: "how-to-make-your-home-look-expensive",
    category: "Home Styling",
    title: "How To Make Your Home Look Expensive",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
    excerpt: "Small styling details create massive impact. Uncover simple designer secrets to instantly elevate your interior aura.",
    content: "Transforming a house into a highly sophisticated, expensive-looking residence isn't about spending millions—it's about managing small architectural visual details with extreme precision. Luxury is defined by clean lines, continuous surfaces, and the total absence of visual noise or loose wire clutter.\n\nOne of the most powerful designer secrets is maximizing vertical height through drapery. Always hang your sheer curtains directly from the ceiling level all the way down to touching the floor, rather than mounting them just above the window frame. This instantly fools the eye, making your ceilings appear dramatically taller and giving the entire room an expansive, grand villa look.\n\nNext, upgrade your basic tactile hardware. Swap out standard white plastic electrical switchboards for sleek, matte-finish modular plates. Replace generic cabinet handles with custom brushed brass, matte black, or knurled metal hardware. Finally, apply the 'Rule of Threes' when styling your tables or countertops: group premium decorative elements—like an architectural art book, a textured ceramic vase, and a minimal candle—in odd numbers. This gives the space a highly intentional, designer-curated gallery feel that screams luxury."
  }
];

const BlogList: React.FC = () => {
  // Mobile drawer state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F6F2] flex flex-col justify-between relative overflow-hidden">
      
      {/* FULLY RESPONSIVE INLINE HEADER */}
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent py-6 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Studia Saga"
              className="h-10 md:h-16 w-auto object-contain"
            />
          </Link>
          
          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-stone-600">
            <Link to="/" className="hover:text-[#B08B57] transition-colors">Home</Link>
            <Link to="/our-saga" className="hover:text-[#B08B57] transition-colors">Our Saga</Link>
            <Link to="/style-palette" className="text-[#B08B57] font-bold">Style Palette</Link>
            <Link to="/contact" className="hover:text-[#B08B57] transition-colors">Contact</Link>
          </nav>

          {/* MOBILE TOGGLE BUTTON (Ab Yeh Dikhega) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1f1f1f] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE DRAWER OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white border-b border-stone-200 shadow-xl z-40 md:hidden py-8 px-6 flex flex-col gap-6 text-center text-sm font-medium uppercase tracking-widest text-stone-800"
            >
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#B08B57]">Home</Link>
              <Link to="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-[#B08B57]">Portfolio</Link>
              <Link to="/blogs" onClick={() => setIsOpen(false)} className="text-[#B08B57] font-bold">Magazine</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#B08B57]">Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* BLOG BODY CONTENT */}
      <section className="py-32 flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* TITLE HEADER */}
          <div className="text-center mb-24 mt-12">
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
                <div className="h-[240px] overflow-hidden relative">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]" />
                  <span className="absolute top-4 left-4 bg-[#1d1d1d] text-white text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-semibold">
                    {blog.category}
                  </span>
                </div>

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

      <Footer />
    </main>
  );
};

export default BlogList;