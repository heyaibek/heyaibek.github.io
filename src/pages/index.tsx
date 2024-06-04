import Image from 'next/image';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import Head from 'next/head';
import { Divider } from '@/components';
import styled from 'styled-components';

const Projects = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	gap: 1rem;

  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

	@media screen and (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>@heyaibek</title>
      </Head>
      <section>
        <h1>Hi there 👋</h1>
        <p>
          My name is Aibek. I&apos;m an ex-software engineer of{' '}
          <a href="https://spotify.com/" target="_blank" rel="noopener noreferrer">
            Spotify
          </a>{' '}
          and creator of <Link href="/vibely">Vibely</Link>, a mobile app to create music videos
          with an audio visualization. I also produce electronic music as{' '}
          <Link href="/brakata">Brakata</Link> and publish them on streaming services.
        </p>
      </section>
      <Divider />
      <section className="mb">
        <h1>Blog</h1>
        {posts.map(({ id, date, title }) => (
          <li key={id}>
            <span>{date}</span> → <Link href={`/post/${id}`}>{title}</Link>
          </li>
        ))}
      </section>
      <Divider />
      <section className="mb">
        <h2>My Projects 📱</h2>
        <Projects>
          <Link href="/vibely">
            <Image
              className="rounded-32"
              src="/vibely.png"
              width={150}
              height={150}
              alt="Vibely Logo"
            />
            <h3>Vibely - Music Visualizer</h3>
          </Link>
          <Link href="https://github.com/heyaibek/spotify-picker-ios" target="_blank" rel="noopener noreferrer">
            <Image
              className="rounded-32"
              src="/spotify-picker-ios-icon.png"
              width={150}
              height={150}
              alt="Spotify Picker for iOS"
            />
            <h3>Spotify Picker for iOS</h3>
          </Link>
        </Projects>
      </section>
      <Divider />
      <section className="mb">
        <h1>My Music 🎧</h1>
        <iframe
          title="Brakata Tracks"
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/playlist/25O54nArGPTdhD5j8HapHw?utm_source=generator&theme=0"
          width="100%"
          height="380"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getSortedPostsData(),
    },
  };
}
