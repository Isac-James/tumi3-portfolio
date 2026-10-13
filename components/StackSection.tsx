"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Shield,
  Palette,
  Terminal,
  Boxes,
  ArrowUpRight,
  Workflow,
  CheckCircle2,
  Database,
  ExternalLink
} from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: "frontend" | "web3" | "design" | "ai-tools";
  categoryLabel: string;
  role: string;
  level: "Core Daily Driver" | "Deep Architecture" | "Specialized";
  description: string;
  projects: string[];
  features: string[];
  icon: any;
}

const techItems: TechItem[] = [
  {
    id: "nextjs",
    name: "Next.js 15 (App Router)",
    category: "frontend",
    categoryLabel: "Frontend Core",
    role: "Full-Stack React Framework",
    level: "Core Daily Driver",
    description:
      "Server Components, edge streaming, zero-waterfall layouts, and dynamic OG generation for hyper-performant web apps.",
    projects: ["Ijero Hikers", "DeFi Intelligence", "Mint Protocol"],
    features: ["Server & Client boundaries", "Edge API routes", "Streaming SSR", "Dynamic metadata"],
    icon: Boxes
  },
  {
    id: "typescript",
    name: "TypeScript (Strict)",
    category: "frontend",
    categoryLabel: "Frontend Core",
    role: "Type-Safe Architecture",
    level: "Core Daily Driver",
    description:
      "Zero 'any' invariant enforcement. Strict type checking from smart contract ABIs to user input forms.",
    projects: ["Ijero Hikers", "DeFi Intelligence", "Mint Protocol", "Gate3 Access"],
    features: ["End-to-end type safety", "Contract ABI inference", "Discriminated unions", "Strict null checks"],
    icon: Code2
  },
  {
    id: "tailwind",
    name: "Tailwind CSS & Modern CSS",
    category: "frontend",
    categoryLabel: "Frontend Core",
    role: "Styling & Design Tokens",
    level: "Core Daily Driver",
    description:
      "Precision utility styling with semantic design tokens, responsive breakpoints, and dark cybernetic aesthetics.",
    projects: ["Ijero Hikers", "DeFi Intelligence", "Mint Protocol"],
    features: ["Container queries", "CSS variables theming", "Sub-pixel alignment", "Accessible contrast"],
    icon: Palette
  },
  {
    id: "motion",
    name: "Motion / Framer Motion",
    category: "frontend",
    categoryLabel: "Frontend Core",
    role: "Fluid UI & Micro-Interactions",
    level: "Deep Architecture",
    description:
      "Hardware-accelerated layout transitions, spring physics, and kinetic feedback without dropping 60fps.",
    projects: ["Ijero Hikers", "DeFi Intelligence"],
    features: ["Shared layout animations", "Spring dynamics", "Reduced-motion support", "Scroll-linked triggers"],
    icon: Zap
  },
  {
    id: "wagmi-viem",
    name: "wagmi & viem",
    category: "web3",
    categoryLabel: "Web3 & EVM",
    role: "EVM Client Interface",
    level: "Deep Architecture",
    description:
      "Lightweight, tree-shakeable Ethereum primitives for reactive wallet connectivity, contract reads, and gas estimation.",
    projects: ["DeFi Intelligence", "Mint Protocol", "Gate3 Access"],
    features: ["Multi-wallet connectors", "ABI type inference", "Simulation before broadcast", "Event log watchers"],
    icon: Cpu
  },
  {
    id: "smart-contracts",
    name: "EVM & Smart Contract Interop",
    category: "web3",
    categoryLabel: "Web3 & EVM",
    role: "Blockchain Protocol Layer",
    level: "Deep Architecture",
    description:
      "ERC-20, ERC-721A batching, and ERC-1155 protocol integrations with Merkle-proof whitelist verification.",
    projects: ["Mint Protocol", "Gate3 Access"],
    features: ["Gas-optimized batch calls", "Merkle tree verification", "SIWE (Sign-in with Ethereum)", "Event decoders"],
    icon: Shield
  },
  {
    id: "leaflet-mapbox",
    name: "Leaflet & Geospatial GIS",
    category: "frontend",
    categoryLabel: "Frontend Core",
    role: "Interactive Mapping Engine",
    level: "Specialized",
    description:
      "High-performance interactive trail maps with elevation graphs, GPS coordinates, and waypoint navigation.",
    projects: ["Ijero Hikers"],
    features: ["Custom topo tiles", "GeoJSON trail plotting", "Elevation slicing", "Mobile touch maps"],
    icon: Workflow
  },
  {
    id: "figma",
    name: "Figma & Design Systems",
    category: "design",
    categoryLabel: "UI/UX & Design",
    role: "Interface & Experience Design",
    level: "Core Daily Driver",
    description:
      "From user journey wireframes to high-fidelity component libraries with responsive autolayout and developer-ready specs.",
    projects: ["Ijero Hikers", "DeFi Intelligence", "Mint Protocol"],
    features: ["Design token schemas", "Component variants", "Interactive prototyping", "Accessibility audits"],
    icon: Palette
  },
  {
    id: "ai-velocity",
    name: "AI Code Synthesis & AST Tools",
    category: "ai-tools",
    categoryLabel: "AI & Velocity",
    role: "Velocity Multiplier",
    level: "Core Daily Driver",
    description:
      "Augmenting 0-to-1 build speed with structured prompt pipelines, automated boilerplate generation, and AST refactoring.",
    projects: ["All Projects"],
    features: ["Spec-to-component synthesis", "Automated edge case testing", "Data schema generation", "Prompt engineering"],
    icon: Sparkles
  },
  {
    id: "git-devops",
    name: "Git, GitHub & Vercel Edge",
    category: "ai-tools",
    categoryLabel: "Tools & DevOps",
    role: "Version Control & Edge Deployment",
    level: "Core Daily Driver",
    description:
      "Strict semantic commits, branch preview deployments, automated lint pipelines, and edge CDN optimization.",
    projects: ["Ijero Hikers", "DeFi Intelligence", "Mint Protocol"],
    features: ["Trunk-based workflow", "Edge cache headers", "Zero-downtime releases", "Open source hygiene"],
    icon: Terminal
  },
  {
    id: "react-query",
    name: "TanStack Query & State",
    category: "frontend",
    categoryLabel: "Frontend Core",
    role: "Async Data Synchronization",
    level: "Deep Architecture",
    description:
      "Optimistic UI updates, automated background invalidation, and cached blockchain data feeds.",
    projects: ["DeFi Intelligence"],
    features: ["Polling & window focus refetch", "Optimistic rollbacks", "Infinite query feeds", "RPC cache hydration"],
    icon: Database
  },
  {
    id: "security-audit",
    name: "Web3 Security & Wallet UX",
    category: "web3",
    categoryLabel: "Web3 & EVM",
    role: "Safe Interface Invariants",
    level: "Specialized",
    description:
      "Phishing mitigation, transaction simulation banners, error boundary guards, and safe signature prompt design.",
    projects: ["Gate3 Access", "Mint Protocol"],
    features: ["Simulated transaction receipts", "Hardware wallet safeguards", "Chain mismatch warnings", "Clear hex decoding"],
    icon: Shield
  }
];

