import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getBlogData } from "./Fetches/BlogData";
import BlogTile from "./BlogTile"

export const BlogContainer = () => {
  const [blog, setBlog] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false)
  // debugger
  useEffect(() => {
    getBlogData().then((body) => {
      setBlog(body);
      if (body[0].userIsAdmin === true) {
        setIsAdmin(true)
      }
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
        {isAdmin === true && (
          <div className="blog-admin-flex">
            <Link
              className="button mr-2"
              to="/blogs/new"
            >
              New Blog Post
            </Link>
          </div>
        )}
        {blogTiles}
      </div>
    </div>
  );
};

export default BlogContainer;
