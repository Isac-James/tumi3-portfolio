"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  ArrowUpRight,
  Github,
  Sparkles,
  Copy,
  Check,
  Send,
  Clock,
  Zap,
  CheckCircle2,
  ChevronDown,
  Terminal
} from "lucide-react";

const projectTypes = [
  { id: "web3", label: "Web3 & dApp Frontend", desc: "Wagmi, Viem, EVM smart contracts, token gating & wallet UX" },
  { id: "mvp", label: "Full-Stack Next.js MVP", desc: "Rapid 0-to-1 prototype shipped to live users in 1-2 weeks" },
  { id: "ai", label: "AI Workflows & Tooling", desc: "Interactive prompt engineering, streaming UI & LLM integration" },
  { id: "portal", label: "Community & Eco-Tourism", desc: "High-retention platforms like Ijero Hikers with interactive maps" },
  { id: "design-code", label: "Figma to Code", desc: "Pixel-perfect, accessible Tailwind & Motion interfaces" },
  { id: "role", label: "Contract / Remote Role", desc: "High-impact frontend engineering or full-stack contributions" }
];

const faqs = [
  {
    q: "How fast can you deliver a working prototype?",
    a: "For scoped MVPs and dApp interfaces, I typically deliver a clickable, responsive live prototype within 48 to 72 hours, with full production delivery completed in 1 to 2 weeks."
  },
  {
    q: "Do you handle both design and frontend implementation?",
    a: "Yes. I operate across the full product loop—from wireframing and user experience architecture to clean TypeScript components, responsive Tailwind styling, and edge deployment."
  },
  {
    q: "How do we coordinate across time zones?",
    a: "I am based in Nigeria (WAT / UTC+1) and collaborate seamlessly with founders and engineering teams across North America, Europe, and Asia using asynchronous Git workflows, clear milestone reviews, and scheduled syncs."
  },
  {
    q: "What tech stack do you recommend for new projects?",
    a: "Next.js (App Router), TypeScript (strict mode), Tailwind CSS, Motion, and Wagmi/Viem for Web3, backed by server-side APIs or Cloud edge functions for maximum performance and security."
  }
];

