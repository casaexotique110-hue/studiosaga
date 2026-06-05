import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HeroCarousel2 from "@/components/HeroCarousel2";

const stylesData = [
  {
    id: 1,
    title: "Modern Contemporary",
    tagline: "Clean, Elegant & Current",
    philosophy: "Balances sleek modern architecture with daily functionality. It utilizes high-end current materials and curved elements to create spaces that feel sophisticated yet highly liveable.",
    images: [
      "/images/ourr/banner/1.png",
      "/images/ourr/contemporary/1.jpeg",
      "/images/ourr/contemporary/2.jpeg",
      "/images/ourr/contemporary/3.jpeg",
    ],
    elements: [
      "Neutral color palettes with strategic contrast",
      "Sleek furniture profiles with straight and gentle lines",
      "Minimal clutter with integrated space management",
      "Statement architectural lighting fixtures",
      "Rich mix of glass, polished metal, and natural wood",
    ],
  },
  {
    id: 2,
    title: "Minimalist",
    tagline: "Less is More",
    philosophy: "Focuses strictly on the essence of the space. By stripping away excess decoration, it creates a deeply peaceful, airy, and calming environment where architecture itself takes center stage.",
    images: [
      "/images/ourr/banner/2.png",
      "/images/ourr/ModernMinimalist/1.jpeg",
      "/images/ourr/ModernMinimalist/2.jpeg",
      "/images/ourr/ModernMinimalist/3.jpeg",
    ],
    elements: [
      "Extremely clean, uninterrupted open spaces",
      "Intelligent hidden storage systems",
      "Strictly limited or monochromatic color palettes",
      "Highly functional, multi-purpose furniture",
      "An abundance of natural negative space",
    ],
  },
  {
    id: 3,
    title: "Scandinavian",
    tagline: "Serenity in Simplicity",
    philosophy: "Rooted in the Nordic lifestyle, this design language emphasizes clean lines, warm utility, and cozy furnishings that are both beautiful and structurally accessible.",
    images: [
      "/images/ourr/banner/3.png",
      "/images/ourr/Scandinavian/1.jpeg",
      "/images/ourr/Scandinavian/2.jpeg",
      "/images/ourr/Scandinavian/3.jpeg",
    ],
    elements: [
      "Light wood accents (Ash, Beech, Pine)",
      "White, cream, and pale pastel backdrops",
      "Cozy layered textures (Wool, sheepskin, linen)",
      "Maximizing natural light with expansive windows",
      "Functional and highly organic decor choices",
    ],
  },
  {
    id: 4,
    title: "Victorian / Classical",
    tagline: "Royal, Elegant & Timeless Luxury",
    philosophy: "Inspired by majestic European heritage and royal palaces. It features intricate detailing, high ceilings, and majestic layouts designed for grand villas and clients who appreciate historical aesthetics.",
    images: [
      "/images/ourr/banner/4.png",
      "/images/ourr/Classic/2.jpeg",
      "/images/ourr/Classic/3.jpeg",
      "/images/ourr/Classic/4.jpeg",
    ],
    elements: [
      "Ornate wall moldings and detailed cornices",
      "Grand crystal or brass chandeliers",
      "Rich, heavy fabrics like velvet and silk brocades",
      "Exquisitely carved statement furniture pieces",
      "Intricate wallpaper and detailed ceiling medallions",
    ],
  },
  {
    id: 5,
    title: "Modern Classic",
    tagline: "Simplicity Meets Timeless Elegance",
    philosophy: "A heavily trending style in luxury Indian residences. It beautiful bridges the gap between historical architectural detailing and clean, mid-century or modern furniture layouts.",
    images: [
      "/images/ourr/banner/5.png",
      "/images/ourr/modernclassic/1.jpeg",
      "/images/ourr/modernclassic/2.jpeg",
      "/images/ourr/modernclassic/3.jpeg",
    ],
    elements: [
      "Sophisticated classical wall paneling/moldings",
      "Neutral luxury color palettes (Champagne, Taupe, Ivories)",
      "Sleek contemporary furniture silhouettes",
      "Premium marble flooring and high-end stone inserts",
      "Elegant minimalist chandeliers and warm lighting profiles",
    ],
  },
  {
    id: 6,
    title: "Industrial",
    tagline: "Raw, Refined & Edgy",
    philosophy: "Inspired by converted warehouses and urban lofts. This aesthetic celebrates exposed building materials and rugged structural elements while maintaining premium functional interior zoning.",
    images: [
      "/images/ourr/banner/6.png",
      "/images/ourr/industrial/2.jpeg",
      "/images/ourr/industrial/3.jpeg",
      "/images/ourr/industrial/4.jpeg",
    ],
    elements: [
      "Exposed original brickwork, iron beams, and ductwork",
      "Micro-concrete or polished concrete flooring setups",
      "Vintage industrial or cage lighting fixtures",
      "Deep neutral and dark monochrome color schemes",
      "Expansive open floor plans with high architectural windows",
    ],
  },
  {
    id: 7,
    title: "Bohemian (Boho)",
    tagline: "Free-Spirited & Artistic Expression",
    philosophy: "An unconventional, artistic approach that layers vibrant colors, global textures, and natural elements. It represents an eclectic lifestyle that is deeply personal and creative.",
    images: [
      "/images/ourr/banner/7.png",
      "/images/ourr/bohimean/1.jpeg",
      "/images/ourr/bohimean/2.jpeg",
      "/images/ourr/bohimean/3.jpeg",
    ],
    elements: [
      "Richly layered global textiles, poufs, and rugs",
      "Warm, saturated earthy background tones",
      "Abundance of diverse indoor potted plants",
      "Natural cane, rattan, and wicker furniture detailing",
      "Eclectic, travel-inspired vintage decor collections",
    ],
  },
  {
    id: 8,
    title: "Japandi",
    tagline: "Zen Minimalism & Clean Textures",
    philosophy: "The ultimate fusion of Japanese artistic mindfulness and Scandinavian functionality. It brings forth a warm minimalism, utilizing organic materials to craft a highly luxurious, zen-like peace.",
    images: [
      "/images/ourr/banner/8.png",
      "/images/ourr/japandi/2.jpeg",
      "/images/ourr/japandi/3.jpeg",
      "/images/ourr/japandi/4.jpeg",
    ],
    elements: [
      "Warm minimalist design with zero unnecessary clutter",
      "Deeply natural textures like clay, linen, and raw wood",
      "Low-profile furniture structures keeping spaces open",
      "Muted, calming earth and organic neutral tones",
      "Soft, diffused architectural lighting systems",
    ],
  },
  {
    id: 9,
    title: "Mediterranean",
    tagline: "Vacation Luxury & Organic Airiness",
    philosophy: "Captures the sun-drenched coastal vibes of Spain, Italy, and Greece. It relies heavily on soft curves, rough stone finishes, and earthy whites to evoke a relaxed, premium resort-like living experience.",
    images: [
      "/images/ourr/banner/9.png",
      "/images/ourr/mediterranean/2.jpeg",
      "/images/ourr/mediterranean/3.jpeg",
      "/images/ourr/mediterranean/4.jpeg",
    ],
    elements: [
      "Soft structural archways and wall niches",
      "Textured lime-plaster or wabi-sabi wall finishes",
      "Terracotta tiles or natural limestone floors",
      "Heavy, dark hand-hewn exposed wooden ceiling beams",
      "Earthy whites paired with sea-inspired blue or olive accents",
    ],
  },
  {
    id: 10,
    title: "Art Deco",
    tagline: "Glamour, Bold Geometry & Sophistication",
    philosophy: "Channeling the vintage luxury of the 1920s high-society hotel spaces. It brings theatrical drama and bold geometric structures together with bespoke craftsmanship for a truly striking statement.",
    images: [
      "/images/ourr/banner/10.png",
      "/images/ourr/artistic/1.jpeg",
      "/images/ourr/artistic/2.jpeg",
      "/images/ourr/artistic/3.jpeg",
    ],
    elements: [
      "Bold, symmetrical geometric and chevron patterns",
      "High-contrast metallic gold, brass, or chrome accents",
      "Rich velvet, high-gloss lacquered surfaces, and exotic veneers",
      "Dramatic, high-contrast black, emerald, or deep gold palettes",
      "Theatrical sculptural lighting and custom geometric wallpaper",
    ],
  },
  {
    id: 11,
    title: "Rustic / Farmhouse",
    tagline: "Natural, Comfortable & Homely Warmth",
    philosophy: "Celebrates the rugged charm of countryside living. It focuses on weathered wood, heavy stonework, and soft fabrics to build a deeply welcoming and historic space for family living.",
    images: [
      "/images/ourr/banner/11.png",
      "/images/ourr/rustic/2.jpeg",
      "/images/ourr/rustic/3.jpeg",
      "/images/ourr/rustic/4.jpeg",
    ],
    elements: [
      "Reclaimed wood detailing and large structural beams",
      "Natural rough-cut stone textures or accent walls",
      "Warm, cozy, and highly inviting neutral earth palettes",
      "Vintage wrought-iron hardware and classical fixtures",
      "Deeply comfortable, slipcovered oversized seating configurations",
    ],
  },
  {
    id: 12,
    title: "Luxury Hotel Style",
    tagline: "Premium Hospitality & Immersive Lounging",
    philosophy: "Brings the bespoke, tailored feeling of an elite five-star boutique hotel into daily domestic spaces. Every corner is micro-styled with high-end layers to evoke an ongoing sense of pampering.",
    images: [
      "/images/ourr/banner/12.png",
      "/images/ourr/Luxury/2.jpeg",
      "/images/ourr/Luxury/3.jpeg",
      "/images/ourr/Luxury/4.jpeg",
    ],
    elements: [
      "Multi-layered ambient, task, and architectural lighting",
      "Ultra-rich textures layered seamlessly side by side",
      "Sophisticated materials (Polished onyx, satin, high-end carpets)",
      "Perfect symmetrical design layouts with curated custom art",
      "Bespoke premium hardware and hidden smart-home automations",
    ],
  },
  {
    id: 13,
    title: "Indian Traditional / Ethnic",
    tagline: "Heritage, Rich Textures & Royal Culture",
    philosophy: "Rooted deeply in rich cultural history and royal legacies. It seamlessly blends intricately carved solid wood, traditional architecture patterns like Jali and arches, and hand-woven ethnic fabrics to create spaces that look incredibly royal and deeply familiar.",
    images: [
      "/images/ourr/India/1.png",
      "/images/ourr/India/2.png",
      "/images/ourr/India/3.png",
      "/images/ourr/India/4.png",
    ],
    elements: [
      "Intricately hand-carved solid teak or rosewood furniture",
      "Traditional architectural element integrations like Jharokhas & Jali work",
      "Rich ethnic Indian fabrics (Silk, brocades, hand-woven cotton, Ikat)",
      "Warm vibrant accent palettes paired with brass and copper decor elements",
      "Curated custom artwork including Pichwai paintings, terracotta, and murals",
    ],
  },
];

