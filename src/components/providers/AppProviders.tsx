"use client";

import { type PropsWithChildren, useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function AppProviders({ children }: PropsWithChildren) {
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
      syncTouch: true,
      touchMultiplier: 1.2,
      smoothWheel: true,
      autoRaf: false,
    });

    window.__lenis = lenis;

    let animationFrameId: number | null = null;

    const onAnimationFrame = (time: number) => {
      if (document.visibilityState === "hidden") {
        animationFrameId = window.requestAnimationFrame(onAnimationFrame);
        return;
      }
      lenis.raf(time);
      animationFrameId = window.requestAnimationFrame(onAnimationFrame);
    };

    animationFrameId = window.requestAnimationFrame(onAnimationFrame);

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      lenis.destroy();
      if (window.__lenis === lenis) {
        delete window.__lenis;
      }
    };
  }, []);

  return <>{children}</>;
}

