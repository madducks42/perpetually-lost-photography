import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";

import ErrorList from "../Utilities/ErrorList";

export const NewPostForm = () => {
  let defaultFields = {
    title: "",
    caption: "",
    body: "",
    image: "",
    category: "",
  };

  const [newPost, setNewPost] = useState(defaultFields);
  const [errors, setErrors] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect) {
    return <Redirect to="/blog" />;
  }

  const addNewPost = (formData) => {
    fetch("/api/v1/blogs", {
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        if (body.errors) {
          setErrors(body.errors);
        } else {
          setShouldRedirect(true);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const handleChange = (event) => {
    setNewPost({
      ...newPost,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["title", "caption", "body", "image"];
    requiredFields.forEach((field) => {
      if (
        newPost[field].trim() === "" ||
        newPost[field].trim() === "" ||
        newPost[field].trim() === "" ||
        newPost[field].trim() === ""
      ) {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        };
      }
    });

    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validForSubmission()) {
      addNewPost(newPost);
      setNewPost(defaultFields);
    }
  };

  return (
    <div className="container">
      <h3 className="has-text-centered is-size-3 font-blue mt-6 has-text-weight-semibold">
        Add New Post
      </h3>
      <div className="columns">
        <div className="column">
          <form onSubmit={handleSubmit} className="new-post-form callout">
            <ErrorList errors={errors} />

            <div className="field">
              <label className="label">
                Title:
                <div className="control">
                  <input
                    name="title"
                    id="title"
                    type="text"
                    onChange={handleChange}
                    value={newPost.title}
                    className="input"
                  />
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Caption:
                <div className="control">
                  <textarea
                    name="caption"
                    id="caption"
                    type="text"
                    className="textarea"
                    onChange={handleChange}
                    value={newPost.caption}
                  ></textarea>
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Body:
                <div className="control">
                  <textarea
                    name="body"
                    id="body"
                    type="text"
                    className="textarea"
                    onChange={handleChange}
                    value={newPost.body}
                  ></textarea>
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Image:
                <div className="control">
                  <input
                    name="image"
                    id="image"
                    type="text"
                    onChange={handleChange}
                    value={newPost.image}
                    className="input"
                  />
                </div>
              </label>
            </div>

            <div className="field">
              <p className="control has-icons-left">
                <span className="select">
                  <select
                    name="category"
                    value={newPost.category}
                    onChange={handleChange}
                    onBlur={handleChange}
                  >
                    <option value={null}>Select Category </option>
                    <option value="costa-rica">costa-rica</option>
                    <option value="national-parks">national-parks</option>
                    <option value="northeast">northeast</option>
                  </select>
                </span>
              </p>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button" type="submit" value="Submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="flex-column mb-6">
            <h5 className="is-size-5">To add an image:</h5>
            <pre>
              <code>
              &lt;img src=&quot;&quot; &gt;<br/>
              &lt;h6 class=&quot;image-caption&quot;&gt;
                  Add image caption
                  &lt;/h6&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostForm;
