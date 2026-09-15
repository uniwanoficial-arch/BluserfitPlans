import { GraduationCap, User } from 'lucide-react'
import { Eyebrow, IconBadge } from './section-heading'
import { BackToTop } from './back-to-top'

const titulos = [
  'Personal Trainer Internacional — IFBB-C/59147',
  'Personal Trainer Nacional — MN 00003785',
  'Instructora de Musculación — MN 00001523',
]

const cursos = [
  'Especialización en Hipertrofia y Estética de Glúteos',
  'Capacitación en Armado y Planificación de Rutinas',
  'Capacitación en Nutrición Deportiva',
]

export function PerfilProfesional() {
  return (
    <section id="perfil" className="relative scroll-mt-16 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div>
            <Eyebrow>Perfil Profesional</Eyebrow>
            <h2 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Soy <span className="text-primary">Sil Bluser</span>, creadora de BluserFit
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-foreground/80">
              <p>
                Me desempeño como Entrenadora personal e Instructora de Musculación. El objetivo de mi tarea está
                centrado en recomponer la masa corporal mediante la planificación del entrenamiento, con dos grandes
                áreas de especialización: la transformación estética femenina y el entrenamiento para mujeres y hombres
                mayores de 35 años.
              </p>
              <p>
                Creo que entrenar no es simplemente hacer ejercicios. Es conocer qué necesita cada persona, qué objetivo
                persigue y cómo organizar el entrenamiento para avanzar de manera progresiva, sostenible y con propósito.
              </p>
            </div>
          </div>
        </div>

        {/* Formación */}
        <div className="mt-16 grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-sm md:grid-cols-2 lg:p-10">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <IconBadge>
                <User className="size-6" />
              </IconBadge>
              <h3 className="font-display text-xl font-extrabold uppercase tracking-wide">Formación</h3>
            </div>
            <ul className="space-y-3">
              {titulos.map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed text-foreground/80">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:border-l md:border-border md:pl-8">
            <div className="mb-5 flex items-center gap-3">
              <IconBadge>
                <GraduationCap className="size-6" />
              </IconBadge>
              <h3 className="font-display text-xl font-extrabold uppercase tracking-wide">Cursos y capacitaciones</h3>
            </div>
            <ul className="space-y-3">
              {cursos.map((c) => (
                <li key={c} className="flex gap-3 leading-relaxed text-foreground/80">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <BackToTop />
        </div>
      </div>
    </section>
  )
}
