import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, Gift, MessageCircle } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'
import { getPlanBySlug, planesPersonalizados } from '@/lib/planes-personalizados'
import { waLink } from '@/lib/site'

export function generateStaticParams() {
  return planesPersonalizados.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const plan = getPlanBySlug(slug)
  if (!plan) return { title: 'Plan — BluserFit' }
  return {
    title: `${plan.name} — BluserFit`,
    description: `${plan.name} (${plan.variant}). ${plan.tagline}`,
  }
}

export default async function PlanDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const plan = getPlanBySlug(slug)
  if (!plan) notFound()

  return (
    <>
      <SiteHeader />
      <main className="bg-background pt-16 text-foreground">
        {/* Encabezado */}
        <section className="bg-[#f3f1ec] py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/plan-personalizado#elegi-tu-plan"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" /> Volver a los planes
            </Link>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Plan personalizado</p>
            <h1 className="mt-3 text-balance font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              <span className="text-burgundy">{plan.displayName}</span>
            </h1>
            <p className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-foreground/80">
              {plan.variant}
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {plan.tagline}
            </p>
          </div>
        </section>

        {/* Detalle del plan */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ul className="space-y-8">
              {plan.features.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-burgundy text-primary-foreground">
                    <Check className="size-4" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-extrabold tracking-tight">{f.title}</h2>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            {plan.footerNote && (
              <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-border bg-[#f3f1ec] p-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-3 font-display text-lg font-extrabold uppercase tracking-wide text-burgundy">
                  <Gift className="size-6 shrink-0" />
                  {plan.footerNote}
                </p>
                <a
                  href={waLink(plan.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-accent"
                >
                  Quiero comenzar
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            )}

            {!plan.footerNote && (
              <div className="mt-12 flex justify-center">
                <a
                  href={waLink(plan.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition-colors hover:bg-accent"
                >
                  <MessageCircle className="size-5" />
                  Quiero comenzar
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            )}

            <p className="mt-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {plan.closing}
            </p>
          </div>
        </section>

        {/* Flecha de regreso a los planes */}
        <section className="pb-20 text-center">
          <Link
            href="/plan-personalizado#elegi-tu-plan"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft className="size-4" /> Volver a los planes
          </Link>
        </section>
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  )
}
