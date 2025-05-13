"use client";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { FadeIn, SlideIn } from "@/components/motion-components";
import { ScrollingText } from "@/components/scrolling-text";
import { useEffect, useState } from "react";
import { AnimatedButton } from "@/components/animated-button";
import { AnimatedCursor } from "@/components/animated-cursor";

const playfair = Playfair_Display({ subsets: ["latin"] });

const testimonials = [
  {
    id: 1,
    text: "Working with Cleveland Vibes was the best marketing decision we made this year. Their audience is engaged and they really understand the city.",
    author: "Sarah J., Restaurant Owner",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    text: "The response to our feature was immediate. We saw a 30% increase in foot traffic the weekend after our spotlight went live.",
    author: "Mike T., Brewery Manager",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    text: "Cleveland Vibes helped us reach a younger demographic we were struggling to connect with. Their content is authentic and their audience trusts them.",
    author: "Lisa M., Marketing Director",
    image:
      "https://images.unsplash.com/photo-1551614868-7d3b35eed775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

const packages = [
  {
    id: "basic",
    title: "Social Feature",
    price: "$299",
    description: "Perfect for new businesses or special events",
    features: [
      "Instagram Reel + TikTok",
      "Featured in our weekly newsletter",
      "Shared in our Stories",
      "Basic location tag on our map",
    ],
  },
  {
    id: "standard",
    title: "Full Spotlight",
    price: "$599",
    description: "Our most popular package for established businesses",
    features: [
      "Everything in Social Feature",
      "Custom blog post on our website",
      "Professional photography",
      "1 month of featured placement",
      "Vibes Approved badge",
    ],
    isFeatured: true,
  },
  {
    id: "premium",
    title: "Partnership",
    price: "$1,299",
    description: "Long-term collaboration for maximum exposure",
    features: [
      "Everything in Full Spotlight",
      "3 months of content coverage",
      "Event hosting opportunity",
      "Custom campaign strategy",
      "Detailed analytics report",
    ],
  },
];

export default function WorkWithUsPage() {
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
              src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
            src="/main-logo.png"
            alt="Cleveland business"
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
            <TextReveal delay={0.8}>WORK</TextReveal>
            <TextReveal delay={1.0}>
              <span className="italic">WITH US</span>
            </TextReveal>
          </h1>
          <TextReveal delay={1.4}>
            <p className="text-sm sm:text-base md:text-lg mt-4 max-w-xl">
              Connect with Cleveland's most engaged audience and showcase your
              business.
            </p>
          </TextReveal>
        </motion.div>
      </section>

      {/* Scrolling Text */}
      <ScrollingText text="PARTNERSHIPS · COLLABORATIONS · FEATURES · SOCIAL MEDIA · EVENTS · PROMOTIONS · CAMPAIGNS" />

      {/* Why Work With Us */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              WHY WORK
              <br />
              WITH US
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <motion.div
                className="bg-[#e0e4c4] p-6 border border-[#8a8a6d]"
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Engaged Local Audience
                </h3>
                <p>
                  Our followers are active, local, and passionate about
                  discovering new places in Cleveland. They trust our
                  recommendations and take action.
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.div
                className="bg-[#e0e4c4] p-6 border border-[#8a8a6d]"
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">Authentic Content</h3>
                <p>
                  We create genuine, high-quality content that resonates with
                  our audience. No generic ads—just real experiences that
                  showcase what makes your business special.
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.div
                className="bg-[#e0e4c4] p-6 border border-[#8a8a6d]"
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">Multi-Platform Reach</h3>
                <p>
                  From Instagram and TikTok to our website and newsletter, we
                  help you reach Cleveland's most active community across
                  multiple touchpoints.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-[#e0e4c4]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              WHAT OUR
              <br />
              PARTNERS SAY
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={0.1 * (index + 1)}>
                <motion.div
                  className="bg-[#f5f5e6] p-6 border border-[#8a8a6d]"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative h-48 mb-4 overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </motion.div>
                  <p className="italic mb-4">"{testimonial.text}"</p>
                  <p className="font-bold text-sm text-[#8a8a6d]">
                    {testimonial.author}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              OUR
              <br />
              PACKAGES
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <FadeIn key={pkg.id} delay={0.1 * (index + 1)}>
                <motion.div
                  className={`border overflow-hidden ${
                    pkg.isFeatured
                      ? "border-[#8a8a6d] relative border-2"
                      : "border-[#8a8a6d]"
                  }`}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {pkg.isFeatured && (
                    <motion.div
                      className="absolute top-0 right-0 bg-[#8a8a6d] text-white font-bold py-1 px-4 text-sm"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: [0, 3, 0, -3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        repeatDelay: 5,
                      }}
                    >
                      Most Popular
                    </motion.div>
                  )}
                  <div className="p-6 bg-[#e0e4c4]">
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <div className="text-3xl font-bold mb-4">{pkg.price}</div>
                    <p className="mb-6">{pkg.description}</p>
                    <ul className="space-y-2 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#8a8a6d] mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className={`w-full ${
                          pkg.isFeatured
                            ? "bg-[#8a8a6d] hover:bg-[#8a8a6d]/80 text-white"
                            : "bg-[#f5f5e6] text-[#8a8a6d] border border-[#8a8a6d] hover:bg-[#e0e4c4]"
                        }`}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-[#8a8a6d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              READY TO
              <br />
              <span className="italic">COLLABORATE?</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help showcase your business to
              Cleveland's most engaged audience. Fill out our form and we'll get
              back to you within 24 hours.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="mt-8">
              <AnimatedButton href="/contact">Contact Us</AnimatedButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </main>
  );
}
