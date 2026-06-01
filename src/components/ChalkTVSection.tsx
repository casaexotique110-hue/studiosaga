import React, { useRef } from 'react';

interface InteriorProject {
  id: string;
  title: string;
  spaceType: string;
  imageUrl: string; 
  projectUrl: string; 
  description: string; 
}

interface ArrowProps {
  direction: 'left' | 'right';
}

interface ProjectCardProps extends InteriorProject {}

const interiorProjects: InteriorProject[] = [
  {
    id: 'project1',
    title: 'The Grand Living Lounge',
    spaceType: 'Residential | Living Room',
    imageUrl: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
    projectUrl: '#',
    description: 'Bespoke luxury seating layout combined with warm metallic accents and custom ambient lighting.',
  },
  {
    id: 'project2',
    title: 'Minimalist Culinary Space',
    spaceType: 'Residential | Kitchen',
    imageUrl: "https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg",
    projectUrl: '#',
    description: 'Handle-less seamless cabinetry paired with premium marble countertops and sleek profiles.',
  },
  {
    id: 'project3',
    title: 'The Executive Boardroom',
    spaceType: 'Commercial | Office Workspace',
    imageUrl: "https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg",
    projectUrl: '#',
    description: 'Sophisticated design patterns and acoustic paneling tailored to inspire modern corporate workflows.',
  },
  {
    id: 'project4',
    title: 'Modern Master Bedroom Oasis',
    spaceType: 'Residential | Bedroom',
    imageUrl: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg",
    projectUrl: '#',
    description: 'Plush tufted bedback wall setup integrated beautifully with subtle wooden paneling textures.',
  },
  {
    id: 'project5',
    title: 'Artisanal Fine Dining Setup',
    spaceType: 'Commercial | Hospitality',
    imageUrl: "https://images.pexels.com/photos/2067638/pexels-photo-2067638.jpeg",
    projectUrl: '#',
    description: 'Intimate seating configurations highlighting architectural chandeliers and structural symmetry.',
  },
];

const Arrow: React.FC<ArrowProps> = ({ direction }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-700"
    style={{ transform: direction === 'left' ? 'scaleX(-1)' : 'none' }}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  spaceType, 
  imageUrl, 
  projectUrl, 
  description 
}) => {
  return (
    <div className="project-card w-[350px] flex-shrink-0 snap-center bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Header - Project Information */}
      <div className="p-4 border-b border-gray-50 bg-white">
        <h3 className="font-semibold text-base text-gray-800 tracking-tight truncate">
          {title}
        </h3>
        <p className="text-xs text-[#C5A059] font-semibold tracking-wide uppercase mt-0.5">{spaceType}</p>
      </div>

      {/* Center Showcase - Image with Luxury Overlay */}
      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => { e.currentTarget.src = "https://placehold.co/350x466/EAEAEA/888888?text=Design+Preview"; }}
        />

        {/* Dynamic Hover Effect for Luxury Aesthetic */}
        <a 
          href={projectUrl}
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"
        >
          <span className="text-white text-xs font-bold tracking-widest uppercase border border-white/50 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            View Project
          </span>
        </a>
      </div>

      {/* Bottom Footer - Brief Technical Detail */}
      <div className="p-5 bg-white flex-grow flex flex-col justify-between">
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4 italic">
          "{description}"
        </p>

        <a 
          href={projectUrl} 
          className="inline-flex items-center text-xs font-bold tracking-wider text-gray-800 uppercase hover:text-[#C5A059] transition-colors duration-200"
        >
          Explore Details <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
};

const StudiaSagaPortfolio: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const SCROLL_STEP = 350 + 16; // Card Width + Gap
  const AUTO_SCROLL_SPEED = 3500; // Adjusted for a smoother scrolling experience

  const handleScroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const scrollAmount = direction === 'left' ? -SCROLL_STEP : SCROLL_STEP;

    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const startAutoScroll = () => {
    if (!carouselRef.current) return;

    autoScrollRef.current = setInterval(() => {
      if (!carouselRef.current) return;

      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      if (carouselRef.current.scrollLeft >= maxScroll - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
      }
    }, AUTO_SCROLL_SPEED);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  React.useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <section className="py-20 px-6 bg-[#FDFDFB] font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Section Header Layout */}
        <div className="flex flex-col sm:flex-row justify-between items-end mb-10 border-b border-gray-100 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">Our Signature Spaces</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">Studia Saga</h2>
          </div>

          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <span className="text-xs text-gray-400 hidden sm:block font-medium tracking-wide">
              *Swipe, Drag or let it Auto-Scroll
            </span>

            {/* Premium Navigation Arrows */}
            <div className="flex space-x-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 border border-gray-200 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition duration-200 shadow-sm focus:outline-none"
              >
                <Arrow direction="left" />
              </button>

              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 border border-gray-200 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition duration-200 shadow-sm focus:outline-none"
              >
                <Arrow direction="right" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Gallery Container */}
        <div
          ref={carouselRef}
          className="content-carousel flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-6 cursor-grab -mx-2"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          style={{ scrollbarWidth: "none" }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .content-carousel::-webkit-scrollbar {
              display: none;
            }
          `}} />

          {interiorProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}; 

export default StudiaSagaPortfolio;