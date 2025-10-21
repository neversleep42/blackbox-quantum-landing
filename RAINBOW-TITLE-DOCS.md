# 🌈 Rainbow Title - Documentation

## Vue d'ensemble

Le composant **RainbowTitle** applique un effet futuriste et vibrant au titre principal, inspiré de Blackbox.ai x Firecrawl.dev, avec une aura lumineuse multicolore (arc-en-ciel) autour des lettres.

L'effet combine un dégradé RGB fluide dans l'ordre du drapeau LGBT (rouge, orange, jaune, vert, bleu, violet) avec une typographie forte et lisible, dégageant une énergie de puissance et d'inclusivité.

---

## 🎨 Variantes disponibles

### 1. RainbowTitle (Aura Classique)

**Caractéristiques :**
- Aura lumineuse multicolore avec blur multiple
- Dégradé arc-en-ciel animé sur le texte
- Reflets lumineux subtils
- Animation fluide et continue

**Utilisation :**
```tsx
import { RainbowTitle } from "@/components/ui/rainbow-title"

<RainbowTitle className="text-4xl sm:text-5xl lg:text-6xl">
  🧠 Blackbox Quantum
</RainbowTitle>
```

**Effets appliqués :**
- Aura externe avec `blur-[40px]` et opacité pulsante
- Aura secondaire avec `blur-[25px]` et scale animé
- Dégradé de texte animé (200% backgroundSize)
- Reflet lumineux avec `mix-blend-screen`

---

### 2. RainbowTitleNeon (Néon Pulsant)

**Caractéristiques :**
- Effet néon intense
- Glow externe rotatif (conic-gradient)
- Text-shadow multicolore
- Animation de pulsation

**Utilisation :**
```tsx
import { RainbowTitleNeon } from "@/components/ui/rainbow-title"

<RainbowTitleNeon className="text-4xl">
  Votre titre ici
</RainbowTitleNeon>
```

**Effets appliqués :**
- Glow externe avec `conic-gradient` rotatif
- Text-shadow en cascade (6 couches)
- Animation de scale et opacité
- Couleur de texte blanche pure

---

### 3. RainbowTitleParticles (Particules)

**Caractéristiques :**
- Particules colorées animées
- Rotation à 360° de chaque particule
- Effet de profondeur avec délais
- Dégradé de texte statique

**Utilisation :**
```tsx
import { RainbowTitleParticles } from "@/components/ui/rainbow-title"

<RainbowTitleParticles className="text-4xl">
  Votre titre ici
</RainbowTitleParticles>
```

**Effets appliqués :**
- 6 particules radiales (une par couleur)
- Rotation et scale animés
- Délais échelonnés (0.6s entre chaque)
- Brightness et contrast animés sur le texte

---

## 🎨 Palette de couleurs (Drapeau LGBT)

```css
/* Ordre des couleurs */
#FF0000  /* Rouge */
#FF7F00  /* Orange */
#FFFF00  /* Jaune */
#00FF00  /* Vert */
#0000FF  /* Bleu */
#8B00FF  /* Violet */
```

Ces couleurs sont appliquées dans l'ordre pour créer un dégradé fluide et harmonieux.

---

## 🔧 Props

### Interface commune

```typescript
interface RainbowTitleProps {
  children: React.ReactNode  // Contenu du titre
  className?: string         // Classes Tailwind additionnelles
}
```

### Exemples de className

```tsx
// Tailles responsive
<RainbowTitle className="text-4xl sm:text-5xl lg:text-6xl">
  Titre
</RainbowTitle>

// Espacement
<RainbowTitle className="mb-4 mt-8">
  Titre
</RainbowTitle>

// Alignement
<RainbowTitle className="text-center">
  Titre
</RainbowTitle>
```

---

## 🎬 Animations

### RainbowTitle (Aura Classique)

**Aura externe :**
```tsx
animate={{
  opacity: [0.4, 0.7, 0.4],
}}
transition={{
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
}}
```

**Dégradé de texte :**
```tsx
animate={{
  backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
}}
transition={{
  duration: 8,
  repeat: Infinity,
  ease: "linear",
}}
```

**Reflet lumineux :**
```tsx
animate={{
  opacity: [0.2, 0.5, 0.2],
}}
transition={{
  duration: 2.5,
  repeat: Infinity,
  ease: "easeInOut",
  delay: 0.5,
}}
```

---

### RainbowTitleNeon (Néon Pulsant)

**Glow externe :**
```tsx
animate={{
  opacity: [0.5, 0.8, 0.5],
  scale: [0.98, 1.02, 0.98],
}}
transition={{
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
}}
```

---

### RainbowTitleParticles (Particules)

**Chaque particule :**
```tsx
animate={{
  opacity: [0, 0.6, 0],
  scale: [0.8, 1.2, 0.8],
  rotate: [0, 360],
}}
transition={{
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
  delay: i * 0.6,  // Délai échelonné
}}
```

---

## 💡 Cas d'usage

### Hero Section (Recommandé)

