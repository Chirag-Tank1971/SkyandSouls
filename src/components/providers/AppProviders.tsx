"use client";

import { type PropsWithChildren, useEffect } from "react";
import Lenis from "lenis";

export function AppProviders({ children }: PropsWithChildren) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
      syncTouch: true,
      touchMultiplier: 1.2,
      smoothWheel: true,
      autoRaf: false,
    });

    let animationFrameId: number | null = null;

    const onAnimationFrame = (time: number) => {
      lenis.raf(time);
      animationFrameId = window.requestAnimationFrame(onAnimationFrame);
    };

    animationFrameId = window.requestAnimationFrame(onAnimationFrame);

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

