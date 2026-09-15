import { ArrowRight, Quote, TrendingDown, Clock, HeartPulse, Dumbbell, Sparkles } from 'lucide-react'
import { Eyebrow } from './section-heading'
import { waLink } from '@/lib/site'

type Metric = { icon: typeof TrendingDown; value: string; label: string }

type Testimonio = {
  id: string
  image: string
  name: string
  age: string
  program: string
  headline: string
  story: string
  quote: string
  metrics: Metric[]
  pos?: string
  fit?: 'cover' | 'contain'
}

const testimonios: Testimonio[] = [
  {
    id: 'ana',
    image: '/images/testimonio-1.jpg',
    fit: 'contain',
    pos: 'center',
    name: 'Alumna BluserFit',
    age: '44 años',
    program: 'Plan Personalizado',
    headline: 'Bajó 15 kg y ganó un cuerpo firme y fuerte',
    story:
      'Llegó a BluserFit con 83 kg. En solo 6 meses bajó 15 kg, logrando un cuerpo más firme, fuerte y estético. Entrenamiento intenso, constancia y un compromiso enorme, acompañado por seguimiento nutricional profesional.',
    quote: 'El cambio físico fue enorme, pero lo que más gané fue confianza.',
    metrics: [
      { icon: TrendingDown, value: '-15 kg', label: 'en 6 meses' },
      { icon: Clock, value: '6', label: 'meses' },
      { icon: Sparkles, value: '+Firmeza', label: 'y fuerza' },
    ],
  },
  {
    id: 'jorge',
    image: '/images/testimonio-2.jpg',
    name: 'Alumno BluserFit +40',
    age: '62 años',
    program: 'BluserFit +40',
    headline: 'De tres hernias y cirugía prevista a entrenar sin dolor',
    story:
      'Llegó con tres hernias, dolor y una cirugía prevista. Hoy entrena sin dolor, recuperó movilidad y postura, ganó fuerza y masa muscular, y bajó 10 kg. Finalmente, no necesitó realizarse la cirugía programada.',
    quote: 'La transformación se ve. La calidad de vida se siente.',
    metrics: [
      { icon: HeartPulse, value: 'Sin cirugía', label: 'ni dolor' },
      { icon: TrendingDown, value: '-10 kg', label: 'de peso' },
      { icon: Dumbbell, value: '+Fuerza', label: 'y movilidad' },
    ],
  },
  {
    id: 'recompo',
    image: '/images/testimonio-3.jpg',
    pos: 'center',
    name: 'Alumna BluserFit Mujer',
    age: '38 años',
    program: 'BluserFit Mujer',
    headline: 'Recomposición total: menos grasa, más músculo y forma',
    story:
      'Después de años entrenando sin resultados claros, empezó una planificación a medida enfocada en recomposición corporal. En 5 meses redujo grasa, ganó masa muscular, marcó su abdomen y mejoró notablemente la forma de glúteos y piernas.',
    quote: 'Nunca me sentí tan fuerte y segura de mi cuerpo como ahora.',
    metrics: [
      { icon: Sparkles, value: 'Recompo', label: 'corporal' },
      { icon: Clock, value: '5', label: 'meses' },
      { icon: Dumbbell, value: '+Músculo', label: '-Grasa' },
    ],
  },
]

export function Testimonios() {
  return (
    <section id="testimonios" className="relative scroll-mt-16 overflow-hidden bg-secondary py-20 text-secondary-foreground sm:py-28">
      <div className="pointer-events-none absolute -right-10 top-10 text-primary/20" aria-hidden="true">
        <div className="dot-grid size-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Transformaciones reales</Eyebrow>
          <h2 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Resultados que se ven y se <span className="text-[#c96070]">sienten</span>
          </h2>
          <p className="mt-4 leading-relaxed text-secondary-foreground/70">
            Historias reales de personas que confiaron en el método BluserFit. Cada proceso es único, pero todos
            comparten lo mismo: constancia, acompañamiento y un plan hecho a su medida.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonios.map((t) => (
            <article
              key={t.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
                {t.fit === 'contain' && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 scale-110 bg-cover blur-2xl saturate-150"
                    style={{ backgroundImage: `url(${t.image})`, backgroundPosition: 'center' }}
                  />
                )}
                <img
                  src={t.image || '/placeholder.svg'}
                  alt={`Transformación de ${t.name}, ${t.age}, con ${t.program}`}
                  loading="lazy"
                  style={{ objectPosition: t.pos ?? 'top' }}
                  className={`absolute inset-0 size-full transition-transform duration-500 group-hover:scale-[1.03] ${
                    t.fit === 'contain' ? 'object-contain p-3' : 'object-cover'
                  }`}
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  {t.program}
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {t.age}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-pretty font-display text-xl font-extrabold leading-snug">{t.headline}</h3>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {t.metrics.map((m) => {
                    const Icon = m.icon
                    return (
                      <div key={m.label} className="rounded-xl bg-white/5 p-3 text-center">
                        <Icon className="mx-auto size-4 text-[#c96070]" />
                        <p className="mt-1.5 font-display text-sm font-black leading-none">{m.value}</p>
                        <p className="mt-1 text-[11px] leading-tight text-secondary-foreground/60">{m.label}</p>
                      </div>
                    )
                  })}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/70">{t.story}</p>

                <blockquote className="mt-4 flex gap-2 border-l-2 border-primary pl-3 text-sm font-semibold italic text-secondary-foreground/90">
                  <Quote className="size-4 shrink-0 text-primary" />
                  <span className="text-pretty">{t.quote}</span>
                </blockquote>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-5 rounded-2xl bg-gradient-to-r from-burgundy to-burgundy-dark p-8 text-center sm:p-12">
          <h3 className="text-balance font-display text-2xl font-black leading-tight sm:text-3xl">
            Tu transformación puede ser la próxima historia
          </h3>
          <p className="max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
            No importa tu edad ni tu punto de partida. Escribime y armamos juntos el plan que se adapta a tu objetivo y
            a tu momento de vida.
          </p>
          <a
            href={waLink('¡Hola Sil! Vi los testimonios de BluserFit y quiero empezar mi transformación.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-4 font-bold text-burgundy transition-transform hover:scale-[1.03]"
          >
            Quiero empezar mi cambio
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
