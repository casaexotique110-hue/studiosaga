// FullHomeInteriors.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PremiumServices from "@/components/PremiumServices";

const FullHomeInteriors = () => {
  return (
    <div className="bg-white text-stone-800 w-full overflow-x-hidden">
      <Header />

      {/* HERO SECTION - Wapas original image set kar di hai */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
          alt="The Complete Home Interiors Experience"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <p className="text-white/80 mb-3 tracking-[3px] uppercase text-xs md:text-sm font-medium">
            Studia Saga Interiors
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            The Complete Home Interiors Experience
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto font-light">
            From concept to completion, we craft homes that reflect your
            lifestyle, elegance, and personality.
          </p>

          <Button className="mt-8 bg-[#BFA181] hover:bg-[#a88a69] text-white px-6 py-5 md:px-8 md:py-6 rounded-full text-base md:text-lg transition-all active:scale-95">
            Book a Design Consultation
          </Button>
        </div>
      </section>

      {/* WHAT WE OFFER WITH VISUAL CARDS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#BFA181] uppercase tracking-[3px] text-xs md:text-sm font-semibold">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-4 text-stone-900">
            Full Home Interiors 
          </h2>
        </div>

        {/* 1-column on mobile, 3-columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Bedroom",
              desc: "Thoughtfully designed interiors tailored to your lifestyle and vision.",
              img: "/images/ourr/servies-pages/full-home/1.jpeg",
            },
            {
              title: "Washroom",
              desc: "End-to-end execution with seamless coordination and timely delivery.",
              img: "/images/ourr/servies-pages/full-home/2.jpeg",
            },
            {
              title: "Living Room",
              desc: "Furniture, decor, lighting and styling curated exclusively for your home.",
              img: "/images/ourr/servies-pages/full-home/3.jpeg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl md:rounded-3xl border border-stone-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group bg-white"
            >
              {/* Image Frame with responsive scaling protection */}
              <div className="w-full aspect-[4/3] sm:aspect-video md:aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-stone-900">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="bg-[#f8f5f1] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#BFA181] uppercase tracking-[3px] text-xs md:text-sm font-semibold">
              Your Journey
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-4 text-stone-900">
              From Vision To Reality
            </h2>
          </div>

          {/* Responsive Steps Track */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              "Consultation",
              "Design Planning",
              "Execution",
              "Move-In",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] text-center border border-stone-100/80 flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#BFA181] text-white flex items-center justify-center text-lg md:text-2xl font-bold shadow-sm">
                  {i + 1}
                </div>
                <h3 className="mt-4 md:mt-6 text-base md:text-xl font-semibold text-stone-800 tracking-tight">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGNER & PROJECT MANAGER TEAM SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="bg-[#f8f5f1] p-8 md:p-12 rounded-2xl md:rounded-3xl hover:border-[#BFA181]/20 border border-transparent transition-all">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-stone-900">
              Your Interior Designer
            </h3>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              Our expert designers combine creativity with functionality to
              create timeless spaces tailored to your lifestyle.
            </p>
          </div>

          <div className="bg-[#f8f5f1] p-8 md:p-12 rounded-2xl md:rounded-3xl hover:border-[#BFA181]/20 border border-transparent transition-all">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-stone-900">
              Your Project Manager
            </h3>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              Dedicated project experts ensure smooth execution, quality checks,
              and timely completion of your dream home.
            </p>
          </div>
        </div>
      </section>

      {/* VISUAL BACKGROUND SHOWCASE BLOCK */}
      <section className="w-full px-4 sm:px-6 max-w-7xl mx-auto pb-16 md:pb-24">
        <div className="w-full aspect-[4/3] sm:aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-md">
          <img 
            src="/images/ourr/servies-pages/full-home/3.jpeg" 
            alt="Studia Saga Premium Living Room Execution" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* TESTIMONIAL BLOCK */}
      <section className="py-24 bg-stone-900 text-white text-center px-4 sm:px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif italic font-light max-w-4xl mx-auto leading-snug text-stone-100">
            “Studia Saga transformed our dream into reality with elegance,
            precision and unmatched craftsmanship.”
          </h2>
          <p className="mt-6 md:mt-8 text-[#BFA181] uppercase tracking-[2px] text-xs md:text-sm font-semibold">
            — Happy Homeowners, Delhi NCR
          </p>
        </div>
      </section>

              <PremiumServices />


      {/* CTA SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-stone-900 tracking-tight">
          Experience Bespoke Living
        </h2>

        <p className="mt-4 md:mt-6 text-sm md:text-base text-stone-600 max-w-2xl mx-auto font-light">
          Let us create interiors that reflect luxury, comfort and timeless
          sophistication.
        </p>

        <Button className="mt-8 md:mt-10 bg-[#BFA181] hover:bg-[#a88a69] text-white px-6 py-5 md:px-8 md:py-6 rounded-full text-base md:text-lg transition-all active:scale-95">
          Begin Your Journey
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default FullHomeInteriors;