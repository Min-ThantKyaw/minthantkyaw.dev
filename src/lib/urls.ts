/** True when a URL is a placeholder that should not be shipped as a live link. */
export function isPlaceholderUrl(url: string | undefined): boolean {
  if (!url) return true;
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    return host === 'example.com' || host === 'example.org' || host === 'example.net';
  } catch {
    return true;
  }
}
