"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import InteractiveCard from "@/components/ui/InteractiveCard";

const capabilities = [
  {
    id: "01",
    title: "Full-Stack System Architecture",
    body: "Crafting end-to-end systems with clean architecture, modular design, and production-first thinking — built to scale beyond initial use.",
    color: "#00f0ff",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Backend Systems & API Design",
    body: "Engineering secure, high-performance APIs with structured data flow, authentication layers, and scalable backend logic.",
    color: "#8b5cf6",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Cloud-Native Deployments",
    body: "Packaging and deploying applications using containerized environments with scalable infrastructure and isolated execution layers.",
    color: "#ff4d6d",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Performance Engineering",
    body: "Designing systems that remain fast, stable, and responsive under load — optimizing both user experience and system efficiency.",
    color: "#eab308",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function ArchitectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="architect"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020617 0%, #0a1a3a 50%, #0f2a5c 100%)" }}
    >
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.3),transparent_70%)]" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="blob-cyan w-[700px] h-[700px] top-1/2 right-0 translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-label">02 / ARCHITECT</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent" />
        </motion.div>

        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-display font-extrabold leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4d6d] via-[#8b5cf6] via-[#3b82f6] to-[#00f0ff] opacity-[0.52]"
              style={{ filter: "drop-shadow(0 0 15px rgba(59,130,246,0.12))" }}
            >
              WHAT
            </span>
            <br />
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] via-[#3b82f6] via-[#8b5cf6] to-[#ff4d6d]"
              style={{ filter: "drop-shadow(0 0 20px rgba(0,240,255,0.15))" }}
            >
              I BRING
            </span>
          </motion.h2>
        </div>

        {/* Capabilities — grid on desktop */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
              className="h-full"
            >
              <InteractiveCard
                glowColor={`${cap.color}80`}
                className="h-full rounded-2xl overflow-hidden glass transition-all duration-300"
              >
                <div className="p-8 h-full relative z-10">
                  {/* Top Accent Border Highlight (Dynamic on hover) */}
                  <div 
                    className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{ background: `linear-gradient(90deg, transparent, ${cap.color}, transparent)` }}
                  />

                  {/* ID */}
                  <div className="font-mono text-[12px] font-bold tracking-[0.4em] text-white/30 mb-6 uppercase">CAPABILITY_{cap.id}</div>

                  {/* Icon with Glow */}
                  <div
                    className="mb-6 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 relative"
                    style={{ 
                      color: cap.color, 
                      background: `${cap.color}10`, 
                      border: `1px solid ${cap.color}20`,
                      boxShadow: `0 0 15px ${cap.color}10`
                    }}
                  >
                    <div className="absolute inset-0 rounded-xl opacity-20 blur-md bg-current group-hover:opacity-40 transition-opacity" />
                    <span className="relative z-10">{cap.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl text-white mb-4 leading-tight transition-colors">
                    {cap.title}
                  </h3>

                  {/* Body */}
                  <p className="text-[#94a3b8] font-body text-base leading-relaxed transition-colors group-hover:text-white/80">
                    {cap.body}
                  </p>

                  {/* Bottom accent line highlight */}
                  <div
                    className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{ background: `linear-gradient(90deg, ${cap.color}, transparent)` }}
                  />
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-cyan rounded-2xl p-8 md:p-14 relative overflow-hidden"
        >
          <div className="font-display text-4xl md:text-6xl text-cyan-400/10 absolute top-4 left-4 md:left-8 leading-none select-none">"</div>
          <blockquote className="relative z-10 text-center">
            <p className="font-display font-bold text-xl md:text-3xl text-white/80 leading-tight mb-4">
              If it doesn’t survive production, it was never built right.
            </p>
            <cite className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] text-white/25 not-italic uppercase">
              — KM Gnana Deepak
            </cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
