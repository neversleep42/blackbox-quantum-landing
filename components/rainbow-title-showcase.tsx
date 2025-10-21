'use client'

import { RainbowTitle, RainbowTitleNeon, RainbowTitleParticles } from "@/components/ui/rainbow-title"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RainbowTitleShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-white">Variantes du Titre Arc-en-ciel</h2>
        <p className="mt-2 text-sm text-neutral-300">
          Trois styles différents pour un effet futuriste et vibrant
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Variante 1 : Aura classique */}
        <Card className="bg-neutral-950/60 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Aura Classique</CardTitle>
            <CardDescription>
              Dégradé fluide avec aura lumineuse multicolore
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center min-h-[200px]">
            <RainbowTitle className="text-3xl">
              Blackbox Quantum
            </RainbowTitle>
          </CardContent>
        </Card>

        {/* Variante 2 : Néon pulsant */}
        <Card className="bg-neutral-950/60 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Néon Pulsant</CardTitle>
            <CardDescription>
              Effet néon avec glow externe rotatif
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center min-h-[200px]">
            <RainbowTitleNeon className="text-3xl">
              Blackbox Quantum
            </RainbowTitleNeon>
          </CardContent>
        </Card>

        {/* Variante 3 : Particules */}
        <Card className="bg-neutral-950/60 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Particules</CardTitle>
            <CardDescription>
              Animation de particules colorées rotatives
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center min-h-[200px]">
            <RainbowTitleParticles className="text-3xl">
              Blackbox Quantum
            </RainbowTitleParticles>
          </CardContent>
        </Card>
      </div>

      {/* Exemple d'utilisation */}
      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="mb-4 text-lg font-semibold text-white">Comment utiliser</h3>
        <pre className="overflow-auto rounded-xl border border-white/10 bg-neutral-950 p-4 text-sm text-neutral-200">
{`import { RainbowTitle } from "@/components/ui/rainbow-title"

// Variante 1 : Aura classique (utilisée dans le Hero)
<RainbowTitle className="text-4xl sm:text-5xl lg:text-6xl">
  🧠 Blackbox Quantum
</RainbowTitle>

// Variante 2 : Néon pulsant
<RainbowTitleNeon className="text-4xl">
  Votre titre ici
</RainbowTitleNeon>

// Variante 3 : Particules
<RainbowTitleParticles className="text-4xl">
  Votre titre ici
</RainbowTitleParticles>`}
        </pre>
      </div>

      {/* Personnalisation */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="mb-4 text-lg font-semibold text-white">Personnalisation</h3>
        <div className="space-y-4 text-sm text-neutral-300">
          <div>
            <h4 className="font-medium text-white">Couleurs du drapeau LGBT :</h4>
            <ul className="mt-2 space-y-1 pl-4">
              <li>🔴 Rouge : #FF0000</li>
              <li>🟠 Orange : #FF7F00</li>
              <li>🟡 Jaune : #FFFF00</li>
              <li>🟢 Vert : #00FF00</li>
              <li>🔵 Bleu : #0000FF</li>
              <li>🟣 Violet : #8B00FF</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white">Effets appliqués :</h4>
            <ul className="mt-2 space-y-1 pl-4">
              <li>✨ Aura lumineuse avec blur multiple</li>
              <li>🌈 Dégradé arc-en-ciel animé</li>
              <li>💫 Animations Framer Motion fluides</li>
              <li>🎨 Reflets lumineux subtils</li>
              <li>⚡ Optimisé pour les performances GPU</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
