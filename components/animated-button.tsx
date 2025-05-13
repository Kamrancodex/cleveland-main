"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export function AnimatedButton({
  children,
  href,
  className = "",
}: AnimatedButtonProps) {
  return (
    <Link href={href}>
      <motion.div
        className={`relative inline-block overflow-hidden bg-[#8a8a6d] text-white px-8 py-4 ${className}`}
        whileHover="hover"
        whileTap="tap"
      >
        <motion.span
          className="relative z-10 inline-block font-medium"
          variants={{
            hover: { y: 0 },
            tap: { y: 0 },
          }}
        >
          {children}
        </motion.span>

        {/* Background hover effect */}
        <motion.span
          className="absolute inset-0 bg-[#e0e4c4]"
          initial={{ x: "-100%" }}
          variants={{
            hover: { x: 0 },
            tap: { scale: 0.98 },
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Text color change with background */}
        <motion.span
          className="absolute inset-0 z-20 flex items-center justify-center font-medium text-[#8a8a6d]"
          initial={{ opacity: 0 }}
          variants={{
            hover: { opacity: 1 },
            tap: { opacity: 1 },
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      </motion.div>
    </Link>
  );
}
