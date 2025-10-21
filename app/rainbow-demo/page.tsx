'use client'

import { RainbowTitleShowcase } from "@/components/rainbow-title-showcase"
import { RainbowTitle, RainbowTitleNeon, RainbowTitleParticles } from "@/components/ui/rainbow-title"
import Link from "next/link"

export default function RainbowDemoPage() {
  return (
    <div className="min-h-screen bg-[#0B0B1D] text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/5">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight hover:opacity-80 transition-opacity">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm uppercase text-neutral-200">← Retour à l'accueil</span>
          </Link>
          <span className="text-sm text-neutral-400">Rainbow Title Demo</span>
        </div>
      </header>

      <main className="relative">
        {/* Hero avec titre arc-en-ciel */}
        <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Démo Interactive
            </p>
            
            <RainbowTitle className="text-5xl sm:text-6xl lg:text-7xl leading-tight mb-8">
              🌈 Rainbow Title Effect
            </RainbowTitle>
            
            <p className="mx-auto max-w-2xl text-lg text-neutral-300">
              Découvrez les trois variantes du composant Rainbow Title avec effet arc-en-ciel vibrant et inclusif.
            </p>
          </div>
        </section>

        {/* Showcase des variantes */}
        <RainbowTitleShowcase />

        {/* Section de comparaison */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-8 backdrop-blur-xl">
            <h2 className="mb-8 text-center text-2xl font-semibold text-white">
              Comparaison côte à côte
            </h2>
            
            <div className="space-y-12">
              {/* Variante 1 */}
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-lg border border-white/10 bg-neutral-950/60 px-4 py-2">
                  <span className="text-sm text-neutral-400">Variante 1 : Aura Classique</span>
                </div>
                <RainbowTitle className="text-4xl sm:text-5xl">
                  Blackbox Quantum
                </RainbowTitle>
                <p className="text-center text-sm text-neutral-400 max-w-md">
                  Parfait pour les titres principaux. Aura lumineuse douce avec dégradé animé fluide.
                </p>
              </div>

              {/* Variante 2 */}
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-lg border border-white/10 bg-neutral-950/60 px-4 py-2">
                  <span className="text-sm text-neutral-400">Variante 2 : Néon Pulsant</span>
                </div>
                <RainbowTitleNeon className="text-4xl sm:text-5xl">
                  Blackbox Quantum
                </RainbowTitleNeon>
                <p className="text-center text-sm text-neutral-400 max-w-md">
                  Idéal pour les sections importantes. Effet néon intense avec glow rotatif.
                </p>
              </div>

              {/* Variante 3 */}
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-lg border border-white/10 bg-neutral-950/60 px-4 py-2">
                  <span className="text-sm text-neutral-400">Variante 3 : Particules</span>
                </div>
                <RainbowTitleParticles className="text-4xl sm:text-5xl">
                  Blackbox Quantum
                </RainbowTitleParticles>
                <p className="text-center text-sm text-neutral-400 max-w-md">
                  Pour un effet spectaculaire. Particules colorées en rotation avec profondeur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section technique */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Palette de couleurs */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Palette Arc-en-ciel (LGBT)</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full" style={{ backgroundColor: '#FF0000' }} />
                  <span className="text-sm text-neutral-300">Rouge - #FF0000</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full" style={{ backgroundColor: '#FF7F00' }} />
                  <span className="text-sm text-neutral-300">Orange - #FF7F00</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full" style={{ backgroundColor: '#FFFF00' }} />
                  <span className="text-sm text-neutral-300">Jaune - #FFFF00</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full" style={{ backgroundColor: '#00FF00' }} />
                  <span className="text-sm text-neutral-300">Vert - #00FF00</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full" style={{ backgroundColor: '#0000FF' }} />
                  <span className="text-sm text-neutral-300">Bleu - #0000FF</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full" style={{ backgroundColor: '#8B00FF' }} />
                  <span className="text-sm text-neutral-300">Violet - #8B00FF</span>
                </div>
              </div>
            </div>

            {/* Caractéristiques */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Caractéristiques</h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Animations Framer Motion fluides (60 FPS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>GPU-accelerated (transform + opacity)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Responsive design (mobile → desktop)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Typographie forte et lisible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Effet inclusif (couleurs LGBT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Personnalisable via className</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Prêt à l'utiliser ?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-300">
              Consultez la documentation complète pour intégrer le Rainbow Title dans votre projet.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link 
                href="/" 
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-emerald-400 transition-colors"
              >
                Voir la landing page
              </Link>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-neutral-200 hover:bg-white/10 transition-colors"
              >
                Documentation
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-sm text-neutral-300">
            🌈 Rainbow Title Effect - Créé avec ❤️ pour Blackbox Quantum
          </p>
          <p className="mt-2 text-xs text-neutral-400">
            Effet arc-en-ciel inclusif et vibrant • Janvier 2025
          </p>
        </div>
      </footer>
    </div>
  )
}
