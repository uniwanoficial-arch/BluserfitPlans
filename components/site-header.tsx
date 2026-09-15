'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X, ShoppingCart } from 'lucide-react'
import { InstagramIcon } from './icons'
import { contact, waLink } from '@/lib/site'

const planLinks = [
  { href: '#plan-personalizado', label: 'Plan Personalizado', desc: 'Evaluación + planificación a tu medida' },
  { href: '#bluserfit-mujer', label: 'BluserFit Mujer', desc: 'Full glúteos y estética corporal' },
  { href: '#bluserfit-mas35', label: 'BluserFit +35', desc: 'Músculo, fuerza y longevidad' },
]

const navLinks = [
  { href: '#perfil', label: '¿Quién soy?' },
  { href: '#metodo', label: 'Método' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#tienda', label: 'Planes' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [planOpen, setPlanOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? 'bg-background shadow-[0_1px_0_var(--border)]'
          : scrolled
            ? 'bg-background/90 shadow-[0_1px_0_var(--border)] backdrop-blur-md'
            : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-display text-2xl font-black tracking-tight" aria-label="BluserFit inicio">
          <span className="text-foreground">BLUSER</span>
          <span className="text-primary">FIT</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}

          <div className="relative" onMouseEnter={() => setPlanOpen(true)} onMouseLeave={() => setPlanOpen(false)}>
            <button
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              aria-expanded={planOpen}
              aria-haspopup="true"
            >
              Mis Planes
              <ChevronDown className={`size-4 transition-transform ${planOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`absolute right-0 top-full w-72 pt-2 transition-all ${
                planOpen ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
            >
              <div className="overflow-hidden rounded-xl border border-border bg-popover shadow-xl">
                {planLinks.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="block border-b border-border px-4 py-3 last:border-0 transition-colors hover:bg-muted"
                  >
                    <span className="block text-sm font-bold text-foreground">{p.label}</span>
                    <span className="block text-xs text-muted-foreground">{p.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de BluserFit"
            className="ml-1 rounded-md p-2 text-foreground/80 transition-colors hover:text-primary"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-accent"
          >
            Quiero mi plan
          </a>
          <a
            href={waLink('¡Hola Sil! Quiero consultar por los planes de BluserFit.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar planes por WhatsApp"
            className="ml-1 rounded-md p-2 text-foreground/80 transition-colors hover:text-primary"
          >
            <ShoppingCart className="size-5" />
          </a>
        </nav>

        {/* Mobile actions: cart next to the options menu */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={waLink('¡Hola Sil! Quiero consultar por los planes de BluserFit.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar planes por WhatsApp"
            className="rounded-md p-2 text-foreground transition-colors hover:text-primary"
          >
            <ShoppingCart className="size-6" />
          </a>
          <button
            type="button"
            className="-mr-1 rounded-md p-2.5 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${open ? '' : 'hidden'}`} aria-hidden={!open}>
        <div
          className={`fixed inset-0 top-16 z-40 bg-background transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 px-6 py-6" aria-label="Móvil">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 font-display text-lg font-extrabold text-foreground"
              >
                {l.label}
              </a>
            ))}
            <p className="pt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Mis Planes</p>
            {planLinks.map((p) => (
              <a
                key={p.href}
                href={p.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-foreground/90"
              >
                <span className="block font-bold">{p.label}</span>
                <span className="block text-sm text-muted-foreground">{p.desc}</span>
              </a>
            ))}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-full bg-primary px-6 py-3.5 text-center font-bold text-primary-foreground"
            >
              Quiero mi plan
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
