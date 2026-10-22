/**
 * Helpers to build absolute asset URLs honouring the `base` configured
 * in Vite (`import.meta.env.BASE_URL`), which is required when the app
 * is deployed from a subdirectory (e.g. GitHub Pages).
 */

/** Returns the absolute URL of a resource inside `public/images`. */
export function imageUrl(file: string): string {
  return `${import.meta.env.BASE_URL}images/${file}`
}

/** Returns the absolute URL of an icon inside `public/icons`. */
export function iconUrl(file: string): string {
  return `${import.meta.env.BASE_URL}icons/${file}`
}