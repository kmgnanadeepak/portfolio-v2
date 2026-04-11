"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue } from "framer-motion";
import InteractiveCard from "@/components/ui/InteractiveCard";
import { 
  Trophy, 
  Award, 
  Medal, 
  Star, 
  ExternalLink, 
  ShieldCheck, 
  FileCode, 
  Binary, 
  Cpu,
  Activity,
  Terminal,
  ChevronRight,
  Code2,
  Lightbulb,
  Users
} from "lucide-react";

const achievements = [
  {
    rank: "1st",
    title: "National Hackathon Winner",
    event: "24 Hour Hackathon - Manakula Vinayagar Engineering College, Puducherry",
    detail: "Engineered a high-impact solution under a 24-hour constraint, securing 1st place among 70+ teams at a national-level hackathon.",
    date: "Sep 2025",
    credential: "/puducherry.pdf",
    color: "#FFB800",
    icon: <Trophy className="w-full h-full" />,
    rotation: -2,
    offsetY: 0,
    genesis: "HACK_WINNER_01.EXE"
  },
  {
    rank: "1st",
    title: "UI/UX Design Champion",
    event: "Technical Fest - Kuppam Engineering College",
    detail: "Architected and delivered a high-performance, responsive UI/UX solution, securing 1st place among 60+ teams in a competitive web design environment.",
    date: "Feb 2026",
    credential: "/webdesign.pdf",
    color: "#00E5FF",
    icon: <Award className="w-full h-full" />,
    rotation: 3,
    offsetY: 100,
    genesis: "DESIGN_CORE.CSS"
  },
  {
    rank: "2nd",
    title: "Technical Quiz Runner-Up",
    event: "AItheronML'25, Kuppam Engineering College",
    detail: "Exhibited advanced analytical thinking and core CS fundamentals, achieving 2nd place among 45 teams in a technical quiz.",
    date: "Aug 2025",
    credential: "/KEC_TechQuizRunner.pdf",
    color: "#7B2FFF",
    icon: <Medal className="w-full h-full" />,
    rotation: -1,
    offsetY: -50,
    genesis: "LOGIC_PROCESSOR.PY"
  },
   {
  rank: "1st",
  title: "Short Film Competition Winner",
  event: "Kuppam Engineering College (Autonomous)",
  detail: "Collaborated with a creative team to produce a high-quality short film, showcasing strong teamwork, coordination, and storytelling to secure 1st place.",
  date: "Feb 2026",
  credential: "/shortfilm.pdf",
  color: "#FF4D6D",
  icon: <Users className="w-full h-full" />,
  rotation: 2,
  offsetY: 8,
  genesis: "TEAM_SYNC_WIN_03.EXE"
},
  {
    rank: "1st",
    title: "Logo\nIdentification\nWinner",
    event: "AItheronML'25, Kuppam Engineering College",
    detail: "Demonstrated sharp visual recognition and quick recall, securing 1st place in a logo identification competition.",
    date: "Aug 2025",
    credential: "/KEC_Logoidentification.pdf",
    color: "#00FF88",
    icon: <Star className="w-full h-full" />,
    rotation: 4,
    offsetY: 80,
    genesis: "BRAND_IDENT.DLL"
  },
  {
    rank: "FINAL",
    title: "National Hackathon Finalist",
    event: "Dr. T. Thimmaiah Institute of Technology, Karnataka",
    detail: "Secured finalist position at NEXATHON'25, a national-level 24-hour hackathon featuring top competing teams.",
    date: "Nov 2025",
    credential: "/Dr.TTIT_hackathon.pdf",
    color: "#FF2D55",
    icon: <ShieldCheck className="w-full h-full" />,
    rotation: -3,
    offsetY: 20,
    genesis: "NEXATHON_SYS.LOG"
  },
  {
  rank: "Appreciation",
  title: "Innovation Expo Participant",
  event: "Agastya International Foundation",
  detail: "Showcased 'Kisan Setu', demonstrating innovative thinking, creativity, and problem-solving at the Innovation Expo, recognized for impactful contribution.",
  date: "Feb 2026",
  credential: "/Agastya.pdf",
  color: "#00E6A8",
  icon: <Lightbulb className="w-full h-full" />,
  rotation: -1,
  offsetY: 5,
  genesis: "INNOVATION_EXPO_02.EXE"
  },
];

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    id: "AWS-CLF-C02",
    color: "#FF9900",
    icon: <Cpu className="w-6 h-6" />,
    description: "Cloud fundamentals, security, compliance, technology, and billing in the AWS Cloud environment.",
    skills: ["Cloud Computing", "AWS Core Services", "Cloud Security", "Infrastructure Scaling"],
    credential: "/AWS.pdf",
    date: "JAN 2025"
  },
  {
    title: "Full Stack Development",
    issuer: "Apna College",
    id: "CERT-FS-2025",
    color: "#FF2D55",
    icon: <Code2 className="w-6 h-6" />,
    description: "Comprehensive training in MERN stack, encompassing frontend architecture, backend systems, and database management.",
    skills: ["MERN Stack", "System Design", "API Architecture", "Performance Tuning"],
    credential: "/GDdelta.pdf",
    date: "FEB 2025"
  },
  {
    title: "Java Programming",
    issuer: "Scaler",
    id: "JV-ADV-2024",
    color: "#61DAFB",
    icon: <Terminal className="w-6 h-6" />,
    description: "Advanced Java programming concepts, data structures, and algorithmic problem solving.",
    skills: ["Java Core", "Multithreading", "Algorithms", "Memory Management"],
    credential: "https://www.scaler.com/",
    date: "AUG 2024"
  }
];

