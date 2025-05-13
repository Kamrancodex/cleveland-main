"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollingText } from "@/components/scrolling-text";
import { PackagesSection } from "@/components/packages-section";
import { ClientCard } from "@/components/client-card";
import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/animated-button";
import { ParallaxImage } from "@/components/parallax-image";
import { TextReveal } from "@/components/text-reveal";
import { AnimatedCursor } from "@/components/animated-cursor";
import { FadeIn, SlideIn, ScaleIn } from "@/components/motion-components";
import { X, Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
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
      <div
        className="grid grid-cols-1 md:grid-cols-2 bg-[#f5f5e6]"
        ref={heroRef}
      >
        {/* Left side - Image */}
        <motion.div
          className="bg-[#e0e4c4] flex items-center justify-center p-4 md:p-8 order-2 md:order-1"
          style={{ opacity, scale }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            className="relative w-full max-w-md aspect-square rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1575338129926-1dd58a5f3ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Cleveland skyline"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          className="flex flex-col justify-center p-6 md:p-12 order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h1
            className={`${playfair.className} text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8`}
          >
            <TextReveal delay={0.8}>CLEVELAND</TextReveal>
            <TextReveal delay={1.0}>
              <span className="italic">VIBES</span>
            </TextReveal>
            <TextReveal delay={1.2}>
              — YOUR <span className="italic">HYPE</span>
            </TextReveal>
            <TextReveal delay={1.4}>PERSON.</TextReveal>
          </h1>

          <TextReveal delay={1.6}>
            <p className="text-sm sm:text-base md:text-lg mt-4 max-w-xl">
              Cleveland's go-to lifestyle platform spotlighting where to go,
              what to eat, who to know, and why it all matters. For people who
              love this city on purpose.
            </p>
          </TextReveal>

          <TextReveal delay={1.8}>
            <div className="mt-8 md:mt-12">
              <AnimatedButton href="/where-to-go">
                Explore Cleveland
              </AnimatedButton>
            </div>
          </TextReveal>
        </motion.div>
      </div>

      {/* Scrolling Text */}
      <ScrollingText text="GLITTER AND A LITTLE GRIT · CLEVELAND'S HYPE MACHINE · FOR PEOPLE WHO LOVE THIS CITY ON PURPOSE" />

      {/* Packages Section */}
      <PackagesSection />

      {/* Clients Section */}
      <section className="py-16 px-6 bg-[#e0e4c4]">
        <TextReveal>
          <h2
            className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
          >
            FEATURED
            <br />
            PLACES
          </h2>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <ClientCard
                number="01"
                title="WEST SIDE MARKET/VIEW DETAILS →"
                image="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <ClientCard
                number="02"
                title="EDGEWATER PARK/VIEW DETAILS →"
                image="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <ClientCard
                number="03"
                title="CLEVELAND MUSEUM OF ART/VIEW DETAILS →"
                image="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              />
            </FadeIn>
          </div>
          <div className="hidden md:block">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Featured place"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* Freebie Section */}
      <section className="py-16 px-6 bg-[#f5f5e6] relative">
        <motion.div
          className="absolute top-4 right-8"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div className="bg-[#e0e4c4] rounded-full px-4 py-1 text-sm font-bold">
            FREE!
          </div>
        </motion.div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <SlideIn direction="left">
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6`}
            >
              GET OUR
              <br />
              INSIDER
              <br />
              <span className="italic">CITY GUIDE</span>
            </h2>
          </SlideIn>
          <SlideIn direction="right">
            <div>
              <motion.div
                className="relative h-64 w-full mb-6 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Coffee shop"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
              <p className="mb-6">
                Subscribe to our newsletter and get our exclusive guide to
                Cleveland's hidden gems. From secret speakeasies to the best
                coffee shops, we'll show you the city like a local.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-black text-white hover:bg-gray-800 relative overflow-hidden group">
                  <motion.span
                    className="absolute inset-0 bg-[#8a8a6d]"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">SUBSCRIBE</span>
                </Button>
              </motion.div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Next Level Section */}
      <section className="py-16 px-6 bg-[#8a8a6d] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <SlideIn direction="left">
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6`}
            >
              DISCOVER
              <br />
              CLEVELAND'S
              <br />
              BEST
            </h2>
            <p className="mb-6">
              Our interactive map features all the best spots in Cleveland, from
              restaurants and bars to parks and cultural attractions. Filter by
              category to find exactly what you're looking for.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#e0e4c4] text-black hover:bg-[#d5d9b9] relative overflow-hidden group">
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">EXPLORE THE MAP →</span>
              </Button>
            </motion.div>
          </SlideIn>
          <SlideIn direction="right">
            <motion.div
              className="relative h-80 w-full overflow-hidden rounded-sm"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cleveland park"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          </SlideIn>
        </div>
      </section>

      {/* Globe Section */}
      <section className="py-16 px-6 bg-[#e0e4c4]">
        <ScaleIn>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Team member"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            </motion.div>
            <motion.p
              className="text-sm mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              "I've always been a firm believer that Cleveland is a city worth
              celebrating. That's why I started Cleveland Vibes—to spotlight the
              amazing people, places, and experiences that make the 216 special.
              Whether it's a dive bar revival, rooftop opening, or Sunday
              market, we don't just report the culture, we help shape it."
            </motion.p>
            <motion.p
              className="font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Jessica Miller, Founder
            </motion.p>
          </div>
        </ScaleIn>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <TextReveal>
          <h2
            className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
          >
            MEET
            <br />
            THE TEAM
            <br />
            BEHIND IT ALL.
          </h2>
        </TextReveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <SlideIn direction="left">
            <p className="mb-6">
              We're a team of passionate Cleveland locals who love discovering
              and sharing the best our city has to offer. With backgrounds in
              journalism, photography, and social media, we bring a unique
              perspective to everything we cover.
            </p>
            <p className="mb-6">
              Our approach is authentic and community-focused. We take the time
              to build relationships with local businesses and creators,
              ensuring that our content truly captures the spirit of Cleveland.
            </p>
            <AnimatedButton href="/about">Learn More →</AnimatedButton>
          </SlideIn>
          <SlideIn direction="right">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="relative h-48 w-full overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Team members"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
              <motion.div
                className="relative h-48 w-full overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Team members"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-6 bg-[#f5f5e6] border-t border-[#e0e4c4]">
        <TextReveal>
          <h2
            className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
          >
            NEW ON THE BLOG
          </h2>
        </TextReveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <motion.div
              className="border border-[#e0e4c4] p-4 h-full"
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative h-48 w-full mb-4 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Blog post"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 group">
                <Link
                  href="/blog/best-coffee-shops"
                  className="relative inline-block group"
                >
                  10 BEST COFFEE SHOPS IN CLEVELAND →
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-[#8a8a6d]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </h3>
              <p className="text-sm">
                From cozy neighborhood cafes to sleek downtown spots, we've
                rounded up the best places to get your caffeine fix in the 216.
              </p>
            </motion.div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <motion.div
              className="border border-[#e0e4c4] p-4 h-full"
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative h-48 w-full mb-4 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1551614868-7d3b35eed775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Blog post"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">
                <Link
                  href="/blog/hidden-murals"
                  className="relative inline-block group"
                >
                  HIDDEN MURALS OF OHIO CITY →
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-[#8a8a6d]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </h3>
              <p className="text-sm">
                Discover the stunning street art that's transforming this
                neighborhood into an open-air gallery. We'll show you where to
                find the best murals and meet the artists behind them.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
