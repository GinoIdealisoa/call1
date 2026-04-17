import { useState, useEffect } from 'react';
import { Menu, X, Headphones } from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-brand-950/95 backdrop-blur-xl shadow-2xl shadow-brand-900/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-2xl font-extrabold text-white tracking-tight">
            IP<span className="text-blue-400">NAT</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {['Accueil', 'Services', 'Avantages', 'Contact','Demo'].map((item, i) => (
            <a
              key={i}
              href={`#section-${i}`}
              className="text-sm font-medium text-gray-300 hover:text-black transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a
            href="#section-3"
            className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Démarrer
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-950/98 backdrop-blur-xl border-t border-white/5 mt-2">
          <div className="px-6 py-4 flex flex-col gap-4">
            {['Accueil', 'Services', 'Avantages', 'Contact'].map((item, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                onClick={() => setMobileOpen(false)}
                className="text-gray-300 hover:text-black py-2 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#section-3"
              className="mt-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl text-center"
            >
              Démarrer un essai
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;