function CertificationModule({ cert, i }: { cert: typeof certifications[0], i: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.2, duration: 0.8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group h-full"
    >
      <InteractiveCard
        glowColor={`${cert.color}80`}
        className="h-full rounded-2xl"
      >
        {/* Layered Background Blocks (Now behind the InteractiveCard's internal layers) */}
        <div className="absolute inset-0 bg-white/[0.02] rounded-3xl -rotate-2 scale-95 translate-y-4 blur-sm group-hover:bg-white/[0.04] transition-all duration-500 -z-10" />
        <div className="absolute inset-0 bg-white/[0.01] rounded-3xl rotate-1 scale-105 -translate-y-2 blur-md group-hover:bg-white/[0.03] transition-all duration-500 -z-10" />

        {/* Main Interface Body */}
        <div 
          className="relative glass rounded-2xl p-6 border border-white/10 overflow-hidden backdrop-blur-xl h-full"
          style={{ 
            boxShadow: hovered ? `0 30px 60px -12px ${cert.color}30, inset 0 0 20px ${cert.color}10` : 'none',
            borderColor: hovered ? `${cert.color}50` : 'rgba(255,255,255,0.1)'
          }}
        >
          {/* Scan Line Animation */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            animate={{ 
              y: ["-100%", "100%"],
              opacity: hovered ? 0.3 : 0.1
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ 
              background: `linear-gradient(to bottom, transparent, ${cert.color}40, transparent)`,
              height: '20%'
            }}
          />

          {/* Top Metadata Header */}
          <div className="flex items-start justify-between mb-6 relative z-20">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3].map(d => (
                    <motion.div 
                      key={d} 
                      animate={{ 
                        scale: hovered ? [1, 1.5, 1] : 1,
                        backgroundColor: hovered ? cert.color : 'rgba(255,255,255,0.2)'
                      }}
                      transition={{ delay: d * 0.1, repeat: hovered ? Infinity : 0, duration: 1 }}
                      className="w-1 h-1 rounded-full" 
                    />
                  ))}
                </div>
                <span className="font-mono text-[9px] tracking-[0.4em] text-white/40 uppercase">CERT_ID: {cert.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                <span className="font-mono text-[8px] text-emerald-400/60 tracking-widest uppercase">VERIFIED_SECURE</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all">
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>

          {/* Core Visual Layer */}
          <div className="flex gap-4 md:gap-6 items-start mb-6 relative z-20 mobile-cert-header-flex">
            <motion.div 
              className="w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center relative overflow-hidden"
              style={{ 
                background: `${cert.color}15`, 
                color: cert.color,
                boxShadow: hovered ? `0 0 30px ${cert.color}40` : `0 0 20px ${cert.color}10`
              }}
            >
              <div className="relative z-10">{cert.icon}</div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-current opacity-20 scale-150" 
              />
            </motion.div>

            <div className="flex-1 min-w-0">
              <h4 className="font-display font-black text-xl text-white mb-1 tracking-tight leading-none group-hover:text-shadow-glow transition-all duration-300 mobile-cert-title-fix"
                  style={{ textShadow: hovered ? `0 0 15px ${cert.color}60` : 'none' }}>
                {cert.title}
              </h4>
              <p className="font-mono text-[10px] tracking-widest text-white/30 uppercase">{cert.issuer}</p>
            </div>
          </div>

          <div className="space-y-6 relative z-20 flex-grow flex flex-col">
            <div className="flex-grow">
              <p className="text-white/50 text-xs leading-relaxed font-body group-hover:text-white/70 transition-colors mobile-cert-desc-fix">
                {cert.description}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">Core_Stack</span>
                <span className="font-mono text-[11px] font-bold text-white/60 group-hover:text-white transition-colors">{cert.date}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[9px] font-mono text-white/30 group-hover:border-white/20 group-hover:text-white/60 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* System Status Footer */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="h-full"
                    style={{ background: cert.color }}
                  />
                </div>
                <span className="font-mono text-[8px] tracking-widest text-white/20 uppercase">SYNC_COMPLETE</span>
              </div>
              <a 
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono text-white/20 hover:text-white transition-colors flex items-center gap-2"
              >
                ACCESS_MODULE
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Decorative Corner Brackets */}
          <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
            <div className="w-4 h-4 border-t-2 border-r-2 border-white/10 rounded-tr-lg" style={{ borderColor: hovered ? cert.color : '' }} />
          </div>
          <div className="absolute bottom-0 left-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
            <div className="w-4 h-4 border-b-2 border-l-2 border-white/10 rounded-bl-lg" style={{ borderColor: hovered ? cert.color : '' }} />
          </div>
        </div>
      </InteractiveCard>
    </motion.div>
  );
}

