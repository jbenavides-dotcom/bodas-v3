
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import EventTypes from './components/EventTypes';
import ExperienceJourney from './components/ExperienceJourney';
import Spaces from './components/Spaces';
import Activities from './components/Activities';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Sustainability from './components/Sustainability';
import LocationSection from './components/LocationSection';
import Logo from './components/Logo';
import { BOOKING_URL, ASSETS, SOCIAL_LINKS, CONTACT_INFO } from './constants';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { trackWhatsAppClick, trackEmailClick, trackPhoneClick, trackSocialClick, initScrollTracking } from './hooks/useAnalytics';
import { useI18n } from './i18n';

const App: React.FC = () => {
  useEffect(() => { initScrollTracking(); }, []);
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-brand-light selection:bg-[#DC2626]/30 selection:text-brand-dark">
      <Navbar />

      <main>
        <Hero />
        <WhySection />
        <EventTypes />
        <Gallery />
        <Spaces />
        <Activities />
        <ExperienceJourney />
        <Testimonials />
        <Sustainability />
        <LocationSection />

        {/* CTA Final */}
        <section className="relative py-28 sm:py-36 lg:py-48 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={ASSETS.CTA_BG} className="w-full h-full object-cover" alt="" loading="lazy" />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 sm:mb-8">
              <span className="italic">{t('cta.title')}</span>
            </h3>
            <p className="text-white/60 text-lg sm:text-xl md:text-2xl font-light mb-12 sm:mb-16">
              {t('cta.subtitle')}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#DC2626] text-white px-10 sm:px-14 py-5 sm:py-6 font-bold uppercase text-xs tracking-widest hover:bg-[#B91C1C] hover:scale-105 transition-all shadow-2xl rounded-lg active:scale-95"
              onClick={() => trackWhatsAppClick('cta_final')}
            >
              {t('cta.button')} <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-6 text-white/30 text-xs">
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Consulta boda en La Palma & El Tucán`}
                className="hover:text-white/60 transition-colors"
                onClick={() => trackEmailClick('cta_final')}
              >
                {t('cta.email.pre')}{CONTACT_INFO.email}
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer - Simplificado */}
      <footer id="footer" className="bg-brand-dark py-16 sm:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-10">
            <Logo variant="light" size="md" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-white/40 font-bold text-[10px] uppercase tracking-widest mb-10">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors" onClick={() => trackSocialClick('instagram')}>Instagram</a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors" onClick={() => trackSocialClick('facebook')}>Facebook</a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors" onClick={() => trackSocialClick('tiktok')}>TikTok</a>
            <a href={SOCIAL_LINKS.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors" onClick={() => trackSocialClick('website')}>Web</a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-white/30 text-xs mb-10">
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors" onClick={() => trackEmailClick('footer')}>{CONTACT_INFO.email}</a>
            <span className="hidden sm:block">·</span>
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors" onClick={() => trackPhoneClick('footer')}>{CONTACT_INFO.phoneDisplay}</a>
            <span className="hidden sm:block">·</span>
            <span>{CONTACT_INFO.address}</span>
          </div>

          <div className="text-center text-white/15 text-[8px] uppercase tracking-[0.4em] font-bold">
            {t('footer.copyright').replace('{year}', String(new Date().getFullYear()))}
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button - Amber */}
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] w-14 h-14 sm:w-16 sm:h-16 bg-[#DC2626] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-[#B91C1C] active:scale-95 transition-all duration-300"
        aria-label="Cotizar boda por WhatsApp"
        onClick={() => trackWhatsAppClick('floating_button')}
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
};

export default App;
