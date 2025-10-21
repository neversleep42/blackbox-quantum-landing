'use client'

import { motion } from "framer-motion"
import { SplineScene } from "@/components/ui/spline"
import { Spotlight } from "@/components/ui/spotlight-aceternity"
import { RainbowTitle } from "@/components/ui/rainbow-title"

export function HeroWithSpline() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#47F273"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> New • Interactive 3D Experience
          </p>
          
          <RainbowTitle className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
            🧠 Blackbox Quantum
          </RainbowTitle>
          
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mt-4">
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent underline decoration-[#47F273]/50 underline-offset-4">
              le chat qui vend
            </span>
            <br />
            <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              et qui convainc
            </span>
          </h2>
          
          <p className="mt-6 max-w-xl text-pretty text-lg text-neutral-300">
            Blackbox.ai réinvente la façon d'écrire du code : tu prompts, il planifie, génère, explique, teste et répare. Résultat : moins d'attente, plus de shipping.
          </p>
          
          <div className="mt-8 flex flex-col items-start justify-start gap-3 sm:flex-row">
            <a 
              href="#cta" 
              className="rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors"
            >
              Démarrer maintenant
            </a>
            <a 
              href="#demo" 
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-neutral-200 hover:bg-white/10 transition-colors"
            >
              Tester la démo conversationnelle
            </a>
          </div>
        </motion.div>

        {/* Right content - 3D Spline Scene */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="relative h-[400px] lg:h-[600px]"
        >
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl overflow-hidden">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
