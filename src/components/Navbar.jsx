import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

function NavLink({ children }) {
  return (
    <a href="#" className="text-slate-200 hover:text-white transition-colors">
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-blue-500/30 blur-xl" />
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
                  <Sparkles size={18} />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight">StackForge AI</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink>Product</NavLink>
              <NavLink>How it works</NavLink>
              <NavLink>Pricing</NavLink>
              <NavLink>Contact</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-slate-200 hover:text-white">Log in</a>
              <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-slate-900 font-medium hover:opacity-90 transition">
                Get started
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(p => !p)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-4">
              <div className="grid gap-3 text-sm">
                <NavLink>Product</NavLink>
                <NavLink>How it works</NavLink>
                <NavLink>Pricing</NavLink>
                <NavLink>Contact</NavLink>
              </div>
              <div className="flex gap-3">
                <a href="#" className="flex-1 rounded-lg border border-white/10 px-4 py-2 text-center text-slate-200">Log in</a>
                <a href="#cta" className="flex-1 rounded-lg bg-white px-4 py-2 text-center text-slate-900 font-medium">Get started</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
