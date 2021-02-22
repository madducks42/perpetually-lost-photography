import React from "react";

export const CostaRica = () => {
  return (
    <div className="lightbox-container-show">
      <a href="https://perpetually-lost-prod.s3.amazonaws.com/costa-rica/costarica-1.jpg" data-lightbox="carousel" data-title="Campground Images">
        <img className ="galleryimage" src="https://perpetually-lost-prod.s3.amazonaws.com/costa-rica/costarica-1.jpg" alt="Campground"/>
      </a>
      <a href="https://perpetually-lost-prod.s3.amazonaws.com/costa-rica/costarica-2.jpg" data-lightbox="carousel" data-title="Campground Images">
        <img className ="galleryimage" src="https://perpetually-lost-prod.s3.amazonaws.com/costa-rica/costarica-2.jpg" alt="Campground"/>
      </a>
    </div>
  )
}

export default CostaRica