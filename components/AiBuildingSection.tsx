"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Cpu,
  Sparkles,
  Terminal,
  ShieldCheck,
  Zap,
  Rocket,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Play,
  Layers,
  FileCode,
  Sliders
} from "lucide-react";

interface PipelineStep {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  aiRole: string;
  humanRole: string;
  timeSaved: string;
  tags: string[];
}

const pipelineSteps: PipelineStep[] = [
  {
    id: "spec",
    num: "01",
    title: "Spec & Architecture",
    subtitle: "Domain Modeling & Contract Invariants",
    desc: "Transforming ambiguous user briefs into concrete technical schemas, data contracts, and component trees before writing any code.",
    aiRole: "Drafts comprehensive data schemas, identifies edge-case user paths, and generates baseline entity relationship structures.",
    humanRole: "Validates business logic, chooses the optimal tech stack, determines security boundaries, and enforces domain rules.",
    timeSaved: "~65% faster architecture definition",
    tags: ["System Design", "TypeScript Schemas", "User Flow Mapping"]
  },
  {
    id: "scaffold",
    num: "02",
    title: "AI Scaffolding",
    subtitle: "High-Speed Baseline Synthesis",
    desc: "Accelerating the blank-slate phase by rapidly generating typed boilerplate, responsive layout scaffolds, and API wrappers.",
    aiRole: "Synthesizes typed wagmi/viem hooks, creates foundational Tailwind layouts, and scaffolds API proxy route handlers.",
    humanRole: "Directs code generation through precise architectural prompts and rejects generic boilerplate in favor of custom patterns.",
    timeSaved: "~80% reduction in boilerplate typing",
    tags: ["Component Scaffolding", "Wagmi Hooks", "Tailwind Layouts"]
  },
  {
    id: "audit",
    num: "03",
    title: "Human Audit & Refactor",
    subtitle: "Rigorous Quality Assurance",
    desc: "Treating AI output strictly as a first draft. Every function is scrutinized, typed, refactored, and audited for security vulnerabilities.",
    aiRole: "Suggests alternative implementations, cross-references edge cases, and explains complex third-party library internals.",
    humanRole: "Conducts deep code review, eliminates hallucinations, hardens error handling, and ensures zero security leaks.",
    timeSaved: "~50% faster bug detection & triage",
    tags: ["EVM Safety", "Type Rigor", "Security Auditing"]
  },
  {
    id: "harden",
    num: "04",
    title: "Stress Test & Polish",
    subtitle: "Edge Cases & Micro-Interactions",
    desc: "Refining visual hierarchy, ensuring accessibility (WCAG AA), testing async loading states, and eliminating layout shift.",
    aiRole: "Generates comprehensive unit test matrices, fuzz testing payloads, and identifies potential memory leaks in React hooks.",
    humanRole: "Fine-tunes typography, dials in cubic-bezier animation curves, validates responsive breakpoints, and tests touch targets.",
    timeSaved: "~60% faster test coverage generation",
    tags: ["Vitest / Jest", "WCAG Compliance", "Sub-100ms Motion"]
  },
  {
    id: "ship",
    num: "05",
    title: "Ship & Observability",
    subtitle: "Production Deployment",
    desc: "Deploying production-ready builds to global CDNs, wiring domain DNS, configuring production monitoring, and pushing open-source repos.",
    aiRole: "Generates automated release notes, checks CI/CD workflow syntax, and formats documentation for public repositories.",
    humanRole: "Verifies production smoke tests, monitors real-world user metrics, and owns end-to-end product delivery.",
    timeSaved: "~70% faster documentation & release prep",
    tags: ["CI/CD Pipelines", "Vercel / Cloud Run", "Open Source Release"]
  }
];

interface Scenario {
  id: string;
  name: string;
  category: string;
  prompt: string;
  inputDescription: string;
  outputCode: string;
  explanation: string;
}

