'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, Sparkles, MessageCircle, X } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export function EnhancedChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "👋 Bonjour ! Je suis l'assistant Blackbox Quantum. Posez-moi vos questions sur nos fonctionnalités, tarifs, ou comment démarrer. Je suis là pour vous aider !",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll vers le bas
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Charger l'historique depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem('quantum-chat-history')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setMessages(parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        })))
      } catch (e) {
        console.error('Error loading chat history:', e)
      }
    }
  }, [])

  // Sauvegarder l'historique
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('quantum-chat-history', JSON.stringify(messages))
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const userMessage = input.trim()
    if (!userMessage || isLoading) return

    // Ajouter le message utilisateur
    const newUserMessage: Message = {
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newUserMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Appel à l'API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages,
          userMessage: userMessage
        })
      })

      if (!response.ok) {
        throw new Error('Erreur réseau')
      }

      const data = await response.json()

      // Ajouter la réponse de l'assistant
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date(data.timestamp)
      }
      setMessages(prev => [...prev, assistantMessage])

    } catch (error) {
      console.error('Chat error:', error)
      // Message d'erreur
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "😔 Désolé, une erreur s'est produite. Veuillez réessayer.",
        timestamp: new Date()
      }])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const clearHistory = () => {
    setMessages([{
      role: 'assistant',
      content: "👋 Conversation réinitialisée ! Comment puis-je vous aider ?",
      timestamp: new Date()
    }])
    localStorage.removeItem('quantum-chat-history')
  }

  // Suggestions rapides
  const quickSuggestions = [
    "💰 Quels sont vos tarifs ?",
    "✨ Quelles fonctionnalités ?",
    "🚀 Comment démarrer ?",
    "🔒 Est-ce sécurisé ?"
  ]

  return (
    <section id="chat" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">IA Conversationnelle</span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Discutez avec notre assistant
          </h2>
          <p className="mt-3 text-lg text-neutral-300">
            Posez vos questions, obtenez des réponses instantanées et intelligentes
          </p>
        </div>

        {/* Chat Container */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl shadow-2xl">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" />
            
            {/* Chat Header */}
            <div className="relative border-b border-white/10 bg-white/5 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400">
                    <MessageCircle className="h-5 w-5 text-neutral-950" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Blackbox Assistant</h3>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-neutral-400">En ligne</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={clearHistory}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300 hover:bg-white/10 transition-colors"
                >
                  Réinitialiser
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="relative h-[500px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <AnimatePresence mode="popLayout">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`group relative max-w-[85%] rounded-2xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20'
                          : 'border border-white/10 bg-white/5 text-neutral-100 backdrop-blur-sm'
                      }`}
                    >
                      {/* Message content */}
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content}
                      </div>
                      
                      {/* Timestamp */}
                      <div
                        className={`mt-1 text-[10px] ${
                          message.role === 'user'
                            ? 'text-emerald-100/70'
                            : 'text-neutral-500'
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString('fr-FR', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>

                      {/* Avatar indicator */}
                      {message.role === 'assistant' && (
                        <div className="absolute -left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-lg">
                          <Sparkles className="h-3 w-3 text-neutral-950" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
                    <span className="text-sm text-neutral-400">L'assistant réfléchit...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length === 1 && !isLoading && (
              <div className="border-t border-white/10 bg-white/5 px-6 py-4">
                <p className="mb-3 text-xs font-medium text-neutral-400">Suggestions rapides :</p>
                <div className="flex flex-wrap gap-2">
                  {quickSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setInput(suggestion.replace(/^[^\s]+\s/, ''))}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300 hover:bg-white/10 hover:border-emerald-500/30 transition-all"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="relative border-t border-white/10 bg-white/5 p-4">
              <form onSubmit={handleSubmit} className="flex items-end gap-3">
                <div className="relative flex-1">
                  <div className="relative rounded-2xl border border-white/10 bg-neutral-950/60 p-[1px] shadow-inner">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Posez votre question..."
                      disabled={isLoading}
                      className="w-full rounded-2xl bg-transparent px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none disabled:opacity-50"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/40 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </form>
              <p className="mt-2 text-center text-[10px] text-neutral-500">
                Propulsé par l&apos;IA Blackbox Quantum • Réponses instantanées
              </p>
            </div>
          </div>

          {/* Features below chat */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
              <div className="mb-2 text-2xl">⚡</div>
              <div className="text-sm font-medium text-white">Réponses instantanées</div>
              <div className="mt-1 text-xs text-neutral-400">&lt; 1 seconde</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
              <div className="mb-2 text-2xl">🧠</div>
              <div className="text-sm font-medium text-white">IA intelligente</div>
              <div className="mt-1 text-xs text-neutral-400">Contexte compris</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
              <div className="mb-2 text-2xl">🔒</div>
              <div className="text-sm font-medium text-white">100% sécurisé</div>
              <div className="mt-1 text-xs text-neutral-400">Données privées</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
