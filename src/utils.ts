/** Prefix an internal path with the configured base (works for both user and project GitHub Pages). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}` || '/';
}

export function pad(n: number): string {
  return String(n).padStart(2, '0');
}
