// Welcome screen: the site opens directly with Sil's branded photo.
// The three menu buttons (CONOCEME / PLANES / TIENDA) are drawn into the image
// itself, so we overlay transparent, accessible click targets exactly over them.
// TIENDA is intentionally inert for now (store not yet available).

export function Hero() {
  return (
    <section id="top" className="bg-[#f3f1ec] pt-16">
      <div className="relative w-full overflow-hidden bg-[#f3f1ec]">
        <img
          src="/images/bienvenida-sil-menu.png"
          alt="Sil BluserFit — bienvenida"
          className="block w-full"
          loading="eager"
          fetchPriority="high"
        />

        {/* Transparent click targets aligned over the buttons baked into the image. */}
        <div className="absolute inset-x-[4%] bottom-[6%] grid h-[9%] grid-cols-3 gap-[4%]">
          <a
            href="#conoceme"
            aria-label="Conóceme"
            className="rounded-full outline-none ring-primary-foreground/70 transition-transform focus-visible:ring-2 active:scale-[0.98]"
          />
          <a
            href="#planes"
            aria-label="Planes"
            className="rounded-full outline-none ring-primary-foreground/70 transition-transform focus-visible:ring-2 active:scale-[0.98]"
          />
          <span
            aria-label="Tienda (próximamente)"
            aria-disabled="true"
            className="cursor-not-allowed rounded-full"
          />
        </div>
      </div>
    </section>
  )
}
