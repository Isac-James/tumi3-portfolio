"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Mail,
  Menu,
  X,
  ExternalLink,
  Sparkles,
  Code2,
  Cpu,
  Palette,
  Boxes,
  Mountain,
  Compass,
  MapPin,
  TrendingUp,
  Lock,
  Layers,
  CheckCircle2,
  Zap,
  Camera,
  Navigation,
  Users,
  Clock,
  Copy,
  Check,
  Terminal,
  Activity,
  Shield
} from "lucide-react";
import { ProjectModal, type ProjectData } from "../components/ProjectModal";
import { AiBuildingSection } from "../components/AiBuildingSection";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { StackSection } from "../components/StackSection";
import { CapabilitiesSection } from "../components/CapabilitiesSection";
import { LabSection } from "../components/LabSection";

const projects: ProjectData[] = [
  {
    n: "01",
    slug: "ijero-hikers",
    title: "Ijero Hikers Adventure Club",
    subtitle: "Highland Eco-Tourism & Trail Discovery Platform",
    desc: "A production community hiking platform built for exploring the scenic highlands, mountain ridges and waterfalls of Ijero Ekiti, Nigeria. Features interactive trail itineraries, difficulty ratings, and group bookings.",
    longDesc: "Ijero Hikers is a dedicated eco-tourism and mountain adventure community platform built to showcase the breathtaking highlands of Ijero Ekiti, Nigeria. The application connects outdoor enthusiasts, provides trail difficulty ratings, elevation statistics, safety guidelines, and enables seamless expedition registration.",
    category: "Shipped",
    status: "SHIPPED & LIVE",
    image: "/projects/ijero_hikers_showcase_1791801529938.jpg",
    featured: true,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Mapbox / Leaflet"],
    githubUrl: "https://github.com/Isac-James/Ijero-hikers",
    liveUrl: "https://github.com/Isac-James/Ijero-hikers",
    metrics: [
      { label: "Highland Trails", value: "14+" },
      { label: "Active Hikers", value: "480+" },
      { label: "Peak Elevation", value: "2,450ft" },
      { label: "Community Rating", value: "4.9/5" }
    ],
    highlights: [
      "Dynamic trail discovery engine with GPS coordinates & elevation profiles",
      "Expedition registration and group hiking booking system",
      "High-resolution community photography and summit gallery",
      "Mobile-first, offline-capable responsive interface"
    ]
  },
  {
    n: "02",
    slug: "defi-intelligence",
    title: "DeFi Intelligence",
    subtitle: "Cross-Chain Portfolio Telemetry Dashboard",
    desc: "A modern Web3 financial intelligence interface providing multi-chain asset visibility, real-time token tracking, APY yield comparisons, and transaction history.",
    longDesc: "DeFi Intelligence brings institutional-grade asset clarity to decentralized finance. Features interactive candlestick charting, automated wallet token discovery across EVM chains, and real-time gas price tracking.",
    category: "Dashboards",
    status: "ACTIVE PROTOTYPE",
    image: "/projects/defi_intelligence_ui_1791801551657.jpg",
    tech: ["Next.js", "TypeScript", "wagmi", "viem", "Tailwind CSS"],
    githubUrl: "https://github.com/Isac-James/",
    metrics: [
      { label: "Supported Chains", value: "6 EVM" },
      { label: "Data Refresh", value: "<1.2s" },
      { label: "Tracked Tokens", value: "250+" }
    ],
    highlights: [
      "Cross-chain portfolio balances aggregation",
      "Interactive financial telemetry and interactive chart toggles",
      "Simulated automated gas fee optimization"
    ]
  },
  {
    n: "03",
    slug: "mint-protocol",
    title: "Mint Protocol",
    subtitle: "Generative NFT Launchpad & Web3 Drop Engine",
    desc: "A high-performance digital collectible launchpad with real-time wallet handshake, live whitelist verification, rarity preview, and gas-optimized contract interactions.",
    longDesc: "Mint Protocol is engineered for high-throughput drop events. It provides smooth wallet connections (MetaMask, WalletConnect, Coinbase), Merkle-proof whitelist verification, live supply countdowns, and instant transaction receipts.",
    category: "Web3",
    status: "ACTIVE PROTOTYPE",
    image: "/projects/mint_protocol_nft_1791801573320.jpg",
    tech: ["Next.js", "TypeScript", "wagmi", "viem", "Solidity"],
    githubUrl: "https://github.com/Isac-James/",
    metrics: [
      { label: "Contract Standard", value: "ERC-721A" },
      { label: "Gas Savings", value: "~42%" },
      { label: "Rarity Tiers", value: "4 Levels" }
    ],
    highlights: [
      "Instant wallet connect with dynamic balance check",
      "Generative holographic preview with rarity inspection",
      "Simulated live mint counter & transaction state machine"
    ]
  },
  {
    n: "04",
    slug: "gate3",
    title: "Gate3 Access",
    subtitle: "Token-Gated Community Authentication Engine",
    desc: "A zero-knowledge proof concept and token verification gate allowing communities to restrict sensitive resources, VIP chats, and content to verified token or NFT holders.",
    longDesc: "Gate3 decouples access verification from custodial identity. Users sign a cryptographic nonce with their private key, proving token ownership without compromising wallet security or submitting private credentials.",
    category: "Web3",
    status: "CONCEPT IN DEV",
    image: "/projects/gate3_access_ui_1791801599056.jpg",
    tech: ["Next.js", "TypeScript", "Web3 APIs", "SIWE"],
    githubUrl: "https://github.com/Isac-James/",
    metrics: [
      { label: "Auth Standard", value: "EIP-4361" },
      { label: "Verification Latency", value: "<300ms" },
      { label: "Privacy Rating", value: "Zero-Knowledge" }
    ],
    highlights: [
      "Cryptographic signature verification simulator",
      "Role-based token access rules engine",
      "Tamper-proof verifiable badge generation"
    ]
  }
];

