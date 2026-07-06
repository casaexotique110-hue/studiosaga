import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";

// Lucide icons list mein custom Pinterest, Medium aur Blogspot discrete variants ke liye standard paths use karenge
const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 22c.66 0 1.25-.56 1.44-1.19l1.41-5.41c.25.47.97.88 1.75.88 3.44 0 5.41-3.12 5.41-6.75 0-3.34-2.84-6.03-6.66-6.03-4.63 0-7.34 3.19-7.34 6.81 0 1.56.66 2.97 1.84 3.5.25.12.38.03.44-.19l.16-.62c.06-.22.03-.31-.13-.5-.69-.81-1.12-1.88-1.12-3.41 0-4.38 3.31-7.81 8.16-7.81 4.44 0 7.16 2.78 7.16 6.5 0 4.75-2.38 8.06-5.5 8.06-1.03 0-1.81-.84-1.56-1.88l1.09-4.59c.31-1.31-.63-2.41-1.94-2.41-1.56 0-2.81 1.63-2.81 3.81 0 1.31.44 2.19.44 2.19s-1.5 6.38-1.78 7.56c-.34 1.5-.06 3.31-.03 3.53.03.19.25.25.38.12.19-.19 1.47-1.81 1.94-3.5" />
  </svg>
);

const MediumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 12c0 4.418-2.686 8-6 8s-6-3.582-6-8 2.686-8 6-8 6 3.582 6 8ZM19.5 12c0 4.142-1.12 7.5-2.5 7.5s-2.5-3.358-2.5-7.5 1.12-7.5 2.5-7.5 2.5 3.358 2.5 7.5ZM24 12c0 3.59-0.336 6.5-0.75 6.5s-0.75-2.91-0.75-6.5 0.336-6.5 0.75-6.5 0.75 2.91 0.75 6.5" />
  </svg>
);

const BlogspotIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16.5 2h-9A5.5 5.5 0 0 0 2 7.5v9A5.5 5.5 0 0 0 7.5 22h9a5.5 5.5 0 0 0 5.5-5.5v-9A5.5 5.5 0 0 0 16.5 2ZM9 9h2.5A1.5 1.5 0 0 1 13 10.5v0A1.5 1.5 0 0 1 11.5 12H9ZM15 15h-6v-1.5h6a1.5 1.5 0 0 1 1.5 1.5v0A1.5 1.5 0 0 1 15 15Z" />
  </svg>
);

// Import the logo
import logo from "../assets/footer/logo.png";

const Footer = () => {
  return (
    <footer className="bg-luxury-beige py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Logo Section */}
          <div>
            <div className="mb-6">
              <Link to="/">
                <img
                  src={logo}
                  alt="Studia Saga Interiors Logo"
                  className="h-34 w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-sm font-light text-muted-foreground leading-7">
              Creating timeless and elegant interiors with modern luxury
              aesthetics tailored to your lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-light uppercase tracking-wider mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/our-saga"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/style-palette"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  Style Palette
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-light uppercase tracking-wider mb-6">
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-sm font-light text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:+919667733382">
                  +91 96677 33382
                </a>
              </li>

              <li className="flex items-center gap-2 text-sm font-light text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:studiasagaa@gmail.com">
                  studiasagaa@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2 text-sm font-light text-muted-foreground leading-6">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  110, Basement, near Hero Honda Chowk, Pace City I,
                  Sector 37, Gurugram, Haryana 122001
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-light uppercase tracking-wider mb-6">
              Follow Us
            </h4>

            {/* Added grid layout with flexible gaps so 7 icons align gracefully without overflow issues */}
            <div className="flex flex-wrap gap-3 max-w-[280px]">
              <a
                href="https://www.instagram.com/studia_saga_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/company/studia-saga/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61583960570412"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* PINTEREST */}
              <a
                href="https://in.pinterest.com/studiasagaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <PinterestIcon className="w-4 h-4" />
              </a>

              {/* YOUTUBE */}
              <a
                href="https://www.youtube.com/@StudiaSaga"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>

              {/* MEDIUM */}
              <a
                href="https://medium.com/@studiasagaa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <MediumIcon className="w-4 h-4" />
              </a>


            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-light text-muted-foreground">
              © {new Date().getFullYear()} Studia Saga. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-conditions"
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>




          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;