import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ExternalLink, 
  Star, 
  GitFork, 
  BookOpen, 
  Github, 
  DollarSign, 
  Calculator as CalcIcon, 
  MessageCircle, 
  ShoppingBag, 
  FolderGit2, 
  Home as HomeIcon, 
  Gamepad2,
  Search,
  Filter,
  X,
  ArrowUpRight,
  Code2
} from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  fork?: boolean;
}

interface ProjectsProps {
  repos: Repository[];
}

const customDescriptions: Record<string, string> = {
  "Bank": "Modern architectural banking portal featuring finance modeling, cashflow visualizations, and high-fidelity layouts.",
  "Calculator": "Responsive arithmetic computational engine with dynamic theme presets and crisp mathematical precision.",
  "Chirp": "Microblogging real-time network engine featuring responsive social feeds, thread states, and interactive posts.",
  "Shopline": "Commercial-grade e-commerce storefront with reactive shopping carts, product catalogs, and checkout pipelines.",
  "Portfolio": "Cinematic developer portfolio showcasing progression in modern web engineering and design standards.",
  "My-homepage": "Customizable startpage command dashboard with active search engines, curated bookmark matrices, and widgets.",
  "TicTacToe": "Retro styled terminal grid puzzle game featuring local zero-latency state machines."
};

function getDemoLink(repoName: string, homepage?: string): string | null {
  if (homepage && homepage.trim()) {
    return homepage;
  }
  return null;
}

function getProjectIcon(repoName: string) {
  const cn = "w-5 h-5 text-white";
  switch (repoName) {
    case "Bank":
      return <DollarSign className={cn} />;
    case "Calculator":
      return <CalcIcon className={cn} />;
    case "Chirp":
      return <MessageCircle className={cn} />;
    case "Shopline":
      return <ShoppingBag className={cn} />;
    case "Portfolio":
      return <FolderGit2 className={cn} />;
    case "My-homepage":
      return <HomeIcon className={cn} />;
    case "TicTacToe":
      return <Gamepad2 className={cn} />;
    default:
      return <Code2 className={cn} />;
  }
}

export function Projects({ repos }: ProjectsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const sortedRepos = useMemo(() => {
    return [...repos]
      .filter(repo => !repo.fork) 
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  }, [repos]);

  const languages = useMemo(() => {
    const list = new Set<string>();
    repos.forEach(repo => {
      if (repo.language && !repo.fork) {
        list.add(repo.language);
      }
    });
    return ["All", ...Array.from(list)];
  }, [repos]);

  const filteredRepos = useMemo(() => {
    return sortedRepos.filter(repo => {
      const nameMatch = repo.name.toLowerCase().includes(searchQuery.toLowerCase());
      const descText = customDescriptions[repo.name] || repo.description || "";
      const descMatch = descText.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSearch = nameMatch || descMatch;

      const matchesLanguage = selectedLanguage === "All" || repo.language === selectedLanguage;

      return matchesSearch && matchesLanguage;
    });
  }, [sortedRepos, searchQuery, selectedLanguage]);

  return (
    <section id="works" className="py-28 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Ambient Glow */}
      <div 
        className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{
          background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.5) 0%, transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
              <span className="text-zinc-200 font-semibold flex items-center gap-1.5 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent-color)" }} />
                PROJECTS // PORTFOLIO
              </span>
              <span>•</span>
              <span className="text-zinc-400">APPLICATIONS & REPOSITORIES</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
              Featured Code & Projects.
            </h2>
            <p className="text-zinc-400 mt-3 max-w-xl text-sm md:text-base font-sans">
              Full-stack applications, interactive web tools, and open-source repositories built with modern TypeScript, React, and server architectures.
            </p>
          </div>

          <div className="text-xs font-mono text-orange-300 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/30 flex items-center gap-2 self-start md:self-auto shadow-[0_0_15px_rgba(var(--accent-rgb),0.15)]">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent-color)" }} />
            <span>Synced with GitHub</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 p-2.5 bg-zinc-950/70 border border-orange-500/20 rounded-2xl backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter repositories..."
              className="w-full bg-white/5 text-sm text-zinc-100 pl-10 pr-10 py-2.5 rounded-xl border border-white/5 focus:border-orange-500/50 focus:outline-none transition-colors font-mono focus:ring-1 focus:ring-orange-500/40"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Languages */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto px-2">
            {languages.map((lang) => {
              const isActive = selectedLanguage === lang;
              return (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`text-[11px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold border-transparent shadow-[0_0_15px_rgba(249,115,22,0.4)]" 
                      : "bg-white/5 text-zinc-400 border-white/10 hover:border-orange-500/30 hover:text-orange-200"
                  }`}
                >
                  {lang}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredRepos.map((repo, idx) => {
              const demoLink = getDemoLink(repo.name, repo.homepage);
              return (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group relative flex flex-col justify-between bg-zinc-950/70 border border-white/10 hover:border-orange-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-500 hover:shadow-[0_10px_35px_rgba(249,115,22,0.15)]"
                >
                  <div>
                    {/* Top Row: Icon & Language / Stars */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500/40 transition-transform duration-300">
                        {getProjectIcon(repo.name)}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        {repo.language && (
                          <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-200 font-medium">
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-[11px] text-zinc-400 group-hover:text-orange-300 transition-colors">
                          <Star className="w-3.5 h-3.5 text-orange-400/80" />
                          {repo.stargazers_count}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-2.5 group-hover:text-orange-200 transition-colors">
                      {repo.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                      {customDescriptions[repo.name] || repo.description || "Software repository and developer workspace tools."}
                    </p>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-5 border-t border-white/5 group-hover:border-orange-500/20 flex items-center justify-between gap-3 mt-auto transition-colors">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-orange-300 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>

                    {demoLink ? (
                      <a
                        href={demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black font-semibold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 px-3.5 py-1.5 rounded-full transition-all active:scale-95 shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-orange-300 transition-colors"
                      >
                        <span>Inspect Repo ↗</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
