import { content } from "../content";

export default function Hours() {
  return (
    <section id="horario" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-terracotta font-semibold mb-3">
            Horario
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-green-dark mb-6">
            Te esperamos
          </h2>
          <ul className="divide-y divide-cream-dark border-t border-b border-cream-dark">
            {content.hours.map((h) => (
              <li key={h.day} className="flex justify-between py-3 text-sm sm:text-base">
                <span className="font-medium text-navy">{h.day}</span>
                <span className={h.hours === "Cerrado" ? "text-navy/50" : "text-navy/80"}>
                  {h.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-cream-dark/60 p-6 sm:p-8 flex flex-col justify-center">
          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-terracotta font-semibold mb-3">
            Precio orientativo
          </p>
          <p className="font-display text-3xl sm:text-4xl font-bold text-green-dark">
            {content.priceRangeDisplay}
          </p>
          <p className="mt-4 text-sm text-navy/70">
            Admitimos reservas, servicio para llevar y recogida en la puerta. Terraza, opciones
            vegetarianas y ambiente apto para grupos y familias.
          </p>
        </div>
      </div>
    </section>
  );
}
