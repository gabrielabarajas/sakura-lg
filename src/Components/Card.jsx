import React from 'react'
import "../styles/card.css"

function Card({key, image, name, title}) {
  return (
    <>
        <div>
            <img className = "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8" key = {key} src ={image} alt ={name}/>
            <p className="mt-1 text-lg font-medium text-gray-900">{title}</p>
        </div>
    </>
)
}

export default Card

