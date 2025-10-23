"use client"

import { motion } from "framer-motion"

export default function FloatingButton() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      <motion.button
        className="px-8 py-4 bg-gradient-to-r from-yellow-300 to-yellow-200 text-slate-900 font-serif font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          boxShadow: "0 0 30px rgba(253, 224, 71, 0.6), 0 0 60px rgba(253, 224, 71, 0.3)",
        }}
      >
        Forgive Me 🌻
      </motion.button>
    </motion.div>
  )
}
