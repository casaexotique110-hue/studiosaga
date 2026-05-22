import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HeroCarousel2 from "@/components/HeroCarousel2";

const stylesData = [
  {
    id: 1,
    title: "Scandinavian",
    image: "/images/ourr/8.jpg",
    tagline: "Serenity in Simplicity",
    philosophy: "Rooted in the Nordic regions, this style emphasizes clean lines, utility, and simple furnishings that are functional, beautiful, and cozy.",
    elements: [
      "Light, muted colors (whites, creams, pale grays)",
      "Heavy use of natural wood accents",
      "Clutter-free spaces with hidden storage",
      "Maximizing natural light",
      "Cozy textiles (wool, sheepskin, linen)"
    ]
  },
  {
    id: 2,
    title: "Bohemian (Boho Chic)",
    image: "/images/ourr/11.jpg",
    tagline: "Curated Chaos & Artistic Freedom",
    philosophy: "Boho chic implies a lifestyle that is unconventional and artistic. It is a 'more is more' approach that layers colors, patterns, and textures.",
    elements: [
      "Mix of vintage and modern furniture",
      "Global-inspired textiles",
      "Abundance of indoor plants",
      "Warm, earthy tones",
      "Low-level seating"
    ]
  },
  {
    id: 3,
    title: "Industrial",
    image: "/images/ourr/2.jpg",
    tagline: "Raw, Refined & Edgy",
    philosophy: "Inspired by the lofty look of warehouses and factories, this style celebrates raw materials like exposed brick and metal.",
    elements: [
      "Exposed brick, beams, and ductwork",
      "Concrete floors and metal finishes",
      "Vintage industrial lighting",
      "Neutral color palette",
      "Open floor plans"
    ]
  },
  {
    id: 4,
    title: "Contemporary",
    image: "/images/ourr/10.jpg",
    tagline: "Soft Textures & Inviting Lines",
    philosophy: "Balances the sleekness of modern style with the comfort of traditional homes through curved silhouettes.",
    elements: [
      "Curved furniture silhouettes",
      "Warm wood veneers",
      "Mixed metal accents",
      "Layered lighting",
      "Plush fabrics"
    ]
  },
  {
    id: 5,
    title: "Modern Minimalist",
    image: "/images/ourr/4.jpg",
    tagline: "Understated Elegance",
    philosophy: "Uses high-end materials and monochromatic palettes to create luxury without clutter.",
    elements: [
      "High-quality materials (Marble, Brass)",
      "Monochromatic color scheme",
      "Sharp architectural lines",
      "Statement art pieces",
      "Ambient lighting"
    ]
  },
  {
    id: 6,
    title: "Artistic Boutique",
    image: "/images/ourr/5.jpg", // Suggested placeholder, update if name is different
    tagline: "Curated Luxury & Bold Expression",
    philosophy: "A fusion of gallery-style sophistication and high-fashion interiors. This style treats every piece of furniture as a work of art, blending bold colors with bespoke craftsmanship.",
    elements: [
      "Custom-made furniture and unique sculptures",
      "Bold, dramatic color palettes (Emerald, Gold, Navy)",
      "High-contrast textures like velvet and polished stone",
      "Symmetry and high-end wallpaper",
      "Theatrical lighting fixtures"
    ]
  },
  // {
  //   id: 7,
  //   title: "Nature-Modern (Biophilic)",
  //   image: "/images/our/6.jpeg", 
  //   tagline: "Bringing the Outdoors In",
  //   philosophy: "Design that connects the occupant to the natural environment to improve well-being.",
  //   elements: [
  //     "Living walls and indoor plants",
  //     "Natural stone and wood",
  //     "Large windows",
  //     "Organic shapes",
  //     "Natural ventilation"
  //   ]
  // },
  {
    id: 8,
    title: "Mid-Century Modern",
    image: "/images/ourr/1.jpg",
    tagline: "Retro Nostalgia meets Function",
    philosophy: "Form follows function, featuring organic curves and geometric lines from the 50s and 60s.",
    elements: [
      "Furniture with tapered legs",
      "Warm wood tones",
      "Bold accent colors",
      "Organic curves",
      "Statement lighting"
    ]
  }
];

const StylePalette = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-luxury-gold/30">
      <Header />
      <HeroCarousel2 />
      
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-stone-50 dark:bg-stone-950">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extralight uppercase tracking-widest mb-6"
          >
            The Style Palette
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto"
          >
            Discover the aesthetic that speaks to your soul. From raw industrial lofts to serene scandinavian retreats.
          </motion.p>
        </div>
      </div>

      <main className="pb-24">
        <div className="container mx-auto px-6">
          
          {stylesData.map((style, index) => (
            <div key={style.id} className="mb-32 last:mb-0">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <div className="relative group overflow-hidden rounded-sm shadow-xl aspect-[4/5] md:aspect-[3/4]">
                    <div className="absolute inset-0 bg-stone-200 animate-pulse" /> 
                    <img 
                      src={style.image} 
                      alt={style.title}
                      className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 md:px-8">
                  <h3 className="text-luxury-gold text-sm tracking-[0.3em] uppercase mb-3 font-semibold">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1} — {style.tagline}
                  </h3>
                  <h2 className="text-4xl md:text-5xl font-light mb-8 uppercase tracking-wide">
                    {style.title}
                  </h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-light mb-3 border-b border-stone-200 pb-2 inline-block">Philosophy</h4>
                      <p className="text-muted-foreground leading-relaxed font-light">
                        {style.philosophy}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-light mb-3 border-b border-stone-200 pb-2 inline-block">Key Elements</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {style.elements.map((element, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground font-light text-sm md:text-base">
                            <span className="h-px w-4 bg-luxury-gold/50"></span>
                            {element}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <Button 
                      variant="outline" 
                      className="rounded-none border-foreground/50 hover:bg-foreground hover:text-background uppercase tracking-widest text-xs py-6 px-8 transition-all duration-300"
                    >
                      Explore {style.title}
                    </Button>
                  </div>
                </div>

              </motion.div>

              {/* Decorative Divider */}
              {index !== stylesData.length - 1 && (
                <div className="w-full h-px bg-stone-200 mt-24 max-w-md mx-auto" />
              )}
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="bg-stone-900 text-stone-50 py-24 mt-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-light mb-6 uppercase">Not sure which style fits you?</h2>
            <p className="text-stone-400 max-w-2xl mx-auto mb-10 font-light">
              Our designers specialize in blending these styles to create something uniquely yours. Book a consultation to find your signature palette.
            </p>
            <Button size="lg" className="bg-white text-stone-900 hover:bg-stone-200 rounded-none px-10 py-6 uppercase tracking-widest">
              Book Consultation
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StylePalette;