const architectureLayers = [
  {
    layer: "Layer 01: Presentation & Interaction",
    badge: "CLIENT LAYER",
    stack: "Next.js 15 Client Boundaries · React 19 · Motion · Tailwind CSS",
    desc: "Fluid, zero-jank 60fps user experience. Fully responsive mobile layouts, accessible keyboard navigation, and reduced-motion fallbacks."
  },
  {
    layer: "Layer 02: Reactive Telemetry & State",
    badge: "STATE LAYER",
    stack: "TanStack Query · Zustand · Wagmi Hooks · WebSocket Streams",
    desc: "Instant optimistic updates with resilient caching. Synchronizes local UI state with multi-chain RPC node events and backend APIs."
  },
  {
    layer: "Layer 03: Blockchain & Protocol Interop",
    badge: "WEB3 / PROTOCOL",
    stack: "Viem Core · Wagmi · EVM Smart Contracts · Merkle Trees · SIWE",
    desc: "Strict type-safe ABI calls, gas simulation before signing, automated chain switching, and cryptographically verified access control."
  },
  {
    layer: "Layer 04: Edge Infrastructure & Quality",
    badge: "EDGE & CI/CD",
    stack: "Vercel Edge Network · GitHub Actions · Strict TS · ESLint",
    desc: "Sub-100ms global response times, automated type checking on every commit, and production build verification."
  }
];

