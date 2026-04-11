"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import InteractiveCard from "@/components/ui/InteractiveCard";
import { 
  Server, 
  Code2, 
  Globe, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Zap, 
  Terminal,
  Activity,
  Workflow,
  Box,
  ChevronRight
} from "lucide-react";

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" ref={ref} className="relative py-32 overflow-hidden bg-[#020617]">
      {/* Background Ambience */}
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-24"
        >
          <span className="section-label">05 / EXPERIENCE JOURNEY</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent" />
        </motion.div>

        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-display font-extrabold leading-none tracking-tight mb-8 mobile-milestones-heading"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4d6d] via-[#8b5cf6] via-[#3b82f6] to-[#00f0ff] opacity-[0.52]"
              style={{ filter: "drop-shadow(0 0 15px rgba(59,130,246,0.12))" }}
            >
              PROFESSIONAL
            </span>
            <br />
            <span className="text-gradient-premium">MILESTONES</span>
          </motion.h2>
        </div>

        <div className="space-y-40">
          {/* JOURNEY ONE: THE PRODUCTION CORE (2026) */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-12 items-stretch"
            >
              {/* Left: System Dashboard Visual */}
              <div className="h-full">
                <InteractiveCard
                  glowColor="rgba(123, 79, 255, 0.6)"
                  className="h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden glass"
                >
                  <div className="p-6 md:p-10 relative z-10 flex flex-col justify-between h-full min-h-[400px] md:min-h-[450px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 -z-10" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8 md:mb-12">
                        <div className="flex items-center gap-3 md:gap-4 text-left">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#7B2FFF]/20 border border-[#7B2FFF]/30 flex items-center justify-center text-[#7B2FFF]">
                            <Cpu className="w-5 h-5 md:w-6 md:h-6" />
                          </div>
                          <div>
                            <h3 className="font-display font-black text-xl md:text-2xl text-white">SYSTEM STATUS</h3>
                            <p className="font-mono text-[8px] md:text-[10px] tracking-widest text-[#7B2FFF] uppercase">PRODUCTION ENVIRONMENT</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end group relative">
                          <span className="font-display font-black text-4xl md:text-5xl text-white/10 group-hover:text-white/20 transition-all mobile-decorative-year">2026</span>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-mono text-[8px] md:text-[9px] text-green-500/70 tracking-tighter">LIVE_SYNC</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group text-left">
                          <Activity className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                          <div className="font-display font-bold text-base md:text-lg text-white mb-1">LIVE SYSTEM API</div>
                          <div className="font-mono text-[8px] md:text-[9px] text-white/30 tracking-widest uppercase">ACTIVE</div>
                        </div>
                        <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group text-left">
                          <Workflow className="w-4 h-4 md:w-5 md:h-5 text-purple-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                          <div className="font-display font-bold text-base md:text-lg text-white mb-1">DEPLOYMENT STATUS</div>
                          <div className="font-mono text-[8px] md:text-[9px] text-white/30 tracking-widest uppercase">STABLE</div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mt-10 md:mt-12">
                      <div className="flex items-center gap-3 mb-3 md:mb-4">
                        <Terminal className="w-4 h-4 text-white/20" />
                        <span className="font-mono text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.3em]">Module_Logs</span>
                      </div>
                      <div className="font-mono text-[10px] md:text-[11px] text-[#7B2FFF]/70 space-y-1.5 md:space-y-2 bg-black/40 p-5 md:p-6 rounded-xl md:rounded-2xl border border-white/5 text-left">
                        <p className="break-all"><span className="text-white/20">&gt;</span> initializing full_stack_internship...</p>
                        <p className="break-all"><span className="text-white/20">&gt;</span> mounting cognifyz_technologies...</p>
                        <p className="break-all"><span className="text-white/20">&gt;</span> optimizing_backend_logic [DONE]</p>
                        <p className="animate-pulse"><span className="text-white/20">&gt;</span> status: <span className="text-green-400">OPTIMAL</span></p>
                      </div>
                    </div>
                  </div>
                </InteractiveCard>
              </div>

              {/* Right: Detailed Content */}
              <div className="flex flex-col justify-center py-4 md:py-8 text-left">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-[#7B2FFF]/10 border border-[#7B2FFF]/20 font-mono text-[9px] md:text-[10px] text-[#7B2FFF] tracking-widest uppercase mb-6">
                    Internship Experience
                  </div>
                  <h3 className="font-display font-black text-[1.75rem] md:text-5xl text-white mb-4 leading-[1.1] mobile-milestone-card-title">
                    Full Stack <br />
                    <span className="text-gradient-premium">Development</span>
                  </h3>
                  <p className="font-display font-bold text-lg md:text-xl text-white/60 mb-8">
                    @ Cognifyz Technologies
                  </p>
                  
                  <div className="space-y-6 md:space-y-8">
                    {[
                      { icon: <Code2 />, text: "Engineered end-to-end features connecting frontend and backend systems with efficient data handling and minimal latency." },
                      { icon: <ShieldCheck />, text: "Architected backend APIs with structured validation, secure access control, and scalable request handling." },
                      { icon: <Zap />, text: "Optimized application performance by eliminating bottlenecks and improving rendering efficiency across the UI." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 md:gap-6 items-start group">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center text-white/20 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all">
                          {item.icon}
                        </div>
                        <p className="text-white/40 text-base md:text-lg leading-relaxed pt-1 group-hover:text-white/80 transition-colors">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* JOURNEY TWO: THE PROJECT LAB (2025) */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col lg:flex-row-reverse gap-12 items-stretch"
            >
              {/* Right: System Architecture Panel */}
              <div className="lg:w-1/2">
                <InteractiveCard
                  glowColor="rgba(0, 240, 255, 0.6)"
                  className="h-full rounded-[2.5rem] overflow-hidden glass"
                >
                  <div className="relative h-full flex flex-col py-8 px-6 md:px-12">
                    {/* Panel Header */}
                    <div className="relative z-10 flex items-center gap-4 mb-16 border-b border-white/5 pb-6">
                      <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mobile-architecture-icon-hide">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-display font-black text-white tracking-tight text-xl uppercase mobile-architecture-fix">
                          MERN <span>Architecture</span>
                        </h4>
                        <p className="font-mono text-[9px] text-white/20 tracking-[0.3em] uppercase">Deployment Specification v1.0</p>
                      </div>
                    </div>

                    {/* Architecture Content - Vertical Structured Format */}
                    <div className="relative z-10 space-y-12 text-left">
                      {/* Authentication */}
                      <div className="group/item">
                        <span className="font-mono text-[10px] tracking-[0.4em] text-cyan-400/60 uppercase block mb-3">Authentication</span>
                        <div className="flex items-center gap-4">
                          <div className="h-px w-8 bg-purple-500/30 group-hover/item:w-12 transition-all duration-500" />
                          <p className="font-display font-bold text-xl text-white/80">
                            Token-Based Security (JWT)
                          </p>
                        </div>
                      </div>

                      {/* API Layer */}
                      <div className="group/item">
                        <span className="font-mono text-[10px] tracking-[0.4em] text-cyan-400/60 uppercase block mb-3">API Layer</span>
                        <div className="flex items-center gap-4">
                          <div className="h-px w-8 bg-cyan-500/30 group-hover/item:w-12 transition-all duration-500" />
                          <p className="font-display font-bold text-xl text-white/80 leading-tight">
                            Scalable REST Endpoints with Concurrent Handling
                          </p>
                        </div>
                      </div>

                      {/* Data Flow */}
                      <div className="group/item">
                        <span className="font-mono text-[10px] tracking-[0.4em] text-cyan-400/60 uppercase block mb-3">Data Flow</span>
                        <div className="flex items-center gap-4">
                          <div className="h-px w-8 bg-emerald-500/30 group-hover/item:w-12 transition-all duration-500" />
                          <div className="flex flex-wrap items-center gap-3 text-white/80 font-display font-bold text-lg">
                            <span>Client</span>
                            <ChevronRight className="w-4 h-4 text-white/20" />
                            <span>API</span>
                            <ChevronRight className="w-4 h-4 text-white/20" />
                            <span>Database</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Footer */}
                    <div className="mt-auto pt-16 relative z-10 flex items-center justify-between opacity-20 border-t border-white/5">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map(i => <div key={i} className="w-1 h-1 rounded-full bg-white" />)}
                      </div>
                      <span className="font-mono text-[8px] tracking-[0.5em] text-white uppercase">ISTUDIO_SYS_PANEL</span>
                    </div>
                  </div>
                </InteractiveCard>
              </div>

              {/* Left: Detailed Content */}
              <div className="lg:w-1/2 flex flex-col justify-center py-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 font-mono text-[10px] text-cyan-400 tracking-widest uppercase mb-6">
                    Project-Based Learning
                  </div>
                  <h3 className="font-display font-black text-5xl text-white mb-4 leading-none mobile-milestone-card-title">
                    Web <br />
                    <span className="text-gradient-premium">Engineering</span>
                  </h3>
                  <p className="font-display font-bold text-xl text-white/60 mb-8">
                    @ Internship Studio
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      "Architected a full-stack task management system with secure authentication and scalable data handling.",
                      "Built and optimized REST APIs enabling concurrent multi-user operations with efficient request processing.",
                      "Ensured system reliability through end-to-end validation of data flow and service interactions."
                    ].map((text, idx) => (
                      <div key={idx} className="flex gap-4 items-center group">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                        <p className="text-white/40 text-lg group-hover:text-white/80 transition-colors">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 group relative overflow-hidden">
                    <div className="flex flex-col">
                      <span className="font-display font-black text-5xl text-white/10 group-hover:text-white/20 transition-all mobile-decorative-year">2025</span>
                      <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">Timeline</span>
                    </div>
                    <div className="hidden sm:block h-12 w-px bg-white/5" />
                    <div className="flex flex-col">
                      <span className="font-display font-black text-4xl text-white/5 mobile-decorative-text">MERN</span>
                      <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">Specialization</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
