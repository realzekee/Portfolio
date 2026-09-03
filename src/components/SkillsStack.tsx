import { motion } from "motion/react";
import { Code2, Server, Layout, Landmark, Sparkles, Zap, Cpu, Terminal, Shield, GitBranch, Database, Cloud } from "lucide-react";

export function SkillsStack() {
  const capabilities = [
    {
      id: "skills-frontend",
      icon: <Layout className="w-5 h-5 text-white" />,
      title: "Frontend Engineering",
      badge: "CORE // ARCHITECTURE",
      desc: "Architecting responsive, high-performance web applications with modular TypeScript components, fluid micro-interactions, state machines, and accessible UI systems.",
      skills: ["React 19 & 18", "TypeScript", "Tailwind CSS", "Motion", "Vite", "Next.js", "State Machines"]
    },
    {
      id: "skills-backend",
      icon: <Server className="w-5 h-5 text-white" />,
      title: "Backend & Runtime APIs",
      badge: "CORE // SYSTEMS",
      desc: "Developing lightweight runtime services, server-side API proxies, REST endpoints, database layers, token pipelines, and secure CORS headers.",
      skills: ["Node.js", "Express", "REST APIs", "Vercel / Cloud Run", "Security & CORS", "JSON Schemas"]
    },
    {
      id: "skills-logic",
      icon: <Cpu className="w-5 h-5 text-white" />,
      title: "Application & Product Logic",
      badge: "CORE // LOGIC",
      desc: "Transforming complex requirements into robust software systems: financial computation, social feeds, reactive shopping carts, search engines, and real-time state loops.",
      skills: ["Data Structures", "Local Persistence", "E-Commerce Engines", "Telemetry Logging", "Zero-Latency UI"]
    },
    {
      id: "skills-devops",
      icon: <Cloud className="w-5 h-5 text-white" />,
      title: "DevOps, Cloud & Tooling",
      badge: "CORE // INFRASTRUCTURE",
      desc: "Streamlining deployment workflows, continuous integration, version control, build optimizers, and automated container environments.",
      skills: ["Git & GitHub Actions", "Docker / Cloud Run", "ESBuild & Rollup", "CI/CD Pipelines", "Linux / Bash Shell", "API Integration"]
    }
  ];

  return (
    <section id="capabilities" className="py-28 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{
          background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.45) 0%, transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
              <span className="text-zinc-200 font-semibold flex items-center gap-1.5 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent-color)" }} />
                SKILLS & TECH STACK
              </span>
              <span>•</span>
              <span className="text-zinc-400">TOOLS & FRAMEWORKS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
              Skills & Technologies.
            </h2>
            <p className="text-zinc-400 mt-3 max-w-xl text-sm md:text-base font-sans">
              Comprehensive expertise across full-stack web engineering, reactive client architectures, scalable backend services, and modern cloud deployment.
            </p>
          </div>

          <div className="text-xs font-mono text-orange-300 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/30 flex items-center gap-2 self-start md:self-auto shadow-[0_0_15px_rgba(var(--accent-rgb),0.15)]">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent-color)" }} />
            <span>FULL-STACK ENGINEERING STACK</span>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-zinc-950/70 border border-white/10 hover:border-orange-500/40 rounded-2xl p-7 sm:p-8 transition-all duration-500 hover:shadow-[0_10px_35px_rgba(249,115,22,0.15)] flex flex-col justify-between scroll-mt-24"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500/50 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-orange-300 px-2.5 py-1 rounded bg-orange-500/10 border border-orange-500/25">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-orange-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 group-hover:border-orange-500/20 transition-colors">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono text-zinc-300 px-3 py-1 bg-white/5 border border-white/10 rounded-lg hover:border-orange-500/35 hover:text-orange-200 hover:bg-orange-500/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
