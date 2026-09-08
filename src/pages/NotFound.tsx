import { Head } from "vite-react-ssg";
import { content, reservationHref } from "../content";
import { assetUrl } from "../lib/asset";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cream">
      <Head>
        <title>Página no encontrada — {content.name}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="font-display text-4xl font-bold text-green-dark mb-3">Página no encontrada</h1>
      <p className="text-navy/70 mb-6">La página que buscas no existe o se ha movido.</p>
      <div className="flex gap-3">
        <a href={assetUrl("/")} className="px-5 py-2.5 rounded-full bg-green text-cream font-semibold">
          Volver al inicio
        </a>
        <a
          href={reservationHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full border border-green text-green-dark font-semibold"
        >
          Reservar mesa
        </a>
      </div>
    </div>
  );
}
