"use client"

import { motion } from "framer-motion"

export function GlowBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Background Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Main Top Glow (Blue/Violet instead of Orange) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-prism-blue/20 blur-[120px] rounded-full dark:bg-prism-blue/10"
      />

      {/* Secondary Accent Glow (Indigo/Violet) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vh] bg-prism-violet/20 blur-[100px] rounded-full dark:bg-prism-violet/10"
      />

      {/* Bottom Left Glow (Subtle) */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vh] bg-prism-indigo/10 blur-[120px] rounded-full" />
      
      {/* Texture Overlay (Optional for 'grainy' loop) */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
    </div>
  )
}
