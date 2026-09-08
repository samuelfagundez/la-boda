import { assetUrl } from "../lib/asset";
import { content, contactHref, reservationHref } from "../content";

export default function Hero() {
  return (
    <section id="top" className="relative h-[92vh] min-h-[560px] flex items-end">
      <img
        src={assetUrl("/gallery/la-boda-interior-barra.jpg")}
        alt="Interior del restaurante La Boda en Valencia"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-navy/20" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-20 w-full text-cream">
        <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-gold font-semibold mb-3">
          Restaurante italiano · L'Eixample, Valencia
        </p>
        <h1 className="font-display text-4xl sm:text-6xl font-bold max-w-2xl leading-tight">
          {content.name}
        </h1>
        <p className="mt-4 max-w-xl text-base sm:text-lg text-cream/90">{content.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={reservationHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-terracotta text-cream font-semibold hover:opacity-90 transition-opacity"
          >
            Reservar mesa
          </a>
          <a
            href={contactHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-cream/70 text-cream font-semibold hover:bg-cream hover:text-navy transition-colors"
          >
            Contáctanos
          </a>
        </div>

        <p className="mt-6 text-sm text-cream/80">
          ★ {content.rating.value} · {content.rating.countDisplay} en Google
        </p>
      </div>
    </section>
  );
}
