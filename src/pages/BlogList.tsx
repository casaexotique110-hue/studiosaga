import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react'; // Menu aur X icons responsive toggle ke liye
import Footer from "@/components/Footer";
import logo from "@/assets/logo111.png";

// AAPKA BLOGS DATA YAHAN HAI
export const blogsData = [
  {
    slug: "2-bhk-interior-design-cost-gurgaon",
    category: "Interior Cost Guide",
    title: "How Much Does a 2 BHK Interior Design Cost in Gurgaon? | 2026 Price Guide",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800",
    excerpt: "Know the complete 2 BHK interior design cost in Gurgaon for 2026. Explore pricing, material costs, modular kitchen costs, wardrobe costs, and budgeting tips.",
    content: `Buying a new home is exciting, but planning the interiors can quickly become overwhelming. One of the most common questions homeowners ask is: "How much does a 2 BHK interior design cost in Gurgaon?" The answer depends on several factors including the size of the apartment, material selection, scope of work, modular furniture requirements, and the level of customization.

For most Gurgaon homeowners, a complete 2 BHK interior project typically falls between ₹5 lakh and ₹15 lakh, while premium projects can exceed this range depending on materials and finishes.

### Average 2 BHK Interior Design Cost in Gurgaon
• Basic Interiors: ₹5 – ₹7 Lakhs
• Mid-Range Interiors: ₹8 – ₹12 Lakhs
• Premium Interiors: ₹12 – ₹18 Lakhs
• Luxury Interiors: ₹18 Lakhs+

### What Is Included in a 2 BHK Interior Project?
• Living Room: TV Unit, Wall Panelling, False Ceiling, Decorative Lighting, Storage Units
• Modular Kitchen: Base Cabinets, Wall Cabinets, Countertops, Hardware, Accessories (Often ranges from ₹1 lakh to ₹4 lakh)
• Master Bedroom: Wardrobe, Bed Back Panel, Side Tables, Lighting
• Second Bedroom: Wardrobe, Study Unit, Storage Solutions
• Additional Elements: False Ceiling, Electrical Work, Painting, Decorative Features

### Cost Breakdown of a 2 BHK Interior Project

1. Modular Kitchen Cost (Consumes 25–35% of budget)
• Basic Laminate Kitchen: ₹1 – ₹2 Lakhs
• Mid-Range Modular Kitchen: ₹2 – ₹4 Lakhs
• Premium Acrylic Kitchen: ₹4 – ₹6 Lakhs

2. Wardrobe Cost
• Laminate Wardrobe: ₹70,000 – ₹1.5 Lakhs
• Sliding Wardrobe: ₹1.5 – ₹3 Lakhs
• Premium Wardrobe: ₹3 Lakhs+

3. False Ceiling Cost
• Basic Gypsum Ceiling: ₹80 – ₹120 Per Sq Ft
• Premium Ceiling Design: ₹150 – ₹300 Per Sq Ft

4. TV Unit Cost
• Basic TV Unit: ₹25,000 – ₹50,000
• Custom TV Unit: ₹60,000 – ₹1.5 Lakhs

### Interior Design Cost Per Square Foot in Gurgaon
• Basic: ₹1,200 – ₹1,800
• Mid-Range: ₹1,800 – ₹3,000
• Premium: ₹3,000 – ₹5,000+

### Factors That Affect Interior Design Cost
• Material Selection: Choice between MDF, HDHMR, Commercial Plywood, or Marine Plywood.
• Hardware Quality: Premium fittings from brands like Hettich, Hafele, and Blum affect budgets.
• Customization Level: Customized furniture costs more than standardized modular solutions.
• Home Size: Larger apartments require more storage and finishing materials.

### How to Reduce Your Interior Design Cost
• Prioritize Essentials: Start with Kitchen, Wardrobes, and TV Unit before decorative elements.
• Choose Durable Materials: Investing in quality materials reduces maintenance costs over time.
• Avoid Over-Customization: Simple, functional designs provide better value.

### Frequently Asked Questions
• How much does a 2 BHK interior cost in Gurgaon? Most projects fall between ₹5 lakh and ₹15 lakh.
• What is the average modular kitchen cost in Gurgaon? Between ₹1 lakh and ₹4 lakh, while premium can exceed ₹5 lakh.
• What is the interior design cost per square foot in Gurgaon? Generally between ₹1,200 and ₹5,000+ per sq ft.
• How long does a 2 BHK interior project take? 6–12 weeks depending on complexity.

### Final Thoughts
A well-planned 2 BHK interior project in Gurgaon is about creating a functional, organized, and comfortable home. For most homeowners, budgeting between ₹8 lakh and ₹12 lakh provides a strong balance of quality, durability, and design.`
  },
  {
    slug: "3-bhk-interior-design-cost-gurgaon",
    category: "Interior Cost Guide",
    title: "Interior Design Cost for a 3 BHK in Gurgaon (2026): Complete Pricing Guide",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800",
    excerpt: "Discover the complete 3 BHK interior design cost in Gurgaon for 2026. Learn about modular kitchen pricing, wardrobe costs, false ceiling budgets, and complete home interior expenses.",
    content: `A 3 BHK apartment offers more space, greater flexibility, and the opportunity to create a home that reflects your lifestyle. However, it also comes with a larger interior budget compared to a 2 BHK. One of the most common questions homeowners ask before moving into a new apartment is: "What is the interior design cost for a 3 BHK in Gurgaon?"

In 2026, the average interior design cost for a 3 BHK apartment in Gurgaon ranges between ₹8 lakh and ₹25 lakh, depending on the size of the home, level of customization, materials used, and scope of work.

### Average 3 BHK Interior Design Cost in Gurgaon
• Basic Interiors: ₹8 – ₹12 Lakhs
• Mid-Range Interiors: ₹12 – ₹18 Lakhs
• Premium Interiors: ₹18 – ₹25 Lakhs
• Luxury Interiors: ₹25 Lakhs+

### What Is Included in a Complete 3 BHK Interior Package?
• Living Room: TV Unit, Wall Panelling, Decorative Lighting, False Ceiling, Console Units
• Modular Kitchen: Base Cabinets, Overhead Cabinets, Pantry Units, Countertops, Hardware Accessories
• Master Bedroom: Wardrobe, Bed Back Panel, Side Tables, Dressing Unit
• Bedroom 2: Wardrobe, Study Unit, Storage Solutions
• Bedroom 3: Guest Room Setup, Wardrobe, Multipurpose Furniture
• Additional Work: False Ceiling, Electrical Modifications, Painting, Decorative Elements, Storage Solutions

### Cost Breakdown of a 3 BHK Interior Project

1. Modular Kitchen Cost
• Basic Modular Kitchen: ₹1.5 – ₹3 Lakhs
• Mid-Range Kitchen: ₹3 – ₹5 Lakhs
• Premium Kitchen: ₹5 – ₹8 Lakhs
(Finishes like Laminate, Acrylic, PU Paint, or Veneer significantly affect pricing).

2. Wardrobe Cost for a 3 BHK (Accounts for 20–30% of budget)
• Basic Laminate Wardrobe: ₹1.5 – ₹3 Lakhs
• Sliding Wardrobes: ₹3 – ₹5 Lakhs
• Premium Customized Wardrobes: ₹5 Lakhs+

3. False Ceiling Cost
• Basic Gypsum Ceiling: ₹90 – ₹140 Per Sq Ft
• Decorative Ceiling: ₹150 – ₹350 Per Sq Ft
• Premium Customized Ceiling: ₹350+ Per Sq Ft

4. TV Unit and Entertainment Wall Cost
• Basic TV Unit: ₹40,000 – ₹80,000
• Customized TV Unit: ₹80,000 – ₹2 Lakhs
• Premium Feature Wall: ₹2 Lakhs+

### Interior Design Cost Per Square Foot in Gurgaon
• Basic: ₹1,200 – ₹1,800 | Mid-Range: ₹1,800 – ₹3,000
• Premium: ₹3,000 – ₹5,000 | Luxury: ₹5,000+
(Example: A typical 1400 Sq Ft apartment ranges from ₹16.8 Lakhs for Basic up to ₹70 Lakhs for Premium depending on the scope).

### Major Factors Affecting 3 BHK Interior Cost
• Material Quality: MDF vs HDHMR vs Commercial Plywood vs Marine Plywood.
• Hardware Selection: Soft-close and premium accessory brands like Hettich, Hafele, Blum, or Ebco.
• Customization Level: Walk-in wardrobes, home office setups, and entertainment walls increase pricing over standardized solutions.
• Civil and Renovation Work: Flooring, wall demolition, electrical rewiring, and plumbing modifications.

### Sample 3 BHK Interior Packages
• Budget-Friendly (₹10–12 Lakhs): Modular kitchen, basic wardrobes, standard false ceiling, TV unit, basic lighting. (Ideal for rentals or first-time owners).
• Mid-Range (₹15–18 Lakhs): Premium kitchen, better hardware, customized storage, decorative ceilings, designer lighting. (Best for end-use homes).
• Premium (₹20–25 Lakhs): Fully customized interiors, premium finishes, advanced storage, designer furniture, smart home integration.

### Frequently Asked Questions
• How much does a 3 BHK interior cost in Gurgaon? Most range between ₹8 lakh and ₹25 lakh.
• What is the cost of a modular kitchen for a 3 BHK? Typically between ₹1.5 lakh and ₹8 lakh.
• What is the average interior design cost per square foot? ₹1,200 to ₹5,000+ per sq ft.
• How long does a project take? 8 to 16 weeks depending on customization.
• What is the most expensive part? Modular kitchen, wardrobes, civil work, and premium finishes.

### Final Thoughts
In Gurgaon, most homeowners should budget between ₹12 lakh and ₹18 lakh for a high-quality mid-range interior project. The key to a successful project is balancing design aspirations with practical budgeting.`
  },
  {
    slug: "modular-kitchen-cost-gurgaon-2026",
    category: "Modular Kitchen",
    title: "Modular Kitchen Cost in Gurgaon (2026): Complete Pricing Guide",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800",
    excerpt: "Planning a new kitchen? Discover the complete modular kitchen cost in Gurgaon for 2026, including laminate, acrylic, PU finish, plywood, layouts, and installation charges.",
    content: `The kitchen is no longer just a place to cook—it's the heart of the modern home. In 2026, the average modular kitchen cost in Gurgaon ranges between ₹1.2 lakh and ₹7 lakh, while premium designer kitchens can exceed ₹10 lakh.

### Average Modular Kitchen Cost in Gurgaon
• Basic Modular Kitchen: ₹1.2 – ₹2 Lakhs
• Mid-Range Kitchen: ₹2 – ₹4 Lakhs
• Premium Kitchen: ₹4 – ₹7 Lakhs
• Luxury Customized Kitchen: ₹7 Lakhs+

### What Is Included in a Modular Kitchen?
• Base Cabinets & Wall Cabinets
• Countertops (Granite, Quartz, Marble)
• Hardware (Hinges, Channels, Soft-close drawers, Handles)
• Accessories (Cutlery trays, Bottle pull-outs, Corner carousels, Tall pantry units)

### Modular Kitchen Cost Based on Layout
• L-Shaped Kitchen (Best for compact spaces): Small (₹1.2–2L), Medium (₹2–3L), Large (₹3–5L)
• Parallel Kitchen (Efficient workflow): Standard (₹2–4L), Premium (₹4–6L)
• U-Shaped Kitchen (Maximum storage): Medium (₹3–5L), Large (₹5–7L)
• Island Kitchen (For large spaces/villas): Basic Island (₹5L+), Premium Island (₹8L+)

### Kitchen Cost Based on Finishes & Materials
• Laminate Finish: ₹1.2 Lakh – ₹3 Lakh (Affordable, easy maintenance)
• Acrylic Finish: ₹2.5 Lakh – ₹5 Lakh (High-gloss premium appearance, moisture resistant)
• PU Finish: ₹4 Lakh – ₹7 Lakh (Seamless, high-end aesthetics)
• Veneer Finish: ₹5 Lakh+ (Natural wood appearance, timeless appeal)
• Core Materials: MDF (₹1–2L), HDHMR (₹2–3.5L), Commercial Plywood (₹2.5–4L), Marine Plywood (₹3.5–6L). Plywood remains the most recommended choice for Gurgaon's climate.

### Cost of Kitchen Accessories & Hardware
• Cutlery Tray: ₹2,000 – ₹5,000 | Bottle Pull-Out: ₹6,000 – ₹12,000
• Tall Unit: ₹20,000 – ₹50,000 | Corner Carousel / Magic Corner: ₹15,000 – ₹45,000
• Hardware Impact: Standard (Ebco/Ozone), Mid-Premium (Hettich/Hafele), Luxury (Blum). Hardware accounts for 15–20% of the kitchen budget.
• Countertops: Granite (₹250–600/sq ft), Quartz (₹450–900/sq ft), Marble (₹600–2,500+/sq ft).

### Hidden Costs Most Homeowners Forget
• Electrical Work: ₹10,000 – ₹50,000
• Plumbing Changes: ₹15,000 – ₹60,000
• Chimney & Hob Installation: ₹20,000 – ₹80,000
• Civil Modifications: ₹25,000 – ₹1 Lakh+

### Sample Kitchen Budgets
• Budget Kitchen (₹1.5 Lakhs): Laminate finish, MDF cabinets, standard hardware.
• Mid-Range Kitchen (₹3 Lakhs): Plywood cabinets, acrylic finish, Hettich hardware, quartz countertop. (Best value for money).
• Premium Kitchen (₹6 Lakhs): Marine plywood, PU finish, Blum hardware, premium accessories, designer lighting.

### Frequently Asked Questions
• How much do most homeowners spend? Between ₹2 lakh and ₹4 lakh for a good quality modular setup.
• Which finish is better, Acrylic or Laminate? Acrylic looks premium and glossy, while laminate is easier to maintain and cheaper.
• What is the lifespan? A well-built modular kitchen can last 15–20 years with proper maintenance.

### Final Thoughts
Instead of choosing the cheapest option, focus on the right combination of durable materials and functional layout design. For most Gurgaon homes, a budget of ₹2.5 lakh to ₹4 lakh delivers the best value.`
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