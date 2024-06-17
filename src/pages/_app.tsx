import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-full">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/vibely">Vibely</Link>
        <Link href="https://open.spotify.com/playlist/25O54nArGPTdhD5j8HapHw" target="_blank">
          Brakata
        </Link>
        <Link href="https://github.com/heyaibek/" target="_blank">
          Github
        </Link>
        <Link href="https://linkedin.com/in/heyaibek/" target="_blank">
          LinkedIn
        </Link>
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