function AchievementCard({ ach, i }: { ach: typeof achievements[0], i: number }) {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollRotate = useTransform(scrollYProgress, [0, 1], [ach.rotation - 5, ach.rotation + 5]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [ach.offsetY - 20, ach.offsetY + 20]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={containerRef}
      style={{ 
        rotate: scrollRotate, 
        y: scrollY, 
        scale: scrollScale, 
      }}
      className="relative z-10 group mobile-achievement-card-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <InteractiveCard
        glowColor={`${ach.color}80`}
        className="rounded-[2.5rem]"
      >
        <div 
          className="glass rounded-[2.5rem] p-8 md:p-10 border border-white/10 relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-white/[0.03]"
          style={{ 
            boxShadow: hovered ? `0 20px 50px -15px ${ach.color}30, 0 0 20px ${ach.color}10` : 'none',
            borderColor: hovered ? `${ach.color}40` : 'rgba(255,255,255,0.1)'
          }}
        >
          {/* Background Digital Matrix */}
          <div className="absolute inset-0 opacity-[0.02] font-mono text-[6px] leading-none pointer-events-none p-3 break-all group-hover:opacity-[0.05] transition-opacity duration-500">
            {Array.from({ length: 15 }).map((_, j) => (
              <div key={j} className="mb-0.5 opacity-40">01011010010110101101010101101010101101010101101010101101010101101010101101010</div>
            ))}
          </div>

          {/* Top Header: Genesis Metadata & Rank */}
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <div 
                className="w-1.5 h-1.5 rounded-full animate-pulse" 
                style={{ background: ach.color, boxShadow: `0 0 8px ${ach.color}` }}
              />
              <span className="font-mono text-[8px] tracking-[0.2em] text-white/20 uppercase">Source: {ach.genesis}</span>
            </div>
            <span 
              className={`font-display font-black text-white/5 transition-colors group-hover:text-white/10 leading-none uppercase ${
                ach.rank.length > 5 ? 'text-sm md:text-base tracking-tighter' : 'text-2xl'
              }`}
            >
              {ach.rank}
            </span>
          </div>

          {/* Main Visual: Icon (Back to Vertical Stack for Height) */}
          <div className="relative mb-6 z-10">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center relative p-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              style={{ 
                background: `linear-gradient(135deg, ${ach.color}10, ${ach.color}25)`,
                border: `1px solid ${ach.color}30`,
                color: ach.color,
                boxShadow: hovered ? `0 0 30px ${ach.color}30` : `0 0 20px ${ach.color}10`
              }}
            >
              <div className="relative z-10 w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                {ach.icon}
              </div>
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-8px] border border-dashed rounded-2xl opacity-20"
                style={{ borderColor: ach.color }}
              />
            </div>
          </div>

          {/* Content Stack */}
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="font-display font-black text-xl md:text-2xl text-white mb-4 leading-tight transition-all duration-500 group-hover:text-shadow-glow whitespace-pre-line"
                style={{ textShadow: hovered ? `0 0 15px ${ach.color}40` : 'none' }}>
              {ach.title}
            </h3>

            {/* Event Header */}
            <div className="mb-4 pb-4 border-b border-white/5">
              <p className="font-mono text-[10px] tracking-widest text-cyan-400/60 uppercase group-hover:text-cyan-400 transition-colors leading-relaxed">
                {ach.event}
              </p>
            </div>

            {/* Description (More Vertical Space) */}
            <div className="mb-8 flex-grow">
              <p className="text-white/40 text-sm leading-relaxed transition-colors group-hover:text-white/70">
                {ach.detail}
              </p>
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Issue_Date</span>
                <span className="font-mono text-[12px] font-bold text-white/40 group-hover:text-white/80 transition-colors">{ach.date}</span>
              </div>
              
              <a
                href={ach.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[9px] font-bold tracking-[0.2em] text-cyan-400/90 hover:text-cyan-400 transition-all group/link"
              >
                <div className="p-2.5 rounded-xl bg-cyan-400/10 border border-cyan-400/20 group-hover/link:bg-cyan-400 group-hover/link:text-void transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
                VERIFY
              </a>
            </div>
          </div>

          {/* Floating Accent Gradient */}
          <div 
            className="absolute -bottom-16 -right-16 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
            style={{ background: ach.color }}
          />
        </div>
      </InteractiveCard>
    </motion.div>
  );
}

