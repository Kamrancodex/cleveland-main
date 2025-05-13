"use client";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { FadeIn, SlideIn } from "@/components/motion-components";
import { ScrollingText } from "@/components/scrolling-text";
import { useEffect, useState } from "react";
import { AnimatedButton } from "@/components/animated-button";
import { AnimatedCursor } from "@/components/animated-cursor";

const playfair = Playfair_Display({ subsets: ["latin"] });

const team = [
  {
    id: 1,
    name: "Jessica Miller",
    role: "Founder & Creative Director",
    bio: "Cleveland native with a passion for discovering hidden gems and connecting people to the city's vibrant culture.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instagram: "jessicam",
    twitter: "jessicam",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Content Manager",
    bio: "Foodie, photographer, and storyteller who loves showcasing Cleveland's diverse culinary scene.",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instagram: "marcusj",
    twitter: "marcusj",
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Community Manager",
    bio: "Social media expert who builds authentic connections between Cleveland businesses and our audience.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instagram: "sophiac",
    twitter: "sophiac",
  },
];

export default function AboutPage() {
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
            src="https://images.unsplash.com/photo-1575338129926-1dd58a5f3ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Cleveland skyline"
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
            <TextReveal delay={0.8}>ABOUT</TextReveal>
            <TextReveal delay={1.0}>
              <span className="italic">CLEVELAND</span>
            </TextReveal>
            <TextReveal delay={1.2}>VIBES</TextReveal>
          </h1>
          <TextReveal delay={1.4}>
            <p className="text-sm sm:text-base md:text-lg mt-4 max-w-xl">
              Meet the team behind Cleveland's hype machine.
            </p>
          </TextReveal>
        </motion.div>
      </section>

      {/* Scrolling Text */}
      <ScrollingText text="GLITTER AND A LITTLE GRIT · CLEVELAND'S HYPE MACHINE · FOR PEOPLE WHO LOVE THIS CITY ON PURPOSE" />

      {/* Our Story */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <div className="max-w-4xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              OUR
              <br />
              STORY
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <SlideIn direction="left">
              <div className="prose prose-lg max-w-none">
                <p>
                  Cleveland Vibes started in 2020 as an Instagram account
                  showcasing the best spots in the city. What began as a passion
                  project quickly grew into Cleveland's go-to lifestyle
                  platform.
                </p>
                <p>
                  We believe that Cleveland is a city worth celebrating—from its
                  world-class cultural institutions to its neighborhood dive
                  bars, from lakefront sunsets to hidden street art. Our mission
                  is to spotlight where to go, what to eat, who to know, and why
                  it all matters.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div className="prose prose-lg max-w-none">
                <p>
                  As locals who love this city on purpose, we're committed to
                  creating content that captures both the glitter and the grit
                  of Cleveland. We don't just report the culture—we help shape
                  it.
                </p>
                <p>
                  Cleveland Vibes is the flagship brand of ActuallySocial.Media,
                  a creative agency specializing in authentic local content.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 bg-[#e0e4c4]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              MEET
              <br />
              THE TEAM
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <FadeIn key={member.id} delay={0.1 * (index + 1)}>
                <motion.div
                  className="bg-[#f5f5e6] overflow-hidden border border-[#8a8a6d]"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative h-80"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#8a8a6d] font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex space-x-2">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          href={`https://instagram.com/${member.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8a8a6d] hover:text-black"
                        >
                          <Instagram className="h-5 w-5" />
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          href={`https://twitter.com/${member.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8a8a6d] hover:text-black"
                        >
                          <Twitter className="h-5 w-5" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 bg-[#8a8a6d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              OUR MISSION
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="text-xl md:text-2xl mb-8">
              "To be Cleveland's hype machine, celebrating the city's culture
              and connecting people to experiences that make them fall in love
              with the 216 all over again."
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              WANT TO
              <br />
              WORK WITH US?
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mb-8 max-w-2xl mx-auto">
              From feature inquiries to content packages, we help brands connect
              authentically with Cleveland's culture.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="mt-8">
              <AnimatedButton href="/work-with-us">Learn More</AnimatedButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </main>
  );
}
