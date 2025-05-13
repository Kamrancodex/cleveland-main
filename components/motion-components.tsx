"use client"

import { motion } from "framer-motion"

export const FadeIn = ({ children, delay = 0, duration = 0.5, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: "easeOut" }}
    {...props}
  >
    {children}
  </motion.div>
)

export const SlideIn = ({ children, direction = "left", delay = 0, duration = 0.5, ...props }: any) => {
  const directionMap = {
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction as keyof typeof directionMap] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const ScaleIn = ({ children, delay = 0, duration = 0.5, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay, ease: "easeOut" }}
    {...props}
  >
    {children}
  </motion.div>
)

export const MotionImage = motion.img
export const MotionDiv = motion.div
export const MotionButton = motion.button
export const MotionLink = motion.a
