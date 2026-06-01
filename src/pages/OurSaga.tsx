"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PremiumApproach from "@/components/PremiumApproach";
import PremiumServices from "@/components/PremiumServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useEffect, useState } from "react";
import About3 from "@/extracomponents/About3";
import { motion } from "framer-motion";
import { Layout, Palette, Lamp, Sofa, PenTool, Star } from "lucide-react";
import Newcomponentui from "@/components/Newcomponentui";

const videoSources = ["/images/2.mp4"];

// --- DATA FROM YOUR PDF ---
const philosophies = [
  {
    title: "Simplicity & Timelessness",
    desc: "We prioritize clean lines and timeless aesthetics that won't feel dated. This protects your investment by avoiding trendy elements that quickly lose appeal."
  },
  {
    title: "Functionality First",
    desc: "Beautiful spaces must be livable. Every design decision is evaluated for its practical impact on your daily life, ensuring form and function work in harmony."
  },
  {
    title: "Sustainable & Cost-Effective",
    desc: "We source sustainable materials that don't compromise on style. Smart choices reduce long-term costs while supporting ecological wellness."
  },
  {
    title: "Wellbeing & Adaptability",
    desc: "Our designs enhance wellbeing through light optimization and biophilic elements. We create flexible spaces that evolve with your lifestyle."
  }
];

// --- EXPERTISE ARRAY ---
const expertise2 = [
  { 
    icon: Layout, 
    title: "Space Planning", 
    desc: "Strategic layout optimization to maximize flow and functionality.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  },
  { 
    icon: Palette, 
    title: "Color Consultation", 
    desc: "Expert guidance on color schemes that enhance mood and space.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
  },
  { 
    icon: Sofa, 
    title: "Furniture Selection", 
    desc: "Curated sourcing balancing aesthetics, comfort, and cost.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    icon: Lamp, 
    title: "Lighting Design", 
    desc: "Layered lighting strategies for perfect ambiance and utility.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop" 
  },
  { 
    icon: Star, 
    title: "Decor Styling", 
    desc: "The finishing touches that bring personality to your space.",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop"
  },
  { 
    icon: PenTool, 
    title: "Project Management", 
    desc: "Seamless execution from initial concept to final installation.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  }
];

const expertise = [
  { icon: Layout, title: "Space Planning", desc: "Strategic layout optimization to maximize flow." },
  { icon: Palette, title: "Color Consultation", desc: "Expert guidance on schemes that enhance mood." },
  { icon: Sofa, title: "Furniture Selection", desc: "Curated sourcing balancing aesthetics and cost." },
  { icon: Lamp, title: "Lighting Design", desc: "Layered lighting strategies for ambiance." },
  { icon: Star, title: "Decor Styling", desc: "Finishing touches that bring personality." },
  { icon: PenTool, title: "Project Management", desc: "Seamless execution from concept to install." }
];

const packages = [
  {
    name: "Starter Package",
    tagline: "For DIY Enthusiasts",
    features: [
      "Initial consultation & style assessment",
      "Custom concept board",
      "Shopping guidance & vendor contacts",
      "Color palette recommendations"
    ]
  },
  {
    name: "Signature Package",
    tagline: "Complete Transformation",
    isPopular: true,
    features: [
      "Everything in Starter Package",
      "3D visualizations of space",
      "Furniture selection & procurement",
      "Installation support & styling"
    ]
  },
  {
    name: "Premium Package",
    tagline: "Turnkey Experience",
    features: [
      "End-to-end design & build management",
      "Contractor coordination",
      "Custom millwork design",
      "White-glove styling & post-support"
    ]
  }
];

const OurSaga = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoSources.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ================== HERO BANNER ================== */}
      <div className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden">
        {videoSources.map((src, index) => (
          <video
            key={index}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 
              ${index === currentVideo ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Single Balanced Visual Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-3xl md:text-5xl lg:text-6xl mb-6 font-extralight tracking-[0.2em] uppercase"
          >
            Our Saga 
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-xs md:text-base font-light tracking-[0.3em] uppercase"
          >
            Designing Homes That Feel Calm, Functional & Timeless
          </motion.p>
        </div>
      </div>

      <main>
        {/* ================== STORY SECTION ================== */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">About Us</span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                  Designing Homes with Soul, <br /> <span className="italic text-muted-foreground">Structure & Simplicity</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg font-light leading-relaxed">
                  <p>
                    Studia Saga Interiors is a residential interior design and turnkey execution studio dedicated to creating affordable luxury homes with soul, simplicity, and structure.
                  </p>
                  <p>
                    We believe great design is not about excess, it's about intent. Every space we create balances aesthetics, functionality, and long-term usability. Our work reflects thoughtful planning, calm neutral aesthetics, quality craftsmanship, honest pricing, and respect for timelines.
                  </p>
                  <p>
                    We design spaces that age gracefully and feel good every day. Homes should support life, not overwhelm it.
                  </p>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative h-[500px] w-full pl-6 pb-6 mt-6 mr-6">
                {/* The Offset Background Layer (Primary Color Accent) */}
                <div className="absolute inset-0 w-full h-full bg-primary/10 rounded-2xl transform -translate-x-6 translate-y-6 -z-10"></div>
                 
                {/* Main Image Card on top */}
                <div className="relative h-full w-full bg-white rounded-xl overflow-hidden shadow-2xl border-[3px] border-white z-10">
                  <img
                    src="/aboutus.png"
                    alt="Interior Story"
                    className="object-cover w-full h-full"
                  />
                  {/* Subtle inner border overlay for definition */}
                  <div className="absolute inset-0 border border-black/10 rounded-xl pointer-events-none"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <About3 />

        {/* ================== PHILOSOPHY & PREMIUM SECTIONS ================== */}
        <PremiumApproach />
        <Newcomponentui />
        <PremiumServices />

        {/* ================== PACKAGES / REASONS ================== */}
        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
};

export default OurSaga;