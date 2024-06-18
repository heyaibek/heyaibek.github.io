import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { countryFlags, generateStars, ratings } from '@/lib/vibely-utils';

export default function Home() {
  return (
    <div className="text-center">
      <Head>
        <title>Vibely Visualizer for iOS</title>
      </Head>
      <h1>Vibely</h1>
      <p>Vibely enables creators to visualize & share music</p>
      <section className="flex justify-center">
        <video
          muted
          loop
          autoPlay
          playsInline
          poster="/vibely-assets/vibely-preview-placeholder.jpg"
          style={{ width: '100%', maxWidth: 200, borderRadius: 8 }}
          preload="none">
          <source src="/vibely-assets/vibely-preview-video.webm" type="video/webm" />
          <source src="/vibely-assets/vibely-preview-video.mp4" type="video/mp4" />
        </video>
      </section>

      <section>
        <h2>Download</h2>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          <Link
            href="https://apps.apple.com/app/id1528056717"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              className="ios"
              src="/vibely-assets/vibely-app-store-badge.png"
              alt="iOS"
              width="140"
              height="50"
            />
          </Link>
          <Link
            href="https://www.producthunt.com/posts/vibely-3?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-vibely&#0045;3"
            target="_blank">
            <Image
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=463509&theme=light"
              alt="Product Hunt"
              width="220"
              height="50"
            />
          </Link>
        </div>
      </section>
      <section>
        <h2>User Reviews</h2>
        <p>3.4 of 5.0 from 543 ratings</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ratings.map((r, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="flex flex-row gap-2">
                <span className="text-orange-500">{generateStars(r.rating)}</span>
                <span className="">
                  <span className="flag" role="img" aria-label={r.from}>
                    {countryFlags[r.from]}
                  </span>{' '}
                  <span>{r.from}</span>
                </span>
              </span>
              <span className="font-semibold">{r.title}</span>
              <span>{r.message}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Follow Us</h2>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          <a
            href="https://instagram.com/vibely.app"
            className="text-pink-600"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-instagram fa-xl" />
          </a>
          <a href="https://tiktok.com/@vibely.app" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok fa-xl" />
          </a>
        </div>
      </section>
      <section>
        <h2>Legal</h2>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms Of Use</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </div>
      </section>
    </div>
  );
}
