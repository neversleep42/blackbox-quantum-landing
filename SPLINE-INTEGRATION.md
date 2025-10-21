# 🎨 Intégration Spline 3D - Documentation

## 📦 Composants créés

### Structure des fichiers

```
blackbox-landing/
├── components/
│   ├── hero-with-spline.tsx          # Hero avec scène 3D Spline
│   └── ui/
│       ├── spline.tsx                 # Composant Spline wrapper
│       ├── spline-demo.tsx            # Démo complète avec Card
│       ├── card.tsx                   # Composant Card (shadcn)
│       ├── spotlight-aceternity.tsx   # Spotlight SVG statique
│       └── spotlight-ibelick.tsx      # Spotlight interactif
├── lib/
│   └── utils.ts                       # Utilitaire cn() pour Tailwind
└── app/
    ├── page.tsx                       # Page principale (Hero intégré)
    ├── layout.tsx                     # Layout avec SEO
    └── globals.css                    # Styles + variables CSS
```

## ✨ Fonctionnalités

### 1. Hero avec Spline 3D (`components/hero-with-spline.tsx`)

**Caractéristiques :**
- Layout en grille responsive (1 colonne mobile, 2 colonnes desktop)
- Contenu texte à gauche avec animations Framer Motion
- Scène Spline 3D interactive à droite
- Spotlight effect (Aceternity)
- Effets décoratifs (orbs avec blur)
- Border glassmorphism sur le container 3D

**Props :**
Aucune - Composant autonome

**Utilisation :**
```tsx
import { HeroWithSpline } from "@/components/hero-with-spline"

<HeroWithSpline />
```

### 2. Composant Spline (`components/ui/spline.tsx`)

**Caractéristiques :**
- Lazy loading avec React.Suspense
- Fallback loader personnalisé (spinner émeraude)
- Wrapper pour @splinetool/react-spline

**Props :**
```typescript
interface SplineSceneProps {
  scene: string      // URL de la scène Spline
  className?: string // Classes Tailwind optionnelles
}
```

**Utilisation :**
```tsx
import { SplineScene } from "@/components/ui/spline"

<SplineScene 
  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
  className="w-full h-full"
/>
```

### 3. Démo complète (`components/ui/spline-demo.tsx`)

**Caractéristiques :**
- Card avec fond noir/glassmorphism
- Layout split (texte gauche, 3D droite)
- Spotlight effect intégré
- Hauteur fixe de 500px

**Utilisation :**
```tsx
import { SplineSceneBasic } from "@/components/ui/spline-demo"

<SplineSceneBasic />
```

## 🎨 Composants UI

### Card (`components/ui/card.tsx`)

Composant shadcn standard avec :
- `Card` - Container principal
- `CardHeader` - En-tête
- `CardTitle` - Titre
- `CardDescription` - Description
- `CardContent` - Contenu
- `CardFooter` - Pied de page

### Spotlight Aceternity (`components/ui/spotlight-aceternity.tsx`)

**Props :**
```typescript
type SpotlightProps = {
  className?: string  // Position et style
  fill?: string       // Couleur (défaut: "white")
}
```

**Utilisation :**
```tsx
<Spotlight
  className="-top-40 left-0 md:left-60 md:-top-20"
  fill="#47F273"
/>
```

### Spotlight Interactif (`components/ui/spotlight-ibelick.tsx`)

**Props :**
```typescript
type SpotlightProps = {
  className?: string
  size?: number              // Taille en px (défaut: 200)
  springOptions?: SpringOptions
}
```

**Utilisation :**
```tsx
<SpotlightInteractive
  size={300}
  springOptions={{ bounce: 0 }}
/>
```

## 🔧 Configuration

### Tailwind Config

Variables CSS ajoutées dans `tailwind.config.ts` :
```typescript
colors: {
  quantum: {
    bg: '#0B0B1D',
    accent: '#47F273',
  },
  // + variables shadcn (card, border, etc.)
}

animation: {
  'spotlight': 'spotlight 2s ease .75s 1 forwards',
}
```

### CSS Variables

Ajoutées dans `app/globals.css` :
```css
:root {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --accent: 142 76% 36%;
  --radius: 0.5rem;
  /* ... autres variables shadcn */
}
```

## 📦 Dépendances installées

```json
{
  "dependencies": {
    "@splinetool/runtime": "latest",
    "@splinetool/react-spline": "latest",
    "framer-motion": "^11.11.17",
    "clsx": "latest",
    "tailwind-merge": "latest"
  }
}
```

## 🎯 Scènes Spline disponibles

### Scène par défaut
```
https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode
```

### Comment créer votre propre scène

1. Allez sur [spline.design](https://spline.design)
2. Créez votre scène 3D
3. Exportez → "Export for Code"
4. Copiez l'URL `.splinecode`
5. Remplacez dans le composant :

```tsx
<SplineScene 
  scene="VOTRE_URL_ICI"
  className="w-full h-full"
/>
```

## 🚀 Performance

### Optimisations appliquées

1. **Lazy Loading** : Spline chargé uniquement quand nécessaire
2. **Suspense** : Affichage d'un loader pendant le chargement
3. **GPU Acceleration** : Animations Framer Motion optimisées
4. **Code Splitting** : Import dynamique de Spline

### Recommandations

- Gardez les scènes Spline légères (< 5MB)
- Limitez le nombre de polygones
- Utilisez des textures compressées
- Testez sur mobile pour la performance

## 🎨 Personnalisation

### Changer les couleurs

Dans `components/hero-with-spline.tsx` :
```tsx
// Orbs décoratifs
<div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-emerald-500/20 blur-3xl" />
<div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
```

### Ajuster la hauteur

```tsx
<div className="relative h-[400px] lg:h-[600px]">
  {/* Contenu */}
</div>
```

### Modifier le layout

Grid responsive :
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Gauche */}
  {/* Droite */}
</div>
```

## 🐛 Troubleshooting

### Erreur : "Cannot find module '@splinetool/react-spline'"

```bash
npm install @splinetool/runtime @splinetool/react-spline
```

### Erreur : "Cannot find module 'clsx'"

```bash
npm install clsx tailwind-merge
```

### La scène 3D ne s'affiche pas

1. Vérifiez l'URL de la scène Spline
2. Vérifiez la console pour les erreurs
3. Assurez-vous que la scène est publique
4. Testez l'URL directement dans le navigateur

### Performance lente

1. Réduisez la complexité de la scène Spline
2. Diminuez la résolution des textures
3. Limitez les animations
4. Utilisez le lazy loading

## 📚 Ressources

- [Spline Documentation](https://docs.spline.design/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## ✅ Checklist d'intégration

- [x] Installer les dépendances npm
- [x] Créer lib/utils.ts
- [x] Créer les composants UI (card, spotlight, spline)
- [x] Créer le Hero avec Spline
- [x] Configurer Tailwind (variables CSS)
- [x] Configurer tsconfig.json (baseUrl, paths)
- [x] Intégrer dans app/page.tsx
- [x] Tester le chargement de la scène
- [ ] Personnaliser la scène Spline
- [ ] Optimiser pour mobile
- [ ] Tester les performances

## 🎉 Résultat

Vous avez maintenant une landing page avec :
- ✅ Hero interactif avec scène 3D Spline
- ✅ Animations fluides Framer Motion
- ✅ Design glassmorphism moderne
- ✅ Composants réutilisables
- ✅ Performance optimisée
- ✅ 100% TypeScript
- ✅ Responsive design

Profitez de votre nouvelle landing page futuriste ! 🚀
