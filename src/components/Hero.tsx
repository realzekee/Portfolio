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
      {/* Deep Atmospheric Solar Orange Nebula Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[550px] sm:h-[750px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-75"
        style={{
          background: `radial-gradient(ellipse at center, rgba(var(--accent-rgb), 0.45) 0%, rgba(var(--accent-rgb), 0.18) 40%, transparent 72%)`,
          transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`
        }}
      />

      {/* Top subtle orange edge flare */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px pointer-events-none opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(var(--accent-rgb), 0.8), transparent)`
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
          <span className="text-zinc-200 font-semibold flex items-center gap-1.5 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
            <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: "var(--accent-color)" }} />
            SOFTWARE ENGINEERING // DEV
          </span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="hidden sm:inline text-zinc-400">FULL-STACK & REACTIVE WEB ARCHITECTURES</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-zinc-400">BASED IN MODERN WEB PLATFORMS</span>
          <span className="text-zinc-200 font-semibold px-2.5 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 flex items-center gap-1.5 shadow-[0_0_12px_rgba(var(--accent-rgb),0.2)]">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent-color)" }} />
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
          {/* Multi-layered Glowing Orange Bloom behind ZEKE */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[65%] h-44 sm:h-56 blur-[90px] opacity-75 pointer-events-none rounded-full"
            style={{ 
              background: `radial-gradient(ellipse at center, rgba(var(--accent-rgb), 0.85) 0%, rgba(var(--accent-rgb), 0.4) 50%, transparent 80%)` 
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-1/2 h-28 sm:h-36 blur-2xl opacity-80 pointer-events-none rounded-full"
            style={{ 
              background: `radial-gradient(circle, rgba(251, 146, 60, 0.9) 0%, rgba(var(--accent-rgb), 0.6) 60%, transparent 85%)` 
            }}
          />

          {/* Mega Typography with Layered Orange Neon Text Glow */}
          <h1 
            className="relative z-10 text-7xl sm:text-9xl md:text-[14vw] font-display font-extrabold tracking-tighter text-white uppercase leading-none select-none transition-all duration-300"
            style={{
              textShadow: `
                0 0 20px rgba(var(--accent-rgb), 0.6),
                0 0 50px rgba(var(--accent-rgb), 0.45),
                0 0 90px rgba(var(--accent-rgb), 0.3),
                0 15px 40px rgba(0, 0, 0, 0.9)
              `
            }}
          >
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
            className="group text-orange-200 font-bold flex items-center gap-1.5 bg-orange-500/15 hover:bg-orange-500/25 px-3.5 py-1.5 rounded-full border border-orange-500/35 hover:border-orange-500/60 transition-all cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(var(--accent-rgb),0.15)]"
            title="Jump to Frontend Engineering in Arsenal"
          >
            <Layout className="w-3.5 h-3.5 transition-transform group-hover:scale-110" style={{ color: "var(--accent-color)" }} />
            <span>FRONTEND ENGINEERING</span>
          </a>
          <span className="text-zinc-600 select-none hidden sm:inline">•</span>
          <a
            href="#skills-backend"
            className="group text-zinc-300 hover:text-orange-200 font-medium flex items-center gap-1.5 bg-white/5 hover:bg-orange-500/15 px-3 py-1.5 rounded-full border border-white/10 hover:border-orange-500/35 transition-all cursor-pointer active:scale-95"
            title="Jump to Backend & Runtime APIs in Arsenal"
          >
            <Server className="w-3.5 h-3.5 text-zinc-400 group-hover:text-orange-400 transition-colors" />
            <span>BACKEND & APIS</span>
          </a>
          <span className="text-zinc-600 select-none hidden md:inline">•</span>
          <a
            href="#skills-logic"
            className="group text-zinc-300 hover:text-orange-200 font-medium flex items-center gap-1.5 bg-white/5 hover:bg-orange-500/15 px-3 py-1.5 rounded-full border border-white/10 hover:border-orange-500/35 transition-all cursor-pointer active:scale-95"
            title="Jump to Application & Product Logic in Arsenal"
          >
            <Cpu className="w-3.5 h-3.5 text-zinc-400 group-hover:text-orange-400 transition-colors" />
            <span>APPLICATION LOGIC</span>
          </a>
          <span className="text-zinc-600 select-none hidden lg:inline">•</span>
          <a
            href="#skills-devops"
            className="group text-zinc-400 hover:text-orange-200 font-medium flex items-center gap-1.5 bg-white/5 hover:bg-orange-500/15 px-3 py-1.5 rounded-full border border-white/10 hover:border-orange-500/35 transition-all cursor-pointer active:scale-95"
            title="Jump to DevOps, Cloud & Tooling in Arsenal"
          >
            <Cloud className="w-3.5 h-3.5 text-zinc-400 group-hover:text-orange-400 transition-colors" />
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
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span>GITHUB REPOSITORIES: <strong className="text-orange-400 font-bold">{githubUser?.public_repos || "10+"}</strong></span>
              <span>•</span>
              <span>STACK: <strong className="text-white font-bold">TYPESCRIPT // REACT</strong></span>
            </div>
          </div>

          {/* Right Action CTA */}
          <div className="md:col-span-5 lg:col-span-4 flex md:justify-end">
            <a 
              href="#works"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-black font-mono text-xs font-bold uppercase tracking-wider transition-all active:scale-95 shadow-[0_0_25px_rgba(var(--accent-rgb),0.35)] hover:shadow-[0_0_35px_rgba(var(--accent-rgb),0.55)] cursor-pointer"
            >
              <span>Explore Code & Repos</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
