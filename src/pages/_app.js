import "@/styles/globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  return (
    <main>
      <nav className="text-xs uppercase container mx-auto flex gap-4 font-bold py-4">
        <div className="flex-1" />
        <Link
          className={`${
            pathname === "/" ? "text-slate-900 dark:text-slate-100" : "text-slate-400"
          }`}
          href="/"
        >
          @heyaibek
        </Link>
        <Link
          className={`${
            pathname.indexOf("/vibely") > -1 ? "text-slate-900 dark:text-slate-100" : "text-slate-400"
          }`}
          href="/vibely"
        >
          Vibely
        </Link>
        <Link
          className={`${
            pathname.indexOf("/brakata") > -1 ? "text-slate-900 dark:text-slate-100" : "text-slate-400"
          }`}
          href="/brakata"
        >
          Brakata
        </Link>
        <Link
          className={`${
            pathname.indexOf("/resume") > -1 ? "text-slate-900 dark:text-slate-100" : "text-slate-400"
          }`}
          href="/resume"
        >
          Resume
        </Link>
        <div className="flex-1" />
      </nav>
      <div className="flex gap-1 justify-center mb-3 rainbow">
        <span>~</span>
        <span>~</span>
        <span>~</span>
      </div>
      <Component {...pageProps} />
    </main>
  );
}
