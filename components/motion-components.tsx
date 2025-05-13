"use client";

import { useEffect, useState, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

interface SlideInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function SlideIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.5,
  ...props
}: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay, ease: "easeOut" }}
    {...props}
  >
    {children}
  </motion.div>
);

export const MotionImage = motion.img;
export const MotionDiv = motion.div;
export const MotionButton = motion.button;
export const MotionLink = motion.a;
