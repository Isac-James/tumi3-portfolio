"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Compass,
  Mountain,
  Layers,
  Sparkles,
  Zap,
  Lock,
  Coins,
  TrendingUp,
  MapPin,
  Calendar,
  Flame,
  ArrowUpRight
} from "lucide-react";

export interface ProjectData {
  n: string;
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  category: "Shipped" | "Web3" | "Dashboards";
  status: "SHIPPED & LIVE" | "ACTIVE PROTOTYPE" | "CONCEPT IN DEV";
  image: string;
  featured?: boolean;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "demo" | "tech">("overview");

  // Ijero Hikers interactive demo state
  const [selectedTrail, setSelectedTrail] = useState<number>(0);
  const [hikerName, setHikerName] = useState("");
  const [expeditionBooked, setExpeditionBooked] = useState(false);

  // DeFi interactive demo state
  const [timeframe, setTimeframe] = useState<"24h" | "7d" | "30d" | "1y">("24h");
  const [selectedToken, setSelectedToken] = useState<string>("ETH");

  // Mint Protocol interactive demo state
  const [mintQty, setMintQty] = useState<number>(1);
  const [mintStatus, setMintStatus] = useState<"idle" | "verifying" | "minting" | "success">("idle");
  const [mintedId, setMintedId] = useState<number>(843);

  // Gate3 interactive demo state
  const [gateUnlocked, setGateUnlocked] = useState<boolean>(false);
  const [signingStatus, setSigningStatus] = useState<"idle" | "signing" | "verified">("idle");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Reset tab and states when project changes
  useEffect(() => {
    setActiveTab("overview");
    setExpeditionBooked(false);
    setMintStatus("idle");
    setGateUnlocked(false);
    setSigningStatus("idle");
  }, [project]);

  if (!project) return null;

  const trails = [
    {
      name: "Oke-Ijero Summit Ridge",
      difficulty: "Moderate",
      distance: "8.4 km",
      elevation: "+720m",
      duration: "3h 45m",
      terrain: "Granite boulders & highland grass"
    },
    {
      name: "Ikoro Waterfalls & Valley Trail",
      difficulty: "Scenic / Easy",
      distance: "5.2 km",
      elevation: "+310m",
      duration: "2h 15m",
      terrain: "Rainforest canopy & river crossings"
    },
    {
      name: "Ipoti High Escarpment Pass",
      difficulty: "Challenging",
      distance: "12.6 km",
      elevation: "+980m",
      duration: "5h 30m",
      terrain: "Steep ridgeline with panoramic views"
    }
  ];

