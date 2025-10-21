import { NextRequest, NextResponse } from 'next/server'

// Types
interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  messages: Message[]
  userMessage: string
}

// Base de connaissances intelligente
const knowledgeBase = {
  // Informations sur Blackbox Quantum
  product: {
    name: "Blackbox Quantum",
    description: "Assistant IA révolutionnaire pour développeurs",
    features: [
      "Génération de code intelligente",
      "Compréhension contextuelle",
      "Refactoring automatique",
      "Tests et debugging",
      "Documentation automatique"
    ]
  },
  
  // Pricing
  pricing: {
    free: {
      name: "Hobby",
      price: "Gratuit",
      features: ["Accès de base", "100 requêtes/mois", "Support communautaire"]
    },
    pro: {
      name: "Pro",
      price: "19€/mois",
      features: ["Requêtes illimitées", "Support prioritaire", "Fonctionnalités avancées", "API access"]
    },
    enterprise: {
      name: "Enterprise",
      price: "Sur devis",
      features: ["Solution sur mesure", "Support dédié", "SLA garanti", "Formation équipe"]
    }
  },
  
  // FAQ
  faq: {
    "comment ça marche": "Blackbox Quantum utilise l'IA pour comprendre votre contexte de développement et générer du code de qualité. Il suffit de décrire ce que vous voulez en langage naturel.",
    "langages supportés": "Nous supportons plus de 50 langages : JavaScript, TypeScript, Python, Java, C++, Go, Rust, PHP, Ruby, et bien d'autres.",
    "sécurité": "Vos données sont chiffrées de bout en bout. Nous ne stockons jamais votre code source et respectons le RGPD.",
    "intégration": "Blackbox s'intègre avec VS Code, JetBrains, Sublime Text, et via notre API REST.",
  }
}

