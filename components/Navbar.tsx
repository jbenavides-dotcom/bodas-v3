
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BOOKING_URL } from '../constants';
import { trackWhatsAppClick } from '../hooks/useAnalytics';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-brand-dark/95 backdrop-blur-xl py-2 sm:py-3 shadow-xl' : 'bg-transparent py-4 sm:py-6 lg:py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#hero" className="flex items-center" aria-label="Ir al inicio">
          <span className="text-sm sm:text-base md:text-lg font-serif font-bold tracking-tight">
            <span className="text-brand-gold">LA PALMA</span>
            <span className="text-brand-pink mx-1">&</span>
            <span className="text-brand-gold">EL TUCÁN</span>
          </span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center bg-[#FF8F00] hover:bg-[#F57C00] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 rounded-lg"
            onClick={() => trackWhatsAppClick('navbar_desktop')}
          >
            Quiero Esto
          </a>

          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden absolute top-full left-0 right-0 bg-brand-dark/98 backdrop-blur-xl border-t border-white/5 transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[100vh]' : 'max-h-0'
      }`}>
        <div className="flex flex-col p-6 sm:p-10 space-y-6">
          <a href="#story" className="text-xl font-serif text-white hover:text-[#FF8F00] transition-colors" onClick={() => setIsOpen(false)}>La Historia</a>
          <a href="#gallery" className="text-xl font-serif text-white hover:text-[#FF8F00] transition-colors" onClick={() => setIsOpen(false)}>Galería</a>
          <a href="#location" className="text-xl font-serif text-white hover:text-[#FF8F00] transition-colors" onClick={() => setIsOpen(false)}>Ubicación</a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { trackWhatsAppClick('navbar_mobile'); setIsOpen(false); }}
            className="bg-[#FF8F00] hover:bg-[#F57C00] text-white px-6 py-4 text-center text-xs font-bold uppercase tracking-widest mt-4 active:scale-95 transition-transform rounded-xl"
          >
            Quiero Esto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
