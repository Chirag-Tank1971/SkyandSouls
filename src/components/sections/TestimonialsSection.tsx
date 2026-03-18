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
    <section id="testimonials" className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
              Testimonials
            </Badge>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Loved by clients who{" "}
              <span className="text-gradient">notice</span> everything.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
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
                      <div className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                        <Quote className="size-4 text-white/70" />
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-white/55">
                      {testimonial.role}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-white/65">
                      “{testimonial.quote}”
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 border-white/10 bg-black/30 text-white hover:bg-black/45" />
            <CarouselNext className="right-2 top-1/2 border-white/10 bg-black/30 text-white hover:bg-black/45" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

