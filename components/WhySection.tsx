
import React from 'react';
import { ASSETS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WhySection: React.FC = () => {
  const reveal = useScrollReveal();

  return (
    <section id="story" className="py-20 sm:py-28 lg:py-36 bg-brand-light">
      <div ref={reveal.ref} className={`max-w-4xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>

        <p className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-8 sm:mb-12 text-center">Una historia real</p>

        <div className="space-y-8 sm:space-y-12">
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-dark leading-relaxed text-center italic">
            "Cuando llegamos a La Palma y vimos la neblina entre los cafetales, supimos que era aquí."
          </p>

          <div className="rounded-2xl overflow-hidden aspect-[16/9]">
            <img
              src={ASSETS.PAREJA_ARCOIRIS}
              alt="Pareja en los cafetales"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-neutral-600 font-light text-base sm:text-lg leading-relaxed">
            <p>
              No necesitábamos un salón con arañas de cristal ni un venue para 200 personas. Queríamos algo real. Nuestros 35 invitados más cercanos, cafetales infinitos, el sonido de los colibríes al amanecer.
            </p>
            <p>
              Nos casamos entre hileras de café Gesha, con las montañas de fondo. Nuestros amigos cosecharon cerezas de café esa mañana. En la noche, cenamos bajo las estrellas con ingredientes que crecen a metros de la mesa.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[16/9]">
            <img
              src={ASSETS.VOTOS}
              alt="Intercambio de votos"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-neutral-600 font-light text-base sm:text-lg leading-relaxed">
            <p>
              Cada invitado se fue con una bolsa de café de especialidad cosechada en la misma finca donde celebramos. Aún hoy, cuando preparan ese café en su casa, nos dicen que reviven ese fin de semana.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[16/9]">
            <img
              src={ASSETS.ABRAZO_DORADA}
              alt="Abrazo en la hora dorada"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <p className="text-lg sm:text-xl font-serif text-brand-dark text-center italic">
            "No fue una boda. Fue un fin de semana que transformó nuestra relación con cada persona que estuvo ahí."
          </p>
          <p className="text-sm text-neutral-400 text-center">
            — Valentina & Andrés, Marzo 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
