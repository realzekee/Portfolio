import { motion } from "motion/react";
import { Mail, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-cyan-400 font-mono text-sm mb-4">What's Next?</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:realzekee@gmail.com"
              className="flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition-all active:scale-95 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
            <a 
              href="https://github.com/realzekee"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold border border-zinc-800 hover:bg-zinc-800 transition-all active:scale-95 w-full sm:w-auto justify-center"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
