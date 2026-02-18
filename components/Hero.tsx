
import React from 'react';
import { BOOKING_URL, ASSETS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { trackWhatsAppClick } from '../hooks/useAnalytics';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end justify-center overflow-hidden pb-20 sm:pb-28">
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.HERO_FULL}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
          alt="Boda íntima en La Palma & El Tucán"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif mb-8 sm:mb-12 leading-[1.1] text-white tracking-tight">
          40 Personas. 10 Cabañas.<br />
          <span className="italic text-brand-beige">Un Cafetal de Ensueño.</span><br />
          Tu Boda.
        </h1>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#DC2626] text-white px-8 sm:px-12 py-4 sm:py-5 font-bold uppercase text-xs sm:text-sm tracking-widest hover:bg-[#B91C1C] hover:scale-105 transition-all shadow-2xl rounded-lg active:scale-95"
          onClick={() => trackWhatsAppClick('hero_cta')}
        >
          Esto Es Lo Que Quiero
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
