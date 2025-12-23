import { COMPANY_INFO } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 {COMPANY_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
