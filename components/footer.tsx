"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#8a8a6d] text-white">
      {/* Scroll to top button */}
      <div className="container mx-auto px-4 relative">
        <motion.button
          onClick={scrollToTop}
          className="absolute -top-6 right-6 bg-[#e0e4c4] text-[#8a8a6d] h-12 w-12 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Cleveland Vibes</h2>
            <p className="mb-6 max-w-md">
              Your hype person for all things Cleveland. Spotlighting where to
              go, what to eat, who to know, and why it all matters in the 216.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/clevelandvibes"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com/clevelandvibes"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/clevelandvibes"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/where-to-go"
                  className="hover:text-[#e0e4c4] transition-colors"
                >
                  Where to Go
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#e0e4c4] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-[#e0e4c4] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/map"
                  className="hover:text-[#e0e4c4] transition-colors"
                >
                  Map
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#e0e4c4] transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a
                  href="mailto:hello@clevelandvibes.com"
                  className="hover:text-[#e0e4c4] transition-colors"
                >
                  hello@clevelandvibes.com
                </a>
              </p>
              <p>Cleveland, Ohio</p>
              <p>&copy; {new Date().getFullYear()} Cleveland Vibes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay updated</h3>
              <p>
                Subscribe to our newsletter for the latest Cleveland updates
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white flex-grow md:w-64"
              />
              <motion.button
                className="px-6 py-3 bg-[#e0e4c4] text-[#8a8a6d] font-medium whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
