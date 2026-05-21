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
  X
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
  "Bank": "A modern banking web application demo featuring structural finance models, interactive flowcharts, and sleek UI.",
  "Calculator": "Clean arithmetic solver with responsive layouts and pixel-perfect theme adjustments.",
  "Chirp": "Real-time Twitter clone with microblogging mechanics, custom timelines, and interactive feed updates.",
  "Shopline": "Scaled e-commerce storefront with cart mechanics, product displays, reminiscent of modern retail portals.",
  "Portfolio": "My developmental portfolio illustrating progression in frontend design standards.",
  "My-homepage": "Customizable start page dashboard with active search integration, bookmark grouping, and widgets.",
  "TicTacToe": "Web-native terminal-styled grid game featuring elegant local win state-machines."
};

function getDemoLink(repoName: string, homepage?: string): string | null {
  if (homepage && homepage.trim()) {
    return homepage;
  }
  return null;
}

// Obtain specific icon helper
function getProjectIcon(repoName: string) {
  const cn = "w-5 h-5 transition-transform duration-300 group-hover:scale-110";
  switch (repoName) {
    case "Bank":
      return <DollarSign className={`${cn} text-cyan-400`} />;
    case "Calculator":
      return <CalcIcon className={`${cn} text-purple-400`} />;
    case "Chirp":
      return <MessageCircle className={`${cn} text-sky-400`} />;
    case "Shopline":
      return <ShoppingBag className={`${cn} text-emerald-400`} />;
    case "Portfolio":
      return <FolderGit2 className={`${cn} text-indigo-400`} />;
    case "My-homepage":
      return <HomeIcon className={`${cn} text-amber-400`} />;
    case "TicTacToe":
      return <Gamepad2 className={`${cn} text-rose-400`} />;
    default:
      return <BookOpen className={`${cn} text-zinc-400`} />;
  }
}

export function Projects({ repos }: ProjectsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  // Sort by stars first
  const sortedRepos = useMemo(() => {
    return [...repos]
      .filter(repo => !repo.fork) 
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  }, [repos]);

  // Extract unique languages present in repos
  const languages = useMemo(() => {
    const list = new Set<string>();
    repos.forEach(repo => {
      if (repo.language && !repo.fork) {
        list.add(repo.language);
      }
    });
    return ["All", ...Array.from(list)];
  }, [repos]);

  // Filter items based on search query and selected language
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
    <section id="projects" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Dynamic Ambient Background Glow */}
      <div 
        style={{
          background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.04) 0%, transparent 70%)`
        }}
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent-color)" }}>Live Deployments</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Applications</h2>
            <p className="text-zinc-400 max-w-xl text-sm md:text-base">
              Fully functional creations built with high-fidelity interaction. Explore their live demo links or view source codes.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-500 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-900 flex items-center gap-2 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent-color)" }} />
            <span>Live Deployments Synced</span>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col gap-4 mb-10 bg-zinc-950/40 p-4 rounded-2xl border border-zinc-900/60 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search applications..."
                className="w-full bg-zinc-900/60 text-sm text-zinc-200 pl-10 pr-10 py-2.5 rounded-xl border border-zinc-800/80 focus:border-zinc-700 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Language filter pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar py-1">
              <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 mr-2">
                <Filter className="w-3 h-3" />
                Filter:
              </span>
              {languages.map((lang) => {
                const isActive = selectedLanguage === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    style={{
                      borderColor: isActive ? "var(--accent-color)" : undefined,
                      backgroundColor: isActive ? "rgba(var(--accent-rgb), 0.08)" : undefined,
                      color: isActive ? "var(--accent-color)" : undefined
                    }}
                    className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${
                      isActive 
                        ? "border-[2px]" 
                        : "border-zinc-805 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700/80"
                    } cursor-pointer`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* No Results Fallback */}
        {filteredRepos.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-zinc-850 rounded-2xl bg-zinc-950/20"
          >
            <BookOpen className="w-10 h-10 text-zinc-650 mb-3" />
            <h3 className="font-semibold text-zinc-300 mb-1">No matching applications</h3>
            <p className="text-xs text-zinc-500 max-w-xs">
              Try adjusting your search keywords or switching filters to find repositories.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredRepos.map((repo, i) => {
              const demoLink = getDemoLink(repo.name, repo.homepage);
              return (
                <motion.div
                  key={repo.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col justify-between bg-zinc-950 border border-zinc-900 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:bg-[#0c0c0c]"
                  style={{
                    borderColor: "rgba(var(--accent-rgb), 0.1)"
                  }}
                  whileHover={{ borderColor: "rgba(var(--accent-rgb), 0.35)" }}
                >
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center">
                        {getProjectIcon(repo.name)}
                      </div>
                      
                      {/* Repository Stats */}
                      <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                        {repo.language && (
                          <span className="bg-zinc-900 border border-zinc-850/80 text-[10px] text-zinc-400 px-2.5 py-0.5 rounded-full">
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-zinc-600" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5 text-zinc-600" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-zinc-100 mb-2.5">
                      {repo.name}
                    </h3>
                    
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {customDescriptions[repo.name] || repo.description || "Experimental repository setup and developer workspace elements."}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-zinc-900 flex flex-col sm:flex-row items-center gap-3 mt-auto">
                    {/* Readme or Code Link */}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-center gap-2 text-xs font-mono font-medium text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 px-4 py-2.5 rounded-xl border border-zinc-850 ${
                        demoLink ? "w-full sm:w-auto" : "w-full"
                      } transition-colors`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>

                    {/* Live Demo Link */}
                    {demoLink && (
                      <a
                        href={demoLink}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          boxShadow: `0 0 10px rgba(var(--accent-rgb), 0.05)`,
                          backgroundColor: "var(--accent-color)"
                        }}
                        className="flex-1 flex items-center justify-center gap-2 text-xs font-mono font-semibold text-zinc-950 hover:opacity-90 px-4 py-2.5 rounded-xl w-full hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                      >
                        <span>⚡ Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
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
