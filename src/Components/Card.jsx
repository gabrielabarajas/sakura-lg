import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <>
        <Link href="#" className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img src="https://www.normaeditorial.com/upload/media/albumes/0001/07/thumb_6340_albumes_big.jpeg" alt="Sakura Card Captor Card" className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Nombre de la Carta</h3>
        </Link>
    </>
)
}

export default Card