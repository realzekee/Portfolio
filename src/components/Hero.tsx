import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, Github, Terminal, Code2, Layout, Server, Cpu, Cloud } from "lucide-react";

interface HeroProps {
  githubUser: any;
}

export function Hero({ githubUser }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 overflow-hidden bg-[#050505] select-none">
      {/* Deep Atmospheric Nebula Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[700px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-60"
        style={{
          background: `radial-gradient(ellipse at center, rgba(var(--accent-rgb), 0.35) 0%, rgba(var(--accent-rgb), 0.1) 45%, transparent 75%)`,
          transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`
        }}
      />

      {/* Grid Pattern & Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "64px 64px"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono text-zinc-500 uppercase tracking-widest pt-2">
        <div className="flex items-center gap-3">
          <span className="text-zinc-300 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent-color)" }} />
            SOFTWARE ENGINEERING // DEV
          </span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="hidden sm:inline text-zinc-400">FULL-STACK & REACTIVE WEB ARCHITECTURES</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-zinc-400">BASED IN MODERN WEB PLATFORMS</span>
          <span className="text-zinc-300 font-semibold px-2.5 py-0.5 rounded border border-white/10 bg-white/5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AVAILABLE FOR HIRE
          </span>
        </div>
      </div>

      {/* Center Hero Typography */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col items-center justify-center text-center py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative"
        >
          {/* Subtle glowing backdrop */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 blur-3xl opacity-30 pointer-events-none"
            style={{ backgroundColor: "var(--accent-color)" }}
          />

          {/* Mega Typography */}
          <h1 className="text-7xl sm:text-9xl md:text-[14vw] font-display font-extrabold tracking-tighter text-white uppercase leading-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            ZEKE
          </h1>
        </motion.div>

        {/* Sub-headline: Technical Arsenal Categories (Direct Links to Arsenal Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs md:text-sm font-mono uppercase tracking-wider"
        >
          <a
            href="#skills-frontend"
            className="group text-white font-bold flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full border border-white/15 hover:border-white/40 transition-all cursor-pointer active:scale-95 shadow-sm"
            title="Jump to Frontend Engineering in Arsenal"
          >
            <Layout className="w-3.5 h-3.5 transition-transform group-hover:scale-110" style={{ color: "var(--accent-color)" }} />
            <span>FRONTEND ENGINEERING</span>
          </a>
          <span className="text-zinc-600 select-none hidden sm:inline">•</span>
          <a
            href="#skills-backend"
            className="group text-zinc-300 hover:text-white font-medium flex items-center gap-1.5 bg-white/5 hover:bg-white/15 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-all cursor-pointer active:scale-95"
            title="Jump to Backend & Runtime APIs in Arsenal"
          >
            <Server className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
            <span>BACKEND & APIS</span>
          </a>
          <span className="text-zinc-600 select-none hidden md:inline">•</span>
          <a
            href="#skills-logic"
            className="group text-zinc-300 hover:text-white font-medium flex items-center gap-1.5 bg-white/5 hover:bg-white/15 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-all cursor-pointer active:scale-95"
            title="Jump to Application & Product Logic in Arsenal"
          >
            <Cpu className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
            <span>APPLICATION LOGIC</span>
          </a>
          <span className="text-zinc-600 select-none hidden lg:inline">•</span>
          <a
            href="#skills-devops"
            className="group text-zinc-400 hover:text-white font-medium flex items-center gap-1.5 bg-white/5 hover:bg-white/15 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-all cursor-pointer active:scale-95"
            title="Jump to DevOps, Cloud & Tooling in Arsenal"
          >
            <Cloud className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
            <span>DEVOPS & CLOUD</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Editorial Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full border-t border-white/10 pt-8 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* Left Description Copy */}
          <div className="md:col-span-7 lg:col-span-8">
            <p className="text-xs md:text-sm font-sans text-zinc-300 leading-relaxed tracking-wide font-normal">
              Specialized in building full-stack applications, reactive web tools, and high-performance user interfaces with React, TypeScript, and modern backend services. Focused on clean architecture, precision interactions, and robust systems.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-zinc-500">
              <span>GITHUB REPOSITORIES: <strong className="text-white font-bold">{githubUser?.public_repos || "10+"}</strong></span>
              <span>•</span>
              <span>STACK: <strong className="text-white font-bold">TYPESCRIPT // REACT</strong></span>
            </div>
          </div>

          {/* Right Action CTA */}
          <div className="md:col-span-5 lg:col-span-4 flex md:justify-end">
            <a 
              href="#works"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-white/5 cursor-pointer"
            >
              <span>Explore Code & Repos</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
