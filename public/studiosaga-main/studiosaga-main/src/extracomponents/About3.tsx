import React from "react";
import leftChair from "../assets/image11.webp";
import rightChair from "../assets/image22.webp";

const About3: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 md:gap-10">

        {/* Left Image */}
        <img
          src={leftChair}
          alt="Left Chair"
          className="w-28 sm:w-36 md:w-48 lg:w-64 animate-wobble"
        />

        {/* Center Text */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-widest text-[#2c2c2c] text-center flex-1">
          INSPIRED BY ARTISTRY, OBJECTS
        </h2>

        {/* Right Image */}
        <img
          src={rightChair}
          alt="Right Chair"
          className="w-28 sm:w-36 md:w-48 lg:w-64 animate-wobble"
        />

      </div>

      {/* Floating / Wobble Animation */}
      <style>
        {`
          @keyframes wobble {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(1deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }

          .animate-wobble {
            animation: wobble 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default About3;
