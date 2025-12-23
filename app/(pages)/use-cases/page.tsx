import { USE_CASES } from "@/lib/content"
import { constructMetadata } from "@/lib/seo"

export const metadata = constructMetadata({
  title: "Use Cases - B2C, B2B, B2G",
  description: "Applications of Emotion AI Module across sectors.",
})

export default function UseCasesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-background text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Use Cases</h1>
        <p className="text-xl text-muted-foreground">B2C, B2B, B2G 전 영역을 아우르는 솔루션</p>
      </section>

      <div className="container mx-auto pb-20 space-y-24">
        {/* B2C */}
        <section id="personal" className="grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 relative h-[300px] w-full bg-gradient-to-br from-prism-red/20 to-prism-orange/20 rounded-2xl flex items-center justify-center">
              <span className="text-6xl">👤</span>
           </div>
           <div className="order-1 md:order-2 space-y-4">
              <div className="inline-block rounded-lg bg-prism-red/10 px-3 py-1 text-sm text-prism-red font-bold">B2C</div>
              <h2 className="text-3xl font-bold">{USE_CASES.b2c.title}</h2>
              <p className="text-lg text-muted-foreground">{USE_CASES.b2c.description}</p>
              <ul className="grid gap-2">
                 {USE_CASES.b2c.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <span className="h-2 w-2 rounded-full bg-prism-red" />
                       {feature}
                    </li>
                 ))}
              </ul>
           </div>
        </section>

        {/* B2B */}
        <section id="business" className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-4">
              <div className="inline-block rounded-lg bg-prism-blue/10 px-3 py-1 text-sm text-prism-blue font-bold">B2B</div>
              <h2 className="text-3xl font-bold">{USE_CASES.b2b.title}</h2>
              <p className="text-lg text-muted-foreground">{USE_CASES.b2b.description}</p>
              <ul className="grid gap-2">
                 {USE_CASES.b2b.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <span className="h-2 w-2 rounded-full bg-prism-blue" />
                       {feature}
                    </li>
                 ))}
              </ul>
           </div>
           <div className="relative h-[300px] w-full bg-gradient-to-br from-prism-blue/20 to-prism-indigo/20 rounded-2xl flex items-center justify-center">
              <span className="text-6xl">🏢</span>
           </div>
        </section>

        {/* B2G */}
        <section id="public" className="grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 relative h-[300px] w-full bg-gradient-to-br from-prism-green/20 to-prism-blue/20 rounded-2xl flex items-center justify-center">
              <span className="text-6xl">🏛️</span>
           </div>
           <div className="order-1 md:order-2 space-y-4">
              <div className="inline-block rounded-lg bg-prism-green/10 px-3 py-1 text-sm text-prism-green font-bold">B2G</div>
              <h2 className="text-3xl font-bold">{USE_CASES.b2g.title}</h2>
              <p className="text-lg text-muted-foreground">{USE_CASES.b2g.description}</p>
              <ul className="grid gap-2">
                 {USE_CASES.b2g.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <span className="h-2 w-2 rounded-full bg-prism-green" />
                       {feature}
                    </li>
                 ))}
              </ul>
           </div>
        </section>
      </div>
    </div>
  )
}
