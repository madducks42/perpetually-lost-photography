import React from "react";

const AboutMe = () => {
  return (
    <div className="columns">
      <div className="column mt-6">
        <img className="profile-image" src="https://perpetually-lost-prod.s3.amazonaws.com/profile_image.jpg" />
      </div>
      <div className="column mt-6">
        <h1 className="is-size-1">About Me</h1>
        <p>Photography and travel have been passions of mine for as long as I can remember. After being involved in several photography clubs in high school I took a hiatus for over a decade before buying a used Nikon DSLR five years ago and quickly fell back into photography. In addition to being a photography nerd, I'm also a comic book nerd, video game nerd, Magic the Gathering nerd, as well as basically being employed as full-time nerd. See a theme there? I begrudgingly reside in New England where I complain about the weather for approximately nine months out of the year and I'm the only one who is positively delighted when it's 95 degrees and 100% humidity.</p> 

        <p>A lot of my travel is in the Northeast area but I occasionally escape to other areas in the US or sometimes even manage to swing an international trip. Landscape and astrophotography are usually my areas of focus but I do enjoy photographing wildlife and occasionally partake in street photography.</p>

        <p>If you're interested in learning more about some of the locations I've visited check out my blog. My partner and I have also started a website that is dedicated to camping in the northeast which can be viewed here - Northeast Camping Reviews.</p>
      </div>
    </div>
  );
};

export default AboutMe;
