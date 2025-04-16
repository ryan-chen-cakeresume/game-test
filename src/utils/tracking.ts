declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: any;
  }
}

export function trackEvent(event: string, params: Record<string, unknown>) {
  if (window.gtag) {
    window.gtag('event', event, params);
  } else {
    console.log('[trackEvent]', event, params);
  }
}
