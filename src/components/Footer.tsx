import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800/50 text-center text-sm font-mono text-zinc-500">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
        <a 
          href="https://github.com/realzekee"
          target="_blank"
          rel="noreferrer" 
          className="hover:text-cyan-400 transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <p>
          Designed & Built by Zeke. <br />
          Data fetched dynamically from GitHub API.
        </p>
      </div>
    </footer>
  );
}
