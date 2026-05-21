import { motion } from "motion/react";
import { Code2, Server, Layout, Landmark, GraduationCap, Zap, Smartphone, Globe } from "lucide-react";

export function SkillsStack() {
  const categories = [
    {
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      title: "Front-end Architecture",
      desc: "Creating pixel-perfect, highly responsive interfaces using React, TypeScript, and modern state controls.",
      skills: ["React 18 & 19", "Vite", "Tailwind CSS", "Motion Animations"]
    },
    {
      icon: <Server className="w-6 h-6 text-purple-400" />,
      title: "Full-Stack Integrations",
      desc: "Building lightweight runtime backends, clean API proxy setups, and secure client-server communication channels.",
      skills: ["Node.js", "Express.js", "REST APIs", "Vercel Deployments"]
    },
    {
      icon: <Landmark className="w-6 h-6 text-amber-400" />,
      title: "Commercial-Ready Logic",
      desc: "Simulating functional transaction engines, e-commerce flow dynamics, social timeline architectures, and secure state storage.",
      skills: ["Bank Portals", "Social feeds (Chirp)", "E-commerce (Shopline)", "Interactive TicTacToe"]
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: "Performance & DX",
      desc: "Adhering to micro-bundle footprints, modern bundling processes, clear responsive layouts, and outstanding design fidelity.",
      skills: ["TypeScript strictly-typed", "Modular structure", "Cross-browser testing", "Custom homepages"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative ambient path */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">Core Expertise</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technical Focus</h2>
          <p className="text-zinc-400 max-w-xl">
            A breakdown of my foundational architecture, workflow patterns, and production-minded engineering practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-all group hover:bg-[#0f0f0f]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-zinc-100">{cat.title}</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {cat.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-zinc-400 px-2.5 py-1 bg-zinc-900 border border-zinc-800/80 rounded-md hover:border-cyan-500/30 transition-colors"
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
