import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Desktop Images
import hero1 from "@/assets/200.jpeg";
import hero3 from "@/assets/hero-3.jpg";

// Mobile Images (Updated with your new paths)
import mobileHero1 from "@/assets/mobile/55.jpg"; 
import mobileHero2 from "@/assets/mobile/555.jpg"; // reject 

const slides = [
  {
    desktopImage: hero1,
    mobileImage: mobileHero1, // Using 55.jpg
    location: "GURUGRAM",
    title: "Anam Cara HOME",
    category: "RESIDENTIAL",
  },
  {
    desktopImage: hero3,
    mobileImage: mobileHero2, // Using 66.jpg
    location: "GURGAON",
    title: "MINIMALIST RETREAT",
    category: "RESIDENTIAL",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/20 z-10" />
          
          {/* --- MOBILE IMAGE --- */}
          <img
            src={slide.mobileImage}
            alt={slide.title}
            className="block md:hidden w-full h-full object-cover"
          />

          {/* --- DESKTOP IMAGE --- */}
          <img
            src={slide.desktopImage}
            alt={slide.title}
            className="hidden md:block w-full h-full object-cover"
          />

          {/* Text overlays */}
          <div className="absolute bottom-24 left-6 md:left-12 z-20 text-white animate-fade-in">
            <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase">
              {slide.location}
            </p>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center animate-fade-in px-4">
            <h1 className="text-xl sm:text-2xl md:text-6xl lg:text-6xl font-extralight tracking-[0.2em] uppercase leading-tight">
              {slide.title}
            </h1>
          </div>

          <div className="absolute bottom-24 right-6 md:right-12 z-20 text-white animate-fade-in">
            <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase">
              {slide.category}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;