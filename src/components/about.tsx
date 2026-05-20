import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-interior.jpg"; // Ensure this path is correct

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Custom gold color to match the screenshot
  const goldColor = "text-[#a38656]";
  const goldBg = "bg-[#a38656]";
  const goldBorder = "border-[#a38656]";

  return (
    <section id="about" className="py-24 md:py-32 bg-[#fffbf7]">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          {/* ----------------- Content Side ----------------- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow Text */}
            <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-4 ${goldColor}`}>
              About Anam Cara Interiors
            </p>

            {/* Main Heading */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-stone-900 leading-[1.1] mb-8">
              Designing Homes with Soul, <br />
              <span className={goldColor}>Structure & Simplicity</span>
            </h2>

            {/* Quote Box */}
            <div className="relative pl-6 py-4 pr-6 mb-8 bg-[#f5f0e6] rounded-r-lg border-l-4 border-[#a38656]">
              <p className="text-lg md:text-xl text-stone-700 italic font-serif leading-relaxed">
                "We believe great design is not about excess—it's about intent. Every space we create balances aesthetics, functionality, and long-term usability."
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-stone-600 leading-relaxed mb-8 text-base md:text-lg font-light">
              Anam Cara Interiors is a residential interior design and turnkey execution studio dedicated to creating affordable luxury homes with soul, simplicity, and structure. We design interiors that are functional first, calm in aesthetic, honest in materials, and disciplined in execution.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-10">
              {[
                "Affordable luxury design approach",
                "Complete turnkey interior execution",
                "Modular + customized furniture",
                "Fixed timelines & transparent pricing",
                "Dedicated project coordination",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 ${goldColor} mt-1 flex-shrink-0`} />
                  <span className="text-stone-700 font-medium text-sm md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className={`${goldBg} text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all shadow-md text-sm tracking-wide`}
            >
              Get a Free Consultation
            </button>
          </motion.div>

          {/* ----------------- Image Side ----------------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-full"
          >
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl h-[600px] w-full">
              <img
                src={aboutImage}
                alt="Modern Living Room Interior"
                className="w-full h-full object-cover"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Floating White Card at Bottom */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                <h3 className={`font-serif text-xl md:text-2xl mb-2 ${goldColor}`}>
                  Affordable Luxury
                </h3>
                <p className="text-sm text-stone-500 font-light">
                  Thoughtfully designed interiors for real living.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;