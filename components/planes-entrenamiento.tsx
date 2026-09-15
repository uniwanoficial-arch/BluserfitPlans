import { Check, Crown, Gem, ListChecks } from 'lucide-react'
import { Eyebrow } from './section-heading'
import { waLink } from '@/lib/site'

const planes = [
  {
    name: 'Plan Básico',
    icon: ListChecks,
    features: ['Rutinas personalizadas', 'Guía de alimentación', 'Seguimiento por WhatsApp', 'Comunidad privada'],
    featured: false,
    wa: '¡Hola Sil! Quiero el Plan Básico de BluserFit.',
  },
  {
    name: 'Plan Premium',
    icon: Crown,
    features: ['Todo lo del Plan Básico', 'Seguimiento semanal', 'Videollamada mensual', 'Ajustes personalizados'],
    featured: true,
    wa: '¡Hola Sil! Quiero el Plan Premium de BluserFit.',
  },
  {
    name: 'Plan Integral',
    icon: Gem,
    features: ['Entrenamiento 1 a 1', 'Plan nutricional completo', 'Seguimiento continuo', 'Resultados garantizados'],
    featured: false,
    wa: '¡Hola Sil! Quiero el Plan Integral de BluserFit.',
  },
]

export function PlanesEntrenamiento() {
  return (
    <section className="bg-secondary py-20 text-secondary-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>
            <span className="mx-auto">Elegí tu plan</span>
          </Eyebrow>
          <h2 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Planes de <span className="text-burgundy">entrenamiento</span>
          </h2>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {planes.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-transform ${
                p.featured
                  ? 'bg-burgundy text-primary-foreground lg:-translate-y-3 lg:scale-[1.03] shadow-2xl'
                  : 'border border-white/12 bg-white/[0.04]'
              }`}
            >
              {p.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                  Más elegido
                </span>
              )}
              <span
                className={`mb-5 flex size-12 items-center justify-center rounded-full ${
                  p.featured ? 'bg-primary-foreground/15' : 'bg-burgundy'
                }`}
              >
                <p.icon className="size-6" />
              </span>
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide">{p.name}</h3>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className={`size-4 shrink-0 ${p.featured ? 'text-primary-foreground' : 'text-burgundy'}`} />
                    <span className={p.featured ? '' : 'text-secondary-foreground/85'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink(p.wa)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-bold transition-colors ${
                  p.featured
                    ? 'bg-primary-foreground text-burgundy hover:bg-primary-foreground/90'
                    : 'bg-burgundy text-primary-foreground hover:bg-accent'
                }`}
              >
                Ver plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
