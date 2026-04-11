"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  { text: "INITIALIZING SYSTEM...", delay: 0, color: "#64748b" },
  { text: "LOADING KERNEL MODULES", delay: 0.4, color: "#64748b" },
  { text: "MOUNTING /dev/creativity", delay: 0.8, color: "#00f0ff" },
  { text: "SPAWNING PROCESS: full-stack-engineer", delay: 1.2, color: "#8b5cf6" },
  { text: "CONNECTING TO: production-grade-systems", delay: 1.6, color: "#3b82f6" },
  { text: "STATUS: ONLINE ✓", delay: 2.0, color: "#10b981" },
];

export default function SystemBoot() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showMain, setShowMain] = useState(false);
  const [particlePositions] = useState(() =>
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
    }))
  );

  useEffect(() => {
    bootLines.forEach((_, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1);
        if (i === bootLines.length - 1) {
          setTimeout(() => {
            setShowMain(true);
            window.dispatchEvent(new CustomEvent("system-online"));
          }, 800);
        }
      }, bootLines[i].delay * 1000);
    });
  }, []);

  return (
    <section
      id="boot"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-[140px] pb-20"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,240,255,0.06) 0%, transparent 70%), #020617" }}
    >
      {/* Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Ambient blobs */}
      <div className="blob-cyan w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="blob-violet w-[400px] h-[400px] top-1/4 right-1/4" />
      <div className="blob-rose w-[300px] h-[300px] bottom-1/3 left-1/5" />

      {/* Particles */}
      {particlePositions.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{ y: [-20, 20, -20], opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Corner brackets */}
      <div className="absolute top-[110px] left-6 md:left-12 w-16 h-16 border-l border-t border-cyan-400/20" />
      <div className="absolute top-[110px] right-6 md:right-12 w-16 h-16 border-r border-t border-cyan-400/20" />
      <div className="absolute bottom-8 left-6 md:left-12 w-16 h-16 border-l border-b border-cyan-400/20" />
      <div className="absolute bottom-8 right-6 md:right-12 w-16 h-16 border-r border-b border-cyan-400/20" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        <AnimatePresence mode="wait">
          {!showMain && (
            <motion.div
              key="boot-terminal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              style={{ 
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)"
              }}
              className="mb-12 font-mono text-xs text-left inline-block w-full max-w-[320px] md:max-w-none"
            >
              <div className="glass border border-white/10 rounded px-4 md:px-6 py-4 min-w-full md:min-w-[300px]">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-white/20 text-[9px] tracking-widest">SYSTEM/BOOT</span>
                </div>
                <div className="space-y-1.5">
                  {bootLines.slice(0, visibleLines).map((line, i) => (
                    <div key={i} className="flex gap-2 text-[10px] md:text-xs" style={{ color: line.color }}>
                      <span className="text-white/20">$</span>
                      <span className="break-words">{line.text}</span>
                      {i === visibleLines - 1 && i < bootLines.length - 1 && (
                        <span className="animate-blink">█</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showMain && (
            <motion.div
              key="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              style={{ 
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)"
              }}
              className="flex flex-col items-center"
            >
              {/* Main Identity */}
              <div className="flex flex-col items-center">
                {/* Label */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.4, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="section-label mb-6 flex items-center justify-center gap-3"
                >
                  <div className="h-px w-12 bg-cyan-400/30" />
                  <span>MERN Engineer — Built for Production | v2.0.26</span>
                  <div className="h-px w-12 bg-cyan-400/30" />
                </motion.div>

                {/* Name */}
                <div className="mb-6 overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1.1, 
                      delay: 0.5, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    style={{ 
                      fontSize: "clamp(2rem, 8vw, 10rem)",
                      willChange: "transform, opacity",
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)"
                    }}
                    className="font-display font-extrabold leading-none tracking-tighter"
                  >
                    <span className="text-white">KM </span>
                    <span className="hero-name-gradient">GNANA</span>
                  </motion.h1>
                </div>
                <div className="overflow-hidden mb-10">
                  <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1.1, 
                      delay: 0.6, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    style={{ 
                      fontSize: "clamp(2rem, 8vw, 10rem)",
                      willChange: "transform, opacity",
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)"
                    }}
                    className="font-display font-extrabold leading-none tracking-tighter"
                  >
                    <span className="hero-name-deepak">DEEPAK</span>
                  </motion.h1>
                </div>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.8, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="font-mono text-sm tracking-wider mb-12 max-w-xl mx-auto"
                >
                  <span className="text-white/40">I don’t just build apps.</span>{" "}
                  <span className="text-gradient-premium font-bold">I architect systems that endure scale.</span>
                  <br />
                  <span className="text-cyan-400/70">From code to cloud, everything is production-first.</span>
                </motion.p>

                {/* CTA cluster */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 1, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="flex flex-wrap items-center justify-center gap-4"
                >
                  <a href="#works" className="btn-accent btn-liquid px-8 py-3.5 rounded-sm font-display font-bold tracking-wider text-sm">
                    <div className="fill-layer" />
                    <span className="relative z-10">VIEW MY WORKS</span>
                  </a>
                  <a href="#architect" className="btn-shimmer btn-liquid px-8 py-3.5 rounded-sm flex items-center gap-2">
                    <div className="fill-layer" />
                    <span className="relative z-10 flex items-center gap-2">
                      <span>ABOUT ME</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </motion.div>

                {/* Social row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 1.2, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  style={{ 
                    willChange: "transform, opacity",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)"
                  }}
                  className="flex items-center justify-center gap-6 mt-16"
                >
                  {[
                    { label: "GH", href: "https://github.com/kmgnanadeepak" },
                    { label: "LI", href: "https://www.linkedin.com/in/kmgnanadeepak" },
                    { label: "LC", href: "https://leetcode.com/u/kmgnanadeepak/" },
                    { label: "IG", href: "https://instagram.com/i_dk_158" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] tracking-widest text-white/20 hover:text-cyan-400 transition-colors border-b border-transparent hover:border-cyan-400/40 pb-0.5"
                      data-hover
                    >
                      {s.label}
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showMain ? 1 : 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-white/20">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 h-4 bg-cyan-400"
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
