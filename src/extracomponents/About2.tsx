import React from "react";

const About2: React.FC = () => {
  return (
    <section className="w-full bg-[#E9E7DE] py-24 px-6 text-center">
      
      {/* Main Heading */}
      <h2 className="text-2xl md:text-3xl font-light tracking-wide text-[#2c2c2c] max-w-4xl mx-auto leading-relaxed">
        TRUST US TO REIMAGINE YOUR INTERIORS—BRINGING YOUR 
        ASPIRATIONS TO LIFE WITH BEAUTY, PURPOSE, AND SOUL.
      </h2>

      {/* Sub paragraph */}
      <p className="mt-6 text-[#4a4a4a] text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
        At Chalk Studio, we design spaces that feel like you—thoughtful, personal,
        and timeless. Blending storytelling with strategy, our interiors are crafted 
        to reflect who you are and how you live. With a sharp eye for detail and a 
        love for good design, we turn houses into homes and spaces into experiences. 
        We don’t decorate—we listen, research, and build with intention.
      </p>

      {/* Divider */}
      <div className="w-full max-w-xl mx-auto my-12 border-t border-[#bcbcbc]" />

      {/* Brand Presence */}
      <h3 className="text-base font-normal underline text-[#2c2c2c] mb-12">
        Brand Presence
      </h3>

      {/* Stats Row 1 */}
      <div className="grid grid-cols-3 max-w-3xl mx-auto mb-20 gap-6">
        <div>
          <div className="text-3xl font-light text-[#2c2c2c]">120+</div>
          <p className="text-sm text-[#4a4a4a] mt-2">Projects Completed</p>
        </div>

        <div>
          <div className="text-3xl font-light text-[#2c2c2c]">40+</div>
          <p className="text-sm text-[#4a4a4a] mt-2">Members</p>
        </div>

        <div>
          <div className="text-3xl font-light text-[#2c2c2c]">100+</div>
          <p className="text-sm text-[#4a4a4a] mt-2">Features</p>
        </div>
      </div>

      {/* What's Up */}
      <h3 className="text-base font-normal underline text-[#2c2c2c] mb-12">
        What’s Up
      </h3>

      {/* Stats Row 2 */}
      <div className="grid grid-cols-3 max-w-3xl mx-auto gap-6">
        <div>
          <div className="text-3xl font-light text-[#2c2c2c]">1</div>
          <p className="text-sm text-[#4a4a4a] mt-2">CCO - Chief Cuddly Officer</p>
        </div>

        <div>
          <div className="text-3xl font-light text-[#2c2c2c]">409+</div>
          <p className="text-sm text-[#4a4a4a] mt-2">Cups of Coffee Consumed Per Month</p>
        </div>

        <div>
          <div className="text-3xl font-light text-[#2c2c2c]">100+</div>
          <p className="text-sm text-[#4a4a4a] mt-2">Hrs Spent on Renderings Per Month</p>
        </div>
      </div>
    </section>
  );
};

export default About2;
