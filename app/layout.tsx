import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgressProvider } from "@/components/scroll-progress-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cleveland Vibes | Your Hype Person for All Things 216",
  description:
    "Cleveland's go-to lifestyle platform spotlighting where to go, what to eat, who to know, and why it all matters in the 216.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgressProvider>
            <Navigation />
            {children}
            <Footer />
          </ScrollProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
