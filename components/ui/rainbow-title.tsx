'use client'

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface RainbowTitleProps {
  children: React.ReactNode
  className?: string
}

export function RainbowTitle({ children, className }: RainbowTitleProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      {/* Aura arc-en-ciel animée (couche arrière) */}
      <motion.div
        className="absolute inset-0 blur-[40px] opacity-60"
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `
            radial-gradient(
              circle at 20% 50%,
              rgba(255, 0, 0, 0.6) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 40% 50%,
              rgba(255, 127, 0, 0.6) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 60% 50%,
              rgba(255, 255, 0, 0.6) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 50%,
              rgba(0, 255, 0, 0.6) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 100% 50%,
              rgba(0, 0, 255, 0.6) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 120% 50%,
              rgba(139, 0, 255, 0.6) 0%,
              transparent 50%
            )
          `,
        }}
      />

      {/* Aura secondaire plus intense */}
      <motion.div
        className="absolute inset-0 blur-[25px] opacity-80"
        animate={{
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(255, 0, 0, 0.4) 0%,
              rgba(255, 127, 0, 0.4) 16.66%,
              rgba(255, 255, 0, 0.4) 33.33%,
              rgba(0, 255, 0, 0.4) 50%,
              rgba(0, 0, 255, 0.4) 66.66%,
              rgba(139, 0, 255, 0.4) 83.33%,
              rgba(255, 0, 0, 0.4) 100%
            )
          `,
        }}
      />

      {/* Texte principal avec dégradé animé */}
      <motion.h1
        className="relative bg-clip-text text-transparent font-bold"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              #FF0000 0%,
              #FF7F00 16.66%,
              #FFFF00 33.33%,
              #00FF00 50%,
              #0000FF 66.66%,
              #8B00FF 83.33%,
              #FF0000 100%
            )
          `,
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.h1>

      {/* Reflet lumineux subtil */}
      <motion.div
        className="absolute inset-0 blur-[15px] opacity-40 mix-blend-screen"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.3) 0%,
              transparent 50%,
              rgba(255, 255, 255, 0.3) 100%
            )
          `,
        }}
      />
    </div>
  )
}

// Variante alternative avec effet néon pulsant
export function RainbowTitleNeon({ children, className }: RainbowTitleProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      {/* Glow externe arc-en-ciel */}
      <motion.div
        className="absolute -inset-4 blur-[50px]"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: `
              conic-gradient(
                from 0deg,
                #FF0000 0deg,
                #FF7F00 60deg,
                #FFFF00 120deg,
                #00FF00 180deg,
                #0000FF 240deg,
                #8B00FF 300deg,
                #FF0000 360deg
              )
            `,
          }}
        />
      </motion.div>

      {/* Texte avec effet néon */}
      <h1
        className="relative font-bold"
        style={{
          color: "#FFFFFF",
          textShadow: `
            0 0 10px rgba(255, 0, 0, 0.8),
            0 0 20px rgba(255, 127, 0, 0.6),
            0 0 30px rgba(255, 255, 0, 0.5),
            0 0 40px rgba(0, 255, 0, 0.4),
            0 0 50px rgba(0, 0, 255, 0.3),
            0 0 60px rgba(139, 0, 255, 0.2)
          `,
        }}
      >
        {children}
      </h1>
    </div>
  )
}

// Variante avec animation de particules
export function RainbowTitleParticles({ children, className }: RainbowTitleProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      {/* Particules arc-en-ciel animées */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 blur-[30px]"
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
          style={{
            background: `radial-gradient(circle, ${
              ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'][i]
            } 0%, transparent 70%)`,
            transform: `rotate(${i * 60}deg)`,
          }}
        />
      ))}

      {/* Texte principal */}
      <motion.h1
        className="relative font-bold bg-clip-text text-transparent"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              #FF0000,
              #FF7F00,
              #FFFF00,
              #00FF00,
              #0000FF,
              #8B00FF
            )
          `,
        }}
        animate={{
          filter: [
            "brightness(1) contrast(1)",
            "brightness(1.2) contrast(1.1)",
            "brightness(1) contrast(1)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.h1>
    </div>
  )
}
