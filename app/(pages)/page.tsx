import { constructMetadata } from "@/lib/seo"
import { GlowBackground } from "@/components/ui/glow-background"
import { PrismIntro } from "@/components/sections/prism-intro"
import { PageContent } from "@/components/layouts/page-content"

export const metadata = constructMetadata({
  title: "Home - Emotion AI Module",
  description: "우리는 감정을 이해하는 AI를 만듭니다.",
})

export default function HomePage() {
  return (
    <>
      <PrismIntro />
      <PageContent />
      <GlowBackground />
    </>
  )
}
