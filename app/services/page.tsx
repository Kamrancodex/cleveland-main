"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { FadeIn, SlideIn } from "@/components/motion-components";
import { ScrollingText } from "@/components/scrolling-text";
import { AnimatedCursor } from "@/components/animated-cursor";
import { AnimatedButton } from "@/components/animated-button";

const playfair = Playfair_Display({ subsets: ["latin"] });

const services = [
  {
    id: "social-media",
    title: "Social Media Management",
    description:
      "We create, curate, and manage engaging social content across platforms that resonates with your target audience.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Content calendar planning",
      "Post creation and scheduling",
      "Community management",
      "Analytics and reporting",
      "Platform growth strategy",
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "High-quality, authentic content that tells your story and connects with Cleveland's vibrant community.",
    image:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Professional photography",
      "Videography and editing",
      "Blog and article writing",
      "Email newsletter content",
      "Custom graphics and visuals",
    ],
  },
  {
    id: "event-promotion",
    title: "Event Promotion",
    description:
      "Generate buzz and drive attendance to your events through our extensive local network.",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Pre-event promotion strategy",
      "Feature in our events calendar",
      "Social media coverage",
      "Influencer partnerships",
      "Post-event content package",
    ],
  },
  {
    id: "brand-partnerships",
    title: "Brand Partnerships",
    description:
      "Strategic collaborations that help your brand connect authentically with Cleveland's community.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Sponsored content creation",
      "Cross-promotional campaigns",
      "Influencer collaborations",
      "Custom content packages",
      "Audience targeting strategy",
    ],
  },
];

export default function ServicesPage() {
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
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Cleveland services"
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
              <span className="italic">SERVICES</span>
            </TextReveal>
          </h1>
          <TextReveal delay={1.4}>
            <p className="text-sm sm:text-base md:text-lg mt-4 max-w-xl">
              We help brands connect authentically with Cleveland's most engaged
              audience.
            </p>
          </TextReveal>
        </motion.div>
      </section>

      {/* Scrolling Text */}
      <ScrollingText text="CONTENT CREATION · SOCIAL MEDIA · BRAND PARTNERSHIPS · EVENT PROMOTION · LOCAL EXPERTISE · AUTHENTIC STORYTELLING" />

      {/* Services Overview */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              HOW WE CAN
              <br />
              HELP YOUR
              <br />
              <span className="italic">BUSINESS</span>
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <SlideIn direction="left">
              <div className="prose prose-lg max-w-none">
                <p>
                  Cleveland Vibes offers specialized services to help your
                  business thrive in Cleveland's vibrant community. With our
                  deep local connections and engaged audience, we create
                  authentic content and experiences that resonate.
                </p>
                <p>
                  Our team combines local expertise with digital marketing savvy
                  to help your brand stand out in Cleveland's competitive
                  landscape. Whether you're a new restaurant looking to build
                  buzz or an established business wanting to connect with new
                  customers, we have solutions tailored to your needs.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <motion.div
                className="relative h-64 w-full overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Cleveland team working"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-6 bg-[#e0e4c4]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              OUR
              <br />
              SERVICES
            </h2>
          </TextReveal>

          <div className="grid gap-16">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={0.1 * (index + 1)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    className={`relative h-64 w-full overflow-hidden order-1 ${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </motion.div>
                  <div
                    className={index % 2 === 0 ? "md:order-2" : "md:order-1"}
                  >
                    <h3
                      className={`${playfair.className} text-3xl font-bold mb-4`}
                    >
                      {service.title}
                    </h3>
                    <p className="mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#8a8a6d] mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies CTA */}
      <section className="py-16 px-6 bg-[#8a8a6d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              SEE OUR
              <br />
              <span className="italic">WORK</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mb-8 max-w-2xl mx-auto">
              Check out our portfolio to see how we've helped Cleveland
              businesses grow and connect with their audience.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="mt-8">
              <AnimatedButton href="/portfolio">View Portfolio</AnimatedButton>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
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
              Cleveland's most engaged audience.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="mt-8">
              <AnimatedButton href="/work-with-us">Get Started</AnimatedButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </main>
  );
}
