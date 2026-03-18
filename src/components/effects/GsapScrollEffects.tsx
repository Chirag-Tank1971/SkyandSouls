"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GsapScrollEffects() {
  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });

    const lenis = (window as unknown as { __lenis?: { on: (e: string, cb: () => void) => void } })
      .__lenis;

    const onLenisScroll = () => {
      ScrollTrigger.update();
    };

    if (lenis) {
      lenis.on("scroll", onLenisScroll);
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-gsap='reveal']"),
    );

    // Best practice: animate only transform + opacity (avoid filter/blur).
    // Batch reduces the number of individual ScrollTriggers → smoother scroll on mid-range CPUs.
    const batchTriggers = ScrollTrigger.batch(sections, {
      start: "top 82%",
      once: true,
      onEnter: (batchElements) => {
        gsap.fromTo(
          batchElements,
          { autoAlpha: 0, y: 22, scale: 0.985 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.05,
            force3D: true,
          },
        );
      },
    });

    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-gsap='parallax']"),
    );

    const parallaxAnimations = parallaxElements.map((element) => {
      const strength = Number(element.dataset.strength ?? "60");
      return gsap.fromTo(
        element,
        { y: -strength * 0.35 },
        {
          y: strength * 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            fastScrollEnd: true,
          },
        },
      );
    });

    ScrollTrigger.refresh();

    return () => {
      // `ScrollTrigger.batch` returns an array of ScrollTriggers.
      for (const trigger of batchTriggers) {
        trigger.kill(true);
      }
      for (const animation of parallaxAnimations) {
        animation.scrollTrigger?.kill();
        animation.kill();
      }
      // Avoid a refresh during teardown; it can cause a noticeable hitch.
    };
  }, []);

  return null;
}

