"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { FadeIn, SlideIn } from "@/components/motion-components";
import { ScrollingText } from "@/components/scrolling-text";
import { AnimatedCursor } from "@/components/animated-cursor";
import { AnimatedButton } from "@/components/animated-button";

const playfair = Playfair_Display({ subsets: ["latin"] });

const portfolioItems = [
  {
    id: 1,
    title: "Cleveland Food Week",
    category: "Event Promotion",
    description:
      "A city-wide celebration of Cleveland's culinary scene. We managed social media, created content, and drove record attendance through targeted promotions.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    client: "Downtown Cleveland Alliance",
    slug: "cleveland-food-week",
    featured: true,
  },
  {
    id: 2,
    title: "Great Lakes Brewery Rebrand",
    category: "Brand Partnership",
    description:
      "Content creation and social strategy for the relaunch of one of Cleveland's beloved breweries, reaching over 500,000 local beer enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    client: "Great Lakes Brewing Co.",
    slug: "great-lakes-brewery-rebrand",
    featured: true,
  },
  {
    id: 3,
    title: "Rising Star Coffee Expansion",
    category: "Social Media Management",
    description:
      "Comprehensive social media campaign to promote the opening of three new locations, with custom content for each neighborhood.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    client: "Rising Star Coffee",
    slug: "rising-star-expansion",
    featured: false,
  },
  {
    id: 4,
    title: "Cleveland Museum of Art Exhibition",
    category: "Content Creation",
    description:
      "Photo and video package for a major new exhibition, including interviews with artists and behind-the-scenes content.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    client: "Cleveland Museum of Art",
    slug: "cma-exhibition",
    featured: true,
  },
  {
    id: 5,
    title: "Edgewater Summer Concert Series",
    category: "Event Promotion",
    description:
      "Promotion and coverage of weekly concerts at Edgewater Park, increasing attendance by 35% from the previous year.",
    image:
      "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    client: "Cleveland Metroparks",
    slug: "edgewater-concerts",
    featured: false,
  },
  {
    id: 6,
    title: "Ohio City Restaurant Week",
    category: "Brand Partnership",
    description:
      "Collaborative campaign with multiple restaurants in Ohio City to drive traffic during a traditionally slow month.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    client: "Ohio City Inc.",
    slug: "ohio-city-restaurant-week",
    featured: false,
  },
];

export default function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState("all");
  const categories = [
    "all",
    "Event Promotion",
    "Brand Partnership",
    "Content Creation",
    "Social Media Management",
  ];

  const filteredItems = portfolioItems.filter(
    (item) => filter === "all" || item.category === filter
  );

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
            src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Cleveland portfolio"
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
            <TextReveal delay={0.8}>OUR</TextReveal>
            <TextReveal delay={1.0}>
              <span className="italic">PORTFOLIO</span>
            </TextReveal>
          </h1>
          <TextReveal delay={1.4}>
            <p className="text-sm sm:text-base md:text-lg mt-4 max-w-xl">
              Showcasing our work with Cleveland's most innovative brands and
              businesses.
            </p>
          </TextReveal>
        </motion.div>
      </section>

      {/* Scrolling Text */}
      <ScrollingText text="CASE STUDIES · SUCCESS STORIES · BRAND COLLABORATIONS · EVENT CAMPAIGNS · CONTENT CREATION · LOCAL IMPACT" />

      {/* Portfolio Filters */}
      <section className="py-12 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-[#8a8a6d] text-white"
                    : "bg-[#e0e4c4] hover:bg-[#8a8a6d]/20"
                }`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {category === "all" ? "All Work" : category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-8 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              {filter === "all" ? (
                <>
                  OUR
                  <br />
                  WORK
                </>
              ) : (
                <>
                  {filter}
                  <br />
                  <span className="italic">PROJECTS</span>
                </>
              )}
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <FadeIn key={item.id} delay={0.1 * (index + 1)}>
                <Link href={`/portfolio/${item.slug}`} className="group">
                  <motion.div
                    className="bg-[#e0e4c4] overflow-hidden border border-[#8a8a6d]"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="relative h-56 w-full"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      {item.featured && (
                        <motion.div
                          className="absolute top-2 right-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Badge className="bg-[#8a8a6d] hover:bg-[#8a8a6d]/80">
                            Featured Project
                          </Badge>
                        </motion.div>
                      )}
                    </motion.div>
                    <div className="p-6">
                      <Badge
                        variant="outline"
                        className="mb-2 border-[#8a8a6d] text-[#8a8a6d]"
                      >
                        {item.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-[#8a8a6d] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {item.client}
                      </p>
                      <p className="text-sm">
                        {item.description.substring(0, 100)}...
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-[#8a8a6d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <SlideIn direction="up">
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Client logo"
                width={100}
                height={40}
                className="h-12 w-auto mx-auto"
              />
            </div>
            <blockquote className="text-xl md:text-2xl italic mb-6">
              "Working with Cleveland Vibes transformed our brand's local
              presence. Their team understands what resonates with Cleveland
              audiences and delivers authentic content that connects."
            </blockquote>
            <cite className="not-italic">
              — Sarah Johnson, Marketing Director at Great Lakes Brewing Co.
            </cite>
          </SlideIn>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              READY TO
              <br />
              <span className="italic">ELEVATE</span>
              <br />
              YOUR BRAND?
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Explore our services to
              see how we can help your business connect with Cleveland's most
              engaged audience.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="mt-8">
              <AnimatedButton href="/services">Our Services</AnimatedButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </main>
  );
}
