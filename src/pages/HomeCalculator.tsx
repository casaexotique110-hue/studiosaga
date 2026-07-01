import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Home,
  Scaling,
  LayoutList,
  Paintbrush,
  ChevronDown,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const bhkTypes = [
    {
      title: "1 BHK",
      desc: "Make the most of your 1 BHK home with space-saving solutions.",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "2 BHK",
      desc: "Create a spacious feel even in a 2 BHK with our expert designers.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "3 BHK",
      desc: "Transform any 3 BHK, compact or spacious, with stunning interiors.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "4 BHK",
      desc: "Experience a different level of comfort and style in your 4 BHK.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "5 BHK+",
      desc: "Give your beautiful 5 BHK+ home the beautiful interiors it deserves.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const steps = [
    {
      number: "1",
      icon: <Home className="w-6 h-6 text-amber-600" />,
      title: "Choose your BHK type",
      desc: "The type of house helps us understand the configuration and standard layout blueprint of your home."
    },
    {
      number: "2",
      icon: <Scaling className="w-6 h-6 text-amber-600" />,
      title: "Select the size of your house",
      desc: "Input your home's total built-up or carpet area in square feet to get a highly accurate pricing estimate."
    },
    {
      number: "3",
      icon: <LayoutList className="w-6 h-6 text-amber-600" />,
      title: "Pick the rooms to be designed",
      desc: "Select which specific spaces (Living Room, Kitchen, Bedrooms, Pooja room) require customization."
    },
    {
      number: "4",
      icon: <Paintbrush className="w-6 h-6 text-amber-600" />,
      title: "Pick a package preference",
      desc: "Fine-tune calculations by choosing a product tier (Essential, Premium, Luxury) matching your lifestyle."
    }
  ];

  const faqs = [
    {
      q: "Will the full home price estimator throw up a cost based on location?",
      a: "Yes, the Studia Saga price estimator uses local market index data to compute material, labor, civil prep, and transport charges relative to your selected city."
    },
    {
      q: "How will the full home interior price calculator make assumptions on size of house and number of rooms to design?",
      a: "The calculator uses standard builder blueprints for each BHK configuration. For example, a 2 BHK is assumed to have 1 Living Room, 1 Kitchen, 2 Bedrooms, and 2 Bathrooms. You can fully customize this room-selection list during Step 3."
    },
    {
      q: "Can I customize my package and get a cost based on that?",
      a: "Yes! Our estimator provides three structural package profiles: Essential (standard premium laminates), Premium (HDHMR/PU finishes & custom storage), and Luxury (acrylic/tinted glass, bespoke lighting, high-end layouts). During your design meetings, individual materials can be mixed and matched."
    },
    {
      q: "How accurate is this? Can I expect my designer to share a similar quote?",
      a: "The calculator provides a reliable range (+/- 10-15%) based on layout scale and square footage. A formal final quote will be provided by your designer after exact site dimensions are measured and custom drawings are drafted."
    },
    {
      q: "Will the estimator factor in the cost for demolition?",
      a: "No, standard demolition, wall hacking, chimney core cutting, civil plumbing layout overhauls, and sub-floor levelling are handled under custom on-site services. These are added to the final quote after the designer's structural site audit."
    },
    {
      q: "Why can't I choose individual services or products?",
      a: "For immediate, non-interactive budget guidelines, standard package tiers are used. This prevents overload and delivers a budget estimate instantly. Full bespoke flexibility is available during your custom design session."
    }
  ];

  const handleStartCalculator = () => {
    navigate("/home-interior-price-calculator/calculate");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between font-sans">
      {/* Wrapper to overlay header on top of the hero section */}
      <div className="relative w-full">
        <div className="absolute top-0 left-0 right-0 z-50 bg-transparent">
          <Header />
        </div>
      </div>

      {/* Removed pt-16 so the hero image goes right to the top */}
      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        {/* Changed pt-8 to pt-32 to push the text down below the transparent header */}
        <section className="relative min-h-[85vh] flex items-center justify-start px-6 md:px-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/60 to-transparent" />

          {/* Added pt-24 to ensure content doesn't collide with the absolute header text */}
          <div className="relative z-10 max-w-3xl space-y-6 text-white pt-24 pb-12">
            <span className="inline-flex items-center gap-1.5 text-amber-500 font-medium tracking-widest text-xs uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/25">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Full Home Interiors
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight tracking-tight text-slate-50">
              Curious about your dream interior price?
            </h1>
            <p className="text-base md:text-lg text-slate-300 font-light max-w-xl leading-relaxed">
              Get the cost for your full home interiors in 4 easy steps. Answer a few simple questions about your configuration and get an instant pricing estimate.
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
              <span className="text-amber-500 font-normal">Home Interior Price Calculator</span>
            </div>
          </div>
        </section>

        {/* ================= INTRO EXPLANATORY SECTION ================= */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 font-light leading-tight">
                What is the Full Home Interior Price Calculator?
              </h2>
              <p className="text-slate-600 font-light leading-relaxed">
                The full home interior price calculator helps you get an estimate for your full home interiors. All you have to do is answer a few simple questions and, voila!
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
                <Home className="w-5 h-5" /> Instant Pricing Breakdown
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-4">
                Calculate home renovations quickly:
              </p>
              <ul className="space-y-3 text-xs text-slate-400 font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Configured by BHK layouts & total square footage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Choose customized wood core materials & laminates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Select which specific rooms require professional decor</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= 4 STEPS CARDS ================= */}
        <section className="bg-slate-100/50 py-20 px-6 border-y border-slate-200/50">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <h2 className="text-3xl font-serif text-slate-900 font-light">
                Get your estimate in 4 simple steps
              </h2>
              <p className="text-slate-500 font-light text-sm">
                It's that simple and convenient! Explore custom layout calculations in less than a minute.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/60 p-6 space-y-4 hover:shadow-md transition-shadow duration-300 relative group">
                  <div className="absolute top-4 right-6 text-slate-100 font-extrabold text-6xl group-hover:text-amber-500/10 transition-colors pointer-events-none select-none">
                    0{s.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 pt-2">
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

        {/* ================= ESTIMATES FOR ANY HOME (BHK CARDS) ================= */}
        <section className="py-20 px-6 max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl font-serif text-slate-900 font-light">
              Estimates for any home
            </h2>
            <p className="text-slate-500 font-light text-sm">
              Choose your preferred style and sit back while our estimator does its magic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bhkTypes.map((bhk, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="h-48 w-full overflow-hidden relative">
                  <img
                    src={bhk.image}
                    alt={bhk.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/30 transition-colors" />
                </div>
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-medium text-slate-900">
                      {bhk.title}
                    </h3>
                    <p className="text-slate-500 font-light text-xs leading-relaxed">
                      {bhk.desc}
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
                How Does The Full Home Interior Calculator Work?
              </h2>
              <p className="text-slate-400 font-light text-sm">
                Our full home interior price estimator calculates the cost considering the number of bedrooms, size of the house and number of rooms to be designed to get an accurate cost. By answering these questions, we'll be able to understand the scope of work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">BHK type</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Our price estimator will make a few assumptions based on the configuration of your home (1 BHK, 2 BHK, etc.). This will help us get significant layout information and pre-configure standard room grids.
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">Size of the house</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Based on the size of your home and BHK type, our calculator will calculate the cost per sq ft. for the interior services you desire. A precise square footage provides a highly realistic quote.
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-medium text-amber-500">Rooms to be designed</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  There's always a scope of getting a budget as per your requirement. For that, we'll need to number the rooms you would like us to design and our calculator will do the magic for you.
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
              IN | Home Interior Price Calculator FAQs
            </h2>
            <p className="text-slate-500 font-light text-sm">
              Answers to frequent questions regarding comprehensive home renovation pricing.
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
              Studia Saga is a premier end-to-end interior design and renovation platform that connects interior designers, homeowners, and vendors. We provide homeowners with completely personalized, functional, and beautiful full home interior designs. Looking to make your dream home layout come true but need a cost estimate to plan your budget? We are here to make it simple for you.
            </p>
            <p>
              The Studia Saga full home interior price calculator is a comprehensive tool designed to help you understand the factors that are taken into consideration while estimating costs. Choose from BHK configurations (1 BHK up to 5 BHK+), adjust sizes, select rooms (living rooms, modular kitchens, custom master bedrooms, balconies), and pick material finishes to match your lifestyle.
            </p>
            <p>
              Your final home interior design cost may be lower or higher than the estimate depending on the choice of products, accessories, and civil site services (painting, plastering, plumbing relocations, false ceiling configurations) you select with your designer. Get started now to build your estimate.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomeCalculator;

