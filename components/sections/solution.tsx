import { SOLUTION_SECTION } from "@/lib/content"
import { ArrowRight, Heart, Grid3X3, Image as ImageIcon, Brain, Activity } from "lucide-react"

export function SolutionSection() {
  const icons = [Heart, Grid3X3, ImageIcon, Brain, Activity]
  
  return (
    <section className="py-20 bg-background border-t">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            {SOLUTION_SECTION.title}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {SOLUTION_SECTION.description}
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-4 items-center justify-center">
             {SOLUTION_SECTION.steps.map((step, index) => {
               const Icon = icons[index + 1] || Activity // Map icons appropriately. 
               // logic: 
               // 1. Vectorize (Vector)
               // 2. Image (Image)
               // 3. Analysis (Brain)
               // 4. Tracking (Activity)
               // The raw input "Emotion" (Heart) is implicit start or we can add it.
               
               return (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-muted bg-card shadow-sm transition-all group-hover:border-prism-blue group-hover:shadow-prism-blue/20">
                    <Icon className="h-8 w-8 text-foreground transition-colors group-hover:text-prism-blue" />
                  </div>
                  <h3 className="mb-2 font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  
                  {/* Arrow for steps except last */}
                  {index < SOLUTION_SECTION.steps.length - 1 && (
                    <div className="absolute top-10 -right-4 hidden md:block text-muted-foreground/30">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  )}
                </div>
               )
             })}
          </div>
        </div>
      </div>
    </section>
  )
}
