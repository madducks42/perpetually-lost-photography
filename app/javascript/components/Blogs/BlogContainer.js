import React, { useState, useEffect } from "react";

import { getBlogData } from "./Fetches/BlogData";
import BlogTile from "./BlogTile"

export const BlogContainer = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    getBlogData().then((body) => {
      setBlog(body);
    });
  }, []);

  let blogTiles = blog.map((blog) => {
    return (
      <BlogTile
        key={blog.id}
        title={blog.title}
        image={blog.image}
        caption={blog.caption}
        body={blog.body}
        category={blog.category}
      />
    );
  });

  return (
    <div>
      <section className="hero is-medium is-link">
        <div className="hero-body">
          <p className="title">Medium hero</p>
          <p className="subtitle">Medium subtitle</p>
        </div>
      </section>
      <div className="container">
        {blogTiles}
      </div>
    </div>
  );
};

export default BlogContainer;
