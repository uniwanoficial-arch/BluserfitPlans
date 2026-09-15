import { User, BookOpen, ArrowRight } from 'lucide-react'
import { Eyebrow } from './section-heading'

const opciones = [
  {
    href: '#perfil',
    title: 'Mi Perfil',
    Icon: User,
  },
  {
    href: '#historia',
    title: 'Mi Historia',
    Icon: BookOpen,
  },
]

export function ConocemeHub() {
  return (
    <section id="conoceme" className="scroll-mt-16 bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>Conóceme</Eyebrow>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {opciones.map(({ href, title, Icon }) => (
            <a
              key={href}
              href={href}
              className="group flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-left shadow-sm outline-none transition-all hover:border-primary/40 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="size-4" />
              </span>
              <span className="text-sm font-bold uppercase tracking-wide">{title}</span>
              <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
