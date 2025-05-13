"use client";

import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Tag, User, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { FadeIn, SlideIn } from "@/components/motion-components";
import { AnimatedCursor } from "@/components/animated-cursor";
import { AnimatedButton } from "@/components/animated-button";

// Define interfaces for the props
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  authorBio: string;
  authorImage: string;
  image: string;
  gallery: string[];
  tags: string[];
  relatedPosts: number[];
}

interface BlogPostClientProps {
  blogPost: BlogPost;
  relatedPostsData: any[];
  formattedContent: ReactNode;
  playfairClass: string;
}

export function BlogPostClient({
  blogPost,
  relatedPostsData,
  formattedContent,
  playfairClass,
}: BlogPostClientProps) {
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
            src={blogPost.image}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#8a8a6d]/50"></div>
        </motion.div>
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Badge className="bg-[#8a8a6d] hover:bg-[#8a8a6d]/80 mb-4">
            {blogPost.category}
          </Badge>
          <h1
            className={`${playfairClass} text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8 max-w-4xl`}
          >
            <TextReveal delay={0.8}>{blogPost.title}</TextReveal>
          </h1>
          <TextReveal delay={1.4}>
            <div className="flex items-center justify-center text-sm sm:text-base">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{blogPost.date}</span>
              <span className="mx-2">•</span>
              <span>By {blogPost.author}</span>
            </div>
          </TextReveal>
        </motion.div>
      </section>

      {/* Back Link */}
      <section className="py-8 px-6 bg-[#f5f5e6]">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#8a8a6d] hover:text-black transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 px-6 bg-[#f5f5e6]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-[#8a8a6d] text-[#8a8a6d]"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          <SlideIn direction="up">
            <div className="prose prose-lg max-w-none mb-12">
              {formattedContent}
            </div>
          </SlideIn>

          {/* Share Links */}
          <div className="flex items-center justify-between border-t border-b border-[#8a8a6d]/20 py-4 my-12">
            <div className="font-medium">Share this article:</div>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="h-10 w-10 rounded-full bg-[#8a8a6d] text-white flex items-center justify-center"
              >
                <Share2 className="h-5 w-5" />
              </motion.button>
            </div>
          </div>

          {/* Author Bio */}
          {blogPost.authorBio && (
            <FadeIn>
              <div className="bg-[#e0e4c4] p-6 border border-[#8a8a6d]/20 flex flex-col md:flex-row gap-6 items-center mb-12">
                <div className="relative h-24 w-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={blogPost.authorImage}
                    alt={blogPost.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <User className="h-4 w-4 mr-2 text-[#8a8a6d]" />
                    About {blogPost.author}
                  </h3>
                  <p>{blogPost.authorBio}</p>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Image Gallery */}
          {blogPost.gallery && blogPost.gallery.length > 0 && (
            <div className="mb-12">
              <h3 className={`${playfairClass} text-2xl font-bold mb-6`}>
                GALLERY
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {blogPost.gallery.map((image, index) => (
                  <FadeIn key={index} delay={0.1 * (index + 1)}>
                    <motion.div
                      className="relative h-64 overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={image}
                        alt={`${blogPost.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Articles */}
      {relatedPostsData.length > 0 && (
        <section className="py-16 px-6 bg-[#e0e4c4]">
          <div className="max-w-6xl mx-auto">
            <TextReveal>
              <h2 className={`${playfairClass} text-4xl font-bold mb-12`}>
                RELATED
                <br />
                <span className="italic">ARTICLES</span>
              </h2>
            </TextReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPostsData.map(
                (post, index) =>
                  post && (
                    <FadeIn key={post.id} delay={0.1 * (index + 1)}>
                      <Link
                        href={`/blog/${Object.keys(blogPost).find(
                          (key) => (blogPost as any)[key]?.id === post.id
                        )}`}
                        className="group"
                      >
                        <motion.div
                          className="bg-[#f5f5e6] overflow-hidden border border-[#8a8a6d]/20"
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
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-700 hover:scale-110"
                            />
                          </motion.div>
                          <div className="p-6">
                            <Badge
                              variant="outline"
                              className="mb-2 border-[#8a8a6d] text-[#8a8a6d]"
                            >
                              {post.category}
                            </Badge>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-[#8a8a6d] transition-colors">
                              {post.title}
                            </h3>
                            <div className="flex items-center text-sm mb-4">
                              <Calendar className="h-4 w-4 mr-2 text-[#8a8a6d]" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </FadeIn>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-[#8a8a6d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2
              className={`${playfairClass} text-5xl md:text-6xl font-bold mb-8`}
            >
              ENJOY THE
              <br />
              <span className="italic">ARTICLE?</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for more local insights, stories, and
              guides delivered directly to your inbox.
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

      {/* More Articles CTA */}
      <section className="py-16 px-6 bg-[#f5f5e6]">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2
              className={`${playfairClass} text-5xl md:text-6xl font-bold mb-8`}
            >
              DISCOVER
              <br />
              <span className="italic">MORE</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mb-8 max-w-2xl mx-auto">
              Explore more stories, guides, and local insights on our blog.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="mt-8">
              <AnimatedButton href="/blog">Back to Blog</AnimatedButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </main>
  );
}
