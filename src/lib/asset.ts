// Antepone el base path de Vite (p. ej. "/la-boda/") a las rutas de /public.
// OBLIGATORIO para cualquier <img src="..."> que apunte a un archivo de /public,
// porque en GitHub Pages de proyecto la app no vive en la raíz del dominio.
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
