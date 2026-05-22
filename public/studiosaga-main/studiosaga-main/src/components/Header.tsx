import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

// --- IMPORT YOUR LOGO HERE ---
import logo from "@/assets/logo.png"; 

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled ? "text-foreground" : "text-white";

  // Navigation Styles
  const navLinkClass = `text-sm font-light tracking-wide hover:text-[#BFA181] transition-colors ${textColor} bg-transparent`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* --- LOGO SECTION --- */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="Anam Cara Interiors" 
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <Link to="/" className={navLinkClass}>Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/our-saga" className={navLinkClass}>Our Saga</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/style-palette" className={navLinkClass}>Style Palette</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/services" className={navLinkClass}>Services</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Contact" className={navLinkClass}>Contact</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
  {/* --- DESKTOP REDIRECT TO CONTACT --- */}
  <Link to="/Contact" className="hidden md:inline-flex">
    <Button
      variant="outline"
      className={`
        font-light tracking-wide uppercase text-xs px-6 py-5
        bg-[#E9E7DE] text-black border-[#E9E7DE]
        hover:bg-white hover:text-black hover:border-white transition-all duration-300
      `}
    >
      Get In Touch
    </Button>
  </Link>

  {/* Mobile Menu */}
  <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        className={`md:hidden ${textColor}`}
      >
        <Menu className="h-6 w-6" />
      </Button>
    </SheetTrigger>

    <SheetContent side="left" className="w-[300px] p-0 border-r border-stone-100">
      <div className="flex flex-col h-full bg-[#F9F8F6]">
        {/* Mobile Logo inside Sidebar */}
        <div className="p-8 border-b border-stone-200">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img src={logo} alt="Anam Cara Interiors" className="h-10 w-auto" />
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-8">
          <div className="flex flex-col gap-6">
            <Link to="/" className="text-lg font-serif text-stone-900" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/our-saga" className="text-lg font-serif text-stone-900" onClick={() => setMobileMenuOpen(false)}>Our Saga</Link>
            <Link to="/style-palette" className="text-lg font-serif text-stone-900" onClick={() => setMobileMenuOpen(false)}>Style Palette</Link>
            <Link to="/services" className="text-lg font-serif text-stone-900" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/Contact" className="text-lg font-serif text-stone-900" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </nav>

        {/* --- MOBILE REDIRECT TO CONTACT --- */}
        <div className="p-8 border-t border-stone-200">
          <Link to="/Contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full font-bold uppercase tracking-widest py-6 bg-stone-900 text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;