"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function MessageDisplay() {
  const message = `I am sorry love. I made a mistake. You said actions speak more than words. This is the way of apologizing. I don't wanna go away from you. I only think about you. Please forgive me. I know it is a dealbreaker for you and I have removed my past. For a last ditch effort to save us I lied. Im Sorry I Promise I wont make the same mistakes again. I dont want to go away from you. I love you with all my heart I never regretted talking to you. Please come back home`

  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(message.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [message])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-relaxed glow-text whitespace-pre-wrap text-balance">
          {displayedText}
          {displayedText.length < message.length && <span className="animate-pulse text-yellow-200">|</span>}
        </div>
      </motion.div>
    </div>
  )
}
