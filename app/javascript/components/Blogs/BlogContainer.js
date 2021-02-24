import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getBlogData } from "./Fetches/BlogData";
import PostTile from "./PostTile"

export const BlogContainer = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPosts] = useState({
    id: "",
    title: "",
    caption: "",
    image: ""
  });
  const [isAdmin, setIsAdmin] = useState(false)
  
  useEffect(() => {
    getBlogData().then((body) => {
      setPosts(body);
      let lastIndex = body.length - 1
      setFeaturedPosts({
        id: body[lastIndex].id,
        title: body[lastIndex].title,
        caption: body[lastIndex].caption,
        image: body[lastIndex].image
      })
      if (body[0].userIsAdmin === true) {
        setIsAdmin(true)
      }
    });
  }, []);

  let postTiles = posts.map((post) => {
    return (
      <PostTile
        key={post.id}
        title={post.title}
        image={post.image}
        caption={post.caption}
        body={post.body}
        category={post.category}
      />
    );
  });

  // let featuredImage = "background-image: `url(${Background})`"

  return (
    <div>
      <section className="hero is-medium is-link">
        <div className="hero-body featured-image" style={{ backgroundImage: `url(${featuredPost.image})` }}>
          <div className="featured-flex">
            <p className="title">{featuredPost.title}</p>
            <p className="subtitle">{featuredPost.caption}</p>
          </div>
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
        <div className="blog-flex">
          {postTiles}
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
