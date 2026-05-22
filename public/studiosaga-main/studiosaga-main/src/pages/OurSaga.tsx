"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PremiumApproach from "@/components/PremiumApproach";
import PremiumServices from "@/components/PremiumServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useEffect, useState } from "react";
import About3 from "@/extracomponents/About3";
import BlogsCarousel from "@/components/BlogsCarousel";
import { motion } from "framer-motion";
import { Check, Star, Heart, Zap, Shield, Layout, Palette, Lamp, Sofa, PenTool } from "lucide-react";

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


// --- REPLACE YOUR OLD EXPERTISE ARRAY WITH THIS ---
// --- UPDATE THIS EXPERTISE ARRAY AGAIN ---
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
    // NEW LINK FOR LIGHTING
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop" 
  },
  { 
    icon: Star, 
    title: "Decor Styling", 
    desc: "The finishing touches that bring personality to your space.",
    // NEW LINK FOR DECOR
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop"
  },
  { 
    icon: PenTool, 
    title: "Project Management", 
    desc: "Seamless execution from initial concept to final installation.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
];

const expertise = [
  { icon: Layout, title: "Space Planning", desc: "Strategic layout optimization to maximize flow." },
  { icon: Palette, title: "Color Consultation", desc: "Expert guidance on schemes that enhance mood." },
  { icon: Sofa, title: "Furniture Selection", desc: "Curated sourcing balancing aesthetics and cost." },
  { icon: Lamp, title: "Lighting Design", desc: "Layered lighting strategies for ambiance." },
  { icon: Star, title: "Decor Styling", desc: "Finishing touches that bring personality." },
  { icon: PenTool, title: "Project Management", desc: "Seamless execution from concept to install." },
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

{/* Overlay */}
<div className="absolute inset-0 bg-black/40"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
  <motion.h1 
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    // UPDATE: Sizes reduced to (3xl, 5xl, 6xl) for a cleaner, smaller look
    className="text-white text-3xl md:text-5xl lg:text-6xl mb-6 font-extralight tracking-[0.2em] uppercase"
  >
    Our Anam Cara 
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
                    Anam Cara Interiors is a residential interior design and turnkey execution studio dedicated to creating affordable luxury homes with soul, simplicity, and structure.
                  </p>
                  <p>
                    We believe great design is not about excess—it's about intent. Every space we create balances aesthetics, functionality, and long-term usability. Our work reflects thoughtful planning, calm neutral aesthetics, quality craftsmanship, honest pricing, and respect for timelines.
                  </p>
                  <p>
                    We design spaces that age gracefully and feel good every day. Homes should support life, not overwhelm it.
                  </p>
                </div>
              </div>




              
              {/* Image Placeholder - Replace url with your image */}
{/* REPLACE YOUR EXISTING IMAGE DIV WITH THIS BLOCK */}
{/* REPLACE YOUR EXISTING IMAGE DIV WITH THIS BLOCK */}
<div className="relative h-[500px] w-full pl-6 pb-6 mt-6 mr-6">
   {/* The Offset Background Layer (Primary Color Accent) */}
   <div className="absolute inset-0 w-full h-full bg-primary/10 rounded-2xl transform -translate-x-6 translate-y-6 -z-10"></div>
   
   {/* Main Image Card on top */}
   <div className="relative h-full w-full bg-white rounded-xl overflow-hidden shadow-2xl border-[3px] border-white z-10">
      <img 
        src="https://images.pexels.com/photos/2067638/pexels-photo-2067638.jpeg" 
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





        {/* ================== CORE VALUES (Mission/Vision) ================== */}
{/* ================== CORE VALUES (FULL COLOR) ================== */}
        <section className="py-32 bg-stone-100">
          <div className="container mx-auto px-6 max-w-7xl">
            
            <div className="text-center mb-20">
               <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">The Foundation</span>
               <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mt-4">Built on Principles</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              
              {/* Card 1: MISSION */}
              <div className="group relative h-[450px] w-full overflow-hidden rounded-xl cursor-default shadow-lg">
                
                {/* Background Image (Full Color) */}
                <div className="absolute inset-0 w-full h-full">
                   <img 
                     src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2000&auto=format&fit=crop" 
                     alt="Mission" 
                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                   />
                </div>

                {/* Dark Overlay (For text readability) */}
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-3xl text-white mb-2">Our Mission</h3>
                    <div className="w-12 h-[1px] bg-white/50 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                  </div>

                  <p className="text-white/90 font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    To create calm, functional, and timeless homes that support real living. We design interiors that balance aesthetics, functionality, and long-term usability—making luxury accessible without dilution.
                  </p>
                </div>
              </div>

              {/* Card 2: VISION (Center Offset) */}
              <div className="group relative h-[450px] w-full overflow-hidden rounded-xl cursor-default shadow-2xl md:-mt-12 z-10 ring-4 ring-white">
                
                {/* Background Image (Full Color) */}
                <div className="absolute inset-0 w-full h-full">
                   <img 
                     src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                     alt="Vision" 
                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                   />
                </div>

                <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/30"></div>

                <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <Star className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-3xl text-white mb-2">Our Vision</h3>
                    <div className="w-12 h-[1px] bg-white/50 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                  </div>

                  <p className="text-white/95 font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    To be the trusted partner for affordable luxury interiors, proving that thoughtful design and disciplined execution create homes that feel premium without overspending.
                  </p>
                </div>
              </div>

              {/* Card 3: VALUES */}
              <div className="group relative h-[450px] w-full overflow-hidden rounded-xl cursor-default shadow-lg">
                
                {/* Background Image (Full Color) */}
                <div className="absolute inset-0 w-full h-full">
                   <img 
                     src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2000&auto=format&fit=crop" 
                     alt="Values" 
                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                   />
                </div>

                <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/40"></div>

                <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-3xl text-white mb-2">Our Values</h3>
                    <div className="w-12 h-[1px] bg-white/50 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                  </div>

                  <p className="text-white/90 font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Function before decoration. Timeless over trendy. Calm color palettes. Durable materials. Homes designed for real life. These values guide every project and ensure spaces that age gracefully.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>









        {/* ================== EXPERTISE GRID ================== */}
        {/* <section className="py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl mb-4">Our Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive design solutions tailored to your unique needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 hover:bg-secondary/10 rounded-lg transition-colors">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
  



















 
















        {/* ================== PHILOSOPHY SECTION ================== */}
{/* ================== PHILOSOPHY SECTION (REDESIGNED) ================== */}
       

               <PremiumApproach />

               <PremiumServices/>






        {/* ================== PACKAGES ================== */}



        <WhyChooseUs/>






        {/* Keep existing component if you wish, or remove if the data above replaces it */}
        {/* <About3 /> */}
        
        {/* <BlogsCarousel /> */}
      </main>

      <Footer />
    </div>
  );
};

export default OurSaga;