import { Brain, Dumbbell, HeartPulse, Leaf, Target, Users } from 'lucide-react'
import { Eyebrow } from './section-heading'

const pilares = [
  {
    icon: Dumbbell,
    title: 'Cuerpo',
    text: 'Desarrollar y preservar masa muscular, mejorar fuerza, composición corporal y condición física. La musculación transforma la figura y construye un cuerpo más fuerte y capaz.',
  },
  {
    icon: Target,
    title: 'Método y conocimiento',
    text: 'Planificación, selección estratégica de ejercicios, manejo del volumen y la frecuencia, técnica y progresión. Entender qué hacemos, cómo lo hacemos y para qué.',
  },
  {
    icon: Leaf,
    title: 'Hábito y sostenibilidad',
    text: 'Construir constancia y adherencia. Buscamos que entrenar deje de ser un esfuerzo temporal y se convierta en una parte natural de la vida.',
  },
  {
    icon: Brain,
    title: 'Mente y bienestar',
    text: 'El entrenamiento también es un espacio propio: ayuda a liberar tensión, favorece el bienestar emocional y fortalece la autoestima y la energía.',
  },
  {
    icon: HeartPulse,
    title: 'Salud y longevidad',
    text: 'Especialmente a partir de los 35, el músculo y la fuerza son herramientas para conservar capacidad física, autonomía y calidad de vida con los años.',
  },
  {
    icon: Users,
    title: 'Comunidad y pertenencia',
    text: 'El proceso no se vive en soledad. Compartir objetivos, experiencias y avances genera acompañamiento, compromiso y sentido de pertenencia.',
  },
]

export function Pilares() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground sm:py-28">
      <div className="pointer-events-none absolute right-8 top-10 text-secondary-foreground/10">
        <div className="dot-grid size-32" aria-hidden="true" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Los pilares del método</Eyebrow>
          <h2 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Seis pilares que sostienen tu <span className="text-burgundy">transformación</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {pilares.map((p) => (
            <div key={p.title} className="group bg-secondary p-7 transition-colors hover:bg-burgundy/15">
              <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-burgundy text-primary-foreground">
                <p.icon className="size-6" />
              </span>
              <h3 className="font-display text-lg font-extrabold uppercase tracking-wide">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-balance text-center font-display text-2xl font-extrabold uppercase tracking-wide sm:text-3xl">
          No entrenamos solos. <span className="text-burgundy">Progresamos juntos.</span>
        </p>
      </div>
    </section>
  )
}
