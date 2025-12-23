import { TECHNOLOGY_DETAILS } from "@/lib/content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Grid3X3, ArrowRight, Image as ImageIcon } from "lucide-react"
import { constructMetadata } from "@/lib/seo"

export const metadata = constructMetadata({
  title: "Technology - Core Engine",
  description: "Emotion Vector Analysis & Fingerprint Technology",
})

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-prism-blue to-prism-violet">
              Core Technology
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              감정을 6차원 벡터로 변환하고, 이를 이미지화하여 정밀하게 분석합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Vector Visualization */}
      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                 <h2 className="text-3xl font-bold">Emotion to Vector to Image</h2>
                 <p className="text-muted-foreground text-lg">
                    우리의 핵심 기술은 비정형 감정 데이터를 정형화된 6차원 벡터로 변환하고, 
                    이를 다시 독자적인 &apos;감정 지문(Fingerprint)&apos; 이미지로 시각화하는 파이프라인에 있습니다.
                 </p>
                 <ul className="space-y-2">
                    {TECHNOLOGY_DETAILS.core_features.map((feature, i) => (
                       <li key={i} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-prism-green" />
                          <span>{feature}</span>
                       </li>
                    ))}
                 </ul>
              </div>
              <div className="flex items-center justify-center bg-card p-8 rounded-xl border shadow-sm">
                 <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center bg-muted p-4 rounded-lg">
                       <Grid3X3 className="h-12 w-12 text-prism-blue" />
                       <span className="font-mono text-xs mt-2 text-muted-foreground">Vector [0.1, 0.8...]</span>
                    </div>
                    <ArrowRight className="h-8 w-8 text-muted-foreground animate-pulse" />
                    <div className="flex flex-col items-center bg-muted p-4 rounded-lg relative overflow-hidden group">
                       <div className="absolute inset-0 bg-gradient-to-br from-prism-red via-prism-yellow to-prism-blue opacity-50 blur-xl group-hover:opacity-80 transition-opacity" />
                       <ImageIcon className="h-12 w-12 text-foreground relative z-10" />
                       <span className="font-mono text-xs mt-2 text-foreground relative z-10">Fingerprint</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* How it Works / Comparison */}
      <section className="py-20">
         <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Competitive Edge</h2>
            <div className="grid md:grid-cols-2 gap-8">
               {TECHNOLOGY_DETAILS.difference.map((item, i) => (
                  <Card key={i}>
                     <CardHeader>
                        <CardTitle>vs {item.competitor}</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-lg font-medium text-prism-blue">{item.us}</p>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
    </div>
  )
}
