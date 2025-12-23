"use client"

import { motion } from "framer-motion"
import { Users, Building2, Landmark } from "lucide-react"

export function BusinessSection() {
  const cards = [
    {
      icon: Users,
      title: "B2C",
      subtitle: "Personal Mental Care",
      desc: "일상의 스트레스와 불안을 관리하는 구독형 심리 케어 서비스. 감정 추적 리포트와 맞춤형 솔루션을 제공합니다.",
      color: "text-prism-red"
    },
    {
      icon: Building2,
      title: "B2B",
      subtitle: "Corporate Wellbeing",
      desc: "임직원 멘탈 헬스 케어 및 감정 노동자 보호를 위한 API/SDK 솔루션. 조직 내 감정 리스크를 선제적으로 관리합니다.",
      color: "text-prism-blue"
    },
    {
      icon: Landmark,
      title: "B2G",
      subtitle: "Public Welfare",
      desc: "청년, 학생, 군 장병 등 공공 영역의 정신 건강 모니터링 및 고위험군 조기 발굴 시스템을 구축합니다.",
      color: "text-prism-green"
    }
  ]

  return (
    <section className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-20">
         <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
         >
            Expanding Horizons
         </motion.h2>
         <p className="mt-4 text-xl text-muted-foreground">
            개인을 넘어 기업과 사회로, 감정 AI의 가치를 전달합니다.
         </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
            <motion.div
                key={card.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-3xl bg-secondary/20 p-8 hover:bg-secondary/40 transition-colors"
            >
                <div className={`mb-6 p-4 rounded-2xl bg-background w-fit ${card.color}`}>
                    <card.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-1">{card.title}</h3>
                <p className={`text-sm font-semibold uppercase tracking-wider mb-4 opacity-70 ${card.color}`}>
                    {card.subtitle}
                </p>
                <p className="text-muted-foreground">
                    {card.desc}
                </p>
            </motion.div>
        ))}
      </div>
    </section>
  )
}
