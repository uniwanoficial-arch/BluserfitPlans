import { BackToTop } from './back-to-top'

export function Metodo() {
  return (
    <section id="metodo" className="scroll-mt-16">
      <div className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              ¿Qué es el <span className="text-primary">Método BluserFit</span>?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-foreground/80">
              <p>
                El Método BluserFit entiende el entrenamiento como una herramienta integral de transformación. Utiliza
                principalmente la fuerza y la hipertrofia para trabajar no solo sobre el cuerpo, sino también sobre la
                salud, los hábitos, el bienestar y la calidad de vida.
              </p>
              <p>
                Por eso buscamos que el entrenamiento sea efectivo, progresivo y adaptable, pero sobre todo sostenible en
                el tiempo. El objetivo no es entrenar durante unos meses: es construir una forma de entrenar que pueda
                acompañarte durante toda la vida.
              </p>
            </div>
          </div>

          <BackToTop />
        </div>
      </div>
    </section>
  )
}
