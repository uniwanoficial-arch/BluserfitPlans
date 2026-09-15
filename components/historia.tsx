import type { ReactNode } from 'react'
import { Eyebrow } from './section-heading'
import { BackToTop } from './back-to-top'

function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>
}

function Banner() {
  return (
    <p className="rounded-lg bg-burgundy px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground sm:text-base">
      No entrenás solo, evolucionamos juntos.
    </p>
  )
}

export function Historia() {
  return (
    <section id="historia" className="scroll-mt-16 bg-background py-20 text-foreground sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Eyebrow>Voluntad de poder</Eyebrow>
        <h2 className="text-balance font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
          Mi <span className="text-burgundy">historia</span>
        </h2>

        <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
          <p>
            Desde muy joven fui muy menudita y no estaba conforme con mi cuerpo. Esa dificultad despertó en mí la
            necesidad de entender cómo podía transformarlo y descubrí en el <B>entrenamiento de fuerza</B> la
            herramienta para modificar la composición corporal.
          </p>
          <p>
            Empecé a estudiar y a entrenar con conocimiento. Con el tiempo comprendí que{' '}
            <B>recomponer la masa corporal, ya sea para aumentarla o disminuirla, puede ser un proceso igualmente
            desafiante</B>. Son objetivos diferentes, pero ambos requieren <B>conocimiento, estrategia y tiempo</B>.
          </p>
          <p>
            Me formé en <B>IFBB</B> y continué sumando cursos y capacitaciones vinculadas al entrenamiento. Primero
            apliqué todo ese conocimiento en mí misma: logré transformar mi cuerpo, ganar masa muscular y alcanzar una
            estética con la que finalmente me sentí conforme.
          </p>
          <p>
            Ese proceso fue el que me llevó a querer ayudar a otras personas. Comencé a trabajar como entrenadora y, a
            lo largo de los años, tuve la satisfacción de acompañar a muchos alumnos y ver cómo alcanzaban sus propios
            objetivos.
          </p>
          <p>
            Hoy, toda esa experiencia personal y profesional forma parte de <B>BluserFit</B>, un método de{' '}
            <B>entrenamiento holístico</B> que entiende que cada persona comienza desde un lugar diferente. Por eso, no
            se trata solamente de indicar una rutina: trabajamos sobre el{' '}
            <B>
              entrenamiento, la construcción del hábito, la constancia, la motivación y el acompañamiento
            </B>
            , dentro de un espacio de contención que ayuda a sostener el proceso en el tiempo.
          </p>
        </div>

        <div className="mt-10">
          <Banner />
        </div>

        <div className="mt-16 border-t border-border pt-14">
          <Eyebrow>Antes y después</Eyebrow>
          <h3 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
            Mi <span className="text-burgundy">transformación</span>
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <figure className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-charcoal/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground">
                Antes
              </span>
              <img
                src="/images/antes-playa.jpg"
                alt="Sil BluserFit antes de su transformación, en la playa"
                className="aspect-[3/4] w-full object-cover"
              />
            </figure>
            <figure className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-burgundy px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground">
                Después
              </span>
              <img
                src="/images/despues-gym.jpg"
                alt="Sil BluserFit después de su transformación, entrenando fuerza en el gimnasio"
                className="aspect-[3/4] w-full object-cover"
              />
            </figure>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-balance text-center font-semibold leading-relaxed text-foreground">
            Porque después de los 45, el objetivo no es solamente verte bien: es seguir construyendo un cuerpo fuerte,
            estético y funcional para la vida.
          </p>

          <div className="mt-10">
            <Banner />
          </div>
        </div>

        <BackToTop />
      </div>
    </section>
  )
}