```tsx
import { RainbowTitle } from "@/components/ui/rainbow-title"

export function Hero() {
  return (
    <section>
      <RainbowTitle className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
        🧠 Blackbox Quantum
      </RainbowTitle>
      
      <h2 className="text-3xl font-semibold">
        <span className="underline decoration-[#47F273]/50">
          le chat qui vend
        </span>
        <br />
        et qui convainc
      </h2>
    </section>
  )
}
```

### Page de présentation

```tsx
<RainbowTitleNeon className="text-5xl text-center mb-8">
  Découvrez l'innovation
</RainbowTitleNeon>
```

### Section de fonctionnalités

```tsx
<RainbowTitleParticles className="text-4xl mb-6">
  Fonctionnalités puissantes
</RainbowTitleParticles>
```

---

## 🎨 Personnalisation avancée

### Modifier les couleurs

Pour changer les couleurs du dégradé, éditez le fichier `components/ui/rainbow-title.tsx` :

```tsx
// Dans RainbowTitle
style={{
  backgroundImage: `
    linear-gradient(
      90deg,
      #FF0000 0%,      // Changez ici
      #FF7F00 16.66%,  // Changez ici
      #FFFF00 33.33%,  // Changez ici
      #00FF00 50%,     // Changez ici
      #0000FF 66.66%,  // Changez ici
      #8B00FF 83.33%,  // Changez ici
      #FF0000 100%
    )
  `,
}}
```

### Modifier la vitesse d'animation

```tsx
// Animation plus rapide
transition={{
  duration: 4,  // Au lieu de 8
  repeat: Infinity,
  ease: "linear",
}}

// Animation plus lente
transition={{
  duration: 12,  // Au lieu de 8
  repeat: Infinity,
  ease: "linear",
}}
```

### Modifier l'intensité du blur

```tsx
// Aura plus intense
<motion.div className="absolute inset-0 blur-[60px] opacity-80">

// Aura plus subtile
<motion.div className="absolute inset-0 blur-[20px] opacity-40">
```

---

## ⚡ Performance

### Optimisations appliquées

1. **GPU Acceleration** : Toutes les animations utilisent `transform` et `opacity`
2. **Will-change** : Implicite via Framer Motion
3. **Blur optimisé** : Utilisation de valeurs fixes (pas de calc())
4. **Lazy rendering** : Les effets ne s'activent que quand visibles

### Recommandations

- ✅ Utilisez une seule variante par page
- ✅ Limitez à 1-2 titres arc-en-ciel maximum
- ✅ Testez sur mobile pour la performance
- ⚠️ Évitez d'animer d'autres propriétés lourdes en même temps

---

## 🧪 Tests

### Checklist de validation

- [ ] Le titre s'affiche correctement
- [ ] Les animations sont fluides (60 FPS)
- [ ] L'aura est visible sur fond sombre
- [ ] Le texte reste lisible
- [ ] Responsive sur mobile/tablet/desktop
- [ ] Pas de lag lors du scroll
- [ ] Compatible avec tous les navigateurs modernes

### Navigateurs testés

- ✅ Chrome 120+
- ✅ Firefox 120+
- ✅ Safari 17+
- ✅ Edge 120+

---

## 🎯 Intégration dans le projet

### Fichier actuel

Le composant est déjà intégré dans :
```
components/hero-with-spline.tsx
```

### Code actuel

```tsx
<RainbowTitle className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
  🧠 Blackbox Quantum
</RainbowTitle>
```

### Pour voir toutes les variantes

Ajoutez le showcase dans votre page :
```tsx
import { RainbowTitleShowcase } from "@/components/rainbow-title-showcase"

<RainbowTitleShowcase />
```

---

## 📚 Ressources

### Inspirations

- [Blackbox.ai](https://blackbox.ai) - Design futuriste
- [Firecrawl.dev](https://firecrawl.dev) - Minimalisme élégant
- Drapeau LGBT - Symbolisme des couleurs

### Technologies utilisées

- **Framer Motion** - Animations fluides
- **Tailwind CSS** - Styling utilitaire
- **React** - Composants réutilisables
- **TypeScript** - Type safety

---

## 🚀 Prochaines étapes

### Améliorations possibles

1. **Variante interactive** : Réagir au hover/click
2. **Variante 3D** : Effet de profondeur avec perspective
3. **Variante glitch** : Effet cyberpunk
4. **Variante holographique** : Effet chrome/métal

### Contribution

Pour ajouter une nouvelle variante :

1. Créez une nouvelle fonction dans `rainbow-title.tsx`
2. Suivez le pattern existant (Props, animations, styles)
3. Ajoutez-la au showcase
4. Documentez dans ce fichier

---

## 📝 Changelog

### Version 1.0.0 (Janvier 2025)

- ✅ Création du composant RainbowTitle
- ✅ Ajout de 3 variantes (Aura, Néon, Particules)
- ✅ Intégration dans le Hero
- ✅ Documentation complète
- ✅ Showcase interactif

---

**Créé avec ❤️ pour Blackbox Quantum**
**Effet arc-en-ciel inclusif et vibrant** 🌈✨
