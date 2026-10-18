import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFDFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-[#E6FFFC] dark:selection:bg-[#0F766E]/40 selection:text-[#0F766E] dark:selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <main id="main-content">
        <Hero />

        {/* 3. Expertise Section */}
        <Expertise />

        {/* Placeholder anchors for upcoming sections (nav + scroll targets) */}
        <div id="experience" className="sr-only" tabIndex={-1} aria-hidden="true" />
        <div id="projects" className="sr-only" tabIndex={-1} aria-hidden="true" />
        <div id="stack" className="sr-only" tabIndex={-1} aria-hidden="true" />
        <div id="contact" className="sr-only" tabIndex={-1} aria-hidden="true" />
      </main>
    </div>
  );
}
