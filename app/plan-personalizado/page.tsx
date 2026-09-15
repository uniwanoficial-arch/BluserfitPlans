import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowLeft, ArrowRight, ClipboardList, MessageCircle, MonitorPlay, Utensils } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'
import { Eyebrow } from '@/components/section-heading'
import { PlanesPersonalizadosCarrusel } from '@/components/planes-personalizados-carrusel'
import { waLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Plan Personalizado — BluserFit',
  description:
    'Plan Personalizado BluserFit: evaluación inicial, planificación a medida, check-in de seguimiento semanal, clases presenciales y online, y educación alimentaria.',
}

function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>
}

export default function PlanPersonalizadoPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background pt-16 text-foreground">
        {/* Encabezado */}
        <section className="bg-[#f3f1ec] py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/#planes"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" /> Volver a los planes
            </Link>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Personalizados y Online</p>
            <h1 className="mt-3 text-balance font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
              BLUSER<span className="text-burgundy">FIT</span> personalizados y online
            </h1>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-burgundy text-primary-foreground">
                  <ClipboardList className="size-6" />
                </span>
                <p className="font-display text-lg font-extrabold uppercase tracking-wide">
                  Planes personalizados
                  <span className="block text-sm font-medium normal-case tracking-normal text-muted-foreground">
                    con seguimiento.
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-burgundy text-primary-foreground">
                  <MonitorPlay className="size-6" />
                </span>
                <p className="font-display text-lg font-extrabold uppercase tracking-wide">
                  Clases presenciales
                  <span className="block text-sm font-medium normal-case tracking-normal text-muted-foreground">
                    y online.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Descripción */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                <B>PLAN PERSONALIZADO BLUSERFIT</B> Un servicio individual que comienza con una evaluación inicial, donde
                conoceré tus objetivos, experiencia, disponibilidad, necesidades y posibilidades reales de entrenamiento.
                A partir de esa información diseñaré una planificación personalizada y adaptada a vos.
              </p>
              <p>
                Pero el plan no termina con la entrega de una rutina. El entrenamiento es un proceso dinámico que iremos
                siguiendo y ajustando de acuerdo con tu evolución.
              </p>
            </div>
          </div>
        </section>

        {/* Seguimiento */}
        <section className="pb-16 sm:pb-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <figure className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <img
                src="/images/plan-personalizado-entrenamiento.png"
                alt="Entrenadora acompañando a una alumna durante el entrenamiento en el gimnasio"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                <B>Cada semana realizaremos un check-in de seguimiento</B> para conocer cómo fue tu entrenamiento, tu
                rendimiento, cómo te sentiste física y mentalmente, qué dificultades aparecieron y cómo estás
                sosteniendo el proceso.
              </p>
              <p>
                A partir de esa información <B>recibirás mi devolución</B> y, cuando sea necesario, realizaremos ajustes
                en tu planificación.
              </p>
            </div>
          </div>
        </section>

        {/* Educación alimentaria */}
        <section className="bg-[#f3f1ec] py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <Eyebrow>
                <span className="inline-flex items-center gap-2">
                  <Utensils className="size-4" /> Método BluserFit
                </span>
              </Eyebrow>
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
                Educación <span className="text-burgundy">alimentaria</span>
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  El Método BluserFit incorpora <B>educación alimentaria general</B> orientada a comprender la función de
                  los <B>macronutrientes</B>, aprender a construir comidas equilibradas, mejorar la <B>calidad de las
                  elecciones</B>, la hidratación y los hábitos que acompañan el entrenamiento, el rendimiento y una vida
                  saludable.
                </p>
                <p>
                  Esta orientación tiene un <B>carácter educativo</B> y no reemplaza una consulta nutricional ni constituye
                  una prescripción alimentaria individual. Cuando una persona requiera un plan de alimentación
                  personalizado, será derivada a una Lic. en Nutrición matriculada que podrá realizar la evaluación y
                  planificación correspondiente.
                </p>
                <p>
                  De esta manera, <B>Bluserfit</B> integra entrenamiento, aprendizaje y hábitos saludables, trabajando en
                  articulación con el profesional de nutrición cuando las necesidades individuales así lo requieran.
                </p>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <img
                src="/images/educacion-alimentaria.png"
                alt="Bowl saludable con pollo, palta, quinoa y vegetales frescos"
                className="aspect-square w-full object-cover"
              />
            </figure>
          </div>
        </section>

        {/* Cierre */}
        <section className="py-16 text-center sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-balance font-display text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              TU <span className="text-burgundy">RUTINA</span> ES EL COMIENZO.
              <br />
              EL SEGUIMIENTO Y LA <span className="text-burgundy">CONSTANCIA</span> CONSTRUYEN EL PROCESO.
            </h2>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
              BluserFit — Transformar · Aprender · Compartir · Sostener
            </p>
            <a
              href={waLink('¡Hola Sil! Quiero comenzar con el Plan Personalizado de BluserFit.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition-colors hover:bg-accent"
            >
              <MessageCircle className="size-5" />
              Quiero comenzar
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* Elegí tu plan personalizado */}
        <section id="elegi-tu-plan" className="scroll-mt-20 bg-[#f3f1ec] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>
                <span className="mx-auto">Elegí tu plan personalizado</span>
              </Eyebrow>
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
                Tres formas de <span className="text-burgundy">acompañarte</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Deslizá entre las opciones y tocá <B>Ver plan</B> para conocer todo lo que incluye cada modalidad.
              </p>
            </div>

            <div className="mt-12">
              <PlanesPersonalizadosCarrusel />
            </div>

            <div className="mt-14 text-center">
              <Link
                href="/#planes"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowLeft className="size-4" /> Volver a los planes
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  )
}
