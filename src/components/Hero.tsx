import { useState, useEffect, Fragment } from 'react';
import { ArrowRight, Mail, MapPin, Calendar, Sparkles, Code2 } from 'lucide-react';
import { PROFILE_INFO } from '../utils/portfolio';
import ScrollDown from './ScrollDown';
import { useTypewriter } from '../hooks/useTypewriter';
import { scrollToSection } from '../utils/scroll';

const ROLES = ['Web Application Developer', 'Backend Developer'] as const;

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const typedRole = useTypewriter(ROLES);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between bg-[#FBFDFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden pt-24 pb-6 sm:pt-32 sm:pb-10"
      aria-label="Hero Introduction"
    >
      {/* Subtle top gradient wash */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[#E6FFFC]/70 via-[#E6FFFC]/30 to-transparent dark:from-[#0F766E]/15 dark:via-[#0F766E]/5"
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#20C9C3] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20C9C3]" />
                </span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300 tracking-wide">
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
              <p className="text-sm sm:text-base font-medium text-[#0F766E] dark:text-[#2DD4BF]">{PROFILE_INFO.greeting}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                {PROFILE_INFO.name}
              </h1>
            </div>

            {/* 3. Role (typewriter) */}
            <div
              className={`transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="min-h-[1.4em] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500">
                {typedRole}
                <span className="ml-0.5 text-[#20C9C3] animate-blink" aria-hidden="true">
                  |
                </span>
              </p>
            </div>

            {/* 4. Description */}
            <div
              className={`transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                {PROFILE_INFO.description}
              </p>
            </div>

            {/* 5. Meta (location + age) */}
            <div
              className={`flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#20C9C3]" />
                {PROFILE_INFO.location.value}
              </span>
              <span className="w-px h-4 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
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
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F766E] text-white text-sm sm:text-base font-medium shadow-sm hover:bg-[#0B4F4A] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-sm sm:text-base font-medium border border-slate-200 dark:border-slate-700 hover:border-[#20C9C3] hover:text-[#0F766E] dark:hover:text-[#2DD4BF] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>

            {/* 7. Stats */}
            <div
              className={`flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-4 w-full border-t border-slate-200/70 dark:border-slate-800 pt-5 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {PROFILE_INFO.stats.map((stat, i) => (
                <Fragment key={stat.label}>
                  {i > 0 && (
                    <span className="w-px h-10 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
                  )}
                  <div>
                    <span className="block text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight tabular-nums">
                      {stat.value}
                    </span>
                    <span className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {stat.label}
                    </span>
                  </div>
                </Fragment>
              ))}
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
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-[0_24px_60px_-24px_rgba(15,118,110,0.25)] dark:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)]">
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt="Min Thant Kyaw"
                    onError={() => setImageError(true)}
                    className="w-full aspect-square object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full aspect-square flex flex-col items-center justify-center bg-[#F8FAFC] dark:bg-slate-800 text-slate-700 dark:text-slate-300 p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#E6FFFC] dark:bg-[#0F766E]/25 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center mb-3">
                      <Code2 className="w-9 h-9" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Min Thant Kyaw</span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 mt-1">/public/profile.jpg</span>
                  </div>
                )}
              </div>

              {/* Floating role chip */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 shadow-lg whitespace-nowrap">
                {/* <Sparkles className="w-4 h-4 text-[#20C9C3]" /> */}
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">Web Developer</span>
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
        <ScrollDown target="expertise" />
      </div>
    </section>
  );
}
