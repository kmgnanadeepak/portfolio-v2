"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  magneticStrength?: number;
}

export default function InteractiveCard({ 
  children, 
  className = "", 
  glowColor = "rgba(0, 240, 255, 0.5)",
  magneticStrength = 15 
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Position tracking for LERP (Liquid Glow)
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  // Magnetic effect (still using Framer Motion for the card's subtle movement)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 15, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 100, damping: 15, mass: 0.8 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Animation loop for Liquid Glow (LERP effect)
    const animate = () => {
      if (glowRef.current) {
        // current += (target - current) * factor
        const lerpFactor = 0.12;
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

        // Apply position via translate3d for GPU acceleration
        glowRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    
    // Magnetic calculation (attraction toward cursor)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Movement is 5-15px max as requested
    x.set(distanceX / (rect.width / magneticStrength));
    y.set(distanceY / (rect.height / magneticStrength));

    // Glow calculation (local coordinates relative to card)
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        x: isMobile ? 0 : springX,
        y: isMobile ? 0 : springY,
        transformStyle: "preserve-3d",
      }}
      whileHover={isMobile ? {} : { scale: 1.05 }}
      className={`relative group transition-shadow duration-500 ${className}`}
    >
      {/* Liquid Glow Layer (Single) */}
      {!isMobile && (
        <div
          className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-[inherit]"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            ref={glowRef}
            className="absolute top-0 left-0 w-80 h-80 pointer-events-none z-0"
            style={{
              background: `radial-gradient(circle at center, ${glowColor}, transparent 65%)`,
              filter: "blur(25px)",
              willChange: "transform",
            }}
          />
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full flex flex-col">
        {children}
      </div>

      {/* Glassmorphism Reflections & Border */}
      {!isMobile && (
        <>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] border border-white/5 group-hover:border-white/10 transition-colors duration-500 z-20" />
          <div 
            className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.02) 100%)",
            }}
          />
        </>
      )}
    </motion.div>
  );
}
