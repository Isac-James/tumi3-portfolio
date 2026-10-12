"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Palette,
  Cpu,
  Terminal,
  Zap,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
  Mountain,
  Globe,
  Compass,
  FileCode,
  Shield,
  Workflow,
  Target,
  Users,
  Lightbulb,
  Check,
  Copy
} from "lucide-react";

type IdentityLens = "builder" | "designer" | "solver";

interface LensData {
  id: IdentityLens;
  tabLabel: string;
  tagline: string;
  title: string;
  summary: string;
  quote: string;
  icon: typeof Code2;
  accentColor: string;
  badgeColor: string;
  borderActive: string;
  pillars: {
    title: string;
    description: string;
  }[];
  toolkit: string[];
  proofPoint: {
    stat: string;
    label: string;
    context: string;
  };
}

const identityLenses: Record<IdentityLens, LensData> = {
  builder: {
    id: "builder",
    tabLabel: "The Builder",
    tagline: "CODE & INFRASTRUCTURE",
    title: "Shipping resilient code that survives production.",
    summary:
      "I don't just mock up concepts or leave code half-finished in local sandboxes. I write strict TypeScript, craft resilient Next.js architectures, wire up EVM blockchain connectors with wagmi/viem, and deploy production applications with verifiable public git history.",
    quote:
      "Code is the ultimate medium of proof. If it doesn't run in production with real data and responsive edge speed, it's just an opinion.",
    icon: Terminal,
    accentColor: "from-blue-500/20 to-cyan-500/10",
    badgeColor: "text-blue-300 border-blue-400/30 bg-blue-500/10",
    borderActive: "border-blue-400/60",
    pillars: [
      {
        title: "Strict Type Safety & Invariants",
        description:
          "Zero tolerance for any-casting or fragile runtime errors. Full AST typing across state, props, and API boundaries."
      },
      {
        title: "Next.js App Router & Edge Speed",
        description:
          "Server components where possible, optimized client hydration, sub-second load times, and responsive mobile fidelity."
      },
      {
        title: "Web3 EVM Wallet Handshakes",
        description:
          "Clean wallet connections, token contract integrations, EIP-4361 SIWE signatures, and gas-efficient interactions."
      }
    ],
    toolkit: ["Next.js 15", "TypeScript", "Tailwind CSS", "wagmi / viem", "React", "Git & GitHub"],
    proofPoint: {
      stat: "100%",
      label: "Production Uptime",
      context: "Public repositories with clean commits & zero boilerplate residue"
    }
  },
  designer: {
    id: "designer",
    tabLabel: "The Designer",
    tagline: "UI / UX & TACTILE CRAFT",
    title: "Obsessed with typography, whitespace, and human touch.",
    summary:
      "Design isn't surface decoration—it's how clearly a user understands what a system can do. I banish generic AI slop, cookie-cutter templates, and clunky badges in favor of intentional typographic hierarchy, fluid Motion animations, spatial rhythm, and responsive mobile elegance.",
    quote:
      "Great software feels effortless because every millisecond of motion and every pixel of padding was placed with human intention.",
    icon: Palette,
    accentColor: "from-purple-500/20 to-pink-500/10",
    badgeColor: "text-purple-300 border-purple-400/30 bg-purple-500/10",
    borderActive: "border-purple-400/60",
    pillars: [
      {
        title: "Anti-AI Slop Aesthetic Discipline",
        description:
          "Zero generic pill badges or neon cliches. Crisp micro-typography, editorial chaptering, and curated dark palettes."
      },
      {
        title: "Spatial Math & Micro-Interactions",
        description:
          "Fluid spring physics with Motion, precise nested radius geometry, and tactile feedback on every click."
      },
      {
        title: "Mobile-First Usability",
        description:
          "Every interface is tested for thumb-friendly targets (≥44px), zero horizontal overflow, and flawless tablet/phone layouts."
      }
    ],
    toolkit: ["Figma", "Tailwind CSS v4", "Motion", "Canva", "Design Systems", "Typography"],
    proofPoint: {
      stat: "60fps",
      label: "Fluid Animation",
      context: "Spring transitions tuned with reduced-motion accessibility fallback"
    }
  },
  solver: {
    id: "solver",
    tabLabel: "The Problem Solver",
    tagline: "SYSTEMS & REAL-WORLD EXECUTION",
    title: "Deconstructing ambiguity into elegant mechanics.",
    summary:
      "Whether it's charting 14+ rugged highland mountain trails with GPS and elevation curves for Ijero Hikers, designing token-gated community access engines, or using AI prompts to compress build time from weeks into days, I focus on the problem before the code.",
    quote:
      "The best engineer isn't the one who writes the most lines of code, but the one who eliminates friction between a human and their goal.",
    icon: Cpu,
    accentColor: "from-emerald-500/20 to-teal-500/10",
    badgeColor: "text-emerald-300 border-emerald-400/30 bg-emerald-500/10",
    borderActive: "border-emerald-400/60",
    pillars: [
      {
        title: "Real-World Community Focus",
        description:
          "Building software that solves tangible human problems—like helping 480+ hikers discover eco-tourism in Nigeria."
      },
      {
        title: "High-Velocity AI Engineering",
        description:
          "Pairing deep architectural insight with modern AI scaffolding to deliver production features at 5x normal speed."
      },
      {
        title: "Decentralized Product Thinking",
        description:
          "Translating complex cryptographic flows into familiar, one-click experiences anyone can navigate without friction."
      }
    ],
    toolkit: ["System Architecture", "AI Orchestration", "Mapbox & GIS", "UX Research", "Problem Scoping"],
    proofPoint: {
      stat: "<72h",
      label: "Rapid Delivery",
      context: "From ambiguous idea to tested, working production deployment"
    }
  }
};

