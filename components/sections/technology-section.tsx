"use client"

import { motion } from "framer-motion"

export function TechnologySection() {
  const steps = [
    {
      id: "01",
      title: "6-Dimensional Vectorization",
      desc: "감정을 기쁨, 슬픔, 분노 등 단순 카테고리가 아닌 6차원 벡터 공간의 좌표로 정밀하게 매핑합니다."
    },
    {
      id: "02",
      title: "Emotion Fingerprint",
      desc: "벡터화된 데이터를 시각적 패턴인 '감정 지문'으로 변환하여, 이미지 분석 모델이 감정의 미묘한 뉘앙스까지 해석합니다."
    },
    {
      id: "03",
      title: "Continuous Tracking",
      desc: "일회성 분석이 아닌 시계열 추적을 통해 감정의 흐름, 기분 변화의 트리거, 회복 패턴을 학습하고 예측합니다."
    }
  ]

  return (
    <section className="relative py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
         <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <div className="flex flex-col items-center text-center">
            <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4">
              Core Technology
            </span>
            <h2 className="flex items-center gap-4 text-3xl md:text-5xl font-light">
              <span className="text-prism-blue/50 select-none">(</span>
              <span className="font-regular">Data to Insight</span>
              <span className="text-prism-blue/50 select-none">)</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-prism-blue/50 transition-colors"
            >
              <div className="text-6xl font-bold text-muted-foreground/30 mb-6 group-hover:text-prism-blue/40 transition-colors">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
