import React from 'react'
import "../styles/Header.css"

function Header() {
  return (
    <>
    <div className='container-header'>
       <div className='header-titol'> Sakura Tarot </div>
       <div className='container-nav'>
         <p className='header-nav'>Inicio</p>
         <p className='header-nav'>Selección de cartas</p>
         <p className='header-nav'>Lectura de cartas</p>
       </div>
    </div>
    </>
  )
}

export default Header