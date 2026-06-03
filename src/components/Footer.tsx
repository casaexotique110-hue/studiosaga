import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

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

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/studia_saga_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/company/studia-saga/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61583960570412"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Facebook className="w-4 h-4" />
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
              <a
                href="#"
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;