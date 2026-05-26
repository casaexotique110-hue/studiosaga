// LuxuryInteriors.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const LuxuryInteriors = () => {
  return (
    <div className="bg-white text-stone-800">
      <Header />

      {/* HERO */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-5xl px-6">
          <p className="uppercase tracking-[4px] text-white/70 text-sm">
            Luxury By StudioSaga
          </p>

          <h1 className="text-6xl md:text-8xl font-bold text-white mt-4 leading-tight">
            Homes That Redefine Elegance
          </h1>

          <p className="mt-8 text-xl text-white/80">
            A touch of opulence, timeless aesthetics and thoughtful craftsmanship
            for luxurious modern living.
          </p>

          <Button className="mt-10 bg-[#BFA181] hover:bg-[#a88a69] text-white px-8 py-6 rounded-full text-lg">
            Book Design Consultation
          </Button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Tailor-made interiors",
            "Premium craftsmanship",
            "Luxury styling",
            "Timely delivery",
          ].map((item, i) => (
            <div
              key={i}
              className="border border-stone-200 rounded-3xl p-8 text-center hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f8f5f1] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt=""
            className="rounded-3xl h-[600px] object-cover w-full"
          />

          <div>
            <p className="text-[#BFA181] uppercase tracking-[3px]">
              How We Work
            </p>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              We Bring Luxury Homes To Life
            </h2>

            <div className="mt-10 space-y-8">
              {[
                "Design Consultation",
                "Interior Planning",
                "Project Management",
                "Luxury Styling",
              ].map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#BFA181] text-white flex items-center justify-center text-xl font-bold shrink-0">
                    {i + 1}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">{step}</h3>

                    <p className="text-stone-600 mt-2">
                      Crafted with detail, elegance and functionality.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOMES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#BFA181] uppercase tracking-[3px]">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Bespoke Luxury Spaces
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="rounded-3xl h-[400px] object-cover w-full"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Let’s Design Your Dream Luxury Home
        </h2>

        <p className="mt-6 text-white/70 max-w-2xl mx-auto">
          Elevate your lifestyle with interiors that embody sophistication and
          timeless beauty.
        </p>

        <Button className="mt-10 bg-[#BFA181] hover:bg-[#a88a69] text-white px-8 py-6 rounded-full text-lg">
          Get In Touch
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default LuxuryInteriors ;