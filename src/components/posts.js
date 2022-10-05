import React, {useEffect} from "react";
import Markdown from "markdown-to-jsx";
import {Code} from "./";
import filenames from '../_posts/index.json';

export const Posts = () => {
  const [posts, setPosts] = React.useState([]);

  const loadPost = async (filename) => {
    const file = await import(`../_posts/${filename}`);
    const res = await fetch(file.default);
    const data = await res.text();
    return (
      <Markdown
        key={filename}
        options={{
          overrides: {
            pre: {
              component: Code,
            }
          }
        }}
      >{data}</Markdown>
    );
  };

  useEffect(() => {
    setPosts([]);
    filenames.forEach(async filename => {
      const post = await loadPost(filename);
      setPosts(prevState => [...prevState, post]);
    })
  }, []);

  return (
    <div>
      <h2>Blog posts</h2>
      <div>{posts}</div>
    </div>
  )
};
