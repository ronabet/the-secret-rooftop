import { useEffect } from 'react';
import { bindOutboundContactTracking, initAnalytics } from '../lib/analytics';

/**
 * Boots Google Tag Manager / gtag and binds click tracking for tel + WhatsApp links.
 * Safe to mount once at the app root.
 */
export function AnalyticsBootstrap() {
  useEffect(() => {
    initAnalytics();
    return bindOutboundContactTracking();
  }, []);

  return null;
}
