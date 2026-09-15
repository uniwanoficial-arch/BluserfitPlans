import { Utensils } from 'lucide-react'
import { Eyebrow } from './section-heading'

export function EducacionAlimentaria() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>
              <span className="inline-flex items-center gap-2">
                <Utensils className="size-4" /> Educación alimentaria
              </span>
            </Eyebrow>
            <h2 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Aprender a comer también es <span className="text-primary">entrenar</span>
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-foreground/80">
              <p>
                El Método BluserFit incorpora educación alimentaria orientada a comprender la función de los
                macronutrientes, construir comidas equilibradas, mejorar la calidad de las elecciones, la hidratación y
                los hábitos que acompañan al entrenamiento.
              </p>
              <p>
                Esta orientación tiene un carácter educativo y no reemplaza una consulta nutricional. Cuando una persona
                requiere un plan de alimentación individual, es derivada a una Lic. en Nutrición matriculada para su
                evaluación y planificación.
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full rounded-2xl bg-primary/90 lg:block"
              aria-hidden="true"
            />
            <img
              src="/images/educacion-alimentaria.png"
              alt="Plato saludable y equilibrado con pollo, palta, tomates y quinoa"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-balance text-center font-display text-2xl font-extrabold uppercase leading-tight tracking-wide sm:text-3xl">
          Tu rutina es el comienzo. El <span className="text-primary">seguimiento</span> y la{' '}
          <span className="text-primary">constancia</span> construyen el proceso.
        </p>
      </div>
    </section>
  )
}
