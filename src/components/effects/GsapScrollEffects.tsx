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

    const animations = sections.map((element) => {
      const delay = Number(element.dataset.delay ?? "0");
      return gsap.fromTo(
        element,
        { autoAlpha: 0, y: 26, filter: "blur(6px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: element,
            start: "top 78%",
            end: "bottom 65%",
            toggleActions: "play none none reverse",
          },
        },
      );
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
      for (const animation of animations) {
        animation.scrollTrigger?.kill();
        animation.kill();
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

