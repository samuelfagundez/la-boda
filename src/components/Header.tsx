import { useState } from "react";
import { assetUrl } from "../lib/asset";
import { content, contactHref, reservationHref } from "../content";

const LINKS = [
  { href: "#sobre-nosotros", label: "Sobre nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#horario", label: "Horario" },
  { href: "#ubicacion", label: "Cómo llegar" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/95 backdrop-blur border-b border-cream-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold text-green-dark">
          <img src={assetUrl("/favicon.svg")} alt="" width={28} height={28} className="rounded" />
          {content.shortName}
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-navy">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-green transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={contactHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-full border border-green text-green-dark hover:bg-green hover:text-cream transition-colors"
          >
            Contáctanos
          </a>
          <a
            href={reservationHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-full bg-terracotta text-cream hover:opacity-90 transition-opacity"
          >
            Reservar mesa
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-navy mb-1.5" />
          <span className="block w-6 h-0.5 bg-navy mb-1.5" />
          <span className="block w-6 h-0.5 bg-navy" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-cream-dark bg-cream px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3 text-sm font-medium">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-4">
            <a
              href={contactHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-semibold px-4 py-2 rounded-full border border-green text-green-dark"
            >
              Contáctanos
            </a>
            <a
              href={reservationHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-semibold px-4 py-2 rounded-full bg-terracotta text-cream"
            >
              Reservar mesa
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
