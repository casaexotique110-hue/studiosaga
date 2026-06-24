// ModularInteriors.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PremiumServices from "@/components/PremiumServices";
import FAQSection from "@/components/FAQSection";
import ModularInteriorsPricing from "@/components/ModularInteriorsPricing";
import { Link } from 'react-router-dom';
import SEO from "@/components/SEO";


const ModularInteriors = () => {
  return (
    <div className="bg-white text-stone-800 w-full overflow-x-hidden">
      <SEO
        title="Modular Interior Design Company Gurgaon"
        keywords="Interior Design Company in Gurgaon"
        description="Looking for an interior design company in Gurgaon? Studia Saga delivers modular, customized, and affordable interiors for modern living."
        canonical="https://www.studiasaga.com/services/modular-interiors"
      />
      <Header />

      {/* HERO */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Local Public Folder Hero Image (1.png) */}
        <img
          src="/modular/1.jpeg"
          alt="	Modern Modular Bedroom Interior"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
          <p className="uppercase tracking-[3px] md:tracking-[4px] text-white/70 text-xs md:text-sm font-medium">
            Modular Interiors By StudioSaga
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mt-4 tracking-tight">
            Smart Designs That Last A Lifetime
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto font-light">
            Beautiful modular kitchens, wardrobes and storage solutions crafted
            for modern living.
          </p>

          <Link to="/Contact">
            <Button className="mt-8 md:mt-10 bg-[#BFA181] hover:bg-[#a88a69] text-white px-6 py-5 md:px-8 md:py-6 rounded-full text-base md:text-lg transition-all active:scale-95">
              Book Consultation
            </Button>
          </Link>


        </div>
      </section>

      {/* SERVICES WITH VISUAL IMAGES */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#BFA181] uppercase tracking-[3px] text-xs md:text-sm font-semibold">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-4 text-stone-900">
            Modular Solutions
          </h2>
        </div>

        {/* 1-col on mobile, 3-col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Modular Kitchen",
              desc: "Elegant kitchens designed with smart functionality and premium finishes.",
              img: "/modular/kitchen.jpeg" // Applied image 2
            },
            {
              title: "Wardrobes",
              desc: "Customized wardrobes crafted to maximize storage beautifully.",
              img: "/modular/wardrob.png" // Applied image 3
            },
            {
              title: "Wall Units",
              desc: "TV units, bookshelves, shoe racks and more designed for modern homes.",
              img: "/modular/TVUnit.png" // Applied image 4
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-stone-200 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Responsive Image Wrapper for Service Cards */}
              <div className="w-full aspect-[4/3] sm:aspect-video md:aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm md:text-base font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLETED WORK / PORTFOLIO SHOWCASE */}


      {/* PROCESS */}
      <section className="bg-[#f8f5f1] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#BFA181] uppercase tracking-[3px] text-xs md:text-sm font-semibold">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-4 text-stone-900">
              Precision In Every Detail
            </h2>
          </div>

          {/* Responsive Grid for Steps: 2-col on mobile, 5-col on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              "Design",
              "Materials",
              "Manufacturing",
              "Quality Check",
              "Installation",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-stone-100 flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#BFA181] text-white flex items-center justify-center text-lg md:text-2xl font-bold shadow-sm">
                  {i + 1}
                </div>

                <h3 className="mt-4 md:mt-6 text-lg md:text-2xl font-semibold text-stone-800 tracking-tight">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-stone-900">
          Crafted With Precision & Built To Last
        </h2>

        <p className="mt-6 md:mt-8 text-sm md:text-lg text-stone-600 leading-relaxed font-light">
          Using premium materials, precision manufacturing and expert
          installation, Studia Saga delivers modular interiors that combine
          durability with sophisticated aesthetics.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-white py-16 md:py-24 px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Transform Your Home With Smart Interiors
        </h2>

        <p className="mt-4 md:mt-6 text-sm md:text-base text-white/70 max-w-2xl mx-auto font-light">
          Experience functional elegance with beautifully designed modular
          interiors tailored for your lifestyle.
        </p>

        <Button className="mt-8 md:mt-10 bg-[#BFA181] hover:bg-[#a88a69] text-white px-6 py-5 md:px-8 md:py-6 rounded-full text-base md:text-lg transition-all active:scale-95">
          Start Your Project
        </Button>
      </section>

      <ModularInteriorsPricing />


      <FAQSection page="modular" />

      <Footer />
    </div>
  );
};

export default ModularInteriors;