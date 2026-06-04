// LuxuryInteriors.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PremiumServices from "@/components/PremiumServices";
import FAQSection from "@/components/FAQSection";


const LuxuryInteriors = () => {
  return (
    <div className="bg-white text-stone-800 w-full overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative h-[85vh] md:h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Responsive Background Image */}
        <img
          src="/luxury-page/1.png"
          alt="Luxury Interior Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-5xl px-4 sm:px-6">
          <p className="uppercase tracking-[3px] md:tracking-[4px] text-white/70 text-xs md:text-sm font-medium">
            Luxury By StudioSaga
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mt-4 leading-tight tracking-tight">
            Homes That Redefine Elegance
          </h1>

          <p className="mt-6 md:mt-8 text-base md:text-xl text-white/80 max-w-3xl mx-auto font-light">
            A touch of opulence, timeless aesthetics and thoughtful craftsmanship
            for luxurious modern living.
          </p>

          <Button className="mt-8 md:mt-10 bg-[#BFA181] hover:bg-[#a88a69] text-white px-6 py-5 md:px-8 md:py-6 rounded-full text-base md:text-lg transition-all active:scale-95">
            Book Design Consultation
          </Button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Responsive Grid: 1-col mobile, 2-col tablet, 4-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            "Tailor-made interiors",
            "Premium craftsmanship",
            "Luxury styling",
            "Timely delivery",
          ].map((item, i) => (
            <div
              key={i}
              className="border border-stone-200 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center hover:shadow-lg hover:border-[#BFA181]/40 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f8f5f1] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Responsive Process Frame - Height scales beautifully now */}
          <div className="w-full aspect-[4/3] sm:aspect-video md:aspect-[4/5] max-h-[600px] overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
            <img
              src="/luxury-page/2.png"
              alt="Our Working Process"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
            />
          </div>

          <div className="px-2 md:px-0">
            <p className="text-[#BFA181] uppercase tracking-[2px] md:tracking-[3px] text-xs md:text-sm font-semibold">
              How We Work
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-4 leading-tight text-stone-900">
              We Bring Luxury Homes To Life
            </h2>

            <div className="mt-8 md:mt-10 space-y-6 md:space-y-8">
              {[
                "Design Consultation",
                "Interior Planning",
                "Project Management",
                "Luxury Styling",
              ].map((step, i) => (
                <div key={i} className="flex gap-4 md:gap-5 items-start">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#BFA181] text-white flex items-center justify-center text-base md:text-xl font-bold shrink-0 shadow-sm">
                    {i + 1}
                  </div>

                  <div>
                    <h3 className="text-lg md:text-2xl font-semibold text-stone-800">{step}</h3>
                    <p className="text-stone-600 text-sm md:text-base mt-1 md:mt-2 font-light">
                      Crafted with detail, elegance and functionality.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOMES / PORTFOLIO */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#BFA181] uppercase tracking-[3px] text-xs md:text-sm font-semibold">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-4 text-stone-900">
            Bespoke Luxury Spaces
          </h2>
        </div>

        {/* Responsive Grid: 1-col on mobile, 2-col on small screens, 3-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            "/luxury-page/2.png",
            "/luxury-page/3.png",
            "/luxury-page/4.png",
          ].map((img, i) => (
            <div 
              key={i} 
              className="w-full aspect-[4/3] sm:aspect-square md:h-[400px] overflow-hidden rounded-2xl md:rounded-3xl shadow-sm group"
            >
              <img
                src={img}
                alt={`Luxury Portfolio Space 0${i + 1}`}
                className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-white py-16 md:py-24 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Let’s Design Your Dream Luxury Home
          </h2>

          <p className="mt-4 md:mt-6 text-sm md:text-lg text-white/70 max-w-2xl mx-auto font-light">
            Elevate your lifestyle with interiors that embody sophistication and
            timeless beauty.
          </p>

          <Button className="mt-8 md:mt-10 bg-[#BFA181] hover:bg-[#a88a69] text-white px-6 py-5 md:px-8 md:py-6 rounded-full text-base md:text-lg transition-all active:scale-95">
            Get In Touch
          </Button>
        </div>
      </section>

      <PremiumServices />
      
    <FAQSection page="luxury"/>
    
      <Footer />
    </div>
  );
};

export default LuxuryInteriors;