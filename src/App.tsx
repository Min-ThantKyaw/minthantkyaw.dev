import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F766E] text-white font-sans antialiased selection:bg-[#20C9C3]/40 selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <main id="main-content">
        <Hero />
      </main>
    </div>
  );
}
