import React from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const testimonials = [
  {
    id: 1,
    name: "Vikram Mehta",
    role: "Director",
    company: "DLF Homes",
    content: "The attention to detail and professional approach was outstanding. They truly understood our vision for the luxury segment and executed it flawlessly. We've seen a significant shift in brand perception since our collaboration.",
    avatarUrl: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Head",
    company: "Hyatt Regency",
    content: "An exceptional experience from start to finish. Their team delivered beyond our expectations, capturing the essence of our brand perfectly. It's rare to find a partner who understands hospitality so deeply.",
    avatarUrl: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    name: "Arjun Sharma",
    role: "CEO",
    company: "Whiteland Corp",
    content: "Working with them felt like having an extension of our own team. Their strategic thinking is what sets them apart in the real estate market. They don't just design; they build visual legacies.",
    avatarUrl: "https://i.pravatar.cc/150?u=3"
  },
  {
    id: 4,
    name: "Priya Singh",
    role: "Project Manager",
    company: "Pioneer Urban",
    content: "The most reliable partners we've worked with. They managed to balance high-end aesthetics with functional design requirements effortlessly. Their workflow is incredibly transparent.",
    avatarUrl: "https://i.pravatar.cc/150?u=4"
  },
  {
    id: 5,
    name: "Rajesh Khanna",
    role: "VP Operations",
    company: "Okaya",
    content: "Innovative, responsive, and highly professional. Their work helped us redefine our digital presence in a very competitive landscape. The ROI on this partnership has been evident since day one.",
    avatarUrl: "https://i.pravatar.cc/150?u=5"
  },
  {
    id: 6,
    name: "Ananya Patel",
    role: "Founder",
    company: "Ipsaa Daycare",
    content: "They brought a warmth and creativity to our project that we hadn't found elsewhere. The feedback from our clients has been incredible. They truly care about the impact of their work.",
    avatarUrl: "https://i.pravatar.cc/150?u=6"
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#F9F8F3] overflow-hidden">
      
      {/* --- Dynamic Luxury Background --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#C5A059]/20 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#C5A059]/10 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-[#C5A059]"></div>
              <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-xs">Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-[#333333] tracking-tight mb-6 leading-tight">
              What Our <span className="font-serif italic text-[#C5A059]">Clients Say</span>
            </h2>
            <p className="text-[#777777] text-lg font-light max-w-lg">
              Partnering with visionaries to create exceptional digital and physical experiences.
            </p>
          </motion.div>
          
          <div className="flex gap-4">
            <button className="prev-btn w-14 h-14 rounded-full border border-[#C5A059] text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-all duration-500 group">
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="next-btn w-14 h-14 rounded-full border border-[#C5A059] text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-all duration-500 group">
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoHeight={true} // Prevents data cutting by adjusting to content
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-20"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <motion.div 
                whileHover={{ y: -8 }}
                className="group relative bg-white border border-gray-100 p-8 md:p-10 rounded-[32px] h-full shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(197,160,89,0.12)] transition-all duration-500 overflow-hidden"
              >
                {/* Decorative Quote Mark */}
                <Quote className="absolute top-8 right-8 text-[#C5A059] opacity-5 group-hover:opacity-20 transition-opacity" size={80} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#C5A059] text-xs">★</span>
                      ))}
                    </div>
                    {/* Content - No line clamp to prevent cutting */}
                    <p className="text-[#555555] text-lg leading-[1.8] font-light italic">
                      "{item.content}"
                    </p>
                  </div>

                  <div className="mt-auto pt-8 border-t border-gray-50 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C5A059]/20 shadow-inner">
                      <img src={item.avatarUrl} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[#333333] font-bold text-base leading-tight">{item.name}</h4>
                      <p className="text-[#C5A059] text-xs font-bold uppercase tracking-wider mt-1">{item.company}</p>
                      <p className="text-[#AAAAAA] text-xs mt-0.5">{item.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>''
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet-active {
          background: #C5A059 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
        .swiper-slide {
          height: auto !important;
          display: flex;
        }
      `}} />
    </section>
  );
};

export default TestimonialSection;