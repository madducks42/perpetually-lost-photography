import React from "react";
import { Link } from "react-router-dom";

export const PostTile = (props) => {

  return (
    <div className="container">
      <div className="card mt-6 mb-6">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={props.image}
              alt={props.title}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
          <p className="card-title">
                <Link className="font-red" to={`/blog/${props.id}`}>{props.title}</Link>
              </p>
              <p className="subtitle is-6">{props.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTile;
