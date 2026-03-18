"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  hueShift: number;
};

function generateParticles(particleCount: number, canvasWidth: number, canvasHeight: number) {
  const particles: Particle[] = [];
  for (let i = 0; i < particleCount; i += 1) {
    particles.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      velocityX: -0.08 + Math.random() * 0.16,
      velocityY: -0.06 + Math.random() * 0.12,
      hueShift: Math.random(),
    });
  }
  return particles;
}

export function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const updateCanvasSize = () => {
      const { innerWidth, innerHeight, devicePixelRatio } = window;
      const dpr = Math.min(1.5, devicePixelRatio || 1);
      canvas.width = Math.floor(innerWidth * dpr);
      canvas.height = Math.floor(innerHeight * dpr);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { width: innerWidth, height: innerHeight };
    };

    let { width: canvasWidth, height: canvasHeight } = updateCanvasSize();

    const isSmallScreen = canvasWidth < 768;
    const particleCount = Math.min(56, Math.max(22, Math.round(canvasWidth / (isSmallScreen ? 42 : 30))));
    let particles = generateParticles(particleCount, canvasWidth, canvasHeight);

    const onResize = () => {
      const next = updateCanvasSize();
      canvasWidth = next.width;
      canvasHeight = next.height;
      const nextIsSmallScreen = canvasWidth < 768;
      const nextParticleCount = Math.min(
        56,
        Math.max(22, Math.round(canvasWidth / (nextIsSmallScreen ? 42 : 30))),
      );
      particles = generateParticles(nextParticleCount, canvasWidth, canvasHeight);
    };

    window.addEventListener("resize", onResize, { passive: true });

    let lastFrameTime = 0;
    const targetFrameMs = isSmallScreen ? 42 : 33; // ~24fps on small screens, ~30fps elsewhere

    const render = (time: number) => {
      if (document.visibilityState === "hidden") {
        animationFrameIdRef.current = window.requestAnimationFrame(render);
        return;
      }

      if (time - lastFrameTime < targetFrameMs) {
        animationFrameIdRef.current = window.requestAnimationFrame(render);
        return;
      }
      lastFrameTime = time;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.globalCompositeOperation = "lighter";

      // Dots (very cheap) + a few connecting lines.
      for (const particle of particles) {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        if (particle.x < -18) particle.x = canvasWidth + 18;
        if (particle.x > canvasWidth + 18) particle.x = -18;
        if (particle.y < -18) particle.y = canvasHeight + 18;
        if (particle.y > canvasHeight + 18) particle.y = -18;

        const tint = particle.hueShift < 0.5 ? "200, 162, 200" : "231, 183, 164";
        context.fillStyle = `rgba(${tint}, 0.18)`;
        context.beginPath();
        context.arc(particle.x, particle.y, 1.35, 0, Math.PI * 2);
        context.fill();
      }

      // Sparse lines to add depth without heavy gradients.
      context.strokeStyle = "rgba(42,36,32,0.08)";
      context.lineWidth = 1;
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distanceSq = dx * dx + dy * dy;
          if (distanceSq < 120 * 120 && Math.random() < 0.022) {
            context.globalAlpha = Math.max(0.04, 1 - distanceSq / (120 * 120)) * 0.8;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
      animationFrameIdRef.current = window.requestAnimationFrame(render);
    };

    animationFrameIdRef.current = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", onResize);
      if (animationFrameIdRef.current !== null) {
        window.cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-1 opacity-30"
    />
  );
}

