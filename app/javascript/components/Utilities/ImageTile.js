import React from "react";

export const ImageTile = (props) => {
  const fullSize = props.fullSize
  const thumbnail = props.thumbnail
  const name = props.name
  
  return (
    <div className="card m-sm">
      <div className="card-image">
        <figure className="image is-4by3">
          <a href={fullSize} data-lightbox={name} >
            <img className ="gallery-image" src={thumbnail} alt={name}/>
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

