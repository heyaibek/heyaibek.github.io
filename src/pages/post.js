import React from 'react';
import { useParams } from 'react-router';

export const BlogPost = () => {
  const params = useParams();
  return (
    <div>
      <div>BlogPost</div>
      <div>{params.blogId}</div>
    </div>
  );
};
