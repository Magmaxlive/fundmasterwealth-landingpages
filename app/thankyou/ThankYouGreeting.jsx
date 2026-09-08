'use client';

import { useEffect } from 'react';

export default function ThankYouGreeting() {
  useEffect(() => {
    /* Current year */
    const yr = document.getElementById('ty-yr');
    if (yr) yr.textContent = String(new Date().getFullYear());

    /* Greet by first name — value came from sessionStorage, never the URL. */
    let name = '';
    try {
      name = sessionStorage.getItem('fm_lead_name') || '';
    } catch {}
    if (name) {
      const first = name.trim().split(/\s+/)[0];
      if (first && first.length < 24) {
        const h = document.getElementById('ty-head');
        if (h) h.textContent = 'Thanks, ' + first + ' — we’ve got your details.';
      }
      try {
        sessionStorage.removeItem('fm_lead_name');
      } catch {}
    }

    /* GTM/GA4 hook */
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'lead_form_success', form_name: 'first_home_buyer_check' });
  }, []);

  return null;
}
