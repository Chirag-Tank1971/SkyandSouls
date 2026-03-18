"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { portfolioItems, type PortfolioCategory } from "@/lib/site-data";

const categories: PortfolioCategory[] = [
  "All",
  "Weddings",
  "Corporate",
  "Private",
  "Destination",
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
              Portfolio
            </Badge>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A gallery of{" "}
              <span className="text-gradient">moments</span>.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
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
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 data-[state=active]:border-white/15 data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
              className="group glass glow-ring relative overflow-hidden rounded-3xl"
              data-gsap="reveal"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-sm font-semibold tracking-wide text-white">
                  {item.title}
                </div>
                <div className="mt-1 text-xs text-white/60">
                  {item.category} • {item.location}
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px 320px at 20% 20%, rgba(168, 85, 247, 0.18), transparent 60%), radial-gradient(420px 320px at 80% 10%, rgba(34, 211, 238, 0.14), transparent 60%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

