import React from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import { useParams } from 'react-router';
import { useBlog } from '../hooks/useBlog';
import { Code } from '../components';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const Info = styled.div`
  color: var(--color-text-offset);
  margin-bottom: 16px;
`;

const Post = styled.div`
  img[alt='md-image'] {
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

  .lead {
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.4;
  }

  blockquote {
    margin: 2rem 0;
    padding-left: 35px;
    border-left: 3px solid var(--color-secondary);

    & > p::before {
      content: open-quote;
    }

    & > p::after {
      content: close-quote;
    }
  }

  // code {
  //   word-wrap: break-word;
  //   font-family: Monaco, Menlo, Consolas, Courier New, monospace !important;
  //   font-size: 12px;
  //   font-variant-ligatures: none;
  //   line-height: 1.50001;
  //   tab-size: 4;
  //   white-space: pre;
  //   white-space: pre-wrap;
  //   word-break: normal;
  //   background-color: rgba(var(--sk_foreground_min, 29, 28, 29), 0.04);
  //   border: 1px solid var(--saf-0);
  //   border-radius: 3px;
  //   color: rgba(var(--sk_raspberry_red, 224, 30, 90), 1);
  //   padding: 2px 3px 1px;
  // }
`;

const Header = styled.div`
  display: flex;
  gap: var(--gap);
  margin-bottom: var(--padding);

  a {
    &:before {
      display: none;
    }

    &:hover {
      color: var(--color-primary);
    }
  }
`;

export const BlogPost = () => {
  const blog = useBlog();
  const params = useParams();

  const postIdx = blog.posts.findIndex((post) => post.id === params.postId);

  if (postIdx < 0) {
    return (
      <Post>
        <Header>
          <NavLink to="/">
            <i className="fa fa-arrow-left" /> <span>Go back</span>
          </NavLink>
        </Header>
        <h2>Post Not Found</h2>
      </Post>
    );
  }

  const post = blog.posts[postIdx];

  return (
    <Post>
      <Header>
        <NavLink to="/">
          <i className="fa fa-arrow-left" /> <span>Go back</span>
        </NavLink>
        <Info>{moment(post.date).format('MMMM Do YYYY')}</Info>
      </Header>
      <Markdown
        options={{
          overrides: {
            pre: {
              component: Code,
            },
          },
        }}>
        {post.content}
      </Markdown>
    </Post>
  );
};
