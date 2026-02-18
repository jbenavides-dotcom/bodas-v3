
import React from 'react';
import { X, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EventTypes: React.FC = () => {
  const reveal = useScrollReveal();

  const typical = [
    '200+ invitados apretados',
    'Flores genéricas de catálogo',
    'Comida de banquete industrial',
    'Fotos en escenario artificial',
    'Salón cerrado sin ventanas',
    'Hospedaje por tu cuenta',
  ];

  const laPalma = [
    '40 invitados, finca entera tuya',
    'Flores silvestres del bosque de niebla',
    'Gastronomía farm-to-table de la finca',
    'Fotos entre cafetales de clase mundial',
    'Ceremonia al aire libre con montañas',
    '10 cabañas boutique para todos',
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div ref={reveal.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-12 sm:mb-16 text-center">
          Esto <span className="italic text-brand-pink">no</span> es un salón de eventos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Columna izquierda - Típico */}
          <div className="bg-neutral-50 rounded-2xl p-8 sm:p-10 border border-neutral-200">
            <h3 className="text-neutral-400 font-bold uppercase text-xs tracking-widest mb-8">Salón de eventos típico</h3>
            <ul className="space-y-5">
              {typical.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <span className="text-neutral-400 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha - La Palma */}
          <div className="bg-brand-dark rounded-2xl p-8 sm:p-10 border border-white/10">
            <h3 className="text-[#FF8F00] font-bold uppercase text-xs tracking-widest mb-8">Tu boda en La Palma</h3>
            <ul className="space-y-5">
              {laPalma.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-white/90 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
