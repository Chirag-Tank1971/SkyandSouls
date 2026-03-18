"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  employees,
  mainOwners,
  portfolioItems,
  type PortfolioCategory,
} from "@/lib/site-data";

const categories: PortfolioCategory[] = [
  "All",
  "Weddings",
  "Corporate",
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioItems.filter(
        (item) => item.category === "Weddings" || item.category === "Corporate",
      );
    }
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="cv-auto relative z-10 py-24 sm:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="rounded-full border-border/60 bg-background/60 text-foreground/80 hover:bg-background/70">
              Portfolio
            </Badge>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              A gallery of{" "}
              <span className="text-gradient">moments</span>.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-foreground/60 sm:text-base">
            Hover to feel the mood. Filter to explore by celebration type.
          </p>
        </div>

        <div className="mt-10">
          <Tabs
            value={activeCategory}
            onValueChange={(value) => setActiveCategory(value as PortfolioCategory)}
          >
            <TabsList className="flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm text-foreground/70 data-[state=active]:border-border data-[state=active]:bg-background/85 data-[state=active]:text-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: Math.min(0.25, index * 0.04),
              }}
              className="group glass-lite glow-ring relative overflow-hidden rounded-3xl"
              data-gsap="reveal"
            >
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/85 via-background/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-sm font-semibold tracking-wide text-foreground">
                  {item.title}
                </div>
                <div className="mt-1 text-xs text-foreground/60">
                  {item.category} • {item.location}
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px 320px at 20% 20%, rgba(200, 162, 200, 0.18), transparent 60%), radial-gradient(420px 320px at 80% 10%, rgba(231, 183, 164, 0.16), transparent 60%)",
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16" data-gsap="reveal">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge className="rounded-full border-border/60 bg-background/60 text-foreground/80 hover:bg-background/70">
                Main owners
              </Badge>
              <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                The founders behind the{" "}
                <span className="text-gradient">craft</span>.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-foreground/60 sm:text-base">
              Three specialists—creative, production, and hospitality—working as
              one studio.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {mainOwners.map((owner, index) => (
              <motion.div
                key={owner.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.06,
                }}
                whileHover={{ y: -6 }}
                className="glass-lite glow-ring group overflow-hidden rounded-3xl p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="relative size-16 overflow-hidden rounded-2xl border border-border/60 bg-background/60">
                    <Image
                      src={owner.imageSrc}
                      alt={owner.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {owner.name}
                    </div>
                    <div className="mt-1 text-xs text-foreground/55">{owner.title}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-foreground/65">
                  {owner.specialty}
                </p>
                <div className="mt-6 h-px w-full bg-linear-to-r from-[#c8a2c8]/35 via-foreground/8 to-[#e7b7a4]/28" />
                <div className="mt-4 text-xs text-foreground/55">
                  Available worldwide • Studio-led delivery
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16" data-gsap="reveal">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge className="rounded-full border-border/60 bg-background/60 text-foreground/80 hover:bg-background/70">
                Team
              </Badge>
              <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Our team, one{" "}
                <span className="text-gradient">standard</span>.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-foreground/60 sm:text-base">
              The crew that turns concepts into a seamless, guest-first reality.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {employees.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: Math.min(0.25, index * 0.04),
                }}
                whileHover={{ y: -6 }}
                className="glass-lite glow-ring group overflow-hidden rounded-3xl p-5"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border/60 bg-background/60">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-sm font-semibold text-foreground">
                  {member.name}
                </div>
                <div className="mt-1 text-xs text-foreground/55">{member.title}</div>
                <p className="mt-3 text-sm leading-7 text-foreground/60">
                  {member.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

