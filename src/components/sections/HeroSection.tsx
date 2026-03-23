"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const heroSlides = [
  "/portfolio/the-lalit-jaipur.jpg",
  "/portfolio/umaid-bhawan-palace-jodhpur.webp",
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={heroSlides[activeSlide]}
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroSlides[activeSlide]}')` }}
          initial={{ opacity: 0, scale: 1.08, x: 18 }}
          animate={{ opacity: 1, scale: 1.02, x: 0 }}
          exit={{ opacity: 0, scale: 1.01, x: -18 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12)_20%,rgba(0,0,0,0.65)_100%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-[min(1200px,calc(100%-2rem))] flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="font-display text-sm tracking-[0.42em] text-white/80 sm:text-base">
            DELIVERING SPECTACULAR EVENTS
          </p>

          <h1 className="font-display mt-7 text-5xl font-semibold leading-[1.08] tracking-wide text-white sm:text-6xl lg:text-8xl">
            SKYANDSOUL
            <br />
            <span className="text-[0.88em] tracking-[0.2em]">EVENTZ &amp; DESIGN</span>
          </h1>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact">
              <Button className="h-12 rounded-full bg-[#e8aa93] px-9 text-sm font-semibold tracking-[0.12em] text-white hover:bg-[#d99782]">
                PLAN MY EVENT
              </Button>
            </a>
            <a href="#about">
              <Button
                variant="secondary"
                className="h-12 rounded-full border border-white/40 bg-white/10 px-9 text-sm font-semibold tracking-widest text-white hover:bg-white/20"
              >
                ABOUT US
              </Button>
            </a>
          </div>
          <p className="mt-3 text-xs font-medium tracking-[0.08em] text-white/80 sm:text-sm">
            Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}

