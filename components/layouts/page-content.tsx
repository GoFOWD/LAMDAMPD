"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about-section"
import { TechnologySection } from "@/components/sections/technology-section"
import { BusinessSection } from "@/components/sections/business-section"

export function PageContent() {
  return (
    <motion.div 
      className="relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <HeroSection />
      <AboutSection />
      <TechnologySection />
      <BusinessSection />
    </motion.div>
  )
}
