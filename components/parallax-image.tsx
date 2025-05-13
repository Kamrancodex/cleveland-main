"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
}

export function ParallaxImage({ src, alt, className = "" }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const { scrollY } = useScroll()

  useEffect(() => {
    if (!ref.current) return
    const setValues = () => {
      setElementTop(ref.current?.offsetTop || 0)
      setClientHeight(window.innerHeight)
    }
    setValues()
    document.addEventListener("load", setValues)
    window.addEventListener("resize", setValues)

    return () => {
      document.removeEventListener("load", setValues)
      window.removeEventListener("resize", setValues)
    }
  }, [ref])

  const y = useTransform(scrollY, [elementTop - clientHeight, elementTop + clientHeight], [-50, 50])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div className="relative w-full h-full" style={{ y }}>
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  )
}
