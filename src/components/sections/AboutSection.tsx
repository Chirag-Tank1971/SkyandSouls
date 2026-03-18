"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge className="rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
              Our story
            </Badge>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              We orchestrate{" "}
              <span className="text-gradient">atmosphere</span>—not just events.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              SkyAndSouls was built on a simple belief: luxury is not loud—it’s
              precise. We blend design direction, production discipline, and
              hospitality intuition to craft experiences that feel effortless,
              immersive, and unforgettable.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Creative Direction",
                  description: "Concept, styling, and a coherent visual language.",
                },
                {
                  title: "End-to-end Management",
                  description: "Budgeting, vendors, timelines, and show-day control.",
                },
                {
                  title: "Luxury Hospitality",
                  description: "Guest journeys designed like a five-star stay.",
                },
                {
                  title: "Precision Logistics",
                  description: "Schedules, contingencies, and calm execution.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass glow-ring rounded-3xl p-5"
                  data-gsap="reveal"
                >
                  <div className="text-sm font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-white/60">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="relative"
          >
            <div className="glass glow-ring relative overflow-hidden rounded-3xl p-3">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/portfolio/violet-cathedral.svg"
                  alt="SkyAndSouls event design mood"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    Approach
                  </div>
                  <div className="mt-2 text-sm text-white/60">
                    Storyboards, mood worlds, and production plans that align every team.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    Outcome
                  </div>
                  <div className="mt-2 text-sm text-white/60">
                    Moments with intention—captured beautifully, remembered forever.
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              data-gsap="parallax"
              data-strength="70"
              className="pointer-events-none absolute -bottom-10 -left-10 hidden size-72 rounded-full bg-purple-500/15 blur-3xl lg:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

