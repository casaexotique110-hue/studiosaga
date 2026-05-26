// ModularInteriors.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ModularInteriors = () => {
  return (
    <div className="bg-white text-stone-800">
      <Header />

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="uppercase tracking-[4px] text-white/70 text-sm">
            Modular Interiors
          </p>

          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mt-4">
            Smart Designs That Last A Lifetime
          </h1>

          <p className="mt-6 text-lg text-white/80">
            Beautiful modular kitchens, wardrobes and storage solutions crafted
            for modern living.
          </p>

          <Button className="mt-10 bg-[#BFA181] hover:bg-[#a88a69] text-white px-8 py-6 rounded-full text-lg">
            Book Consultation
          </Button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#BFA181] uppercase tracking-[3px]">
            What We Offer
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Modular Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Modular Kitchen",
              desc: "Elegant kitchens designed with smart functionality and premium finishes.",
            },
            {
              title: "Wardrobes",
              desc: "Customized wardrobes crafted to maximize storage beautifully.",
            },
            {
              title: "Storage Units",
              desc: "TV units, bookshelves, shoe racks and more designed for modern homes.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-stone-200 rounded-3xl p-8 hover:shadow-2xl transition-all"
            >
              <h3 className="text-3xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-stone-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f8f5f1] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#BFA181] uppercase tracking-[3px]">
              Our Process
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Precision In Every Detail
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Design",
              "Materials",
              "Manufacturing",
              "Quality Check",
              "Installation",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#BFA181] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                  {i + 1}
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Crafted With Precision & Built To Last
        </h2>

        <p className="mt-8 text-stone-600 leading-8 max-w-3xl mx-auto">
          Using premium materials, precision manufacturing and expert
          installation, StudioSaga delivers modular interiors that combine
          durability with sophisticated aesthetics.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h2 className="text-5xl font-bold">
          Transform Your Home With Smart Interiors
        </h2>

        <p className="mt-6 text-white/70 max-w-2xl mx-auto">
          Experience functional elegance with beautifully designed modular
          interiors tailored for your lifestyle.
        </p>

        <Button className="mt-10 bg-[#BFA181] hover:bg-[#a88a69] text-white px-8 py-6 rounded-full text-lg">
          Start Your Project
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default ModularInteriors ;