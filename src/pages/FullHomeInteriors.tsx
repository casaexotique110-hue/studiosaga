// FullHomeInteriors.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const FullHomeInteriors = () => {
  return (
    <div className="bg-white text-stone-800">
      <Header />

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-white/80 mb-3 tracking-[3px] uppercase text-sm">
            StudioSaga Interiors
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            The Complete Home Interiors Experience
          </h1>

          <p className="mt-6 text-lg text-white/80">
            From concept to completion, we craft homes that reflect your
            lifestyle, elegance, and personality.
          </p>

          <Button className="mt-8 bg-[#BFA181] hover:bg-[#a88a69] text-white px-8 py-6 rounded-full text-lg">
            Book a Design Consultation
          </Button>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#BFA181] uppercase tracking-[3px]">
            What We Offer
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Luxury Interior Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Home Design",
              desc: "Thoughtfully designed interiors tailored to your lifestyle and vision.",
            },
            {
              title: "Project Management",
              desc: "End-to-end execution with seamless coordination and timely delivery.",
            },
            {
              title: "Custom Solutions",
              desc: "Furniture, decor, lighting and styling curated exclusively for your home.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border border-stone-200 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

              <p className="text-stone-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-[#f8f5f1] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#BFA181] uppercase tracking-[3px]">
              Your Journey
            </p>

            <h2 className="text-4xl font-bold mt-4">
              From Vision To Reality
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Consultation",
              "Design Planning",
              "Execution",
              "Move-In",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-sm text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#BFA181] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                  {i + 1}
                </div>

                <h3 className="mt-6 text-2xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#f8f5f1] p-10 rounded-3xl">
            <h3 className="text-3xl font-bold mb-6">
              Your Interior Designer
            </h3>

            <p className="text-stone-600 leading-7">
              Our expert designers combine creativity with functionality to
              create timeless spaces tailored to your lifestyle.
            </p>
          </div>

          <div className="bg-[#f8f5f1] p-10 rounded-3xl">
            <h3 className="text-3xl font-bold mb-6">
              Your Project Manager
            </h3>

            <p className="text-stone-600 leading-7">
              Dedicated project experts ensure smooth execution, quality checks,
              and timely completion of your dream home.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-black text-white text-center px-6">
        <h2 className="text-4xl font-bold max-w-4xl mx-auto leading-tight">
          “StudioSaga transformed our dream into reality with elegance,
          precision and unmatched craftsmanship.”
        </h2>

        <p className="mt-8 text-white/70">
          — Happy Homeowners, Delhi NCR
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Experience Bespoke Living
        </h2>

        <p className="mt-6 text-stone-600 max-w-2xl mx-auto">
          Let us create interiors that reflect luxury, comfort and timeless
          sophistication.
        </p>

        <Button className="mt-10 bg-[#BFA181] hover:bg-[#a88a69] text-white px-8 py-6 rounded-full text-lg">
          Begin Your Journey
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default FullHomeInteriors ;