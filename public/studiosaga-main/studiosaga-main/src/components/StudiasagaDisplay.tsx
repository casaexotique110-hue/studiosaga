import React, { FC } from 'react';
import { Mail, Linkedin, Instagram, Facebook, MapPin, LucideIcon } from 'lucide-react';

// Define the type for the custom style object
interface CustomStyle {
  '--bg-color': string;
  '--text-color': string;
  '--title-font-family': string;
}

// Define the type for the social icon objects
interface SocialIcon {
  Icon: LucideIcon;
  name: string;
  href: string;
}

// Custom CSS for large, condensed text style
const customStyle: CustomStyle = {
  // Very light beige background
  '--bg-color': '#fcfaf5',
  // Extremely subtle light beige text color
  '--text-color': '#e8e4dc',
  // Custom tracking for a very wide, elegant look if needed, but we'll use a standard font family
  '--title-font-family': 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
};

// Renamed the component to StudiaSagaDisplay for easier integration into other files
const StudiaSagaDisplay: FC = () => { 
  // Array of social icons and placeholder links with explicit SocialIcon array type
  const socialIcons: SocialIcon[] = [
    { Icon: Mail, name: 'Email', href: 'mailto:info@anamcarainteriors.com' },
    { Icon: Linkedin, name: 'LinkedIn', href: '#' },
    { Icon: Instagram, name: 'Instagram', href: '#' },
    { Icon: Facebook, name: 'Facebook', href: '#' },
    { Icon: MapPin, name: 'Location', href: '#' },
  ];

  return (
    // Note: I've removed min-h-screen here so it doesn't force full height when used as a sub-component.
    // If you need it to be full height, you can add it back, but usually homepage components are contained.
    <div 
      className="flex flex-col p-4 md:p-8 relative w-full h-[40vh] md:h-[50vh]"
      style={{ backgroundColor: customStyle['--bg-color'] }}
    >
      {/* The main content area is flex-grow to push the social icons 
        to the very bottom while keeping the text centered.
      */}
      <div className="flex-grow flex items-center justify-center">
        {/* Main Title: 
          - text-[16vw]: Use viewport width for massive font size (scales well on mobile/desktop)
          - font-serif: For an elegant, classic look
          - tracking-tight: Adjust to prevent the huge letters from separating too much
          - text-center: Ensure text is centered
        */}
        <h1 
          className="font-serif leading-none tracking-tightest select-none text-center"
          style={{ 
            color: customStyle['--text-color'],
            fontSize: '16vw', // Use 16% of viewport width for the size
            fontFamily: customStyle['--title-font-family'],
          }}
        >
          Anam Cara
        </h1>
      </div>

      {/* Social Icons positioned at the bottom right, responsive padding */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
        <div className="flex space-x-2 md:space-x-3">
          {socialIcons.map((item: SocialIcon) => (
            <a
              key={item.name}
              href={item.href}
              aria-label={item.name}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#e8e4dc] rounded-full transition duration-300 hover:bg-[#e8e4dc] hover:text-white"
              style={{ color: customStyle['--text-color'] }}
            >
              {/* Call the Icon component */}
              <item.Icon className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudiaSagaDisplay ; // Export the renamed component