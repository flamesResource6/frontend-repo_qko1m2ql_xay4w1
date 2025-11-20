import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.08),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Logos />
        <Features />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-400">
          © {new Date().getFullYear()} StackForge AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
