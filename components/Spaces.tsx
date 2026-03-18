
import React from 'react';
import { ASSETS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n';

const Spaces: React.FC = () => {
  const reveal = useScrollReveal();
  const { t } = useI18n();

  const experiences = [
    {
      image: ASSETS.COFFEE_TOUR,
      title: t('spaces.0.title'),
      text: t('spaces.0.text'),
    },
    {
      image: ASSETS.MESA_RECEPCION,
      title: t('spaces.1.title'),
      text: t('spaces.1.text'),
    },
    {
      image: ASSETS.CABANA,
      title: t('spaces.2.title'),
      text: t('spaces.2.text'),
    },
  ];

  return (
    <section id="spaces" className="py-16 sm:py-24 lg:py-32 bg-brand-light">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <p className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-4 text-center">{t('spaces.badge')}</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-12 sm:mb-16 text-center">
          {t('spaces.title.pre')}<br className="hidden sm:block" />
          <span className="italic text-brand-pink">{t('spaces.title.em')}</span>
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
