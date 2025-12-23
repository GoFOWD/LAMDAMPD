import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { COMPANY_INFO } from "@/lib/content"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-32 text-center">
      <div className="container mx-auto relative z-10 flex flex-col items-center gap-8 animate-in fade-in zoom-in duration-1000">
        
        {/* Top "Tag" Style - Clean uppercase tracking */}
        <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4">
           Emotion Analysis AI Module
        </span>

        {/* Main Headline with Reference Style: ( Text ) */}
        <h1 className="flex flex-col items-center justify-center text-5xl font-thin tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="flex items-center gap-4">
             <span className="text-prism-blue/50 font-light select-none">(</span>
             <span className="font-medium bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
               Understanding
             </span>
             <span className="text-prism-blue/50 font-light select-none">)</span>
          </span>
          <span className="mt-2 text-4xl sm:text-6xl md:text-7xl font-light text-muted-foreground">
             Your Emotion
          </span>
        </h1>

        <p className="max-w-[42rem] mt-6 text-lg text-muted-foreground sm:text-xl sm:leading-8 font-light tracking-wide">
          {COMPANY_INFO.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-12">
          {/* <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all font-medium" asChild>
             <Link href="/technology">Our Technology</Link>
          </Button>
          <Button size="lg" variant="ghost" className="h-14 px-10 text-lg rounded-full border border-border hover:bg-secondary/50 font-medium" asChild>
             <Link href="/contact">Watch Demo</Link>
          </Button> */}
        </div>
      </div>
    </section>
  )
}
