import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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

        {/* 4. Experience Section */}
        <Experience />

        {/* 5. Projects Section */}
        <Projects />

        {/* 6. Stack Section */}
        <Stack />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
}
