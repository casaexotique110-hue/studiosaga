import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// LOGO
import logo from "@/assets/logo 2.png";

// SERVICES IMAGES
import modularImg from "@/assets/services/modular.jpg";
import fullhomeImg from "@/assets/services/fullhome.png";
import luxuryImg from "@/assets/services/luxury.png";

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

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const textColor = isScrolled
    ? "text-stone-900"
    : "text-white";

  const navLinkClass = `
    text-sm font-light tracking-wide
    hover:text-[#BFA181]
    transition-colors
    ${textColor}
  `;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Studia Saga"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-8">

              {/* HOME */}
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={navLinkClass}
                >
                  Home
                </Link>
              </NavigationMenuItem>

              {/* OUR SAGA */}
              <NavigationMenuItem>
                <Link
                  to="/our-saga"
                  className={navLinkClass}
                >
                  Our Saga
                </Link>
              </NavigationMenuItem>

              {/* STYLE PALETTE */}
              <NavigationMenuItem>
                <Link
                  to="/style-palette"
                  className={navLinkClass}
                >
                  Style Palette
                </Link>
              </NavigationMenuItem>

              {/* ================= SERVICES DROPDOWN ================= */}
{/* ================= SERVICES DROPDOWN ================= */}
<NavigationMenuItem className="relative">

  {/* SERVICES BUTTON */}
  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    className={`flex items-center gap-1 cursor-pointer ${navLinkClass}`}
  >
    Services

    <ChevronDown
      className={`w-4 h-4 transition-transform duration-300 ${
        servicesOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {/* DROPDOWN */}
  {servicesOpen && (
    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-5 z-50">

      <div className="w-[520px] rounded-3xl border border-white/20 bg-white/95 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.12)] p-4">

        <div className="space-y-3">

          {/* ITEM 1 */}
          <Link
            to="/services/modular-interiors"
            className="group/item flex items-center gap-4 rounded-2xl p-3 hover:bg-[#f8f5f1] transition-all duration-300"
          >
            <img
              src={modularImg}
              alt=""
              className="w-24 h-20 rounded-xl object-cover"
            />

            <div>
              <h3 className="text-lg font-semibold text-stone-900 group-hover/item:text-[#BFA181] transition-colors">
                Modular Interiors
              </h3>

              <p className="text-sm text-stone-500 mt-1">
                Kitchens, wardrobes and storage
              </p>
            </div>
          </Link>

          {/* ITEM 2 */}
          <Link
            to="/services/full-home-interiors"
            className="group/item flex items-center gap-4 rounded-2xl p-3 hover:bg-[#f8f5f1] transition-all duration-300"
          >
            <img
              src={fullhomeImg}
              alt=""
              className="w-24 h-20 rounded-xl object-cover"
            />

            <div>
              <h3 className="text-lg font-semibold text-stone-900 group-hover/item:text-[#BFA181] transition-colors">
                Full Home Interiors
              </h3>

              <p className="text-sm text-stone-500 mt-1">
                End-to-end home interiors
              </p>
            </div>
          </Link>

          {/* ITEM 3 */}
          <Link
            to="/services/luxury-interiors"
            className="group/item flex items-center gap-4 rounded-2xl p-3 hover:bg-[#f8f5f1] transition-all duration-300"
          >
            <img
              src={luxuryImg}
              alt=""
              className="w-24 h-20 rounded-xl object-cover"
            />

            <div>
              <h3 className="text-lg font-semibold text-stone-900 group-hover/item:text-[#BFA181] transition-colors">
                Luxury Interiors
              </h3>

              <p className="text-sm text-stone-500 mt-1">
                Homes that redefine elegance
              </p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )}
</NavigationMenuItem>

              {/* CONTACT */}
              <NavigationMenuItem>
                <Link
                  to="/Contact"
                  className={navLinkClass}
                >
                  Contact
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* ================= RIGHT BUTTON + MOBILE MENU ================= */}
          <div className="flex items-center gap-4">

            {/* DESKTOP BUTTON */}
            <Link
              to="/Contact"
              className="hidden md:inline-flex"
            >
              <Button
                variant="outline"
                className="
                  font-light tracking-wide uppercase text-xs
                  px-6 py-5
                  bg-[#E9E7DE]
                  text-black
                  border-[#E9E7DE]
                  hover:bg-white
                  hover:text-black
                  hover:border-white
                  transition-all duration-300
                "
              >
                Get In Touch
              </Button>
            </Link>

            {/* ================= MOBILE MENU ================= */}
            <Sheet
              open={mobileMenuOpen}
              onOpenChange={setMobileMenuOpen}
            >
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`md:hidden ${textColor}`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-[320px] p-0 border-r border-stone-100"
              >
                <div className="flex flex-col h-full bg-[#F9F8F6]">

                  {/* MOBILE LOGO */}
                  <div className="p-8 border-b border-stone-200">
                    <Link
                      to="/"
                      onClick={() =>
                        setMobileMenuOpen(false)
                      }
                    >
                      <img
                        src={logo}
                        alt="Studia Saga"
                        className="h-10 w-auto"
                      />
                    </Link>
                  </div>

                  {/* MOBILE NAV */}
                  <nav className="flex-1 overflow-y-auto p-8">

                    <div className="flex flex-col gap-6">

                      <Link
                        to="/"
                        className="text-lg font-serif text-stone-900"
                        onClick={() =>
                          setMobileMenuOpen(false)
                        }
                      >
                        Home
                      </Link>

                      <Link
                        to="/our-saga"
                        className="text-lg font-serif text-stone-900"
                        onClick={() =>
                          setMobileMenuOpen(false)
                        }
                      >
                        Our Saga
                      </Link>

                      <Link
                        to="/style-palette"
                        className="text-lg font-serif text-stone-900"
                        onClick={() =>
                          setMobileMenuOpen(false)
                        }
                      >
                        Style Palette
                      </Link>

                      {/* MOBILE SERVICES */}
                      <div className="space-y-3">

                        <button
                          onClick={() =>
                            setServicesOpen(
                              !servicesOpen
                            )
                          }
                          className="flex items-center justify-between w-full"
                        >
                          <span className="text-lg font-serif text-stone-900">
                            Services
                          </span>

                          {servicesOpen ? (
                            <ChevronUp className="w-4 h-4 text-stone-700" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-stone-700" />
                          )}
                        </button>

                        {servicesOpen && (
                          <div className="ml-3 border-l border-stone-200 pl-4 space-y-4">

                            <Link
                              to="/services/modular-interiors"
                              className="flex items-center gap-3"
                              onClick={() =>
                                setMobileMenuOpen(false)
                              }
                            >
                              <img
                                src={modularImg}
                                alt=""
                                className="w-12 h-12 rounded-lg object-cover"
                              />

                              <div>
                                <h4 className="text-sm font-medium text-stone-900">
                                  Modular Interiors
                                </h4>

                                <p className="text-xs text-stone-500">
                                  Kitchens & wardrobes
                                </p>
                              </div>
                            </Link>

                            <Link
                              to="/services/full-home-interiors"
                              className="flex items-center gap-3"
                              onClick={() =>
                                setMobileMenuOpen(false)
                              }
                            >
                              <img
                                src={fullhomeImg}
                                alt=""
                                className="w-12 h-12 rounded-lg object-cover"
                              />

                              <div>
                                <h4 className="text-sm font-medium text-stone-900">
                                  Full Home Interiors
                                </h4>

                                <p className="text-xs text-stone-500">
                                  End-to-end interiors
                                </p>
                              </div>
                            </Link>

                            <Link
                              to="/services/luxury-interiors"
                              className="flex items-center gap-3"
                              onClick={() =>
                                setMobileMenuOpen(false)
                              }
                            >
                              <img
                                src={luxuryImg}
                                alt=""
                                className="w-12 h-12 rounded-lg object-cover"
                              />

                              <div>
                                <h4 className="text-sm font-medium text-stone-900">
                                  Luxury Interiors
                                </h4>

                                <p className="text-xs text-stone-500">
                                  Premium luxury homes
                                </p>
                              </div>
                            </Link>

                          </div>
                        )}
                      </div>

                      {/* CONTACT */}
                      <Link
                        to="/Contact"
                        className="text-lg font-serif text-stone-900"
                        onClick={() =>
                          setMobileMenuOpen(false)
                        }
                      >
                        Contact
                      </Link>
                    </div>
                  </nav>

                  {/* MOBILE BUTTON */}
                  <div className="p-8 border-t border-stone-200">
                    <Link
                      to="/Contact"
                      onClick={() =>
                        setMobileMenuOpen(false)
                      }
                    >
                      <Button className="w-full py-6 bg-stone-900 text-white uppercase tracking-widest">
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