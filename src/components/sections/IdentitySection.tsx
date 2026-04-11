"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "2+", label: "Industry\nInternships", color: "#00f0ff" },
  { value: "5+", label: "Major\nProjects", color: "#8b5cf6" },
  { value: "15+", label: "APIs Tested\n& Deployed", color: "#f43f5e" },
  { value: "100%", label: "Dedication\nMindset", color: "#fbbf24" },
];

const traits = [
  "End-to-End Application Engineering",
  "API Design & Backend Systems",
  "Cloud-Ready Deployments",
  "Docker Containerization",
  "CI/CD Pipeline Automation",
  "Performance Optimization",
];

export default function IdentitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="identity"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020617 0%, #0a1a3a 50%, #020617 100%)" }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="blob-violet w-[500px] h-[500px] top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-label">01 / IDENTITY</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent" />
        </motion.div>

        {/* Main grid: asymmetric 2-col */}
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">
          {/* Left: portrait placeholder + stat grid */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Avatar frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="relative mb-12 group/avatar"
            >
              <div className="glass-cyan rounded-2xl aspect-square w-[240px] md:w-[280px] flex items-center justify-center relative overflow-hidden p-3 border border-cyan-400/20 shadow-[0_0_20px_rgba(0,229,255,0.1)] group-hover/avatar:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-500">
                {/* Real Profile Image */}
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <motion.img 
                    src="/profile.png" 
                    alt="KM Gnana Deepak"
                    className="w-full h-full object-cover brightness-[0.85] contrast-[1.1] transition-all duration-500 group-hover/avatar:scale-110 group-hover/avatar:brightness-100"
                  />
                  {/* Subtle Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40" />
                  
                  {/* High-tech Scanning Effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                      className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                      animate={{ y: [0, 240, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>

                {/* Decorative Brackets Overlay */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
                  <div className="flex justify-between">
                    <span className="font-mono text-cyan-400/30 text-lg">{"["}</span>
                    <span className="font-mono text-cyan-400/30 text-lg">{"]"}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-mono text-cyan-400/30 text-[8px] tracking-widest uppercase">ID_DEEPAK</span>
                    <span className="font-mono text-cyan-400/30 text-lg">{"}"}</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 glass-cyan rounded-xl px-4 py-2.5 border border-cyan-400/20 z-20"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-widest text-white/60">AVAILABLE</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="glass rounded-xl p-5 border border-white/5 card-hover text-left"
                >
                  <div
                    className="font-display font-bold text-3xl mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest text-white/30 whitespace-pre-line uppercase leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: bio + traits */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display font-extrabold leading-[1.1] tracking-tight mb-8" style={{ fontSize: "clamp(1.75rem, 7vw, 4.5rem)" }}>
                <span className="text-white">I BUILD</span>
                <br />
                <span className="text-gradient-premium">PRODUCTION</span>
                <br />
                <span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4d6d] via-[#8b5cf6] via-[#3b82f6] to-[#00f0ff] opacity-[0.52]"
                  style={{ filter: "drop-shadow(0 0 15px rgba(59,130,246,0.12))" }}
                >
                  GRADE SYSTEMS
                </span>
              </h2>

              <p className="text-white/50 font-body leading-relaxed mb-4 text-lg">
                I build full-stack systems with{" "}
                <span className="text-cyan-400/80">MERN & Spring Boot Ecosystems</span>, designed to scale beyond local environments.

              </p>
             <p className="text-white/35 font-body leading-relaxed mb-12">
  From authentication to deployment pipelines — production isn’t the last step, it’s the baseline.
  <br />
  <span>
    My philosophy:{" "}
    <em className="text-violet-400/70 not-italic">
      "If it doesn’t survive production, it was never built right."
    </em>
  </span>
</p>

              {/* Traits list */}
              <div className="space-y-3">
                {traits.map((trait, i) => (
                  <motion.div
                    key={trait}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-4 group"
                    data-hover
                  >
                    <div className="font-mono text-[9px] text-white/15 w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="h-px w-8 bg-white/10 group-hover:w-16 group-hover:bg-cyan-400/40 transition-all duration-300" />
                    <span className="text-white/40 group-hover:text-white/80 transition-colors duration-300 font-body text-sm tracking-wide">
                      {trait}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
