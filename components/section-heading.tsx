import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </p>
  )
}

export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
      {children}
    </span>
  )
}
