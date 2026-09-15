import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'
import { waLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'BluserFit Mujer — BluserFit',
  description:
    'BluserFit Mujer: entrenamiento pensado para tu físico, tu estética y tu bienestar. Cada entreno te acerca a esa versión de ti que te hace sentir orgullosa.',
}

export default function BluserFitMujerPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background pt-16 text-foreground">
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/#planes"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" /> Volver a los planes
            </Link>

            <figure className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <img
                src="/images/mujer-sentir-orgullosa-nueva.png"
                alt="BluserFit Mujer — Cada entreno te acerca a esa versión de ti que te hace sentir orgullosa. Solo necesitas decidirte."
                className="block w-full"
              />
            </figure>

            <div className="mt-10 text-center">
              <a
                href={waLink('¡Hola Sil! Tengo preguntas sobre BluserFit Mujer y quiero comenzar.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition-colors hover:bg-accent"
              >
                <MessageCircle className="size-5" />
                Quiero comenzar
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Escribime por WhatsApp y resolvemos todas tus preguntas sobre BluserFit Mujer.
              </p>

              <Link
                href="/#planes"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
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
