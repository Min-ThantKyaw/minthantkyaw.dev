/** Smoothly scrolls to a section by id without changing the URL hash. */
export function scrollToSection(target: string): void {
  const id = target.replace(/^#/, '');
  if (!id) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
