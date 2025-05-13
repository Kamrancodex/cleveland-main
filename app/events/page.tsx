"use client";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { FeaturedEvents } from "@/components/featured-events";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { FadeIn, SlideIn } from "@/components/motion-components";
import { ScrollingText } from "@/components/scrolling-text";
import { useEffect, useState } from "react";
import { AnimatedButton } from "@/components/animated-button";
import { AnimatedCursor } from "@/components/animated-cursor";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function EventsPage() {
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
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Cleveland event"
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
            <TextReveal delay={0.8}>EVENTS</TextReveal>
            <TextReveal delay={1.0}>
              <span className="italic">CALENDAR</span>
            </TextReveal>
          </h1>
          <TextReveal delay={1.4}>
            <p className="text-sm sm:text-base md:text-lg mt-4 max-w-xl">
              Discover what's happening in Cleveland this week and beyond.
            </p>
          </TextReveal>
        </motion.div>
      </section>

      {/* Scrolling Text */}
      <ScrollingText text="CONCERTS · FESTIVALS · EXHIBITIONS · FOOD EVENTS · WORKSHOPS · COMMUNITY GATHERINGS · OUTDOOR ACTIVITIES" />

      {/* Events This Week */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              EVENTS
              <br />
              THIS WEEK
            </h2>
          </TextReveal>
          <FadeIn delay={0.2}>
            <FeaturedEvents />
          </FadeIn>
        </div>
      </section>

      {/* Submit Event CTA */}
      <section className="py-16 px-6 bg-[#8a8a6d] text-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <SlideIn direction="left">
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6`}
            >
              HAVE AN
              <br />
              EVENT TO
              <br />
              <span className="italic">SHARE?</span>
            </h2>
          </SlideIn>
          <SlideIn direction="right">
            <div>
              <p className="mb-8">
                Submit your event to be featured on Cleveland Vibes. We're
                always looking for the best happenings around the city.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#e0e4c4] text-black hover:bg-[#d5d9b9] relative overflow-hidden group">
                  <motion.span
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">SUBMIT AN EVENT →</span>
                </Button>
              </motion.div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6 bg-[#e0e4c4]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              COMING
              <br />
              SOON
            </h2>
          </TextReveal>
          <FadeIn delay={0.2}>
            <FeaturedEvents />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
