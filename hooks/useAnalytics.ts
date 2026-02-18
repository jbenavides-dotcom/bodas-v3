declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const LP = 'bodas_v3';

export const trackEvent = (eventName: string, params?: Record<string, string>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', `${LP}__${eventName}`, { ...params, landing_page: LP });
  }
};

export const trackWhatsAppClick = (location: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'conversion',
    event_label: location,
    page: window.location.pathname,
  });
};

export const trackEmailClick = (location: string) => {
  trackEvent('email_click', {
    event_category: 'conversion',
    event_label: location,
    page: window.location.pathname,
  });
};

export const trackPhoneClick = (location: string) => {
  trackEvent('phone_click', {
    event_category: 'conversion',
    event_label: location,
    page: window.location.pathname,
  });
};

export const trackSocialClick = (network: string) => {
  trackEvent('social_click', {
    event_category: 'engagement',
    event_label: network,
    page: window.location.pathname,
  });
};

export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;
  const thresholds = [25, 50, 75, 90];
  const fired = new Set<number>();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const percent = Math.round((scrollTop / docHeight) * 100);

    for (const t of thresholds) {
      if (percent >= t && !fired.has(t)) {
        fired.add(t);
        trackEvent('scroll_depth', {
          event_category: 'engagement',
          event_label: `${t}%`,
          page: window.location.pathname,
        });
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};
