'use client';

import { useEffect } from 'react';

export default function PageEffects() {
  useEffect(() => {
    /* ---------- Header stuck state ---------- */
    const hdr = document.getElementById('hdr');
    const onScroll = () => {
      if (hdr) hdr.classList.toggle('is-stuck', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Scroll reveal ---------- */
    const show = (el) => el.classList.add('in');
    let sweepScrollHandler = null;
    let sweepFn = null;
    let io = null;

    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting || e.boundingClientRect.top < 0) {
              show(e.target);
              io && io.unobserve(e.target);
            }
          });
        },
        { threshold: 0, rootMargin: '0px 0px -40px 0px' }
      );

      document.querySelectorAll('.rv').forEach((el, i) => {
        el.style.transitionDelay = Math.min(i % 4, 3) * 0.08 + 's';
        io.observe(el);
      });

      let sweeping = false;
      const sweep = () => {
        sweeping = false;
        const h = window.innerHeight;
        document.querySelectorAll('.rv:not(.in)').forEach((el) => {
          if (el.getBoundingClientRect().top < h) show(el);
        });
      };
      sweepFn = sweep;
      sweepScrollHandler = () => {
        if (!sweeping) {
          sweeping = true;
          requestAnimationFrame(sweep);
        }
      };
      window.addEventListener('scroll', sweepScrollHandler, { passive: true });
      window.addEventListener('load', sweep);
      window.addEventListener('resize', sweep, { passive: true });
      setTimeout(sweep, 1200);
    } else {
      document.querySelectorAll('.rv').forEach(show);
    }

    /* ---------- In-page anchor scrolling ---------- */
    const headerHeight = () => {
      const h = document.getElementById('hdr');
      return h ? h.offsetHeight : 80;
    };
    const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollToTarget = (target) => {
      const gap = 24;
      const y = window.scrollY + target.getBoundingClientRect().top - headerHeight() - gap;
      window.scrollTo({
        top: Math.max(0, y),
        behavior: prefersReduced() ? 'auto' : 'smooth',
      });
    };

    const anchorHandlers = [];
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const href = a.getAttribute('href') || '';
      if (href === '#' || href.length < 2) return;
      const handler = (ev) => {
        const target = document.querySelector(href);
        if (!target) return;
        ev.preventDefault();
        const r = target.getBoundingClientRect();
        const safeTop = headerHeight() + 12;
        if (r.top < safeTop || r.top > window.innerHeight - 120) scrollToTarget(target);
        if (history.replaceState) history.replaceState(null, '', href);
        const form = target.matches('form') ? target : target.querySelector('form');
        if (form) {
          const first = form.querySelector('input, select');
          const wait = prefersReduced() || (r.top >= safeTop && r.top <= window.innerHeight - 120) ? 0 : 620;
          if (first) setTimeout(() => first.focus({ preventScroll: true }), wait);
        }
      };
      a.addEventListener('click', handler);
      anchorHandlers.push([a, handler]);
    });

    const unscrollContainers = () => {
      document.querySelectorAll('.hero, .hero__bg').forEach((el) => {
        if (el.scrollTop) el.scrollTop = 0;
        if (el.scrollLeft) el.scrollLeft = 0;
      });
    };
    ['load', 'hashchange', 'scroll'].forEach((evt) => {
      window.addEventListener(evt, unscrollContainers, { passive: true });
    });
    unscrollContainers();

    const onLoad = () => {
      if (location.hash.length > 1) {
        const t = document.querySelector(location.hash);
        if (t) setTimeout(() => scrollToTarget(t), 60);
      }
    };
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (sweepScrollHandler) window.removeEventListener('scroll', sweepScrollHandler);
      if (sweepFn) {
        window.removeEventListener('load', sweepFn);
        window.removeEventListener('resize', sweepFn);
      }
      window.removeEventListener('load', onLoad);
      ['load', 'hashchange', 'scroll'].forEach((evt) => {
        window.removeEventListener(evt, unscrollContainers);
      });
      anchorHandlers.forEach(([a, h]) => a.removeEventListener('click', h));
      io?.disconnect();
    };
  }, []);

  return null;
}
