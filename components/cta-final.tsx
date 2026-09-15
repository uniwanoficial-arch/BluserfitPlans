import { ArrowRight, MessageCircle } from 'lucide-react'
import { InstagramIcon } from './icons'
import { contact } from '@/lib/site'

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-burgundy py-20 text-primary-foreground sm:py-28">
      <div className="pointer-events-none absolute -left-10 bottom-0 text-primary-foreground/10">
        <div className="dot-grid size-40" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary-foreground/70">
          ¿List@ para empezar?
        </p>
        <h2 className="font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
          No entrenás solo.
          <br />
          Evolucionamos junt@s.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
          Escribime y armamos juntos el plan que se adapta a tu objetivo, tu experiencia y tu momento de vida.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-4 font-bold text-burgundy transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="size-5" />
            WhatsApp {contact.whatsappDisplay}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-8 py-4 font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <InstagramIcon className="size-5" />
            @{contact.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  )
}
