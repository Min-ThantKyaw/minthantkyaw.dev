import { useState, useEffect } from 'react';
import { ArrowRight, Mail, MapPin, Calendar, ChevronDown, Sparkles, Code2 } from 'lucide-react';
import { PROFILE_INFO } from '../utils/portfolio';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between bg-[#FBFDFC] text-slate-900 overflow-hidden pt-24 pb-6 sm:pt-32 sm:pb-10"
      aria-label="Hero Introduction"
    >
      {/* Subtle top gradient wash */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[#E6FFFC]/70 via-[#E6FFFC]/30 to-transparent"
        aria-hidden="true"
      />

      <div className="relative flex-1 max-w-6xl w-full mx-auto px-5 sm:px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full my-auto">
          {/* LEFT: copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
            {/* 1. Availability badge */}
            <div
              className={`transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#20C9C3] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20C9C3]" />
                </span>
                <span className="text-xs font-medium text-slate-600 tracking-wide">
                  {PROFILE_INFO.availabilityStatus}
                </span>
              </div>
            </div>

            {/* 2. Greeting + name */}
            <div
              className={`space-y-2 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <p className="text-sm sm:text-base font-medium text-[#0F766E]">{PROFILE_INFO.greeting}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 tracking-tight leading-[1.1]">
                {PROFILE_INFO.name}
              </h1>
            </div>

            {/* 3. Role */}
            <div
              className={`transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-400">
                {PROFILE_INFO.role}
              </p>
            </div>

            {/* 4. Description */}
            <div
              className={`transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                {PROFILE_INFO.description}
              </p>
            </div>

            {/* 5. Meta (location + age) */}
            <div
              className={`flex items-center gap-6 text-sm text-slate-600 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#20C9C3]" />
                {PROFILE_INFO.location.value}
              </span>
              <span className="w-px h-4 bg-slate-200" aria-hidden="true" />
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#20C9C3]" />
                <span className="tabular-nums">{PROFILE_INFO.age.value} years old</span>
              </span>
            </div>

            {/* 6. CTAs */}
            <div
              className={`flex flex-row items-center gap-3 sm:gap-4 pt-1 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F766E] text-white text-sm sm:text-base font-medium shadow-sm hover:bg-[#0B4F4A] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] focus-visible:ring-offset-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-800 text-sm sm:text-base font-medium border border-slate-200 hover:border-[#20C9C3] hover:text-[#0F766E] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] focus-visible:ring-offset-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT: photo card */}
          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[360px]">
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_24px_60px_-24px_rgba(15,118,110,0.25)]">
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt="Min Thant Kyaw"
                    onError={() => setImageError(true)}
                    className="w-full aspect-square object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full aspect-square flex flex-col items-center justify-center bg-[#F8FAFC] text-slate-700 p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#E6FFFC] text-[#0F766E] flex items-center justify-center mb-3">
                      <Code2 className="w-9 h-9" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">Min Thant Kyaw</span>
                    <span className="text-xs text-slate-400 mt-1">/public/profile.jpg</span>
                  </div>
                )}
              </div>

              {/* Floating role chip */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-lg whitespace-nowrap">
                <Sparkles className="w-4 h-4 text-[#20C9C3]" />
                <span className="text-xs font-semibold text-slate-800">Frontend Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`relative w-full flex justify-center pt-6 transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '650ms' }}
      >
        <a
          href="#about"
          onClick={handleScrollClick}
          className="group flex flex-col items-center gap-1.5 text-slate-400 hover:text-[#0F766E] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] rounded-full p-2"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

      {/* Hidden section anchors */}
      <div id="about" className="sr-only" tabIndex={-1} aria-hidden="true" />
      <div id="expertise" className="sr-only" tabIndex={-1} aria-hidden="true" />
      <div id="projects" className="sr-only" tabIndex={-1} aria-hidden="true" />
      <div id="stack" className="sr-only" tabIndex={-1} aria-hidden="true" />
      <div id="contact" className="sr-only" tabIndex={-1} aria-hidden="true" />
    </section>
  );
}
