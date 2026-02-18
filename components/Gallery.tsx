
import React from 'react';
import { ASSETS } from '../constants';
import { Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const galleryImages = [
  { src: ASSETS.CEREMONIA, alt: 'Ceremonia' },
  { src: ASSETS.ABRAZO_DORADA, alt: 'Abrazo hora dorada' },
  { src: ASSETS.VOTOS, alt: 'Votos' },
  { src: ASSETS.MESA_RECEPCION, alt: 'Mesa recepción' },
  { src: ASSETS.NOVIA_RIENDO, alt: 'Novia riendo' },
  { src: ASSETS.CHAMPAGNE, alt: 'Champagne' },
  { src: ASSETS.ARCO_FLORAL, alt: 'Arco floral' },
  { src: ASSETS.PAREJA_BAR, alt: 'Pareja bar' },
  { src: ASSETS.SALIDA_CONFETI, alt: 'Confeti' },
];

const Gallery: React.FC = () => {
  const reveal = useScrollReveal();

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-brand-dark">
      <div ref={reveal.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <p className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-4 text-center">Momentos reales</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-12 sm:mb-16 text-center">
          No se puede <span className="italic text-brand-beige">inventar</span> esto
        </h2>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group relative aspect-square overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
