
import React from 'react';
import { NavLink } from './types';
import {
  Heart,
  Wine,
  Utensils,
  Music,
  Home,
  Palette,
  TreePine,
  Coffee,
  PartyPopper,
  Flame,
  Leaf,
} from 'lucide-react';

// ASSETS DE CLOUDINARY - Fotos profesionales de bodas reales (alta resolución)
const CDN = "https://res.cloudinary.com/dkqocgknd/image/upload";
const CDN_ALT = "https://res.cloudinary.com/dsylu9a7k/image/upload";
const FULL = `${CDN}/f_auto,q_auto,w_1200`;  // Hero y fondos full-width
const HQ = `${CDN}/f_auto,q_auto,w_600`;     // Secciones principales
const CARD = `${CDN}/f_auto,q_auto,w_500`;    // Cards y thumbnails

export const ASSETS = {
  // Hero y CTA
  HERO_FULL: `${FULL}/lpet-matrimonios/ceremonia-panoramica-bw.jpg`,
  PAREJA_ARCOIRIS: `${HQ}/lpet-matrimonios/pareja-arcoiris.jpg`,
  CTA_BG: `${FULL}/lpet-matrimonios/dip-romantico.jpg`,
  // Ceremonia
  CEREMONIA: `${HQ}/lpet-matrimonios/salida-confeti-dia.jpg`,
  CEREMONIA_PANORAMICA: `${HQ}/lpet-matrimonios/ceremonia-panoramica-bw.jpg`,
  VOTOS: `${HQ}/lpet-matrimonios/votos-emotivos.jpg`,
  ANILLOS: `${HQ}/lpet-matrimonios/intercambio-anillos.jpg`,
  ARCO_FLORAL: `${HQ}/lpet-matrimonios/pareja-arco-floral.jpg`,
  SALIDA_CONFETI: `${HQ}/lpet-matrimonios/salida-confeti-noche.jpg`,
  // Pareja
  BESO_FRENTE: `${HQ}/lpet-matrimonios/beso-frente.jpg`,
  PAREJA_SONRIENTE: `${HQ}/lpet-matrimonios/pareja-sonriente.jpg`,
  ABRAZO_DORADA: `${HQ}/lpet-matrimonios/abrazo-hora-dorada.jpg`,
  NOVIA_CARCAJADA: `${HQ}/lpet-matrimonios/novia-carcajada.jpg`,
  // Recepción y fiesta
  MESA_RECEPCION: `${HQ}/lpet-matrimonios/mesa-recepcion.jpg`,
  PAREJA_BAR: `${HQ}/lpet-matrimonios/pareja-bar.jpg`,
  DETALLE_FLORAL: `${HQ}/lpet-matrimonios/detalle-floral-mesa.jpg`,
  // Preparativos y alojamiento
  NOVIA_RIENDO: `${HQ}/lpet-matrimonios/novia-riendo.jpg`,
  CHAMPAGNE: `${HQ}/lpet-matrimonios/champagne-preparativos.jpg`,
  NOVIA_HABITACION: `${HQ}/lpet-matrimonios/novia-habitacion.jpg`,
  // Otros
  NOVIO_NATURALEZA: `${HQ}/lpet-matrimonios/novio-naturaleza.jpg`,
  ESCRIBIENDO_VOTOS: `${HQ}/lpet-matrimonios/escribiendo-votos.jpg`,
  JARDIN_BW: `${HQ}/lpet-matrimonios/pareja-jardin-bw.jpg`,
  // Reutilizadas de empresariales
  CAFETALES: `${FULL}/lpet-matrimonios/pareja-arcoiris.jpg`,
  CABANA: `${CDN_ALT}/f_auto,q_auto,w_1000/lpet/cabana-interior.png`,
  COFFEE_TOUR: `${CDN}/f_auto,q_auto,w_1000/lpet-eventos/coffee-tour-guiado.png`,
};

// WHATSAPP RESERVAS
export const WHATSAPP_MATRIMONIOS = "https://wa.me/573189565617?text=Hola%2C%20quiero%20cotizar%20mi%20matrimonio%20en%20La%20Palma%20%26%20El%20Tuc%C3%A1n";
export const BOOKING_URL = WHATSAPP_MATRIMONIOS;

// CONTACTO
export const CONTACT_INFO = {
  email: "reservations@lapalmayeltucan.com",
  phone: "+573189565617",
  phoneDisplay: "(+57) 318 956 5617",
  address: "Zipacón, Cundinamarca, Colombia",
  googleMaps: "https://www.google.com/maps/search/La+Palma+y+El+Tucan+Hotel+Zipacon+Cundinamarca",
  whatsappReservas: "https://wa.me/573189565617",
};

// REDES SOCIALES
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/lapalmayeltucan_hotel/",
  facebook: "https://www.facebook.com/lapalmayeltucanboutiquehotel/",
  tiktok: "https://www.tiktok.com/@lapalmayeltucan_hotel",
  linkedin: "https://www.linkedin.com/company/la-palma-el-tuc%C3%A1n-hotel/",
  website: "https://lapalmayeltucanhotel.com/"
};

