'use client';

import React from "react";
import { motion } from "framer-motion";
import { HeroWithSpline } from "@/components/hero-with-spline";
import { EnhancedChat } from "@/components/enhanced-chat";

// Blank, modular landing inspired by firecrawl.dev — minimal, fast, legible.
// TailwindCSS required. Drop this into a Next.js page.
// No heavy VFX. Subtle gradients, glass, strong typographic rhythm.

export default function QuantumLanding() {
  return (
    <div className="min-h-screen bg-[#0B0B1D] text-neutral-100 antialiased selection:bg-[#47F273]/30">
      <Background />
      <Spotlight />
      <AccentOrbs />
      <GlassNoise />
      <AuroraBeam />
      <NeonScanlines />
      <Nav />
      <main className="relative">
        <HeroWithSpline />
        <EnhancedChat />
        <HowItWorks />
        <FeaturesDev />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      {/* Quantum gradients (Firecrawl-inspired) */}
      <div className="absolute -top-40 left-1/2 h-[58rem] w-[58rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(71,242,115,0.14),rgba(0,0,0,0))] blur-3xl" />
      <div className="absolute bottom-[-28rem] right-[-18rem] h-[42rem] w-[42rem] rounded-full bg-[conic-gradient(from_120deg,rgba(71,242,115,0.12),rgba(0,212,255,0.10),rgba(255,0,122,0.08),rgba(71,242,115,0.12))] blur-2xl" />
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );
}

function Spotlight() {
  // Mouse-following radial light (no heavy VFX)
  const [pos, setPos] = React.useState({ x: -200, y: -200 });

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", onMove);
      return () => window.removeEventListener("pointermove", onMove);
    }
    return () => {};
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          left: pos.x - 300,
          top: pos.y - 300,
          background:
            "radial-gradient(300px 300px at center, rgba(71,242,115,0.20), rgba(0,0,0,0))",
        }}
      />
    </div>
  );
}

function AccentOrbs() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      <div className="absolute left-8 top-24 h-24 w-24 rounded-full bg-[#47F273]/20 blur-2xl" />
      <div className="absolute right-12 bottom-24 h-20 w-20 rounded-full bg-cyan-400/20 blur-2xl" />
    </div>
  );
}

function GlassNoise() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 mix-blend-soft-light">
      <div
        className="h-full w-full opacity-[0.03]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<?xml version=\\'1.0\\' encoding=\\'UTF-8\\'?><svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'300\\' height=\\'300\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.4\\'/></svg>')",
        }}
      />
    </div>
  );
}

// Futuristic light ribbon (subtle, GPU-cheap)
function AuroraBeam() {
  return (
    <div aria-hidden className="fixed inset-x-0 top-32 -z-10">
      <motion.div
        initial={{ opacity: 0.25, y: 0 }}
        animate={{ opacity: [0.25, 0.35, 0.25], y: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="mx-auto h-48 w-[90%] rounded-[48px] blur-2xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(71,242,115,0.15), rgba(0,212,255,0.12), rgba(255,0,122,0.12))",
          maskImage:
            "radial-gradient(60% 100% at 50% 50%, black 60%, transparent 100%)",
        }}
      />
    </div>
  );
}

// Very faint animated scanlines overlay (retro-future)
function NeonScanlines() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <motion.div
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: ["0px 0px", "0px 8px", "0px 0px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="h-full w-full opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient( to bottom, rgba(71,242,115,0.35) 0px, rgba(71,242,115,0.35) 1px, transparent 1px, transparent 8px )",
        }}
      />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/5">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-sm uppercase text-neutral-200">BLACKBOX Quantum</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
          <a href="#chat" className="hover:text-white">Chat IA</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#cta" className="hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="rounded-xl border border-white/10 px-3 py-1.5 text-sm text-neutral-200 hover:bg-white/5">Log in</a>
          <a href="#cta" className="rounded-xl bg-emerald-500 px-3 py-1.5 text-sm font-medium text-neutral-950 hover:bg-emerald-400">Start</a>
        </div>
      </div>
    </header>
  );
}

function HowItWorks() {
  const steps = [
    { n: 1, title: "Prompt", desc: "Décris l'objectif en langage naturel (feature, fix, refactor)." },
    { n: 2, title: "Plan", desc: "L'IA découpe en étapes actionnables et propose la stratégie de dev." },
    { n: 3, title: "Code", desc: "Génération contextuelle, patchs ciblés, commentaires clairs." },
  ];
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold">Comment ça marche</h2>
        <p className="mt-2 text-sm text-neutral-300">De l&apos;idée au code exécutable en trois temps.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl">
            <div className="mb-2 text-sm text-[#47F273]">Étape {s.n}</div>
            <h3 className="text-lg font-medium text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturesDev() {
  const items = [
    { title: "Autocomplete + Chat Dev", desc: "Complétion contextualisée, shortcuts de productivité, snippets réutilisables." },
    { title: "Explain / Refactor / Document", desc: "Transforme du legacy en code clair, commente, génère la doc utile." },
    { title: "Test & Fix", desc: "Propose des tests, détecte les causes probables, suggère des patchs minimaux." },
    { title: "Repo Agent", desc: "Comprend la structure du repo, navigue les dépendances, garde l'historique en tête." },
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold">Pensé pour les développeurs</h2>
        <p className="mt-2 text-sm text-neutral-300">Des outils concrets pour shipper plus vite.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((f) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl overflow-hidden"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -inset-x-10 -top-24 h-40 bg-gradient-to-r from-emerald-400/0 via-emerald-400/15 to-emerald-400/0 blur-2xl" />
            </div>
            <h3 className="text-lg font-medium text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="mt-3 text-[11px] text-neutral-400">Hover to preview pulse</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-8 text-center backdrop-blur-xl shadow-[0_0_60px_rgba(71,242,115,0.08)]">
        <h3 className="text-2xl font-semibold">Construis en minutes. Impressionne en secondes.</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-300">
          Commence avec ce blank, branche ton offre et laisse la démo faire le closing. Keep the conversational hero and the docs snippet — they do the heavy lifting.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-emerald-400">Use Template</a>
          <a href="#cta" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-neutral-200 hover:bg-white/10">View Pricing</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h4 className="text-sm font-medium text-white">Blackbox Quantum</h4>
        <p className="mt-2 text-sm text-neutral-300">© 2025 — Fait pour vendre sans friction.</p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-neutral-400">
          <a href="#how-it-works" className="hover:text-white">How it works</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#chat" className="hover:text-white">Chat IA</a>
          <a href="#cta" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}
