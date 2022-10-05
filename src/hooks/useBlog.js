import React, { createContext, useContext, useEffect } from 'react';
import filenames from '../_posts/index.json';

const Post = function (id, date, title, hashtags, content) {
  this.id = id;
  this.date = date;
  this.title = title;
  this.hashtags = hashtags;
  this.content = content;
};

Post.prototype.doSomething = function () {};

const loadPost = async (filename) => {
  const parts = filename.split('.');
  const file = await import(`../_posts/${filename}`);
  const res = await fetch(file.default);
  const data = await res.text();
  return {
    id: parts[1],
    date: parts[0],
    title: parts[1],
    hashtags: [],
    content: data,
  };
};

export const BlogContext = createContext({
  posts: [],
});

export function withBlog(Component) {
  return () => {
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
      setPosts([]);
      filenames.forEach(async (filename) => {
        const post = await loadPost(filename);
        setPosts((prevState) => [...prevState, post]);
      });
    }, []);

    return (
      <BlogContext.Provider value={{ posts }}>
        <Component />
      </BlogContext.Provider>
    );
  };
}

export function useBlog() {
  return useContext(BlogContext);
}
