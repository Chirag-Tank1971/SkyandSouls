"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  clientLogos,
  googleRating,
  socialProofStats,
  testimonials,
} from "@/lib/site-data";

export function SocialProofSection() {
  const highlightedTestimonials = testimonials.slice(0, 3);

  return (
    <section className="cv-auto relative z-10 py-16 sm:py-20">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="glass glow-ring rounded-3xl p-6 sm:p-8" data-gsap="reveal">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge className="rounded-full border-border/60 bg-background/60 text-foreground/80 hover:bg-background/70">
                Trusted by hosts and brands
              </Badge>
              <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Proven performance,{" "}
                <span className="text-gradient">premium execution</span>.
              </h2>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-sm text-foreground/75">
              <span className="font-semibold text-foreground">Google rating:</span>{" "}
              {googleRating.score}/5 ({googleRating.reviews}+ reviews)
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {socialProofStats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/55 bg-background/65 p-4"
              >
                <div className="font-display text-3xl font-semibold text-foreground">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-foreground/65">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
              Worked with
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="flex h-28 items-center justify-center rounded-xl border border-border/55 bg-background/65 px-4 py-3"
                >
                  <div className="relative h-16 w-full max-w-[220px]">
                    <Image
                      src={client.imageSrc}
                      alt={client.name}
                      fill
                      unoptimized
                      className="object-contain opacity-95 transition hover:opacity-100"
                      sizes="220px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {highlightedTestimonials.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-2xl border border-border/55 bg-background/70 p-4"
              >
                <p className="text-sm leading-7 text-foreground/70">"{item.quote}"</p>
                <div className="mt-3 text-xs font-semibold text-foreground/75">
                  {item.name} • {item.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