export function ContactSection() {
  const [selectedType, setSelectedType] = useState<string>("web3");
  const [senderName, setSenderName] = useState<string>("");
  const [senderContact, setSenderContact] = useState<string>("");
  const [projectBrief, setProjectBrief] = useState<string>("");
  
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedBrief, setCopiedBrief] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Time in Nigeria (WAT = UTC+1)
  const [watTime, setWatTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        });
        setWatTime(formatter.format(now));
      } catch {
        setWatTime("WAT (UTC+1)");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeTypeObj = projectTypes.find((p) => p.id === selectedType) || projectTypes[0];

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("tumininuisaacaiyegbusi@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const generateBriefText = () => {
    return [
      `Hi Tumininu,`,
      ``,
      `I'm interested in collaborating with you on a project:`,
      `• Project Type: ${activeTypeObj.label}`,
      `• From: ${senderName.trim() || "[Name not specified]"}`,
      `• Contact / Handle: ${senderContact.trim() || "[Not specified]"}`,
      ``,
      `Project Overview:`,
      projectBrief.trim() || `(Discussing requirements and architecture for ${activeTypeObj.label})`,
      ``,
      `Sent via portfolio project composer.`
    ].join("\n");
  };

  const handleCopyBrief = () => {
    navigator.clipboard?.writeText(generateBriefText());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[Project Inquiry] ${activeTypeObj.label}${senderName ? ` - ${senderName}` : ""}`
    );
    const body = encodeURIComponent(generateBriefText());
    return `mailto:tumininuisaacaiyegbusi@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[.06] bg-[#04060c] py-16 sm:py-20 lg:py-24">
      {/* Background ambient radial gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.07),transparent_55%)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[700px] bg-purple-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3.5 py-1 text-xs font-mono text-blue-300">
            <Sparkles size={13} className="text-blue-300" /> 07 / CONTACT & ENGAGEMENT
          </div>
          <h2 className="text-3xl font-semibold tracking-[-.03em] sm:text-5xl lg:text-6xl text-white">
            Have something <br className="hidden sm:inline" />
            <span className="text-gradient">worth building?</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-white/60 max-w-2xl mx-auto">
            Let&apos;s turn the idea into something people can actually use. Whether you need an end-to-end Web3 interface, a production MVP shipped in two weeks, or an engineering collaborator, I&apos;m ready to build.
          </p>

          {/* Quick Availability Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for New Projects & Contracts</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/50">
              <Clock size={13} className="text-blue-300" />
              <span>Local Time: {watTime || "WAT (UTC+1)"}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/50">
              <Zap size={13} className="text-yellow-400" />
              <span>Response &lt; 24h</span>
            </div>
          </div>
        </div>

        {/* 1. INTERACTIVE PROJECT INQUIRY WORKBENCH */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0a0f1d] via-[#070b16] to-[#04060c] p-6 sm:p-8 lg:p-9 shadow-2xl space-y-6">
          <div className="border-b border-white/[.07] pb-4">
            <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-1.5">
              <span className="text-blue-300">PROJECT SPEC COMPOSER</span>
              <span>1-CLICK BRIEF BUILDER</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Configure your requirements
            </h3>
            <p className="text-xs sm:text-sm text-white/50 mt-1">
              Select your project parameters below to craft a structured brief and launch directly to email or copy to clipboard.
            </p>
          </div>

          {/* Step 1: Project Type Pills */}
          <div className="space-y-2.5">
            <label className="text-xs font-mono text-white/60 uppercase tracking-wider block">
              1. What type of project are you building?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {projectTypes.map((pt) => {
                const isSelected = selectedType === pt.id;
                return (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setSelectedType(pt.id)}
                    className={`rounded-2xl p-4 text-left border transition relative flex flex-col justify-between ${
                      isSelected
                        ? "border-blue-400/80 bg-blue-500/15 shadow-lg shadow-blue-500/10 text-white"
                        : "border-white/10 bg-white/[.02] text-white/70 hover:border-white/20 hover:bg-white/[.04]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-white">{pt.label}</span>
                        {isSelected && (
                          <span className="h-2 w-2 rounded-full bg-blue-400" />
                        )}
                      </div>
                      <p className="mt-1 text-xs text-white/50 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Sender Name & Contact Handle */}
          <div className="space-y-2.5">
            <label className="text-xs font-mono text-white/60 uppercase tracking-wider block">
              2. Your Name & Contact Channel
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name / Organization"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="rounded-xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-blue-400 focus:outline-none transition"
              />
              <input
                type="text"
                placeholder="Your Email or X / Telegram Handle"
                value={senderContact}
                onChange={(e) => setSenderContact(e.target.value)}
                className="rounded-xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-blue-400 focus:outline-none transition"
              />
            </div>
          </div>

          {/* Step 3: Brief Notes */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-white/60 uppercase tracking-wider block">
              3. Project Vision & Notes (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Share a short summary of what you are aiming to build, key features, or reference links..."
              value={projectBrief}
              onChange={(e) => setProjectBrief(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/50 p-3.5 text-xs text-white placeholder-white/30 focus:border-blue-400 focus:outline-none transition leading-relaxed resize-none"
            />
          </div>

          {/* Live Generated Spec Card & Action Buttons */}
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4 sm:p-5 space-y-3.5">
            <div className="flex items-center justify-between text-xs font-mono text-white/40">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-emerald-400" />
                <span>PREVIEW SPEC FORMAT</span>
              </div>
              <span className="text-[11px] text-blue-300">Ready to dispatch</span>
            </div>

            <pre className="font-mono text-xs text-blue-200/90 bg-[#070b14] p-3.5 sm:p-4 rounded-xl border border-white/[.08] overflow-x-auto leading-relaxed whitespace-pre-wrap">
              <code>{generateBriefText()}</code>
            </pre>

            {/* Launch / Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={getMailtoUrl()}
                className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-slate-200 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black transition shadow-lg shadow-white/10"
              >
                <Send size={15} />
                <span>Launch in Email Client</span>
                <ArrowUpRight size={14} />
              </a>

              <button
                type="button"
                onClick={handleCopyBrief}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[.04] hover:bg-white/[.08] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-mono text-white/90 transition"
              >
                {copiedBrief ? (
                  <>
                    <Check size={15} className="text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Brief Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} className="text-blue-300" />
                    <span>Copy Structured Brief</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent hover:bg-white/5 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs font-mono text-white/60 hover:text-white transition"
              >
                {copiedEmail ? (
                  <span className="text-emerald-400">Email Copied!</span>
                ) : (
                  <span>Copy raw email</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 2. DIRECT CONNECTIVITY CARDS */}
        <div className="grid gap-3.5 sm:grid-cols-3">
          {/* Email Direct */}
          <div className="rounded-2xl border border-white/10 bg-white/[.02] p-5 sm:p-6 hover:border-white/20 transition flex flex-col justify-between space-y-3.5">
            <div className="space-y-1.5">
              <div className="h-9 w-9 rounded-xl border border-blue-400/30 bg-blue-500/10 flex items-center justify-center text-blue-300 mb-2">
                <Mail size={16} />
              </div>
              <div className="text-[11px] font-mono text-white/40 uppercase">Direct Inbox</div>
              <h4 className="text-sm sm:text-base font-semibold text-white">Email Address</h4>
              <p className="text-xs text-white/50 leading-relaxed truncate font-mono">
                tumininuisaacaiyegbusi@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="mailto:tumininuisaacaiyegbusi@gmail.com"
                className="flex-1 rounded-xl bg-white/10 hover:bg-white/20 py-2 text-center text-xs font-mono text-white transition"
              >
                Write Email
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="rounded-xl border border-white/15 p-2 text-white/70 hover:text-white hover:border-white/30 transition"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* GitHub Direct */}
          <div className="rounded-2xl border border-white/10 bg-white/[.02] p-5 sm:p-6 hover:border-white/20 transition flex flex-col justify-between space-y-3.5">
            <div className="space-y-1.5">
              <div className="h-9 w-9 rounded-xl border border-purple-400/30 bg-purple-500/10 flex items-center justify-center text-purple-300 mb-2">
                <Github size={16} />
              </div>
              <div className="text-[11px] font-mono text-white/40 uppercase">Public Code</div>
              <h4 className="text-sm sm:text-base font-semibold text-white">GitHub Repositories</h4>
              <p className="text-xs text-white/50 leading-relaxed font-mono">
                github.com/Isac-James
              </p>
            </div>
            <a
              href="https://github.com/Isac-James"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 hover:bg-white/20 py-2 text-center text-xs font-mono text-white transition flex items-center justify-center gap-1.5"
            >
              <span>Explore GitHub</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* X / Twitter Direct */}
          <div className="rounded-2xl border border-white/10 bg-white/[.02] p-5 sm:p-6 hover:border-white/20 transition flex flex-col justify-between space-y-3.5">
            <div className="space-y-1.5">
              <div className="h-9 w-9 rounded-xl border border-emerald-400/30 bg-emerald-500/10 flex items-center justify-center text-emerald-300 mb-2">
                <Sparkles size={16} />
              </div>
              <div className="text-[11px] font-mono text-white/40 uppercase">Social & DMs</div>
              <h4 className="text-sm sm:text-base font-semibold text-white">X / Twitter</h4>
              <p className="text-xs text-white/50 leading-relaxed font-mono">
                @0mo_ayegbusi
              </p>
            </div>
            <a
              href="https://x.com/0mo_ayegbusi"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 hover:bg-white/20 py-2 text-center text-xs font-mono text-white transition flex items-center justify-center gap-1.5"
            >
              <span>Connect on X</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* 3. WORKING WITH ME: 3 GUARANTEES */}
        <div className="rounded-3xl border border-white/[.08] bg-white/[.01] p-5 sm:p-7 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-white/40 border-b border-white/[.06] pb-3">
            <span>ENGINEERING COMMITMENTS</span>
            <span className="text-emerald-400">WHAT WORKING TOGETHER LOOKS LIKE</span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold">
                <CheckCircle2 size={16} /> Rapid First Artifact
              </div>
              <p className="text-xs text-white/55 leading-relaxed">
                You won&apos;t wait weeks for an update. You get a functional, clickable deployment link within 48 to 72 hours to test on desktop and mobile.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold">
                <CheckCircle2 size={16} /> Strict Type Safety & Clean Git
              </div>
              <p className="text-xs text-white/55 leading-relaxed">
                Production-ready code with TypeScript strict mode, clean modular component hierarchies, and well-documented Git commits you can audit anytime.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-purple-300 text-sm font-semibold">
                <CheckCircle2 size={16} /> Direct Builder Communication
              </div>
              <p className="text-xs text-white/55 leading-relaxed">
                Zero agency bureaucracy or junior handoffs. You collaborate directly with the engineer planning, designing, and coding the system.
              </p>
            </div>
          </div>
        </div>

        {/* 4. FREQUENTLY ASKED QUESTIONS */}
        <div className="space-y-3.5 max-w-3xl mx-auto pt-2">
          <div className="text-center space-y-1 mb-4">
            <div className="text-xs font-mono text-blue-300 uppercase tracking-wider">
              QUICK ANSWERS
            </div>
            <h4 className="text-xl sm:text-2xl font-semibold text-white">
              Questions before we start?
            </h4>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/10 bg-white/[.02] overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left text-xs sm:text-sm font-medium text-white hover:text-blue-200 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-white/40 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-300" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 pb-4 text-xs text-white/60 leading-relaxed border-t border-white/[.06] pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