  const handleBookExpedition = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hikerName.trim()) return;
    setExpeditionBooked(true);
  };

  const handleSimulateMint = () => {
    setMintStatus("verifying");
    setTimeout(() => {
      setMintStatus("minting");
      setTimeout(() => {
        setMintStatus("success");
        setMintedId((prev) => prev + mintQty);
      }, 1200);
    }, 1000);
  };

  const handleSimulateSignature = () => {
    setSigningStatus("signing");
    setTimeout(() => {
      setSigningStatus("verified");
      setGateUnlocked(true);
    }, 1300);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#090d16] text-white shadow-2xl flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/[.08] px-6 py-4 bg-[#06080e]/90">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-blue-300">
                PROJECT {project.n}
              </span>
              <span className="text-white/20">/</span>
              <span className="text-xs text-white/50">{project.subtitle}</span>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-white/60 hover:bg-white/10 hover:text-white transition"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-6 flex-1">
            {/* Header Lockup */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium ${
                      project.status === "SHIPPED & LIVE"
                        ? "text-emerald-400"
                        : "text-blue-400"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-current animate-pulse" />
                    {project.status}
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs text-white/50 font-mono">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  {project.title}
                </h2>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/90 hover:bg-white/10 hover:border-white/30 transition"
                >
                  <Github size={14} /> Source Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-blue-500 hover:bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition shadow-lg shadow-blue-500/20"
                  >
                    Live Link <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>

            {/* Segmented Tab Controls */}
            <div className="flex items-center gap-2 border-b border-white/[.08] pb-3 text-sm">
              <button
                onClick={() => setActiveTab("overview")}
                className={`rounded-lg px-3.5 py-1.5 font-medium transition ${
                  activeTab === "overview"
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                Overview & Media
              </button>
              <button
                onClick={() => setActiveTab("demo")}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-medium transition ${
                  activeTab === "demo"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                    : "text-white/50 hover:text-white"
                }`}
              >
                <Zap size={14} /> Interactive Live Demo
              </button>
              <button
                onClick={() => setActiveTab("tech")}
                className={`rounded-lg px-3.5 py-1.5 font-medium transition ${
                  activeTab === "tech"
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                Tech Architecture
              </button>
            </div>

            {/* TAB CONTENT */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Visual Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07090f]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 850px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="font-mono text-xs text-blue-200/80">
                        {project.subtitle}
                      </div>
                      <div className="text-sm font-semibold text-white/90">
                        {project.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Strip */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-white/[.08] bg-white/[.02] p-4 text-center"
                    >
                      <div className="font-mono text-xl sm:text-2xl font-bold text-white">
                        {m.value}
                      </div>
                      <div className="mt-1 text-xs text-white/45">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Detailed Description */}
                <div className="space-y-4 text-sm leading-relaxed text-white/70">
                  <p>{project.longDesc}</p>
                </div>

                {/* Feature Highlights */}
                <div>
                  <h4 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/40">
                    Key Engineering Features
                  </h4>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {project.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-2.5 rounded-lg border border-white/[.06] bg-white/[.015] p-3 text-xs text-white/80"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-emerald-400"
                        />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "demo" && (
              <div className="space-y-6">
                {/* IJERO HIKERS DEMO */}
                {project.slug === "ijero-hikers" && (
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-5">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                        <Mountain size={16} /> LIVE TRAIL & EXPEDITION DISCOVERY SIMULATOR
                      </div>
                      <p className="text-xs text-white/60">
                        Select a trail across the Ijero Ekiti highland region to inspect distance, elevation gain, and simulate an expedition registration.
                      </p>
                    </div>

                    {/* Trail Selector */}
                    <div className="grid gap-3 sm:grid-cols-3">
                      {trails.map((t, idx) => (
                        <button
                          key={t.name}
                          onClick={() => {
                            setSelectedTrail(idx);
                            setExpeditionBooked(false);
                          }}
                          className={`flex flex-col text-left rounded-xl border p-4 transition ${
                            selectedTrail === idx
                              ? "border-emerald-400/60 bg-emerald-500/10 shadow-lg shadow-emerald-500/5"
                              : "border-white/10 bg-white/[.02] hover:border-white/25"
                          }`}
                        >
                          <div className="text-xs font-mono text-emerald-300">
                            TRAIL 0{idx + 1} · {t.difficulty}
                          </div>
                          <div className="mt-1 text-sm font-semibold text-white">
                            {t.name}
                          </div>
                          <div className="mt-3 flex items-center gap-3 text-xs text-white/50 font-mono">
                            <span>{t.distance}</span>
                            <span>•</span>
                            <span>{t.elevation}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Selected Trail Details */}
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                        <div>
                          <div className="text-xs font-mono text-white/40">SELECTED EXPEDITION ROUTE</div>
                          <div className="text-lg font-medium text-white">
                            {trails[selectedTrail].name}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300">
                            {trails[selectedTrail].difficulty}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-xs font-mono text-white/70">
                        <div>
                          <span className="text-white/35 block">Total Distance</span>
                          <span className="text-sm font-semibold text-white">{trails[selectedTrail].distance}</span>
                        </div>
                        <div>
                          <span className="text-white/35 block">Vertical Elevation</span>
                          <span className="text-sm font-semibold text-white">{trails[selectedTrail].elevation}</span>
                        </div>
                        <div>
                          <span className="text-white/35 block">Est. Duration</span>
                          <span className="text-sm font-semibold text-white">{trails[selectedTrail].duration}</span>
                        </div>
                        <div>
                          <span className="text-white/35 block">Terrain Profile</span>
                          <span className="text-sm font-semibold text-white truncate">{trails[selectedTrail].terrain}</span>
                        </div>
                      </div>

                      {/* Interactive Registration Form */}
                      <div className="mt-6 border-t border-white/10 pt-4">
                        {!expeditionBooked ? (
                          <form onSubmit={handleBookExpedition} className="flex flex-col sm:flex-row gap-3">
                            <input
                              type="text"
                              value={hikerName}
                              onChange={(e) => setHikerName(e.target.value)}
                              placeholder="Enter hiker name / email"
                              className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none"
                              required
                            />
                            <button
                              type="submit"
                              className="rounded-xl bg-emerald-500 hover:bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-black transition flex items-center justify-center gap-1.5"
                            >
                              Join Expedition Roster <ArrowUpRight size={14} />
                            </button>
                          </form>
                        ) : (
                          <div className="flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-500/15 p-4 text-xs text-emerald-200">
                            <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                            <div>
                              <span className="font-semibold text-white">{hikerName}</span> is registered for the{" "}
                              <span className="text-emerald-300 font-medium">{trails[selectedTrail].name}</span>! Ready for departure at Ijero Trailhead basecamp.
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* DEFI INTELLIGENCE DEMO */}
                {project.slug === "defi-intelligence" && (
                  <div className="space-y-5">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                        <div>
                          <div className="text-xs font-mono text-white/40">SIMULATED PORTFOLIO VALUE</div>
                          <div className="text-2xl font-bold text-white">$1,287,543.60</div>
                          <div className="text-xs text-emerald-400 font-mono">+12.4% / +$142,109.21 (Past 24H)</div>
                        </div>
                        {/* Timeframe selector */}
                        <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
                          {(["24h", "7d", "30d", "1y"] as const).map((t) => (
                            <button
                              key={t}
                              onClick={() => setTimeframe(t)}
                              className={`px-2.5 py-1 text-[11px] font-mono rounded ${
                                timeframe === t ? "bg-white/20 text-white font-bold" : "text-white/40 hover:text-white"
                              }`}
                            >
                              {t.toUpperCase()}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Token Ticker Buttons */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { sym: "ETH", price: "$3,210.15", change: "+4.2%", color: "text-blue-400" },
                          { sym: "BTC", price: "$66,450.80", change: "+2.8%", color: "text-amber-400" },
                          { sym: "LINK", price: "$18.50", change: "+7.1%", color: "text-cyan-400" },
                          { sym: "AAVE", price: "$142.20", change: "+5.6%", color: "text-purple-400" },
                        ].map((tok) => (
                          <button
                            key={tok.sym}
                            onClick={() => setSelectedToken(tok.sym)}
                            className={`p-3 rounded-xl border text-left transition ${
                              selectedToken === tok.sym
                                ? "border-blue-400 bg-blue-500/10"
                                : "border-white/10 bg-white/[.02] hover:border-white/20"
                            }`}
                          >
                            <div className="flex items-center justify-between text-xs font-mono text-white/50">
                              <span>{tok.sym}</span>
                              <span className={tok.color}>{tok.change}</span>
                            </div>
                            <div className="mt-1 text-sm font-semibold text-white">{tok.price}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* MINT PROTOCOL DEMO */}
                {project.slug === "mint-protocol" && (
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <div className="text-xs font-mono text-blue-300">NEXUS SHARDS GEN 1</div>
                        <div className="text-xl font-bold text-white">Interactive Minting Terminal</div>
                      </div>
                      <div className="text-right text-xs font-mono text-white/50">
                        <div>Total Minted: {mintedId} / 10,000</div>
                        <div className="text-emerald-400">● 0x98A4...5b7D Connected</div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-white/50">Quantity:</span>
                        <button
                          onClick={() => setMintQty(Math.max(1, mintQty - 1))}
                          className="h-8 w-8 rounded-lg border border-white/15 bg-white/5 text-sm font-bold hover:bg-white/10"
                        >
                          -
                        </button>
                        <span className="font-mono text-base font-bold text-white px-2">{mintQty}</span>
                        <button
                          onClick={() => setMintQty(Math.min(5, mintQty + 1))}
                          className="h-8 w-8 rounded-lg border border-white/15 bg-white/5 text-sm font-bold hover:bg-white/10"
                        >
                          +
                        </button>
                        <span className="text-xs text-white/40 font-mono">
                          Total: {(mintQty * 0.08).toFixed(2)} ETH
                        </span>
                      </div>

                      <button
                        onClick={handleSimulateMint}
                        disabled={mintStatus === "verifying" || mintStatus === "minting"}
                        className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/25 hover:opacity-90 disabled:opacity-50"
                      >
                        {mintStatus === "idle" && "Mint Holographic Shard"}
                        {mintStatus === "verifying" && "Verifying Merkle Whitelist..."}
                        {mintStatus === "minting" && "Broadcasting EVM Transaction..."}
                        {mintStatus === "success" && "Mint Successful! View Receipt"}
                      </button>
                    </div>

                    {mintStatus === "success" && (
                      <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-xs text-emerald-200 flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                        <span>Transaction confirmed in Block #19,402,112! Token #{mintedId} added to connected wallet.</span>
                      </div>
                    )}
                  </div>
                )}

                {/* GATE3 DEMO */}
                {project.slug === "gate3" && (
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <div className="text-xs font-mono text-purple-300">EIP-4361 VERIFICATION GATE</div>
                        <div className="text-xl font-bold text-white">Cryptographic Access Chamber</div>
                      </div>
                      <div className="text-xs font-mono text-white/40">Astra Citadel Gate</div>
                    </div>

                    {!gateUnlocked ? (
                      <div className="text-center py-6 space-y-4">
                        <div className="mx-auto h-12 w-12 rounded-full border border-purple-400/30 bg-purple-500/10 flex items-center justify-center text-purple-300">
                          <Lock size={22} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Chamber Access Restricted</div>
                          <p className="text-xs text-white/50 max-w-sm mx-auto mt-1">
                            Requires cryptographic ECDSA signature from a verified Astra Citadel badge holder.
                          </p>
                        </div>
                        <button
                          onClick={handleSimulateSignature}
                          disabled={signingStatus === "signing"}
                          className="rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 disabled:opacity-50 transition"
                        >
                          {signingStatus === "signing" ? "Verifying Signature..." : "Sign Web3 Authentication Challenge"}
                        </button>
                      </div>
                    ) : (
                      <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-5 space-y-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 font-semibold">
                          <CheckCircle2 size={16} /> GATEWAY UNLOCKED · ACCESS LEVEL: ALPHA PASS
                        </div>
                        <div className="text-sm text-white/90">
                          Signature validated against contract <span className="font-mono text-xs text-blue-300">0x742d...44e</span>. Welcome to the private developer research vault!
                        </div>
                        <div className="rounded-lg bg-black/50 p-3 text-xs font-mono text-white/70">
                          {">"} DECRYPTED_ALPHA: Next-gen EVM cross-rollup state channels deployed to testnet.
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === "tech" && (
              <div className="space-y-6">
                <div>
                  <h4 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/40">
                    Technology Stack & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[.02] p-5 space-y-3">
                  <h4 className="text-sm font-semibold text-white">Architecture & Performance Highlights</h4>
                  <ul className="space-y-2 text-xs text-white/70 leading-relaxed list-disc list-inside">
                    <li>Built on Next.js App Router for optimal hydration speed and server rendering.</li>
                    <li>Strict TypeScript typing across all payload models, interfaces, and transaction schemas.</li>
                    <li>Tailwind CSS design token system ensuring crisp typography and sub-pixel alignment.</li>
                    <li>Zero unverified dependencies with resilient offline-first state handling.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between border-t border-white/[.08] px-6 py-4 bg-[#06080e]/90 text-xs text-white/40">
            <span>Press ESC or click outside to exit preview</span>
            <button
              onClick={onClose}
              className="rounded-lg px-3 py-1.5 font-medium text-white/70 hover:text-white transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
