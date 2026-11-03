import { type MouseEvent, useEffect, useState } from 'react';
import { ArrowUpRight, Download, Menu, Moon, Sun, X } from 'lucide-react';
import { CONTACT_LINKS, CV_URL, EMAIL_ADDRESS, NAV_ITEMS, SECTION_IDS, isNavbarScrolled } from '../../data';
import { useTheme } from '../../hooks/useTheme';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { scrollToSection } from '../../lib/scroll';
import { cn } from '../../lib/cn';
import Container from '../ui/Container';
import { ButtonLink } from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeId = useScrollSpy(SECTION_IDS);

  useLockBodyScroll(open);

  useEffect(() => {
    const onScroll = () => setScrolled(isNavbarScrolled(window.scrollY));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const handleNav = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    scrollToSection(href, 24);
  };

  const socials = CONTACT_LINKS.filter((link) => link.id !== 'email');

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
          scrolled || open
            ? 'border-line bg-canvas-glass backdrop-blur-md'
            : 'border-transparent bg-transparent',
        )}
      >
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-20">
        {/* Brand */}
        <a
          href="#"
          onClick={(event) => handleNav(event, '#')}
          aria-label="Min Thant Kyaw — home"
          className="group flex items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-lg bg-ink font-display text-sm font-bold leading-none text-canvas transition-colors duration-200 group-hover:bg-accent group-hover:text-canvas"
          >
            M
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-ink sm:text-[15px]">
            minthantkyaw<span className="text-accent">.dev</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) => handleNav(event, item.href)}
                aria-current={active ? 'location' : undefined}
                className={cn(
                  'group relative py-2 text-sm font-medium transition-colors duration-200',
                  active ? 'text-ink' : 'text-muted hover:text-ink',
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-x-0 bottom-0 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300',
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                  )}
                />
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={CV_URL}
            download
            aria-label="Download CV"
            title="Download CV"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <Download className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-line-strong hover:text-ink"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <span className="hidden sm:inline-flex">
            <ButtonLink
              href="#contact"
              size="sm"
              onClick={(event) => handleNav(event, '#contact')}
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </ButtonLink>
          </span>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink transition-colors duration-200 hover:border-line-strong lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>
      </header>

      {/* Mobile navigation */}
      {open && (
        <div
          id="mobile-navigation"
          className="animate-fade-in fixed inset-x-0 bottom-0 top-16 z-[45] overflow-y-auto border-t border-line bg-canvas sm:top-20 lg:hidden"
        >
          <Container className="flex min-h-full flex-col py-8">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {NAV_ITEMS.map((item) => {
                const active = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(event) => handleNav(event, item.href)}
                    aria-current={active ? 'location' : undefined}
                    className="group flex items-center justify-between border-b border-line py-4"
                  >
                    <span
                      className={cn(
                        'font-display text-2xl font-medium tracking-tight transition-colors',
                        active ? 'text-accent' : 'text-ink group-hover:text-accent',
                      )}
                    >
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto pt-10">
              <a
                href={CV_URL}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>

              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Email
              </p>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="mt-2 inline-block break-all font-display text-lg text-ink hover:text-accent"
              >
                {EMAIL_ADDRESS}
              </a>
              <div className="mt-5 flex flex-wrap gap-5 text-sm font-medium">
                {socials.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
