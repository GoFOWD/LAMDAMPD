"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestCardProps {
  title: string
  description: string
  href: string
  theory?: string
  className?: string
}

export function TestCard({ title, description, href, theory, className }: TestCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-prism-blue/10 before:via-prism-indigo/10 before:to-prism-violet/10 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        className
      )}
    >
      <div className="relative z-10">
        {/* Theory Badge */}
        {theory && (
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {theory}
          </div>
        )}

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold tracking-tight transition-colors group-hover:text-prism-indigo">
          {title}
          <ExternalLink className="ml-2 inline-block h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Decorative gradient line */}
        <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-prism-blue via-prism-indigo to-prism-violet transition-all duration-300 group-hover:w-full" />
      </div>
    </Link>
  )
}
