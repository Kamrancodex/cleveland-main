"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Search, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { FadeIn, SlideIn } from "@/components/motion-components";
import { ScrollingText } from "@/components/scrolling-text";
import { AnimatedCursor } from "@/components/animated-cursor";
import { AnimatedButton } from "@/components/animated-button";

const playfair = Playfair_Display({ subsets: ["latin"] });

// This would typically come from a database or API
const blogData = {
  categories: [
    "All",
    "Food & Drink",
    "Local Guides",
    "Events",
    "Community",
    "Interviews",
  ],
  featuredPost: {
    id: 1,
    title: "The Ultimate Guide to Cleveland's Food Scene in 2023",
    excerpt:
      "From award-winning restaurants to hidden gems, discover the best places to eat and drink in Cleveland this year.",
    category: "Food & Drink",
    date: "September 15, 2023",
    author: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    slug: "ultimate-guide-cleveland-food-scene",
    tags: ["Food", "Restaurants", "Guides"],
  },
  posts: [
    {
      id: 2,
      title: "10 Hidden Gems in Cleveland's Art Scene",
      excerpt:
        "Beyond the major museums, Cleveland offers a wealth of smaller galleries and art spaces worth exploring.",
      category: "Local Guides",
      date: "August 28, 2023",
      author: "Michael Reynolds",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      slug: "hidden-gems-cleveland-art-scene",
      tags: ["Art", "Culture", "Local Guides"],
    },
    {
      id: 3,
      title: "Interview: The Brewers Behind Great Lakes Brewing",
      excerpt:
        "We sat down with the team at Great Lakes Brewing Company to discuss craft beer, sustainability, and Cleveland's brewing heritage.",
      category: "Interviews",
      date: "August 15, 2023",
      author: "Jessica Lee",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      slug: "interview-great-lakes-brewing",
      tags: ["Beer", "Interviews", "Local Business"],
    },
    {
      id: 4,
      title: "The Best Summer Events in Cleveland for 2023",
      excerpt:
        "From outdoor concerts to food festivals, here's your guide to the best events happening in Cleveland this summer.",
      category: "Events",
      date: "July 30, 2023",
      author: "David Thompson",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      slug: "best-summer-events-cleveland",
      tags: ["Events", "Summer", "Entertainment"],
    },
    {
      id: 5,
      title: "5 Cleveland Coffee Shops That Are Worth the Hype",
      excerpt:
        "We tried the most talked-about coffee shops in Cleveland to see which ones live up to their reputation.",
      category: "Food & Drink",
      date: "July 22, 2023",
      author: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      slug: "cleveland-coffee-shops-worth-the-hype",
      tags: ["Coffee", "Food & Drink", "Reviews"],
    },
    {
      id: 6,
      title:
        "Community Spotlight: The Organizations Revitalizing Cleveland Neighborhoods",
      excerpt:
        "Meet the local heroes working to transform and uplift Cleveland's diverse neighborhoods.",
      category: "Community",
      date: "July 10, 2023",
      author: "Michael Reynolds",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      slug: "community-spotlight-revitalizing-cleveland",
      tags: ["Community", "Local Heroes", "Neighborhoods"],
    },
    {
      id: 7,
      title: "A Local's Guide to Cleveland's Best Parks and Outdoor Spaces",
      excerpt:
        "From lakefront parks to hidden green spaces, here are the best places to enjoy the outdoors in Cleveland.",
      category: "Local Guides",
      date: "June 25, 2023",
      author: "Jessica Lee",
      image:
        "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      slug: "best-parks-outdoor-spaces-cleveland",
      tags: ["Outdoors", "Parks", "Local Guides"],
    },
  ],
};

