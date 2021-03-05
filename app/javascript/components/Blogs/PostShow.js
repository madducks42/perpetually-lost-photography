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
      });
      if (body.userIsAdmin === true) {
        setIsAdmin(true);
      }
    });
  }, []);

  return (
    <div className="container mt-6 p-md">
      <h1 className="is-size-1">{post.title}</h1>
      <p className="is-size-7">{post.body}</p>
      {isAdmin === true && (
          <div className="columns admin-flex">
            <Link
              className="admin-link"
              to={`/blog/${id}/update`}
            >
              Update Post
            </Link>
            {/* <Link
              className="admin-link"
              to={`/blog/${id}/destroy`}
            >
              Delete Post
            </Link> */}
          </div>
        )}
    </div>
  );
};

export default PostShow;
