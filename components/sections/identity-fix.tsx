import { IDENTITY_FIX } from "@/lib/content"

export function IdentityFixSection() {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Prism decoration lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-prism-red via-prism-green to-prism-blue" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-prism-blue via-prism-indigo to-prism-red" />
      
      <div className="container mx-auto flex flex-col items-center text-center space-y-8">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl whitespace-pre-wrap">
          {IDENTITY_FIX.statement}
        </h2>
        <p className="max-w-[42rem] text-lg text-background/80 sm:text-xl sm:leading-8 whitespace-pre-wrap">
          {IDENTITY_FIX.subtext}
        </p>
      </div>
    </section>
  )
}
