"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="cv-auto relative z-10 py-24 sm:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="rounded-full border-border/60 bg-background/60 text-foreground/80 hover:bg-background/70">
              Testimonials
            </Badge>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Loved by clients who{" "}
              <span className="text-gradient">notice</span> everything.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-foreground/60 sm:text-base">
            Luxury is felt in the quiet details—listen to the people who experienced
            them.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
          data-gsap="reveal"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="glass glow-ring h-full rounded-3xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="grid size-10 place-items-center rounded-2xl border border-border/60 bg-background/60">
                        <Quote className="size-4 text-foreground/70" />
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-foreground/55">
                      {testimonial.role}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-foreground/65">
                      “{testimonial.quote}”
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 border-border/60 bg-background/80 text-foreground hover:bg-background" />
            <CarouselNext className="right-2 top-1/2 border-border/60 bg-background/80 text-foreground hover:bg-background" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

