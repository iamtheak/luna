"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CosmicBackgroundProps {
  mousePosition: { x: number; y: number }
}

export default function CosmicBackground({ mousePosition }: CosmicBackgroundProps) {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  useEffect(() => {
    // Generate random stars
    const generatedStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
    }))
    setStars(generatedStars)

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const moonOffsetX = windowSize.width > 0 ? (mousePosition.x - windowSize.width / 2) * 0.02 : 0
  const moonOffsetY = windowSize.height > 0 ? (mousePosition.y - windowSize.height / 2) * 0.02 : 0

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="star absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Moon with parallax */}
      <motion.div
        className="absolute top-1/4 right-1/4 moon"
        animate={{
          x: moonOffsetX,
          y: moonOffsetY,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      >
        <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100 shadow-2xl">
          {/* Moon craters */}
          <div className="absolute w-8 h-8 bg-yellow-300 rounded-full top-12 left-12 opacity-40" />
          <div className="absolute w-6 h-6 bg-yellow-300 rounded-full top-24 right-16 opacity-30" />
          <div className="absolute w-5 h-5 bg-yellow-300 rounded-full bottom-16 left-20 opacity-35" />
        </div>
      </motion.div>

      {/* Soft glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
