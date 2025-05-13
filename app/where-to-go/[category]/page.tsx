"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { FadeIn, SlideIn } from "@/components/motion-components";
import { ScrollingText } from "@/components/scrolling-text";
import { AnimatedCursor } from "@/components/animated-cursor";

const playfair = Playfair_Display({ subsets: ["latin"] });

// This would typically come from a database or API
const categoryData = {
  "food-drink": {
    title: "Food & Drink",
    description: "The best restaurants, bars, and cafes in Cleveland",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    places: [
      {
        id: 1,
        title: "West Side Market",
        category: "Food & Drink",
        neighborhood: "Ohio City",
        image:
          "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description:
          "Historic food market with dozens of local vendors offering fresh produce, meats, baked goods, and prepared foods.",
        isVibesApproved: true,
        slug: "west-side-market",
      },
      {
        id: 4,
        title: "Great Lakes Brewing Company",
        category: "Food & Drink",
        neighborhood: "Ohio City",
        image:
          "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description:
          "Ohio's first craft brewery featuring award-winning lagers and ales alongside a menu of locally-sourced pub fare.",
        isVibesApproved: true,
        slug: "great-lakes-brewing",
      },
      {
        id: 5,
        title: "Rising Star Coffee",
        category: "Food & Drink",
        neighborhood: "Hingetown",
        image:
          "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description:
          "Artisanal coffee roaster serving specialty drinks in a cozy, industrial space.",
        isVibesApproved: true,
        slug: "rising-star-coffee",
      },
      {
        id: 6,
        title: "TownHall",
        category: "Food & Drink",
        neighborhood: "Ohio City",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description:
          "Popular eatery featuring non-GMO menu with vegan, vegetarian and gluten-free options in a modern, lively atmosphere.",
        isVibesApproved: false,
        slug: "townhall",
      },
    ],
  },
  outdoors: {
    title: "Outdoors & Nature",
    description: "Parks, trails, and natural wonders around the city",
    image:
      "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    places: [
      {
        id: 2,
        title: "Edgewater Park",
        category: "Outdoors & Nature",
        neighborhood: "Detroit Shoreway",
        image:
          "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description:
          "Expansive lakefront park with beaches, fishing pier, and skyline views.",
        isVibesApproved: true,
        slug: "edgewater-park",
      },
    ],
  },
  "art-culture": {
    title: "Art & Culture",
    description: "Museums, galleries, theaters, and cultural hotspots",
    image:
      "https://images.unsplash.com/photo-1551614868-7d3b35eed775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    places: [
      {
        id: 3,
        title: "Cleveland Museum of Art",
        category: "Art & Culture",
        neighborhood: "University Circle",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description:
          "World-renowned art museum with free admission to its permanent collection.",
        isVibesApproved: false,
        slug: "cleveland-museum-of-art",
      },
    ],
  },
};

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { category } = params;

  const categoryInfo = categoryData[category as keyof typeof categoryData] || {
    title: "Category Not Found",
    description: "This category does not exist",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    places: [],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-[#f5f5e6]">
      <AnimatedCursor />

      {/* Loading Animation */}
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 bg-[#f5f5e6] z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          onAnimationComplete={() => setIsLoaded(true)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/main-logo.png"
              alt="Cleveland Vibes"
              width={200}
              height={60}
              className="h-16 w-auto"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#e0e4c4]">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={categoryInfo.image}
            alt={categoryInfo.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#8a8a6d]/30"></div>
        </motion.div>
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h1
            className={`${playfair.className} text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8`}
          >
            <TextReveal delay={0.8}>
              {categoryInfo.title.split(" ")[0]}
            </TextReveal>
            <TextReveal delay={1.0}>
              <span className="italic">
                {categoryInfo.title.split(" ").slice(1).join(" ")}
              </span>
            </TextReveal>
          </h1>
          <TextReveal delay={1.4}>
            <p className="text-sm sm:text-base md:text-lg mt-4 max-w-xl">
              {categoryInfo.description}
            </p>
          </TextReveal>
        </motion.div>
      </section>

      {/* Scrolling Text */}
      <ScrollingText text="RESTAURANTS · CAFES · BREWERIES · MARKETS · LOCAL FAVORITES · HIDDEN GEMS · FOOD HALLS · PATIOS" />

      {/* Places Section */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              TOP
              <br />
              SPOTS
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryInfo.places.map((place, index) => (
              <FadeIn key={place.id} delay={0.1 * (index + 1)}>
                <Link href={`/places/${place.slug}`} className="group">
                  <motion.div
                    className="bg-[#e0e4c4] overflow-hidden border border-[#8a8a6d]"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="relative h-48"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={place.image || "/placeholder.svg"}
                        alt={place.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      {place.isVibesApproved && (
                        <motion.div
                          className="absolute top-2 right-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Badge className="bg-[#8a8a6d] hover:bg-[#8a8a6d]/80">
                            Vibes Approved
                          </Badge>
                        </motion.div>
                      )}
                    </motion.div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-[#8a8a6d] transition-colors">
                        {place.title}
                      </h3>
                      <div className="flex items-center text-sm mb-1">
                        <MapPin className="h-4 w-4 mr-1 text-[#8a8a6d]" />
                        <span>{place.neighborhood}</span>
                      </div>
                      <p className="text-sm mt-2">
                        {place.description.substring(0, 100)}...
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-[#8a8a6d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              KNOW A
              <br />
              <span className="italic">GREAT SPOT?</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mb-8 max-w-2xl mx-auto">
              We're always looking to discover new places in Cleveland. Submit
              your favorite spots and they might be featured on our site!
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <Link
              href="/submit-place"
              className="inline-block bg-[#e0e4c4] text-black px-6 py-3 font-medium transition-all hover:bg-white"
            >
              SUBMIT A PLACE →
            </Link>
          </TextReveal>
        </div>
      </section>
    </main>
  );
}
