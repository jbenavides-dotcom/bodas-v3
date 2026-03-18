
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import LangToggle from './LangToggle';
import { BOOKING_URL } from '../constants';
import { trackWhatsAppClick } from '../hooks/useAnalytics';
import { useI18n } from '../i18n';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-brand-dark/95 backdrop-blur-xl py-2 sm:py-3 shadow-xl' : 'bg-transparent py-4 sm:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-shrink-0"
          aria-label="La Palma & El Tucán — Inicio"
        >
          <Logo variant="light" size="md" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <LangToggle />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-brand-pink text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5"
            onClick={() => trackWhatsAppClick('navbar_desktop')}
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} style={{ top: scrolled ? '57px' : '73px' }}>
        <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md" onClick={() => setIsOpen(false)} />
        <nav className="relative flex flex-col items-center justify-center gap-8 h-full">
          <a href="#story" className="text-2xl font-serif text-white hover:text-brand-gold transition-colors" onClick={() => setIsOpen(false)}>{t('nav.story')}</a>
          <a href="#gallery" className="text-2xl font-serif text-white hover:text-brand-gold transition-colors" onClick={() => setIsOpen(false)}>{t('nav.gallery')}</a>
          <a href="#location" className="text-2xl font-serif text-white hover:text-brand-gold transition-colors" onClick={() => setIsOpen(false)}>{t('nav.location')}</a>
          <LangToggle />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { trackWhatsAppClick('navbar_mobile'); setIsOpen(false); }}
            className="bg-brand-pink text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-brand-pink/90 transition-all duration-200 mt-4"
          >
            {t('nav.cta')}
          </a>
        </nav>
      </div>
    </header>
  );
}