// Fonction pour générer une réponse intelligente
function generateIntelligentResponse(userMessage: string, conversationHistory: Message[]): string {
  const msg = userMessage.toLowerCase()
  
  // Salutations
  if (/^(bonjour|salut|hello|hi|hey|coucou)/i.test(msg)) {
    return "👋 Bonjour ! Je suis l'assistant Blackbox Quantum. Comment puis-je vous aider aujourd'hui ? Vous pouvez me poser des questions sur nos fonctionnalités, tarifs, ou comment démarrer."
  }
  
  // Pricing
  if (/prix|tarif|coût|combien|€|pricing|price/i.test(msg)) {
    return `💰 **Nos tarifs :**

**${knowledgeBase.pricing.free.name}** - ${knowledgeBase.pricing.free.price}
${knowledgeBase.pricing.free.features.map(f => `• ${f}`).join('\n')}

**${knowledgeBase.pricing.pro.name}** - ${knowledgeBase.pricing.pro.price}
${knowledgeBase.pricing.pro.features.map(f => `• ${f}`).join('\n')}

**${knowledgeBase.pricing.enterprise.name}** - ${knowledgeBase.pricing.enterprise.price}
${knowledgeBase.pricing.enterprise.features.map(f => `• ${f}`).join('\n')}

Quelle offre vous intéresse ?`
  }
  
  // Features
  if (/fonctionnalit|feature|capacit|peut faire|what can/i.test(msg)) {
    return `✨ **Fonctionnalités principales :**

${knowledgeBase.product.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}

Blackbox Quantum transforme votre façon de coder. Vous décrivez, il génère, explique et optimise. Simple et puissant.

Voulez-vous en savoir plus sur une fonctionnalité spécifique ?`
  }
  
  // Comment ça marche
  if (/comment|marche|fonctionne|utilise|how|work/i.test(msg)) {
    return `🔧 **Comment ça marche :**

1. **Décrivez** votre besoin en langage naturel
2. **L'IA analyse** le contexte et votre code existant
3. **Génération** de code de qualité production
4. **Validation** et tests automatiques
5. **Intégration** directe dans votre éditeur

C'est aussi simple que ça ! Voulez-vous voir une démo ?`
  }
  
  // Langages
  if (/langage|language|support|javascript|python|java|typescript/i.test(msg)) {
    return `💻 **Langages supportés :**

**Web:** JavaScript, TypeScript, HTML, CSS, React, Vue, Angular, Svelte
**Backend:** Node.js, Python, Java, C#, Go, Rust, PHP, Ruby
**Mobile:** Swift, Kotlin, React Native, Flutter
**Data:** SQL, Python (pandas, numpy), R
**Et 40+ autres langages !**

Quel langage utilisez-vous principalement ?`
  }
  
  // Sécurité
  if (/sécurit|sûr|safe|security|données|data|rgpd|gdpr/i.test(msg)) {
    return `🔒 **Sécurité et confidentialité :**

• **Chiffrement E2E** : Vos données sont chiffrées de bout en bout
• **Pas de stockage** : Nous ne conservons jamais votre code source
• **RGPD compliant** : Conformité totale avec les réglementations européennes
• **Audit régulier** : Certifications SOC 2 et ISO 27001
• **Contrôle total** : Vous pouvez supprimer vos données à tout moment

Votre code reste privé, toujours.`
  }
  
  // Démarrer / Essayer
  if (/démarr|essai|test|demo|try|start|commenc/i.test(msg)) {
    return `🚀 **Démarrer avec Blackbox Quantum :**

**Option 1 : Essai gratuit**
1. Créez un compte (30 secondes)
2. Installez l'extension VS Code
3. Commencez à coder !

**Option 2 : Démo en ligne**
Testez directement dans votre navigateur sans installation.

**Option 3 : API**
Intégrez via notre API REST en 5 minutes.

Quelle option préférez-vous ?`
  }
  
  // Intégration
  if (/intégr|install|setup|vscode|editor|ide/i.test(msg)) {
    return `🔌 **Intégrations disponibles :**

**Éditeurs :**
• VS Code (extension officielle)
• JetBrains (IntelliJ, PyCharm, WebStorm...)
• Sublime Text
• Vim/Neovim

**Plateformes :**
• GitHub Copilot compatible
• GitLab CI/CD
• API REST pour intégrations custom

**Installation VS Code :**
1. Ouvrez VS Code
2. Cherchez "Blackbox Quantum"
3. Cliquez sur "Installer"
4. Connectez-vous et c'est parti !

Besoin d'aide pour l'installation ?`
  }
  
  // Comparaison avec concurrents
  if (/github copilot|copilot|chatgpt|gpt|concurrent|vs|versus|différence/i.test(msg)) {
    return `⚡ **Pourquoi Blackbox Quantum ?**

**vs GitHub Copilot :**
• Compréhension contextuelle supérieure
• Génération de projets complets
• Refactoring intelligent
• Prix plus compétitif

**vs ChatGPT :**
• Intégré directement dans votre IDE
• Comprend votre codebase
• Génération instantanée
• Pas de copier-coller

**Notre avantage :** L'IA qui comprend VOTRE code, pas juste du code générique.

Des questions sur des fonctionnalités spécifiques ?`
  }
  
  // Support / Contact
  if (/support|aide|help|contact|problème|bug/i.test(msg)) {
    return `💬 **Support et assistance :**

**Support gratuit :**
• Documentation complète
• Communauté Discord (5000+ devs)
• Tutoriels vidéo
• FAQ détaillée

**Support Pro :**
• Email prioritaire (< 2h)
• Chat en direct
• Appels vidéo
• Onboarding personnalisé

**Besoin d'aide maintenant ?**
Décrivez votre problème et je vous guide !`
  }
  
  // Cas d'usage
  if (/exemple|use case|cas|utilisation|projet/i.test(msg)) {
    return `💡 **Cas d'usage populaires :**

**1. Startup MVP**
Générez votre MVP en quelques heures au lieu de semaines.

**2. Refactoring legacy**
Modernisez votre code ancien automatiquement.

**3. Tests automatiques**
Générez des tests unitaires complets.

**4. Documentation**
Documentez votre code automatiquement.

**5. Debugging**
Trouvez et corrigez les bugs plus rapidement.

Quel est votre cas d'usage ?`
  }
  
  // Merci / Au revoir
  if (/merci|thank|thanks|bye|au revoir|à bientôt/i.test(msg)) {
    return "🙏 Avec plaisir ! N'hésitez pas si vous avez d'autres questions. Bon coding avec Blackbox Quantum ! 🚀"
  }
  
  // Réponse par défaut intelligente
  const contextualResponse = analyzeContext(msg, conversationHistory)
  if (contextualResponse) return contextualResponse
  
  return `🤔 Je comprends que vous vous intéressez à "${userMessage}".

Je peux vous aider avec :
• 💰 **Tarifs** et offres
• ✨ **Fonctionnalités** et capacités
• 🔧 **Installation** et intégration
• 🔒 **Sécurité** et confidentialité
• 🚀 **Démarrage** rapide
• 💡 **Cas d'usage** et exemples

Que souhaitez-vous savoir ?`
}

// Analyse contextuelle avancée
function analyzeContext(msg: string, history: Message[]): string | null {
  // Si l'utilisateur pose une question de suivi
  if (history.length > 2) {
    const lastAssistantMsg = history[history.length - 1]?.content.toLowerCase() || ''
    
    // Suivi sur pricing
    if (lastAssistantMsg.includes('tarif') || lastAssistantMsg.includes('prix')) {
      if (/oui|intéress|pro|enterprise|gratuit/i.test(msg)) {
        return `Excellent choix ! Pour souscrire :

1. Créez votre compte sur blackbox.ai
2. Choisissez votre plan
3. Commencez immédiatement

Besoin d'aide pour l'inscription ?`
      }
    }
    
    // Suivi sur features
    if (lastAssistantMsg.includes('fonctionnalité')) {
      return `Je peux vous en dire plus sur cette fonctionnalité. Laquelle vous intéresse particulièrement ?

• Génération de code
• Refactoring
• Tests automatiques
• Documentation
• Debugging`
    }
  }
  
  return null
}

// API Route Handler
export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json()
    const { messages, userMessage } = body
    
    // Validation
    if (!userMessage || typeof userMessage !== 'string') {
      return NextResponse.json(
        { error: 'Message invalide' },
        { status: 400 }
      )
    }
    
    // Génération de la réponse
    const response = generateIntelligentResponse(userMessage, messages)
    
    // Simulation d'un délai réaliste (optionnel)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

// GET pour tester l'API
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Blackbox Quantum Chat API',
    version: '1.0.0'
  })
}
