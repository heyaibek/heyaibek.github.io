import React from 'react';
import styled from 'styled-components';
import { useBlog } from '../hooks/useBlog';
import { NavLink } from 'react-router-dom';

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
    max-width: 150px;
    width: 100%;
    color: var(--color-text-offset);
  }

  & > .title {
    transition: margin-left 0.25s ease;
  }

  &:hover > .title {
    margin-left: 8px;
  }
`;

export const PostsWidget = () => {
  const blog = useBlog();
  return (
    <div>
      {blog.posts.map((post) => (
        <Post key={post.id} to={`/blog/${post.id}`}>
          <div className="info">{new Date(post.date).toLocaleDateString()}</div>
          <div className="title">{post.title}</div>
        </Post>
      ))}
    </div>
  );
};
