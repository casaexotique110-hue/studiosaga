import React, { useRef } from 'react';

// 1. Import your local images from the assets folder
import projectImg1 from '../assets/insta/1.jpeg';
import projectImg2 from '../assets/insta/2.jpeg';
import projectImg3 from '../assets/insta/3.jpeg';
import projectImg4 from '../assets/insta/4.jpeg';
import projectImg5 from '../assets/insta/5.jpeg';
import projectImg6 from '../assets/insta/6.jpeg';
import projectImg7 from '../assets/insta/7.jpeg';
import projectImg8 from '../assets/insta/8.jpeg';
import projectImg9 from '../assets/insta/9.jpeg';
import projectImg10 from '../assets/insta/10.jpeg';
import projectImg11 from '../assets/insta/11.jpeg';
import projectImg12 from '../assets/insta/12.jpeg';
import projectImg13 from '../assets/insta/14.png';



import { Link } from "react-router-dom";
// Note: If you add a 6th project later, you can import projectImg6 here!

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

// 2. Updated data array utilizing the locally bundled assets\
const interiorProjects: InteriorProject[] = [
  {
    id: 'project1',
    title: 'Modern Contemporary',
    spaceType: '01 — Clean, Elegant & Current',
    imageUrl: projectImg1,
    projectUrl: '#',
    description: 'Bespoke luxury seating layout combined with warm metallic accents and custom ambient lighting.',
  },
  {
    id: 'project2',
    title: 'Minimalist',
    spaceType: '02 — Less is More',
    imageUrl: projectImg2,
    projectUrl: '#',
    description: 'Handle-less seamless cabinetry paired with premium marble countertops and sleek profiles.',
  },
  {
    id: 'project3',
    title: 'Scandinavian',
    spaceType: '03 — Serenity in Simplicity',
    imageUrl: projectImg3,
    projectUrl: '#',
    description: 'Sophisticated design patterns and acoustic paneling tailored to inspire modern corporate workflows.',
  },
  {
    id: 'project4',
    title: 'Luxury Victorian / Classical',
    spaceType: '04 — Royal, Elegant & Timeless',
    imageUrl: projectImg4,
    projectUrl: '#',
    description: 'Plush tufted bedback wall setup integrated beautifully with subtle wooden paneling textures.',
  },
  {
    id: 'project5',
    title: 'Modern Classic',
    spaceType: '05 — Simplicity Meets Timeless Elegance',
    imageUrl: projectImg5,
    projectUrl: '#',
    description: 'Intimate seating configurations highlighting architectural chandeliers and structural symmetry.',
  },
  {
    id: 'project6',
    title: 'Industrial',
    spaceType: '06 — Raw, Refined & Edgy',
    imageUrl: projectImg6,
    projectUrl: '#',
    description: 'Exposed brickwork, metallic elements, and open layouts crafted for an urban, edgy aesthetic.',
  },
  {
    id: 'project7',
    title: 'Bohemian (Boho)',
    spaceType: '07 — Free-Spirited & Artistic Expression',
    imageUrl: projectImg7,
    projectUrl: '#',
    description: 'Vibrant textures, layered textiles, and natural elements celebrating free-spirited design.',
  },
  {
    id: 'project8',
    title: 'Japandi',
    spaceType: '08 — Zen Minimalism & Clean Textures',
    imageUrl: projectImg8,
    projectUrl: '#',
    description: 'The perfect fusion of Japanese functionality and Scandinavian warmth with organic materials.',
  },
  {
    id: 'project9',
    title: 'Mediterranean',
    spaceType: '09 — Vacation Luxury & Organic Airiness',
    imageUrl: projectImg9,
    projectUrl: '#',
    description: 'Arched entryways, sun-drenched spaces, and earthy tones that bring the coastal vibe indoors.',
  },
  {
    id: 'project10',
    title: 'Art Deco',
    spaceType: '10 — Glamour, Bold Geometry & Sophistication',
    imageUrl: projectImg10,
    projectUrl: '#',
    description: 'Rich colors, bold geometric patterns, and lavish metallic details defining pure glamour.',
  },
  {
    id: 'project11',
    title: 'Rustic / Farmhouse',
    spaceType: '11 — Natural, Comfortable & Homely Warmth',
    imageUrl: projectImg11,
    projectUrl: '#',
    description: 'Weathered wood, cozy textiles, and vintage accents creating a warm and welcoming sanctuary.',
  },
  {
    id: 'project12',
    title: 'Luxury Hotel Style',
    spaceType: '12 — Premium Hospitality & Immersive Lounging',
    imageUrl: projectImg12,
    projectUrl: '#',
    description: 'Grand scale aesthetics, opulent fabrics, and bespoke details tailored for a five-star living experience.',
  },
  {
    id: 'project13',
    title: 'Indian Traditional / Ethnic',
    spaceType: '13 — Heritage, Rich Textures & Royal Culture',
    imageUrl: projectImg13,
    projectUrl: '#',
    description: 'Intricately carved premium wood furniture, traditional jali patterns, brass decor elements, and rich ethnic textiles creating a royal cultural ambiance.',
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
<Link
  to="/style-palette"
  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"
>
  <span className="text-white text-xs font-bold tracking-widest uppercase border border-white/50 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
    Style Palette
  </span>
</Link>

      </div>

      {/* Bottom Footer - Brief Technical Detail */}
      <div className="p-5 bg-white flex-grow flex flex-col justify-between">
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4 italic">
          "{description}"
        </p>

<Link 
  to="/style-palette" 
  className="inline-flex items-center text-xs font-bold tracking-wider text-gray-800 uppercase hover:text-[#C5A059] transition-colors duration-200"
>
  Explore Details <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
</Link>
      </div>
    </div>
  );
};

const StudiaSagaPortfolio: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const SCROLL_STEP = 350 + 16; // Card Width + Gap
  const AUTO_SCROLL_SPEED = 3500; 

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
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">Our Signature Style</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">Find Your Perfect Style</h2>
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