const scenarios: Scenario[] = [
  {
    id: "web3",
    name: "Web3 Contract Hook",
    category: "EVM & Wagmi v2",
    prompt: "Generate a custom type-safe wagmi v2 hook for ERC-721A minting with transaction simulation, gas estimation, and toast receipts.",
    inputDescription: "Raw requirement: Connect wallet, verify user balance against mint fee, simulate tx on chain, broadcast, and handle revert errors gracefully.",
    outputCode: `// Generated & Human-Hardened Type-Safe Hook
export function useBatchMint(contractAddress: \`0x\${string}\`) {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });
  
  const { writeContractAsync, isPending } = useWriteContract();
  
  const mintTokens = async (quantity: number) => {
    const requiredEth = parseEther((quantity * 0.08).toString());
    if (balance && balance.value < requiredEth) {
      throw new Error("Insufficient ETH for mint + gas.");
    }

    return await writeContractAsync({
      address: contractAddress,
      abi: NFT_ABI,
      functionName: "mintShards",
      args: [BigInt(quantity)],
      value: requiredEth,
    });
  };

  return { mintTokens, isPending, userAddress: address };
}`,
    explanation: "AI generated the type-safe Wagmi hook template in seconds; human engineering added strict parseEther balance validation and custom error boundaries."
  },
  {
    id: "ui",
    name: "Zero-Pill UI Component",
    category: "Tailwind CSS & Motion",
    prompt: "Create an accessible highland trail elevation card with smooth hover depth, responsive typography, and tabular metrics.",
    inputDescription: "Design spec: No generic pill badges, clean typography with subtle dot separators, 60-30-10 color balance, and WCAG AA contrast.",
    outputCode: `// Production Elevation Profile Component
export function TrailProfileCard({ trail }: { trail: Trail }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-[#080d17] p-6 transition duration-300 hover:border-emerald-400/40">
      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
        <span>{trail.difficulty}</span>
        <span aria-hidden="true">·</span>
        <span>{trail.elevation} Gain</span>
      </div>
      <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-emerald-300">
        {trail.name}
      </h3>
      <div className="mt-4 flex items-center justify-between border-t border-white/[.08] pt-3 text-xs font-mono text-white/50">
        <span>Distance: {trail.distance}</span>
        <span className="tabular-nums font-bold text-white">{trail.duration}</span>
      </div>
    </article>
  );
}`,
    explanation: "AI scaffolds clean semantic markup; human engineering enforces strict zero-pill discipline and subtle typographic hierarchy."
  },
  {
    id: "audit-scenario",
    name: "Async Race Condition Guard",
    category: "React Architecture",
    prompt: "Spot and patch the asynchronous race condition when switching wallet accounts during an active transaction signature request.",
    inputDescription: "Security check: If a user switches accounts in MetaMask while signature is pending, prevent associating the wrong payload with the new account.",
    outputCode: `// Patched with Active Ref & Abort Guard
export function useVerifiedSignature() {
  const currentAccountRef = useRef(account);
  currentAccountRef.current = account;

  const requestAuth = useCallback(async (nonce: string) => {
    const targetAccount = currentAccountRef.current;
    const signature = await signMessageAsync({ message: \`Login Nonce: \${nonce}\` });

    // Invariant check: Verify account did not switch mid-flight
    if (currentAccountRef.current !== targetAccount) {
      throw new Error("Security Alert: Active account changed during signing.");
    }
    return { signature, account: targetAccount };
  }, [signMessageAsync]);

  return { requestAuth };
}`,
    explanation: "AI analyzed the concurrency flow; human review placed the immutable active ref guard to block cross-account state contamination."
  }
];

