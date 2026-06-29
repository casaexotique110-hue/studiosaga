import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  Scaling, 
  Grid, 
  HeartHandshake, 
  ChevronDown, 
  Info,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import kitchen background asset
import kitchenBg from "@/assets/Modular-Kitchen/1.jpg";

const KitchenCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const layouts = [
    {
      title: "Sleek L-shaped Kitchen",
      desc: "Featuring adjoining countertops with corner spaces.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Spacious U-shaped Kitchen",
      desc: "Comprising three connected walls of cabinets with a practical open entrance.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Essential Straight Kitchen",
      desc: "A convenient option with the countertop and cabinets placed in a straight line.",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Elegant Parallel Kitchen",
      desc: "Tailored for free movement featuring cabinets along parallel walls.",
      image: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const steps = [
    {
      number: "1",
      icon: <Grid className="w-6 h-6 text-amber-600" />,
      title: "Select modular layout shape",
      desc: "The kitchen layout lets us understand the scope of work and how we could design your kitchen based on your taste."
    },
    {
      number: "2",
      icon: <Scaling className="w-6 h-6 text-amber-600" />,
      title: "Choose the measurements",
      desc: "This helps us estimate the size of your kitchen and give you a more accurate pricing."
    },
    {
      number: "3",
      icon: <Layers className="w-6 h-6 text-amber-600" />,
      title: "Pick a material package",
      desc: "Our packages will offer you a choice of premium accessories and core substrates to match your lifestyle."
    }
  ];

  const faqs = [
    {
      q: "Will the modular kitchen estimator throw up a cost based on location?",
      a: "Yes, our estimator uses localized material costs, shipping, and installation rates tailored to your city, ensuring your budget estimate is highly relevant to your location."
    },
    {
      q: "How will the modular kitchen price calculator make assumptions on materials, accessories & other products?",
      a: "The calculator references standard industry specifications for each package tier. For example, our Essential package assumes high-quality commercial plywood and standard laminates, whereas the Luxury package assumes premium HDHMR, profile acrylic finishes, and high-end soft-close drawers."
    },
    {
      q: "Can I customize and build my own kitchen and get a cost basis?",
      a: "Absolutely! The estimator is designed to give you a foundational budget guide. Once you request a free session, our expert designers will work with you to custom-pick shutters, drawer baskets, tall units, and pull-out organizers, updating the quote down to the last rupee."
    },
    {
      q: "How accurate is this? Can I expect my designer to share a similar quote?",
      a: "Our estimator is highly accurate (+/- 10-15%) for standard kitchen structures. If your actual site layouts have complex structural variations, custom piping, or exotic countertop requests, the final customized design quote may adjust accordingly."
    },
    {
      q: "What if I want to change the shape of my kitchen? How will the estimator factor in that cost for demolition?",
      a: "For renovations requiring wall demolition, chimney core cutting, or structural relocation, additional civil site prep charges will apply. Our designer will detail these on-site services after doing a physical site inspection."
    },
    {
      q: "Why can't I choose individual accessories?",
      a: "To give you an instant, automated quote, our calculator groups products into harmonized style packages (Essential, Premium, Luxury). During the custom design phase, you have absolute freedom to customize individual items, hardware, and pullouts."
    }
  ];

  const handleStartCalculator = () => {
    navigate("/kitchen-price-calculator/calculate");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between font-sans">
      <Header />

      <main className="flex-grow pt-16">
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[75vh] flex items-center justify-start px-6 md:px-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url(${kitchenBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/60 to-transparent" />

          <div className="relative z-10 max-w-3xl space-y-6 text-white pt-8">
            <span className="inline-flex items-center gap-1.5 text-amber-500 font-medium tracking-widest text-xs uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/25">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Saga Estimator
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight tracking-tight text-slate-50">
              Dream kitchen estimate served quickly
            </h1>
            <p className="text-base md:text-lg text-slate-300 font-light max-w-xl leading-relaxed">
              Get the price of your dream kitchen in 3 simple steps. Choose your layout, specify measurements, and pick your finishes for an instant cost guide.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                onClick={handleStartCalculator}
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-6 text-base rounded-full shadow-lg hover:shadow-amber-950/30 transition-all duration-300 group flex items-center gap-2"
              >
                <span>Calculate now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Breadcrumb */}
            <div className="pt-8 text-xs text-slate-400 font-light flex items-center gap-2">
              <span>Home</span>
              <ChevronRight className="w-3 h-3" />
              <span>Interiors</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-amber-500 font-normal">Kitchen Price Calculator</span>
            </div>
          </div>
        </section>

        {/* ================= INTRO EXPLANATORY SECTION ================= */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 font-light leading-tight">
                The Studia Saga modular kitchen price estimator
              </h2>
              <p className="text-slate-600 font-light leading-relaxed">
                Get a fairly accurate cost with our estimator. Simply select the size and layout of your kitchen and your desired package, and we'll quickly do the math for you!
              </p>
              <Button
                onClick={handleStartCalculator}
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 rounded-full px-6 py-5 font-medium transition-colors"
              >
                Get Started
              </Button>
            </div>
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
              <h3 className="text-xl font-serif mb-4 flex items-center gap-2 text-amber-500">
                <HeartHandshake className="w-5 h-5" /> Why use our Estimator?
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-300 font-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                  <span><strong>Instant Quotes:</strong> No waiting for days. Get a budget estimation in 60 seconds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                  <span><strong>Zero Guesswork:</strong> Tailored pricing based on standard Running Foot (Rft) parameters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                  <span><strong>High-quality Materials:</strong> Curated specifications spanning essential durability to luxury finishes.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= 3 STEPS CARDS ================= */}
        <section className="bg-slate-100/50 py-20 px-6 border-y border-slate-200/50">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <h2 className="text-3xl font-serif text-slate-900 font-light">
                3 simple steps to get your quote
              </h2>
              <p className="text-slate-500 font-light text-sm">
                It's that easy! You can now effortlessly plan your dream kitchen budget and timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/60 p-8 space-y-4 hover:shadow-lg transition-shadow duration-300 relative group">
                  <div className="absolute top-4 right-6 text-slate-100 font-extrabold text-6xl group-hover:text-amber-500/10 transition-colors pointer-events-none select-none">
                    0{s.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 pt-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">
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

        {/* ================= ESTIMATES FOR EVERY KITCHEN ================= */}
        <section className="py-20 px-6 max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl font-serif text-slate-900 font-light">
              Estimates for every kitchen
            </h2>
            <p className="text-slate-500 font-light text-sm">
              Choose your preferred kitchen layout, and let our estimator work its magic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {layouts.map((layout, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col justify-between border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="h-56 w-full overflow-hidden relative">
                  <img
                    src={layout.image}
                    alt={layout.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/30 transition-colors" />
                </div>
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium text-slate-900">
                      {layout.title}
                    </h3>
                    <p className="text-slate-500 font-light text-xs leading-relaxed">
                      {layout.desc}
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={handleStartCalculator}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-amber-600 hover:text-amber-700 transition-colors focus:outline-none"
                    >
                      <span>START NOW</span>
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
                Here's how the modular kitchen price estimator works
              </h2>
              <p className="text-slate-400 font-light text-sm">
                Our modular kitchen price estimator considers the shape and area of your kitchen, materials, and the package you choose to check the pricing in real-time and gives you the kitchen interior cost. We'll ask you about a few things:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">Shape of your kitchen</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  We calculate prices based on your exact layout constraints. Under-counter and wall cabinet allocations vary significantly between L-Shape, Straight, U-Shape, or Parallel modules.
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">Size of your kitchen</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Provide length measurements in running feet for a precise estimation. The cost scales directly with total Running Feet (Rft). The more accurate your size, the more accurate the estimate.
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">Substrates & Packages</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Choose from our curated material packages: Essential (Budget-Friendly Laminate), Premium (HMR Core Acrylic), and Luxury (Hydraulics & Tinted Profile Shutters).
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">Material and finishes</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  The substrate core (HDHMR, Commercial Plywood, MDF) combined with external laminates or PU lacquer impacts the visual finish, moisture resistance, and total pricing.
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">On-site services</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Factor in additional plumbing adjustments, countertop slab preparation, core drill cutting for chimneys, electrical point extensions, paint work, and dado tiles.
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">Built-in Appliances</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Integrate your favorite chimneys, built-in hobs, ovens, microwave units, and dishwashers directly into structural layouts to design a seamless cabinet grid.
                </p>
              </div>
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
              IN | Kitchen Price Calculator FAQs
            </h2>
            <p className="text-slate-500 font-light text-sm">
              Quick answers to common questions about modular kitchen estimations.
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

        {/* ================= SEO / BRAND DESCRIPTION SECTION ================= */}
        <section className="bg-slate-200/30 border-t border-slate-200 py-16 px-6">
          <div className="max-w-5xl mx-auto space-y-6 text-xs md:text-sm leading-relaxed text-slate-500 font-light text-justify">
            <p>
              Studia Saga is an elite interior design and home transformation platform that connects talented designers, homeowners, and vetted vendors to turn spaces into spectacular luxury homes. We provide homeowners with completely personalized, functional, and gorgeous modular kitchen configurations. Looking to estimate modular kitchen design cost per square foot or plan a complete layout upgrade? Our calculator is designed to provide immediate clarity.
            </p>
            <p>
              The Studia Saga modular kitchen price calculator offers a comprehensive guide to understanding costs across shapes (L-Shape, Straight, U-Shape, Parallel) and packages. You get to choose from a collection of premium materials (waterproof plywood, moisture-resistant HDHMR, premium acrylic shutters), built-in appliances (hobs, chimneys, custom microwave tall units), soft-close hydraulics, and cargo baskets.
            </p>
            <p>
              Disclaimer: The calculated kitchen budget is a guided projection based on standard dimensions. Actual final values may shift depending on detailed physical site inspections, custom layouts, structural core cuts, plumbing/electrical relocation complexities, and final material customizations selected with your designer. Get started now to build your estimate!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KitchenCalculator;