const ijeroTrails = [
  {
    id: 0,
    name: "Oke-Ijero Highland Ridge",
    subtitle: "Highest Peak Panoramic Traverse",
    difficulty: "Moderate",
    distance: "8.4 km",
    elevation: "2,450ft (+720m)",
    duration: "3h 45m",
    terrain: "Granite ridges, highland plateau, mountain grass",
    gps: "7°49'12\"N 5°04'38\"E",
    scenery: "Panoramic 360° views across Ekiti highlands"
  },
  {
    id: 1,
    name: "Ikoro Waterfalls Cascade",
    subtitle: "Lush Rainforest & Hidden Natural Pool",
    difficulty: "Scenic / Easy",
    distance: "5.2 km",
    elevation: "1,150ft (+310m)",
    duration: "2h 15m",
    terrain: "Dense rainforest canopy, river stone crossings",
    gps: "7°47'28\"N 5°02'15\"E",
    scenery: "Twin tiered cascades into crystal mountain pool"
  },
  {
    id: 2,
    name: "Ipoti Highland Escarpment",
    subtitle: "Steep Valley Ridgeline & Ancient Caves",
    difficulty: "Challenging",
    distance: "12.6 km",
    elevation: "2,200ft (+980m)",
    duration: "5h 30m",
    terrain: "Steep rocky switchbacks, high escarpment bluffs",
    gps: "7°52'04\"N 5°06'52\"E",
    scenery: "Dramatic cliff drop-offs and historical trail sites"
  }
];

const ijeroPhotos = [
  {
    id: 0,
    title: "Web Platform UI",
    label: "Platform UI",
    caption: "Responsive Next.js 14 platform with interactive trail discovery & booking",
    src: "/projects/ijero_hikers_showcase_1791801529938.jpg"
  },
  {
    id: 1,
    title: "Oke-Ijero Highland Ridge",
    label: "2,450ft Summit Ridge",
    caption: "Summit peak at 2,450ft overlooking morning mist and granite ridges",
    src: "/projects/ijero_highland_ridge.jpg"
  },
  {
    id: 2,
    title: "Ikoro Waterfalls Cascade",
    label: "Waterfalls Trail",
    caption: "Hidden rainforest cascade and crystal mountain pool destination",
    src: "/projects/ijero_waterfall_trail.jpg"
  }
];



