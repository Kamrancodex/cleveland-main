"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Image as ImageIcon, Video, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { FadeIn, SlideIn } from "@/components/motion-components";
import { ScrollingText } from "@/components/scrolling-text";
import { AnimatedCursor } from "@/components/animated-cursor";
import { AnimatedButton } from "@/components/animated-button";

const playfair = Playfair_Display({ subsets: ["latin"] });

// This would typically come from a database or API
const portfolioItems = [
  {
    id: 1,
    title: "Cleveland Food Week",
    category: "Event Promotion",
    description:
      "A city-wide celebration of Cleveland's culinary scene. We managed social media, created content, and drove record attendance through targeted promotions.",
    fullDescription: `
      Cleveland Food Week is a city-wide celebration of the local culinary scene, featuring special menus, chef demonstrations, and food-focused events across multiple neighborhoods.
      
      As the marketing partner for this major event, Cleveland Vibes created and executed a comprehensive promotional strategy that included:
      
      • Social media content creation and management
      • Email marketing campaign with 35% open rate
      • Influencer partnerships with top Cleveland foodies
      • Custom photography and videography
      • Interactive map of participating restaurants
      
      The results were remarkable: attendance increased by 43% from the previous year, and participating restaurants reported an average 27% increase in sales during the week-long event.
    `,
    objectives: [
      "Increase attendance by 30% from previous year",
      "Drive ticket sales for featured events",
      "Boost visibility for participating restaurants",
      "Establish Cleveland as a culinary destination",
    ],
    approach:
      "We developed a multi-channel campaign that highlighted the unique aspects of Cleveland's food scene while making the event accessible to both foodies and casual diners. Our strategy combined compelling visual content with targeted promotions across various platforms.",
    results: [
      "43% increase in attendance year-over-year",
      "27% average sales increase for participating restaurants",
      "35% email open rate (industry average: 22%)",
      "5.2 million social media impressions",
    ],
    testimonial: {
      quote:
        "Cleveland Vibes took our event to the next level. Their understanding of the local market and creative approach to promotion made Cleveland Food Week our most successful event to date.",
      author: "Michael Reynolds",
      title: "Events Director, Downtown Cleveland Alliance",
    },
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    client: "Downtown Cleveland Alliance",
    slug: "cleveland-food-week",
    featured: true,
    services: [
      "Content Creation",
      "Social Media Management",
      "Event Promotion",
      "Influencer Marketing",
    ],
  },
  {
    id: 2,
    title: "Great Lakes Brewery Rebrand",
    category: "Brand Partnership",
    description:
      "Content creation and social strategy for the relaunch of one of Cleveland's beloved breweries, reaching over 500,000 local beer enthusiasts.",
    fullDescription: `
      After 30 years as a Cleveland institution, Great Lakes Brewing Company underwent a comprehensive rebranding to modernize their image while honoring their heritage as Ohio's first craft brewery.
      
      Cleveland Vibes was brought in to develop and execute a content strategy that would communicate the rebrand to local audiences authentically. Our approach focused on storytelling that highlighted the brewery's history and connection to the community.
      
      The campaign included:
      
      • Documentary-style video series featuring brewery staff and long-time customers
      • Behind-the-scenes content showing the brewing process
      • Social media takeovers with local influencers
      • User-generated content contests
      • Targeted advertising to reach new demographics
      
      The result was a highly successful rebrand that maintained the loyalty of existing customers while attracting a new generation of craft beer enthusiasts.
    `,
    objectives: [
      "Communicate rebrand to existing customer base",
      "Attract younger demographic without alienating long-time fans",
      "Increase social media engagement by 40%",
      "Drive traffic to taproom and retail locations",
    ],
    approach:
      "We created a content strategy that balanced heritage and innovation, using authentic storytelling to connect with audiences. The campaign leveraged multiple channels and formats to showcase the human stories behind the brewery while highlighting their revamped visual identity.",
    results: [
      "Over 500,000 Cleveland locals reached",
      "67% increase in social media engagement",
      "23% increase in taproom visitors month-over-month",
      "Featured in local and national craft beer publications",
    ],
    testimonial: {
      quote:
        "Cleveland Vibes understood exactly what we needed - authentic content that honored our history while embracing our future. They know Cleveland beer drinkers better than anyone.",
      author: "Sarah Johnson",
      title: "Marketing Director, Great Lakes Brewing Co.",
    },
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    client: "Great Lakes Brewing Co.",
    slug: "great-lakes-brewery-rebrand",
    featured: true,
    services: [
      "Brand Strategy",
      "Content Creation",
      "Social Media Management",
      "Influencer Marketing",
    ],
  },
  {
    id: 3,
    title: "Rising Star Coffee Expansion",
    category: "Social Media Management",
    description:
      "Comprehensive social media campaign to promote the opening of three new locations, with custom content for each neighborhood.",
    fullDescription: `
      When Rising Star Coffee decided to expand from their original Ohio City location to three new neighborhoods simultaneously, they needed a strategic partner to build buzz and create distinct identities for each new shop.
      
      Cleveland Vibes developed a social media strategy that highlighted the unique character of each neighborhood while maintaining a consistent brand voice. Our campaign ran for three months, with targeted content leading up to each location's grand opening.
      
      The campaign included:
      
      • Neighborhood spotlight series
      • Staff introductions for each location
      • Limited-edition menu item reveals
      • Opening day event promotion
      • Partnerships with neighboring businesses
      
      Each new location launched to lines out the door, with strong social media engagement and community support.
    `,
    objectives: [
      "Build anticipation for each location opening",
      "Establish unique identity for each shop based on neighborhood",
      "Increase Instagram following by 50%",
      "Drive first-month sales targets",
    ],
    approach:
      "We created neighborhood-specific content that connected Rising Star to the local community in each area, while maintaining brand consistency. The campaign emphasized both the craft of coffee and the unique character of each Cleveland neighborhood.",
    results: [
      "78% increase in Instagram following",
      "Each location exceeded first-month sales targets by 15-30%",
      "Over 1,000 attendees across three opening events",
      "Successfully established distinct neighborhood identities",
    ],
    testimonial: {
      quote:
        "The neighborhood-specific approach Cleveland Vibes developed was brilliant. Each of our new locations had its own personality while still feeling part of the Rising Star family.",
      author: "Brandon Riggs",
      title: "Co-owner, Rising Star Coffee",
    },
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    client: "Rising Star Coffee",
    slug: "rising-star-expansion",
    featured: false,
    services: [
      "Social Media Management",
      "Content Creation",
      "Event Promotion",
      "Local Marketing",
    ],
  },
];

