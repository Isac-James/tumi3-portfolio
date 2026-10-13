"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Cpu,
  Sparkles,
  ShieldCheck,
  Zap,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Layers
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

export function AiBuildingSection() {
  const [activeStepId, setActiveStepId] = useState<string>("spec");
  const activeStep = pipelineSteps.find((s) => s.id === activeStepId) || pipelineSteps[0];

  return (
    <section id="ai-building" className="relative border-y border-white/[.06] bg-gradient-to-b from-[#06080e] via-[#080d18] to-[#05060a] py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 space-y-10 sm:space-y-12">
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
        <div className="space-y-6">
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
                    <div className="flex items-center justify-between w-full mb-2">
                      <span
                        className={`font-mono text-xs font-semibold ${
                          isActive ? "text-blue-300" : "text-white/40"
                        }`}
                      >
                        STAGE {step.num}
                      </span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                      )}
                    </div>
                    <div className="font-semibold text-sm text-white group-hover:text-blue-200 transition">
                      {step.title}
                    </div>
                    <div className="text-[11px] text-white/45 truncate mt-1">
                      {step.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stepper Active Viewport Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0b101c] to-[#070a13] p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle ambient gradient inside card */}
              <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 bg-blue-500/5 blur-3xl" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[.08]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-300 mb-1">
                    <span>STAGE {activeStep.num} DEEP DIVE</span>
                    <span>·</span>
                    <span className="text-white/40">{activeStep.subtitle}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {activeStep.title}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono text-emerald-300 self-start md:self-auto">
                  <Zap size={14} />
                  <span>{activeStep.timeSaved}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm sm:text-base text-white/75 leading-relaxed max-w-3xl">
                {activeStep.desc}
              </p>

              {/* AI vs Human Split Cards */}
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {/* AI Lever */}
                <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[.04] p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-300">
                    <Cpu size={14} /> AI ACCELERATOR LEVER
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {activeStep.aiRole}
                  </p>
                </div>

                {/* Human Responsibility */}
                <div className="rounded-2xl border border-purple-400/20 bg-purple-500/[.04] p-5 space-y-2">
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

        {/* 2. CORE PHILOSOPHY CARDS */}
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

        {/* 3. QUANTITATIVE VELOCITY STRIP */}
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
