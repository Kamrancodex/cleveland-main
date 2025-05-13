"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      {/* Top notification bar */}
      <motion.div
        className="bg-[#e0e4c4] py-3 px-4 text-center relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-sm">
          Follow us on Instagram{" "}
          <Link
            href="https://instagram.com/clevelandvibes"
            className="underline font-medium"
          >
            @clevelandvibes
          </Link>
        </p>
        <motion.button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-xl"
          aria-label="Close"
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          &times;
        </motion.button>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f5f5e6]/70 backdrop-blur-md border-b border-[#e0e4c4] shadow-sm"
            : "bg-[#f5f5e6] border-b border-[#e0e4c4]"
        } py-4 px-6`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center justify-between relative">
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden z-20 p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#8a8a6d]" />
            ) : (
              <Menu className="h-6 w-6 text-[#8a8a6d]" />
            )}
          </motion.button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/" className="font-medium relative group">
                Home
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8a8a6d]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/where-to-go" className="font-medium relative group">
                Where To Go
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8a8a6d]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/events" className="font-medium relative group">
                Events
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8a8a6d]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/map" className="font-medium relative group">
                Map
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8a8a6d]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="/blog" className="font-medium relative group">
                Blog
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8a8a6d]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/">
              <Image
                src="/main-logo.png"
                alt="Cleveland Vibes"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </motion.div>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link
              href="/work-with-us"
              className="relative overflow-hidden border border-[#8a8a6d] bg-[#e0e4c4] px-6 py-3 text-sm font-medium uppercase tracking-wider group"
            >
              <motion.span
                className="absolute inset-0 bg-[#8a8a6d] z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Work With Us
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-10 bg-[#f5f5e6]/95 backdrop-blur-sm md:hidden pt-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
                {[
                  { name: "Home", href: "/" },
                  { name: "Where To Go", href: "/where-to-go" },
                  { name: "Events", href: "/events" },
                  { name: "Map", href: "/map" },
                  { name: "Blog", href: "/blog" },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <Link
                      href={item.href}
                      className="font-medium relative group"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                      <motion.span
                        className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#8a8a6d]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4"
                >
                  <Link
                    href="/work-with-us"
                    className="relative overflow-hidden border border-[#8a8a6d] bg-[#e0e4c4] px-6 py-3 text-base font-medium uppercase tracking-wider group"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span
                      className="absolute inset-0 bg-[#8a8a6d] z-0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Work With Us
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
