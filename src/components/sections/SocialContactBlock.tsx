"use client";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink, Download, User, Share2, Terminal } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/kmgnanadeepak",
    color: "#00f0ff",
    pos: { x: -140, y: -45 },
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/kmgnanadeepak",
    color: "#3b82f6",
    pos: { x: 140, y: -45 },
  },
  {
    name: "LeetCode",
    icon: <Terminal className="w-5 h-5" />,
    href: "https://leetcode.com/u/kmgnanadeepak/",
    color: "#ffa116",
    pos: { x: 0, y: -150 },
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:kmgnanadeepak@gmail.com",
    color: "#8b5cf6",
    pos: { x: -90, y: 125 },
  },
  {
    name: "Phone",
    icon: <Phone className="w-5 h-5" />,
    href: "tel:+91 9441652345",
    color: "#00f0ff",
    pos: { x: 90, y: 125 },
  },
];

export default function SocialContactBlock() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  
  // Mouse parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  
  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <section className="relative py-24 mb-32 z-20 flex justify-center items-center overflow-hidden w-full" ref={containerRef}>
      {/* Background Creative Enhancements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        {/* Animated Data Flow Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * 100 + "%", y: "100%", opacity: 0 }}
            animate={{ y: "-10%", opacity: [0, 0.5, 0] }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-px h-12 bg-gradient-to-t from-transparent via-cyan-400/50 to-transparent"
          />
        ))}
      </div>

      <div className="max-w-6xl w-full px-4 md:px-6 relative">
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start"
        >
          {/* Left: Command Center Interface */}
          <div className="relative group w-full overflow-hidden lg:overflow-visible">
            {/* Main Holographic Panel */}
            <div className="relative glass rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.05)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
              
              {/* Animated Corner Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-[2rem] md:rounded-tl-[2.5rem]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 md:w-20 md:h-20 border-r-2 border-b-2 border-purple-400/30 rounded-br-[2rem] md:rounded-br-[2.5rem]" />

              <div className="relative z-10">
                <div className="flex flex-col gap-1 mb-8">
                  <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-cyan-400/60 uppercase">System Identity Hub</span>
                  <h2 className="font-display font-black text-2xl md:text-4xl text-white tracking-tight uppercase">COMMAND CENTER</h2>
                  <p className="font-mono text-[8px] md:text-[9px] text-white/30 tracking-widest mt-1 uppercase leading-relaxed">Establish Connection • Sync Identity • Deploy Communication</p>
                </div>

                {/* Neural Network Social Matrix (Responsive) */}
                <div className="flex flex-col items-center pt-2 md:pt-6 pb-8 md:pb-12 relative">
                  <div className="mt-2 mb-12 md:mb-20 flex flex-col items-center gap-3">
                    <span 
                      className="font-mono text-xs md:text-base tracking-[0.4em] uppercase text-cyan-400/80"
                      style={{ textShadow: "0 0 12px rgba(0, 240, 255, 0.4)" }}
                    >
                      Social Matrix
                    </span>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_8px_rgba(0,240,255,0.3)]" 
                    />
                  </div>

                  {/* Desktop Layout: Abstract Neural Graph */}
                  <div className="hidden lg:flex relative w-64 h-64 items-center justify-center">
                    {/* SVG Connections (Neural Graph) */}
                    <svg className="absolute inset-[-40px] w-[calc(100%+80px)] h-[calc(100%+80px)] pointer-events-none z-0 overflow-visible">
                      <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.1" />
                          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.1" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {socialLinks.map((node, i) => (
                        <g key={`line-${i}`}>
                          <motion.line
                            x1="50%" y1="50%"
                            x2={`calc(50% + ${node.pos.x}px)`}
                            y2={`calc(50% + ${node.pos.y}px)`}
                            stroke="url(#lineGrad)"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ 
                              pathLength: 1, 
                              opacity: hoveredNode === node.name ? 0.8 : 0.3,
                              strokeWidth: hoveredNode === node.name ? 2 : 1
                            }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                            filter={hoveredNode === node.name ? "url(#glow)" : "none"}
                          />
                          <motion.circle
                            r="2"
                            fill={node.color}
                            animate={{
                              cx: ["50%", `calc(50% + ${node.pos.x}px)`],
                              cy: ["50%", `calc(50% + ${node.pos.y}px)`],
                              opacity: [0, 1, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.8,
                              ease: "easeInOut"
                            }}
                          />
                        </g>
                      ))}
                    </svg>

                    {/* Central KD Core */}
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0, -5, 0] }}
                      transition={{ scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 10, repeat: Infinity, ease: "linear" } }}
                      className="w-20 h-20 rounded-2xl bg-[#0a1a3a] border border-cyan-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.2)] relative z-20 backdrop-blur-xl"
                    >
                      <span className="font-display font-black text-2xl text-white tracking-tighter">KD</span>
                      <motion.div animate={{ scale: [1, 1.4], opacity: [0.3, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute inset-0 rounded-2xl border border-cyan-400" />
                    </motion.div>

                    {socialLinks.map((node, i) => (
                      <motion.a
                        key={node.name}
                        href={node.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredNode(node.name)}
                        onMouseLeave={() => setHoveredNode(null)}
                        initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
                        whileInView={{ opacity: 1, scale: 1, x: node.pos.x, y: node.pos.y }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 + i * 0.1 }}
                        whileHover={{ scale: 1.05, y: node.pos.y - 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute z-10"
                      >
                        <div 
                          className="group/tile relative flex flex-col items-center gap-2 p-4 rounded-2xl glass border transition-all duration-500 min-w-[90px]"
                          style={{ 
                            borderColor: hoveredNode === node.name ? node.color : "rgba(255,255,255,0.08)",
                            background: hoveredNode === node.name ? `${node.color}10` : "rgba(255,255,255,0.02)",
                            boxShadow: hoveredNode === node.name ? `0 0 25px ${node.color}30` : "none"
                          }}
                        >
                          <div className="p-2 rounded-lg transition-colors duration-300" style={{ color: hoveredNode === node.name ? "#fff" : node.color }}>
                            {node.icon}
                          </div>
                          <span className="font-mono text-[9px] tracking-widest text-white/40 group-hover/tile:text-white transition-colors uppercase">{node.name}</span>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile Layout: Balanced 2-Column Grid */}
                  <div className="lg:hidden w-full flex flex-col items-center gap-6">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      {/* Row 1 */}
                      <MobileSocialCard node={socialLinks[0]} />
                      <MobileSocialCard node={socialLinks[2]} />
                      
                      {/* Central KD Row */}
                      <div className="col-span-2 flex justify-center py-2">
                        <motion.div 
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-20 h-20 rounded-2xl bg-[#0a1a3a] border border-cyan-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.15)] relative backdrop-blur-xl"
                        >
                          <span className="font-display font-black text-2xl text-white tracking-tighter">KD</span>
                          <motion.div animate={{ scale: [1, 1.3], opacity: [0.2, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute inset-0 rounded-2xl border border-cyan-400" />
                        </motion.div>
                      </div>

                      {/* Row 2 */}
                      <MobileSocialCard node={socialLinks[1]} />
                      <MobileSocialCard node={socialLinks[3]} />
                      
                      {/* Row 3 (Centered Single) */}
                      <div className="col-span-2 flex justify-center">
                        <div className="w-1/2">
                          <MobileSocialCard node={socialLinks[4]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mt-4 md:mt-8 pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[8px] md:text-[9px] text-white/20 tracking-widest">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="hidden xs:inline">MATRIX_SYNC_v2.0.26</span>
                    <span className="xs:hidden">SYNC_ACTIVE</span>
                  </div>
                  <span>LINK: OPTIMAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Digital Presence Actions */}
          <div className="flex flex-col gap-8 lg:gap-10 py-4">
            <div className="space-y-5">
              <div className="relative inline-block group/heading">
                <h3 
                  className="font-display font-black text-2xl text-[#e6f1ff] tracking-widest uppercase relative z-10"
                  style={{ textShadow: "0 0 10px rgba(0, 240, 255, 0.15)" }}
                >
                  Identity Assets
                </h3>
                <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-[#00f0ff] via-[#3b82f6] to-[#8b5cf6] opacity-30 blur-[0.5px] group-hover:opacity-60 transition-opacity duration-500" />
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm font-body">
                Access my professional documentation and technical profiles via the secure nodes. All transmissions are encrypted and synced.
              </p>
            </div>

            {/* Resume Upgrade Section */}
            <div className="flex flex-col gap-4 md:gap-5 w-full max-w-sm">
              <motion.a
                href="/km_gnana_deepak_s_resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.02, x: 8 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 md:px-8 py-4 md:py-5 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10 flex items-center justify-between overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="p-2 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[8px] tracking-[0.2em] text-white/30 uppercase">Documentation</div>
                    <div className="font-display font-bold text-white tracking-widest text-xs md:text-sm uppercase">View Resume</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-cyan-400 transition-all" />
                <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 group-hover:w-full transition-all duration-500" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.02, x: 8 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 md:px-8 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-between overflow-hidden transition-all duration-300 hover:border-purple-400/40"
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="p-2 rounded-xl bg-purple-400/20 border border-purple-400/30 text-purple-400">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[8px] tracking-[0.2em] text-white/30 uppercase">Local Copy</div>
                    <div className="font-display font-bold text-white tracking-widest text-xs md:text-sm uppercase">Download PDF</div>
                  </div>
                </div>
                <Download className="w-4 h-4 text-white/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.a>
            </div>

            {/* Micro-metrics */}
            <div className="grid grid-cols-2 gap-4 md:gap-5 w-full max-w-sm">
              <div className="glass rounded-2xl p-4 md:p-5 border border-white/5">
                <div className="font-mono text-[8px] text-white/20 tracking-widest mb-1.5 uppercase">Response</div>
                <div className="font-display font-bold text-white text-base md:text-lg">&lt; 12 HRS</div>
              </div>
              <div className="glass rounded-2xl p-4 md:p-5 border border-white/5">
                <div className="font-mono text-[8px] text-white/20 tracking-widest mb-1.5 uppercase">Availability</div>
                <div className="font-display font-bold text-green-400 text-base md:text-lg uppercase">Optimal</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MobileSocialCard({ node }: { node: typeof socialLinks[0] }) {
  return (
    <motion.a
      href={node.href}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.95 }}
      className="w-full"
    >
      <div 
        className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl glass border border-white/5 transition-all duration-300 active:bg-white/10"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div style={{ color: node.color }}>
          {node.icon}
        </div>
        <span className="font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-white/40 uppercase truncate w-full text-center">
          {node.name}
        </span>
      </div>
    </motion.a>
  );
}
