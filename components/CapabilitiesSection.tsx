"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Boxes,
  Code2,
  Cpu,
  Mountain,
  Palette,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Layers,
  ChevronRight,
  ExternalLink
} from "lucide-react";

interface Capability {
  id: string;
  category: "web3" | "fullstack" | "dashboards" | "community" | "design" | "ai";
  title: string;
  tagline: string;
  turnaround: string;
  icon: any;
  featuredProof: string;
  deliverables: string[];
  techStack: string[];
  invariants: string[];
  description: string;
}

const capabilities: Capability[] = [
  {
    id: "web3-dapps",
    category: "web3",
    title: "Web3 Frontends & dApps",
    tagline: "EVM Smart Contract Frontends, Minting Engines & Wallet UX",
    turnaround: "3 – 7 Days",
    icon: Boxes,
    featuredProof: "Mint Protocol & Gate3 Access",
    description:
      "Fluid, user-friendly interfaces for decentralized applications. Eliminates crypto friction with clear error states, reactive wallet handshakes, and gas simulations.",
    deliverables: [
      "Multi-wallet connection (MetaMask, Coinbase, Rainbow, WalletConnect)",
      "Contract reads/writes with wagmi & viem type-safe ABIs",
      "Merkle-proof whitelist verification & gas estimation",
      "Sign-in with Ethereum (SIWE) & token-gated route guards",
      "Simulated transaction receipts with status machine"
    ],
    techStack: ["Next.js 15", "TypeScript", "wagmi", "viem", "Tailwind CSS"],
    invariants: ["Zero hex ambiguity", "Hardware wallet support", "Chain mismatch fallback"]
  },
  {
    id: "mvp-prototypes",
    category: "fullstack",
    title: "Startup MVPs & 0-to-1 Builds",
    tagline: "Rapid Idea-to-Production Deployments for Founders",
    turnaround: "1 – 2 Weeks",
    icon: Code2,
    featuredProof: "Ijero Hikers & Custom Client Builds",
    description:
      "Transforming back-of-the-napkin concepts into fully interactive, deployable web products with server actions, real data pipelines, and responsive mobile perfection.",
    deliverables: [
      "Modular full-stack architecture with Next.js App Router",
      "Responsive UI built from Figma or wireframe specifications",
      "Automated edge deployment on Vercel with preview environments",
      "SEO optimization, dynamic OpenGraph cards, and schema tags",
      "Clean Git repository with zero messy dependencies"
    ],
    techStack: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    invariants: ["Lighthouse score 95+", "Mobile-first layout", "Strict TS typing"]
  },
  {
    id: "defi-dashboards",
    category: "dashboards",
    title: "DeFi & Financial Telemetry",
    tagline: "High-Density Analytics, Token Trackers & Yield Portals",
    turnaround: "5 – 10 Days",
    icon: Cpu,
    featuredProof: "DeFi Intelligence Dashboard",
    description:
      "Clear, legible visual telemetry for financial protocols. Displays complex portfolio balances, candlestick data, and APY comparisons with sub-second responsiveness.",
    deliverables: [
      "Cross-chain balance discovery & aggregated portfolio totals",
      "Interactive candlestick & area charts with timeframe toggles",
      "Live gas price tracker & network congestion telemetry",
      "Automated token price polling & optimistic UI updates",
      "Custom metric cards with real-time delta indicators"
    ],
    techStack: ["Next.js", "TypeScript", "TanStack Query", "Viem", "Tailwind"],
    invariants: ["Sub-second UI re-render", "Clean numerical formatting", "Zero layout stutter"]
  },
  {
    id: "eco-tourism",
    category: "community",
    title: "Community & Geospatial Portals",
    tagline: "Interactive Trail Discovery, Expeditions & RSVP Systems",
    turnaround: "1 – 2 Weeks",
    icon: Mountain,
    featuredProof: "Ijero Hikers Adventure Club (Live)",
    description:
      "High-engagement adventure and regional community hubs. Integrates GPS trail itineraries, difficulty tiering, high-resolution photography, and event RSVPs.",
    deliverables: [
      "Interactive topographical maps with GPS coordinates & elevations",
      "Trail filtering engine by difficulty, duration, and terrain type",
      "Expedition RSVP booking modal with instant confirmation",
      "High-resolution community photography and summit galleries",
      "Offline-friendly mobile layout for outdoor exploration"
    ],
    techStack: ["Next.js", "Leaflet / Mapbox", "TypeScript", "Tailwind CSS"],
    invariants: ["Touch-optimized map pan/zoom", "Low-bandwidth resilience", "Real GPS data"]
  },
  {
    id: "figma-code",
    category: "design",
    title: "Design Systems & Figma-to-Code",
    tagline: "Pixel-Perfect, Accessible Implementation with Motion",
    turnaround: "3 – 5 Days",
    icon: Palette,
    featuredProof: "Unified Design Token Architecture",
    description:
      "Translating ambitious Figma designs into accessible, semantic, high-framerate code with zero visual drift and bespoke micro-interactions.",
    deliverables: [
      "Exact Figma-to-Tailwind translation with consistent design tokens",
      "Semantic HTML5 structure with ARIA landmark compliance",
      "Framer Motion / Motion spring animations and scroll reveals",
      "Dark and cybernetic aesthetic themes with strict contrast",
      "Component catalog documentation for scalable team handoff"
    ],
    techStack: ["Figma", "Tailwind CSS", "Motion", "React 19"],
    invariants: ["Pixel-perfect fidelity", "Reduced-motion support", "WCAG AA accessible"]
  },
  {
    id: "ai-interfaces",
    category: "ai",
    title: "AI-Augmented Interfaces & Tooling",
    tagline: "Generative UI, Prompt Pipelines & Intelligent Workflows",
    turnaround: "4 – 8 Days",
    icon: Sparkles,
    featuredProof: "AI Building Workbench & AST Synthesizer",
    description:
      "Next-generation AI interfaces that go beyond basic chat boxes. Streaming code inspectors, prompt optimization engines, and agentic workflows.",
    deliverables: [
      "Zero-latency streaming UI with live token renderers",
      "Structured prompt engineering tools with parameter tuning",
      "Context-aware workflow panels and AST code generation",
      "Server-side Gemini and LLM proxy integrations with API keys guarded",
      "Clean conversational & generative state management"
    ],
    techStack: ["Google Gen AI SDK", "Next.js Edge API", "React 19", "TypeScript"],
    invariants: ["API keys strictly server-side", "Instant stream cancellation", "Zero markdown bugs"]
  }
];

