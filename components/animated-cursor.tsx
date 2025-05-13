"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show cursor after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Larger outer cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#8a8a6d] pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Smaller inner cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#8a8a6d] rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          mass: 0.2,
        }}
      />
    </>
  );
}