export function AiBuildingSection() {
  const [activeStepId, setActiveStepId] = useState<string>("spec");
  const [activeScenarioId, setActiveScenarioId] = useState<string>("web3");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationProgress, setSimulationProgress] = useState<number>(0);

  const activeStep = pipelineSteps.find((s) => s.id === activeStepId) || pipelineSteps[0];
  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationProgress(0);

    const interval = setInterval(() => {
      setSimulationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  return (
    <section id="ai-building" className="relative border-y border-white/[.06] bg-gradient-to-b from-[#06080e] via-[#080d18] to-[#05060a] py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-200/70 tracking-widest mb-3">
              <Sparkles size={14} className="text-blue-300" /> 04 / AI BUILDING & VELOCITY
            </div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl text-white leading-[1.05]">
              I don&apos;t just write code. <br />
              <span className="text-gradient">I ship.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg leading-relaxed text-white/55">
              AI is not an excuse for sloppy work—it is an engineering lever. I use it to automate repetitive boilerplate, explore edge cases, and prototype in hours what used to take weeks, while applying rigorous human review to every line of production code.
            </p>
          </div>
        </div>

        {/* 1. THE 5-STAGE SHIPPING PIPELINE (INTERACTIVE STEPPER) */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-3">
              <span>HOW I SHIP WITH AI ACCELERATION</span>
              <span className="text-blue-300">CLICK ANY STAGE TO EXPLORE</span>
            </div>

            {/* Stepper Buttons Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {pipelineSteps.map((step) => {
                const isActive = step.id === activeStepId;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepId(step.id)}
                    className={`group flex flex-col text-left p-4 rounded-2xl border transition relative ${
                      isActive
                        ? "border-blue-400/60 bg-blue-500/10 shadow-lg shadow-blue-500/10"
                        : "border-white/10 bg-white/[.02] hover:border-white/20 hover:bg-white/[.04]"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-3">
                      <span className={`font-mono text-xs font-bold ${isActive ? "text-blue-300" : "text-white/40"}`}>
                        {step.num}
                      </span>
                      {isActive ? (
                        <span className="text-[10px] font-mono font-semibold text-blue-300">ACTIVE</span>
                      ) : (
                        <ArrowRight size={12} className="text-white/20 group-hover:text-white/60 transition" />
                      )}
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">{step.title}</div>
                    <div className="text-[11px] text-white/45 truncate">{step.subtitle}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Deep-Dive Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0b101c] to-[#070b14] p-6 sm:p-8 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 border-b border-white/[.08] pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-300 mb-1">
                    <span>STAGE {activeStep.num}</span>
                    <span>·</span>
                    <span>{activeStep.subtitle}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{activeStep.title}</h3>
                  <p className="mt-2 text-sm text-white/70 max-w-2xl leading-relaxed">
                    {activeStep.desc}
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs font-mono text-emerald-300 shrink-0 self-start">
                  ⚡ {activeStep.timeSaved}
                </div>
              </div>

              {/* The AI vs Human Balance Matrix */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/[.08] bg-white/[.02] p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-300">
                    <Cpu size={14} /> AI ACCELERATOR CONTRIBUTION
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {activeStep.aiRole}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[.08] bg-white/[.02] p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
                    <ShieldCheck size={14} /> HUMAN JUDGMENT & CODE AUDITING
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {activeStep.humanRole}
                  </p>
                </div>
              </div>

              {/* Tags Strip */}
              <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-white/[.06]">
                <span className="text-[11px] font-mono text-white/40 mr-2">Core Competencies:</span>
                {activeStep.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 2. THE INTERACTIVE WORKBENCH (REAL SCENARIOS) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-blue-300 mb-1">
                <Terminal size={14} /> REAL-WORLD ENGINEERING WORKBENCH
              </div>
              <h3 className="text-2xl font-bold text-white">See the Workflow in Action</h3>
              <p className="text-xs text-white/50 mt-1">
                Select a scenario to view how prompts translate into human-audited production code.
              </p>
            </div>

            {/* Scenario Selector Tabs */}
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 self-start sm:self-end">
              {scenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setActiveScenarioId(sc.id);
                    setIsSimulating(false);
                    setSimulationProgress(0);
                  }}
                  className={`rounded-lg px-3 py-1.5 text-xs font-mono transition ${
                    activeScenarioId === sc.id
                      ? "bg-white text-black font-semibold shadow"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {sc.name}
                </button>
              ))}
            </div>
          </div>

          {/* Workbench Shell */}
          <div className="rounded-3xl border border-white/15 bg-[#05070d] shadow-2xl overflow-hidden">
            {/* Workbench Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[.08] px-5 py-3.5 bg-black/60">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-white/40">
                  ai-builder-terminal/{activeScenario.category.toLowerCase().replace(/ /g, "-")}
                </span>
              </div>
              <button
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className="flex items-center gap-1.5 rounded-lg border border-blue-400/40 bg-blue-500/15 hover:bg-blue-500/25 px-3 py-1 text-xs font-mono text-blue-300 transition disabled:opacity-50"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw size={12} className="animate-spin" /> Synthesizing ({simulationProgress}%)...
                  </>
                ) : (
                  <>
                    <Play size={12} /> Run Workflow Diff
                  </>
                )}
              </button>
            </div>

            {/* Workbench Body */}
            <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[.08]">
              {/* Left Column: Prompt & Context */}
              <div className="lg:col-span-5 p-6 space-y-5 bg-white/[.01]">
                <div>
                  <div className="text-[11px] font-mono text-blue-300 uppercase tracking-wider mb-1">
                    ENGINEERING OBJECTIVE
                  </div>
                  <div className="text-base font-semibold text-white">{activeScenario.name}</div>
                  <div className="mt-1 text-xs text-white/50">{activeScenario.inputDescription}</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/50 p-4 space-y-2">
                  <div className="text-[10px] font-mono text-white/40 uppercase">PROMPT ARCHITECTURE</div>
                  <p className="text-xs font-mono text-blue-200/90 leading-relaxed">
                    &ldquo;{activeScenario.prompt}&rdquo;
                  </p>
                </div>

                <div className="rounded-xl border border-purple-400/20 bg-purple-500/5 p-4 space-y-1.5">
                  <div className="text-[10px] font-mono text-purple-300 uppercase font-semibold">
                    AUDIT SUMMARY
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {activeScenario.explanation}
                  </p>
                </div>
              </div>

              {/* Right Column: Code Diff Window */}
              <div className="lg:col-span-7 p-6 bg-black/40 overflow-x-auto">
                <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-3">
                  <span>AUDITED PRODUCTION CODE</span>
                  <span className="text-emerald-400 font-mono text-[11px]">Type-Safe Invariants</span>
                </div>
                <pre className="font-mono text-xs text-blue-100/90 leading-relaxed overflow-x-auto p-4 rounded-xl border border-white/10 bg-[#070a12]">
                  <code>{activeScenario.outputCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CORE PHILOSOPHY CARDS */}
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[.02] p-6 hover:border-white/20 transition space-y-3">
            <div className="h-10 w-10 rounded-xl border border-blue-400/30 bg-blue-500/10 flex items-center justify-center text-blue-300">
              <Code2 size={20} />
            </div>
            <h4 className="text-lg font-semibold text-white">Engineering Judgment First</h4>
            <p className="text-xs leading-relaxed text-white/55">
              AI produces syntax; engineers build systems. Every generated function is questioned, refactored, and audited against web security and contract standards before deployment.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[.02] p-6 hover:border-white/20 transition space-y-3">
            <div className="h-10 w-10 rounded-xl border border-emerald-400/30 bg-emerald-500/10 flex items-center justify-center text-emerald-300">
              <Zap size={20} />
            </div>
            <h4 className="text-lg font-semibold text-white">Velocity Without Technical Debt</h4>
            <p className="text-xs leading-relaxed text-white/55">
              By defining strict TypeScript contracts and clean component hierarchies upfront, rapid prototyping never turns into spaghetti code. Speed and clean code co-exist.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[.02] p-6 hover:border-white/20 transition space-y-3">
            <div className="h-10 w-10 rounded-xl border border-purple-400/30 bg-purple-500/10 flex items-center justify-center text-purple-300">
              <Rocket size={20} />
            </div>
            <h4 className="text-lg font-semibold text-white">End-to-End Autonomous Delivery</h4>
            <p className="text-xs leading-relaxed text-white/55">
              From initial product architecture and interactive UI designs to smart contract integration and cloud deployments, I take complete responsibility for getting software across the finish line.
            </p>
          </div>
        </div>

        {/* 4. QUANTITATIVE VELOCITY STRIP */}
        <div className="rounded-2xl border border-white/[.08] bg-white/[.015] p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-mono text-3xl font-bold text-white">4x</div>
            <div className="text-xs text-white/45 mt-1 font-mono">Prototype Velocity</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-blue-300">100%</div>
            <div className="text-xs text-white/45 mt-1 font-mono">TypeScript Strict Mode</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-white">0</div>
            <div className="text-xs text-white/45 mt-1 font-mono">Boilerplate Burnout</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-emerald-400">Human</div>
            <div className="text-xs text-white/45 mt-1 font-mono">In-the-Loop Audit</div>
          </div>
        </div>
      </div>
    </section>
  );
}
