"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { experienceStats } from "@/lib/site-data";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

export function ExperienceSection() {
  return (
    <section id="experience" className="cv-auto relative z-10 pt-12 pb-10 sm:pt-14 sm:pb-12">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="rounded-full border-border/60 bg-background/60 text-foreground/80 hover:bg-background/70">
              Experience
            </Badge>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Proof in the{" "}
              <span className="text-gradient">details</span>.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-foreground/60 sm:text-base">
            Numbers don’t create emotion—but they do reveal consistency. Here’s
            what we’ve delivered, repeatedly.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {experienceStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.05,
              }}
              className="glass glow-ring rounded-3xl p-6"
              data-gsap="reveal"
            >
              <div className="font-display text-4xl font-semibold tracking-tight text-foreground">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-sm text-foreground/60">{stat.label}</div>
              <div className="mt-6 h-px w-full bg-linear-to-r from-[#c8a2c8]/35 via-foreground/8 to-[#e7b7a4]/25" />
              <div className="mt-4 text-sm leading-7 text-foreground/55">
                Measured across seasons, venues, and production scales.
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

