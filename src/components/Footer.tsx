import { Github, ArrowUp, Sparkles, Code2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-black border-t border-white/10 text-xs font-mono text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Studio info */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent-color)" }} />
          <span className="font-display font-bold uppercase tracking-wider text-white text-sm">
            ZEKE
          </span>
          <span className="text-zinc-500">/</span>
          <span className="text-zinc-400 text-[11px]">FULL-STACK SOFTWARE ENGINEER</span>
        </div>

        {/* Center Credits */}
        <div className="text-zinc-400 text-center text-[11px] leading-relaxed">
          Crafted with React 19 & Tailwind • Powered by GitHub REST API
        </div>

        {/* Links & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/realzekee"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 uppercase tracking-wider text-[11px]"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <span className="text-zinc-700">|</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors uppercase tracking-wider text-[11px] cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
