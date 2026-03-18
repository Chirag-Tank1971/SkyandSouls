"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { services } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";

const serviceGradients: Record<string, string> = {
  wedding: "from-purple-500/25 via-purple-500/10 to-cyan-300/10",
  corporate: "from-cyan-300/20 via-purple-500/10 to-white/5",
  private: "from-purple-500/20 via-cyan-300/10 to-white/5",
  destination: "from-cyan-300/25 via-purple-500/10 to-white/5",
};

export function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
              Services
            </Badge>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Signature experiences,{" "}
              <span className="text-gradient">tailored</span> to you.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            From intimate soirées to global destination weekends—our team builds a
            luxury production around your story, your brand, and your guests.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass glow-ring group relative overflow-hidden rounded-3xl p-6"
              data-gsap="reveal"
            >
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-br ${serviceGradients[service.key]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="font-display text-xl font-semibold tracking-tight text-white">
                    {service.title}
                  </div>
                  <div className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                    <Sparkles className="size-4 text-white/70" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/65">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

