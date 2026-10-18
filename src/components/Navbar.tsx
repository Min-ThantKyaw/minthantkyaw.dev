import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, isNavbarScrolled, DEFAULT_SCROLL_THRESHOLD } from '../utils/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(isNavbarScrolled(window.scrollY, DEFAULT_SCROLL_THRESHOLD));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/70 shadow-[0_1px_0_0_rgba(15,23,42,0.03)] py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] rounded-lg"
          aria-label="Min Thant Kyaw - Home"
        >
          <span className="w-8 h-8 grid place-items-center rounded-lg bg-[#0F766E] text-white font-serif text-base leading-none transition-colors duration-300 group-hover:bg-[#0B4F4A]">
            M
          </span>
          <span className="text-lg">MinThantKyaw<span className="text-[#0F766E]">.</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link-underline py-1 hover:text-slate-900 transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] rounded-xs"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium transition-all duration-200 hover:bg-[#0F766E] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] focus-visible:ring-offset-2"
        >
          Let's talk
          <ArrowUpRight className="w-4 h-4" />
        </a>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-slate-200/70 bg-white/95 backdrop-blur-xl px-5 py-5 shadow-lg animate-fadeIn"
        >
          <nav className="flex flex-col gap-1 text-base font-medium text-slate-700" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3.5 rounded-lg hover:bg-[#E6FFFC]/60 hover:text-[#0F766E] transition-colors duration-200 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-slate-300 text-sm">→</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium"
            >
              Let's talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
