import React from "react";
import { 
  ArrowRight, 
  ChefHat, 
  Columns, 
  Sofa, 
  Tv, 
  Lightbulb, 
  Baby, 
  Bath, 
  Hammer, 
  Briefcase, 
  Armchair, 
  CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you have shadcn button, or use standard HTML button
import HeroCarousel from "@/components/HeroCarousel";      
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { About } from "@/components/about";
import Eervices from "@/components/Eervices";

const Services = () => {
  return (
    <div className="min-h-screen ">

              <Header />
             <HeroCarousel />
        <About />
        <Eervices/>


            <Footer />


    </div>
    
  );
};

// Data Array for cleaner JSX
const servicesData = [
  {
    title: "Modular Kitchen",
    description: "Smart, stylish kitchens designed for modern living with ergonomic layouts and premium finishes.",
    icon: <ChefHat className="w-6 h-6" />,
  },
  {
    title: "Modular Wardrobe",
    description: "Custom storage solutions that maximize space elegantly, ensuring clutter-free bedrooms.",
    icon: <Columns className="w-6 h-6" />,
  },
  {
    title: "Living Room Interiors",
    description: "Creating inviting spaces for family and gatherings that reflect your personal style and comfort.",
    icon: <Sofa className="w-6 h-6" />,
  },
  {
    title: "Wall TV Units",
    description: "Elegant entertainment centers with modern aesthetics to become the focal point of your living area.",
    icon: <Tv className="w-6 h-6" />,
  },
  {
    title: "False Ceiling & Lighting",
    description: "Designer ceilings with ambient lighting solutions that set the perfect mood for every occasion.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: "Kids Room Interiors",
    description: "Playful yet elegant spaces for your little ones, designed with safety and creativity in mind.",
    icon: <Baby className="w-6 h-6" />,
  },
  {
    title: "Bathroom Vanity",
    description: "Luxurious vanity units with premium finishes that turn your daily routine into a spa-like experience.",
    icon: <Bath className="w-6 h-6" />,
  },
  {
    title: "Full Home Renovation",
    description: "Complete transformation of your living space, handling everything from civil work to final styling.",
    icon: <Hammer className="w-6 h-6" />,
  },
  {
    title: "Office Interior Design",
    description: "Professional workspaces that inspire productivity while maintaining a stylish corporate identity.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Furniture & Custom Units",
    description: "Bespoke furniture crafted to your specific dimensions and design preferences.",
    icon: <Armchair className="w-6 h-6" />,
  },
];

export default Services;
