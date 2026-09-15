import { MessageCircle } from 'lucide-react'
import { InstagramIcon } from './icons'
import { contact } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-charcoal py-12 text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 border-b border-white/10 pb-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <a href="#top" className="font-display text-2xl font-black tracking-tight">
              BLUSER<span className="text-burgundy">FIT</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-secondary-foreground/60">
              Transformar · Aprender · Compartir · Sostener. Entrenamiento holístico para tu cuerpo y tu calidad de vida.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm text-secondary-foreground/70" aria-label="Pie de página">
            <a href="#perfil" className="hover:text-burgundy">¿Quién soy?</a>
            <a href="#metodo" className="hover:text-burgundy">Método</a>
            <a href="#planes" className="hover:text-burgundy">Mis Planes</a>
            <a href="#tienda" className="hover:text-burgundy">Planes</a>
          </nav>

          <div className="flex gap-3">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-11 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-burgundy"
            >
              <MessageCircle className="size-5" />
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-11 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-burgundy"
            >
              <InstagramIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 pt-6 text-xs text-secondary-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} BluserFit — Sil Bluser. Todos los derechos reservados.</p>
          <p>
            WhatsApp {contact.whatsappDisplay} · @{contact.instagramHandle}
          </p>
        </div>
      </div>
    </footer>
  )
}