const pipelineStages = [
  {
    step: "01",
    phase: "Idea",
    title: "Problem Framing & Architecture",
    description:
      "Clarify the core user need, strip away distractions, and define the technical contract before touching a line of code.",
    activities: [
      "Distill core user goals & primary workflows",
      "Draft data structures & schema boundaries",
      "Map user states and edge-case exceptions"
    ],
    outcome: "Crystal-clear system blueprint",
    color: "text-blue-300 border-blue-400/30 bg-blue-500/10",
    dotColor: "bg-blue-400"
  },
  {
    step: "02",
    phase: "Interface",
    title: "Tactile UX & Spatial Design",
    description:
      "Translate the architecture into a human-first visual language with clean typographic hierarchy and intuitive touch points.",
    activities: [
      "Layout spatial rhythm and thumb zones",
      "Establish typography, contrast & dark palette",
      "Prototype interactive states & spring transitions"
    ],
    outcome: "Distinctive, high-craft interactive UI",
    color: "text-purple-300 border-purple-400/30 bg-purple-500/10",
    dotColor: "bg-purple-400"
  },
  {
    step: "03",
    phase: "Code",
    title: "Strict Engineering & Integration",
    description:
      "Write clean, component-driven TypeScript using modern frameworks and accelerated by structured AI workflows.",
    activities: [
      "Strict TypeScript types and custom hooks",
      "Responsive Tailwind CSS v4 styling",
      "Integrate Web3 providers or live APIs"
    ],
    outcome: "Rock-solid, maintainable codebase",
    color: "text-cyan-300 border-cyan-400/30 bg-cyan-500/10",
    dotColor: "bg-cyan-400"
  },
  {
    step: "04",
    phase: "Product",
    title: "Edge Deployment & Iteration",
    description:
      "Ship to live users on edge CDNs, audit real-world performance, and refine continuously based on authentic usage.",
    activities: [
      "Vercel / Cloud edge deployment & caching",
      "Audit Core Web Vitals & mobile responsiveness",
      "Public Git documentation & community feedback"
    ],
    outcome: "Live, fast product in users' hands",
    color: "text-emerald-300 border-emerald-400/30 bg-emerald-500/10",
    dotColor: "bg-emerald-400"
  }
];

