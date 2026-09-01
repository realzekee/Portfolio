import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Mail, Menu, X, Terminal, Code2 } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className={`pointer-events-auto flex items-center justify-between gap-6 px-5 py-2.5 rounded-full border transition-all duration-500 ${
          scrolled 
            ? "bg-black/80 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]" 
            : "bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_4px_24px_0_rgba(0,0,0,0.4)]"
        }`}>
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2 font-display font-bold text-sm tracking-widest text-white hover:opacity-80 transition-opacity">
            <span>ZEKE</span>
            <span 
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" 
              style={{ backgroundColor: "var(--accent-color)" }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-mono tracking-wider uppercase text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">Index</a>
            <a href="#works" className="hover:text-white transition-colors">Projects</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Skills</a>
            <a href="#terminal" className="hover:text-white transition-colors">Shell</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/realzekee" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-colors rounded-full bg-white/5 border border-white/10 hover:border-white/20"
              title="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 bg-zinc-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 text-center md:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-3 text-xs font-mono tracking-wider uppercase text-zinc-300">
              <a onClick={() => setMobileMenuOpen(false)} href="#about" className="py-2 hover:text-white transition-colors">Index</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#works" className="py-2 hover:text-white transition-colors">Code & Projects</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#capabilities" className="py-2 hover:text-white transition-colors">Technical Arsenal</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="py-2 hover:text-white transition-colors">Contact</a>
            </nav>

            {/* Launch Developer Shell Action inside hamburger menu */}
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#terminal"
              className="group flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-lg active:scale-98"
            >
              <Terminal className="w-4 h-4" style={{ color: "var(--accent-color)" }} />
              <span>Launch Developer Shell</span>
            </a>

            <div className="pt-3 border-t border-zinc-800 flex justify-center gap-4">
              <a 
                href="https://github.com/realzekee" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a 
                href="mailto:realzekee@gmail.com" 
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
