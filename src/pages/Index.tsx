import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StudiaSagaDisplay from "@/components/StudiaSagaDisplay";
import ClientSection from "@/components/clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import ChalkTVSection from '@/components/ChalkTVSection'; 
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroCarousel />

        {/* About Section */}
        <section className="py-24 bg-[#E9E7DE] px-6">
          {/* Import curvy fonts */}
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Birthstone+Bounce&family=Herr+Von+Muellerhoff&family=Ms+Madi&display=swap');`}
          </style>

          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="mb-8 leading-relaxed">    
              {/* Anam Cara Interiors - Curvy Signature Style */}
              <span 
                className="text-2xl md:text-4xl text-foreground mr-3" 
                style={{ 
                  fontFamily: "'Birthstone Bounce', cursive", 
                  fontWeight: '400',
                  display: 'inline-block',
                  transform: 'rotate(-2px)' 
                }}
              >
                Anam Cara Interiors
              </span>
              
              <span className="text-base md:text-lg font-light tracking-wide text-muted-foreground">
                Affordable Luxury Interior Design & Turnkey Solutions
                <br />
                Thoughtfully Designed Interiors. Seamlessly Executed Homes.
              </span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                At Anam Cara Interiors, we design homes that feel calm, functional, and timeless. From concept to completion, we deliver end-to-end interior solutions with clarity, care, and cost transparency.
              </p>
              
              <p>
                We specialize in affordable luxury interiors—where refined aesthetics meet intelligent planning and disciplined execution.
              </p>
              
              <p>
                Our team combines research-driven design, smart space planning, and disciplined execution to create interiors that are elegant, practical, and budget-conscious.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button
                variant="outline"
                onClick={() => navigate("/Contact")}
                className="border-foreground text-foreground hover:bg-foreground hover:text-background font-light tracking-wide group"
              >
                Book a Free Design Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/our-saga")}
                className="border-foreground text-foreground hover:bg-foreground hover:text-background font-light tracking-wide group"
              >
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <ClientSection />
        <ChalkTVSection />
      </main>

      <StudiaSagaDisplay />
      <Footer />
    </div>
  );
};

export default Index;