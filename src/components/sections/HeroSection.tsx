"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/site-data";

/** Smooth deceleration — soft land, no snap */
const heroEase = [0.22, 1, 0.36, 1] as const;

const titleContainer = {
  hidden: { opacity: 0 },
  visible: (reduce: boolean) => ({
    opacity: 1,
    transition: {
      staggerChildren: reduce ? 0 : 0.22,
      delayChildren: reduce ? 0 : 0.28,
    },
  }),
};

const titleLine = {
  hidden: (reduce: boolean) =>
    reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
  visible: (reduce: boolean) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: reduce ? 0.2 : 1.05,
      ease: heroEase,
    },
  }),
};

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const shouldUseLiteMotion = reduceMotion ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgParallaxY = useTransform(scrollYProgress, (progress) =>
    shouldUseLiteMotion ? 0 : progress * (isMobileViewport ? -36 : -90),
  );

  const contentParallaxY = useTransform(scrollYProgress, (progress) =>
    shouldUseLiteMotion ? 0 : progress * (isMobileViewport ? 14 : 28),
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const syncViewportMode = () => setIsMobileViewport(mediaQuery.matches);

    syncViewportMode();
    mediaQuery.addEventListener("change", syncViewportMode);
    return () => mediaQuery.removeEventListener("change", syncViewportMode);
  }, []);

  useEffect(() => {
    if (heroSlides.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute left-0 right-0 top-[-12%] h-[124%] w-full will-change-transform"
          style={{ y: bgParallaxY }}
        >
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={heroSlides[activeSlide]}
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${heroSlides[activeSlide]}')` }}
              initial={shouldUseLiteMotion ? { opacity: 0 } : { opacity: 0, scale: 1.08, x: 18 }}
              animate={shouldUseLiteMotion ? { opacity: 1 } : { opacity: 1, scale: 1.02, x: 0 }}
              exit={shouldUseLiteMotion ? { opacity: 0 } : { opacity: 0, scale: 1.01, x: -18 }}
              transition={{ duration: shouldUseLiteMotion ? 0.65 : 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12)_20%,rgba(0,0,0,0.65)_100%)]"
      />

      <motion.div
        style={{ y: contentParallaxY }}
        className="relative z-10 mx-auto flex min-h-screen w-[min(1200px,calc(100%-2rem))] flex-col items-center justify-center text-center will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, ease: heroEase }}
          className="max-w-4xl"
        >
          <motion.p
            className="font-display text-sm tracking-[0.42em] text-white/80 sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: heroEase, delay: 0.08 }}
          >
            DELIVERING SPECTACULAR EVENTS
          </motion.p>

          <motion.h1
            className={`font-display mt-7 text-5xl font-semibold leading-[1.08] tracking-wide sm:text-6xl lg:text-8xl ${
              reduceMotion
                ? "text-white [text-shadow:0_2px_48px_rgba(0,0,0,0.45)]"
                : "hero-title-gold-flow"
            }`}
            variants={titleContainer}
            custom={shouldUseLiteMotion}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="block"
              variants={titleLine}
              custom={shouldUseLiteMotion}
            >
              SKYANDSOUL
            </motion.span>
            <motion.span
              className="mt-1 block text-[0.88em] tracking-[0.2em]"
              variants={titleLine}
              custom={shouldUseLiteMotion}
            >
              EVENTZ &amp; DESIGN
            </motion.span>
          </motion.h1>

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
      </motion.div>
    </section>
  );
}

