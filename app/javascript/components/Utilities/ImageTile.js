import React from "react";

export const ImageTile = (props) => {
  let fullSize = props.fullSize
  let thumbnail = props.thumbnail
  
  return (
    <div>
      <a href={fullSize} data-lightbox="costa-rica" >
        <img className ="gallery-image" src={thumbnail}alt="Campground"/>
      </a>
    </div>
  )
}

export default ImageTile