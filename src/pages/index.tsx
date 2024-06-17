import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Home({ posts }) {
  return (
    <div>
      {posts.map(({ id, date, title }) => (
        <li key={id}>
          <span>{date}</span> → <Link href={`/post/${id}`}>{title}</Link>
        </li>
      ))}
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
