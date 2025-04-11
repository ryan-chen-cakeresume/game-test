import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    console.log('> pageview', pathname);
    window.gtag?.('set', { page_location: pathname });
    window.gtag?.('event', 'page_view');
  }, [pathname]);

  return <Component {...pageProps} />;
}
