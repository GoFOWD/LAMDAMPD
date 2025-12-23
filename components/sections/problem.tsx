import { PROBLEM_SECTION } from "@/lib/content"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProblemSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            {PROBLEM_SECTION.title}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {PROBLEM_SECTION.context}
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 md:max-w-[64rem] md:gap-8 mt-16">
          {PROBLEM_SECTION.stats.map((stat, index) => (
            <Card key={index} className="flex flex-col items-center justify-center text-center border-none shadow-none bg-transparent">
              <CardHeader className="pb-2">
                <CardTitle className="text-5xl font-black text-prism-red tracking-tight">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
