"use client";
import { motion } from "framer-motion";

export default function FooterSignal() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5 overflow-hidden" style={{ background: "#020617" }}>
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-6 h-6 border border-cyan-400/30 rotate-45" />
              <div className="absolute inset-1 bg-cyan-400/15 rotate-45" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/25">KMGD.DEV</span>
          </div>

          {/* Center */}
          <div className="font-mono text-[9px] tracking-widest text-white/15 text-center">
            © {year} KM GNANA DEEPAK — BUILT WITH NEXT.JS + FRAMER MOTION
          </div>

          {/* Right: social */}
          <div className="flex items-center gap-5">
            {[
              { label: "GH", href: "https://github.com/kmgnanadeepak" },
              { label: "LI", href: "https://www.linkedin.com/in/kmgnanadeepak" },
              { label: "LC", href: "https://leetcode.com/u/kmgnanadeepak/" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-widest text-white/20 hover:text-cyan-400 transition-colors"
                data-hover
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
