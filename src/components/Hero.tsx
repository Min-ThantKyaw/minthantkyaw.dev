import { useState, useEffect } from 'react';
import { ArrowRight, Mail, MapPin, User } from 'lucide-react';
import { PROFILE_INFO } from '../utils/portfolio';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight * 0.85,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#0F766E] via-[#0E7068] to-[#0B544E] text-white overflow-hidden pt-24 pb-6 sm:pt-32 sm:pb-12"
      aria-label="Hero Introduction"
    >
      {/* Ambient subtle aqua contour glow rings matching reference */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#20C9C3]/15 blur-3xl opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-[#E6FFFC]/10 blur-3xl opacity-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 w-[450px] h-[450px] rounded-full bg-[#20C9C3]/10 blur-3xl opacity-40"
        aria-hidden="true"
      />

      {/* Main Content Area: Photo on Left, Content & CTAs on Right (side-by-side) */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center w-full my-auto">
          
          {/* LEFT SIDE: Photo inside organic pebble/squircle frame */}
          <div
            className={`lg:col-span-5 flex justify-center lg:justify-start transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[400px]">
              
              {/* Outer soft organic contour rim */}
              <div
                className="absolute -inset-2.5 sm:-inset-4 rounded-[36px] sm:rounded-[52px] bg-gradient-to-tr from-[#20C9C3]/20 via-white/10 to-[#E6FFFC]/15 blur-sm opacity-90 animate-gentle-pulse"
                aria-hidden="true"
              />

              {/* Secondary decorative subtle outline ring */}
              <div
                className="absolute -inset-1 sm:-inset-2 rounded-[32px] sm:rounded-[46px] border border-white/20 bg-white/5 pointer-events-none"
                aria-hidden="true"
              />

              {/* Photo Container Frame */}
              <div className="relative z-10 aspect-[4/4.3] sm:aspect-square w-full rounded-[28px] sm:rounded-[40px] overflow-hidden bg-[#0B544E] border border-white/30 shadow-2xl">
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt="Min Thant Kyaw"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0F766E] to-[#0B544E] text-white p-6 text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/15 backdrop-blur-md shadow-inner flex items-center justify-center font-bold text-xl sm:text-2xl text-white border border-white/30 mb-3 font-serif">
                      MTK
                    </div>
                    <span className="text-base sm:text-lg font-semibold text-white">Min Thant Kyaw</span>
                    <span className="text-xs text-teal-200/80 mt-1">/public/profile.jpg</span>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Info, Typography, and Side-by-Side CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-6 lg:space-y-7">
            
            {/* 1. Availability Pill Badge */}
            <div
              className={`transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 shadow-sm">
                <span
                  className="w-2 h-2 rounded-full bg-[#20C9C3] shadow-[0_0_8px_#20C9C3] inline-block animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-white uppercase">
                  {PROFILE_INFO.availabilityStatus}
                </span>
              </div>
            </div>

            {/* 2. Greeting & Name */}
            <div
              className={`space-y-0.5 sm:space-y-1 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <p className="text-base sm:text-xl lg:text-2xl text-teal-100 font-light tracking-wide">
                {PROFILE_INFO.greeting}
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium text-white tracking-tight leading-tight">
                {PROFILE_INFO.name}
              </h1>
            </div>

            {/* 3. Role / Headline */}
            <div
              className={`transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <p className="text-base sm:text-xl lg:text-2xl font-bold tracking-widest text-[#E6FFFC] uppercase">
                {PROFILE_INFO.role}
              </p>
            </div>

            {/* 4. Description */}
            <div
              className={`transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              <p className="text-xs sm:text-sm lg:text-base text-teal-100/90 max-w-lg leading-relaxed font-normal">
                {PROFILE_INFO.description}
              </p>
            </div>

            {/* 5. Location and Age inline with icons */}
            <div
              className={`transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-teal-100/90">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#20C9C3]" />
                  <span>{PROFILE_INFO.location.value}</span>
                </div>
                <span className="text-white/40 font-mono" aria-hidden="true">•</span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#20C9C3]" />
                  <span className="tabular-nums">{PROFILE_INFO.age.value} years old</span>
                </div>
              </div>
            </div>

            {/* 6. CTA Buttons (Side by Side on both mobile and desktop) */}
            <div
              className={`transition-all duration-700 ease-out pt-1 sm:pt-3 w-full sm:w-auto ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Primary Button */}
                <a
                  href="#projects"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-[#0F766E] font-semibold text-xs sm:text-base shadow-lg shadow-black/10 transition-all duration-200 hover:bg-[#E6FFFC] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F766E] cursor-pointer whitespace-nowrap"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>

                {/* Secondary Button */}
                <a
                  href="#contact"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/15 backdrop-blur-md text-white font-medium text-xs sm:text-base border border-white/30 transition-all duration-200 hover:bg-white/25 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F766E] cursor-pointer whitespace-nowrap"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Minimal Scroll Pill matching reference image */}
      <div
        className={`w-full flex justify-center items-center pt-4 sm:pt-6 transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{ transitionDelay: '650ms' }}
      >
        <a
          href="#about"
          onClick={handleScrollClick}
          className="group flex flex-col items-center gap-1 text-teal-100/70 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C9C3] rounded-full p-2"
          aria-label="Scroll to next section"
        >
          <div className="w-5 h-9 rounded-full border-2 border-white/40 group-hover:border-white/80 transition-colors flex justify-center pt-1.5 shadow-2xs">
            <span className="w-1.5 h-2 rounded-full bg-white animate-scroll-pill" />
          </div>
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
