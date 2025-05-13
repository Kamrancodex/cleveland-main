"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  once?: boolean;
}

export function TextReveal({
  children,
  delay = 0,
  once = true,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
