"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { servicePackages, services } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";

const serviceGradients: Record<string, string> = {
  wedding: "from-[#c8a2c8]/22 via-[#e7b7a4]/14 to-[#d4af37]/10",
  corporate: "from-[#d4af37]/12 via-[#c8a2c8]/10 to-white/20",
  private: "from-[#e7b7a4]/18 via-[#c8a2c8]/12 to-white/20",
  destination: "from-[#c8a2c8]/18 via-[#e7b7a4]/12 to-white/20",
};

export function ServicesSection() {
  return (
    <section id="services" className="cv-auto relative z-10 py-24 sm:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="rounded-full border-border/60 bg-background/60 text-foreground/80 hover:bg-background/70">
              Services
            </Badge>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Signature experiences,{" "}
              <span className="text-gradient">tailored</span> to you.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-foreground/60 sm:text-base">
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
                className={`absolute inset-0 bg-linear-to-br ${serviceGradients[service.key]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </div>
                  <div className="grid size-10 place-items-center rounded-2xl border border-border/60 bg-background/60">
                    <Sparkles className="size-4 text-foreground/70" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-foreground/60">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-foreground/65">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-linear-to-r from-[#c8a2c8] to-[#e7b7a4]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16" data-gsap="reveal">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge className="rounded-full border-border/60 bg-background/60 text-foreground/80 hover:bg-background/70">
                Service packages
              </Badge>
              <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Built for clarity,{" "}
                <span className="text-gradient">priced for planning</span>.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-foreground/60 sm:text-base">
              Choose the service depth you need. Every package can be adapted to
              your venue, guest count, and timeline.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.05,
                }}
                className="glass-lite glow-ring rounded-3xl p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                  {pkg.startingFrom}
                </div>
                <div className="font-display mt-3 text-xl font-semibold text-foreground">
                  {pkg.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-foreground/65">
                  {pkg.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-foreground/65">
                  {pkg.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-linear-to-r from-[#c8a2c8] to-[#e7b7a4]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

