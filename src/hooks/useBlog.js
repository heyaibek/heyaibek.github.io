import React, { createContext, useContext, useEffect } from 'react';
import PostsData from '../_posts/index.json';

const Post = function (id, date, title, hashtags, content) {
  this.id = id;
  this.date = date;
  this.title = title;
  this.hashtags = hashtags;
  this.content = content;
};

Post.prototype.doSomething = function () {};

const loadPost = async (filename) => {
  const file = await import(`../_posts/${filename}`);
  const res = await fetch(file.default);
  return await res.text();
};

export const BlogContext = createContext({
  posts: [],
});

export function withBlog(Component) {
  return () => {
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
      setPosts([]);
      PostsData.forEach(async (post) => {
        const content = await loadPost(post.filename);
        setPosts((prevState) => [
          ...prevState,
          {
            ...post,
            content,
          },
        ]);
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
