import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const InteriorKitStandard = () => {
  const { size } = useParams();

  const features = [
    "Premium furniture selection",
    "Designer lighting fixtures",
    "Premium paint and finishes",
    "Custom storage solutions",
    "Designer window treatments",
    "Three design consultations",
    "3D visualization",
    "Complimentary styling session",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-luxury-gold mb-4">Standard Tier</p>
            <h1 className="text-4xl md:text-6xl font-extralight tracking-wide mb-8 uppercase">
              {size?.toUpperCase()} Package
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Enhanced design solutions for your {size?.toUpperCase()} home. Elevated quality and personalized touches for refined living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light tracking-wide mb-6">What's Included</h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-luxury-beige p-8 rounded-lg">
                <h3 className="text-xl font-light tracking-wide mb-4">Package Details</h3>
                <div className="space-y-3 text-muted-foreground font-light">
                  <p className="flex justify-between">
                    <span>Timeline:</span>
                    <span className="font-medium">6-8 weeks</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Warranty:</span>
                    <span className="font-medium">2 years</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Revisions:</span>
                    <span className="font-medium">4 included</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-luxury-cream h-96 rounded-lg"></div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-light tracking-wide"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InteriorKitStandard;
