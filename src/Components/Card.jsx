import React, { useState } from 'react';
import "../styles/card.css";
import ReactCardFlip from 'react-card-flip';
import backFace from '../images/SakuraBackFace.jpg'

function Card({key, image, name, title}) {

const [isFlipped, setIsFlipped] = useState(false);

const handleClick = (e) =>{
    setIsFlipped(!isFlipped);
}
  
return (
    <>
        <div className="group" id="card-color">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <ReactCardFlip isFlipped={isFlipped}>
                    <img src ={backFace} alt ='back face card' className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-3xl" onClick={handleClick}/>
                    <img key = {key} src ={image} alt ={name} className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-3xl" onClick={handleClick}/>
                </ReactCardFlip>

            </div>
        </div>
    </>
)
}

export default Card

