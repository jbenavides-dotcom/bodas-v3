
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'es' | 'en';

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Navbar
    'nav.cta': 'Quiero Esto',
    'nav.story': 'La Historia',
    'nav.gallery': 'Galería',
    'nav.location': 'Ubicación',

    // Hero
    'hero.h1.line1': '40 Personas. 10 Cabañas.',
    'hero.h1.line2': 'Un Cafetal de Ensueño.',
    'hero.h1.line3': 'Tu Boda.',
    'hero.cta': 'Esto Es Lo Que Quiero',

    // WhySection (Story)
    'story.badge': 'Una historia real',
    'story.quote1': '"Cuando llegamos a La Palma y vimos la neblina entre los cafetales, supimos que era aquí."',
    'story.p1': 'No necesitábamos un salón con arañas de cristal ni un venue para 200 personas. Queríamos algo real. Nuestros 35 invitados más cercanos, cafetales infinitos, el sonido de los colibríes al amanecer.',
    'story.p2': 'Nos casamos entre hileras de café Gesha, con las montañas de fondo. Nuestros amigos cosecharon cerezas de café esa mañana. En la noche, cenamos bajo las estrellas con ingredientes que crecen a metros de la mesa.',
    'story.p3': 'Cada invitado se fue con una bolsa de café de especialidad cosechada en la misma finca donde celebramos. Aún hoy, cuando preparan ese café en su casa, nos dicen que reviven ese fin de semana.',
    'story.quote2': '"No fue una boda. Fue un fin de semana que transformó nuestra relación con cada persona que estuvo ahí."',
    'story.author': '— Pareja casada en La Palma, 2025',

    // EventTypes (Comparison)
    'compare.title.pre': 'Esto ',
    'compare.title.not': 'no',
    'compare.title.post': ' es un salón de eventos',
    'compare.typical.title': 'Salón de eventos típico',
    'compare.typical.0': '200+ invitados apretados',
    'compare.typical.1': 'Flores genéricas de catálogo',
    'compare.typical.2': 'Comida de banquete industrial',
    'compare.typical.3': 'Fotos en escenario artificial',
    'compare.typical.4': 'Salón cerrado sin ventanas',
    'compare.typical.5': 'Hospedaje por tu cuenta',
    'compare.lp.title': 'Tu boda en La Palma',
    'compare.lp.0': '40 invitados, finca entera tuya',
    'compare.lp.1': 'Flores silvestres del bosque de niebla',
    'compare.lp.2': 'Gastronomía farm-to-table de la finca',
    'compare.lp.3': 'Fotos entre cafetales de clase mundial',
    'compare.lp.4': 'Ceremonia al aire libre con montañas',
    'compare.lp.5': '10 cabañas boutique para todos',

    // Gallery
    'gallery.badge': 'Momentos reales',
    'gallery.title.pre': 'No se puede ',
    'gallery.title.em': 'inventar',
    'gallery.title.post': ' esto',

    // Spaces
    'spaces.badge': 'La experiencia',
    'spaces.title.pre': 'La boda que tus invitados ',
    'spaces.title.em': 'van a recordar',
    'spaces.0.title': 'Van a cosechar café de campeonato mundial',
    'spaces.0.text': 'Tus invitados van a caminar entre cafetales Gesha y Sidra, cosechando cerezas con sus propias manos.',
    'spaces.1.title': 'Van a cenar bajo las estrellas entre cafetales',
    'spaces.1.text': 'Mesa larga, luces colgantes, gastronomía farm-to-table. Todo crece a metros de donde cenan.',
    'spaces.2.title': 'Van a despertar con colibríes en su balcón',
    'spaces.2.text': '10 cabañas boutique rodeadas de bosque de niebla. Cada invitado vive la experiencia completa.',

    // Location
    'location.title': 'Ubicación Estratégica',
    'location.description': 'Estamos en Zipacón, Cundinamarca. Un refugio mágico a solo 90 minutos de Bogotá, perfecto para una celebración lejos del ruido de la ciudad.',
    'location.cta': 'Ver en Google Maps',

    // CTA Final
    'cta.title': '¿Es aquí?',
    'cta.subtitle': 'Solo hay una forma de saberlo.',
    'cta.button': 'Escribir por WhatsApp',
    'cta.email.pre': 'o escríbenos a ',

    // Footer
    'footer.copyright': '© {year} La Palma & El Tucán',
  },
  en: {
    // Navbar
    'nav.cta': 'I Want This',
    'nav.story': 'The Story',
    'nav.gallery': 'Gallery',
    'nav.location': 'Location',

    // Hero
    'hero.h1.line1': '40 Guests. 10 Cabins.',
    'hero.h1.line2': 'A Dream Coffee Estate.',
    'hero.h1.line3': 'Your Wedding.',
    'hero.cta': 'This Is What I Want',

    // WhySection (Story)
    'story.badge': 'A real story',
    'story.quote1': '"When we arrived at La Palma and saw the mist between the coffee fields, we knew this was the place."',
    'story.p1': "We didn't need a ballroom with crystal chandeliers or a venue for 200 people. We wanted something real. Our 35 closest guests, endless coffee fields, the sound of hummingbirds at dawn.",
    'story.p2': 'We got married among rows of Gesha coffee, with mountains in the background. Our friends harvested coffee cherries that morning. At night, we dined under the stars with ingredients grown meters from the table.',
    'story.p3': 'Every guest left with a bag of specialty coffee harvested on the same farm where we celebrated. Even today, when they brew that coffee at home, they tell us they relive that weekend.',
    'story.quote2': "\"It wasn't a wedding. It was a weekend that transformed our relationship with every person who was there.\"",
    'story.author': '— Couple married at La Palma, 2025',

    // EventTypes (Comparison)
    'compare.title.pre': 'This ',
    'compare.title.not': "isn't",
    'compare.title.post': ' an event hall',
    'compare.typical.title': 'Typical event hall',
    'compare.typical.0': '200+ guests crammed in',
    'compare.typical.1': 'Generic catalog flowers',
    'compare.typical.2': 'Industrial banquet food',
    'compare.typical.3': 'Photos on artificial sets',
    'compare.typical.4': 'Windowless closed hall',
    'compare.typical.5': 'Lodging on your own',
    'compare.lp.title': 'Your wedding at La Palma',
    'compare.lp.0': '40 guests, the entire farm is yours',
    'compare.lp.1': 'Wild flowers from the cloud forest',
    'compare.lp.2': 'Farm-to-table gastronomy from our estate',
    'compare.lp.3': 'Photos among world-class coffee fields',
    'compare.lp.4': 'Outdoor ceremony with mountain views',
    'compare.lp.5': '10 boutique cabins for everyone',

    // Gallery
    'gallery.badge': 'Real moments',
    'gallery.title.pre': "You can't ",
    'gallery.title.em': 'make this up',
    'gallery.title.post': '',

    // Spaces
    'spaces.badge': 'The experience',
    'spaces.title.pre': 'The wedding your guests ',
    'spaces.title.em': 'will remember',
    'spaces.0.title': "They'll harvest world-championship coffee",
    'spaces.0.text': 'Your guests will walk among Gesha and Sidra coffee fields, harvesting cherries with their own hands.',
    'spaces.1.title': "They'll dine under the stars among coffee fields",
    'spaces.1.text': 'Long table, hanging lights, farm-to-table gastronomy. Everything grows meters from where they dine.',
    'spaces.2.title': "They'll wake up with hummingbirds on their balcony",
    'spaces.2.text': '10 boutique cabins surrounded by cloud forest. Every guest lives the full experience.',

    // Location
    'location.title': 'Strategic Location',
    'location.description': "We're in Zipacón, Cundinamarca. A magical retreat just 90 minutes from Bogotá, perfect for a celebration away from the city noise.",
    'location.cta': 'View on Google Maps',

    // CTA Final
    'cta.title': 'Is this the place?',
    'cta.subtitle': "There's only one way to find out.",
    'cta.button': 'Message on WhatsApp',
    'cta.email.pre': 'or email us at ',

    // Footer
    'footer.copyright': '© {year} La Palma & El Tucán',
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lpet-bodas-lang') as Lang) || 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('lpet-bodas-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  const t = (key: string): string => {
    return translations[lang][key] || translations['es'][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}