export default function BlogPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredPosts = blogData.posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      categoryFilter === "All" || post.category === categoryFilter;

    return matchesSearch && matchesCategory;
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
            src="https://images.unsplash.com/photo-1512223792601-592a9809eed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Cleveland blogs"
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
            <TextReveal delay={0.8}>THE</TextReveal>
            <TextReveal delay={1.0}>
              <span className="italic">BLOG</span>
            </TextReveal>
          </h1>
          <TextReveal delay={1.4}>
            <p className="text-sm sm:text-base md:text-lg mt-4 max-w-xl">
              Stories, guides, and insights from Cleveland's most passionate
              locals.
            </p>
          </TextReveal>
        </motion.div>
      </section>

      {/* Scrolling Text */}
      <ScrollingText text="FOOD & DRINK · LOCAL GUIDES · EVENTS · COMMUNITY · INTERVIEWS · HIDDEN GEMS · CLEVELAND STORIES" />

      {/* Search and Filters */}
      <section className="py-8 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8a8a6d]" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 py-3 bg-white border border-[#8a8a6d]/20 focus:border-[#8a8a6d] outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
              {blogData.categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setCategoryFilter(category)}
                  className={`px-3 py-1 text-sm rounded-sm ${
                    categoryFilter === category
                      ? "bg-[#8a8a6d] text-white"
                      : "bg-[#e0e4c4] hover:bg-[#8a8a6d]/20"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-12`}
            >
              FEATURED
              <br />
              <span className="italic">ARTICLE</span>
            </h2>
          </TextReveal>

          <SlideIn direction="up">
            <Link
              href={`/blog/${blogData.featuredPost.slug}`}
              className="group"
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#e0e4c4] p-6 border border-[#8a8a6d]/20"
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <motion.div
                  className="relative h-64 md:h-full overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={blogData.featuredPost.image}
                    alt={blogData.featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#8a8a6d] hover:bg-[#8a8a6d]/80">
                    Featured
                  </Badge>
                </motion.div>
                <div className="flex flex-col justify-center">
                  <Badge
                    variant="outline"
                    className="mb-2 w-fit border-[#8a8a6d] text-[#8a8a6d]"
                  >
                    {blogData.featuredPost.category}
                  </Badge>
                  <h3
                    className={`${playfair.className} text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#8a8a6d] transition-colors`}
                  >
                    {blogData.featuredPost.title}
                  </h3>
                  <div className="flex items-center text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-2 text-[#8a8a6d]" />
                    <span>{blogData.featuredPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {blogData.featuredPost.author}</span>
                  </div>
                  <p className="mb-6">{blogData.featuredPost.excerpt}</p>
                  <div className="flex items-center text-[#8a8a6d] font-medium group-hover:underline">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </SlideIn>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 px-6 bg-[#f5f5e6]">
        <div className="max-w-6xl mx-auto">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              {searchTerm || categoryFilter !== "All" ? (
                <>
                  FILTERED
                  <br />
                  <span className="italic">RESULTS</span>
                </>
              ) : (
                <>
                  LATEST
                  <br />
                  <span className="italic">ARTICLES</span>
                </>
              )}
            </h2>
          </TextReveal>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl mb-4">No articles match your search</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("All");
                }}
                className="text-[#8a8a6d] underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <FadeIn key={post.id} delay={0.1 * (index + 1)}>
                  <Link href={`/blog/${post.slug}`} className="group h-full">
                    <motion.div
                      className="bg-white overflow-hidden border border-[#8a8a6d]/20 h-full flex flex-col"
                      whileHover={{
                        y: -10,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      }}
                    >
                      <motion.div
                        className="relative h-48"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </motion.div>
                      <div className="p-6 flex flex-col flex-grow">
                        <Badge
                          variant="outline"
                          className="mb-2 w-fit border-[#8a8a6d] text-[#8a8a6d]"
                        >
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#8a8a6d] transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-sm mb-4">
                          <Calendar className="h-4 w-4 mr-2 text-[#8a8a6d]" />
                          <span>{post.date}</span>
                        </div>
                        <p className="text-sm mb-4 flex-grow">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, tagIndex) => (
                            <div
                              key={tagIndex}
                              className="flex items-center text-xs text-[#8a8a6d]"
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center text-[#8a8a6d] font-medium group-hover:underline mt-auto">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-[#8a8a6d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              SUBSCRIBE TO
              <br />
              <span className="italic">OUR NEWSLETTER</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mb-8 max-w-2xl mx-auto">
              Get the latest stories, guides, and local insights delivered
              directly to your inbox.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 flex-grow bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
              />
              <motion.button
                className="px-6 py-3 bg-[#e0e4c4] text-[#8a8a6d] font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Write for Us CTA */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl font-bold mb-8`}
            >
              SHARE YOUR
              <br />
              <span className="italic">CLEVELAND STORY</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mb-8 max-w-2xl mx-auto">
              Are you passionate about Cleveland? Join our community of
              contributors and share your local insights and stories.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="mt-8">
              <AnimatedButton href="/write-for-us">Write For Us</AnimatedButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </main>
  );
}
