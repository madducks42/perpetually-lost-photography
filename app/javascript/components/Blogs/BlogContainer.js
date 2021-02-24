import React from "react";

export const BlogContainer = () => {
  return (
    <div>
      <section className="hero is-medium is-link">
        <div className="hero-body">
          <p className="title">Medium hero</p>
          <p className="subtitle">Medium subtitle</p>
        </div>
      </section>
      <div className="container">
        <div className="card mt-6 mb-6">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
              eros. Donec id elit non mi porta gravida at eget metus. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