export default function PortfolioItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { slug } = params;

  const portfolioItem = portfolioItems.find((item) => item.slug === slug) || {
    id: 0,
    title: "Project Not Found",
    category: "",
    description: "This project does not exist",
    fullDescription: "This project does not exist",
    objectives: [],
    approach: "",
    results: [],
    testimonial: { quote: "", author: "", title: "" },
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    gallery: [],
    client: "",
    slug: "",
    featured: false,
    services: [],
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
            src={portfolioItem.image}
            alt={portfolioItem.title}
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
          <Badge className="bg-[#8a8a6d] hover:bg-[#8a8a6d]/80 mb-4">
            {portfolioItem.category}
          </Badge>
          <h1
            className={`${playfair.className} text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8`}
          >
            <TextReveal delay={0.8}>{portfolioItem.title}</TextReveal>
          </h1>
          <TextReveal delay={1.4}>
            <p className="text-sm sm:text-base md:text-lg mt-4 max-w-xl">
              Client: {portfolioItem.client}
            </p>
          </TextReveal>
        </motion.div>
      </section>

      {/* Back Link */}
      <section className="py-8 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-[#8a8a6d] hover:text-black transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SlideIn direction="left">
              <div>
                <h2 className={`${playfair.className} text-4xl font-bold mb-6`}>
                  OVERVIEW
                </h2>
                <div className="prose prose-lg max-w-none mb-6">
                  {portfolioItem.fullDescription
                    .split("\n")
                    .map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {portfolioItem.services.map((service, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-[#8a8a6d] text-[#8a8a6d]"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div>
                <h3 className="text-xl font-bold mb-4">Objectives</h3>
                <ul className="space-y-2 mb-8">
                  {portfolioItem.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#8a8a6d] mr-2">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mb-4">Approach</h3>
                <p className="mb-8">{portfolioItem.approach}</p>

                <h3 className="text-xl font-bold mb-4">Results</h3>
                <ul className="space-y-2">
                  {portfolioItem.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#8a8a6d] mr-2">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {portfolioItem.gallery.length > 0 && (
        <section className="py-16 px-6 bg-[#e0e4c4]">
          <div className="max-w-6xl mx-auto">
            <TextReveal>
              <h2 className={`${playfair.className} text-4xl font-bold mb-12`}>
                PROJECT
                <br />
                GALLERY
              </h2>
            </TextReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioItem.gallery.map((image, index) => (
                <FadeIn key={index} delay={0.1 * (index + 1)}>
                  <motion.div
                    className="relative h-64 overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={image}
                      alt={`${portfolioItem.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {portfolioItem.testimonial.quote && (
        <section className="py-16 px-6 bg-[#8a8a6d] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <SlideIn direction="up">
              <blockquote className="text-xl md:text-2xl italic mb-6">
                "{portfolioItem.testimonial.quote}"
              </blockquote>
              <cite className="not-italic">
                — {portfolioItem.testimonial.author},{" "}
                {portfolioItem.testimonial.title}
              </cite>
            </SlideIn>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2 className={`${playfair.className} text-4xl font-bold mb-12`}>
              RELATED
              <br />
              PROJECTS
            </h2>
          </TextReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems
              .filter((item) => item.slug !== portfolioItem.slug)
              .slice(0, 3)
              .map((item, index) => (
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
                        className="relative h-48"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </motion.div>
                      <div className="p-4">
                        <Badge
                          variant="outline"
                          className="mb-2 border-[#8a8a6d] text-[#8a8a6d]"
                        >
                          {item.category}
                        </Badge>
                        <h3 className="text-lg font-bold group-hover:text-[#8a8a6d] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </FadeIn>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#8a8a6d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              READY FOR
              <br />
              <span className="italic">YOUR PROJECT?</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business connect with
              Cleveland's most engaged audience.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="mt-8">
              <AnimatedButton href="/work-with-us">Work With Us</AnimatedButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </main>
  );
}
