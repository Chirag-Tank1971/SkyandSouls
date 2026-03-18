"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
};

function generateParticles(particleCount: number, canvasWidth: number, canvasHeight: number) {
  const particles: Particle[] = [];
  for (let i = 0; i < particleCount; i += 1) {
    const radius = 0.8 + Math.random() * 2.2;
    particles.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      radius,
      opacity: 0.12 + Math.random() * 0.28,
      velocityX: (-0.18 + Math.random() * 0.36) * (radius / 2),
      velocityY: (-0.12 + Math.random() * 0.24) * (radius / 2),
    });
  }
  return particles;
}

export function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
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
      canvas.width = Math.floor(innerWidth * devicePixelRatio);
      canvas.height = Math.floor(innerHeight * devicePixelRatio);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      return { width: innerWidth, height: innerHeight };
    };

    let { width: canvasWidth, height: canvasHeight } = updateCanvasSize();

    const particleCount = Math.min(90, Math.max(44, Math.round(canvasWidth / 18)));
    let particles = generateParticles(particleCount, canvasWidth, canvasHeight);

    const onResize = () => {
      const next = updateCanvasSize();
      canvasWidth = next.width;
      canvasHeight = next.height;
      const nextParticleCount = Math.min(90, Math.max(44, Math.round(canvasWidth / 18)));
      particles = generateParticles(nextParticleCount, canvasWidth, canvasHeight);
    };

    window.addEventListener("resize", onResize, { passive: true });

    const render = () => {
      context.clearRect(0, 0, canvasWidth, canvasHeight);

      context.globalCompositeOperation = "lighter";

      for (const particle of particles) {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        if (particle.x < -30) particle.x = canvasWidth + 30;
        if (particle.x > canvasWidth + 30) particle.x = -30;
        if (particle.y < -30) particle.y = canvasHeight + 30;
        if (particle.y > canvasHeight + 30) particle.y = -30;

        const gradient = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          44,
        );
        gradient.addColorStop(0, `rgba(168, 85, 247, ${particle.opacity})`);
        gradient.addColorStop(0.55, `rgba(34, 211, 238, ${particle.opacity * 0.85})`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(particle.x, particle.y, 42 + particle.radius * 2, 0, Math.PI * 2);
        context.fill();
      }

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
      className="pointer-events-none fixed inset-0 z-[1] opacity-40"
    />
  );
}

