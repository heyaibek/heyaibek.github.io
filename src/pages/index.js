import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto">
      <section>
        <h1>Hi there 👋</h1>
        <p>
          My name is <span className="rainbow">Aibek</span>.
        </p>
        <p>
          I&apos;m an ex-software engineer of{' '}
          <a href="https://spotify.com/" target="_blank" rel="noopener noreferrer">
            Spotify
          </a>{' '}
          and creator of <Link href="/vibely">Vibely</Link>, a mobile app to create music videos
          with an audio visualization. I also produce electronic music as{' '}
          <Link href="/brakata">Brakata</Link> and publish them on streaming services.
        </p>
      </section>
      <section className="mb-6">
        <h2>My Apps 📱</h2>
        <Link href="/vibely">
          <Image
            className="rounded-[32px]"
            src="/vibely.png"
            width={200}
            height={200}
            alt="Vibely Logo"
          />
        </Link>
      </section>
      <section className="mb-6">
        <h2>My Music 🎧</h2>
        <iframe
          title="Brakata Tracks"
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/playlist/25O54nArGPTdhD5j8HapHw?utm_source=generator&theme=0"
          width="100%"
          height="380"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </section>
      <section className="mb-6">
        <h2>Follow me on Twitter 👨🏻‍💻</h2>
        <iframe
          style={{ border: 'none' }}
          frameBorder="0"
          allowFullScreen=""
          width="100%"
          height="600"
          data-tweet-url="https://twitter.com/heyaibek"
          src="data:text/html;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/heyaibek%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20heyaibek%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"
          loading="lazy"
        />
      </section>
    </div>
  );
}
