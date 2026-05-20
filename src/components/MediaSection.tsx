import React, { useRef } from "react";

// --- 1. Type Definitions ---
interface MediaItem {
  category: string;
  title: string;
  imageUrl: string;
  link: string;
  logoText: string;
}

interface ContentCardProps extends MediaItem {}

interface ArrowProps {
  direction: "left" | "right";
}

// --- 2. Data (LOCAL IMAGES) ---
const mediaItems: MediaItem[] = [
  {
    category: "Staff Writer | Homes",
    title:
      "Elegance and Playfulness: Exploring the Magnolias Apartment by Chalk Studio in DLF Golf Links",
    imageUrl: "/images/villa.webp",
    link: "#",
    logoText: "HOMES MAGAZINE",
  },
  {
    category: "Sakshi Rai | Elle Decor",
    title:
      "Chalk Studio styles The Ultima abode with a bespoke interplay of textures and surfaces",
    imageUrl: "/images/villa-2.webp",
    link: "#",
    logoText: "ELLE DECOR",
  },
  {
    category: "Team A+D | Architecture+Design",
    title:
      "Chalk Studio unveils White Ash Studio, exploring intricate aspects of modern monotone design",
    imageUrl: "/images/villa.webp",
    link: "#",
    logoText: "ARCHITECTURE+DESIGN",
  },
  {
    category: "Staff Writer | Home Decor",
    title: "A minimalist approach to a modern penthouse",
    imageUrl: "/images/villa-2.webp",
    link: "#",
    logoText: "URBAN VIEW",
  },
  {
    category: "General Digest",
    title: "Urban charm comes alive in this villa",
    imageUrl: "/images/villa.webp",
    link: "#",
    logoText: "GENERAL DIGEST",
  },
  {
    category: "Staff Writer | Office Snapshots",
    title: "Galaxy Group Offices - Gurugram",
    imageUrl: "/images/villa-2.webp",
    link: "#",
    logoText: "OFFICE SNAPSHOTS",
  },
];

// --- 3. Arrow Component ---
const Arrow: React.FC<ArrowProps> = ({ direction }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 16 16"
    className="text-gray-700"
    style={{ transform: direction === "left" ? "scaleX(-1)" : "none" }}
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 0 0 .708L10.293 8l-5.647 5.646a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708l-6-6a.5.5 0 0 0-.708 0z"
    />
  </svg>
);

// --- 4. Content Card ---
const ContentCard: React.FC<ContentCardProps> = ({
  category,
  title,
  imageUrl,
  link,
  logoText,
}) => (
  <a
    href={link}
    className="card-container w-[300px] flex-shrink-0 snap-center px-2 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="relative  h-[350px] overflow-hidden bg-gray-100 mb-4 rounded-lg shadow-xl">
      {/* IMAGE */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 z-10"
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/600x800/6B7280/FFFFFF?text=Image+Missing";
        }}
      />

      {/* OVERLAY TEXT */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center transition duration-300 group-hover:bg-black/50 z-20">
        <p className="text-white text-3xl md:text-5xl font-serif font-light text-center px-4 tracking-widest uppercase opacity-90 leading-none">
          {logoText}
        </p>
      </div>
    </div>

    <p className="text-sm uppercase text-gray-500 mb-1 tracking-wider">
      {category}
    </p>
<h3 className="text-sm font-normal text-gray-900 group-hover:text-gray-700 tracking-wide leading-relaxed transition-all">
  {title}
</h3>






  </a>
);

// --- 5. Main App ---
const App: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const SCROLL_STEP = 320;

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -SCROLL_STEP : SCROLL_STEP,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="p-6 bg-[#F6F5F1] md:p-12 bg-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Header */}
      <div className="flex justify-between items-end mb-6 border-b pb-4">
        <h2 className="text-3xl text-gray-900">Press & Media</h2>

        <div className="flex items-center space-x-6">
          <span className="text-sm text-gray-500 hidden sm:block">
            *Swipe or Drag to navigate
          </span>

          <div className="flex space-x-2">
            <button
              className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition shadow-sm"
              onClick={() => handleScroll("left")}
            >
              <Arrow direction="left" />
            </button>
            <button
              className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition shadow-sm"
              onClick={() => handleScroll("right")}
            >
              <Arrow direction="right" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4 cursor-grab -mx-2"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        onMouseDown={(e) => {
          e.currentTarget.style.cursor = "grabbing";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.cursor = "grab";
        }}
      >
        {mediaItems.map((item, i) => (
          <ContentCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default App;
