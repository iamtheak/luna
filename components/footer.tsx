"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 py-6 text-center text-yellow-200 text-sm font-serif italic"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
    >
      <p>Made with heart and sincerity</p>
    </motion.footer>
  )
}
