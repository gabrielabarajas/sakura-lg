import React from 'react'
import "../styles/ResultPanel.css"
import backFace from '../images/SakuraBackFace.jpg'

function ResultCard() {
  return (
    <>
        <div className='cont-result-card'>
            <div className='cont-img-result'>
                <p className='txt-result'>Tiempo</p>
                <img className='img-result' src={backFace} alt="" />
            </div>
            <div className='cont-txt-result'>
                <p className='txt-name-result'>nombre</p>
                <p className='txt-desc-result'>descripción</p>
            </div>
        </div>
    </>
  )
}

export default ResultCard