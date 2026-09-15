import { ArrowRight, Dumbbell } from 'lucide-react'
import { Eyebrow } from './section-heading'
import { waLink } from '@/lib/site'

const productos = [
  {
    name: 'BluserFit Personalizado',
    desc: 'Planificación individual a tu medida: objetivos, experiencia y disponibilidad, con seguimiento y ajustes.',
  },
  {
    name: 'BluserFit Pro',
    desc: 'Programa avanzado de fuerza e hipertrofia para llevar tu físico y tu rendimiento al siguiente nivel.',
  },
  {
    name: 'BluserFit +35',
    desc: 'Fuerza, músculo y longevidad para preservar tu salud y composición corporal con los años.',
  },
]

export function Tienda() {
  return (
    <section id="tienda" className="relative scroll-mt-16 overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>
              <span className="inline-flex items-center gap-2">
                <Dumbbell className="size-4" /> Planes BluserFit
              </span>
            </Eyebrow>
            <h2 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Elegí tu plan y <span className="text-primary">empezá hoy</span>
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Tres planes pensados para distintos objetivos y momentos. Escribime por WhatsApp y coordinamos tu inicio.
              La tienda online todavía no está habilitada, pero podés sumarte a cualquier plan directamente.
            </p>
          </div>
          <a
            href={waLink('¡Hola Sil! Quiero conocer los planes de BluserFit.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Consultar por WhatsApp
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {productos.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="mb-5 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Dumbbell className="size-6" />
              </span>
              <h3 className="font-display text-xl font-extrabold uppercase tracking-wide">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <a
                href={waLink(`¡Hola Sil! Me interesa el plan "${p.name}" de BluserFit.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:gap-3"
              >
                Consultar por WhatsApp <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
