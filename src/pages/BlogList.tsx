
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import Footer from "@/components/Footer";
import logo from "@/assets/logo111.png";

// CLEAN DATA ARRAY: Line breaks proper hain taaki tables render ho sakein
export const blogsData = [
  {
    slug: "2-bhk-interior-design-cost-gurgaon",
    category: "Interior Cost Guide",
    title: "How Much Does a 2 BHK Interior Design Cost in Gurgaon? | 2026 Price Guide",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800",
    excerpt: "Know the complete 2 BHK interior design cost in Gurgaon for 2026. Explore pricing, material costs, modular kitchen costs, wardrobe costs, and budgeting tips.",
    content: `Buying a new home is exciting, but planning the interiors can quickly become overwhelming. One of the most common questions homeowners ask is: "How much does a 2 BHK interior design cost in Gurgaon?"

The answer depends on several factors including the size of the apartment, material selection, scope of work, modular furniture requirements, and the level of customization.

For most Gurgaon homeowners, a complete 2 BHK interior project typically falls between ₹5 lakh and ₹15 lakh, while premium projects can exceed this range depending on materials and finishes.

### Average 2 BHK Interior Design Cost in Gurgaon

| Package Type | Estimated Cost |
| :--- | :--- |
| Basic Interiors | ₹5 – ₹7 Lakhs |
| Mid-Range Interiors | ₹8 – ₹12 Lakhs |
| Premium Interiors | ₹12 – ₹18 Lakhs |
| Luxury Interiors | ₹18 Lakhs+ |

The final budget depends on the number of customized elements included in the project.

### What Is Included in a 2 BHK Interior Project?

* **Living Room:** TV Unit, Wall Panelling, False Ceiling, Decorative Lighting, Storage Units
* **Modular Kitchen:** Base Cabinets, Wall Cabinets, Countertops, Hardware, Accessories (Often ranges from ₹1 lakh to ₹4 lakh)
* **Master Bedroom:** Wardrobe, Bed Back Panel, Side Tables, Lighting
* **Second Bedroom:** Wardrobe, Study Unit, Storage Solutions
* **Additional Elements:** False Ceiling, Electrical Work, Painting, Decorative Features

### Cost Breakdown of a 2 BHK Interior Project

#### 1. Modular Kitchen Cost
The kitchen usually consumes 25–35% of the overall interior budget.

| Kitchen Type | Cost Range |
| :--- | :--- |
| Basic Laminate Kitchen | ₹1 – ₹2 Lakhs |
| Mid-Range Modular Kitchen | ₹2 – ₹4 Lakhs |
| Premium Acrylic Kitchen | ₹4 – ₹6 Lakhs |

#### 2. Wardrobe Cost

| Wardrobe Type | Cost |
| :--- | :--- |
| Laminate Wardrobe | ₹70,000 – ₹1.5 Lakhs |
| Sliding Wardrobe | ₹1.5 – ₹3 Lakhs |
| Premium Wardrobe | ₹3 Lakhs+ |

#### 3. False Ceiling Cost

| Ceiling Type | Cost Per Sq Ft |
| :--- | :--- |
| Basic Gypsum Ceiling | ₹80 – ₹120 |
| Premium Ceiling Design | ₹150 – ₹300 |

#### 4. TV Unit Cost

| Type | Cost |
| :--- | :--- |
| Basic TV Unit | ₹25,000 – ₹50,000 |
| Custom TV Unit | ₹60,000 – ₹1.5 Lakhs |

### Interior Design Cost Per Square Foot in Gurgaon

| Category | Cost Per Sq Ft |
| :--- | :--- |
| Basic | ₹1,200 – ₹1,800 |
| Mid-Range | ₹1,800 – ₹3,000 |
| Premium | ₹3,000 – ₹5,000+ |

### Factors That Affect Interior Design Cost

* **Material Selection:** Choice between MDF, HDHMR, Commercial Plywood, or Marine Plywood.
* **Hardware Quality:** Premium fittings from brands like Hettich, Hafele, and Blum affect budgets.
* **Customization Level:** Customized furniture costs more than standardized modular solutions.
* **Home Size:** Larger apartments require more storage and finishing materials.

### How to Reduce Your Interior Design Cost
* **Prioritize Essentials:** Start with Kitchen, Wardrobes, and TV Unit before decorative elements.
* **Choose Durable Materials:** Investing in quality materials reduces maintenance costs over time.
* **Avoid Over-Customization:** Simple, functional designs provide better value.

### Frequently Asked Questions
* **How much does a 2 BHK interior cost in Gurgaon?** Most projects fall between ₹5 lakh and ₹15 lakh.
* **What is the average modular kitchen cost in Gurgaon?** Between ₹1 lakh and ₹4 lakh, while premium can exceed ₹5 lakh.
* **What is the interior design cost per square foot in Gurgaon?** Generally between ₹1,200 and ₹5,000+ per sq ft.
* **How long does a 2 BHK interior project take?** 6–12 weeks depending on complexity.

### Final Thoughts
A well-planned 2 BHK interior project in Gurgaon is about creating a functional, organized, and comfortable home. For most homeowners, budgeting between ₹8 lakh and ₹12 lakh provides a strong balance of quality, durability, and design.`
  }
];

const BlogList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F6F2] flex flex-col justify-between relative overflow-hidden">

      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent py-6 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Studia Saga" className="h-10 md:h-16 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-stone-600">
            <Link to="/" className="hover:text-[#B08B57] transition-colors">Home</Link>
            <Link to="/our-saga" className="hover:text-[#B08B57] transition-colors">Our Saga</Link>
            <Link to="/style-palette" className="text-[#B08B57] font-bold">Style Palette</Link>
            <Link to="/contact" className="hover:text-[#B08B57] transition-colors">Contact</Link>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#1f1f1f] p-2 focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

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

      {/* BLOG GRID */}
      <section className="py-32 flex-grow">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24 mt-12">
            <span className="text-[#B08B57] uppercase tracking-[0.35em] text-xs font-bold">Studia Saga Magazine</span>
            <h1 className="text-5xl md:text-7xl font-light text-[#1f1f1f] mt-6 font-serif">
              Design <span className="italic text-[#B08B57]">Insights</span>
            </h1>
          </div>

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
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
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
                    {/* YAHAN AB FIX HAI: List page par sirf neat excerpt text dikhega, symbols nahi */}
                    <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <Link to={`/blog/${blog.slug}`} className="text-[#B08B57] uppercase tracking-wider text-xs font-bold flex items-center gap-2 hover:text-[#1d1d1d] transition-colors duration-300 w-fit">
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






