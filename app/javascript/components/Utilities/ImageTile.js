import React from "react";

export const ImageTile = (props) => {
  let fullSize = props.fullSize
  let thumbnail = props.thumbnail
  
  return (
    <div class="card m-sm">
      <div class="card-image">
        <figure class="image is-4by3">
          <a href={fullSize} data-lightbox="costa-rica" >
            <img className ="gallery-image" src={thumbnail}alt="Campground"/>
        </a>
        </figure>
      </div>
    </div>
  )
}

export default ImageTile

{/* <div>
      <a href={fullSize} data-lightbox="costa-rica" >
        <img className ="gallery-image" src={thumbnail}alt="Campground"/>
      </a>
    </div> */}

