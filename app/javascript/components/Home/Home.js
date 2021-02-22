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
        <div class="columns">
          <div class="column">
            <h5 className="is-size-5 has-text-centered">Follow us on Instagram or Facebook!</h5>
            <div className="flex-row">
              <a href="https://www.instagram.com/perpetuallylostphotography" target="_blank" rel="noreferrer"><img src="/images/instagram.png" alt="Instagram"/></a>
              <a href="https://www.facebook.com/perpetuallylostphotography/" target="_blank" rel="noreferrer"><img src="/images/facebook.png" alt="Facebook"/></a>
            </div>
          </div>
          <div class="column">
            <h4>2020 Trips</h4>
            <ul>
              <li>Sadly most of these were cancelled. Hopefully 2021 will be better!</li>
              <li>January - Costa Rica</li>
              <li>March - Pemaquid Point, Maine</li>
              <li>May - Acadia NP</li>
              <li>July - Ireland</li>
              <li>August - Upstate New York</li>
              <li>October - Stowe, Vermont</li>
              <li>December - Costa Rica?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home