const StylePalette = () => {
  const [selectedImages, setSelectedImages] = React.useState<Record<number, string>>({});

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
            Discover the aesthetic that speaks to your soul. From raw
            industrial lofts to serene classical retreats.
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
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } items-center`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col gap-4">
                    
                    {/* Main Image */}
                    <div className="relative group overflow-hidden rounded-sm shadow-xl aspect-[4/3] sm:aspect-video md:aspect-[4/3]">
                      <img
                        src={selectedImages[style.id] || style.images[0]}
                        alt={style.title}
                        className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Thumbnail Images */}
                    {style.images.length > 1 && (
                      <div className="grid grid-cols-4 gap-3">
                        {style.images.map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            onClick={() =>
                              setSelectedImages((prev) => ({
                                ...prev,
                                [style.id]: img,
                              }))
                            }
                            className={`overflow-hidden border rounded-sm cursor-pointer transition-all duration-300 ${
                              (selectedImages[style.id] || style.images[0]) === img
                                ? "border-black dark:border-white"
                                : "border-stone-200 dark:border-stone-800"
                            }`}
                          >
                            <img
                              src={img}
                              alt={`${style.title}-${imgIndex}`}
                              className="w-full h-24 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 md:px-8">
                  <h3 className="text-luxury-gold text-sm tracking-[0.3em] uppercase mb-3 font-semibold">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1} — {style.tagline}
                  </h3>

                  <h2 className="text-4xl md:text-5xl font-light mb-8 uppercase tracking-wide text-stone-900 dark:text-stone-100">
                    {style.title}
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-light mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 inline-block">
                        Philosophy
                      </h4>
                      <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base">
                        {style.philosophy}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-light mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 inline-block">
                        Key Elements
                      </h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {style.elements.map((element, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-muted-foreground font-light text-sm md:text-base"
                          >
                            <span className="h-px w-4 bg-luxury-gold/50 flex-shrink-0"></span>
                            {element}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <Button
                      variant="outline"
                      onClick={() => window.location.href = "/contact"}
                      className="rounded-none border-foreground/50 hover:bg-foreground hover:text-background uppercase tracking-widest text-xs py-6 px-8 transition-all duration-300"
                    >
                      Talk To Our Designer
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Divider */}
              {index !== stylesData.length - 1 && (
                <div className="w-full h-px bg-stone-200 dark:bg-stone-800 mt-24 max-w-md mx-auto" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-stone-900 text-stone-50 py-24 mt-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-light mb-6 uppercase tracking-wide">
              Not sure which style fits you?
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto mb-10 font-light text-sm md:text-base">
              Our designers specialize in blending these styles to create
              something uniquely yours. Book a consultation to find your
              signature palette.
            </p>
            <Button
              size="lg"
              onClick={() => window.location.href = "/contact"}
              className="bg-white text-stone-900 hover:bg-stone-200 rounded-none px-10 py-6 uppercase tracking-widest"
            >
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