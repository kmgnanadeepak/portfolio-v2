"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import InteractiveCard from "@/components/ui/InteractiveCard";

const techSkills = [
  { name: "HTML / CSS", level: 90, color: "#FF6B35" },
  { name: "JavaScript", level: 90, color: "#F7DF1E" },
  { name: "React.js", level: 75, color: "#61DAFB" },
  { name: "Node.js & Express", level: 92, color: "#68A063" },
  { name: "REST APIs", level: 80, color: "#00E5FF" },
  { name: "MongoDB", level: 85, color: "#47A248" },
  { name: "SQL", level: 80, color: "#47A248" },
  { name: "Git & GitHub", level: 100, color: "#F05032" },
  { name: "Docker", level: 70, color: "#2496ED" },
  { name: "CI/CD Pipelines", level: 70, color: "#7B2FFF" },
];

const coreCS = [
  { name: "Data Structures & Algorithms", level: 85 },
  { name: "Time & Space Complexity", level: 95 },
  { name: "Computer Networking", level: 75 },
  { name: "Operating Systems", level: 75 },
  { name: "Object-Oriented Programming", level: 70 },
  { name: "Distributed Systems", level: 65 },
  { name: "System Design", level: 60 },
];

const techBadges = ["MongoDB", "Express.js", "React.js", "Node.js", "Docker", "AWS", "Git", "JWT", "REST API", "CI/CD", "Linux", "Postman", "JavaScript", "TypeScript", "HTML/CSS"];

function SkillBar({ name, level, color, delay, active }: { name: string; level: number; color?: string; delay: number; active: boolean }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors duration-300">{name}</span>
        <span className="font-mono text-[10px] tracking-wider" style={{ color: color || "#6B6882" }}>{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: active ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
          style={color ? { background: `linear-gradient(90deg, ${color}88, ${color})` } : {}}
        />
      </div>
    </div>
  );
}

export default function SkillMatrixSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setActive(true), 200);
    }
  }, [isInView]);

  return (
    <section
      id="stack"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020617 0%, #0a1a3a 50%, #020617 100%)" }}
    >
      {/* Tech grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(123,47,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="blob-violet w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-label">04 / SKILL MATRIX</span>
          <div className="h-px flex-1 bg-gradient-to-r from-violet-400/20 to-transparent" />
        </motion.div>

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display font-extrabold leading-none tracking-tight mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          <span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4d6d] via-[#8b5cf6] via-[#3b82f6] to-[#00f0ff] opacity-[0.52]"
            style={{ filter: "drop-shadow(0 0 15px rgba(59,130,246,0.12))" }}
          >
            TECH
          </span>
          <br />
          <span className="text-gradient-premium">STACK</span>
        </motion.h2>

        {/* Primary Stacks Display */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 mb-16 relative">
          {/* MERN Stack highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 h-full"
          >
            <InteractiveCard
              glowColor="rgba(123, 47, 255, 0.6)"
              className="h-full rounded-2xl glass-violet overflow-hidden"
            >
              <div className="p-6 md:p-10 relative z-10 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-8">
                  <div className="text-left">
                    <div className="section-label mb-3">PRIMARY STACK 01</div>
                    <h3 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
                      MERN <br />
                      <span className="text-gradient-cyan">STACK</span>
                    </h3>
                    <p className="text-white/30 font-mono text-xs md:text-sm mt-2 tracking-wider">
                      MongoDB · Express.js · React.js · Node.js
                    </p>
                  </div>

                  <div className="flex gap-2 md:gap-3">
                    {["M", "E", "R", "N"].map((letter, i) => (
                      <motion.div
                        key={`mern-${letter}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center font-display font-black text-xl md:text-2xl flex-shrink-0"
                        style={{
                          background: "rgba(123,47,255,0.15)",
                          border: "1px solid rgba(123,47,255,0.3)",
                          color: ["#47A248", "#888", "#61DAFB", "#68A063"][i],
                        }}
                      >
                        {letter}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </InteractiveCard>
          </motion.div>

          {/* Subtle Adaptive Divider */}
          <div className="flex items-center justify-center py-6 lg:py-0 lg:px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-px w-3/4 lg:w-px lg:h-48 bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-white/10 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.05)]" 
            />
          </div>

          {/* Java Full Stack highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 h-full"
          >
            <InteractiveCard
              glowColor="rgba(0, 240, 255, 0.6)"
              className="h-full rounded-2xl glass-cyan overflow-hidden"
            >
              <div className="p-6 md:p-10 relative z-10 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-8">
                  <div className="text-right">
                    <div className="section-label mb-3">PRIMARY STACK 02</div>
                    <h3 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
                      JAVA <br />
                      <span className="text-gradient-premium">STACK</span>
                    </h3>
                    <p className="text-white/30 font-mono text-xs md:text-sm mt-2 tracking-wider">
                      Java · Spring Boot · Hibernate · MySQL · React
                    </p>
                  </div>

                  <div className="flex gap-2 md:gap-3 justify-end">
                    {["J", "A", "V", "A"].map((letter, i) => (
                      <motion.div
                        key={`java-${letter}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center font-display font-black text-xl md:text-2xl flex-shrink-0"
                        style={{
                          background: "rgba(0,240,255,0.15)",
                          border: "1px solid rgba(0,240,255,0.3)",
                          color: ["#E76F00", "#FFFFFF", "#5382A1", "#FFFFFF"][i],
                        }}
                      >
                        {letter}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </InteractiveCard>
          </motion.div>
        </div>

        {/* Two column skill bars */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Tech Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="font-mono text-[10px] tracking-[0.25em] text-white/20 uppercase mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-cyan-400/30" />
              TECH SKILLS
            </motion.h3>
            <div className="space-y-5">
              {techSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.06 }}
                >
                  <SkillBar {...skill} delay={0.3 + i * 0.07} active={active} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core CS */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-mono text-[10px] tracking-[0.25em] text-white/20 uppercase mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-violet-400/30" />
              CORE CS
            </motion.h3>
            <div className="space-y-5">
              {coreCS.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                >
                  <SkillBar
                    name={skill.name}
                    level={skill.level}
                    delay={0.4 + i * 0.07}
                    active={active}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech badge marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 overflow-hidden relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #091224, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #091224, transparent)" }} />
          <div className="marquee-track gap-4 flex">
            {[...techBadges, ...techBadges].map((badge, i) => (
              <span
                key={i}
                className="flex-shrink-0 px-4 py-2 rounded-sm font-mono text-[10px] tracking-widest text-white/25 border border-white/8"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
