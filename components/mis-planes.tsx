import { Fragment } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Eyebrow } from './section-heading'
import { PlanesPersonalizadosCarrusel } from './planes-personalizados-carrusel'

const modalidades = [
  {
    id: 'plan-personalizado',
    href: '/plan-personalizado',
    tag: 'Personalizado & Online',
    title: 'Plan Personalizado',
    image: '/images/plan-personalizado-titulo.jpg',
    intro:
      'Un servicio individual que comienza con una evaluación inicial donde conozco tus objetivos, experiencia, disponibilidad y necesidades reales. A partir de esa información diseño una planificación adaptada a vos.',
    points: [
      'Evaluación inicial y planificación a medida',
      'Check-in de seguimiento semanal',
      'Ajustes según tu evolución',
      'Clases presenciales y online',
    ],
  },
  {
    id: 'bluserfit-mujer',
    href: '/bluserfit-mujer',
    tag: 'Full glúteos y estética corporal',
    title: 'BluserFit Mujer',
    image: '/images/bluserfit-mujer-titulo.jpg',
    intro:
      'Dirigido a mujeres que quieren mejorar su físico, desarrollar masa muscular y trabajar sus proporciones, con especial énfasis en el desarrollo de glúteos, integrado a una planificación de cuerpo completo.',
    points: [
      'Especialización en hipertrofia de glúteos',
      'Planificación de cuerpo completo',
      'Foco estético + condición física',
      'Hábito sostenible de bienestar',
    ],
  },
  {
    id: 'bluserfit-mas35',
    href: '/bluserfit-mas35',
    tag: 'Músculo · Fuerza · Longevidad',
    title: 'BluserFit +35',
    image: '/images/bluserfit-mas35-titulo.png',
    intro:
      'Dirigido a mujeres y hombres mayores de 35 que quieren preservar y desarrollar masa muscular, mejorar la fuerza y la composición corporal para afrontar mejor el paso de los años.',
    points: [
      'Entrenamiento de fuerza para toda la vida',
      'Recomposición corporal y salud',
      'Autonomía y capacidad física',
      'Progresión segura y adaptada',
    ],
  },
]

export function MisPlanes() {
  return (
    <section id="planes" className="scroll-mt-16 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Modalidades de entrenamiento</Eyebrow>
          <h2 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Elegí el camino que va con <span className="text-primary">vos</span>
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/70">
            Tres modalidades pensadas para distintos objetivos y momentos de la vida. Todas comparten el mismo método:
            entrenamiento inteligente, seguimiento y comunidad.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {modalidades.map((m) => (
            <Fragment key={m.id}>
            <article
              id={m.id}
              className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <Link
                href={m.href}
                aria-label={`Ver ${m.title}`}
                className="block bg-[#f3f1ec] outline-none ring-primary/50 transition-opacity hover:opacity-95 focus-visible:ring-2"
              >
                <img src={m.image || '/placeholder.svg'} alt={m.title} className="block w-full" />
              </Link>
              <div className="p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{m.tag}</p>
                <h3 className="mt-2 font-display text-3xl font-black tracking-tight">{m.title}</h3>
                <p className="mt-4 leading-relaxed text-foreground/75">{m.intro}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={m.href}
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-accent"
                >
                  Quiero este plan
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>

            {m.id === 'plan-personalizado' && (
              <div className="pt-4">
                <div className="mx-auto mb-8 max-w-md text-center">
                  <Eyebrow>Tus planes personalizados</Eyebrow>
                  <h3 className="font-display text-3xl font-black tracking-tight">
                    Elegí tu <span className="text-primary">nivel</span>
                  </h3>
                </div>
                <PlanesPersonalizadosCarrusel />
              </div>
            )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