// NAV
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Espacios', href: '#spaces' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Contacto', href: '#footer' },
];

// SERVICIOS DE BODA
export const EVENT_TYPES = [
  {
    title: "Ceremonia al Aire Libre",
    description: "Di \"sí, acepto\" rodeado de cafetales, montañas y bosque de niebla.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Recepción & Cóctel",
    description: "Comparte con tus invitados en espacios integrados al paisaje, con vistas abiertas y atmósfera natural.",
    icon: <Wine className="w-6 h-6" />,
  },
  {
    title: "Gastronomía de Origen",
    description: "Propuesta elaborada con ingredientes frescos y locales, inspirada en nuestra huerta y el territorio.",
    icon: <Utensils className="w-6 h-6" />,
  },
  {
    title: "Música en Vivo & DJ",
    description: "Desde un atardecer acústico hasta una celebración vibrante bajo las estrellas.",
    icon: <Music className="w-6 h-6" />,
  },
  {
    title: "Alojamiento entre Cafetales",
    description: "Cabañas privadas para que tus invitados vivan la experiencia completa de fin de semana.",
    icon: <Home className="w-6 h-6" />,
  },
  {
    title: "Ambientación Personalizada",
    description: "Cada detalle se diseña en armonía con el entorno y la esencia de tu historia.",
    icon: <Palette className="w-6 h-6" />,
  },
];

// JOURNEY DE LA EXPERIENCIA
export const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Preparativos entre cafetales",
    description: "Comienza el día en cabañas privadas rodeadas de bosque y montaña. Calma, luz natural y la emoción compartida antes del gran momento.",
    image: ASSETS.CHAMPAGNE,
  },
  {
    number: "02",
    title: "La ceremonia",
    description: "Al aire libre, con el paisaje como testigo y el sonido del bosque como banda sonora. Un escenario que ningún salón puede replicar.",
    image: ASSETS.VOTOS,
  },
  {
    number: "03",
    title: "Cóctel al atardecer",
    description: "Brinda entre cafetales con coctelería artesanal y música en vivo, mientras la montaña se tiñe de dorado.",
    image: ASSETS.PAREJA_BAR,
  },
  {
    number: "04",
    title: "Cena de origen",
    description: "Un banquete inspirado en ingredientes frescos y locales, servido en espacios que se integran con el entorno natural.",
    image: ASSETS.MESA_RECEPCION,
  },
  {
    number: "05",
    title: "Celebración & Recuerdos",
    description: "Risas, abrazos y celebración en un ambiente íntimo, donde cada recuerdo se vive sin prisa.",
    image: ASSETS.SALIDA_CONFETI,
  },
];

// EXPERIENCIAS DE BODA
export const ACTIVITIES = [
  { label: "Ceremonia en la Naturaleza", text: "Un \"sí, acepto\" rodeado de montañas, cafetales y bosque de niebla.", image: ASSETS.CEREMONIA, icon: <TreePine className="w-5 h-5" /> },
  { label: "Recepción con Identidad", text: "Mesas, detalles y gastronomía que reflejan tu esencia en un entorno natural.", image: ASSETS.MESA_RECEPCION, icon: <Wine className="w-5 h-5" /> },
  { label: "Preparativos con Calma", text: "Luz suave, risas compartidas y la emoción de comenzar una nueva etapa.", image: ASSETS.NOVIA_RIENDO, icon: <Heart className="w-5 h-5" /> },
  { label: "Instantes Inolvidables", text: "Miradas, abrazos y atardeceres que quedan grabados para siempre.", image: ASSETS.ABRAZO_DORADA, icon: <Flame className="w-5 h-5" /> },
  { label: "Celebración Íntima", text: "Alegría compartida en un ambiente cercano y lleno de significado.", image: ASSETS.SALIDA_CONFETI, icon: <PartyPopper className="w-5 h-5" /> },
  { label: "Experiencia Cafetera para Invitados", text: "Un recorrido por nuestra finca para que el café también sea parte de tu historia.", image: ASSETS.COFFEE_TOUR, icon: <Coffee className="w-5 h-5" /> },
];

// DIRECCIONES
export const DIRECTIONS = [
  "Salida desde Bogotá por Calle 13 o Carrera 80 hacia Cachipay.",
  "Punto de referencia: Restaurante San Angelo Gourmet (antes de Cachipay).",
  "Desvío en el cruce de Macondo (500 mts).",
  "Paso por el cruce del Camino Real (Km 3.7 - Fundación Erika Verde).",
  "A 1km aprox. encontrarás el desvío señalizado hacia el hotel.",
];

// DATOS DE SOSTENIBILIDAD
export const SUSTAINABILITY_STATS = [
  { value: "70%", label: "Energía Solar" },
  { value: "100%", label: "Materiales Compostables" },
  { value: "100+", label: "Familias Cafeteras" },
  { value: "2.500", label: "Personas Impactadas" },
];
