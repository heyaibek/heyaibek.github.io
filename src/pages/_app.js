import '@/styles/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  return (
    <main>
      <nav className="text-xs uppercase container mx-auto flex gap-6 font-bold py-10">
        <div className="flex-1" />
        <Link
          className={`${
            pathname === '/' ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400'
          }`}
          href="/">
          @heyaibek
        </Link>
        <Link
          className={`${
            pathname.indexOf('/vibely') > -1
              ? 'text-slate-900 dark:text-slate-100'
              : 'text-slate-400'
          }`}
          href="/vibely">
          Vibely
        </Link>
        <Link
          className={`${
            pathname.indexOf('/brakata') > -1
              ? 'text-slate-900 dark:text-slate-100'
              : 'text-slate-400'
          }`}
          href="/brakata">
          Brakata
        </Link>
        <Link
          className="text-slate-400"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/heyaibek/">
          LinkedIn
        </Link>
        <div className="flex-1" />
      </nav>
      <div className="flex gap-1 justify-center mb-10 rainbow">
        <span>~</span>
        <span>~</span>
        <span>~</span>
      </div>
      <div className="px-5">
        <Component {...pageProps} />
      </div>

      <div className="text-center mt-10">
        <Link href="/">
          <span className="rainbow font-semibold text-xs font-mono">
            &copy; {new Date().getFullYear()} &lt;/&gt; by @heyaibek
          </span>
        </Link>
      </div>

      <div style={{ height: 50 }} />
    </main>
  );
}
