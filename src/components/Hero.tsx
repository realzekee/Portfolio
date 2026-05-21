import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";

interface HeroProps {
  githubUser: any;
}

export function Hero({ githubUser }: HeroProps) {
  return (
    <section id="about" className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm mb-6">
            <Terminal className="w-4 h-4" />
            <span>Hello, world. I am</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            {githubUser?.name || "Zeke"}
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            {githubUser?.bio || "A passionate software developer building elegant, commercial-ready digital experiences and robust applications."}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects"
              className="group flex items-center gap-2 bg-zinc-100 text-zinc-900 px-6 py-3 rounded-full font-medium hover:bg-white transition-all active:scale-95"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://github.com/realzekee"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-zinc-900 text-zinc-300 px-6 py-3 rounded-full font-medium border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all active:scale-95"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-zinc-800/50 pt-10"
        >
          <div>
            <div className="text-3xl font-bold text-white mb-1">{githubUser?.public_repos || "0"}</div>
            <div className="text-sm font-mono text-zinc-500">Public Repositories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">{githubUser?.followers || "0"}</div>
            <div className="text-sm font-mono text-zinc-500">Followers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