export default function TrophySection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="trophies" 
      ref={containerRef} 
      className="relative py-32 overflow-hidden bg-[#020617]"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.02)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-32"
        >
          <span className="section-label">06 / HALL OF FAME</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent" />
        </motion.div>

        {/* Header: Ultra Modern */}
        <div className="mb-16 md:24 text-center mobile-trophy-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 md:gap-4 px-4 md:px-6 py-2 rounded-full glass border border-white/5 mb-8"
          >
            <Binary className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
            <span className="font-mono text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] text-white/40 uppercase">Global_Recognition_Database</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="font-display font-black leading-[1.1] tracking-tighter"
            style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}
          >
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4d6d] via-[#8b5cf6] via-[#3b82f6] to-[#00f0ff] opacity-[0.52] block"
              style={{ filter: "drop-shadow(0 0 15px rgba(59,130,246,0.12))" }}
            >
              AWARDS &
            </span>
            <span className="text-gradient-premium">HONORS</span>
          </motion.h2>
        </div>

        {/* Scattered Achievement Gallery */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32 mb-64 mobile-achievement-grid">
          {achievements.map((ach, i) => (
            <AchievementCard key={ach.title} ach={ach} i={i} />
          ))}
          
          {/* Decorative Terminal Overlay (Center) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg opacity-[0.02] pointer-events-none hidden lg:block">
            <pre className="font-mono text-[10px] text-white leading-relaxed">
              {`
  FETCHING_DATA...
  [====================] 100%
  SYSTEM_STATUS: SECURE
  ENCRYPTION: AES-256
  
  IDENTIFYING ACHIEVEMENTS...
  - HACKATHON_WINNER [VERIFIED]
  - UI_UX_CHAMPION [VERIFIED]
  - TECH_QUIZ_FINALIST [VERIFIED]
  
  END_OF_LOG.
              `}
            </pre>
          </div>
        </div>

        {/* Digital Certification Vault: Redesigned Interface */}
        <div className="relative">
          <div className="flex items-center gap-8 mb-20">
            <h3 className="font-display font-black text-5xl text-white mobile-data-module-heading">
              DATA <br />
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4d6d] via-[#8b5cf6] via-[#3b82f6] to-[#00f0ff] opacity-[0.52]"
                style={{ filter: "drop-shadow(0 0 15px rgba(59,130,246,0.12))" }}
              >
                MODULES
              </span>
            </h3>
            <div className="flex-1 h-px bg-white/5" />
            <div className="hidden md:flex items-center gap-4 font-mono text-[9px] tracking-[0.3em] text-white/20">
              <div className="w-2 h-2 rounded-full bg-cyan-400/40" />
              STATUS: ENCRYPTED_SYNC_ACTIVE
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {certifications.map((cert, i) => (
              <div key={cert.id} className={`${i === 1 ? "lg:translate-y-12" : ""} mobile-cert-card-container`}>
                <CertificationModule cert={cert} i={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
