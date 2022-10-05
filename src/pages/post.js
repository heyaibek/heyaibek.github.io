import React from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import { useParams } from 'react-router';
import { useBlog } from '../hooks/useBlog';
import { Code } from '../components';

const Info = styled.div`
  color: var(--color-text-offset);
`;

const Post = styled.div`
  img[alt='markdown-image'] {
    max-width: 100%;
    max-height: 500px;
    margin: 0 auto;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 24px;
  }
`;

export const BlogPost = () => {
  const blog = useBlog();
  const params = useParams();

  const postIdx = blog.posts.findIndex((post) => post.id === params.postId);

  if (postIdx < 0) {
    return <div>404</div>;
  }

  const post = blog.posts[postIdx];

  return (
    <Post>
      <Info>{new Date(post.date).toLocaleDateString()}</Info>
      <Markdown
        options={{
          overrides: {
            pre: {
              component: Code,
            },
          },
        }}
      >
        {post.content}
      </Markdown>
    </Post>
  );
};
