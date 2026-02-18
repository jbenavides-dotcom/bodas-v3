
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Navigation } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const LocationSection: React.FC = () => {
  const reveal = useScrollReveal();

  return (
    <section id="location" className="py-12 sm:py-16 lg:py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={reveal.ref} className={`bg-brand-dark rounded-2xl sm:rounded-[2.5rem] lg:rounded-[4rem] p-6 sm:p-10 lg:p-16 xl:p-24 text-white overflow-hidden relative ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-brand-pink/10 blur-[100px] rounded-full"></div>
          <div className="flex flex-col items-center justify-center text-center relative z-10">
            <Navigation className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-brand-pink mb-6 sm:mb-8 lg:mb-10" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-4 sm:mb-6">Ubicación Estratégica</h3>
            <p className="text-white/60 mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base leading-relaxed max-w-xl">
              Estamos en Zipacón, Cundinamarca. Un refugio mágico a solo 90 minutos de Bogotá, perfecto para una celebración lejos del ruido de la ciudad.
            </p>
            <a
              href={CONTACT_INFO.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-pink text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-brand-pink transition-all shadow-xl active:scale-95 rounded-lg"
              aria-label="Ver ubicación en Google Maps"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
