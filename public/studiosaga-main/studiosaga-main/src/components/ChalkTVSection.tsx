import React, { useRef } from 'react';

interface InstagramPost {
  id: string;
  username: string;
  profileLink: string;
  imageUrl: string; 
  postUrl: string; 
  caption: string; 
  followers: string;
}

interface ArrowProps {
  direction: 'left' | 'right';
}

interface InstagramPostCardProps extends InstagramPost {}

const instagramPosts: InstagramPost[] = [
  {
    id: 'post1',
    username: 'AnamCara',
    profileLink: 'https://www.instagram.com/chalkstudio.design/',
    imageUrl: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
    postUrl: 'https://www.instagram.com/p/Cva_r4vRldA/',
    caption: 'Social Reels | Magic in The Hamptons (feat. Lil Yachty)',
    followers: 'Social Reels',
  },
  {
    id: 'post2',
    username: 'AnamCara',
    profileLink: 'https://www.instagram.com/chalkstudio.design/',
    imageUrl: "https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg",
    postUrl: 'https://www.instagram.com/p/CtX3Y0OASpC/',
    caption: '34.5k followers',
    followers: '34.5k followers',
  },
  {
    id: 'post3',
    username: 'AnamCara',
    profileLink: 'https://www.instagram.com/chalkstudio.design/',
    imageUrl: "https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg",
    postUrl: 'https://www.instagram.com/p/CvX-23bJvWs/',
    caption: 'nc_123_julb | You Know How We Do It',
    followers: 'nc_123_julb',
  },
  {
    id: 'post4',
    username: 'AnamCara',
    profileLink: 'https://www.instagram.com/chalkstudio.design/',
    imageUrl: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg",
    postUrl: 'https://www.instagram.com/p/CwY-01cKxYx/',
    caption: 'New collection drops!',
    followers: 'Exclusive',
  },
  {
    id: 'post5',
    username: 'AnamCara',
    profileLink: 'https://www.instagram.com/chalkstudio.design/',
    imageUrl: "https://images.pexels.com/photos/2067638/pexels-photo-2067638.jpeg",
    postUrl: 'https://www.instagram.com/p/CvZ-01cKxYx/',
    caption: 'Featured project highlight.',
    followers: 'Highlight',
  },
];

const Arrow: React.FC<ArrowProps> = ({ direction }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 16 16"
    className="text-gray-700"
    style={{ transform: direction === 'left' ? 'scaleX(-1)' : 'none' }}
  >
    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 0 0 .708L10.293 8l-5.647 5.646a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708l-6-6a.5.5 0 0 0-.708 0z"/>
  </svg>
);

const InstagramPostCard: React.FC<InstagramPostCardProps> = ({ 
  username, 
  profileLink, 
  imageUrl, 
  postUrl, 
  caption, 
  followers 
}) => {

  const renderIcon = (path: string, viewBox: string = "0 0 16 16") => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-500 hover:text-gray-700 transition" viewBox={viewBox}>
      <path d={path}/>
    </svg>
  );

  return (
    <div className="instagram-card w-[350px] flex-shrink-0 snap-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-xs text-gray-600 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </div>

          <div>
            <a href={profileLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm text-gray-800 hover:text-blue-600">
              {username}
            </a>
            <p className="text-xs text-gray-500">{followers}</p>
          </div>
        </div>

        <a href={profileLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 border border-blue-500 rounded-full px-3 py-1 text-sm hover:bg-blue-50 transition duration-150">
          View profile
        </a>
      </div>

      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        <img
          src={imageUrl}
          alt={caption}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = "https://placehold.co/350x466/EAEAEA/888888?text=Image+Unavailable"; }}
        />

        <a 
          href={postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
          </svg>
          <span className="text-white text-lg font-semibold mt-2">Watch on Instagram</span>
        </a>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex space-x-3">
            <button className="focus:outline-none">{renderIcon("M8 1.314C12.438-3.248 23.534 4.736 8 15-7.534 4.736 3.562-3.248 8 1.314")}</button>
            <button className="focus:outline-none">{renderIcon("M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.075L.909 13.525A1 1 0 0 1 0 12.729V2a1 1 0 0 1 1-1z")}</button>
          </div>

          <button className="focus:outline-none">{renderIcon("M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5z")}</button>
        </div>
        
        <p className="text-sm text-gray-700 mb-2 truncate">
          <span className="font-medium text-gray-900">{username}: </span>
          {caption}
        </p>

        <a href={postUrl} target="_blank" rel="noopener noreferrer" className="block text-center text-blue-500 hover:text-blue-600 text-sm font-medium transition duration-150">
          View Original Post
        </a>
      </div>
    </div>
  );
};

const ChalkTVSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const SCROLL_STEP = 350 + 16;
  const AUTO_SCROLL_SPEED = 3000;

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
    <section className="py-16 px-4 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row justify-between items-end mb-8 border-b pb-4">
          <h2 className="text-5xl text-gray-900">Anam Cara</h2>

          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-500 hidden sm:block font-medium">
              *Swipe, Drag or let it Auto-Scroll
            </span>

            {/* BUTTONS → HIDDEN ON MOBILE */}
            <div className="flex space-x-2 hidden md:flex">
              <button
                onClick={() => handleScroll('left')}
                className="p-1 border border-gray-300 rounded-full hover:bg-white transition duration-200 shadow-md focus:ring-2 focus:ring-blue-300"
              >
                <Arrow direction="left" />
              </button>

              <button
                onClick={() => handleScroll('right')}
                className="p-1 border border-gray-300 rounded-full hover:bg-white transition duration-200 shadow-md focus:ring-1 focus:ring-blue-300"
              >
                <Arrow direction="right" />
              </button>
            </div>

          </div>
        </div>

        <div
          ref={carouselRef}
          className="content-carousel flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4 cursor-grab -mx-2"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          style={{ scrollbarWidth: "none" }}
        >
          <style>{`
            .content-carousel::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {instagramPosts.map((post) => (
            <InstagramPostCard key={post.id} {...post} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChalkTVSection;
