"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex flex-col items-center text-center mb-12">
             <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4">
               Who We Are
             </span>
             <h2 className="flex flex-col items-center justify-center gap-2 text-3xl md:text-5xl font-light leading-tight">
               <span>Not just an App.</span>
               <div className="flex items-center gap-3">
                 <span className="text-prism-blue/50 font-light select-none">(</span>
                 <span className="font-regular bg-gradient-to-r from-prism-blue to-prism-violet bg-clip-text text-transparent">
                   AI Module
                 </span>
                 <span className="text-prism-blue/50 font-light select-none">)</span>
               </div>
             </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                우리는 단순한 심리 상담 챗봇을 만드는 것이 아닙니다. 
                인간의 복잡한 감정을 <span className="text-foreground font-semibold text-xl">6차원 벡터</span>로 구조화하고, 
                이를 독자적인 <span className="text-foreground font-semibold text-xl">'감정 지문' 이미지</span>로 변환하여 분석하는 핵심 엔진을 개발합니다.
              </p>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                우리의 기술은 병원 방문 전 단계의 <span className="text-foreground font-semibold text-xl">'비임상' 영역</span>에서, 
                사용자의 감정 변화를 지속적으로 모니터링하고 <span className="text-foreground font-semibold text-xl">위험 신호를 조기 포착</span>합니다.
                개인의 마음을 가장 깊이 이해하고 추적하는 AI 파트너가 되는 것이 우리의 목표입니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
