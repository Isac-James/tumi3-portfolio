"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FlaskConical,
  ArrowUpRight,
  Sparkles,
  Zap,
  Terminal,
  Shield,
  Play,
  RotateCcw,
  CheckCircle2,
  Cpu,
  Layers,
  Code2,
  TrendingDown,
  Mountain
} from "lucide-react";

interface LabExperiment {
  id: string;
  n: string;
  title: string;
  tag: string;
  status: "ACTIVE EXPERIMENT" | "BUILDING" | "SHIPPED RESEARCH" | "PROTOTYPE";
  category: "web3" | "ai" | "gis" | "motion";
  thesis: string;
  tech: string[];
  demoType: "passkey" | "gas" | "stream" | "elevation" | "merkle" | "physics";
}

const experiments: LabExperiment[] = [
  {
    id: "passkey-4337",
    n: "01",
    title: "ERC-4337 Passkey Smart Account",
    tag: "ACCOUNT ABSTRACTION",
    status: "PROTOTYPE",
    category: "web3",
    thesis:
      "Testing zero-seed-phrase Web3 onboarding using native browser WebAuthn passkeys to authorize simulated EVM UserOperations with Paymaster sponsorship.",
    tech: ["WebAuthn", "viem", "ERC-4337", "secp256r1"],
    demoType: "passkey"
  },
  {
    id: "l2-gas-engine",
    n: "02",
    title: "Multi-Chain Gas Telemetry & L2 Slicer",
    tag: "EVM TELEMETRY",
    status: "ACTIVE EXPERIMENT",
    category: "web3",
    thesis:
      "Sub-second gas price monitoring comparing Ethereum L1 execution costs against Arbitrum and Base rollup compression.",
    tech: ["Viem RPC", "EVM Oracles", "TypeScript", "WebSocket"],
    demoType: "gas"
  },
  {
    id: "stream-parser",
    n: "03",
    title: "Zero-Latency UI Stream Tokenizer",
    tag: "AI WORKFLOWS",
    status: "BUILDING",
    category: "ai",
    thesis:
      "Client-side micro-chunk tokenizer rendering streamed LLM responses and interactive code blocks on-the-fly without layout shift or UI jank.",
    tech: ["Edge Streams", "AST Parser", "React 19", "Motion"],
    demoType: "stream"
  },
  {
    id: "topo-slicer",
    n: "04",
    title: "Highland Topography Elevation Slicer",
    tag: "GEOSPATIAL GIS",
    status: "SHIPPED RESEARCH",
    category: "gis",
    thesis:
      "Client-side SVG elevation slice algorithm developed for Ijero Hikers adventure club trails in Ijero Ekiti, Nigeria.",
    tech: ["GeoJSON", "SVG Calculus", "Leaflet API", "Mapbox Tiles"],
    demoType: "elevation"
  },
  {
    id: "merkle-proof",
    n: "05",
    title: "In-Browser Merkle Whitelist Verifier",
    tag: "CRYPTOGRAPHY",
    status: "PROTOTYPE",
    category: "web3",
    thesis:
      "Instant client-side Merkle tree generation for NFT drops and token-gated access with zero backend verification latency.",
    tech: ["Keccak256", "TypeScript", "Merkle Trees", "Viem"],
    demoType: "merkle"
  },
  {
    id: "kinetic-field",
    n: "06",
    title: "Hardware-Accelerated Kinetic Spring",
    tag: "MOTION STUDY",
    status: "ACTIVE EXPERIMENT",
    category: "motion",
    thesis:
      "Kinetic spring physics reacting to cursor velocity and scroll drag, maintaining strict 60fps on mobile without layout thrashing.",
    tech: ["Motion Physics", "Canvas 2D", "requestAnimationFrame"],
    demoType: "physics"
  }
];

