import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getPostData } from "./Fetches/PostData";

export const PostShow = (props) => {
  const [post, setPost] = useState({
    id: "",
    title: "",
    caption: "",
    body: "",
    image: "",
    category: "",
    createdDate: ""
  });
  const [isAdmin, setIsAdmin] = useState(false);

  const id = props.match.params.id;

  useEffect(() => {
    getPostData(id).then((body) => {
      setPost({
        id: body.id,
        title: body.title,
        caption: body.caption,
        body: body.body,
        image: body.image,
        category: body.category,
        createdDate: body.dateCreated
      });
      if (body.userIsAdmin === true) {
        setIsAdmin(true);
      }
    });
  }, []);

  return (
    <div>
      <section className="hero is-large is-info">
        <div
          className="hero-body featured-image"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="post-flex">
            <h1 className="is-size-1 title">{post.title}</h1>
            <p className="subtitle">Posted {post.createdDate}</p>
          </div>
        </div>
      </section>
      <div
        className="container mt-6 p-md"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
      {isAdmin === true && (
        <div className="columns blog-admin-flex">
          <Link className="button" to={`/blog/${id}/update`}>
            Update Post
          </Link>
          <Link className="button ml-2" to={`/blog/${id}/delete`}>
            Delete Post
          </Link>
        </div>
      )}
    </div>
  );
};

export default PostShow;
