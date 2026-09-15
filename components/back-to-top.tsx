import { ArrowUp } from 'lucide-react'

// Visible return link placed at the end of navigation sections so the user
// can easily go back to the welcome screen where they came from.
export function BackToTop({ className = '' }: { className?: string }) {
  return (
    <div className={`mt-12 flex justify-center ${className}`}>
      <a
        href="#top"
        className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
        Volver al inicio
      </a>
    </div>
  )
}
