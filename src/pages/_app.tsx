import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-full">
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <div className="container mx-auto grow">
        <Component {...pageProps} />
      </div>
      <footer>
        <span>&lt;/&gt; by @heyaibek</span>
        <span> · </span>
        <span>
          Design inspired from{' '}
          <Link href="https://thebookofshaders.com/" target="_blank">
            The Book of Shaders
          </Link>
        </span>
        <span> · </span>
        <Link href="/imprint">Imprint</Link>
      </footer>
    </div>
  );
}
