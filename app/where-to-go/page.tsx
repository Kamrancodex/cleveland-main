"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { FadeIn, SlideIn } from "@/components/motion-components";
import { ScrollingText } from "@/components/scrolling-text";
import { useEffect, useState } from "react";
import { AnimatedCursor } from "@/components/animated-cursor";

const playfair = Playfair_Display({ subsets: ["latin"] });

const categories = [
  {
    id: "food-drink",
    title: "Food & Drink",
    description: "The best restaurants, bars, and cafes in Cleveland",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 24,
  },
  {
    id: "outdoors",
    title: "Outdoors & Nature",
    description: "Parks, trails, and natural wonders around the city",
    image:
      "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 18,
  },
  {
    id: "art-culture",
    title: "Art & Culture",
    description: "Museums, galleries, theaters, and cultural hotspots",
    image:
      "https://images.unsplash.com/photo-1551614868-7d3b35eed775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 15,
  },
  {
    id: "date-night",
    title: "Date Night Ideas",
    description: "Romantic spots and activities for couples",
    image:
      "https://images.unsplash.com/photo-1596813362035-3edcff0c2487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 12,
  },
  {
    id: "seasonal",
    title: "Seasonal Picks",
    description: "The best things to do based on the time of year",
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 9,
  },
  {
    id: "hidden-gems",
    title: "Hidden Gems",
    description: "Lesser-known spots that locals love",
    image:
      "https://images.unsplash.com/photo-1518992094393-7b9dead76173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 14,
  },
];

const featuredPlaces = [
  {
    id: 1,
    title: "West Side Market",
    category: "Food & Drink",
    neighborhood: "Ohio City",
    image:
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isVibesApproved: true,
    slug: "west-side-market",
  },
  {
    id: 2,
    title: "Edgewater Park",
    category: "Outdoors & Nature",
    neighborhood: "Detroit Shoreway",
    image:
      "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isVibesApproved: true,
    slug: "edgewater-park",
  },
  {
    id: 3,
    title: "Cleveland Museum of Art",
    category: "Art & Culture",
    neighborhood: "University Circle",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isVibesApproved: false,
    slug: "cleveland-museum-of-art",
  },
  {
    id: 4,
    title: "Great Lakes Brewing Company",
    category: "Food & Drink",
    neighborhood: "Ohio City",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isVibesApproved: true,
    slug: "great-lakes-brewing",
  },
];

export default function WhereToGoPage() {
  const [isLoaded, setIsLoaded] = useState(false);

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
            src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Cleveland cityscape"
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
            <TextReveal delay={0.8}>WHERE</TextReveal>
            <TextReveal delay={1.0}>
              <span className="italic">TO GO</span>
            </TextReveal>
          </h1>
          <TextReveal delay={1.4}>
            <p className="text-sm sm:text-base md:text-lg mt-4 max-w-xl">
              Discover the best spots in Cleveland, from hidden gems to local
              favorites.
            </p>
          </TextReveal>
        </motion.div>
      </section>

      {/* Scrolling Text */}
      <ScrollingText text="RESTAURANTS · CAFES · PARKS · MUSEUMS · HIDDEN GEMS · LOCAL FAVORITES · NEIGHBORHOODS · LANDMARKS" />

      {/* Categories */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              EXPLORE
              <br />
              BY CATEGORY
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <FadeIn key={category.id} delay={0.1 * (index + 1)}>
                <Link href={`/where-to-go/${category.id}`} className="group">
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
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <motion.div
                        className="absolute inset-0 bg-[#8a8a6d] bg-opacity-30 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-white font-medium flex items-center">
                          Explore <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </motion.div>
                    </motion.div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-lg group-hover:text-[#8a8a6d] transition-colors">
                          {category.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="border-[#8a8a6d] text-[#8a8a6d]"
                        >
                          {category.count}
                        </Badge>
                      </div>
                      <p className="text-sm">{category.description}</p>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section className="py-16 px-6 bg-[#e0e4c4]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              FEATURED
              <br />
              PLACES
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlaces.map((place, index) => (
              <FadeIn key={place.id} delay={0.1 * (index + 1)}>
                <Link href={`/places/${place.slug}`} className="group">
                  <motion.div
                    className="bg-[#f5f5e6] overflow-hidden border border-[#8a8a6d]"
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
                        <Badge
                          variant="outline"
                          className="mr-2 border-[#8a8a6d] text-[#8a8a6d]"
                        >
                          {place.category}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1 text-[#8a8a6d]" />
                        <span>{place.neighborhood}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
