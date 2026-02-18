
import React from 'react';
import { ASSETS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    image: ASSETS.COFFEE_TOUR,
    title: 'Van a cosechar café de campeonato mundial',
    text: 'Tus invitados van a caminar entre cafetales Gesha y Sidra, cosechando cerezas con sus propias manos.',
  },
  {
    image: ASSETS.MESA_RECEPCION,
    title: 'Van a cenar bajo las estrellas entre cafetales',
    text: 'Mesa larga, luces colgantes, gastronomía farm-to-table. Todo crece a metros de donde cenan.',
  },
  {
    image: ASSETS.CABANA,
    title: 'Van a despertar con colibríes en su balcón',
    text: '10 cabañas boutique rodeadas de bosque de niebla. Cada invitado vive la experiencia completa.',
  },
];

const Spaces: React.FC = () => {
  const reveal = useScrollReveal();

  return (
    <section id="spaces" className="py-16 sm:py-24 lg:py-32 bg-brand-light">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <p className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-4 text-center">La experiencia</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-12 sm:mb-16 text-center">
          La boda que tus invitados <br className="hidden sm:block" />
          <span className="italic text-brand-pink">van a recordar</span>
        </h2>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/7] sm:aspect-[21/9]">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white mb-2 sm:mb-3">{exp.title}</h3>
                <p className="text-white/70 text-sm sm:text-base font-light max-w-xl">{exp.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spaces;
