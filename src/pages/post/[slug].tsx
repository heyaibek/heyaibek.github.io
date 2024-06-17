'use client';

import { GetStaticPaths } from 'next';
import { getSortedPostsData } from '@/lib/posts';
import Head from 'next/head';

export default function Post({ post }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1>{post.title}</h1>
      <p className="text-gray-500">Date: {post.date}</p>
      <hr />
      <p dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const posts = await getSortedPostsData();
  const paths = posts.map((item) => ({
    params: { slug: item.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const posts = await getSortedPostsData();
  const { slug } = params;
  return {
    props: {
      post: posts.filter(({ id }) => id == slug)[0],
    },
  };
}
