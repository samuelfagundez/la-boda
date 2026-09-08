import { content } from "../content";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/80 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-display text-lg font-bold text-cream mb-2">{content.name}</p>
          <p>{content.address.full}</p>
        </div>

        <div>
          <p className="font-semibold text-cream mb-2">Contacto</p>
          <p>
            <a href={`tel:${content.phone}`} className="hover:text-cream">
              {content.phoneDisplay}
            </a>
          </p>
          {content.social.instagram && (
            <p className="mt-1">
              <a
                href={content.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream"
              >
                Instagram
              </a>
            </p>
          )}
        </div>

        <div>
          <p className="font-semibold text-cream mb-2">Horario</p>
          <p>Lun–Mié 17:30–23:30 · Jue 17:30–00:30</p>
          <p>Vie 13:30–00:30 · Sáb 13:30–01:00 · Dom cerrado</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-8 pt-6 border-t border-cream/10 text-xs text-cream/50">
        © {new Date().getFullYear()} {content.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
