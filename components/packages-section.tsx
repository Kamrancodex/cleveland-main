"use client";

import { PackageCard } from "./package-card";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function PackagesSection() {
  const { ref, isVisible } = useScrollAnimation();

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <section className="py-16 px-6 bg-[#f5f5e6]" ref={ref}>
      <motion.h2
        className={`${playfair.className} text-5xl md:text-6xl font-bold text-center mb-12`}
        variants={titleVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        EXPLORE
        <br />
        CLEVELAND
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
        {/* Package One */}
        <PackageCard
          title="White Boots"
          image="/images/package-1.jpg"
          description="Here's where you hype up your services and how you can help them. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          features={[
            "What's included goes here",
            "What's included goes here",
            "What's included goes here",
          ]}
          packageNumber={1}
        />

        {/* Package Two - Featured */}
        <PackageCard
          title="Green Suit"
          image="/images/package-2.jpg"
          description="Here's where you hype up your services and how you can help them. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          features={[
            "What's included goes here",
            "What's included goes here",
            "What's included goes here",
            "What's included goes here",
          ]}
          isFeatured={true}
          packageNumber={2}
        />

        {/* Package Three */}
        <PackageCard
          title="Orange Cocktail"
          image="/images/package-3.jpg"
          description="Here's where you hype up your services and how you can help them. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          features={[
            "What's included goes here",
            "What's included goes here",
            "What's included goes here",
          ]}
          packageNumber={3}
        />
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <Link href="/services" passHref>
          <motion.div
            className="inline-block bg-[#e0e4c4] px-12 py-4 text-sm font-medium uppercase tracking-wider"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            VIEW MORE →
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
