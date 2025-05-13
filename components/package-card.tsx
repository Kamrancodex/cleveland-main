"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface PackageCardProps {
  title: string;
  image: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  packageNumber: number;
}

export function PackageCard({
  title,
  image,
  description,
  features,
  isFeatured = false,
  packageNumber,
}: PackageCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const packageTitle = `Package ${
    packageNumber === 1 ? "One" : packageNumber === 2 ? "Two" : "Three"
  }`;

  return (
    <div className="relative">
      {isFeatured && (
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10">
          <div className="relative w-24 h-24">
            <Image
              src="/images/fan-fave-badge.svg"
              alt="Fan Favorite"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <p className="font-bold text-sm leading-tight">
                FAN
                <br />
                FAVE!
              </p>
            </div>
          </div>
        </div>
      )}
      <motion.div
        className="bg-white border border-[#e0e4c4] p-4 flex flex-col h-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Image */}
        <motion.div
          className="relative w-full aspect-square mb-6 overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 rounded-md"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
        </motion.div>

        {/* Title */}
        <div className="border border-[#e0e4c4] mb-6">
          <motion.h3
            className="text-xl font-medium text-center py-4"
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {packageTitle}
          </motion.h3>
        </div>

        {/* Description */}
        <p className="text-center mb-6 text-sm text-gray-700">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-8 flex-grow">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start text-sm"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.span className="text-sm mr-2">—</motion.span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Button */}
        <div className="mt-auto text-center">
          <Link href="/services" passHref>
            <motion.div
              className="inline-block border border-[#8a8a6d] bg-[#e0e4c4] px-6 py-2 text-sm font-medium uppercase tracking-wider relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-[#8a8a6d]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 0 }}
              />
              <motion.span
                className="relative z-10"
                animate={{ color: isHovered ? "#fff" : "#000" }}
                transition={{ duration: 0.3 }}
              >
                VIEW MORE →
              </motion.span>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
