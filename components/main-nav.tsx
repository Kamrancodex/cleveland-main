"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cleveland Vibes"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/where-to-go"
              className="text-gray-800 hover:text-yellow-500 font-medium"
            >
              Where To Go
            </Link>
            <Link
              href="/events"
              className="text-gray-800 hover:text-yellow-500 font-medium"
            >
              Events
            </Link>
            <Link
              href="/map"
              className="text-gray-800 hover:text-yellow-500 font-medium"
            >
              Map
            </Link>
            <Link
              href="/work-with-us"
              className="text-gray-800 hover:text-yellow-500 font-medium"
            >
              Work With Us
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-yellow-500 font-medium"
            >
              About
            </Link>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              <MapPin className="mr-2 h-4 w-4" /> Explore Map
            </Button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-yellow-500 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className={`md:hidden ${
            scrolled ? "bg-white/90 backdrop-blur-sm" : "bg-white"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/where-to-go"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-yellow-100"
              onClick={() => setIsOpen(false)}
            >
              Where To Go
            </Link>
            <Link
              href="/events"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-yellow-100"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/map"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-yellow-100"
              onClick={() => setIsOpen(false)}
            >
              Map
            </Link>
            <Link
              href="/work-with-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-yellow-100"
              onClick={() => setIsOpen(false)}
            >
              Work With Us
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-yellow-100"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                <MapPin className="mr-2 h-4 w-4" /> Explore Map
              </Button>
            </div>
            <div className="px-3 py-2 flex space-x-2">
              <Link
                href="https://instagram.com/clevelandvibes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="/search"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
              >
                <Search className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
