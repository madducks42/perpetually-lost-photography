import React from "react";

export const BlogTile = (props) => {

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
            <h6 className="is-size-6">{props.title}</h6>
            <p className="is-size-7">{props.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTile;
