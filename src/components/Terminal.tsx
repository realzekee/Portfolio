import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Terminal as TerminalIcon, CornerDownLeft, RefreshCw, Circle, Sparkles, Zap, Shield, Code2 } from "lucide-react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "success" | "info";
}

interface CommandHistory {
  command: string;
}

export function Terminal({ githubUser }: { githubUser: any }) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: "ZEKE-OS Kernel v2.4.0 [Developer Shell Active]", type: "info" },
    { text: "Session initialized with TLS 1.3 encryption. Runtime: Node.js / React.", type: "success" },
    { text: "Type 'help' to review operational commands or 'color' to shift themes.", type: "info" },
    { text: "", type: "info" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.trim();
    if (!cmd) return;

    const newLines = [...lines, { text: `zeke@developer ~ % ${cmd}`, type: "input" as const }];
    setCommandHistory(prev => [{ command: cmd }, ...prev]);
    setHistoryIndex(-1);
    setInputValue("");

    const parts = cmd.split(" ");
    const commandName = parts[0].toLowerCase();
    const args = parts.slice(1);

    setTimeout(() => {
      let outputLines: TerminalLine[] = [];

      switch (commandName) {
        case "help":
          outputLines = [
            { text: "Available System Directives:", type: "info" },
            { text: "  help       List all operational console directives.", type: "info" },
            { text: "  about      Output biography, engineering stack & background.", type: "info" },
            { text: "  skills     Display technical software stack and architecture.", type: "info" },
            { text: "  works      Show active software repositories and live demos.", type: "info" },
            { text: "  repos      Query repository list from GitHub API.", type: "info" },
            { text: "  color      Calibrate ambient lighting coordinates.", type: "info" },
            { text: "             Syntax: color [orange | red | cyan | lime | violet | amber | rainbow]", type: "info" },
            { text: "  whoami     Show user session telemetry.", type: "info" },
            { text: "  socials    List communications and transmission links.", type: "info" },
            { text: "  clear      Flush terminal display buffer.", type: "info" }
          ];
          break;

        case "about":
          outputLines = [
            { text: `Profile: ${githubUser?.name || "Zeke"}`, type: "success" },
            { text: "Role: Full-Stack Software Engineer & Frontend Architect", type: "info" },
            { text: "Core Technologies: TypeScript, React 19, Tailwind CSS, Node.js, Express", type: "info" },
            { text: "Engineering Focus: Responsive web applications, performance, and developer tools.", type: "info" },
            { text: "Status: Open for engineering roles, technical collaboration, and contracts.", type: "success" }
          ];
          break;

        case "skills":
        case "stack":
          outputLines = [
            { text: "Technical Capabilities Matrix:", type: "info" },
            { text: "  [01] TypeScript / JavaScript ESNext [====================] 100%", type: "success" },
            { text: "  [02] React 19 & Next.js Architecture [====================] 100%", type: "success" },
            { text: "  [03] Tailwind CSS / Fluid Animations [====================] 100%", type: "success" },
            { text: "  [04] Node.js / Express / REST APIs   [==================  ] 90%", type: "success" },
            { text: "  [05] Git / CI/CD / Docker Deployment [==================  ] 90%", type: "success" }
          ];
          break;

        case "works":
        case "projects":
        case "repos":
          outputLines = [
            { text: "Featured Software Projects:", type: "info" },
            { text: "  • Bank       - Modern architectural finance portal & cashflow visualizer", type: "success" },
            { text: "  • Calculator - High-precision arithmetic computational engine", type: "success" },
            { text: "  • Chirp      - Microblogging real-time network feed engine", type: "success" },
            { text: "  • Shopline   - Commercial e-commerce platform & reactive cart", type: "success" },
            { text: "  • Portfolio  - Interactive developer portfolio & kernel shell", type: "success" },
            { text: "  • TicTacToe  - Zero-latency terminal game loop & state machine", type: "success" },
            { text: "Tip: Navigate to 'Projects' above to test live interactive builds.", type: "info" }
          ];
          break;

        case "color":
          if (args.length === 0) {
            outputLines = [
              { text: "Syntax Error. Usage: color [red | cyan | lime | violet | amber | rainbow]", type: "error" },
              { text: "Example: color cyan", type: "info" }
            ];
          } else {
            const targetColor = args[0].toLowerCase();
            let eventDetail: any = null;

            if (targetColor === "orange" || targetColor === "solar") eventDetail = { r: 249, g: 115, b: 22 };
            else if (targetColor === "red" || targetColor === "crimson" || targetColor === "novara") eventDetail = { r: 239, g: 68, b: 68 };
            else if (targetColor === "cyan" || targetColor === "blue") eventDetail = { r: 6, g: 182, b: 212 };
            else if (targetColor === "lime" || targetColor === "green" || targetColor === "emerald") eventDetail = { r: 34, g: 197, b: 94 };
            else if (targetColor === "violet" || targetColor === "purple" || targetColor === "sunset") eventDetail = { r: 168, g: 85, b: 247 };
            else if (targetColor === "amber" || targetColor === "gold") eventDetail = { r: 245, g: 158, b: 11 };
            else if (targetColor === "rainbow" || targetColor === "cycle") eventDetail = { isRainbow: true };

            if (eventDetail) {
              const event = new CustomEvent("set-rgb", { detail: eventDetail });
              document.dispatchEvent(event);
              outputLines = [
                { text: `Ambient theme synchronized to [${targetColor.toUpperCase()}].`, type: "success" },
                { text: "CSS root variables recalculated across layout hierarchy.", type: "info" }
              ];
            } else {
              outputLines = [
                { text: `Unknown color parameter: '${targetColor}'.`, type: "error" },
                { text: "Supported options: orange, red, cyan, lime, violet, amber, rainbow", type: "info" }
              ];
            }
          }
          break;

        case "whoami":
          outputLines = [
            { text: "Host: Zeke Developer Environment", type: "info" },
            { text: "Discipline: Full-Stack Software Engineering & Web Architecture", type: "info" },
            { text: "GitHub: https://github.com/realzekee", type: "success" },
            { text: "Contact: realzekee@gmail.com", type: "success" }
          ];
          break;

        case "socials":
        case "contact":
          outputLines = [
            { text: "Verified Developer Channels:", type: "info" },
            { text: "  GitHub:   https://github.com/realzekee", type: "success" },
            { text: "  Email:    realzekee@gmail.com", type: "success" }
          ];
          break;

        case "clear":
          setLines([]);
          return;

        default:
          outputLines = [
            { text: `bash: directive not recognized: ${commandName}.`, type: "error" },
            { text: "Type 'help' to review valid operations.", type: "info" }
          ];
      }

      setLines(prev => [...prev, ...outputLines, { text: "", type: "info" }]);
    }, 80);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInputValue(commandHistory[nextIdx].command);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputValue(commandHistory[nextIdx].command);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue("");
      }
    }
  };

  return (
    <section id="terminal" className="py-28 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div 
        style={{
          background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.2) 0%, transparent 70%)`
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full blur-[140px] pointer-events-none opacity-35" 
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        {/* Telemetry Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
              <span className="text-zinc-200 font-semibold flex items-center gap-1.5 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent-color)" }} />
                ZEKE-OS KERNEL SHELL
              </span>
              <span>•</span>
              <span className="text-zinc-400">INTERACTIVE CONSOLE</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white uppercase flex items-center gap-3">
              <TerminalIcon className="w-7 h-7 text-orange-400" />
              Developer Shell.
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/25 text-[10px] font-mono text-orange-300">
            <span>Arrow keys for history • type 'help'</span>
          </div>
        </div>

        {/* Terminal Window Container */}
        <div 
          onClick={focusInput}
          className="w-full bg-zinc-950/85 backdrop-blur-xl border border-white/10 hover:border-orange-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:shadow-[0_10px_40px_rgba(249,115,22,0.15)] rounded-2xl overflow-hidden cursor-text flex flex-col font-mono text-sm leading-relaxed transition-all duration-500"
          style={{
            minHeight: "380px",
          }}
        >
          <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-900/70 border-b border-white/10">
            <div className="flex items-center gap-2 select-none">
              <Circle className="w-3 h-3 text-orange-500/90 fill-orange-500/60" />
              <Circle className="w-3 h-3 text-amber-500/90 fill-amber-500/60" />
              <Circle className="w-3 h-3 text-zinc-600 fill-zinc-600" />
            </div>
            <span className="text-xs text-orange-300/80 select-none flex items-center gap-2 font-mono">
              <Shield className="w-3.5 h-3.5 text-orange-400/80" /> zeke@developer-terminal:~
            </span>
            <div className="w-12" />
          </div>

          {/* Output Display Buffer */}
          <div 
            ref={scrollRef}
            className="flex-1 p-6 overflow-y-auto max-h-[320px] space-y-1.5"
          >
            {lines.map((line, idx) => {
              if (line.type === "input") {
                return (
                  <div key={idx} className="text-white font-semibold">
                    {line.text}
                  </div>
                );
              }
              if (line.type === "success") {
                return (
                  <div key={idx} className="text-orange-300">
                    {line.text}
                  </div>
                );
              }
              if (line.type === "error") {
                return (
                  <div key={idx} className="text-red-400 font-medium">
                    {line.text}
                  </div>
                );
              }
              if (line.type === "info") {
                return (
                  <div key={idx} className="text-zinc-400 text-xs sm:text-sm">
                    {line.text}
                  </div>
                );
              }
              return (
                <div key={idx} className="text-zinc-300">
                  {line.text}
                </div>
              );
            })}
          </div>

          <form 
            onSubmit={handleCommandSubmit}
            className="flex items-center gap-2.5 border-t border-white/10 px-6 py-4 bg-black/50"
          >
            <span className="font-semibold text-xs sm:text-sm" style={{ color: "var(--accent-color)" }}>
              zeke@developer ~ %
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white border-none outline-none focus:ring-0 font-mono text-sm placeholder:text-zinc-600"
              placeholder="type help..."
            />
            <button 
              type="submit" 
              className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
