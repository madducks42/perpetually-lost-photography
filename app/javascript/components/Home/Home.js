import React from "react";

import AboutMe from "./AboutMe"

export const Home = () => {
  return (
    <div>
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body landing-image"></div>
      </section>
      <div className="container">
        < AboutMe />
      </div>
    </div>
  )
}

export default Home