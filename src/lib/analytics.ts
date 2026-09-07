type LeadMethod = 'whatsapp_form';
type ContactMethod = 'whatsapp' | 'phone';

export type AnalyticsLocation =
  | 'floating'
  | 'header'
  | 'drawer'
  | 'footer'
  | 'contact_form'
  | 'form_success'
  | 'accessibility'
  | 'unknown';

type TrackPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GTM_ID = (import.meta.env.VITE_GTM_ID as string | undefined)?.trim() || '';
const GA4_ID = (import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined)?.trim() || '';
const ADS_ID = (import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined)?.trim() || '';
const ADS_LEAD = (import.meta.env.VITE_ADS_CONVERSION_LEAD as string | undefined)?.trim() || '';
const ADS_WHATSAPP = (import.meta.env.VITE_ADS_CONVERSION_WHATSAPP as string | undefined)?.trim() || '';
const ADS_PHONE = (import.meta.env.VITE_ADS_CONVERSION_PHONE as string | undefined)?.trim() || '';

/** Session dedupe windows to avoid double-counting rapid repeat clicks. */
const DEDUPE_MS = {
  generate_lead: 30_000,
  whatsapp_click: 2_000,
  phone_click: 2_000,
} as const;

const lastFiredAt = new Map<string, number>();

function canFire(key: string, windowMs: number): boolean {
  const now = Date.now();
  const previous = lastFiredAt.get(key) ?? 0;
  if (now - previous < windowMs) return false;
  lastFiredAt.set(key, now);
  return true;
}

function pushDataLayer(event: string, payload: TrackPayload = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...payload,
  });
}

function gtagEvent(eventName: string, payload: TrackPayload = {}) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, {
    ...payload,
    transport_type: 'beacon',
  });
}

function fireAdsConversion(sendTo: string, payload: TrackPayload = {}) {
  if (!sendTo || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: sendTo,
    ...payload,
    transport_type: 'beacon',
  });
}

function loadScript(src: string, attributes: Record<string, string> = {}) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  Object.entries(attributes).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });
  document.head.appendChild(script);
}

function initGtagBase() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments as unknown as Record<string, unknown>);
    };
  }
  window.gtag('js', new Date());
}

/**
 * Prefer GTM when configured. Otherwise load gtag directly for GA4 / Google Ads.
 * Avoid loading both to prevent duplicate hits.
 */
export function initAnalytics() {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  if (GTM_ID) {
    window.dataLayer.push({
      'gtm.start': Date.now(),
      event: 'gtm.js',
    });
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`);
    return;
  }

  if (!GA4_ID && !ADS_ID) return;

  initGtagBase();
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID || ADS_ID)}`);

  if (GA4_ID) {
    window.gtag?.('config', GA4_ID, { send_page_view: true });
  }
  if (ADS_ID) {
    window.gtag?.('config', ADS_ID);
  }
}

export function getAnalyticsConfigSummary() {
  return {
    mode: GTM_ID ? 'gtm' : GA4_ID || ADS_ID ? 'gtag' : 'none',
    gtmId: GTM_ID || null,
    ga4Id: GA4_ID || null,
    adsId: ADS_ID || null,
    hasLeadConversion: Boolean(ADS_LEAD),
    hasWhatsappConversion: Boolean(ADS_WHATSAPP),
    hasPhoneConversion: Boolean(ADS_PHONE),
  };
}

/** Primary conversion: contact form submitted successfully (opens WhatsApp with filled lead). */
export function trackGenerateLead(details: {
  location?: AnalyticsLocation;
  eventType?: string;
  guestCount?: number;
}) {
  if (!canFire('generate_lead', DEDUPE_MS.generate_lead)) return;

  const payload: TrackPayload = {
    method: 'whatsapp_form' satisfies LeadMethod,
    location: details.location ?? 'contact_form',
    event_type: details.eventType || undefined,
    guest_count: details.guestCount,
    // Helps Ads/GA4 distinguish from raw WhatsApp taps.
    lead_source: 'website_form',
  };

  pushDataLayer('generate_lead', payload);
  gtagEvent('generate_lead', payload);
  fireAdsConversion(ADS_LEAD, payload);
}

/** Secondary / micro-conversion: raw WhatsApp link click (not form lead). */
export function trackWhatsappClick(location: AnalyticsLocation = 'unknown') {
  if (!canFire(`whatsapp_click:${location}`, DEDUPE_MS.whatsapp_click)) return;

  const payload: TrackPayload = {
    method: 'whatsapp' satisfies ContactMethod,
    location,
    lead_source: 'direct_click',
  };

  pushDataLayer('whatsapp_click', payload);
  gtagEvent('whatsapp_click', payload);
  fireAdsConversion(ADS_WHATSAPP, payload);
}

/** Secondary / micro-conversion: phone / click-to-call. */
export function trackPhoneClick(location: AnalyticsLocation = 'unknown') {
  if (!canFire(`phone_click:${location}`, DEDUPE_MS.phone_click)) return;

  const payload: TrackPayload = {
    method: 'phone' satisfies ContactMethod,
    location,
    lead_source: 'direct_click',
  };

  pushDataLayer('phone_click', payload);
  gtagEvent('phone_click', payload);
  fireAdsConversion(ADS_PHONE, payload);
}

function resolveLocation(anchor: HTMLAnchorElement): AnalyticsLocation {
  const explicit = anchor.dataset.trackLocation as AnalyticsLocation | undefined;
  if (explicit) return explicit;

  if (anchor.closest('#contact')) return 'contact_form';
  if (anchor.closest('header') || anchor.closest('#mobile-nav-drawer')) {
    return anchor.closest('#mobile-nav-drawer') ? 'drawer' : 'header';
  }
  if (anchor.closest('footer')) return 'footer';
  if (anchor.classList.contains('a11y-widget-trigger') || anchor.closest('.a11y-widget')) {
    return 'accessibility';
  }
  if (anchor.getAttribute('aria-label')?.includes('וואטסאפ') || anchor.href.includes('הגג הסודי')) {
    return 'floating';
  }
  return 'unknown';
}

function isWhatsappHref(href: string): boolean {
  return /wa\.me\/|api\.whatsapp\.com|whatsapp:/i.test(href);
}

function isPhoneHref(href: string): boolean {
  return href.startsWith('tel:');
}

/**
 * Capture-phase listener for tel/WhatsApp anchors.
 * Form submit uses trackGenerateLead separately and does not go through <a>,
 * so it will not double-count as whatsapp_click.
 */
export function bindOutboundContactTracking() {
  const handler = (event: MouseEvent) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const anchor = target.closest('a');
    if (!(anchor instanceof HTMLAnchorElement)) return;

    // Explicit opt-out for rare cases (e.g. accessibility coordinator WhatsApp).
    if (anchor.dataset.track === 'false') return;

    const href = anchor.href || '';
    const location = resolveLocation(anchor);

    if (isWhatsappHref(href)) {
      trackWhatsappClick(location);
      return;
    }

    if (isPhoneHref(href)) {
      trackPhoneClick(location);
    }
  };

  document.addEventListener('click', handler, true);
  return () => document.removeEventListener('click', handler, true);
}
