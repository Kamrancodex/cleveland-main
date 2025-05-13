"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ClientCardProps {
  number: string
  title: string
  image: string
}

export function ClientCard({ number, title, image }: ClientCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="border border-[#8a8a6d] bg-white p-4 overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0 5px 20px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-2">
        <motion.span
          className="text-xl font-bold mr-4"
          animate={{ scale: isHovered ? 1.1 : 1, color: isHovered ? "#8a8a6d" : "#000" }}
          transition={{ duration: 0.3 }}
        >
          {number}.
        </motion.span>
        <Link href="/portfolio" className="text-lg hover:underline relative group">
          {title}
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-[#8a8a6d]"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      </div>
      <motion.div
        className="relative h-32 w-full overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={`Client ${number}`}
          fill
          className="object-cover transition-transform duration-700"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
        <motion.div
          className="absolute inset-0 bg-[#8a8a6d]"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}
