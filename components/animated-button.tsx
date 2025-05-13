"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function AnimatedButton({ href, children, className = "" }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={href} passHref>
      <motion.div
        className={`relative inline-block ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="absolute inset-0 bg-[#8a8a6d] rounded-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: -1 }}
        />
        <motion.div
          className="border border-[#8a8a6d] bg-[#e0e4c4] px-8 py-4 text-sm font-medium uppercase tracking-wider transition-colors"
          animate={{
            backgroundColor: isHovered ? "#8a8a6d" : "#e0e4c4",
            color: isHovered ? "#ffffff" : "#000000",
          }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </Link>
  )
}
