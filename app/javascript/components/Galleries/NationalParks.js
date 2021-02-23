import React from "react";

import ImageTile from "../Utilities/ImageTile"

export const NationalParks = () => {
  let images = []

  for (let i = 1; i < 67; i++) {
    let image = {
      id: i,
      name: "national-parks",
      fullSize: `https://perpetually-lost-prod.s3.amazonaws.com/national-parks/FullSize/nationalparks-${i}.jpg`,
      thumbnail: `https://perpetually-lost-prod.s3.amazonaws.com/national-parks/Thumbnails/nationalparks-thumbnail-${i}.jpg`
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

export default NationalParks