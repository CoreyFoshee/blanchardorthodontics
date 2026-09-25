export type SiteEvent = 'consultation_click' | 'phone_click' | 'directions_click' | 'booking_provider_click' | 'form_submit_attempt' | 'generate_lead';
export type FormName = 'home' | 'locations';

declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; fbq?: (...args: unknown[]) => void; }
}

// Only fixed event names and known form/location identifiers are sent. Never
// include field values, URL query strings, appointment details, or link text.
export function trackEvent(name: SiteEvent, formName?: FormName) {
  if (typeof window === 'undefined') return;
  const office = window.location.pathname === '/locations/tyler-tx' ? 'tyler'
    : window.location.pathname === '/locations/jacksonville-tx' ? 'jacksonville' : 'unspecified';
  const parameters = { office, ...(formName ? { form_name: formName } : {}) };
  if (window.gtag) window.gtag('event', name, parameters);
  else {
    window.dataLayer = window.dataLayer || [];
    // gtag uses the arguments shape, rather than plain arrays.
    function queue(..._args: unknown[]) { window.dataLayer!.push(arguments); }
    queue('event', name, parameters);
  }
}
