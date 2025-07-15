"use client"; // Asegúrate de marcar el archivo como componente cliente

import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <div>
        {posts.map((post) => (
          <div key={post.slug.current}>
            <h2>{post.title}</h2>
            <p>{post.publishedAt}</p>
            <div>
              <p>{post.content[0]?.children[0]?.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