export function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Quick Scope Estimator State
  const [selectedService, setSelectedService] = useState<string>("web3-dapps");
  const [includeWallet, setIncludeWallet] = useState<boolean>(true);
  const [includeDesign, setIncludeDesign] = useState<boolean>(true);
  const [includeMaps, setIncludeMaps] = useState<boolean>(false);

  const filteredCapabilities =
    activeTab === "all"
      ? capabilities
      : capabilities.filter((c) => c.category === activeTab);

  const currentCap = capabilities.find((c) => c.id === selectedService) || capabilities[0];

  return (
    <section id="capabilities" className="relative mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:py-24 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 right-10 h-[350px] w-[500px] bg-purple-600/5 blur-[110px]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-white/[.08]"
      >
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-200/70 tracking-widest uppercase">
            <Layers size={14} className="text-blue-300" />
            05 / CAPABILITIES
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
            What I can build.
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/50 leading-relaxed">
            Concrete engineering deliverables for founders, Web3 protocols, and product teams. No vague promises—explore exact scopes, tech stacks, and turnaround timelines below.
          </p>
        </div>

        {/* Rapid Delivery Standard Badge */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[.03] border border-white/10 shrink-0 self-start md:self-end">
          <Zap size={18} className="text-cyan-400" />
          <div className="font-mono text-xs">
            <span className="text-white font-bold">&lt; 72hr Initial Prototype</span>
            <span className="text-white/40 block text-[11px]">Production Live in 1-2 Weeks</span>
          </div>
        </div>
      </motion.div>

      {/* Category Filter Tabs */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {[
          { id: "all", label: "All Capabilities" },
          { id: "web3", label: "Web3 & dApps" },
          { id: "fullstack", label: "Full-Stack MVPs" },
          { id: "dashboards", label: "Dashboards & Telemetry" },
          { id: "community", label: "Geospatial & Community" },
          { id: "design", label: "Design Systems" },
          { id: "ai", label: "AI Interfaces" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-mono transition ${
              activeTab === tab.id
                ? "bg-white text-black font-semibold shadow-md shadow-white/10"
                : "bg-white/[.04] text-white/60 hover:text-white hover:bg-white/[.08] border border-white/[.06]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Capabilities 6-Card Grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCapabilities.map((cap) => {
          const Icon = cap.icon;
          const isExpanded = expandedId === cap.id;

          return (
            <motion.div
              key={cap.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="card group flex flex-col justify-between p-6 sm:p-7 hover:border-white/20 transition-all duration-300"
            >
              <div>
                {/* Header Row: Icon + Turnaround */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[.06] border border-white/10 group-hover:border-blue-400/30 transition">
                    <Icon size={20} className="text-blue-300" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono text-emerald-300">
                    <Clock size={12} />
                    <span>{cap.turnaround}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="mt-5 text-xl font-semibold text-white group-hover:text-blue-200 transition">
                  {cap.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-blue-200/70">
                  {cap.tagline}
                </p>

                {/* Description */}
                <p className="mt-3.5 text-xs sm:text-sm text-white/55 leading-relaxed">
                  {cap.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-5 space-y-2 border-t border-white/[.06] pt-4">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-white/70">
                    {cap.deliverables.slice(0, isExpanded ? undefined : 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {cap.deliverables.length > 3 && (
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : cap.id)}
                      className="text-[11px] font-mono text-blue-300 hover:underline pt-1"
                    >
                      {isExpanded ? "Show less" : `+${cap.deliverables.length - 3} more deliverables`}
                    </button>
                  )}
                </div>
              </div>

              {/* Bottom: Provenance Proof & Tech Badges */}
              <div className="mt-6 pt-4 border-t border-white/[.06]">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white/40">Proof Reference:</span>
                  <span className="text-emerald-300 font-medium">{cap.featuredProof}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cap.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/[.04] border border-white/[.06] px-2 py-0.5 text-[10px] font-mono text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Scope & Sprint Estimator */}
      <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-[#090d16] to-[#05070d] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[.08]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-blue-300 uppercase tracking-widest">
              <Sparkles size={13} />
              Sprint Scope Estimator
            </div>
            <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-white">
              Plan your build turnaround.
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-white/50">
              Select your required product type to see typical milestone phases and time-to-production.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition shadow-lg shadow-blue-500/20 self-start sm:self-center"
          >
            <span>Start This Build</span>
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Estimator Controls & Live Output */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          {/* Left: Capability Picker */}
          <div className="space-y-4">
            <label className="block font-mono text-xs text-white/60">
              SELECT CORE BUILD TYPE:
            </label>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {capabilities.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedService(c.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition text-xs font-mono ${
                    selectedService === c.id
                      ? "border-blue-400 bg-blue-500/15 text-white"
                      : "border-white/10 bg-white/[.02] text-white/60 hover:text-white hover:border-white/20"
                  }`}
                >
                  <span className="font-sans font-medium">{c.title}</span>
                  <span className="text-[11px] text-emerald-300 shrink-0 ml-2">{c.turnaround}</span>
                </button>
              ))}
            </div>

            {/* Feature Add-on Toggles */}
            <div className="pt-2 space-y-2">
              <span className="block font-mono text-[11px] text-white/40 uppercase">
                Optional Modules / Invariants:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setIncludeWallet(!includeWallet)}
                  className={`rounded-lg px-3 py-1.5 border font-mono transition ${
                    includeWallet
                      ? "border-blue-400/50 bg-blue-500/20 text-blue-200"
                      : "border-white/10 text-white/40"
                  }`}
                >
                  ✓ Web3 Wallet Connector Suite
                </button>
                <button
                  type="button"
                  onClick={() => setIncludeDesign(!includeDesign)}
                  className={`rounded-lg px-3 py-1.5 border font-mono transition ${
                    includeDesign
                      ? "border-purple-400/50 bg-purple-500/20 text-purple-200"
                      : "border-white/10 text-white/40"
                  }`}
                >
                  ✓ Custom Figma Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setIncludeMaps(!includeMaps)}
                  className={`rounded-lg px-3 py-1.5 border font-mono transition ${
                    includeMaps
                      ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-200"
                      : "border-white/10 text-white/40"
                  }`}
                >
                  ✓ Interactive Leaflet/GIS Trails
                </button>
              </div>
            </div>
          </div>

          {/* Right: Sprint Breakdown Card */}
          <div className="rounded-2xl border border-white/15 bg-black/60 p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono text-xs text-white/40">ESTIMATED SPRINT DURATION</span>
                <span className="font-mono text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                  <Clock size={13} /> {currentCap.turnaround}
                </span>
              </div>
              <div>
                <div className="text-base font-semibold text-white">{currentCap.title}</div>
                <div className="text-xs text-blue-200/70 font-mono mt-0.5">{currentCap.tagline}</div>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">
                {currentCap.description}
              </p>
              <div className="space-y-1.5 pt-2">
                <div className="font-mono text-[10px] text-white/40 uppercase">Included in Phase 1:</div>
                {currentCap.deliverables.slice(0, 3).map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="truncate">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="text-[11px] font-mono text-white/40">
                Ready to review specifications?
              </div>
              <a
                href="#contact"
                className="font-mono text-xs text-blue-300 hover:text-white flex items-center gap-1 transition"
              >
                <span>Open brief</span>
                <ChevronRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
