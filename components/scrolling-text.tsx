"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

interface ScrollingTextProps {
  text: string;
  speed?: number;
}

export function ScrollingText({ text, speed = 50 }: ScrollingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const marqueeText = Array(10).fill(text).join(" · ");
    container.innerHTML = marqueeText;

    const handleResize = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.scrollWidth;
        setContainerWidth(newWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [text]);

  useEffect(() => {
    if (containerWidth > 0) {
      // Calculate animation duration based on content width
      const duration = containerWidth / 100;

      animate(
        scope.current,
        { x: [-containerWidth / 2, -containerWidth] },
        {
          duration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }
      );
    }
  }, [containerWidth, animate, scope]);

  return (
    <div className="bg-[#e0e4c4] py-2 sm:py-3 overflow-hidden whitespace-nowrap">
      <div className="relative flex">
        <motion.div ref={scope} className="flex">
          <div
            ref={containerRef}
            className="inline-block text-xs sm:text-sm font-medium"
          />
          <div className="inline-block text-xs sm:text-sm font-medium">
            {Array(10).fill(text).join(" · ")}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