export function StackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(techItems[0]);

  const filteredItems = techItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesProject =
      activeProjectFilter === "all" ||
      item.projects.some((p) =>
        p.toLowerCase().includes(activeProjectFilter.toLowerCase())
      ) ||
      item.projects.includes("All Projects");
    return matchesCategory && matchesProject;
  });

  return (
    <section id="stack" className="relative mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:py-24 lg:px-8">
      {/* Background Subtle Gradient */}
      <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 h-[380px] w-[600px] bg-blue-600/5 blur-[100px]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-white/[.08]"
      >
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-200/70 tracking-widest uppercase">
            <Code2 size={14} className="text-blue-300" />
            03 / STACK
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Tools for turning ideas <br className="hidden sm:inline" />
            <span className="text-gradient">into interfaces.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/50 leading-relaxed">
            Battle-tested libraries, Web3 primitives, and engineering toolchains used in real production codebases. Zero vanity buzzwords—every tool is backed by shipped implementations.
          </p>
        </div>

        {/* Live Counter Badge */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[.03] border border-white/10 shrink-0 self-start md:self-end">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <div className="font-mono text-xs">
            <span className="text-white font-bold">{techItems.length} Core Technologies</span>
            <span className="text-white/40 block text-[11px]">100% Production Tested</span>
          </div>
        </div>
      </motion.div>

      {/* Interactive Controls Bar: Category Filter & Project Highlighter */}
      <div className="mt-8 space-y-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "All Technologies" },
            { id: "frontend", label: "Frontend & UI Core" },
            { id: "web3", label: "Web3 & EVM Protocols" },
            { id: "design", label: "Design Systems & Figma" },
            { id: "ai-tools", label: "AI Velocity & Tooling" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-mono transition ${
                activeCategory === cat.id
                  ? "bg-white text-black font-semibold shadow-md shadow-white/10"
                  : "bg-white/[.04] text-white/60 hover:text-white hover:bg-white/[.08] border border-white/[.06]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Highlighter Strip */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider mr-1 flex items-center gap-1.5">
            <Workflow size={12} className="text-blue-300" /> Filter by Project:
          </span>
          {[
            { id: "all", label: "All Proofs" },
            { id: "ijero", label: "Ijero Hikers (Live)" },
            { id: "defi", label: "DeFi Intelligence" },
            { id: "mint", label: "Mint Protocol" },
            { id: "gate3", label: "Gate3 Access" }
          ].map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProjectFilter(p.id)}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-mono transition border ${
                activeProjectFilter === p.id
                  ? "border-emerald-400/50 bg-emerald-500/15 text-emerald-300 font-semibold"
                  : "border-white/[.08] bg-transparent text-white/40 hover:text-white/70 hover:border-white/20"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tech Cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedTech?.id === item.id;
          const isProjectMatch =
            activeProjectFilter !== "all" &&
            (item.projects.some((p) =>
              p.toLowerCase().includes(activeProjectFilter.toLowerCase())
            ) ||
              item.projects.includes("All Projects"));

          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedTech(item)}
              className={`card group relative cursor-pointer p-6 transition-all duration-300 hover:-translate-y-1 ${
                isSelected
                  ? "border-blue-400/50 bg-white/[.05] shadow-lg shadow-blue-500/5"
                  : isProjectMatch
                  ? "border-emerald-400/40 bg-emerald-950/10"
                  : "hover:border-white/20"
              }`}
            >
              {/* Top Row: Icon + Level Badge */}
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[.06] border border-white/10 group-hover:border-white/25 transition">
                  <Icon size={19} className="text-blue-200" />
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono border ${
                    item.level === "Core Daily Driver"
                      ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                      : item.level === "Deep Architecture"
                      ? "border-blue-400/30 bg-blue-500/10 text-blue-300"
                      : "border-purple-400/30 bg-purple-500/10 text-purple-300"
                  }`}
                >
                  {item.level}
                </span>
              </div>

              {/* Title & Role */}
              <div className="mt-5">
                <div className="font-mono text-[10px] tracking-wider uppercase text-white/40">
                  {item.categoryLabel}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-white group-hover:text-blue-200 transition">
                  {item.name}
                </h3>
                <div className="text-xs font-mono text-blue-300/80 mt-0.5">{item.role}</div>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs leading-relaxed text-white/55">
                {item.description}
              </p>

              {/* Feature Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.features.slice(0, 3).map((feat) => (
                  <span
                    key={feat}
                    className="rounded-md bg-white/[.04] border border-white/[.06] px-2 py-0.5 text-[10px] font-mono text-white/60"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {/* Project Footnote */}
              <div className="mt-5 pt-3.5 border-t border-white/[.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                <span className="truncate">
                  Used in: <strong className="text-white/70">{item.projects.join(", ")}</strong>
                </span>
                <ArrowUpRight
                  size={14}
                  className="shrink-0 text-white/30 group-hover:text-white transition"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Architecture Pipeline Visualizer: Full-Stack Integration */}
      <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[.03] to-white/[.01] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[.08]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-blue-200/70 uppercase tracking-widest">
              <Layers size={14} className="text-blue-300" />
              Engineering Pipeline
            </div>
            <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-white">
              How the stack connects in production.
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-white/50">
              Clean architectural separation ensures maintainability, type safety, and instant responsiveness.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-3 py-1.5 rounded-xl self-start sm:self-center">
            <CheckCircle2 size={13} />
            <span>Strict Invariant Guarantees</span>
          </div>
        </div>

        {/* 4 Pipeline Layers */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {architectureLayers.map((layer, idx) => (
            <div
              key={layer.layer}
              className="rounded-2xl border border-white/[.08] bg-black/40 p-4 flex flex-col justify-between hover:border-white/20 transition"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-blue-300 font-bold">{`0${idx + 1}`}</span>
                  <span className="rounded bg-white/[.06] px-1.5 py-0.5 text-white/50 uppercase">
                    {layer.badge}
                  </span>
                </div>
                <div className="mt-3 text-sm font-semibold text-white">
                  {layer.layer.split(": ")[1]}
                </div>
                <div className="mt-2 text-[11px] font-mono text-blue-200/80 leading-snug">
                  {layer.stack}
                </div>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">
                  {layer.desc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/[.06] text-[10px] font-mono text-white/35 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span>Zero Layout Shift · Strict AST</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
