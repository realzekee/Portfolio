import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Terminal as TerminalIcon, CornerDownLeft, RefreshCw, Smartphone, Circle } from "lucide-react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "success" | "info";
}

interface CommandHistory {
  command: string;
}

export function Terminal({ githubUser }: { githubUser: any }) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: "Zeke-OS Shell v1.0.0 (Interactive Workspace Terminal)", type: "info" },
    { text: "System connection established securely over SSL.", type: "success" },
    { text: "Type 'help' to unlock custom console commands.", type: "info" },
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

    // Add to state and history
    const newLines = [...lines, { text: `Guest@ZekePortfolio ~ % ${cmd}`, type: "input" as const }];
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
            { text: "Available commands:", type: "info" },
            { text: "  help       Display list of available instructions.", type: "info" },
            { text: "  about      Tell me more about Zeke and his experience.", type: "info" },
            { text: "  skills     Produce core visual tech-stack analysis.", type: "info" },
            { text: "  projects   Load dynamically linked public deployments.", type: "info" },
            { text: "  color      Change accent color coordinates.", type: "info" },
            { text: "             Modes: color [cyan|lime|pink|red|amber|rainbow].", type: "info" },
            { text: "  whoami     Show user environment telemetry.", type: "info" },
            { text: "  socials    List interactive professional pipelines.", type: "info" },
            { text: "  clear      Clear the command history screen.", type: "info" }
          ];
          break;

        case "about":
          outputLines = [
            { text: `Developer Profile: ${githubUser?.name || "Zeke"}`, type: "success" },
            { text: `${githubUser?.bio || "Advanced software engineering generalist specialized in responsive client interfaces and elegant styling frameworks."}`, type: "info" },
            { text: "Location: Earth Orbit (UTC timezone setup synced)", type: "info" },
            { text: "Approach: Pristine ergonomics, meticulous typography rhythm, structural fidelity.", type: "success" }
          ];
          break;

        case "skills":
          outputLines = [
            { text: "System Tech-Stack Analysis Matrix:", type: "info" },
            { text: "  TypeScript    [====================] 100% - Fully Type-Safe", type: "success" },
            { text: "  React / SPA   [==================  ] 90%  - High Fidelity", type: "success" },
            { text: "  CSS / Tailwind[====================] 100% - Pixel Perfect", type: "success" },
            { text: "  Node / API    [=================   ] 85%  - Real Integrations", type: "success" }
          ];
          break;

        case "projects":
          outputLines = [
            { text: "Fetching Active repositories...", type: "info" },
            { text: "  - Bank (Highly descriptive architectural mock)", type: "success" },
            { text: "  - Calculator (Custom themes arithmetic solver)", type: "success" },
            { text: "  - Chirp (Microblogging real-time layout feed)", type: "success" },
            { text: "  - Shopline (Modular reactive storefront portal)", type: "success" },
            { text: "  - TicTacToe (High fidelity state game loop math)", type: "success" },
            { text: "Tip: Click matching cards down in the portfolio to review!", type: "info" }
          ];
          break;

        case "color":
          if (args.length === 0) {
            outputLines = [
              { text: "Syntax Error. Call like: color [cyan | lime | pink | red | amber | rainbow]", type: "error" },
              { text: "Example: color pink", type: "info" }
            ];
          } else {
            const targetColor = args[0].toLowerCase();
            let eventDetail: any = null;

            if (targetColor === "cyan") eventDetail = { r: 6, g: 182, b: 212 };
            else if (targetColor === "lime" || targetColor === "green" || targetColor === "matrix") eventDetail = { r: 34, g: 197, b: 94 };
            else if (targetColor === "pink" || targetColor === "sunset" || targetColor === "cyber") eventDetail = { r: 236, g: 72, b: 153 };
            else if (targetColor === "red") eventDetail = { r: 239, g: 68, b: 68 };
            else if (targetColor === "amber" || targetColor === "orange") eventDetail = { r: 245, g: 158, b: 11 };
            else if (targetColor === "rainbow" || targetColor === "cycle") eventDetail = { isRainbow: true };

            if (eventDetail) {
              const event = new CustomEvent("set-rgb", { detail: eventDetail });
              document.dispatchEvent(event);
              outputLines = [
                { text: `System Theme Synchronized successfully to [${targetColor.toUpperCase()}].`, type: "success" },
                { text: "CSS environment variables redefined across layouts.", type: "info" }
              ];
            } else {
              outputLines = [
                { text: `Unknown tone coordinate: '${targetColor}'.`, type: "error" },
                { text: "Available parameters: cyan, lime, pink, red, amber, rainbow", type: "info" }
              ];
            }
          }
          break;

        case "whoami":
          outputLines = [
            { text: "Active Process: Guest Terminal Pipeline", type: "info" },
            { text: "Privileges: Developer Preview Access", type: "info" },
            { text: "Browser Sandbox: Clean Responsive Frame", type: "success" },
            { text: `Telemetry Origin: realzekeee@gmail.com`, type: "info" }
          ];
          break;

        case "socials":
          outputLines = [
            { text: "Zeke's Communications Terminal Linkages:", type: "info" },
            { text: "  GitHub:   https://github.com/realzekee", type: "success" },
            { text: "  LinkedIn: Under secure assembly", type: "info" },
            { text: "  Electronic Mail: realzekee@gmail.com", type: "success" }
          ];
          break;

        case "clear":
          setLines([]);
          return;

        default:
          outputLines = [
            { text: `bash: command not found: ${commandName}.`, type: "error" },
            { text: "Type 'help' to review structural instructions.", type: "info" }
          ];
      }

      setLines(prev => [...prev, ...outputLines, { text: "", type: "info" }]);
    }, 100);
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
    <section id="terminal" className="py-16 bg-[#090909] relative border-b border-zinc-900/60 overflow-hidden">
      <div 
        style={{
          background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.03) 0%, transparent 70%)`
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "var(--accent-color)" }}>Playground Module</div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <TerminalIcon className="w-5 h-5" />
              Developer Command Shell
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-zinc-950 px-3 py-1 rounded-lg border border-zinc-900 text-[10px] font-mono text-zinc-500">
            <span>Arrow keys for history</span>
          </div>
        </div>

        {/* Terminal frame mimicking retro monitor window */}
        <div 
          onClick={focusInput}
          className="w-full bg-zinc-950 border border-zinc-900 shadow-2xl rounded-2xl overflow-hidden cursor-text flex flex-col font-mono text-sm leading-relaxed"
          style={{
            minHeight: "360px",
            boxShadow: `0 20px 45px -10px rgba(var(--accent-rgb), 0.03)`
          }}
        >
          {/* Header Panel */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-900/80">
            <div className="flex items-center gap-1.5 select-none">
              <Circle className="w-3 h-3 text-red-500/80 fill-red-500/50" />
              <Circle className="w-3 h-3 text-yellow-500/80 fill-yellow-500/50" />
              <Circle className="w-3 h-3 text-green-500/80 fill-green-500/50" />
            </div>
            <span className="text-xs text-zinc-500 select-none flex items-center gap-1.5 font-sans font-medium">
              <Smartphone className="w-3.5 h-3.5" /> guest@zeke-portfolio:~
            </span>
            <div className="w-12" />
          </div>

          {/* Scrollable output window */}
          <div 
            ref={scrollRef}
            className="flex-1 p-5 overflow-y-auto max-h-[300px] text-zinc-350 space-y-1.5"
          >
            {lines.map((line, idx) => {
              if (line.type === "input") {
                return (
                  <div key={idx} className="text-zinc-100 font-semibold">
                    {line.text}
                  </div>
                );
              }
              if (line.type === "success") {
                return (
                  <div key={idx} className="text-emerald-500/90">
                    {line.text}
                  </div>
                );
              }
              if (line.type === "error") {
                return (
                  <div key={idx} className="text-red-500/90 font-medium">
                    {line.text}
                  </div>
                );
              }
              if (line.type === "info") {
                return (
                  <div key={idx} className="text-zinc-500 text-xs sm:text-sm">
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

          {/* Input field block line */}
          <form 
            onSubmit={handleCommandSubmit}
            className="flex items-center gap-2 border-t border-zinc-900 px-5 py-3.5 bg-zinc-950"
          >
            <span className="font-semibold" style={{ color: "var(--accent-color)" }}>
              Guest@ZekePortfolio ~ %
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-zinc-100 border-none outline-none focus:ring-0 font-mono text-sm"
              placeholder="type help..."
            />
            <button 
              type="submit" 
              className="text-zinc-650 hover:text-white transition-colors cursor-pointer"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
