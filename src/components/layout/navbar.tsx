"use client";

import { Link } from "@tanstack/react-router";
import {
  IconMenu as Menu,
  IconX as X,
  IconSettingsFilled as IconSettings,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
const links = [
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 overflow-hidden 
    h-16 transition-colors duration-300 
    border-b border-gray-100
    ${
      isScrolled
        ? "bg-red-600/95 border-red-600 backdrop-blur-sm shadow-md md:pt-0 pt-4"
        : "bg-transparent border-gray-500/30 shadow-none"
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <IconSettings className="w-6 h-6 text-white" />
            <span className={isScrolled ? "text-white" : "text-primary"}>
              CHITSULO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-semibold text-white transition 
              ${isScrolled ? "hover:text-gray-200" : "hover:text-primary"}
            `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Button className="hidden md:block bg-white text-gray-900 hover:text-white">
            Request Quote
          </Button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link to="#services" className="block py-2 hover:text-primary">
              Services
            </Link>
            <Link to="#gallery" className="block py-2 hover:text-primary">
              Gallery
            </Link>
            <Link to="#testimonials" className="block py-2 hover:text-primary">
              Testimonials
            </Link>
            <Link to="#contact" className="block py-2 hover:text-primary">
              Contact
            </Link>
            <Button className="w-full bg-primary hover:bg-red-700">
              Request Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
