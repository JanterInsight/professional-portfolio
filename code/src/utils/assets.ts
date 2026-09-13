/**
 * Utilidades para construir URLs de assets estáticos respetando el `base`
 * configurado en Vite (`import.meta.env.BASE_URL`), útil para despliegues
 * en subdirectorios (GitHub Pages).
 */

/** Devuelve la URL absoluta de un recurso dentro de `public/images`. */
export function imageUrl(file: string): string {
  return `${import.meta.env.BASE_URL}images/${file}`
}

/** Devuelve la URL absoluta de un icono dentro de `public/icons`. */
export function iconUrl(file: string): string {
  return `${import.meta.env.BASE_URL}icons/${file}`
}