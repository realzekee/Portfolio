import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Copy, Check, ArrowUpRight, Sparkles, Send } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "realzekee@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Dynamic ambient backlight */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full blur-[160px] pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.55) 0%, transparent 70%)`
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Tag */}
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
            <span className="text-zinc-200 font-semibold flex items-center gap-1.5 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent-color)" }} />
              TRANSMISSION & INQUIRIES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight uppercase max-w-3xl leading-[1.05] mb-6">
            Let's Build Something <span className="italic font-serif font-light text-orange-400">Exceptional.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed mb-10">
            Available for high-impact software engineering roles, bespoke frontend architectures, full-stack web applications, and technical collaborations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            {/* Direct Email Action */}
            <a 
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-black px-8 py-4 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all active:scale-95 w-full sm:w-auto shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:shadow-[0_0_40px_rgba(249,115,22,0.55)] cursor-pointer"
            >
              <Mail className="w-4 h-4 text-black" />
              <span>Send Message</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </a>

            {/* Quick Copy Action */}
            <button 
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2.5 bg-white/5 text-zinc-300 hover:text-orange-200 px-7 py-4 rounded-full font-mono text-xs uppercase tracking-wider border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all active:scale-95 w-full sm:w-auto cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Address Badge */}
          <div className="mt-8 text-xs font-mono text-zinc-400 bg-zinc-950/80 border border-orange-500/25 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]">
            <span className="text-orange-400 font-semibold">DIRECT //</span>
            <span className="text-white font-medium select-all">{email}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
