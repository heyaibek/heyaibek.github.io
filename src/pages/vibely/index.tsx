import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { countryFlags, generateStars, ratings } from '@/lib/vibely-utils';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vibely Visualizer for iOS</title>
      </Head>
      <h1>Vibely</h1>
      <p>Vibely enables creators to visualize & share music</p>
      <a
        href="https://www.producthunt.com/posts/vibely-3?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-vibely&#0045;3"
        target="_blank"
        style={{ display: 'block', marginBottom: '1rem' }}
      >
        <Image
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=463509&theme=light"
          alt="Product Hunt"
          width="250" height="54"
        />
      </a>
      <div className="mb">
        <Link href="/post/release-notes-v3.0.0">
          A New Era for Vibely v3.0.0{' '}
          <span role="img" aria-label="shine">
            🌟
          </span>
        </Link>
      </div>
      <section className="mb">
        <video
          muted
          loop
          autoPlay
          playsInline
          poster="/vibely-preview-placeholder.jpg"
          style={{ width: '100%', maxWidth: 200, borderRadius: 8 }}
          preload="none"
        >
          <source src="/vibely-preview-video.webm" type="video/webm" />
          <source src="/vibely-preview-video.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="mb">
        <h1>Download</h1>
        <div className="app-badges flex items-center" id="download">
          <a
            href="https://apps.apple.com/app/id1528056717"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="ios" src="/app-badge-ios.png" alt="iOS" width={140} height={50} />
          </a>
        </div>
      </section>
      <section className="mb">
        <h1>User Reviews</h1>
        <p>3.4 of 5.0 from 543 ratings</p>
        <div>
          {ratings.map((r, i) => (
            <div key={i}>
              <span>
                <span className="stars">{generateStars(r.rating)}</span>
                <span className="country">
                  <span className="flag" role="img" aria-label={r.from}>
                    {countryFlags[r.from]}
                  </span>{' '}
                  <span>{r.from}</span>
                </span>
              </span>
              <span>{r.title}</span>
              <span>{r.message}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mb">
        <h1>Follow Us</h1>
        <div>
          <a href="https://instagram.com/vibely.app" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-xl" />
          </a>
          <a href="https://tiktok.com/@vibely.app" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok fa-xl" />
          </a>
        </div>
      </section>
    </div>
  );
}
