import React, { useState } from 'react'
import Card from './Card'
import GetCards from '../services/functions'
import RandomArray from '../services/Randomize';

function CardPanel() {
  const [cards,setCards ] = useState([]);

  GetCards(setCards);
  RandomArray(cards);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {cards!==[] ? cards.map((item,index)=>(
                  <Card key = {index} image = {item.sakuraCard} name = {item.spanishName} title = {item.spanishName}/>
                )):"No hay cards"} 
            </div>
        </div>
      </div>

    </>
  )
}

export default CardPanel