import React from "react";

import ImageTile from "../Utilities/ImageTile"

export const CostaRica = () => {
  let images = []

  for (let i = 1; i < 110; i++) {
    let image = {
      id: i,
      name: "costa-rica",
      fullSize: `https://perpetually-lost-prod.s3.amazonaws.com/costa-rica/FullSize/costarica-${i}.jpg`,
      thumbnail: `https://perpetually-lost-prod.s3.amazonaws.com/costa-rica/Thumbnails/costarica-thumbnail-${i}.jpg`
    }
    images.push(image)
  }

  let imageTiles = images.map((image) => {
    return (
      <ImageTile
        key={image.id}
        id={image.id}
        name={image.name}
        fullSize={image.fullSize}
        thumbnail={image.thumbnail}
      />
    );
  });
  return (
    <div className="container is-widescreen">
      <div className="images-container"> 
        {imageTiles}
      </div>  
    </div>
  )
}

export default CostaRica