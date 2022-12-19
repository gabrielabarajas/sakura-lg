import React, { useState } from 'react'
import Card from './Card'
import GetCards from '../services/functions'

function CardPanel() {
  const [cards,setCards ] = useState([]);
  GetCards(setCards);

  return (
    <>
        <div className="cont-cards">
            {cards!==[] ? cards.map((item,index)=>(
              <Card key = {index} image = {item.sakuraCard} name = {item.spanishName} title = {item.spanishName}/>
            )):"No hay cards"}
          </div>
    </>
  )
}

export default CardPanel