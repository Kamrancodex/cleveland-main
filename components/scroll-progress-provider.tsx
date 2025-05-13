"use client";

import { useEffect, ReactNode } from "react";

interface ScrollProgressProviderProps {
  children: ReactNode;
}

export function ScrollProgressProvider({
  children,
}: ScrollProgressProviderProps) {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTotal =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollDone = window.scrollY;
      const scrollPercent = scrollDone / scrollTotal || 0;
      document.documentElement.style.setProperty(
        "--scroll",
        `${scrollPercent * 100}%`
      );
    };

    // Update scroll position on mount
    updateScrollProgress();

    // Listen for scroll events
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    // Clean up event listener
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return <>{children}</>;
}
