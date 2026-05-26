import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Desktop Images
import hero1 from "@/assets/200.jpeg";
import hero3 from "@/assets/hero-3.jpg";

// Mobile Images
import mobileHero1 from "@/assets/mobile/55.jpg";
import mobileHero2 from "@/assets/mobile/555.jpg";

const slides = [
  {
    desktopImage: hero1,
    mobileImage: mobileHero1,
    title: "STUDIA SAGA HOME",
  },
  {
    desktopImage: hero3,
    mobileImage: mobileHero2,
    title: "MINIMALIST RETREAT",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [step, setStep] = useState(1);

const [whatsappUpdates, setWhatsappUpdates] =
  useState(true);





  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="relative h-screen md:h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* MOBILE IMAGE */}
            <img
              src={slide.mobileImage}
              alt={slide.title}
              className="block md:hidden w-full h-full object-cover"
            />

            {/* DESKTOP IMAGE */}
            <img
              src={slide.desktopImage}
              alt={slide.title}
              className="hidden md:block w-full h-full object-cover"
            />

            {/* CENTER TEXT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center px-4">
              <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-extralight tracking-[0.2em] uppercase leading-tight">
                {slide.title}
              </h1>
            </div>
          </div>
        ))}

        {/* ================= DESKTOP FORM ================= */}
{/* ================= DESKTOP FORM ================= */}
<div className="hidden md:block absolute right-24 top-1/2 -translate-y-1/2 z-40">
  <div className="w-[340px] bg-white rounded-[28px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">

    {/* STEP STATE */}
    {step === 1 ? (
      <>
        {/* TOP */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-[30px] leading-[36px] font-semibold text-stone-900">
              Designs for <br /> Every Budget
            </h2>

            <p className="text-sm text-stone-500 mt-2">
              Share your details to get started
            </p>
          </div>

          <div className="w-10 h-10 rounded-full border-2 border-[#BFA181] flex items-center justify-center text-xs font-semibold text-[#BFA181]">
            1/2
          </div>
        </div>

        {/* FORM */}
        <div className="mt-6 space-y-4">

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full h-11 rounded-xl border border-stone-200 px-4 outline-none focus:border-[#BFA181] text-sm"
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="+91 9876543210"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-11 rounded-xl border border-stone-200 px-4 outline-none focus:border-[#BFA181] text-sm"
          />

          {/* WHATSAPP */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={whatsappUpdates}
              onChange={() =>
                setWhatsappUpdates(!whatsappUpdates)
              }
              className="w-4 h-4 accent-[#BFA181]"
            />

            <span className="text-sm text-stone-600">
              Send me updates on WhatsApp
            </span>
          </label>

          {/* NEXT BUTTON */}
          <button
            onClick={() => setStep(2)}
            className="w-full h-11 rounded-xl bg-[#BFA181] text-white font-medium hover:bg-[#a88a69] transition-all"
          >
            Next
          </button>

          {/* TERMS */}
          <p className="text-[11px] text-stone-400 leading-5 text-center">
            By submitting this form, you agree to the privacy
            policy & terms and conditions
          </p>
        </div>
      </>
    ) : (
      <>
        {/* STEP 2 */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-[30px] leading-[36px] font-semibold text-stone-900">
              Let's Get Started with Your Dream Interior
            </h2>

            <p className="text-sm text-stone-500 mt-2">
              Share your email
            </p>
          </div>

          <div className="w-10 h-10 rounded-full border-2 border-[#BFA181] flex items-center justify-center text-xs font-semibold text-[#BFA181]">
            2/2
          </div>
        </div>

        {/* EMAIL FORM */}
        <form
          action="https://formspree.io/f/xyzrpyza"
          method="POST"
          className="mt-6 space-y-5"
        >
          {/* HIDDEN FIELDS */}
          <input
            type="hidden"
            name="name"
            value={formData.name}
          />

          <input
            type="hidden"
            name="phone"
            value={formData.phone}
          />

          <input
            type="hidden"
            name="whatsappUpdates"
            value={whatsappUpdates ? "Yes" : "No"}
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full h-11 rounded-xl border border-stone-200 px-4 outline-none focus:border-[#BFA181] text-sm"
          />

          {/* BUTTONS */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-1/3 h-11 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-100 transition-all"
            >
              Back
            </button>

            <button
              type="submit"
              className="w-2/3 h-11 rounded-xl bg-[#BFA181] text-white font-medium hover:bg-[#a88a69] transition-all"
            >
              Submit
            </button>
          </div>

          {/* TERMS */}
          <p className="text-[11px] text-stone-400 leading-5 text-center">
            By submitting this form, you agree to the privacy
            policy & terms and conditions
          </p>
        </form>
      </>
    )}
  </div>
</div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= MOBILE FORM ================= */}
      <div className="block md:hidden bg-white px-5 py-10">
        <div className="rounded-3xl border border-stone-200 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-stone-900 text-center">
            Book Consultation
          </h2>

          <p className="text-sm text-stone-500 mt-2 text-center">
            Get free interior design consultation from StudioSaga.
          </p>

          <form
            action="https://formspree.io/f/xyzrpyza"
            method="POST"
            className="mt-6 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full h-12 rounded-xl border border-stone-300 px-4 outline-none focus:border-[#BFA181]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full h-12 rounded-xl border border-stone-300 px-4 outline-none focus:border-[#BFA181]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full h-12 rounded-xl border border-stone-300 px-4 outline-none focus:border-[#BFA181]"
            />

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-[#BFA181] text-white font-medium hover:bg-[#a88a69] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;