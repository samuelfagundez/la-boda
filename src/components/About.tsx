import { content } from "../content";

export default function About() {
  return (
    <section id="sobre-nosotros" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-terracotta font-semibold mb-3">
            Sobre nosotros
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-green-dark">
            Cocina italiana con alma, en el barrio
          </h2>
          <p className="mt-5 text-navy/80 leading-relaxed">{content.description}</p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-4">
          {content.highlights.map((h) => (
            <li
              key={h}
              className="rounded-2xl border border-cream-dark bg-white/60 p-5 text-sm text-navy/85 leading-relaxed"
            >
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
