import { content } from "../content";

export default function LocationMap() {
  return (
    <section id="ubicacion" className="py-16 sm:py-24 bg-cream-dark/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-terracotta font-semibold mb-3">
          Cómo llegar
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-green-dark mb-6">
          {content.address.full}
        </h2>

        <div className="rounded-2xl overflow-hidden border border-cream-dark">
          <iframe
            title={`Mapa de ubicación de ${content.name}`}
            src={content.mapEmbedSrc}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href={content.mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm font-semibold text-green-dark underline underline-offset-4"
        >
          Abrir en Google Maps
        </a>
      </div>
    </section>
  );
}
