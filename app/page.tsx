"use client"

import { useEffect, useState } from "react"
import CosmicBackground from "@/components/cosmic-background"
import MessageDisplay from "@/components/message-display"
import Footer from "@/components/footer"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <CosmicBackground mousePosition={mousePosition} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <MessageDisplay />
        <Footer />
      </div>
    </main>
  )
}
