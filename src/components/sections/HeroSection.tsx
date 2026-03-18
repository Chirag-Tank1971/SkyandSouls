"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70 mask-[radial-gradient(60%_70%_at_50%_40%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-[min(1200px,calc(100%-2rem))] flex-col justify-center pb-28 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
              Premium event management
            </Badge>
            <Badge className="rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
              Weddings • Corporate • Private • Destination
            </Badge>
          </div>

          <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Curate moments.
            <br />
            <span className="text-gradient">Command emotion.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            SkyAndSouls designs luxury celebrations with cinematic storytelling
            and meticulous production—so your guests feel the atmosphere before
            they understand it.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact">
              <Button className="h-12 rounded-full bg-white px-6 text-black hover:bg-white/90">
                Book a consultation <ArrowRight className="ml-2 size-4" />
              </Button>
            </a>
            <a href="#portfolio">
              <Button
                variant="secondary"
                className="h-12 rounded-full border border-white/10 bg-white/5 px-6 text-white hover:bg-white/10"
              >
                Explore portfolio <Sparkles className="ml-2 size-4" />
              </Button>
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-3" data-gsap="reveal">
          {[
            {
              title: "Design-led",
              description: "Story-first concepts with editorial-level taste.",
            },
            {
              title: "Production-perfect",
              description: "Logistics, vendors, and timing executed with calm precision.",
            },
            {
              title: "Guest-obsessed",
              description: "Every touchpoint engineered for emotional impact.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass glow-ring rounded-3xl p-6 transition hover:translate-y-[-2px] hover:border-white/15"
            >
              <div className="text-sm font-semibold tracking-wide text-white">
                {item.title}
              </div>
              <div className="mt-2 text-sm leading-7 text-white/60">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          data-gsap="parallax"
          data-strength="90"
          className="pointer-events-none absolute right-[-160px] top-[160px] hidden h-[420px] w-[420px] rounded-full bg-linear-to-br from-purple-500/25 via-purple-500/10 to-cyan-300/10 blur-2xl lg:block"
        />
      </div>
    </section>
  );
}

