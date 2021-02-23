import React from "react";

import ImageTile from "../Utilities/ImageTile"
import { randomizeImages } from "../Utilities/RandomizeImages"

export const Northeast = () => {
  let images = []

  for (let i = 1; i < 33; i++) {
    let image = {
      id: i,
      name: "northeast",
      fullSize: `https://perpetually-lost-prod.s3.amazonaws.com/northeast/FullSize/northeast-${i}.jpg`,
      thumbnail: `https://perpetually-lost-prod.s3.amazonaws.com/northeast/Thumbnails/northeast-thumbnail-${i}.jpg`
    }
    images.push(image)
  }

  randomizeImages(images)

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

export default Northeast