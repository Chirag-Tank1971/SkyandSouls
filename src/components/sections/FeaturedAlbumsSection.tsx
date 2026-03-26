"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { featuredAlbums } from "@/lib/site-data";

export function FeaturedAlbumsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="cv-auto relative z-10 pt-4 pb-10 sm:pt-6 sm:pb-12">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="rounded-full border-border/60 bg-background/60 text-foreground/80 hover:bg-background/70">
              Featured albums
            </Badge>
            <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Visual stories your guests{" "}
              <span className="text-gradient">will remember</span>.
            </h2>
          </div>
          <a
            href="#gallery"
            className="text-sm font-semibold tracking-wide text-foreground/70 transition hover:text-foreground"
          >
            View full gallery
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredAlbums.map((album, index) => (
            <motion.a
              key={album.id}
              href="#gallery"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: index % 2 === 0 ? -42 : 42, y: 8 }
              }
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background/70"
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={album.imageSrc}
                  alt={album.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/72 via-black/35 to-transparent p-4">
                <div className="font-display text-lg font-semibold text-white">{album.title}</div>
                <div className="text-xs uppercase tracking-[0.14em] text-white/75">{album.subtitle}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
