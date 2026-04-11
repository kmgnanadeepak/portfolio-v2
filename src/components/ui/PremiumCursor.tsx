"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function PremiumCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const coreRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  
  // Target position (for magnetic effect)
  const targetX = useRef(0);
  const targetY = useRef(0);
  const isMagnetic = useRef(false);
  
  // Smooth position tracking for the ring (LERP)
  const ringX = useRef(0);
  const ringY = useRef(0);
  
  useEffect(() => {
    // Check if mobile/touch device
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      
      if (!isMagnetic.current) {
        targetX.current = e.clientX;
        targetY.current = e.clientY;
      }
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, [role="button"], .interactive');
      
      if (clickable) {
        setIsHovered(true);
        const rect = clickable.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Activate magnetic pull
        isMagnetic.current = true;
        targetX.current = centerX;
        targetY.current = centerY;
      } else {
        setIsHovered(false);
        isMagnetic.current = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleHoverStart);

    let animationFrameId: number;
    
    const animate = () => {
      // Magnetic pull smoothing for the core target
      if (isMagnetic.current) {
        // Core target follows mouse with a bit of pull towards center
        const pullStrength = 0.2;
        const dx = mouseX.current - targetX.current;
        const dy = mouseY.current - targetY.current;
        targetX.current += dx * pullStrength;
        targetY.current += dy * pullStrength;
      } else {
        targetX.current = mouseX.current;
        targetY.current = mouseY.current;
      }

      // Core: exact position
      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${targetX.current}px, ${targetY.current}px, 0)`;
      }
      
      // Ring: LERP follow (0.15 smoothing)
      const lerp = 0.15;
      ringX.current += (targetX.current - ringX.current) * lerp;
      ringY.current += (targetY.current - ringY.current) * lerp;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleHoverStart);
      window.removeEventListener("resize", checkMobile);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div className="premium-cursor-wrapper">
      {/* Outer Ring */}
      <div 
        ref={ringRef}
        className={`cursor-ring-container ${isHovered ? 'hovered' : ''}`}
      >
        <div className="cursor-ring" />
      </div>
      
      {/* Inner Core */}
      <div 
        ref={coreRef}
        className={`cursor-core-container ${isHovered ? 'hovered' : ''}`}
      >
        <div className="cursor-core" />
      </div>
    </div>
  );
}
