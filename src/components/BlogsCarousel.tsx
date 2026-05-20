import React, { useRef } from "react";

// ✅ Import images from your assets/blog folder
import blog11 from "../assets/blog/11.png";
import blog22 from "../assets/blog/22.png";
import blog33 from "../assets/blog/33.png";
import blog44 from "../assets/blog/44.png";

const BlogCarousel: React.FC = () => { // Component name changed to BlogCarousel for consistency
  const sliderRef = useRef<HTMLDivElement>(null);

  interface BlogPost {
    id: number;
    title: string;
    category: string;
    author: string;
    image: string;
  }

  // Updated blogs with imported images
  const blogs: BlogPost[] = [
    {
      id: 1,
      category: "Interior Design",
      author: "Admin",
      title:
        "Why Hiring the Best Interior Designers in Gurgaon Can Increase Your Property Value",
      image: blog11,
    },
    {
      id: 2,
      category: "Interior Design",
      author: "Admin",
      title:
        "Budget-Friendly Interior Design Tips from Gurgaon's Leading Interior Companies",
      image: blog22,
    },
    {
      id: 3,
      category: "Modern Decor",
      author: "Admin",
      title: "Top Modern Furniture Ideas for Minimal & Luxury Homes",
      image: blog33,
    },
    {
      id: 4,
      category: "Interior Inspiration",
      author: "Admin",
      title: "How to Choose Perfect Colors for Your Living Room",
      image: blog44,
    },
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      // Adjusted scroll amount for better UX
      const scrollAmount = sliderRef.current.clientWidth * 0.75; 
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      // Adjusted scroll amount for better UX
      const scrollAmount = sliderRef.current.clientWidth * 0.75; 
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#E9E7DE] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-light text-[#2c2c2c]">
            Chalk Edit
          </h2>

          <div className="flex gap-2 items-center text-[#2c2c2c]">
            <span className="text-xs opacity-80 hidden sm:inline">*Swipe or Drag to navigate</span> {/* Hide on tiny screens */}

            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="w-9 h-9 flex items-center justify-center border border-[#2c2c2c] rounded-full hover:bg-[#2c2c2c] hover:text-white transition duration-300 shadow-sm"
                aria-label="Scroll left"
              >
                ←
              </button>

              <button
                onClick={scrollRight}
                className="w-9 h-9 flex items-center justify-center border border-[#2c2c2c] rounded-full hover:bg-[#2c2c2c] hover:text-white transition duration-300 shadow-sm"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#c7c5b9] mb-10" />

        {/* Carousel */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-scroll scroll-smooth px-1" // scrollbar-hide removed
          style={{ 
            // For Firefox and IE/Edge
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none', 
          }}
        >
          {/* Custom style block to hide scrollbar for Webkit browsers (Chrome, Safari) */}
          <style>
            {`
              /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
              .flex.overflow-x-scroll::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="min-w-[320px] md:min-w-[480px] rounded-lg group cursor-pointer"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[260px] object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-3 text-xs text-[#4b4b4b] tracking-wide">
                {blog.category} | By {blog.author}
              </div>

              <h3 className="text-base md:text-lg font-light text-[#2c2c2c] mt-1 leading-snug group-hover:underline underline-offset-4 transition">
                {blog.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogCarousel;