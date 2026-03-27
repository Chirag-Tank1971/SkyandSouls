"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { galleryImages } from "@/lib/site-data";

const sectionEase = [0.22, 1, 0.36, 1] as const;

function hashString(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function randomDelay(id: string, total: number) {
  const rank = randomRankById.get(id);
  if (rank === undefined || rank < 0) return 0;

  // Randomized order with consistent rhythm and max delay cap.
  const step = total > 16 ? 0.03 : 0.04;
  return Math.min(rank * step, 0.65);
}

const randomRankById = new Map(
  galleryImages
    .map((item) => ({ id: item.id, score: hashString(item.id) }))
    .sort((a, b) => a.score - b.score)
    .map((item, rank) => [item.id, rank] as const),
);

function randomOffset(id: string) {
  const hash = hashString(id);
  const direction = hash % 4;

  if (direction === 0) return { x: -14, y: 10 };
  if (direction === 1) return { x: 14, y: 10 };
  if (direction === 2) return { x: -10, y: 14 };
  return { x: 10, y: 14 };
}

export function GallerySection() {
  const reduceMotion = useReducedMotion();
  const [showAll, setShowAll] = useState(false);
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const syncColumns = () => {
      setColumns(window.innerWidth >= 768 ? 4 : 2);
    };

    syncColumns();
    window.addEventListener("resize", syncColumns);
    return () => window.removeEventListener("resize", syncColumns);
  }, []);

  const visibleCount = useMemo(() => {
    if (showAll) return galleryImages.length;
    return Math.min(galleryImages.length, columns * 9);
  }, [columns, showAll]);

  const visibleImages = useMemo(
    () => galleryImages.slice(0, visibleCount),
    [visibleCount],
  );

  const hasMore = visibleCount < galleryImages.length;

  return (
    <section
      id="gallery"
      className="cv-auto relative z-10 pt-12 pb-10 sm:pt-14 sm:pb-12"
    >
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="rounded-full border-border/60 bg-background/60 text-foreground/80 hover:bg-background/70">
              Gallery
            </Badge>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Moments of{" "}
              <span className="text-gradient">atmosphere</span>.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-foreground/60 sm:text-base">
            A glimpse of our celebrations—heritage venues, décor, and the joy in
            between.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-1 sm:gap-2 md:grid-cols-4">
          {visibleImages.map((item) => (
            <motion.div
              key={item.id}
              initial={reduceMotion ? false : { opacity: 0, ...randomOffset(item.id), scale: 0.985 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : randomDelay(item.id, galleryImages.length),
                ease: sectionEase,
              }}
              className="relative aspect-4/3 overflow-hidden bg-muted/40"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, 25vw"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {hasMore ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.45, ease: sectionEase }}
            className="mt-6 flex justify-center"
          >
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-full border border-border/60 bg-background/60 px-6 py-2.5 text-sm font-semibold tracking-wide text-foreground/80 transition hover:border-[#e8aa93]/50 hover:bg-background/80 hover:text-foreground"
            >
              View more
            </button>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
