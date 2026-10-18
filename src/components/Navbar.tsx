import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
          ? 'bg-[#0B4F4A]/85 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5'
          : 'bg-[#0F766E] border-b border-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-1.5 text-lg sm:text-xl font-bold tracking-tight text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] rounded-sm"
          aria-label="Min Thant Kyaw - Home"
        >
          <span>MinThantKyaw</span>
          <span
            className="w-2 h-2 rounded-full bg-[#20C9C3] inline-block transition-all duration-300 group-hover:scale-125 group-hover:bg-[#E6FFFC]"
            aria-hidden="true"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-white/90"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link-underline py-1 text-white/90 hover:text-white transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] rounded-xs"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="p-2 text-white hover:text-[#E6FFFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-200" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-white/10 bg-[#0B4F4A]/98 backdrop-blur-xl px-6 py-5 shadow-2xl animate-fadeIn text-white"
        >
          <nav className="flex flex-col gap-4 text-base font-medium text-white/90" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors duration-200 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-teal-200/60 text-xs font-mono">→</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
