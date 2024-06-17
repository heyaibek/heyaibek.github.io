import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import Image from 'next/image';

export default function Home({ posts }) {
  return (
    <div className="text-center flex flex-col h-full items-center justify-center">
      <h2>Hi there 👋</h2>
      <Image
        className="rounded-full"
        src="https://avatars.githubusercontent.com/u/4330131"
        alt="Profile Picture"
        width="100"
        height="100"
      />
      <p>
        My name is Aibek. I&apos;m an ex-software engineer of Spotify and creator of{' '}
        <Link href="/vibely">Vibely</Link>, a mobile app to create music videos with an audio
        visualization. I also produce electronic music as{' '}
        <Link href="https://open.spotify.com/playlist/25O54nArGPTdhD5j8HapHw" target="_blank">
          Brakata
        </Link>{' '}
        and publish them on streaming services.
      </p>
      <h2>Projects</h2>
      <Link href="/vibely">Vibely - Music Visualizer</Link>
      <Link href="https://github.com/heyaibek/spotify-picker-ios" target="_blank">
        Spotify Picker for iOS
      </Link>
      <Link href="https://github.com/heyaibek/vibely-ui-ios" target="_blank">
        VibelyUI for iOS
      </Link>
      <br />
      <h2>Posts</h2>
      {posts.map(({ id, _, title }) => (
        <Link key={id} href={`/post/${id}`}>
          {title}
        </Link>
      ))}
      <br />
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
