'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { planesPersonalizados } from '@/lib/planes-personalizados'

export function PlanesPersonalizadosCarrusel() {
  const [index, setIndex] = useState(0)
  const total = planesPersonalizados.length
  const touchStartX = useRef<number | null>(null)

  const goTo = (i: number) => setIndex((i + total) % total)
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 50) prev()
    else if (delta < -50) next()
    touchStartX.current = null
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="relative">
        {/* Botón anterior */}
        <button
          type="button"
          onClick={prev}
          aria-label="Plan anterior"
          className="absolute left-0 top-1/2 z-10 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="size-5" />
        </button>

        {/* Botón siguiente */}
        <button
          type="button"
          onClick={next}
          aria-label="Plan siguiente"
          className="absolute right-0 top-1/2 z-10 flex size-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowRight className="size-5" />
        </button>

        {/* Pista deslizable */}
        <div className="overflow-hidden rounded-3xl" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {planesPersonalizados.map((plan) => (
              <div key={plan.slug} className="w-full shrink-0 px-1">
                <article className="relative overflow-hidden rounded-3xl border border-border shadow-xl">
                  <img
                    src={plan.cardImage || '/placeholder.svg'}
                    alt={plan.cardAlt}
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3a0d16] via-[#3a0d16]/45 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6 text-primary-foreground">
                    <span className="font-display text-3xl font-medium italic leading-none">Plan</span>
                    <h3 className="font-display text-4xl font-black uppercase leading-none tracking-tight">
                      {plan.displayName}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
                      {plan.subtitle}
                    </p>
                    <Link
                      href={`/plan-personalizado/${plan.slug}`}
                      className="group mt-5 inline-flex items-center justify-between gap-3 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-bold uppercase tracking-wide backdrop-blur-sm transition-colors hover:bg-primary-foreground hover:text-burgundy"
                    >
                      Ver plan
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {planesPersonalizados.map((plan, i) => (
          <button
            key={plan.slug}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir al ${plan.name}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-8 bg-primary' : 'w-2 bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-sm font-semibold text-foreground/70">
        {planesPersonalizados[index].name} · {planesPersonalizados[index].variant}
      </p>
    </div>
  )
}
