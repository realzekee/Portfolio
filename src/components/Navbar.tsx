import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Navbar() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-zinc-800/50"
    >
      <div className="font-mono font-bold text-xl tracking-tight text-zinc-100">
        zeke<span className="text-cyan-500">.</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#about" className="hover:text-zinc-100 transition-colors">About</a>
        <a href="#skills" className="hover:text-zinc-100 transition-colors">Skills</a>
        <a href="#terminal" className="hover:text-zinc-100 transition-colors">Terminal</a>
        <a href="#projects" className="hover:text-zinc-100 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-zinc-100 transition-colors">Contact</a>
      </nav>

      <div className="flex items-center gap-4">
        <a 
          href="https://github.com/realzekee" 
          target="_blank" 
          rel="noreferrer"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="mailto:realzekee@gmail.com" 
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.header>
  );
}
