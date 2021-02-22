import React from "react";

import ImageTile from "../Utilities/ImageTile"

export const CostaRica = () => {
  let images = []

  for (let i = 1; i < 10; i++) {
    let image = {
      id: i,
      fullSize: `https://perpetually-lost-prod.s3.amazonaws.com/costa-rica/costarica-${i}.jpg`,
      thumbnail: `https://perpetually-lost-prod.s3.amazonaws.com/costa-rica/Thumbnails/costarica-thumbnail-${i}.jpg`
    }
    images.push(image)
  }

  let imageTiles = images.map((image) => {
    // debugger
    return (
      <ImageTile
        key={image.id}
        id={image.id}
        fullSize={image.fullSize}
        thumbnail={image.thumbnail}
      />
    );
  });
  return (
    <div className="container">
      <div className="flex-row">
        {imageTiles}
      </div>
    </div>
  )
}

export default CostaRica