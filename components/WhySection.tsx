
import React from 'react';
import { ASSETS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n';

const WhySection: React.FC = () => {
  const reveal = useScrollReveal();
  const { t } = useI18n();

  return (
    <section id="story" className="py-20 sm:py-28 lg:py-36 bg-brand-light">
      <div ref={reveal.ref} className={`max-w-4xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>

        <p className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-8 sm:mb-12 text-center">{t('story.badge')}</p>

        <div className="space-y-8 sm:space-y-12">
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-dark leading-relaxed text-center italic">
            {t('story.quote1')}
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
            <p>{t('story.p1')}</p>
            <p>{t('story.p2')}</p>
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
            <p>{t('story.p3')}</p>
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
            {t('story.quote2')}
          </p>
          <p className="text-sm text-neutral-400 text-center">
            {t('story.author')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
