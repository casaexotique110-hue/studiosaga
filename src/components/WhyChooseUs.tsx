import React from "react";
import { motion } from "framer-motion";
import {
  User,
  ClipboardCheck,
  Hammer,
  Wrench,
  Home,
} from "lucide-react";

const steps = [
  {
    title: "Meet Our Design Expert",
    subtitle: "Initial Consultation",
    icon: <User className="w-7 h-7" />,
  },
  {
    title: "Project Booking",
    subtitle: "5% Advance Payment",
    icon: <ClipboardCheck className="w-7 h-7" />,
  },
  {
    title: "Execution Starts",
    subtitle: "60% Stage Payment",
    icon: <Hammer className="w-7 h-7" />,
  },
  {
    title: "Installation & Handover",
    subtitle: "Final Payment",
    icon: <Wrench className="w-7 h-7" />,
  },
  {
    title: "Enjoy Your New Space",
    subtitle: "Move In Comfortably",
    icon: <Home className="w-7 h-7" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f7f5f2] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.3em] text-sm text-[#BFA181] font-semibold">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#2b2430]">
            Your Interior Journey
          </h2>

          <p className="mt-5 text-stone-500 max-w-2xl mx-auto">
            We transform your ideas into elegant living spaces with a seamless
            and transparent interior design process.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden lg:block absolute top-14 left-0 w-full border-t border-dashed border-stone-300"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="flex flex-col items-center text-center group"
              >

                {/* Circle */}
                <div className="relative w-28 h-28 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center group-hover:scale-110 transition-all duration-500">

                  {/* Inner Glow */}
                  <div className="absolute inset-2 rounded-full bg-[#f5f1ea]"></div>

                  {/* Icon */}
                  <div className="relative z-10 text-[#BFA181]">
                    {step.icon}
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#BFA181] text-white text-sm font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className="mt-6">
                  {step.subtitle && (
                    <p className="text-[#BFA181] text-sm font-semibold mb-1 uppercase tracking-wide">
                      {step.subtitle}
                    </p>
                  )}

                  <h3 className="text-lg font-semibold text-[#2b2430] leading-snug">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/Contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#e86b6b] text-white font-semibold tracking-wide hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;