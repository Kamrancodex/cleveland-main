"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Globe, ArrowLeft, Star } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { FadeIn, SlideIn } from "@/components/motion-components";
import { ScrollingText } from "@/components/scrolling-text";
import { AnimatedCursor } from "@/components/animated-cursor";
import { AnimatedButton } from "@/components/animated-button";

const playfair = Playfair_Display({ subsets: ["latin"] });

// This would typically come from a database or API
const placesData = {
  "west-side-market": {
    id: 1,
    title: "West Side Market",
    category: "Food & Drink",
    neighborhood: "Ohio City",
    image:
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Historic food market with dozens of local vendors offering fresh produce, meats, baked goods, and prepared foods.",
    fullDescription: `
      The West Side Market is Cleveland's oldest continuously operating municipally owned market, featuring over 100 vendors offering meats, seafood, fruits, vegetables, baked goods, dairy, flowers, ready-to-eat foods, and more.
      
      This iconic Cleveland landmark opened in 1912 and continues to serve as a gathering place for diverse cultures and food traditions. The building itself is a stunning example of neoclassical/Byzantine architecture, with its iconic clock tower and tiled interior.
      
      Locals and tourists alike flock to the market to experience the sights, sounds, and flavors that make it a true Cleveland institution.
    `,
    isVibesApproved: true,
    hours: [
      "Monday: Closed",
      "Tuesday: 8am-5pm",
      "Wednesday: 8am-5pm",
      "Thursday: 8am-5pm",
      "Friday: 8am-5pm",
      "Saturday: 8am-5pm",
      "Sunday: 10am-4pm",
    ],
    address: "1979 W 25th St, Cleveland, OH 44113",
    phone: "(216) 664-3387",
    website: "westsidemarket.org",
    coordinates: { lat: 41.4846, lng: -81.7031 },
    rating: 4.7,
    reviews: [
      {
        author: "Sarah J.",
        rating: 5,
        text: "This place is a Cleveland treasure! I love picking up fresh produce and stopping by the various food stands. Don't miss the gyros at Steve's or the crepes at Crepes de Luxe.",
      },
      {
        author: "Michael R.",
        rating: 4,
        text: "Great historic market with tons of options. Can get crowded on weekends but worth visiting. The architecture alone is worth seeing.",
      },
    ],
    nearbyPlaces: [
      {
        id: 4,
        title: "Great Lakes Brewing Company",
        slug: "great-lakes-brewing",
        image:
          "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: 5,
        title: "Rising Star Coffee",
        slug: "rising-star-coffee",
        image:
          "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1621436985878-33fef029de00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1601055283742-8b27e81b5553?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  "edgewater-park": {
    id: 2,
    title: "Edgewater Park",
    category: "Outdoors & Nature",
    neighborhood: "Detroit Shoreway",
    image:
      "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Expansive lakefront park with beaches, fishing pier, and skyline views.",
    fullDescription: `
      Edgewater Park is a 147-acre urban oasis along Lake Erie, offering stunning views of Cleveland's skyline and beautiful sunsets over the water.
      
      The park features a 900-foot swimming beach, fishing pier, boat ramps, picnic areas, and a network of recreational trails. The beach house provides modern amenities including food concessions and rentals.
      
      Throughout the year, Edgewater hosts events ranging from kite festivals to outdoor concerts, making it a favorite gathering spot for Clevelanders of all ages.
    `,
    isVibesApproved: true,
    hours: ["Open daily: 6am-11pm"],
    address: "6500 Cleveland Memorial Shoreway, Cleveland, OH 44102",
    phone: "(216) 635-3200",
    website:
      "clevelandmetroparks.com/parks/visit/parks/lakefront-reservation/edgewater-park",
    coordinates: { lat: 41.4896, lng: -81.735 },
    rating: 4.8,
    reviews: [
      {
        author: "Jessica L.",
        rating: 5,
        text: "Beautiful park with amazing views of the Cleveland skyline. The beach is well-maintained and perfect for swimming in summer. Great place to watch the sunset!",
      },
      {
        author: "David T.",
        rating: 5,
        text: "One of the best places in Cleveland to spend a nice day. Lots of space for picnics, a nice beach area, and good walking paths. Love bringing my dog to the dog beach area too!",
      },
    ],
    nearbyPlaces: [
      {
        id: 6,
        title: "Playhouse Square",
        slug: "playhouse-square",
        image:
          "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596995804697-27d11d43652e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  "cleveland-museum-of-art": {
    id: 3,
    title: "Cleveland Museum of Art",
    category: "Art & Culture",
    neighborhood: "University Circle",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "World-renowned art museum with free admission to its permanent collection.",
    fullDescription: `
      The Cleveland Museum of Art houses one of the most renowned art collections in the United States, with more than 61,000 works spanning 6,000 years of artistic achievement.
      
      Founded in 1913, the museum is known for its holdings of Asian and Egyptian art, as well as its modern, contemporary, and European paintings and sculptures. The museum completed a major renovation and expansion in 2013, including the stunning glass-enclosed atrium that serves as the central hub.
      
      What makes this institution even more special is that general admission to its permanent collection remains free to all, fulfilling the founders' vision of creating an art museum "for the benefit of all the people forever."
    `,
    isVibesApproved: false,
    hours: [
      "Tuesday, Thursday, Saturday, Sunday: 10am-5pm",
      "Wednesday, Friday: 10am-9pm",
      "Monday: Closed",
    ],
    address: "11150 East Blvd, Cleveland, OH 44106",
    phone: "(216) 421-7350",
    website: "clevelandart.org",
    coordinates: { lat: 41.509, lng: -81.6121 },
    rating: 4.9,
    reviews: [
      {
        author: "Robert K.",
        rating: 5,
        text: "World class museum with an incredible collection and it's FREE! The new atrium is stunning, and the digital displays throughout are very interactive and informative.",
      },
      {
        author: "Melissa P.",
        rating: 5,
        text: "One of the best art museums in the country. Great mix of ancient, classical, and modern art. The interactive gallery is fantastic for kids and adults alike.",
      },
    ],
    nearbyPlaces: [],
    gallery: [
      "https://images.unsplash.com/photo-1544900591-a1b918ec6900?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581260466292-23683ef7d618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574182022882-d68bd52c5350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
};

export default function PlaceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { slug } = params;

  const placeData = placesData[slug as keyof typeof placesData] || {
    id: 0,
    title: "Place Not Found",
    category: "",
    neighborhood: "",
    description: "This place does not exist",
    fullDescription: "",
    isVibesApproved: false,
    hours: [],
    address: "",
    phone: "",
    website: "",
    coordinates: { lat: 0, lng: 0 },
    rating: 0,
    reviews: [],
    nearbyPlaces: [],
    gallery: [],
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
            src={placeData.image}
            alt={placeData.title}
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
            {placeData.category}
          </Badge>
          <h1
            className={`${playfair.className} text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8`}
          >
            <TextReveal delay={0.8}>{placeData.title}</TextReveal>
          </h1>
          <TextReveal delay={1.4}>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(placeData.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-white"
                  }`}
                />
              ))}
              <span className="ml-2">{placeData.rating}/5</span>
            </div>
          </TextReveal>
        </motion.div>
      </section>

      {/* Back Link */}
      <section className="py-8 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/map"
            className="inline-flex items-center text-[#8a8a6d] hover:text-black transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Map
          </Link>
        </div>
      </section>

      {/* Place Info */}
      <section className="py-12 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <SlideIn direction="left" className="md:col-span-2">
              <div>
                <h2 className={`${playfair.className} text-4xl font-bold mb-6`}>
                  ABOUT
                </h2>
                <div className="prose prose-lg max-w-none mb-8">
                  {placeData.fullDescription
                    .split("\n")
                    .filter((line) => line.trim() !== "")
                    .map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                </div>

                {placeData.gallery.length > 0 && (
                  <>
                    <h3
                      className={`${playfair.className} text-2xl font-bold mb-4 mt-12`}
                    >
                      GALLERY
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {placeData.gallery.map((image, index) => (
                        <FadeIn key={index} delay={0.1 * (index + 1)}>
                          <motion.div
                            className="relative h-48 overflow-hidden"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Image
                              src={image}
                              alt={`${placeData.title} gallery image ${
                                index + 1
                              }`}
                              fill
                              className="object-cover transition-transform duration-700 hover:scale-110"
                            />
                          </motion.div>
                        </FadeIn>
                      ))}
                    </div>
                  </>
                )}

                {placeData.reviews.length > 0 && (
                  <>
                    <h3
                      className={`${playfair.className} text-2xl font-bold mb-4 mt-12`}
                    >
                      REVIEWS
                    </h3>
                    <div className="space-y-6">
                      {placeData.reviews.map((review, index) => (
                        <FadeIn key={index} delay={0.1 * (index + 1)}>
                          <div className="bg-white p-6 border border-[#8a8a6d]/20">
                            <div className="flex items-center mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="italic mb-2">"{review.text}"</p>
                            <p className="text-sm text-gray-600">
                              — {review.author}
                            </p>
                          </div>
                        </FadeIn>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </SlideIn>

            <SlideIn direction="right" className="md:col-span-1">
              <div className="bg-[#e0e4c4] p-6 border border-[#8a8a6d]/20 h-fit sticky top-8">
                <h3 className={`${playfair.className} text-xl font-bold mb-4`}>
                  DETAILS
                </h3>

                {placeData.isVibesApproved && (
                  <div className="mb-4">
                    <Badge className="bg-[#8a8a6d] hover:bg-[#8a8a6d]/80">
                      Vibes Approved
                    </Badge>
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#8a8a6d] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Address</h4>
                      <p>{placeData.address}</p>
                    </div>
                  </div>

                  {placeData.hours.length > 0 && (
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-[#8a8a6d] mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold">Hours</h4>
                        <ul className="text-sm">
                          {placeData.hours.map((hour, index) => (
                            <li key={index}>{hour}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {placeData.phone && (
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-[#8a8a6d] mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold">Phone</h4>
                        <p>{placeData.phone}</p>
                      </div>
                    </div>
                  )}

                  {placeData.website && (
                    <div className="flex items-start">
                      <Globe className="h-5 w-5 text-[#8a8a6d] mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold">Website</h4>
                        <a
                          href={`https://${placeData.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8a8a6d] hover:underline"
                        >
                          {placeData.website}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative h-40 mb-6">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-sm">Map Location</p>
                      <p className="text-xs mt-1">
                        {placeData.coordinates.lat.toFixed(4)},{" "}
                        {placeData.coordinates.lng.toFixed(4)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="/map">
                    <motion.button
                      className="w-full py-3 bg-[#8a8a6d] text-white flex items-center justify-center"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      View on Map
                    </motion.button>
                  </Link>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      {placeData.nearbyPlaces && placeData.nearbyPlaces.length > 0 && (
        <section className="py-16 px-6 bg-[#e0e4c4]">
          <div className="max-w-6xl mx-auto">
            <TextReveal>
              <h2 className={`${playfair.className} text-4xl font-bold mb-12`}>
                NEARBY
                <br />
                PLACES
              </h2>
            </TextReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {placeData.nearbyPlaces.map((place, index) => (
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
                          src={place.image}
                          alt={place.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </motion.div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold group-hover:text-[#8a8a6d] transition-colors">
                          {place.title}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#8a8a6d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              DISCOVER
              <br />
              <span className="italic">MORE</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mb-8 max-w-2xl mx-auto">
              Explore more of Cleveland's vibrant neighborhoods and hidden gems.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <AnimatedButton href="/map">Explore Map</AnimatedButton>
              <AnimatedButton href="/where-to-go">
                Discover Guides
              </AnimatedButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </main>
  );
}
