
import React from 'react';
import { BOOKING_URL } from '../constants';
import { trackWhatsAppClick } from '../hooks/useAnalytics';

const Activities: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-44 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8 sm:mb-12">
          <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-serif font-bold text-white/10 leading-none block">2</span>
        </div>
        <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-white -mt-16 sm:-mt-24 lg:-mt-32 mb-6 sm:mb-8">
          bodas al mes
        </p>
        <p className="text-white/50 text-base sm:text-lg font-light max-w-lg mx-auto mb-10 sm:mb-14 leading-relaxed">
          Solo realizamos 2 bodas al mes para garantizar exclusividad total. Cada celebración tiene la finca entera.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#FF8F00] text-white px-8 sm:px-12 py-4 sm:py-5 font-bold uppercase text-xs tracking-widest hover:bg-[#F57C00] hover:scale-105 transition-all shadow-2xl rounded-lg active:scale-95"
          onClick={() => trackWhatsAppClick('scarcity_cta')}
        >
          Consultar Disponibilidad
        </a>
      </div>
    </section>
  );
};

export default Activities;
