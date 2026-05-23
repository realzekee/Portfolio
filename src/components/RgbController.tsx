import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sliders, Check, Zap, Sparkles, X, RefreshCw } from "lucide-react";

interface Preset {
  name: string;
  r: number;
  g: number;
  b: number;
  color: string;
}

const PRESETS: Preset[] = [
  { name: "Cyan Neon", r: 6, g: 182, b: 212, color: "bg-cyan-500" },
  { name: "Matrix Lime", r: 34, g: 197, b: 94, color: "bg-emerald-500" },
  { name: "Cyber Sunset", r: 236, g: 72, b: 153, color: "bg-pink-500" },
  { name: "Chili Red", r: 239, g: 68, b: 68, color: "bg-red-500" },
  { name: "Gamer Amber", r: 245, g: 158, b: 11, color: "bg-amber-500" },
];

export function RgbController() {
  const [isOpen, setIsOpen] = useState(false);
  const [r, setR] = useState(6);
  const [g, setG] = useState(182);
  const [b, setB] = useState(212);
  const [isRainbow, setIsRainbow] = useState(false);

  // Load initial settings
  useEffect(() => {
    const savedR = localStorage.getItem("rgb-r");
    const savedG = localStorage.getItem("rgb-g");
    const savedB = localStorage.getItem("rgb-b");
    const savedRainbow = localStorage.getItem("rgb-rainbow");

    if (savedR !== null) setR(Number(savedR));
    if (savedG !== null) setG(Number(savedG));
    if (savedB !== null) setB(Number(savedB));
    if (savedRainbow === "true") setIsRainbow(true);
  }, []);

  // Listen for set-rgb CustomEvent to allow external system adjustments (e.g. from the Terminal)
  useEffect(() => {
    const handleSetRGB = (e: Event) => {
      const customEvent = e as CustomEvent<{ r?: number; g?: number; b?: number; isRainbow?: boolean }>;
      if (customEvent.detail) {
        if (customEvent.detail.isRainbow !== undefined) {
          setIsRainbow(customEvent.detail.isRainbow);
        } else {
          setIsRainbow(false);
        }
        if (customEvent.detail.r !== undefined) setR(customEvent.detail.r);
        if (customEvent.detail.g !== undefined) setG(customEvent.detail.g);
        if (customEvent.detail.b !== undefined) setB(customEvent.detail.b);
      }
    };
    document.addEventListener("set-rgb", handleSetRGB);
    return () => document.removeEventListener("set-rgb", handleSetRGB);
  }, []);

  // Update document CSS properties and conditionally save custom coordinates
  useEffect(() => {
    if (!isRainbow) {
      localStorage.setItem("rgb-r", r.toString());
      localStorage.setItem("rgb-g", g.toString());
      localStorage.setItem("rgb-b", b.toString());
    }

    // Set CSS custom variables
    const root = document.documentElement;
    root.style.setProperty("--accent-rgb", `${r}, ${g}, ${b}`);
    root.style.setProperty("--accent-color", `rgb(${r}, ${g}, ${b})`);
  }, [r, g, b, isRainbow]);

  // Persists rainbow toggle setting only when changed, avoiding heavy continuous disk I/O
  useEffect(() => {
    localStorage.setItem("rgb-rainbow", isRainbow.toString());
  }, [isRainbow]);

  // Handle rainbow animation loop
  useEffect(() => {
    if (!isRainbow) return;

    let animationFrameId: number;
    let hue = 180; // Start near cyan

    const updateRainbow = () => {
      hue = (hue + 0.3) % 360;
      
      // Compute RGB from Hue (HSL color space helper with full saturation/medium lightness)
      const h = hue / 60;
      const x = (1 - Math.abs((h % 2) - 1)) * 255;
      
      let red = 0, green = 0, blue = 0;
      if (h >= 0 && h < 1) { red = 255; green = x; }
      else if (h >= 1 && h < 2) { red = x; green = 255; }
      else if (h >= 2 && h < 3) { green = 255; blue = x; }
      else if (h >= 3 && h < 4) { green = x; blue = 255; }
      else if (h >= 4 && h < 5) { red = x; blue = 255; }
      else { red = 255; blue = x; }

      setR(Math.round(red));
      setG(Math.round(green));
      setB(Math.round(blue));

      animationFrameId = requestAnimationFrame(updateRainbow);
    };

    animationFrameId = requestAnimationFrame(updateRainbow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRainbow]);

  const selectPreset = (p: Preset) => {
    setIsRainbow(false);
    setR(p.r);
    setG(p.g);
    setB(p.b);
  };

  const toggleRainbow = () => {
    setIsRainbow(prev => !prev);
  };

  return (
    <>
      {/* Floating Settings Trigger */}
      <motion.button
        id="rgb-controller-trigger"
        onClick={() => setIsOpen(prev => !isOpen)}
        style={{
          boxShadow: `0 10px 25px -5px rgba(${r}, ${g}, ${b}, 0.2)`
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-zinc-900 border border-zinc-800 text-white w-14 h-14 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="settings"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center text-zinc-100"
            >
              <Sliders className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
              {/* RGB running dot indicator */}
              <span 
                style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
                className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border border-zinc-950 transition-colors duration-300"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Slide-out RGB Customizer panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="rgb-control-panel"
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-32px)] sm:w-[360px] bg-zinc-950/95 backdrop-blur-xl border border-zinc-900 rounded-2xl p-6 flex flex-col shadow-2xl shadow-cyan-500/5 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-5">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-zinc-100" style={{ color: `rgb(${r}, ${g}, ${b})` }} />
                <span className="font-mono text-sm font-semibold text-zinc-100">RGB Glow Sync</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">
                Vibe Settings
              </span>
            </div>

            {/* Rainbow Shift Toggle Mode */}
            <button
              onClick={toggleRainbow}
              style={{
                borderColor: isRainbow ? `rgba(${r}, ${g}, ${b}, 0.5)` : "rgba(39, 39, 42, 0.4)",
                backgroundColor: isRainbow ? `rgba(${r}, ${g}, ${b}, 0.08)` : "rgba(24, 24, 27, 0.4)",
              }}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl border text-left transition-all duration-300 hover:border-zinc-700/80 mb-5 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <RefreshCw className={`w-4 h-4 text-zinc-400 ${isRainbow ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} style={{ color: isRainbow ? `rgb(${r}, ${g}, ${b})` : undefined }} />
                <div>
                  <div className="text-xs font-semibold text-zinc-200">Rainbow Color Cycle</div>
                  <div className="text-[10px] text-zinc-500">Autonomous dynamic color rotation</div>
                </div>
              </div>
              <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${isRainbow ? 'bg-cyan-500' : 'bg-zinc-800'}`} style={{ backgroundColor: isRainbow ? `rgb(${r}, ${g}, ${b})` : undefined }}>
                <div className={`w-3 h-3 rounded-full bg-zinc-950 transition-transform ${isRainbow ? 'translate-x-4' : 'translate-x-0'}`} />
              </div>
            </button>

            {/* Presets Grid */}
            <div className="mb-5">
              <div className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider mb-2.5 px-0.5 flex justify-between">
                <span>Accent Presets</span>
                {isRainbow && <span className="text-zinc-400 font-bold animate-pulse text-[9px]">Cycle Active</span>}
              </div>
              <div className="grid grid-cols-5 gap-2.5">
                {PRESETS.map((preset, idx) => {
                  const isActive = !isRainbow && r === preset.r && g === preset.g && b === preset.b;
                  return (
                    <button
                      key={idx}
                      onClick={() => selectPreset(preset)}
                      title={preset.name}
                      style={{
                        borderColor: isActive ? `rgb(${preset.r}, ${preset.g}, ${preset.b})` : "rgba(63, 63, 70, 0.6)"
                      }}
                      className={`relative aspect-square rounded-lg flex items-center justify-center p-0.5 border-2 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${preset.color} bg-opacity-70`}
                    >
                      {isActive && <Check className="w-4 h-4 text-zinc-950 stroke-[3px]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Sliders */}
            <div className="space-y-4 pt-4 border-t border-zinc-900">
              <div className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider mb-1 px-0.5">
                Custom Coordinates
              </div>

              {/* R Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Red</span>
                  <span>{r}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={r}
                  onChange={(e) => {
                    setIsRainbow(false);
                    setR(Number(e.target.value));
                  }}
                  className="w-full accent-red-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* G Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Green</span>
                  <span>{g}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={g}
                  onChange={(e) => {
                    setIsRainbow(false);
                    setG(Number(e.target.value));
                  }}
                  className="w-full accent-green-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* B Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Blue</span>
                  <span>{b}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={b}
                  onChange={(e) => {
                    setIsRainbow(false);
                    setB(Number(e.target.value));
                  }}
                  className="w-full accent-blue-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Bottom visual verification */}
            <div className="mt-5 pt-3 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span>CSS: --accent-rgb</span>
              <span className="text-zinc-400">rgb({r}, {g}, {b})</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
