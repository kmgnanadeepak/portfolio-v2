"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import InteractiveCard from "@/components/ui/InteractiveCard";

const projects = [
  {
    id: "001",
    title: "KisanSetu",
    subtitle: "Smart Agricultural Marketplace Platform",
    description:
      "A multi-role digital agricultural marketplace designed to directly connect Farmers, Merchants, and Customers on a unified platform, eliminating middlemen and ensuring transparent, fair, and efficient agricultural trade. Real-time product listings, smart price discovery, and direct transactions.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Role-Based Auth", "Responsive UI"],
    github: "https://github.com/kmgnanadeepak/KisanSetu-v2.git",
    live: "https://kisansetu-v2.vercel.app/",
    color: "#00FF88",
    accent: "#00E5FF",
    tag: "FULLSTACK",
    lines: [
      "const market = new Platform({ roles: ['farmer','merchant','customer'] });",
      "await market.eliminateMiddlemen();",
      "market.enableRealTimePricing();",
    ],
  },
 {
  id:"002",
  title:"SafeFall",
  subtitle:"Fall Detection & SOS Alert System",
  description:
    "A real-time fall detection and emergency response system designed to identify sudden falls and trigger immediate SOS alerts to family and friends. Engineered for reliability with a responsive UI designed to work under stress.",
   tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Role-Based Auth", "Responsive UI"],
  github:"https://github.com/kmgnanadeepak/safe-fall.git",
  live:"https://safefall-kmgd.vercel.app/",
  color:"#FF7A00",       // main orange
  accent:"#FF9A2E",      // lighter accent orange
  tag:"HEALTHCARE",
  lines:[
    "sensor.on('fall_detected', async (event) => {",
    "  await alertNetwork(event.contacts);",
    "  await dispatch911(event.coordinates);",
  ],
},
  {
  id:"003",
  title:"IPL Auction System",
  subtitle:"Real-Time Player Bidding & Team Management Platform",
  description:
    "A dynamic IPL-style auction platform that enables real-time bidding for players among multiple teams. Designed to simulate professional cricket auctions with features like live bid updates, budget tracking, player statistics, and team composition management. Ensures fair bidding, instant synchronization, and an engaging auction experience.",
  tech:["React.js","Node.js","Express.js","MongoDB","WebSockets","REST APIs","Real-Time Bidding","Responsive UI"],
  github:"https://github.com/kmgnanadeepak/ipl-auction.git",
  live:"https://auctionx.idk158.me/",
  color:"#FF4D4D",
  accent:"#7A00FF",
  tag:"FULLSTACK",
  lines:[
    "const auction = new Auction({ teams: ['RCB','MI','DC','CSK'] });",
    "auction.startLiveBidding();",
    "await auction.assignPlayerToHighestBidder();",
  ],
},
{
  id:"004",
  title:" HireOps",
  subtitle:"Hiring & Job Posting Platform",
  description:
    "A full-stack hiring platform where recruiters post opportunities and candidates discover, apply, and track jobs in real time. Built with an end-to-end workflow including job publishing, application tracking, and AI-powered resume analysis to simulate real-world recruitment systems.",

  tech:[
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JWT Auth",
    "AI Integration",
    "Responsive UI"
  ],

  github:"https://github.com/kmgnanadeepak/job-portal.git",
  live:"https://jobsbyidk.netlify.app/",

  color:"#6C5CE7",
  accent:"#8A7CFF",

  tag:"JOB PLATFORM",

  lines:[
    "job.post(recruiterId, roleDetails);",
    "applications.track(userId, jobId);",
    "ai.match(resume, jobRequirements);",
  ],
}
];

