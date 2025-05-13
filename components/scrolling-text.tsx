"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface ScrollingTextProps {
  text: string
  speed?: number
}

export function ScrollingText({ text, speed = 50 }: ScrollingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const marqueeText = Array(10).fill(text).join(" · ")
    container.innerHTML = marqueeText
  }, [text])

  return (
    <div className="bg-[#e0e4c4] py-3 overflow-hidden whitespace-nowrap">
      <motion.div
        ref={containerRef}
        className="inline-block text-sm font-medium"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      />
    </div>
  )
}
