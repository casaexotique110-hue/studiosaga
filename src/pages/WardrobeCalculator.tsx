import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Scaling, 
  Layers, 
  Gem, 
  Hammer, 
  PlusSquare, 
  ChevronDown, 
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WardrobeCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const wardrobeTypes = [
    {
      title: "Swing Wardrobe",
      desc: "Built with hinged doors to offer more space for storage and absolute visibility.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Sliding Wardrobe",
      desc: "Modern designs with horizontally movable doors to optimize layout and save floor space.",
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const steps = [
    {
      number: "1",
      icon: <Scaling className="w-6 h-6 text-amber-600" />,
      title: "Select wardrobe length",
      desc: "Let's start with the basics. The dimension helps us understand the scope of work better."
    },
    {
      number: "2",
      icon: <Layers className="w-6 h-6 text-amber-600" />,
      title: "Choose the wardrobe type",
      desc: "What's your type? Tell us if you like a sliding or swing door wardrobe to get the quote right."
    },
    {
      number: "3",
      icon: <Gem className="w-6 h-6 text-amber-600" />,
      title: "Pick preferred finish",
      desc: "Finishing matters (Laminate, Acrylic, Glass finishes), especially when calculating wardrobe cost."
    },
    {
      number: "4",
      icon: <Hammer className="w-6 h-6 text-amber-600" />,
      title: "Pick a core material",
      desc: "The material core substrate (MDF, HDHMR, Plywood) is a major factor in structural longevity and price."
    },
    {
      number: "5",
      icon: <PlusSquare className="w-6 h-6 text-amber-600" />,
      title: "Select smart accessories",
      desc: "Choose add-ons (LED strip lighting, internal drawers, shoe racks, trouser racks) to include in the estimate."
    }
  ];

  const faqs = [
    {
      q: "Will the wardrobe price calculator throw up the cost based on location?",
      a: "Yes, the Studia Saga wardrobe calculator localizes pricing to account for local city installation teams, logistics, and material rates."
    },
    {
      q: "How will the wardrobe price calculator make assumptions on materials, accessories & other products?",
      a: "The calculator uses standard configurations for swing/sliding modules (e.g. standard depth of 2 ft, standard internal shelving layout) and applies rate premiums based on your core substrate and finish selections."
    },
    {
      q: "How accurate is this? Can I expect my designer to share a similar quote?",
      a: "Our estimator is highly accurate for standard layout widths (+/- 10%). If you require specialized loft extensions, floor-to-ceiling customization, complex corner walk-ins, or premium metal drawers, the designer will adjust the quote accordingly."
    },
    {
      q: "What if I want to change the style of my wardrobe? How will the estimator factor in the cost of demolition?",
      a: "Structural wall alterations or dismantling of existing wooden wardrobes will add civil/demolition charges. Your designer will inspect and quote these on-site services after a physical inspection of your space."
    },
    {
      q: "Can I customise my wardrobe and get a cost basis?",
      a: "Absolutely! The estimator establishes your base layout budget. During design meetings, you can select custom handles, soft-close hinges, internal partition layouts, vanity mirrors, and built-in safe lockers to tailor the wardrobe to your needs."
    }
  ];

  const handleStartCalculator = () => {
    navigate("/wardrobe-price-calculator/calculate");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between font-sans">
      <Header />

      <main className="flex-grow pt-16">
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[75vh] flex items-center justify-start px-6 md:px-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1600&q=80')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/60 to-transparent" />

          <div className="relative z-10 max-w-3xl space-y-6 text-white pt-8">
            <span className="inline-flex items-center gap-1.5 text-amber-500 font-medium tracking-widest text-xs uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/25">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Modular Wardrobes
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight tracking-tight text-slate-50">
              What is the Wardrobe Price Calculator?
            </h1>
            <p className="text-base md:text-lg text-slate-300 font-light max-w-xl leading-relaxed">
              The wardrobe price calculator lets you skip the hassle of guesswork and get an accurate price estimate for your modular wardrobe. Answer five simple questions, and let us do the math for you!
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                onClick={handleStartCalculator}
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-6 text-base rounded-full shadow-lg hover:shadow-amber-950/30 transition-all duration-300 group flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Breadcrumb */}
            <div className="pt-8 text-xs text-slate-400 font-light flex items-center gap-2">
              <span>Home</span>
              <ChevronRight className="w-3 h-3" />
              <span>Interiors</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-amber-500 font-normal">Wardrobe Price Calculator</span>
            </div>
          </div>
        </section>

        {/* ================= 5 STEPS CARDS ================= */}
        <section className="bg-slate-100/50 py-20 px-6 border-b border-slate-200/50">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <h2 className="text-3xl font-serif text-slate-900 font-light">
                5 steps to get a quote
              </h2>
              <p className="text-slate-500 font-light text-sm">
                It's simple, it's quick, it's convenient. Follow these parameters for an instant wardrobe calculation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((s, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/60 p-6 space-y-4 hover:shadow-md transition-shadow duration-300 relative group">
                  <div className="absolute top-4 right-6 text-slate-100 font-extrabold text-6xl group-hover:text-amber-500/10 transition-colors pointer-events-none select-none">
                    0{s.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 pt-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Button
                onClick={handleStartCalculator}
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-5 rounded-full shadow-md"
              >
                GET FREE ESTIMATE
              </Button>
            </div>
          </div>
        </section>

        {/* ================= SINCE ONE TYPE DOESN'T FIT ALL ================= */}
        <section className="py-20 px-6 max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl font-serif text-slate-900 font-light">
              Since one type doesn't fit all
            </h2>
            <p className="text-slate-500 font-light text-sm">
              No matter your style, our wardrobe price calculator has got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {wardrobeTypes.map((type, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col justify-between border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="h-60 w-full overflow-hidden relative">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/30 transition-colors" />
                </div>
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-medium text-slate-900">
                      {type.title}
                    </h3>
                    <p className="text-slate-500 font-light text-xs leading-relaxed">
                      {type.desc}
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={handleStartCalculator}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-amber-600 hover:text-amber-700 transition-colors focus:outline-none"
                    >
                      <span>Get Started</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-3xl font-serif text-slate-100 font-light">
                Here's how the wardrobe price calculator works
              </h2>
              <p className="text-slate-400 font-light text-sm">
                The Studia Saga Wardrobe Price Calculator considers factors like dimension, type, material, finish, and accessories to generate the price estimate. By answering a few simple questions, the estimate for your wardrobe with price is calculated in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">Length of the wardrobe</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  The dimension of a wardrobe is a significant factor in calculating its price. The modular wardrobe cost calculator will make assumptions based on your width input.
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">Type of the wardrobe</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Choose sliding doors for compact spaces to save floor footprint, or traditional hinged swing doors for absolute storage depth and visual access.
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">Material and finishes</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Your core substrate (Plywood, HDHMR, MDF) combined with exterior finishes (Laminates, High-gloss Acrylic, Glass shutters) dictates pricing and moisture-resistance.
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">Accessories</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Include specialized pull-out organizers, LED strip lights, shoe drawers, and vanity mirrors directly in the calculations to shape the final cost.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button
                onClick={handleStartCalculator}
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-5 rounded-full"
              >
                Calculate Now
              </Button>
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="py-20 px-6 max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex w-10 h-10 rounded-full bg-amber-50 items-center justify-center text-amber-600">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-serif text-slate-900 font-light">
              IN | Wardrobe Price Calculator FAQs
            </h2>
            <p className="text-slate-500 font-light text-sm">
              Quick answers to common questions about modular wardrobe cost estimations.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-medium text-slate-800 text-sm md:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeFaq === idx ? "rotate-180 text-amber-600" : ""}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-slate-500 font-light leading-relaxed border-t border-slate-100 pt-4 animate-slide-down">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= BRAND DESCRIPTION / SEO SECTION ================= */}
        <section className="bg-slate-200/30 border-t border-slate-200 py-16 px-6">
          <div className="max-w-5xl mx-auto space-y-6 text-xs md:text-sm leading-relaxed text-slate-500 font-light text-justify">
            <h3 className="text-base font-semibold text-slate-800 font-serif">Why Choose Studia Saga To Estimate Your Wardrobe Cost?</h3>
            <p>
              Studia Saga is the most trusted interior design and home renovation platform that connects interior designers, homeowners, and premium vendors. We provide homeowners with highly personalized and efficient home interior designs. Planning to bring home a modular wardrobe but stuck in the loop of getting a price estimate? With our wardrobe price calculator, we are here to make the experience hassle-free for you.
            </p>
            <h3 className="text-base font-semibold text-slate-800 font-serif">Use Our Wardrobe Cost Calculator For Instant Estimates</h3>
            <p>
              The Studia Saga modular wardrobe price calculator is a comprehensive guide to help you understand the factors that are taken into consideration while estimating a modular wardrobe's quote. This helps you get an idea of the estimate for a modular wardrobe including any customization that you may opt for. The wardrobe price calculator allows you to choose from a range of core materials, accessories, and door types while giving you an accurate price estimate.
            </p>
            <p>
              Every product or package you choose needs to fit your needs and lifestyle perfectly. The final price of your modular wardrobe may be lower or higher than the estimate depending on the choice of products and accessories you make. Further, our designers will make sure you understand the process better by providing you with all the additional details you would need. So get started with our modular wardrobe cost calculator, make your choices, and get your modular wardrobe cost with our fairly accurate calculator.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WardrobeCalculator;
