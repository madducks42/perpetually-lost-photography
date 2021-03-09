import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";

import ErrorList from "../Utilities/ErrorList";

const UpdatePostForm = (props) => {
  let defaultFields = {
    title: "",
    caption: "",
    body: "",
    image: "",
    category: "",
  };

  const [updatedPost, setUpdatedPost] = useState(defaultFields);
  const [errors, setErrors] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    let id = props.match.params.id;
    fetch(`/api/v1/blogs/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((body) => {
        setUpdatedPost(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const updatePost = (formData) => {
    let id = props.match.params.id;
    fetch(`/api/v1/blogs/${id}`, {
      method: "PATCH",
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
          setShouldRedirect(body.id);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const handleChange = (event) => {
    setUpdatedPost({
      ...updatedPost,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["title", "caption", "body", "image"];
    requiredFields.forEach((field) => {
      if (
        updatedPost[field].trim() === "" ||
        updatedPost[field].trim() === "" ||
        updatedPost[field].trim() === "" ||
        updatedPost[field].trim() === ""
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
      updatePost(updatedPost);
    }
  };

  if (shouldRedirect) {
    return <Redirect to={`/blog/${props.match.params.id}`} />;
  }

  return (
    <div className="container">
      <h3 className="has-text-centered is-size-3 font-blue mt-6 has-text-weight-semibold">
        Update Post
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
                    value={updatedPost.title}
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
                    value={updatedPost.caption}
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
                    value={updatedPost.body}
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
                    value={updatedPost.image}
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
                    value={updatedPost.category}
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

export default UpdatePostForm;
