import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

export default function SectionContainer({ id, title, children, className }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="inline-block pb-2 border-b-2 border-primary">{title}</span>
        </h2>
        {children}
      </div>
    </section>
  )
}
