'use client';
import { useEffect } from 'react';
import { trackEvent } from '../../lib/analytics';
import { BOOKING_URL } from '../../lib/locations';

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const url = new URL(anchor.href, window.location.origin);
      if (url.protocol === 'tel:') trackEvent('phone_click');
      else if (url.origin === window.location.origin && url.pathname === '/appointments') trackEvent('consultation_click');
      else if (url.href === BOOKING_URL) trackEvent('booking_provider_click');
      else if (url.hostname === 'www.google.com' && url.pathname === '/maps/dir/') trackEvent('directions_click');
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
