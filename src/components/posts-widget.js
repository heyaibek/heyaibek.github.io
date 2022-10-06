import React from 'react';
import styled from 'styled-components';
import { useBlog } from '../hooks/useBlog';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const Post = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-family: var(--font-title);
  font-weight: 400;

  &:before {
    display: none;
  }

  &:hover {
    color: var(--color-primary);
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  & > .info {
    font-size: 1rem;
    max-width: 110px;
    width: 100%;
    color: var(--color-text-offset);
  }
`;

const Empty = styled.div`
  &:after {
    content: "Ups! It seems, I didn't write anything yet.";
  }
`;

export const PostsWidget = () => {
  const blog = useBlog();
  const posts = blog.posts;

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} to={`/blog/${post.id}`}>
          <div className="info">{moment(post.date).format('MMM Do YY')}</div>
          <div className="title">{post.title}</div>
        </Post>
      ))}
      {posts.length === 0 && <Empty />}
    </div>
  );
};