function Network() {
  const reduce = useReducedMotion();
  const [p, setP] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const f = (e: MouseEvent) =>
      setP({ x: (e.clientX / innerWidth) * 100, y: (e.clientY / innerHeight) * 100 });
    addEventListener("mousemove", f);
    return () => removeEventListener("mousemove", f);
  }, []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <motion.div
        animate={reduce ? {} : { x: `${p.x / 9 - 5}%`, y: `${p.y / 9 - 5}%` }}
        transition={{ type: "spring", stiffness: 35, damping: 25 }}
        className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(110,168,255,.10),transparent_68%)] blur-2xl"
      />
      <svg className="absolute inset-0 h-full w-full opacity-30">
        <defs>
          <pattern id="net" width="110" height="110" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.2" fill="white" />
            <path d="M10 10L100 100M10 100L100 10" stroke="rgba(130,160,220,.12)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#net)" />
      </svg>
    </div>
  );
}

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.6 }
};

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Ijero Hikers Interactive Showcase States
  const [ijeroPhotoIndex, setIjeroPhotoIndex] = useState<number>(0);
  const [ijeroActiveTab, setIjeroActiveTab] = useState<"overview" | "routes" | "rsvp">("overview");
  const [ijeroActiveTrail, setIjeroActiveTrail] = useState<number>(0);
  const [ijeroRsvpName, setIjeroRsvpName] = useState<string>("");
  const [ijeroRsvpSubmitted, setIjeroRsvpSubmitted] = useState<boolean>(false);
  const [ijeroRsvpPassId, setIjeroRsvpPassId] = useState<string>("IH-842");

  // Hero Section Interactive States
  const [heroLens, setHeroLens] = useState<"synthesis" | "web3" | "ai" | "frontend">("synthesis");
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  useEffect(() => {
    const f = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    addEventListener("mousemove", f);
    return () => removeEventListener("mousemove", f);
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <main>
      <div
        aria-hidden
        className="fixed z-50 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 pointer-events-none md:block"
        style={{ left: cursor.x, top: cursor.y }}
      />
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/[.06] bg-[#05060a]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="font-mono text-sm font-bold tracking-widest">
            TUMI<span className="text-blue-300">{"//3"}</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/60 md:flex">
            {[
              { label: "Work", href: "#work" },
              { label: "About", href: "#about" },
              { label: "Stack", href: "#stack" },
              { label: "AI Velocity", href: "#ai-building" },
              { label: "Capabilities", href: "#capabilities" },
              { label: "Lab", href: "#lab" },
              { label: "Contact", href: "#contact" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-white whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-1 rounded-full border border-white/10 px-4 py-2 text-xs text-white/80 hover:border-white/25 md:flex"
          >
            Available for opportunities <ArrowUpRight size={14} />
          </a>
          <button
            className="md:hidden"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <nav className="flex flex-col gap-5 border-t border-white/10 px-5 py-6 md:hidden">
            {[
              { label: "Work", href: "#work" },
              { label: "About", href: "#about" },
              { label: "Stack", href: "#stack" },
              { label: "AI Velocity", href: "#ai-building" },
              { label: "Capabilities", href: "#capabilities" },
              { label: "Lab", href: "#lab" },
              { label: "Contact", href: "#contact" }
            ].map((item) => (
              <a
                onClick={() => setMenu(false)}
                key={item.label}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section — WEB3 / AI / FRONTEND */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
        <Network />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 lg:py-24 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8">
          {/* Left Column: Narrative & Disciplinary Lens */}
          <div>
            {/* Disciplinary Lens Selector */}
            <motion.div {...fade} className="mb-6 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] tracking-widest text-white/40 mr-1 uppercase">Lens:</span>
              {[
                { id: "synthesis", label: "Synthesis (All 3)", color: "border-blue-400/50 bg-blue-500/15 text-blue-200" },
                { id: "web3", label: "01 Web3 dApps", color: "border-purple-400/50 bg-purple-500/15 text-purple-200" },
                { id: "ai", label: "02 AI Speed", color: "border-cyan-400/50 bg-cyan-500/15 text-cyan-200" },
                { id: "frontend", label: "03 Frontend Craft", color: "border-emerald-400/50 bg-emerald-500/15 text-emerald-200" }
              ].map((lens) => (
                <button
                  key={lens.id}
                  onClick={() => setHeroLens(lens.id as any)}
                  className={`rounded-full px-3 py-1 font-mono text-[11px] transition border ${
                    heroLens === lens.id
                      ? `${lens.color} font-semibold shadow-md`
                      : "border-white/10 bg-white/[.03] text-white/50 hover:text-white hover:border-white/20"
                  }`}
                >
                  {lens.label}
                </button>
              ))}
            </motion.div>

            {/* Sub-kicker */}
            <motion.div
              {...fade}
              className="mb-4 flex items-center gap-2.5 font-mono text-xs tracking-[.25em] text-blue-200/80"
            >
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              {heroLens === "synthesis" && "WEB3 / AI / FRONTEND ARCHITECTURE"}
              {heroLens === "web3" && "DECENTRALIZED NETWORKS & EVM PROTOCOLS"}
              {heroLens === "ai" && "AI-POWERED VELOCITY & DUAL-ENGINE CODE"}
              {heroLens === "frontend" && "PERFORMANCE FRONTEND & USER EXPERIENCE"}
            </motion.div>

            {/* Core Headline */}
            <motion.h1
              {...fade}
              className="max-w-5xl text-4xl font-semibold leading-[.98] tracking-[-.04em] sm:text-6xl lg:text-[76px] text-white"
            >
              I build the interfaces behind the{" "}
              {heroLens === "synthesis" && (
                <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                  next generation of the web.
                </span>
              )}
              {heroLens === "web3" && (
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                  trustless decentralized web.
                </span>
              )}
              {heroLens === "ai" && (
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-300 bg-clip-text text-transparent">
                  AI-accelerated software age.
                </span>
              )}
              {heroLens === "frontend" && (
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  frictionless human experience.
                </span>
              )}
            </motion.h1>

            {/* Adaptive Narrative Subheading */}
            <motion.p
              {...fade}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
            >
              {heroLens === "synthesis" && (
                <>
                  Frontend developer, Web3 interface specialist, and AI-leveraged builder turning complex ideas into high-speed digital products. Creator of the production <strong className="text-white font-medium">Ijero Hikers</strong> adventure platform, cross-chain DeFi tools, and modern web applications.
                </>
              )}
              {heroLens === "web3" && (
                <>
                  Architecting non-custodial wallet connections, EIP-712 cryptographic signatures, token-gated access engines, and multi-chain DeFi dashboards with zero latency, robust error boundaries, and reactive EVM state.
                </>
              )}
              {heroLens === "ai" && (
                <>
                  Dual-engine development translating high-level product architectures into audited, type-safe Next.js codebases in hours. Zero hallucination tolerance with strict AST invariant verification and production-grade delivery.
                </>
              )}
              {heroLens === "frontend" && (
                <>
                  Crafting fluid 60fps micro-animations, zero-layout-shift UI systems, responsive highland portals like Ijero Hikers, and accessible interactive applications crafted for real humans with obsessive attention to typography.
                </>
              )}
            </motion.p>

            {/* Active Technical Capabilities Pill Ribbon */}
            <motion.div {...fade} className="mt-7 flex flex-wrap gap-2">
              {(heroLens === "synthesis"
                ? ["Next.js 14", "TypeScript", "EVM / wagmi", "Ijero Hikers (Live)", "AI Fast-Shipping", "Tailwind CSS"]
                : heroLens === "web3"
                ? ["EIP-712 Signatures", "wagmi v2", "viem", "ERC-721A", "SIWE Auth", "Multichain EVM"]
                : heroLens === "ai"
                ? ["Dual-Engine Coding", "Spec Decomposition", "Type-Safe Invariants", "<72h MVPs", "AST Verification"]
                : ["Tailwind CSS v4", "Fluid Motion", "Zero Layout Shift", "Lighthouse 100", "Responsive UX"]
              ).map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/[.04] px-3 py-1 font-mono text-[11px] text-white/75"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div {...fade} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-black transition hover:bg-slate-200 flex items-center gap-1.5 shadow-lg shadow-white/10"
              >
                View Shipped Work <ArrowUpRight size={15} />
              </a>
              <a
                href="#ai-building"
                className="rounded-full border border-cyan-400/40 bg-cyan-950/30 px-5 py-3 text-xs sm:text-sm font-semibold text-cyan-200 hover:bg-cyan-900/40 transition flex items-center gap-1.5"
              >
                <Zap size={14} className="text-cyan-400" /> Test AI Velocity Bench
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/15 px-5 py-3 text-xs sm:text-sm font-semibold text-white hover:border-white/30 transition flex items-center gap-1.5"
              >
                Engineering Philosophy <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* Social & Contact Row */}
            <motion.div {...fade} className="mt-9 flex items-center gap-4 text-white/50 text-xs">
              <a
                href="https://github.com/Isac-James/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition"
              >
                <Github size={16} /> <span className="font-mono">github.com/Isac-James</span>
              </a>
              <span className="text-white/20">/</span>
              <a
                href="https://x.com/0mo_ayegbusi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition"
              >
                <Sparkles size={16} /> <span className="font-mono">@0mo_ayegbusi</span>
              </a>
              <span className="text-white/20">/</span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText("tumininuisaacaiyegbusi@gmail.com");
                  setCopiedEmail(true);
                  setTimeout(() => setCopiedEmail(false), 2500);
                }}
                className="flex items-center gap-1.5 hover:text-white transition font-mono"
              >
                <Mail size={16} />
                <span>{copiedEmail ? "Copied to clipboard!" : "Copy Email"}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Builder Identity & Spec Card */}
          <motion.div {...fade} className="relative w-full">
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#090d18]/90 backdrop-blur-2xl shadow-2xl">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-black/40">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-[11px] text-white/50 tracking-wider">TUMI//BUILDER_PROFILE</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-950/40 px-3 py-1 text-[10px] font-mono text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED BUILDER
                </div>
              </div>

              {/* Profile Card Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {/* Portrait Media: Unobstructed Face with Portrait Aspect Ratio */}
                <div className="relative aspect-[4/5] sm:aspect-[3/3.8] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#070b13]">
                  <Image
                    src="/portrait.png"
                    alt="Tumininu Aiyegbusi"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-[50%_15%]"
                  />
                  {/* Subtle bottom gradient only at the very base, keeping the face completely clear */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080d17] via-[#080d17]/40 to-transparent" />

                  {/* Clean bottom name strip located at the very bottom edge */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="font-mono text-[11px] text-blue-300 tracking-wider">TUMININU AIYEGBUSI</div>
                      <div className="text-sm font-semibold text-white drop-shadow-sm">Full-Stack Frontend & Web3</div>
                    </div>
                    <div className="rounded-lg bg-black/80 border border-white/15 px-2.5 py-1 text-right backdrop-blur-sm">
                      <div className="text-[9px] font-mono text-white/40">LOCATION</div>
                      <div className="text-[11px] font-mono text-white/90">Nigeria (WAT GMT+1)</div>
                    </div>
                  </div>
                </div>

                {/* Verification Spec Matrix */}
                <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                  <div className="rounded-xl border border-white/10 bg-white/[.02] p-3 space-y-1">
                    <div className="text-[10px] text-white/40">PRODUCTION FLAGSHIP</div>
                    <div className="font-semibold text-emerald-300 flex items-center gap-1">
                      <Check size={12} /> Ijero Hikers Platform
                    </div>
                    <div className="text-[10px] text-white/50">Next.js 14 · Eco-Tourism</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[.02] p-3 space-y-1">
                    <div className="text-[10px] text-white/40">SPECIALTY DISCIPLINE</div>
                    <div className="font-semibold text-blue-300 flex items-center gap-1">
                      <Code2 size={12} /> Web3 + AI Synthesis
                    </div>
                    <div className="text-[10px] text-white/50">wagmi · viem · LLM Tooling</div>
                  </div>
                </div>

                {/* Quick Copy / Action Bar */}
                <div className="flex items-center justify-between pt-2 border-t border-white/[.07] text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard?.writeText("tumininuisaacaiyegbusi@gmail.com");
                      setCopiedEmail(true);
                      setTimeout(() => setCopiedEmail(false), 2500);
                    }}
                    className="flex items-center gap-1.5 font-mono text-white/70 hover:text-white transition"
                  >
                    <Copy size={13} className="text-blue-300" />
                    <span>{copiedEmail ? "Email copied to clipboard!" : "tumininuisaacaiyegbusi@gmail.com"}</span>
                  </button>
                  <a
                    href="https://github.com/Isac-James/Ijero-hikers"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 font-mono text-[11px] text-emerald-300 hover:underline"
                  >
                    View Live Code <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upgraded Command Center / Status Bar */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <motion.div {...fade} className="card glow grid gap-6 p-6 sm:grid-cols-3">
          {/* Column 1: Active Production Status */}
          <div className="space-y-2">
            <div className="font-mono text-[10px] tracking-[.2em] text-white/40 uppercase">
              01 / ACTIVE BUILDS & SHIPPED
            </div>
            <div className="space-y-2 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-white font-semibold">Ijero Hikers:</strong> Live production highland eco-tourism platform.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-white font-semibold">DeFi Intelligence:</strong> Multi-chain portfolio telemetry & APY tracking.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-white font-semibold">Mint Protocol & Gate3:</strong> Generative NFT drop engine & SIWE auth.
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Engineering Velocity Standards */}
          <div className="space-y-2 sm:border-l sm:border-white/10 sm:pl-6">
            <div className="font-mono text-[10px] tracking-[.2em] text-white/40 uppercase">
              02 / ENGINEERING VELOCITY
            </div>
            <div className="space-y-2 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <Zap size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-white font-semibold">&lt; 72hr Turnaround:</strong> Spec-to-deployment production speed.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-white font-semibold">100% Type-Safe:</strong> Strict invariants & automated AST auditing.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Github size={13} className="text-white/60 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-white font-semibold">Open Source:</strong> Verified public git history on GitHub.
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Availability & Direct Line */}
          <div className="space-y-2 sm:border-l sm:border-white/10 sm:pl-6">
            <div className="font-mono text-[10px] tracking-[.2em] text-white/40 uppercase">
              03 / STATUS & AVAILABILITY
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-emerald-300 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AVAILABLE FOR FULL-TIME ROLES & CONTRACTS</span>
              </div>
              <div className="text-white/50 text-[11px] font-mono">
                Timezone: West Africa Time (WAT / GMT+1) · Fast response &lt;24h
              </div>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText("tumininuisaacaiyegbusi@gmail.com");
                  setCopiedEmail(true);
                  setTimeout(() => setCopiedEmail(false), 2500);
                }}
                className="w-full rounded-xl bg-white/[.06] hover:bg-white/10 border border-white/15 px-3 py-2 text-center text-xs font-mono text-white transition flex items-center justify-center gap-1.5"
              >
                <Mail size={13} className="text-blue-300" />
                <span>{copiedEmail ? "Email copied to clipboard!" : "tumininuisaacaiyegbusi@gmail.com"}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 01 / ABOUT — INTERACTIVE TRIAD, OPERATING PIPELINE & PRINCIPLES */}
      <AboutSection />

      {/* 02 / SELECTED WORK — UPGRADED & DYNAMIC */}
      <section
        id="work"
        className="border-y border-white/[.06] bg-gradient-to-b from-white/[.01] via-white/[.025] to-transparent py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Section Header & Filter Controls */}
          <motion.div
            {...fade}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 sm:pb-10 border-b border-white/[.07]"
          >
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-blue-200/70 tracking-widest">
                <Compass size={14} className="text-blue-300" /> 02 / SELECTED WORK
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl text-white">
                Proof starts with the build.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-white/50 leading-relaxed">
                Real shipped platforms, adventure portals, and Web3 interfaces. Built with real code, public repositories, and zero filler templates.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[.04] border border-white/10 shrink-0 self-start lg:self-end">
              {[
                { id: "All", label: "All Works", count: 4 },
                { id: "Shipped", label: "Shipped & Live", count: 1 },
                { id: "Web3", label: "Web3 & dApps", count: 2 },
                { id: "Dashboards", label: "Dashboards", count: 1 }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition ${
                    selectedCategory === tab.id
                      ? "bg-white text-black shadow-lg shadow-white/10 font-semibold"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono ${
                      selectedCategory === tab.id
                        ? "bg-black/15 text-black"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* HERO SPOTLIGHT: Ijero Hikers Adventure Club */}
          {(selectedCategory === "All" || selectedCategory === "Shipped") && (
            <motion.div {...fade} className="mt-12">
              <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#0d1322] via-[#090d18] to-[#060911] shadow-2xl transition hover:border-emerald-400/40">
                <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                  {/* Visual Media Pane */}
                  <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] overflow-hidden bg-[#070b14] flex flex-col justify-between p-5">
                    <Image
                      src={ijeroPhotos[ijeroPhotoIndex].src}
                      alt={ijeroPhotos[ijeroPhotoIndex].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover object-center transition duration-700 ease-out"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-black/30 to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:via-black/25 lg:to-[#090d18]" />

                    {/* Top Badges */}
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/75 backdrop-blur-md px-3.5 py-1.5 text-xs font-mono font-medium text-emerald-300 shadow-lg">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        SHIPPED & PRODUCTION LIVE
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-[11px] text-white/80">
                        <MapPin size={12} className="text-emerald-400" /> Ijero Ekiti, Nigeria
                      </div>
                    </div>

                    {/* Photo Switcher & Bottom Telemetry */}
                    <div className="relative z-10 space-y-3 pt-24 sm:pt-36">
                      {/* Active photo caption */}
                      <div className="rounded-xl border border-white/10 bg-black/70 backdrop-blur-md px-3.5 py-2 text-xs text-white/80 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Camera size={13} className="text-emerald-400" />
                          <span className="font-semibold text-white">{ijeroPhotos[ijeroPhotoIndex].title}:</span>
                          <span className="text-white/60 truncate max-w-[280px] sm:max-w-md">{ijeroPhotos[ijeroPhotoIndex].caption}</span>
                        </div>
                        <span className="font-mono text-[10px] text-emerald-300">0{ijeroPhotoIndex + 1}/03</span>
                      </div>

                      {/* Photo selector buttons */}
                      <div className="flex items-center gap-2">
                        {ijeroPhotos.map((photo, pIdx) => (
                          <button
                            key={photo.id}
                            onClick={() => setIjeroPhotoIndex(pIdx)}
                            className={`flex-1 rounded-xl px-3 py-2 text-xs font-mono transition text-left border ${
                              ijeroPhotoIndex === pIdx
                                ? "border-emerald-400/80 bg-emerald-500/20 text-white font-semibold shadow-lg shadow-emerald-500/10"
                                : "border-white/10 bg-black/60 text-white/60 hover:text-white hover:bg-black/80"
                            }`}
                          >
                            <div className="text-[10px] text-emerald-300/80">VIEW 0{pIdx + 1}</div>
                            <div className="truncate text-xs">{photo.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Narrative & Interactive Details Pane */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#080d17]/80">
                    <div>
                      {/* Section Kicker */}
                      <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-2">
                        <span className="text-emerald-400">PROJECT 01 · FEATURED ECO-TOURISM</span>
                        <span>OPEN SOURCE</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-emerald-300 transition">
                        Ijero Hikers Adventure Club
                      </h3>
                      <p className="mt-1 text-xs font-mono text-blue-200/60">
                        Highland Eco-Tourism & Trail Discovery Platform
                      </p>

                      {/* Interactive Tabs on the Card */}
                      <div className="mt-5 flex items-center gap-1.5 p-1 rounded-xl bg-white/[.04] border border-white/10 text-xs">
                        <button
                          onClick={() => setIjeroActiveTab("overview")}
                          className={`flex-1 rounded-lg py-1.5 font-medium transition text-center ${
                            ijeroActiveTab === "overview"
                              ? "bg-white text-black font-semibold shadow"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          Overview
                        </button>
                        <button
                          onClick={() => setIjeroActiveTab("routes")}
                          className={`flex-1 rounded-lg py-1.5 font-medium transition text-center ${
                            ijeroActiveTab === "routes"
                              ? "bg-emerald-400 text-black font-semibold shadow"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          Trail Routes
                        </button>
                        <button
                          onClick={() => setIjeroActiveTab("rsvp")}
                          className={`flex-1 rounded-lg py-1.5 font-medium transition text-center ${
                            ijeroActiveTab === "rsvp"
                              ? "bg-blue-400 text-black font-semibold shadow"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          Trek RSVP
                        </button>
                      </div>

                      {/* TAB 1: OVERVIEW */}
                      {ijeroActiveTab === "overview" && (
                        <div className="mt-5 space-y-4">
                          <p className="text-xs sm:text-sm leading-relaxed text-white/70">
                            A high-performance community outdoor hiking portal engineered for discovering the scenic highlands, mountain ridges, and hidden waterfalls of Ijero Ekiti. Built with responsive trail elevation charts, expedition itineraries, and group booking workflows.
                          </p>

                          {/* Metrics Grid */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 border-y border-white/[.08] py-3.5">
                            <div className="text-center">
                              <div className="font-mono text-lg font-bold text-white">14+</div>
                              <div className="text-[10px] text-white/40 font-mono">Highland Trails</div>
                            </div>
                            <div className="text-center">
                              <div className="font-mono text-lg font-bold text-white">480+</div>
                              <div className="text-[10px] text-white/40 font-mono">Active Hikers</div>
                            </div>
                            <div className="text-center">
                              <div className="font-mono text-lg font-bold text-white">2,450ft</div>
                              <div className="text-[10px] text-white/40 font-mono">Peak Summit</div>
                            </div>
                            <div className="text-center">
                              <div className="font-mono text-lg font-bold text-emerald-400">4.9/5</div>
                              <div className="text-[10px] text-white/40 font-mono">Trek Rating</div>
                            </div>
                          </div>

                          {/* Tech Chips */}
                          <div className="flex flex-wrap gap-1.5">
                            {projects[0].tech.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-white/10 bg-white/[.04] px-2.5 py-0.5 font-mono text-[10px] text-white/70"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* TAB 2: INTERACTIVE TRAIL ROUTES */}
                      {ijeroActiveTab === "routes" && (
                        <div className="mt-5 space-y-3">
                          {/* Route selector buttons */}
                          <div className="grid grid-cols-3 gap-1.5">
                            {ijeroTrails.map((trail, tIdx) => (
                              <button
                                key={trail.id}
                                onClick={() => {
                                  setIjeroActiveTrail(tIdx);
                                  if (tIdx === 0) setIjeroPhotoIndex(1);
                                  if (tIdx === 1) setIjeroPhotoIndex(2);
                                }}
                                className={`rounded-xl p-2 text-left border transition text-xs ${
                                  ijeroActiveTrail === tIdx
                                    ? "border-emerald-400/70 bg-emerald-500/15 text-white font-medium"
                                    : "border-white/10 bg-white/[.02] text-white/50 hover:border-white/20 hover:text-white"
                                }`}
                              >
                                <div className="text-[10px] font-mono text-emerald-300">ROUTE 0{tIdx + 1}</div>
                                <div className="truncate font-semibold">{trail.name.split(" ")[0]}</div>
                              </button>
                            ))}
                          </div>

                          {/* Active Route Details Card */}
                          <div className="rounded-2xl border border-white/10 bg-black/50 p-4 space-y-3">
                            <div className="flex items-center justify-between border-b border-white/[.08] pb-2">
                              <div>
                                <div className="text-sm font-semibold text-white">
                                  {ijeroTrails[ijeroActiveTrail].name}
                                </div>
                                <div className="text-[11px] text-emerald-300 font-mono">
                                  {ijeroTrails[ijeroActiveTrail].subtitle}
                                </div>
                              </div>
                              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                                {ijeroTrails[ijeroActiveTrail].difficulty}
                              </span>
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center font-mono">
                              <div className="rounded-lg bg-white/[.03] p-2">
                                <div className="text-[10px] text-white/40">Distance</div>
                                <div className="text-xs font-bold text-white">{ijeroTrails[ijeroActiveTrail].distance}</div>
                              </div>
                              <div className="rounded-lg bg-white/[.03] p-2">
                                <div className="text-[10px] text-white/40">Elevation</div>
                                <div className="text-xs font-bold text-emerald-300">{ijeroTrails[ijeroActiveTrail].elevation}</div>
                              </div>
                              <div className="rounded-lg bg-white/[.03] p-2">
                                <div className="text-[10px] text-white/40">Est. Time</div>
                                <div className="text-xs font-bold text-white">{ijeroTrails[ijeroActiveTrail].duration}</div>
                              </div>
                            </div>

                            <div className="text-[11px] text-white/60 flex items-start gap-1.5 pt-1">
                              <Navigation size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                              <span>Terrain: {ijeroTrails[ijeroActiveTrail].terrain}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TAB 3: EXPEDITION RSVP SIMULATOR */}
                      {ijeroActiveTab === "rsvp" && (
                        <div className="mt-5 space-y-3">
                          <div className="rounded-2xl border border-white/10 bg-black/50 p-4 space-y-3">
                            <div className="text-xs font-mono text-blue-300 flex items-center gap-1.5">
                              <Users size={13} /> NEXT COMMUNITY EXPEDITION ROSTER
                            </div>

                            {!ijeroRsvpSubmitted ? (
                              <form
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  if (!ijeroRsvpName.trim()) return;
                                  setIjeroRsvpPassId("IH-" + Math.floor(800 + Math.random() * 199));
                                  setIjeroRsvpSubmitted(true);
                                }}
                                className="space-y-2.5"
                              >
                                <div>
                                  <label className="block text-[10px] font-mono text-white/40 mb-1">
                                    HIKER CALLSIGN OR EMAIL
                                  </label>
                                  <input
                                    type="text"
                                    value={ijeroRsvpName}
                                    onChange={(e) => setIjeroRsvpName(e.target.value)}
                                    placeholder="e.g. Alex Dare / hiker@adventure.io"
                                    className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none"
                                    required
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="w-full rounded-xl bg-emerald-400 hover:bg-emerald-300 py-2 text-xs font-bold text-black transition flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-400/20"
                                >
                                  Claim Expedition Pass <ArrowUpRight size={13} />
                                </button>
                              </form>
                            ) : (
                              <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/15 p-3.5 space-y-2 text-xs">
                                <div className="flex items-center justify-between">
                                  <span className="font-mono text-emerald-300 font-bold">PASS {ijeroRsvpPassId}</span>
                                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-400/30">CONFIRMED</span>
                                </div>
                                <div className="text-white font-medium">
                                  {ijeroRsvpName} registered for {ijeroTrails[ijeroActiveTrail].name}
                                </div>
                                <div className="text-[11px] text-white/60">
                                  Departure: 06:00 AM at Ijero Basecamp Trailhead. Hydration pack & hiking boots recommended.
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setIjeroRsvpSubmitted(false);
                                    setIjeroRsvpName("");
                                  }}
                                  className="text-[11px] text-emerald-300 underline font-mono"
                                >
                                  Register another hiker
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[.07]">
                      <button
                        onClick={() => setSelectedProject(projects[0])}
                        className="rounded-full bg-white hover:bg-emerald-300 px-5 py-2.5 text-xs font-semibold text-black transition flex items-center gap-1.5 shadow-lg shadow-white/10"
                      >
                        Explore Full Platform <ArrowUpRight size={14} />
                      </button>
                      <a
                        href="https://github.com/Isac-James/Ijero-hikers"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition flex items-center gap-1.5"
                      >
                        <Github size={14} /> GitHub Repository
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          )}

          {/* GRID OF COMPLEMENTARY PROJECTS */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects
              .filter((p) => selectedCategory !== "All" || !p.featured)
              .map((p) => (
                <motion.article
                  key={p.slug}
                  {...fade}
                  className="card group flex w-full flex-col justify-between overflow-hidden p-6 transition duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-xl hover:shadow-blue-500/5 bg-[#080c15]"
                >
                  <div>
                    {/* Visual Thumbnail */}
                    <div className="relative mb-6 aspect-[1.35] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#060810]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                      {/* Top Status */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="rounded-full border border-white/10 bg-black/60 backdrop-blur-md px-2.5 py-1 font-mono text-[10px] text-white/70">
                          PROJECT {p.n}
                        </span>
                        <span
                          className={`rounded-full border px-2.5 py-1 font-mono text-[9px] font-medium backdrop-blur-md ${
                            p.status === "SHIPPED & LIVE"
                              ? "border-emerald-400/40 bg-emerald-950/70 text-emerald-300"
                              : "border-blue-400/30 bg-blue-950/70 text-blue-300"
                          }`}
                        >
                          {p.status}
                        </span>
                      </div>

                      {/* Bottom Subtitle */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="font-mono text-[10px] text-blue-200/70 truncate">
                          {p.subtitle}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-medium text-white group-hover:text-blue-300 transition">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-5 text-white/50 line-clamp-3">
                      {p.desc}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/[.04] border border-white/[.07] px-2.5 py-0.5 font-mono text-[10px] text-white/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/[.07] pt-4 text-xs">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="flex items-center gap-1 font-medium text-blue-300 hover:text-white transition"
                    >
                      Interactive Preview <ArrowUpRight size={13} />
                    </button>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-white/45 hover:text-white transition font-mono text-[11px]"
                    >
                      <Github size={13} /> Source
                    </a>
                  </div>
                </motion.article>
              ))}
          </div>

          {/* Quantitative Proof Strip */}
          <motion.div
            {...fade}
            className="mt-10 sm:mt-12 rounded-2xl border border-white/[.08] bg-white/[.015] p-5 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          >
            <div>
              <div className="font-mono text-2xl font-bold text-white">14+</div>
              <div className="text-xs text-white/40 mt-1">Highland Trails Mapped</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-white/40 mt-1">Production Responsive UI</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-white">3 EVM</div>
              <div className="text-xs text-white/40 mt-1">Interactive Prototypes</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-emerald-400">Public</div>
              <div className="text-xs text-white/40 mt-1">Open Source on GitHub</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03 / Stack Section */}
      <StackSection />

      {/* 04 / AI BUILDING — INTERACTIVE VELOCITY & WORKBENCH */}
      <AiBuildingSection />

      {/* 05 / Capabilities Section */}
      <CapabilitiesSection />

      {/* 06 / Lab Section */}
      <LabSection />

      {/* 08 / Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span className="font-mono">TUMI//3 — Tumininu Aiyegbusi</span>
        <span>Built for the future. No fake metrics. No fake clients.</span>
      </footer>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
