import React from 'react'
import "../styles/Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='container-header'>
       <div className='header-titol'> Sakura Tarot </div>
       <div className='container-nav'>
         <Link to="/" className='header-nav'>Inicio</Link>
         <Link to="/Reading" className='header-nav' >Cartas</Link>
         <Link to="/Result" className='header-nav'>Lectura</Link>
       </div>
    </div>
    </>
  )
}

export default Header