const principles = [
  {
    num: "01",
    title: "Proof Over Talk",
    tag: "VERIFIABLE EXECUTION",
    text: "A live URL and a public GitHub commit carry more weight than ten slide decks. Every skill listed in my profile is backed by a working artifact you can inspect, click, and audit."
  },
  {
    num: "02",
    title: "Human Taste Over AI Slop",
    tag: "AESTHETIC INTEGRITY",
    text: "AI is an incredible velocity multiplier for boilerplate, but it lacks human nuance. I apply rigorous design discipline: zero generic pill tags, intentional typography, and custom layouts built for humans."
  },
  {
    num: "03",
    title: "Full-Cycle Autonomy",
    tag: "END-TO-END OWNERSHIP",
    text: "I don't wait for a handoff between design and engineering. From first Figma wireframe to Next.js App Router code, Web3 contract integration, and live edge deployment, I own the entire loop."
  },
  {
    num: "04",
    title: "Real-World Grounding",
    tag: "COMMUNITY IMPACT",
    text: "Technology matters most when it connects people. Building Ijero Hikers to map 14+ mountain trails and empower local eco-tourism proves that code has the power to elevate communities."
  }
];

export function AboutSection() {
  const [activeLens, setActiveLens] = useState<IdentityLens>("builder");
  const [activeStage, setActiveStage] = useState<number>(0);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const lens = identityLenses[activeLens];
  const Icon = lens.icon;

  const fade = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 }
  };

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-28 lg:px-8">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06),transparent_70%)] blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div {...fade} className="max-w-3xl">
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-blue-200/70">
          <Workflow size={14} className="text-blue-400" />
          <span>01 / ABOUT</span>
          <span className="text-white/20">·</span>
          <span className="text-white/40">THE OPERATING PHILOSOPHY</span>
        </div>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Builder, designer, problem solver.
        </h2>
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/60">
          I sit at the intersection of frontend craft, intuitive product design, and next-generation decentralized technology. My goal is simple: turn complex problems into clear, fast, and beautiful digital products that people actually want to use.
        </p>
      </motion.div>

      {/* PART 1: THE TRIAD OF IDENTITY (INTERACTIVE LENS SELECTOR) */}
      <motion.div {...fade} className="mt-14">
        {/* Lens Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[.08] pb-4">
          <div className="text-xs font-mono text-white/40 uppercase tracking-wider">
            Explore My Three Operating Modes
          </div>
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[.03] border border-white/10 self-start sm:self-auto">
            {(["builder", "designer", "solver"] as IdentityLens[]).map((tabKey) => {
              const tab = identityLenses[tabKey];
              const TabIcon = tab.icon;
              const isActive = activeLens === tabKey;
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveLens(tabKey)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition ${
                    isActive
                      ? "bg-white text-black shadow-lg shadow-white/10 font-semibold"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <TabIcon size={14} className={isActive ? "text-black" : "text-white/40"} />
                  <span>{tab.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Lens Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLens}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="mt-6 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/[.04] to-white/[.01] p-6 sm:p-10 shadow-2xl backdrop-blur-sm"
          >
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              {/* Left Column: Narrative & Quote */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-2xl border ${lens.badgeColor}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-white/40 uppercase">
                      {lens.tagline}
                    </div>
                    <div className="text-xs text-white/70 font-mono">Profile Lens 0{activeLens === "builder" ? "1" : activeLens === "designer" ? "2" : "3"} / 03</div>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-snug">
                  {lens.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-white/70">
                  {lens.summary}
                </p>

                {/* Quote Box */}
                <div className="rounded-2xl border border-white/10 bg-white/[.02] p-5 relative overflow-hidden">
                  <div className="text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">
                    Core Conviction
                  </div>
                  <blockquote className="text-sm sm:text-base italic text-white/90 leading-relaxed">
                    &ldquo;{lens.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Toolkit Chips */}
                <div>
                  <div className="text-[11px] font-mono text-white/40 mb-2.5 uppercase tracking-wider">
                    Primary Tools & Workflows
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {lens.toolkit.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-1.5 font-mono text-xs text-white/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Pillars & Concrete Proof Point */}
              <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
                <div>
                  <div className="text-xs font-mono tracking-wider text-white/40 uppercase mb-4">
                    Key Execution Pillars
                  </div>
                  <div className="space-y-4">
                    {lens.pillars.map((pillar, pIdx) => (
                      <div
                        key={pillar.title}
                        className="rounded-2xl border border-white/[.08] bg-white/[.02] p-4 transition hover:border-white/20"
                      >
                        <div className="flex items-start gap-3">
                          <span className="font-mono text-xs font-semibold text-blue-300 mt-0.5">
                            0{pIdx + 1}
                          </span>
                          <div>
                            <h4 className="text-sm font-semibold text-white">
                              {pillar.title}
                            </h4>
                            <p className="mt-1 text-xs leading-relaxed text-white/60">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Proof Metric Card */}
                <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[.06] to-white/[.02] p-5 text-center">
                  <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {lens.proofPoint.stat}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-white/80">
                    {lens.proofPoint.label}
                  </div>
                  <div className="mt-2 text-[11px] text-white/40 font-mono">
                    {lens.proofPoint.context}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* PART 2: THE 4-STAGE PIPELINE (IDEA → INTERFACE → CODE → PRODUCT) */}
      <motion.div {...fade} className="mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-white/[.08] pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-blue-300 tracking-wider">
              <Workflow size={14} />
              <span>THE PRODUCTION ENGINE</span>
            </div>
            <h3 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-white">
              Idea <span className="text-blue-400">→</span> Interface{" "}
              <span className="text-blue-400">→</span> Code{" "}
              <span className="text-blue-400">→</span> Product
            </h3>
            <p className="mt-2 max-w-xl text-sm text-white/50">
              How a raw concept moves systematically through my hands into a live, battle-tested reality. Click each phase to inspect the methodology.
            </p>
          </div>
          <div className="text-xs font-mono text-white/40">
            Interactive Workflow Map
          </div>
        </div>

        {/* Stage Timeline Selector */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {pipelineStages.map((stage, sIdx) => {
            const isSelected = activeStage === sIdx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStage(sIdx)}
                className={`rounded-2xl p-4 sm:p-5 text-left border transition relative overflow-hidden ${
                  isSelected
                    ? "border-blue-400/80 bg-blue-500/10 shadow-xl shadow-blue-500/10"
                    : "border-white/10 bg-white/[.02] hover:border-white/25 hover:bg-white/[.04]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-semibold ${
                      isSelected ? "text-blue-300" : "text-white/40"
                    }`}
                  >
                    PHASE {stage.step}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isSelected ? stage.dotColor : "bg-white/20"
                    }`}
                  />
                </div>
                <div className="text-base sm:text-lg font-semibold text-white">
                  {stage.phase}
                </div>
                <div className="text-xs text-white/50 truncate mt-0.5">
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Deep Dive Card */}
        <div className="mt-6 rounded-3xl border border-white/15 bg-white/[.025] p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-1 rounded-full font-mono text-xs border ${pipelineStages[activeStage].color}`}>
                  PHASE {pipelineStages[activeStage].step} · {pipelineStages[activeStage].phase.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-white/40">METHODOLOGY</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-white">
                {pipelineStages[activeStage].title}
              </h4>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {pipelineStages[activeStage].description}
              </p>
              <div className="pt-2">
                <div className="text-xs font-mono text-white/40 uppercase mb-2">
                  Concrete Artifacts Produced
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                  {pipelineStages[activeStage].activities.map((act) => (
                    <li key={act} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-blue-300 mt-0.5 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-5 rounded-2xl border border-white/10 bg-black/40 p-5 space-y-4">
              <div className="text-xs font-mono text-white/40 uppercase tracking-wider">
                Phase Deliverable
              </div>
              <div className="text-lg font-semibold text-white">
                {pipelineStages[activeStage].outcome}
              </div>
              <div className="text-xs text-white/60 leading-relaxed">
                {activeStage === 0 &&
                  "Prevents scope bloat and technical debt before writing a single line of React code."}
                {activeStage === 1 &&
                  "Gives the application an unmistakable visual personality while guaranteeing responsive touch ergonomics."}
                {activeStage === 2 &&
                  "Ensures high performance, zero build warnings, robust error boundaries, and deterministic state."}
                {activeStage === 3 &&
                  "Gets real software into the hands of real users with edge caching and lightning-fast worldwide delivery."}
              </div>
              <div className="pt-2 border-t border-white/[.08] flex items-center justify-between text-xs font-mono text-white/40">
                <span>STAGE {activeStage + 1} OF 4</span>
                <button
                  type="button"
                  onClick={() => setActiveStage((prev) => (prev + 1) % pipelineStages.length)}
                  className="text-blue-300 hover:text-white flex items-center gap-1 transition"
                >
                  Next Phase <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* PART 3: CORE GUIDING PRINCIPLES */}
      <motion.div {...fade} className="mt-24">
        <div className="border-b border-white/[.08] pb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-blue-300 tracking-wider">
            <Shield size={14} />
            <span>CORE VALUES & OPERATING STANDARDS</span>
          </div>
          <h3 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            Principles that guide every build.
          </h3>
          <p className="mt-2 max-w-xl text-sm text-white/50">
            How I approach engineering, aesthetics, collaboration, and delivery when building for startups or communities.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((pr) => (
            <div
              key={pr.num}
              className="group rounded-3xl border border-white/10 bg-white/[.02] p-6 transition duration-300 hover:border-white/25 hover:bg-white/[.04] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-4">
                  <span className="text-blue-300 font-semibold">{pr.num}</span>
                  <span className="text-[10px] uppercase tracking-wider">{pr.tag}</span>
                </div>
                <h4 className="text-lg font-semibold text-white group-hover:text-blue-200 transition">
                  {pr.title}
                </h4>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/60">
                  {pr.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* PART 4: ABOUT THE BUILDER (BIO & DIRECT CONNECTIVITY) */}
      <motion.div
        {...fade}
        className="mt-20 rounded-3xl border border-white/15 bg-gradient-to-r from-blue-950/20 via-black to-purple-950/20 p-6 sm:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>BASED IN NIGERIA (WAT / GMT+1) · AVAILABLE GLOBALLY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Tumininu Aiyegbusi
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-white/70 max-w-2xl">
              Frontend software engineer, UI/UX designer, and Web3 technologist. Passionate about empowering communities through technology, crafting high-performance interfaces, and turning bold ideas into products that make an impact.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/50 pt-2">
              <div className="flex items-center gap-1.5">
                <Globe size={13} className="text-blue-300" /> Remote Ready
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Zap size={13} className="text-cyan-300" /> Fast Response &lt;24h
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Mountain size={13} className="text-emerald-300" /> Outdoor & Eco-Tourism Advocate
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href="mailto:tumininuisaacaiyegbusi@gmail.com"
              className="w-full rounded-2xl bg-white hover:bg-slate-200 px-5 py-3 text-center text-xs sm:text-sm font-semibold text-black transition flex items-center justify-center gap-2 shadow-lg shadow-white/10"
            >
              Start a Conversation <ArrowRight size={14} />
            </a>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText("tumininuisaacaiyegbusi@gmail.com");
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2500);
              }}
              className="w-full rounded-2xl border border-white/15 bg-white/[.04] hover:bg-white/10 px-5 py-3 text-center text-xs font-mono text-white/80 transition flex items-center justify-center gap-2"
            >
              {copiedEmail ? (
                <>
                  <Check size={14} className="text-emerald-400" /> Email Copied!
                </>
              ) : (
                <>
                  <Copy size={14} className="text-blue-300" /> Copy Direct Email
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