function ProjectCard({ project, i }: { project: typeof projects[0]; i: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
      className="h-full"
    >
      <InteractiveCard 
        glowColor={`${project.color}80`}
        className="glass rounded-2xl border border-white/5 overflow-hidden group relative flex flex-col h-full"
      >
        {/* Top visual bar */}
        <div
          className="relative h-40 md:h-48 flex-shrink-0 flex items-center justify-center overflow-hidden"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${project.color}12, ${project.accent}06, #0a1a3a)` }}
        >
          {/* Code preview */}
          <div className="font-mono text-[10px] md:text-[11px] text-left px-5 md:px-6 py-4 w-full relative z-10">
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" style={{ background: project.color, opacity: 0.7 }} />
              <span className="text-white/40 tracking-[0.3em] text-[10px] md:text-[11px] font-bold">SYSTEM/{project.id}</span>
            </div>
            {project.lines.map((line, li) => (
              <motion.div
                key={li}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 + li * 0.08 }}
                style={{ color: li === 0 ? project.color : li === 1 ? "#00E5FF" : "#6B6882" }}
                className="mb-1 text-[9px] md:text-[11px] break-all md:break-normal"
              >
                {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              style={{ color: project.color }}
            >
              █
            </motion.div>
          </div>

          {/* Tag */}
          <div
            className="absolute top-4 right-4 font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-sm z-20"
            style={{ color: project.color, border: `1px solid ${project.color}30`, background: `${project.color}08` }}
          >
            {project.tag}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 relative z-10 flex flex-col flex-grow">
          <div className="font-mono text-[11px] font-bold tracking-[0.4em] text-white/30 mb-2 uppercase">Module_{project.id}</div>
          <h3 className="font-display font-bold text-2xl text-white mb-1">{project.title}</h3>
          <p className="font-mono text-[11px] tracking-wider mb-4" style={{ color: project.color + "aa" }}>
            {project.subtitle}
          </p>
          <p className="text-white/40 text-sm leading-relaxed mb-6 group-hover:text-white/60 transition-colors duration-300">{project.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8 flex-grow">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-sm text-white/30 border border-white/8 group-hover:border-white/20 transition-colors duration-300 h-fit"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-auto pt-6 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer btn-liquid flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-3 rounded-sm text-[9px] md:text-[11px] font-mono tracking-widest overflow-hidden h-11"
            >
              <div className="fill-layer" />
              <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
                <svg className="w-[12px] h-[12px] md:w-[14px] md:h-[14px]" viewBox="0 0 14 14" fill="currentColor">
                  <path fillRule="evenodd" d="M7 0C3.13 0 0 3.13 0 7c0 3.1 2.01 5.73 4.8 6.66.35.06.48-.15.48-.34v-1.2C3.27 12.5 2.86 11.33 2.86 11.33c-.32-.81-.78-1.03-.78-1.03-.64-.43.05-.42.05-.42.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.03.58.06-.45.24-.76.44-.94-1.55-.18-3.18-.78-3.18-3.46 0-.76.27-1.39.72-1.88-.07-.18-.31-.89.07-1.86 0 0 .59-.19 1.93.72.56-.16 1.16-.24 1.75-.24.6 0 1.2.08 1.75.24 1.34-.9 1.93-.72 1.93-.72.38.97.14 1.68.07 1.86.45.49.72 1.12.72 1.88 0 2.69-1.64 3.28-3.2 3.45.25.22.48.65.48 1.31v1.94c0 .19.12.41.48.34C11.99 12.73 14 10.1 14 7c0-3.87-3.13-7-7-7z" />
                </svg>
                SOURCE
              </span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent btn-liquid flex-1 flex items-center justify-center gap-1.5 md:gap-2 py-3 rounded-sm text-[9px] md:text-[11px] font-mono tracking-widest overflow-hidden h-11"
            >
              <div className="fill-layer" />
              <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
                LIVE DEMO
                <svg className="w-[10px] h-[10px] md:w-[12px] md:h-[12px]" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 10L10 2M10 2H4M10 2v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </InteractiveCard>
    </motion.div>
  );
}

export default function WorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="works"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f2a5c 0%, #020617 100%)" }}
    >
      <div className="blob-rose w-[500px] h-[500px] bottom-0 left-0 -translate-x-1/2 translate-y-1/2 opacity-30" />
      <div className="blob-cyan w-[400px] h-[400px] top-0 right-1/4 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-label">03 / WORKS</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent" />
        </motion.div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-display font-extrabold leading-none tracking-tight mobile-heading-fix"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4d6d] via-[#8b5cf6] via-[#3b82f6] to-[#00f0ff] opacity-[0.52]"
              style={{ filter: "drop-shadow(0 0 15px rgba(59,130,246,0.12))" }}
            >
              SELECTED
            </span>
            <br />
            <span className="text-gradient-premium">PROJECTS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/30 font-body text-sm max-w-xs leading-relaxed"
          >
            Real-world systems built to solve real problems. Each deployed, tested, and production-ready.
          </motion.p>
        </div>

        {/* Project grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} />
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/kmgnanadeepak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-mono text-[11px] tracking-widest text-white/25 hover:text-cyan-400 transition-colors border-b border-white/10 hover:border-cyan-400/40 pb-1"
          >
            MORE ON GITHUB
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 6h10M6 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
