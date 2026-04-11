"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function TransmitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // EmailJS integration — users fill in their own service/template/key
      const emailjs = (await import("emailjs-com")).default;
      await emailjs.send(
        "service_j1813ro",
        "template_4tuewq8",
        { from_name: form.name, from_email: form.email, message: form.message },
        "v3Hvt0eU6hgelQoGl"
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const contactLinks = [
    { label: "EMAIL", value: "kmgnanadeepak@gmail.com", href: "mailto:kmgnanadeepak@gmail.com", color: "#00E5FF" },
    { label: "PHONE", value: "+91 9441652345", href: "tel:9441652345", color: "#7B2FFF" },
    { label: "GITHUB", value: "kmgnanadeepak", href: "https://github.com/kmgnanadeepak", color: "#00FF88" },
    { label: "LINKEDIN", value: "kmgnanadeepak", href: "https://www.linkedin.com/in/kmgnanadeepak", color: "#0077B5" },
    { label: "LEETCODE", value: "kmgnanadeepak", href: "https://leetcode.com/u/kmgnanadeepak/", color: "#FFA116" },
  ];

  return (
    <section
      id="signal"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020617 0%, #0a1a3a 100%)" }}
    >
      {/* Background elements */}
      <div className="dot-grid absolute inset-0 opacity-20" />
      <div className="blob-violet w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-cyan-400/15" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-cyan-400/15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-label">08 / SIGNAL</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent" />
        </motion.div>

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display font-extrabold leading-none tracking-tight mb-16"
          style={{ fontSize: "clamp(2rem, 10vw, 6rem)" }}
        >
          <span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4d6d] via-[#8b5cf6] via-[#3b82f6] to-[#00f0ff] opacity-[0.52]"
            style={{ filter: "drop-shadow(0 0 15px rgba(59,130,246,0.12))" }}
          >
            LET'S
          </span>
          <br />
          <span className="text-gradient-premium">CONNECT</span>
        </motion.h2>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <p className="text-white/40 font-body leading-relaxed mb-10 text-base md:text-lg">
              Have a project in mind, want to collaborate, or just want to say hello?
              I'm always open to new opportunities.
            </p>

            <div className="space-y-3 md:space-y-4 mb-12">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 md:gap-4 glass rounded-xl p-3 md:p-4 border border-white/5 group card-hover"
                  data-hover
                >
                  <div
                    className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-mono text-[8px] md:text-[9px] tracking-wider flex-shrink-0"
                    style={{ background: `${link.color}10`, border: `1px solid ${link.color}20`, color: link.color }}
                  >
                    {link.label.slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[8px] tracking-widest text-white/20 mb-0.5 uppercase">{link.label}</div>
                    <div className="font-body text-xs md:text-sm text-white/50 group-hover:text-white/80 transition-colors truncate">{link.value}</div>
                  </div>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="ml-auto text-white/15 group-hover:text-white/50 transition-colors flex-shrink-0">
                    <path d="M1 6h10M6 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest text-white/25">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl border border-white/5 p-8 md:p-10 relative overflow-hidden">
              {/* Form header */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.25em] text-white/30">INITIATE TRANSMISSION</span>
              </div>

              <div className="space-y-5 mb-7">
                <div>
                  <label className="font-mono text-[9px] tracking-widest text-white/25 block mb-2 uppercase">Sender Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="field"
                  />
                </div>
                <div>
                  <label className="font-mono text-[9px] tracking-widest text-white/25 block mb-2 uppercase">Sender Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="field"
                  />
                </div>
                <div>
                  <label className="font-mono text-[9px] tracking-widest text-white/25 block mb-2 uppercase">Message Payload</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="field resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-accent w-full py-4 rounded-sm flex items-center justify-center gap-2.5 font-display font-bold tracking-wider text-sm disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    TRANSMITTING...
                  </>
                ) : status === "sent" ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 8l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    SIGNAL RECEIVED
                  </>
                ) : (
                  <>
                    TRANSMIT MESSAGE
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 7h12M7 1l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="mt-4 text-center font-mono text-[10px] tracking-wider text-rose-500">
                  TRANSMISSION FAILED — TRY AGAIN
                </p>
              )}

              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-cyan-400/10 rounded-tr-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-violet-400/10 rounded-bl-2xl pointer-events-none" />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
