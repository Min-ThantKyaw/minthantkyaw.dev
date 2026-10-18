import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFDFC] text-slate-900 font-sans antialiased selection:bg-[#E6FFFC] selection:text-[#0F766E]">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <main id="main-content">
        <Hero />
      </main>
    </div>
  );
}
