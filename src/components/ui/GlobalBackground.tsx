"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GlobalBackground() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 40;
    const symbols = ["</>", "{}", "01", "10", "[]", "=>", "()"];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      type: "dot" | "shape" | "symbol";
      symbol: string;
      depth: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.depth = Math.random() * 0.8 + 0.2; // 0.2 to 1.0
        this.size = (Math.random() * 2 + 1) * this.depth;
        this.speedX = (Math.random() * 0.4 - 0.2) * this.depth;
        this.speedY = (Math.random() * 0.4 - 0.2) * this.depth;
        this.opacity = (Math.random() * 0.3 + 0.1) * this.depth;
        
        const typeRand = Math.random();
        if (typeRand < 0.6) this.type = "dot";
        else if (typeRand < 0.85) this.type = "symbol";
        else this.type = "shape";
        
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`;
        ctx.shadowBlur = 10 * this.depth;
        ctx.shadowColor = "rgba(0, 240, 255, 0.5)";

        if (this.type === "dot") {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === "symbol") {
          ctx.font = `${Math.floor(12 * this.depth)}px 'JetBrains Mono'`;
          ctx.fillText(this.symbol, this.x, this.y);
        } else {
          ctx.strokeStyle = `rgba(0, 240, 255, ${this.opacity})`;
          ctx.lineWidth = 1 * this.depth;
          ctx.strokeRect(this.x, this.y, this.size * 2, this.size * 2);
        }
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted]);

  // Parallax for the gradient layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#020617]">
      {/* Deep Navy Gradient Layers */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#0a1a3a_0%,transparent_50%)] opacity-60"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#0f2a5c_0%,transparent_50%)] opacity-40"
      />
      
      {/* Animated Canvas Particles */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Subtle Scanlines / Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Vignette for cinematic feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
    </div>
  );
}
