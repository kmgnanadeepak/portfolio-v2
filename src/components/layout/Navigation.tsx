"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "SYSTEM", href: "#boot", id: "boot" },
  { label: "IDENTITY", href: "#identity", id: "identity" },
  { label: "ARCHITECT", href: "#architect", id: "architect" },
  { label: "WORKS", href: "#works", id: "works" },
  { label: "STACK", href: "#stack", id: "stack" },
  { label: "TIMELINE", href: "#timeline", id: "timeline" },
  { label: "TROPHIES", href: "#trophies", id: "trophies" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("boot");
  const [menuOpen, setMenuOpen] = useState(false);
  const [systemOnline, setSystemOnline] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onSystemOnline = () => setSystemOnline(true);
    window.addEventListener("system-online", onSystemOnline);
    
    // In case the event already fired or we're on a page where it's not dispatched
    const checkBootState = () => {
      const hero = document.getElementById('hero-content');
      if (hero) setSystemOnline(true);
    };
    const timer = setTimeout(checkBootState, 4000); // Fallback

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine background style (scrolled state)
      setScrolled(currentScrollY > 60);

      // Determine visibility based on scroll direction
      // Threshold of 80px: always visible at top
      if (currentScrollY < 80) {
        setVisible(true);
      } else {
        // Scrolling down -> hide, Scrolling up -> show
        if (currentScrollY > lastScrollY.current) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
      
      lastScrollY.current = currentScrollY;

      const sections = navItems.map((n) => document.getElementById(n.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.getBoundingClientRect().top <= 120) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("system-online", onSystemOnline);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.nav
          initial={{ y: -120, opacity: 0 }}
          animate={{ 
            y: (visible && systemOnline) ? 0 : -120, 
            opacity: (visible && systemOnline) ? 1 : 0 
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            delay: (systemOnline && !scrolled) ? 0.2 : 0
          }}
          className={`pointer-events-auto transition-all duration-700 w-full max-w-7xl rounded-2xl overflow-hidden nav-system-container ${
            scrolled 
              ? "py-2 backdrop-blur-2xl border-cyan-400/30 shadow-[0_0_40px_rgba(0,0,0,0.5)]" 
              : "py-4 backdrop-blur-xl border-white/10"
          }`}
        >
          {/* Background Particles/Light Streak */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-[-50%] w-[200%] h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-[scan-light_10s_linear_infinite]" />
          </div>

          <div className="px-8 flex items-center justify-between relative z-10">
            {/* Logo - HUD Style */}
            <a href="#boot" className="flex items-center gap-4 group relative">
              <div className="relative">
                {/* Corner Brackets for Logo */}
                <div className="absolute -top-2 -left-2 w-2 h-2 border-t border-l border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute -bottom-2 -right-2 w-2 h-2 border-b border-r border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />
                
                <div className="w-9 h-9 border border-cyan-400/20 rotate-45 group-hover:border-cyan-400/60 transition-all duration-500 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 to-violet-500/10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-2 bg-cyan-400/20 rotate-45 group-hover:bg-cyan-400/40 transition-colors duration-300 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400/80 group-hover:text-cyan-400 transition-colors duration-300">
                  SYSTEM_v2.0
                </span>
                <span className="font-display text-[11px] font-bold tracking-[0.1em] text-white/90">
                  KMGD.DEV
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 bg-white/5 px-2 py-1 rounded-xl border border-white/5 backdrop-blur-sm relative">
              {navItems.map((item, i) => (
                <div key={item.id} className="flex items-center">
                  <a
                    href={item.href}
                    className={`relative px-5 py-2 group transition-all duration-500 flex items-center gap-2 hover:translate-y-[-2px] ${
                      active === item.id ? "scale-105" : "hover:scale-[1.03]"
                    }`}
                  >
                    {/* Active Aura */}
                    {active === item.id && <div className="nav-item-active-aura" />}
                    
                    {/* Scanning Animation */}
                    <div className="nav-item-scan opacity-0 group-hover:opacity-100" />

                    <span className="relative z-10 flex flex-col items-center">
                      <span className={`font-mono text-[8px] tracking-tighter mb-0.5 transition-colors duration-300 ${
                        active === item.id ? "text-cyan-400/60" : "text-white/20 group-hover:text-cyan-400/40"
                      }`}>
                        0{i + 1}
                      </span>
                      <span
                        className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                          active === item.id 
                            ? "text-white drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] animate-[flicker_5s_infinite_2s]" 
                            : "text-[#e6f1ff]/50 group-hover:text-white"
                        }`}
                      >
                        {item.label}
                      </span>
                    </span>

                    {/* Active Underline Beam */}
                    {active === item.id && (
                      <motion.div
                        layoutId="nav-energy-beam"
                        className="nav-energy-line"
                      />
                    )}

                    {/* Tiny indicator dots */}
                    <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-500 ${
                      active === item.id ? "bg-cyan-400 scale-100 shadow-[0_0_8px_#00f0ff]" : "bg-white/10 scale-0 group-hover:scale-100"
                    }`} />
                  </a>
                  
                  {/* HUD Separator */}
                  {i < navItems.length - 1 && (
                    <div className="w-[1px] h-4 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA - System Trigger Button */}
            <a
              href="#signal"
              className="hidden lg:flex system-trigger-btn items-center gap-3 px-7 py-2.5 rounded-xl text-white group"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
                <span className="absolute inset-0 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-40" />
              </div>
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 group-hover:text-white transition-colors">
                SIGNAL
              </span>
              {/* Corner Bracket for Button */}
              <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative p-3 group overflow-hidden"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400/40" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400/40" />
              
              <div className="relative z-10 flex flex-col gap-1.5">
                <span className={`block h-0.5 w-6 bg-cyan-400/80 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-6 bg-cyan-400/80 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-cyan-400/80 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#020617]/90 backdrop-blur-[32px] flex flex-col items-center justify-center p-6 lg:hidden overflow-hidden"
          >
            {/* Animated Background: Radial Glow & Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.08)_0%,transparent_60%)] animate-pulse" />
              <div className="absolute inset-0 dot-grid opacity-[0.05]" />
              
              {/* Moving HUD lines */}
              <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-[2px]"
              />
            </div>

            {/* Glowing Edges Container */}
            <div className="absolute inset-4 border border-white/5 rounded-[2.5rem] pointer-events-none">
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
              <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
            </div>

            {/* Close Button - Refined */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-10 right-10 p-3 group z-20"
            >
              <div className="relative z-10 text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute inset-0 scale-0 group-hover:scale-100 bg-cyan-400/5 rounded-full transition-transform duration-300 blur-sm" />
            </button>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center w-full max-w-xs relative z-10 py-10"
            >
              {/* Menu Header Label */}
              <div className="flex items-center gap-3 mb-10 opacity-40">
                <div className="w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-mono text-[9px] tracking-[0.5em] text-cyan-400 uppercase">System_Core_Access</span>
              </div>

              <div className="flex flex-col w-full gap-0">
                {navItems.map((item, i) => (
                  <div key={item.id} className="w-full">
                    <motion.a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative group flex items-center justify-between w-full py-5 px-4 overflow-hidden mobile-nav-item"
                    >
                      {/* Liquid Glow Sweep on Hover/Tap */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/[0.03] to-transparent translate-x-[-100%] group-active:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                      
                      <div className="flex items-baseline gap-4 relative z-10">
                        <span className="font-mono text-[9px] text-cyan-400/30 group-hover:text-cyan-400/60 transition-colors">
                          0{i + 1}
                        </span>
                        
                        <span className={`font-display text-[clamp(1.5rem,8vw,2.25rem)] font-black tracking-tight transition-all duration-500 mobile-nav-label ${
                          active === item.id 
                            ? 'text-white drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]' 
                            : 'text-white/30 group-hover:text-white group-hover:translate-x-1'
                        }`}>
                          {item.label}
                        </span>
                      </div>
                      
                      {/* Active Indicator: Neon Underline / Highlight */}
                      {active === item.id && (
                        <motion.div 
                          layoutId="mobile-nav-active-glow"
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.8)]" 
                        />
                      )}
                    </motion.a>

                    {/* Gradient Divider - Hidden on Mobile */}
                    {i < navItems.length - 1 && (
                      <div className="w-full px-4 hidden md:block">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-[0.5px]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <motion.a
                href="#signal"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileTap={{ scale: 0.96 }}
                className="mt-12 w-full py-5 rounded-2xl bg-cyan-400/5 border border-cyan-400/20 text-cyan-400 font-mono font-bold text-[10px] tracking-[0.3em] hover:bg-cyan-400 hover:text-void transition-all duration-500 text-center flex items-center justify-center gap-3 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-400/10 translate-y-full group-active:translate-y-0 transition-transform duration-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse group-hover:bg-void shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                INITIATE_SIGNAL
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400/30" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-400/30" />
              </motion.a>
            </motion.div>

            {/* Bottom Info - Refined & Balanced */}
            <div className="absolute bottom-10 left-0 right-0 px-10 flex justify-between items-center opacity-30 font-mono text-[8px] tracking-[0.2em] text-cyan-400">
              <div className="flex flex-col gap-1">
                <span>ENC: AES-256</span>
                <span>OS: GD_PORTFOLIO</span>
              </div>
              <div className="text-right flex flex-col gap-1">
                <span>EST: 2026</span>
                <span>STAT: OPERATIONAL</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
