import { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import { TestCard } from "@/components/sections/test-card"

export const metadata: Metadata = constructMetadata({
  title: "심리 테스트",
  description: "LAMDAMPD가 제공하는 다양한 심리 테스트를 통해 자신의 감정과 심리 상태를 이해해보세요. PERMA 이론 기반 테스트부터 다양한 감정 분석 도구를 제공합니다.",
})

export default function TestsPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          심리 테스트
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          당신의 감정과 심리 상태를 이해하는 여정을 시작하세요.
          <br />
          과학적 이론에 기반한 다양한 테스트를 경험해보세요.
        </p>
      </div>

      {/* Tests Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <TestCard
          title="나의 바다를 찾아서"
          description="PERMA 이론을 기반으로 한 심리 테스트로, 당신의 긍정 심리 상태를 바다의 모습으로 표현합니다. 긍정 감정, 몰입, 관계, 의미, 성취의 5가지 요소를 통해 당신의 심리적 웰빙을 탐색해보세요."
          href="https://perma.lamdampd.com"
          theory="PERMA 이론 기반"
        />

        {/* Placeholder for future tests */}
        {/* 
        <TestCard
          title="다음 테스트 제목"
          description="테스트 설명..."
          href="https://test2.lamdampd.com"
          theory="이론 이름"
        />
        */}
      </div>

      {/* Coming Soon Message */}
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          더 많은 테스트가 곧 추가될 예정입니다. 기대해주세요! 🌊
        </p>
      </div>
    </div>
  )
}
