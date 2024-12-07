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
        It&apos;s Aibek - an indie hacker building <Link href="/vibely">Vibely</Link>, an iOS engineer at <Link href="https://ebay.com" target="_blank">eBay</Link>, an ex-software engineer of <Link href="https://spotify.com" target="_blank">Spotify</Link> and a music producer aka <Link href="https://open.spotify.com/playlist/25O54nArGPTdhD5j8HapHw" target="_blank">Brakata</Link>.
      </p>
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
