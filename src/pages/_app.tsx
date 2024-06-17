import '@/styles/globals.css';
import { usePathname } from 'next/navigation';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
