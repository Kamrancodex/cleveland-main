"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { MapPin, Filter, Search } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { FadeIn, SlideIn } from "@/components/motion-components";
import { ScrollingText } from "@/components/scrolling-text";
import { AnimatedCursor } from "@/components/animated-cursor";
import { AnimatedButton } from "@/components/animated-button";

const playfair = Playfair_Display({ subsets: ["latin"] });

// This would typically come from a database or API
const mapData = {
  categories: [
    "All",
    "Food & Drink",
    "Outdoors & Nature",
    "Art & Culture",
    "Shopping",
    "Entertainment",
  ],
  neighborhoods: [
    "All",
    "Downtown",
    "Ohio City",
    "Tremont",
    "University Circle",
    "Detroit Shoreway",
    "Hingetown",
  ],
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
      address: "1979 W 25th St, Cleveland, OH 44113",
      coordinates: { lat: 41.4846, lng: -81.7031 },
    },
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
      address: "6500 Cleveland Memorial Shoreway, Cleveland, OH 44102",
      coordinates: { lat: 41.4896, lng: -81.735 },
    },
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
      address: "11150 East Blvd, Cleveland, OH 44106",
      coordinates: { lat: 41.509, lng: -81.6121 },
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
      address: "2516 Market Ave, Cleveland, OH 44113",
      coordinates: { lat: 41.4846, lng: -81.7044 },
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
      address: "1455 W 29th St, Cleveland, OH 44113",
      coordinates: { lat: 41.4838, lng: -81.7073 },
    },
    {
      id: 6,
      title: "Playhouse Square",
      category: "Entertainment",
      neighborhood: "Downtown",
      image:
        "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Largest performing arts center in the US outside of New York, featuring multiple theaters and venues.",
      isVibesApproved: true,
      slug: "playhouse-square",
      address: "1501 Euclid Ave, Cleveland, OH 44115",
      coordinates: { lat: 41.5014, lng: -81.6808 },
    },
  ],
};

export default function MapPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [neighborhoodFilter, setNeighborhoodFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredPlaces = mapData.places.filter((place) => {
    const matchesCategory =
      categoryFilter === "All" || place.category === categoryFilter;
    const matchesNeighborhood =
      neighborhoodFilter === "All" || place.neighborhood === neighborhoodFilter;
    const matchesSearch =
      place.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesNeighborhood && matchesSearch;
  });

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
      <section className="relative h-[50vh] bg-[#e0e4c4]">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1575388145309-4e4adc3512b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Cleveland map"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#8a8a6d]/40"></div>
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
            <TextReveal delay={0.8}>EXPLORE</TextReveal>
            <TextReveal delay={1.0}>
              <span className="italic">CLEVELAND</span>
            </TextReveal>
          </h1>
          <TextReveal delay={1.4}>
            <p className="text-sm sm:text-base md:text-lg mt-4 max-w-xl">
              Discover the best places to eat, drink, shop, and explore in The
              Land.
            </p>
          </TextReveal>
        </motion.div>
      </section>

      {/* Scrolling Text */}
      <ScrollingText text="FOOD & DRINK · PARKS & OUTDOORS · ART & CULTURE · SHOPPING · ENTERTAINMENT · LOCAL GEMS · HIDDEN SPOTS" />

      {/* Search and Filters */}
      <section className="py-8 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8a8a6d]" />
              <input
                type="text"
                placeholder="Search places..."
                className="w-full pl-10 py-3 bg-white border border-[#8a8a6d]/20 focus:border-[#8a8a6d] outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-[#8a8a6d] text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </motion.button>
              <Link href="/submit-place">
                <motion.button
                  className="px-4 py-3 bg-[#e0e4c4] text-[#8a8a6d]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Add a Place</span>
                </motion.button>
              </Link>
            </div>
          </div>

          {showFilters && (
            <motion.div
              className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-[#e0e4c4]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div>
                <h3 className="font-bold mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {mapData.categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setCategoryFilter(category)}
                      className={`px-3 py-1 text-sm rounded-sm ${
                        categoryFilter === category
                          ? "bg-[#8a8a6d] text-white"
                          : "bg-white text-[#8a8a6d] hover:bg-[#8a8a6d]/10"
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Neighborhood</h3>
                <div className="flex flex-wrap gap-2">
                  {mapData.neighborhoods.map((neighborhood) => (
                    <motion.button
                      key={neighborhood}
                      onClick={() => setNeighborhoodFilter(neighborhood)}
                      className={`px-3 py-1 text-sm rounded-sm ${
                        neighborhoodFilter === neighborhood
                          ? "bg-[#8a8a6d] text-white"
                          : "bg-white text-[#8a8a6d] hover:bg-[#8a8a6d]/10"
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {neighborhood}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Map and Places Section */}
      <section className="py-12 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Visualization (this would be replaced with an actual map component) */}
            <div className="lg:col-span-2">
              <div className="relative h-[500px] bg-[#e0e4c4] border border-[#8a8a6d]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl font-bold">Interactive Map</p>
                    <p className="text-sm mt-2">
                      This would be replaced with a Google Maps or Mapbox
                      integration
                    </p>
                    {filteredPlaces.map((place) => (
                      <div key={place.id} className="relative inline-block m-2">
                        <MapPin className="h-6 w-6 text-[#8a8a6d]" />
                        <span className="text-xs">{place.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Places List */}
            <div className="lg:col-span-1">
              <h2 className={`${playfair.className} text-3xl font-bold mb-6`}>
                {filteredPlaces.length > 0
                  ? `${filteredPlaces.length} PLACES`
                  : "NO RESULTS"}
              </h2>
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {filteredPlaces.map((place, index) => (
                  <FadeIn key={place.id} delay={0.1 * (index + 1)}>
                    <Link href={`/places/${place.slug}`}>
                      <motion.div
                        className="bg-white p-4 border border-[#8a8a6d]/20 hover:border-[#8a8a6d] flex gap-4"
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                        }}
                      >
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden">
                          <Image
                            src={place.image}
                            alt={place.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold">{place.title}</h3>
                            {place.isVibesApproved && (
                              <Badge className="bg-[#8a8a6d] hover:bg-[#8a8a6d]/80 text-xs">
                                Vibes Approved
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center text-xs text-gray-600 mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{place.neighborhood}</span>
                          </div>
                          <div className="text-xs mt-1">{place.category}</div>
                        </div>
                      </motion.div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
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
              <span className="italic">HIDDEN GEM?</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mb-8 max-w-2xl mx-auto">
              Help us build the most comprehensive guide to Cleveland by
              submitting your favorite local spots.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="mt-8">
              <AnimatedButton href="/submit-place">
                Submit a Place
              </AnimatedButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </main>
  );
}
