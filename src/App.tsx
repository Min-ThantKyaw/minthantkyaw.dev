import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Hero from './components/sections/Hero';
import Expertise from './components/sections/Expertise';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Stack from './components/sections/Stack';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Expertise />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
