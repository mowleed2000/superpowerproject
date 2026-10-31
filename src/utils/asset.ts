/**
 * Resolves an asset path with the Vite base URL (supporting GitHub Pages subpaths).
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