export function LabSection() {
  const [filter, setFilter] = useState<string>("all");
  const [activeDemo, setActiveDemo] = useState<string | null>("passkey-4337");

  // Passkey Demo Interactive State
  const [passkeyState, setPasskeyState] = useState<"idle" | "signing" | "success">("idle");
  const [passkeyHash, setPasskeyHash] = useState<string>("");

  const runPasskeySim = () => {
    setPasskeyState("signing");
    setTimeout(() => {
      setPasskeyHash(
        "0x" + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
      );
      setPasskeyState("success");
    }, 850);
  };

  // Gas Demo State
  const [selectedChain, setSelectedChain] = useState<"base" | "arb" | "eth">("base");
  const gasData = {
    base: { gwei: "0.004", usd: "$0.0008", speed: "0.4s", savings: "99.8%" },
    arb: { gwei: "0.015", usd: "$0.0024", speed: "0.6s", savings: "99.2%" },
    eth: { gwei: "18.5", usd: "$1.45", speed: "12.0s", savings: "Baseline" }
  };

  // Stream Demo State
  const [streamingText, setStreamingText] = useState<string>("");
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const sampleStream =
    "import { createViemClient } from '@/web3';\n\n// Verified EVM Handshake\nconst client = createViemClient({\n  chain: base,\n  transport: http(),\n});\n// Ready for gas-sponsored UserOp";

  const triggerStream = () => {
    setIsStreaming(true);
    setStreamingText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < sampleStream.length) {
        setStreamingText(sampleStream.slice(0, i + 1));
        i += 3;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 25);
  };

  // Elevation Demo State
  const [sliderPos, setSliderPos] = useState<number>(65);

  // Merkle Demo State
  const [selectedWallet, setSelectedWallet] = useState<string>("0x71...88B9");
  const [merkleProof, setMerkleProof] = useState<string>("0x9f4a...31c0");

  const filteredExperiments =
    filter === "all" ? experiments : experiments.filter((e) => e.category === filter);

  return (
    <section id="lab" className="border-y border-white/[.06] bg-white/[.015] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-white/[.08]"
        >
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-200/70 tracking-widest uppercase">
              <FlaskConical size={14} className="text-blue-300" />
              06 / LAB
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Always experimenting.
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/50 leading-relaxed">
              Research prototypes, cryptographic simulations, and experimental interfaces pushed to the edge of Web3 and frontend performance.
            </p>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[.03] border border-white/10 shrink-0 self-start md:self-end">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
            </span>
            <div className="font-mono text-xs">
              <span className="text-white font-bold">Active R&amp;D Sandbox</span>
              <span className="text-white/40 block text-[11px]">Real Interactive Prototypes</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "All Experiments (6)" },
            { id: "web3", label: "Web3 & EVM Protocols" },
            { id: "ai", label: "AI & Token Streaming" },
            { id: "gis", label: "Geospatial & Topo" },
            { id: "motion", label: "Motion Studies" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-mono transition ${
                filter === tab.id
                  ? "bg-white text-black font-semibold shadow-md shadow-white/10"
                  : "bg-white/[.04] text-white/60 hover:text-white hover:bg-white/[.08] border border-white/[.06]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Experiment Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExperiments.map((exp) => {
            const isSelected = activeDemo === exp.id;

            return (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setActiveDemo(exp.id)}
                className={`card group relative flex flex-col justify-between p-6 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "border-blue-400/60 bg-blue-950/15 shadow-xl shadow-blue-500/10"
                    : "hover:border-white/20 bg-white/[.02]"
                }`}
              >
                <div>
                  {/* Top: Number & Tag */}
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-blue-300 font-bold">{exp.n}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] tracking-wider uppercase border ${
                        exp.status === "ACTIVE EXPERIMENT"
                          ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
                          : exp.status === "PROTOTYPE"
                          ? "border-purple-400/30 bg-purple-500/10 text-purple-300"
                          : exp.status === "BUILDING"
                          ? "border-amber-400/30 bg-amber-500/10 text-amber-300"
                          : "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <div className="mt-4">
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                      {exp.tag}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-white group-hover:text-blue-200 transition">
                      {exp.title}
                    </h3>
                  </div>

                  {/* Thesis description */}
                  <p className="mt-2.5 text-xs text-white/55 leading-relaxed">
                    {exp.thesis}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/[.04] border border-white/[.06] px-2 py-0.5 text-[10px] font-mono text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Interactive Trigger */}
                <div className="mt-6 pt-3.5 border-t border-white/[.06] flex items-center justify-between text-xs font-mono">
                  <span
                    className={
                      isSelected
                        ? "text-blue-300 font-medium flex items-center gap-1.5"
                        : "text-white/40 group-hover:text-white transition"
                    }
                  >
                    {isSelected ? "● Active in Interactive Sandbox" : "Click to test in Sandbox"}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-white/30 group-hover:text-white transition shrink-0"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* INTERACTIVE LAB PLAYGROUND SANDBOX */}
        <div className="mt-12 rounded-3xl border border-white/15 bg-gradient-to-b from-[#090d16] via-[#060810] to-[#04060c] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 uppercase tracking-wider">
                <Terminal size={14} />
                Live Laboratory Sandbox
              </div>
              <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-white">
                Interactive Experiment Console
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/50">
                Run simulated execution directly in your browser.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-white/50">
              <span>Selected Experiment:</span>
              <span className="font-semibold text-cyan-300">
                {experiments.find((e) => e.id === activeDemo)?.title}
              </span>
            </div>
          </div>

          {/* Sandbox Body Based on activeDemo */}
          <div className="mt-6">
            {activeDemo === "passkey-4337" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-black/40 p-4 rounded-2xl border border-white/10">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-white">
                      WebAuthn Passkey Secp256r1 Handshake
                    </div>
                    <div className="text-xs text-white/50">
                      Simulates generating a passkey credential and signing an ERC-4337 UserOperation bundle with a Paymaster.
                    </div>
                  </div>
                  <button
                    onClick={runPasskeySim}
                    disabled={passkeyState === "signing"}
                    className="flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-4 py-2.5 text-xs font-semibold text-black transition shrink-0"
                  >
                    <Play size={13} fill="currentColor" />
                    <span>{passkeyState === "signing" ? "Signing..." : "Simulate Passkey Sign"}</span>
                  </button>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-xs space-y-2">
                  <div className="text-white/40 text-[10px] uppercase">EXECUTION LOG:</div>
                  <div className="text-emerald-400">
                    &gt; Client runtime: Browser WebAuthn API detected
                  </div>
                  {passkeyState === "signing" && (
                    <div className="text-cyan-300 animate-pulse">
                      &gt; Prompting biometric touch sensor... hashing payload...
                    </div>
                  )}
                  {passkeyState === "success" && (
                    <>
                      <div className="text-cyan-300">&gt; Credential verified via curve P-256</div>
                      <div className="text-white/80 break-all">
                        &gt; UserOp Hash: <span className="text-amber-300">{passkeyHash}</span>
                      </div>
                      <div className="text-emerald-400 flex items-center gap-1.5 pt-1">
                        <CheckCircle2 size={13} />
                        <span>Sponsorship verified: Gas sponsored by Paymaster (0 ETH paid by user)</span>
                      </div>
                    </>
                  )}
                  {passkeyState === "idle" && (
                    <div className="text-white/30 italic">
                      &gt; Ready. Click &quot;Simulate Passkey Sign&quot; above to trigger biometric signing.
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeDemo === "l2-gas-engine" && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  {(["base", "arb", "eth"] as const).map((chain) => (
                    <button
                      key={chain}
                      onClick={() => setSelectedChain(chain)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono transition border ${
                        selectedChain === chain
                          ? "bg-white text-black font-semibold border-white"
                          : "bg-black/40 text-white/60 border-white/10 hover:text-white"
                      }`}
                    >
                      {chain === "base"
                        ? "Base Network"
                        : chain === "arb"
                        ? "Arbitrum One"
                        : "Ethereum L1 Mainnet"}
                    </button>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-4">
                  <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <div className="font-mono text-[10px] text-white/40 uppercase">GAS PRICE</div>
                    <div className="mt-1 text-2xl font-bold font-mono text-cyan-300">
                      {gasData[selectedChain].gwei} Gwei
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <div className="font-mono text-[10px] text-white/40 uppercase">AVG TRANSFER COST</div>
                    <div className="mt-1 text-2xl font-bold font-mono text-emerald-400">
                      {gasData[selectedChain].usd}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <div className="font-mono text-[10px] text-white/40 uppercase">BLOCK TIME</div>
                    <div className="mt-1 text-2xl font-bold font-mono text-white">
                      {gasData[selectedChain].speed}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <div className="font-mono text-[10px] text-white/40 uppercase">SAVINGS VS L1</div>
                    <div className="mt-1 text-2xl font-bold font-mono text-amber-300">
                      {gasData[selectedChain].savings}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === "stream-parser" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-black/40 p-3.5 rounded-2xl border border-white/10">
                  <div className="text-xs text-white/60 font-mono">
                    Simulates client-side token parsing without React main thread blocking.
                  </div>
                  <button
                    onClick={triggerStream}
                    disabled={isStreaming}
                    className="flex items-center gap-1.5 rounded-xl bg-blue-500 hover:bg-blue-400 px-3.5 py-1.5 text-xs font-semibold text-white transition shrink-0"
                  >
                    <Play size={12} fill="currentColor" />
                    <span>{isStreaming ? "Streaming Tokens..." : "Run Token Stream"}</span>
                  </button>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/70 p-4 font-mono text-xs text-emerald-300 min-h-[110px] whitespace-pre-wrap leading-relaxed">
                  {streamingText || "// Press 'Run Token Stream' to test instantaneous chunk decoding..."}
                  {isStreaming && <span className="animate-pulse inline-block w-2 h-4 bg-cyan-400 ml-1" />}
                </div>
              </div>
            )}

            {activeDemo === "topo-slicer" && (
              <div className="space-y-4">
                <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white/60">Trail Waypoint Distance:</span>
                    <span className="text-emerald-400 font-bold">{(sliderPos * 0.12).toFixed(1)} km / 12.4 km</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span>Elevation: {(1200 + sliderPos * 12.5).toFixed(0)} ft</span>
                    <span>Gradient: {(4.2 + (sliderPos % 8) * 0.9).toFixed(1)}% incline</span>
                    <span>Terrain: Rainforest Ridge · Ijero Ekiti</span>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === "merkle-proof" && (
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-3">
                  <div className="text-xs font-mono text-white/50">
                    SELECT SAMPLE WALLET FOR MERKLE PROOF VERIFICATION:
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {[
                      { addr: "0x71...88B9", proof: "0x9f4a...31c0", status: "VERIFIED WHITELIST" },
                      { addr: "0x3A...49C2", proof: "0x2e81...5bb7", status: "VERIFIED WHITELIST" },
                      { addr: "0x99...F01A", proof: "0x0000...0000", status: "NOT IN MERKLE TREE" }
                    ].map((w) => (
                      <button
                        key={w.addr}
                        onClick={() => {
                          setSelectedWallet(w.addr);
                          setMerkleProof(w.proof);
                        }}
                        className={`px-3 py-1.5 rounded-lg border transition ${
                          selectedWallet === w.addr
                            ? "bg-purple-500/20 border-purple-400 text-purple-200"
                            : "border-white/10 text-white/50 hover:text-white"
                        }`}
                      >
                        {w.addr} ({w.status.split(" ")[0]})
                      </button>
                    ))}
                  </div>
                  <div className="p-3 rounded-xl bg-black/70 border border-white/10 font-mono text-xs">
                    <span className="text-white/40">Computed Leaf Hash: </span>
                    <span className="text-amber-300">keccak256(abi.encodePacked({selectedWallet}))</span>
                    <div className="mt-1 text-emerald-400">
                      Proof Result: {selectedWallet === "0x99...F01A" ? "INVALID (Revert)" : "VALID ROOT (0x81b...)"}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === "kinetic-field" && (
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center space-y-3">
                <div className="text-sm font-semibold text-white">
                  60 FPS Kinetic Physics Sub-Engine
                </div>
                <p className="text-xs text-white/50 max-w-md mx-auto">
                  Utilizes requestAnimationFrame tick loops with damping springs to preserve mobile battery and prevent DOM reflows.
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono text-emerald-300">
                  <CheckCircle2 size={13} />
                  <span>Hardware Acceleration: GPU Composited</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
